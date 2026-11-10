/**
 * Images from messages are loaded through Home Assistant (see
 * custom_components/meshcore_chattx/image_proxy.py), never straight from
 * the image's server: the browser only talks to Home Assistant.
 *
 * Each image is tried once. Its signed address is fetched once per page
 * load and then served synchronously, so re-rendering a conversation never
 * starts a new load; an image that fails is remembered in the shared
 * settings and shown as "could not be downloaded" from then on.
 */
import type { HomeAssistant } from '../types';
import * as settings from './user-settings';

const FAILED_KEY = 'chattx-failed-images';
const MAX_FAILED = 300;

/** url → signed path (string), loading (undefined), or no address (null). */
const signed = new Map<string, string | null>();
const loading = new Set<string>();

function failedList(): string[] {
  try {
    const list = JSON.parse(settings.getItem(FAILED_KEY) ?? '[]');
    return Array.isArray(list) ? list.filter((u) => typeof u === 'string') : [];
  } catch {
    return [];
  }
}

export function imageFailed(url: string): boolean {
  return failedList().includes(url);
}

/** Remember that the image could not be loaded; it is not tried again. */
export function markImageFailed(url: string): void {
  const list = failedList();
  if (list.includes(url)) return;
  list.push(url);
  settings.setItem(FAILED_KEY, JSON.stringify(list.slice(-MAX_FAILED)));
}

/**
 * The image's address through Home Assistant: a string when ready, null
 * when it can't be served, undefined while it is being asked for (then
 * `onReady` runs once the answer is there).
 */
export function proxiedImage(hass: HomeAssistant, url: string, onReady: () => void): string | null | undefined {
  if (signed.has(url)) return signed.get(url)!;
  if (!loading.has(url)) {
    loading.add(url);
    hass
      .callWS<{ path: string }>({ type: 'meshcore_chattx/sign_image_url', url })
      .then((r) => signed.set(url, r.path))
      .catch(() => signed.set(url, null))
      .finally(() => {
        loading.delete(url);
        onReady();
      });
  }
  return undefined;
}
