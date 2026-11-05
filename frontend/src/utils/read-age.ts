import { t } from '../i18n';

const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;

/** CSS classes for a "Loaded …" note: orange past an hour, red past a day. */
export function readAtClass(readAt: string, now: number = Date.now()): string {
  const age = now - Date.parse(readAt);
  if (age > 24 * HOUR_MS) return 'read-at very-old';
  if (age > HOUR_MS) return 'read-at old';
  return 'read-at';
}

/**
 * How long ago data was read: minutes up to an hour, hours and minutes up to
 * 12 hours, whole hours up to 48 hours, whole days beyond that. Empty for an
 * invalid time; a time in the future counts as just now.
 */
export function formatReadAge(readAt: string, now: number = Date.now()): string {
  const read = Date.parse(readAt);
  if (Number.isNaN(read)) return '';
  const age = now - read;
  if (age < MINUTE_MS) return t('just now');
  const minutes = Math.floor(age / MINUTE_MS);
  const hours = Math.floor(age / HOUR_MS);
  let amount: string;
  if (age <= HOUR_MS) amount = `${minutes} min`;
  else if (age <= 12 * HOUR_MS) amount = `${hours} h ${minutes % 60} min`;
  else if (age <= 48 * HOUR_MS) amount = `${hours} h`;
  else amount = `${Math.floor(age / (24 * HOUR_MS))} d`;
  return t('{amount} ago', { amount });
}
