import { t } from '../i18n';

const STORAGE_KEY = 'chattx-heard-reply';

/** The default reply in the current language; {hops} stands for "3 hops". */
export function defaultHeardReply(): string {
  return t('Heard, {hops}!');
}

/** The reply text saved in this browser, or '' for the default. */
export function loadHeardReply(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? '';
  } catch {
    return '';
  }
}

export function saveHeardReply(text: string): void {
  try {
    if (text.trim()) localStorage.setItem(STORAGE_KEY, text.trim());
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage unavailable: the choice lasts until the page reloads.
  }
}

/** The reply for a message that took this many hops. */
export function formatHeardReply(hops: number): string {
  const count = `${hops} ${hops === 1 ? 'hop' : 'hops'}`;
  return (loadHeardReply() || defaultHeardReply()).replace(/\{hops\}/g, count);
}
