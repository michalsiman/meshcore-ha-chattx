const STORAGE_KEY = 'chattx-tab-badge';

/** Whether the browser tab title shows the unread total; on unless switched off in this browser. */
export function loadTabBadge(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'false';
  } catch {
    return true;
  }
}

/** Saves the choice; chattx-tab-badge.js updates the title in this tab at once. */
export function saveTabBadge(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(enabled));
  } catch {
    // Storage unavailable: the title keeps its current behaviour.
  }
  window.dispatchEvent(new Event('chattx-tab-badge-changed'));
}
