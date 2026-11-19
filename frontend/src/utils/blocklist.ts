/**
 * Blocked senders (Settings → Blocked contacts), kept in Home Assistant.
 * The backend no longer stores their messages, nor replies to them; here
 * messages stored before blocking and live ones are hidden. Channel messages carry only
 * the sender's name, so the names each blocked key went by are matched.
 */
import type { ChatMessage, HomeAssistant } from '../types';

export interface BlockEntry {
  key: string;
  names: string[];
}

let entries: BlockEntry[] = [];
let names = new Set<string>();

export function setBlocklist(list: BlockEntry[] | null | undefined): void {
  entries = list ?? [];
  names = new Set(entries.flatMap((e) => e.names));
  window.dispatchEvent(new CustomEvent('chattx-blocklist-changed'));
}

export function blocklist(): BlockEntry[] {
  return entries;
}

/** A received message's sender is blocked: by key prefix (direct messages) or by name (channels). */
export function isBlockedSender(name: string | undefined, pubkeyPrefix?: string | undefined): boolean {
  if (entries.length === 0) return false;
  const prefix = (pubkeyPrefix ?? '').toLowerCase();
  if (prefix.length >= 6 && entries.some((e) => {
    const n = Math.min(e.key.length, prefix.length);
    return e.key.slice(0, n) === prefix.slice(0, n);
  })) {
    return true;
  }
  return !!name && names.has(name);
}

/** Names mentioned as "@[Name]", the MeshCore form. */
function mentionedNames(text: string): string[] {
  return [...(text ?? '').matchAll(/@\[([^\]]+)\]/g)].map((m) => m[1]);
}

/**
 * A received message to hide: from a blocked sender, or a reply to one
 * ("@[Name] …") that does not mention us (`ownName`) too.
 */
export function isBlockedMessage(msg: ChatMessage, ownName?: string): boolean {
  if (names.size === 0 || msg.isOutgoing || msg.isSystem) return false;
  if (names.has(msg.sender)) return true;
  const mentioned = mentionedNames(msg.text);
  if (mentioned.length === 0) return false;
  const own = (ownName ?? '').toLocaleLowerCase();
  if (own && mentioned.some((m) => m.toLocaleLowerCase() === own)) return false;
  return mentioned.some((m) => names.has(m));
}

export async function syncBlocklist(hass: HomeAssistant): Promise<void> {
  try {
    const result = await hass.callWS<{ entries: BlockEntry[] }>({ type: 'meshcore_chattx/get_blocklist' });
    setBlocklist(result.entries);
  } catch {
    // Older backend: nothing blocked.
  }
}

export async function saveBlocklist(hass: HomeAssistant, keys: string[]): Promise<BlockEntry[]> {
  const result = await hass.callWS<{ entries: BlockEntry[] }>({ type: 'meshcore_chattx/set_blocklist', keys });
  setBlocklist(result.entries);
  return result.entries;
}
