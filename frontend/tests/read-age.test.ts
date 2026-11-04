// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { readAtClass } from '../src/utils/read-age';

const NOW = Date.parse('2026-11-04T12:00:00+00:00');
const ago = (minutes: number) => new Date(NOW - minutes * 60000).toISOString();

describe('readAtClass', () => {
  it('stays neutral up to an hour', () => {
    expect(readAtClass(ago(0), NOW)).toBe('read-at');
    expect(readAtClass(ago(60), NOW)).toBe('read-at');
  });

  it('is orange past an hour, up to a day', () => {
    expect(readAtClass(ago(61), NOW)).toBe('read-at old');
    expect(readAtClass(ago(24 * 60), NOW)).toBe('read-at old');
  });

  it('is red past a day', () => {
    expect(readAtClass(ago(24 * 60 + 1), NOW)).toBe('read-at very-old');
  });
});
