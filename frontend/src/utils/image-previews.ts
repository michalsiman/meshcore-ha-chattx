/** Show previews of image links in messages (per browser, on by default). */
const KEY = 'chattx-image-previews';

export function loadImagePreviews(): boolean {
  try {
    return localStorage.getItem(KEY) !== '0';
  } catch {
    return true;
  }
}

export function saveImagePreviews(on: boolean): void {
  try {
    if (on) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, '0');
  } catch {
    /* private mode */
  }
}
