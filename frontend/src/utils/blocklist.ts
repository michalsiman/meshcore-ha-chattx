/**
 * Blocked senders (Settings → Blocked contacts), kept in Home Assistant.
 * The backend no longer stores their messages; here messages stored
 * before blocking and live ones are hidden. Channel messages carry only
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

export function isBlockedMessage(msg: ChatMessage): boolean {
  return names.size > 0 && !msg.isOutgoing && !msg.isSystem && names.has(msg.sender);
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
