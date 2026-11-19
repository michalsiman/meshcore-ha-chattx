/**
 * Favourite chats: contacts and channels marked with a star in Manage,
 * shown under the Favourites filter of the chat list. Kept with the shared
 * panel settings, so every device sees the same favourites. A contact is
 * kept by its public key prefix, a channel by its name (its index changes
 * when channels are moved).
 */
import * as settings from './user-settings';
import type { Channel, Contact } from '../types';

const STORAGE_KEY = 'chattx-favorites';

/** Key of a chat: "c:<pubkey prefix>" or "ch:<channel name>". */
export function favoriteKey(conv: Contact | Channel): string {
  return 'pubkey_prefix' in conv
    ? `c:${(conv as Contact).pubkey_prefix.toLowerCase()}`
    : `ch:${(conv as Channel).name.trim().toLowerCase()}`;
}

export function loadFavorites(): Set<string> {
  try {
    const raw = settings.getItem(STORAGE_KEY);
    const list = raw ? (JSON.parse(raw) as unknown) : [];
    return new Set(Array.isArray(list) ? list.filter((k): k is string => typeof k === 'string') : []);
  } catch {
    return new Set();
  }
}

export function isFavorite(conv: Contact | Channel, favorites = loadFavorites()): boolean {
  return favorites.has(favoriteKey(conv));
}

/** Star or unstar a chat; returns whether it is a favourite now. */
export function toggleFavorite(conv: Contact | Channel): boolean {
  const favorites = loadFavorites();
  const key = favoriteKey(conv);
  const now = !favorites.has(key);
  if (now) favorites.add(key);
  else favorites.delete(key);
  try {
    settings.setItem(STORAGE_KEY, JSON.stringify([...favorites].sort()));
  } catch {
    // Storage unavailable: lasts until the page reloads.
  }
  window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED));
  return now;
}

/** Fired on this page when a star changes (other devices: SETTINGS_CHANGED). */
export const FAVORITES_CHANGED = 'chattx-favorites-changed';
