const STORAGE_KEY = 'chattx-strip-diacritics';

function stripLatinDiacritics(text: string): string {
  return text
    .normalize('NFD')
    .replace(/([A-Za-z])[̀-ͯ]+/g, '$1')
    .normalize('NFC');
}

/**
 * Remove diacritics from Latin letters. Other scripts and emoji stay as they
 * are, and so do @[name] mentions, which must keep matching the contact's name.
 */
export function stripDiacritics(text: string): string {
  return text
    .split(/(@\[[^\]]*\])/)
    .map((part, index) => (index % 2 === 1 ? part : stripLatinDiacritics(part)))
    .join('');
}

export function loadStripDiacritics(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function saveStripDiacritics(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(enabled));
  } catch {
    // Storage unavailable: the choice lasts until the page reloads.
  }
}
