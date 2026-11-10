import * as settings from './user-settings';
/** Show previews of image links in messages (per browser, on by default). */
const KEY = 'chattx-image-previews';

export function loadImagePreviews(): boolean {
  try {
    return settings.getItem(KEY) !== '0';
  } catch {
    return true;
  }
}

export function saveImagePreviews(on: boolean): void {
  try {
    if (on) settings.removeItem(KEY);
    else settings.setItem(KEY, '0');
  } catch {
    /* private mode */
  }
}
