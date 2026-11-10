import * as settings from './user-settings';
const STORAGE_KEY = 'chattx-show-contact-ids';

/** Whether the chat list shows contact IDs and channel numbers; on unless switched off in this browser. */
export function loadShowContactIds(): boolean {
  try {
    return settings.getItem(STORAGE_KEY) !== 'false';
  } catch {
    return true;
  }
}

export function saveShowContactIds(enabled: boolean): void {
  try {
    settings.setItem(STORAGE_KEY, String(enabled));
  } catch {
    // Storage unavailable: the choice lasts until the page reloads.
  }
}
