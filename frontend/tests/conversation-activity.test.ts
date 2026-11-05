// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { formatLastActivity, lastActivityOf, mergeActivity, sortByActivity } from '../src/utils/conversation-activity';
import type { Channel, Contact } from '../src/types';
import { inLanguage } from './helpers/language';

const channel = (idx: number) => ({ channel_idx: idx, name: `c${idx}` }) as unknown as Channel;
const contact = (prefix: string) => ({ pubkey_prefix: prefix, adv_name: prefix }) as unknown as Contact;
const names = (list: Array<Channel | Contact>) =>
  list.map((c) => ('pubkey_prefix' in c ? (c as Contact).pubkey_prefix : `#${(c as Channel).channel_idx}`));

describe('sortByActivity', () => {
  it('mixes channels and contacts, newest first, silent ones last in their old order', () => {
    const sorted = sortByActivity(
      [channel(0), channel(1), contact('aaaaaa111111'), contact('bbbbbb222222')],
      {
        'binary_sensor.meshcore_abc123_ch_1_messages': '2026-11-04T10:00:00+00:00',
        'binary_sensor.meshcore_abc123_bbbbbb_messages': '2026-11-04T11:00:00+00:00',
      },
      'abc123',
    );
    expect(names(sorted)).toEqual(['bbbbbb222222', '#1', '#0', 'aaaaaa111111']);
  });

  it('ignores activity of another radio', () => {
    const sorted = sortByActivity(
      [channel(0), channel(1)],
      { 'binary_sensor.meshcore_ffffff_ch_1_messages': '2026-11-04T10:00:00+00:00' },
      'abc123',
    );
    expect(names(sorted)).toEqual(['#0', '#1']);
  });

  it('compares times across time zones', () => {
    const sorted = sortByActivity(
      [channel(0), channel(1)],
      {
        'binary_sensor.meshcore_a_ch_0_messages': '2026-11-04T10:30:00+01:00',
        'binary_sensor.meshcore_a_ch_1_messages': '2026-11-04T10:00:00+00:00',
      },
      'a',
    );
    expect(names(sorted)).toEqual(['#1', '#0']);
  });

  it('does not change the input array', () => {
    const input = [channel(0), channel(1)];
    sortByActivity(input, { 'b.meshcore_a_ch_1_messages': '2026-11-04T10:00:00+00:00' }, 'a');
    expect(names(input)).toEqual(['#0', '#1']);
  });
});

describe('mergeActivity', () => {
  it('keeps the newest time, so an older refetch cannot undo a live update', () => {
    expect(mergeActivity(
      { a: '2026-11-04T12:00:00+00:00' },
      { a: '2026-11-04T11:00:00+00:00', b: '2026-11-04T09:00:00+00:00' },
    )).toEqual({ a: '2026-11-04T12:00:00+00:00', b: '2026-11-04T09:00:00+00:00' });
  });
});

describe('lastActivityOf', () => {
  const activity = {
    'binary_sensor.meshcore_abc_ch_1_messages': '2026-11-04T10:00:00+00:00',
    'binary_sensor.meshcore_abc_a1b2c3_messages': '2026-11-03T10:00:00+00:00',
  };

  it('finds channels and contacts by their entity', () => {
    expect(lastActivityOf(channel(1), activity, 'abc')).toBe('2026-11-04T10:00:00+00:00');
    expect(lastActivityOf(contact('a1b2c3aabbcc'), activity, 'abc')).toBe('2026-11-03T10:00:00+00:00');
  });

  it('is undefined without a stored message', () => {
    expect(lastActivityOf(channel(2), activity, 'abc')).toBeUndefined();
  });
});

describe('formatLastActivity', () => {
  const now = Date.parse('2026-11-04T12:00:00Z');
  const ago = (hours: number) => new Date(now - hours * 3_600_000).toISOString();

  it('shows minutes under an hour', () => {
    expect(inLanguage('cs', () => formatLastActivity(ago(1 / 60), now))).toBe('před 1 min');
    expect(inLanguage('cs', () => formatLastActivity(ago(0.5), now))).toBe('před 30 min');
    expect(inLanguage('cs', () => formatLastActivity(ago(59.5 / 60), now))).toBe('před 59 min');
    expect(formatLastActivity(ago(0.5), now)).toBe('30 min ago');
  });

  it('says just now under a minute', () => {
    expect(inLanguage('cs', () => formatLastActivity(ago(0.5 / 60), now))).toBe('právě teď');
    expect(formatLastActivity(ago(0.5 / 60), now)).toBe('just now');
  });

  it('shows hours up to and including 48', () => {
    expect(inLanguage('cs', () => formatLastActivity(ago(1), now))).toBe('před 1 h');
    expect(inLanguage('cs', () => formatLastActivity(ago(47.9), now))).toBe('před 47 h');
    expect(inLanguage('cs', () => formatLastActivity(ago(48), now))).toBe('před 48 h');
  });

  it('shows days above 48 hours', () => {
    expect(inLanguage('cs', () => formatLastActivity(ago(48.5), now))).toBe('před 2 d');
    expect(inLanguage('cs', () => formatLastActivity(ago(72), now))).toBe('před 3 d');
  });

  it('uses English otherwise', () => {
    expect(formatLastActivity(ago(3), now)).toBe('3 h ago');
    expect(formatLastActivity(ago(72), now)).toBe('3 d ago');
  });

  it('handles missing and future times', () => {
    expect(inLanguage('cs', () => formatLastActivity(undefined, now))).toBe('');
    expect(inLanguage('cs', () => formatLastActivity('nonsense', now))).toBe('');
    expect(inLanguage('cs', () => formatLastActivity(ago(-1), now))).toBe('právě teď');
  });
});
