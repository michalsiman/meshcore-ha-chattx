import type { Channel, Contact } from '../types';

/** Time of the newest message per message entity_id. */
export type ConversationActivity = Record<string, string>;

function toMillis(timestamp: string | undefined): number {
  const millis = timestamp ? Date.parse(timestamp) : NaN;
  return Number.isNaN(millis) ? 0 : millis;
}

/** Combine activity maps, keeping the newest time for each conversation. */
export function mergeActivity(
  current: ConversationActivity,
  incoming: ConversationActivity,
): ConversationActivity {
  const merged = { ...current };
  for (const [entityId, timestamp] of Object.entries(incoming)) {
    if (toMillis(timestamp) >= toMillis(merged[entityId])) merged[entityId] = timestamp;
  }
  return merged;
}

/**
 * Newest activity first. Conversations without any stored message keep their
 * relative order below the others.
 */
export function sortByActivity<T extends Contact | Channel>(
  conversations: T[],
  activity: ConversationActivity,
  nodePrefix: string | null | undefined,
): T[] {
  const entitySuffix = (conversation: T) =>
    'pubkey_prefix' in conversation
      ? `meshcore_${nodePrefix}_${(conversation as Contact).pubkey_prefix.substring(0, 6)}_messages`
      : `meshcore_${nodePrefix}_ch_${(conversation as Channel).channel_idx}_messages`;
  const newest = new Map<string, number>();
  for (const [entityId, timestamp] of Object.entries(activity)) {
    const suffix = entityId.substring(entityId.indexOf('.') + 1);
    newest.set(suffix, toMillis(timestamp));
  }
  return conversations
    .map((conversation) => ({ conversation, time: newest.get(entitySuffix(conversation)) ?? 0 }))
    .sort((a, b) => b.time - a.time)
    .map((item) => item.conversation);
}
