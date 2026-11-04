// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { mergeActivity, sortByActivity } from '../src/utils/conversation-activity';
import type { Channel, Contact } from '../src/types';

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
