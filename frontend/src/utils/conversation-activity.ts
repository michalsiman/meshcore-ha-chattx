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

/** The part of a conversation's message entity_id after the domain. */
function entitySuffix(conversation: Contact | Channel, nodePrefix: string | null | undefined): string {
  return 'pubkey_prefix' in conversation
    ? `meshcore_${nodePrefix}_${(conversation as Contact).pubkey_prefix.substring(0, 6)}_messages`
    : `meshcore_${nodePrefix}_ch_${(conversation as Channel).channel_idx}_messages`;
}

function bySuffix(activity: ConversationActivity): Map<string, string> {
  return new Map(
    Object.entries(activity).map(([entityId, timestamp]) => [entityId.substring(entityId.indexOf('.') + 1), timestamp]),
  );
}

/** Time of a conversation's newest message, if it has one. */
export function lastActivityOf(
  conversation: Contact | Channel,
  activity: ConversationActivity,
  nodePrefix: string | null | undefined,
): string | undefined {
  return bySuffix(activity).get(entitySuffix(conversation, nodePrefix));
}

const MINUTE_MS = 60_000;
const HOUR_MS = 60 * MINUTE_MS;

/**
 * Age of a message: in whole minutes up to an hour, in whole hours up to 48
 * hours, in whole days beyond that. Empty when there is no valid time; under a
 * minute or a time in the future counts as just now.
 */
export function formatLastActivity(timestamp: string | undefined, now: number, czech: boolean): string {
  const millis = toMillis(timestamp);
  if (millis === 0) return '';
  const age = now - millis;
  if (age < MINUTE_MS) return czech ? 'právě teď' : 'just now';
  const amount = age < HOUR_MS
    ? `${Math.floor(age / MINUTE_MS)} min`
    : age > 48 * HOUR_MS
      ? `${Math.floor(age / (24 * HOUR_MS))} d`
      : `${Math.floor(age / HOUR_MS)} h`;
  return czech ? `před ${amount}` : `${amount} ago`;
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
  const newest = bySuffix(activity);
  return conversations
    .map((conversation) => ({
      conversation,
      time: toMillis(newest.get(entitySuffix(conversation, nodePrefix))),
    }))
    .sort((a, b) => b.time - a.time)
    .map((item) => item.conversation);
}
