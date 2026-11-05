// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { formatReadAge, readAtClass } from '../src/utils/read-age';
import { inLanguage } from './helpers/language';

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

describe('formatReadAge', () => {
  const cs = (minutes: number) => inLanguage('cs', () => formatReadAge(ago(minutes), NOW));

  it('says just now under a minute and for a future time', () => {
    expect(cs(0.5)).toBe('právě teď');
    expect(cs(-5)).toBe('právě teď');
  });

  it('shows minutes up to an hour', () => {
    expect(cs(1)).toBe('před 1 min');
    expect(cs(60)).toBe('před 60 min');
  });

  it('shows hours and minutes up to 12 hours', () => {
    expect(cs(61)).toBe('před 1 h 1 min');
    expect(cs(120)).toBe('před 2 h 0 min');
    expect(cs(12 * 60)).toBe('před 12 h 0 min');
  });

  it('shows whole hours up to 48 hours', () => {
    expect(cs(12 * 60 + 1)).toBe('před 12 h');
    expect(cs(47 * 60 + 59)).toBe('před 47 h');
    expect(cs(48 * 60)).toBe('před 48 h');
  });

  it('shows whole days past 48 hours', () => {
    expect(cs(48 * 60 + 1)).toBe('před 2 d');
    expect(cs(95 * 60)).toBe('před 3 d');
  });

  it('uses English otherwise and is empty for an invalid time', () => {
    expect(formatReadAge(ago(90), NOW)).toBe('1 h 30 min ago');
    expect(formatReadAge(ago(0), NOW)).toBe('just now');
    expect(formatReadAge('nonsense', NOW)).toBe('');
  });
});
