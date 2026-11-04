const HOUR_MS = 60 * 60 * 1000;

/** CSS classes for a "Loaded …" note: orange past an hour, red past a day. */
export function readAtClass(readAt: string, now: number = Date.now()): string {
  const age = now - Date.parse(readAt);
  if (age > 24 * HOUR_MS) return 'read-at very-old';
  if (age > HOUR_MS) return 'read-at old';
  return 'read-at';
}
