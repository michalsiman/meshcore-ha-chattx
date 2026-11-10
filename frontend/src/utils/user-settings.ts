/**
 * Panel settings shared by everyone: there is one MeshCore companion, so
 * the settings are kept once in Home Assistant (the integration's
 * `meshcore_chattx/get_settings` / `set_settings`), the same for every
 * user, browser and device. A change made anywhere reaches every open
 * panel at once through `meshcore_chattx/subscribe_settings`.
 *
 * The API mirrors localStorage (string values under the "chattx-…" keys),
 * so each setting keeps its own format. Until the settings are loaded (and
 * in tests) it reads and writes localStorage. On the first load, settings
 * this browser kept locally, or that an earlier version kept in the user's
 * Home Assistant data, are added where the shared settings have none yet,
 * and removed there.
 */
import type { HomeAssistant } from '../types';

/** Where 0.14.x kept the settings, per Home Assistant user. */
const OLD_USER_DATA_KEY = 'chattx';
/** Not a panel setting: the quick reply has its own shared store. */
const NOT_SETTINGS = new Set(['chattx-heard-reply']);
export const SETTINGS_CHANGED = 'chattx-settings-changed';

let data: Record<string, string> = {};
let loaded = false;
let hassRef: HomeAssistant | undefined;
let pending: Record<string, string | null> = {};
let saveTimer: ReturnType<typeof setTimeout> | null = null;

function local(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function changed(): void {
  window.dispatchEvent(new CustomEvent(SETTINGS_CHANGED));
}

function send(): void {
  saveTimer = null;
  if (!hassRef || Object.keys(pending).length === 0) return;
  const changes = pending;
  pending = {};
  void hassRef.callWS({ type: 'meshcore_chattx/set_settings', changes }).catch(() => {
    // Not sent (offline): try again with the next change.
    pending = { ...changes, ...pending };
  });
}

function queue(key: string, value: string | null): void {
  pending[key] = value;
  // Typing a draft changes a setting per key press; send one update.
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(send, 400);
}

export function getItem(key: string): string | null {
  if (!loaded) return local()?.getItem(key) ?? null;
  return key in data ? data[key] : null;
}

export function setItem(key: string, value: string): void {
  if (!loaded) {
    local()?.setItem(key, value);
    return;
  }
  if (data[key] === value) return;
  data = { ...data, [key]: value };
  queue(key, value);
  changed();
}

export function removeItem(key: string): void {
  if (!loaded) {
    local()?.removeItem(key);
    return;
  }
  if (!(key in data)) return;
  const next = { ...data };
  delete next[key];
  data = next;
  queue(key, null);
  changed();
}

function strings(value: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (typeof v === 'string' && k.startsWith('chattx-') && !NOT_SETTINGS.has(k)) out[k] = v;
    }
  }
  return out;
}

/** Load the shared settings, bring over older local ones, follow changes. */
export async function initUserSettings(hass: HomeAssistant): Promise<void> {
  hassRef = hass;
  if (loaded) return;
  let shared: Record<string, string>;
  try {
    const result = await hass.callWS<{ values: unknown }>({ type: 'meshcore_chattx/get_settings' });
    shared = strings(result?.values);
  } catch {
    return; // older backend: stays on localStorage
  }
  const additions: Record<string, string> = {};
  const add = (key: string, value: string) => {
    if (!(key in shared) && !(key in additions)) additions[key] = value;
  };
  // Settings of this browser.
  const store = local();
  if (store) {
    for (let i = store.length - 1; i >= 0; i--) {
      const key = store.key(i);
      if (!key || !key.startsWith('chattx-') || NOT_SETTINGS.has(key)) continue;
      const value = store.getItem(key);
      if (value !== null) add(key, value);
      store.removeItem(key);
    }
  }
  // Settings an earlier version kept per user.
  try {
    const old = await hass.callWS<{ value: unknown }>({ type: 'frontend/get_user_data', key: OLD_USER_DATA_KEY });
    const values = strings(old?.value);
    if (Object.keys(values).length) {
      for (const [k, v] of Object.entries(values)) add(k, v);
      await hass.callWS({ type: 'frontend/set_user_data', key: OLD_USER_DATA_KEY, value: null });
    }
  } catch {
    // nothing kept there
  }
  data = { ...shared, ...additions };
  loaded = true;
  for (const [k, v] of Object.entries(additions)) queue(k, v);
  changed();
  try {
    await hass.connection.subscribeMessage<{ values: unknown }>((event) => {
      const next = strings(event?.values);
      // Keep local changes that are not sent yet.
      for (const [k, v] of Object.entries(pending)) {
        if (v === null) delete next[k];
        else next[k] = v;
      }
      if (JSON.stringify(next) === JSON.stringify(data)) return;
      data = next;
      changed();
    }, { type: 'meshcore_chattx/subscribe_settings' });
  } catch {
    // Changes from other devices show on the next load.
  }
}

/** For tests. */
export function _resetUserSettings(): void {
  data = {};
  loaded = false;
  hassRef = undefined;
  pending = {};
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = null;
}
