import { t } from '../i18n';
import type { HomeAssistant } from '../types';
import { formatLength, unknownLength } from './units';

/** Where versions before 0.5.2 kept the text, separately in each browser. */
const LEGACY_STORAGE_KEY = 'chattx-heard-reply';

/** The text kept in Home Assistant; '' is the default text. */
let shared = '';

/** The default reply in the current language; {hops} stands for "3 hops". */
export function defaultHeardReply(): string {
  return t('Heard, {hops}!');
}

/** The reply text set in Chattx's settings, or '' for the default. */
export function loadHeardReply(): string {
  return shared;
}

/** Take a text that came from Home Assistant (load or change event). */
export function setSharedHeardReply(text: string | null | undefined): void {
  shared = (text ?? '').trim();
}

function takeLegacy(): string {
  try {
    const text = localStorage.getItem(LEGACY_STORAGE_KEY) ?? '';
    localStorage.removeItem(LEGACY_STORAGE_KEY);
    return text.trim();
  } catch {
    return '';
  }
}

/**
 * Load the text from Home Assistant. When it was never set there, an
 * administrator's panel brings over the text this browser saved before the
 * setting moved to Home Assistant.
 */
export async function syncHeardReply(hass: HomeAssistant): Promise<void> {
  try {
    const result = await hass.callWS<{ text: string | null }>({ type: 'meshcore_chattx/get_heard_reply' });
    if (result.text === null && hass.user?.is_admin) {
      const legacy = takeLegacy();
      if (legacy) {
        const saved = await hass.callWS<{ text: string }>({ type: 'meshcore_chattx/set_heard_reply', text: legacy });
        setSharedHeardReply(saved.text);
        return;
      }
    }
    setSharedHeardReply(result.text);
  } catch {
    // Older backend or no connection: the default text stays.
  }
}

/** Save the text in Home Assistant for every browser; '' restores the default. */
export async function saveHeardReply(hass: HomeAssistant, text: string): Promise<boolean> {
  try {
    const saved = await hass.callWS<{ text: string }>({ type: 'meshcore_chattx/set_heard_reply', text: text.trim() });
    setSharedHeardReply(saved.text);
    return true;
  } catch {
    return false;
  }
}

/** Distance as written into the reply: "241 km", "~241 km", or "? km" when unknown. */
function replyKm(km: number | null | undefined, approx = false): string {
  if (km === null || km === undefined) return unknownLength();
  return formatLength(km, approx);
}

/**
 * The reply for a message that took this many hops. {hops} becomes
 * "3 hops"; {km} the straight-line distance between the first and the
 * last repeater and {route} the length of the route through all of them,
 * when their positions are known.
 */
export function formatHeardReply(
  hops: number,
  distance?: { km: number; approx: boolean; routeKm: number; routeApprox: boolean } | null,
): string {
  const count = `${hops} ${hops === 1 ? 'hop' : 'hops'}`;
  return (loadHeardReply() || defaultHeardReply())
    .replace(/\{hops\}/g, count)
    .replace(/\{km\}/g, replyKm(distance?.km, distance?.approx))
    .replace(/\{route\}/g, replyKm(distance?.routeKm, distance?.routeApprox));
}
