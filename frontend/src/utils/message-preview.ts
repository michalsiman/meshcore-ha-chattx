import * as settings from './user-settings';
const STORAGE_KEY = 'chattx-show-message-preview';

/** Whether the chat list shows who wrote the newest message and how it starts; on unless switched off in this browser. */
export function loadShowMessagePreview(): boolean {
  try {
    return settings.getItem(STORAGE_KEY) !== 'false';
  } catch {
    return true;
  }
}

export function saveShowMessagePreview(enabled: boolean): void {
  try {
    settings.setItem(STORAGE_KEY, String(enabled));
  } catch {
    // Storage unavailable: the choice lasts until the page reloads.
  }
}
