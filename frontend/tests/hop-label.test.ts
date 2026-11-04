// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { fewestHops, formatHopLabel } from '../src/chat/message-parser';

describe('formatHopLabel', () => {
  it('is empty when no copy reports a hop count', () => {
    expect(formatHopLabel(undefined, 'en')).toBe('');
    expect(formatHopLabel([], 'en')).toBe('');
    expect(formatHopLabel([{ snr: 5 }], 'en')).toBe('');
  });

  it('uses the shortest path of all received copies', () => {
    expect(formatHopLabel([{ hop_count: 4 }, { hop_count: 2 }, {}], 'en')).toBe('2 hops');
  });

  it('labels English counts', () => {
    expect(formatHopLabel([{ hop_count: 0 }], 'en-US')).toBe('direct');
    expect(formatHopLabel([{ hop_count: 1 }], 'en-US')).toBe('1 hop');
  });

  it('declines Czech counts', () => {
    expect(formatHopLabel([{ hop_count: 0 }], 'cs-CZ')).toBe('přímo');
    expect(formatHopLabel([{ hop_count: 1 }], 'cs')).toBe('1 hop');
    expect(formatHopLabel([{ hop_count: 3 }], 'cs')).toBe('3 hopy');
    expect(formatHopLabel([{ hop_count: 5 }], 'cs')).toBe('5 hopů');
  });
});

describe('fewestHops', () => {
  it('returns null when no copy reports a count', () => {
    expect(fewestHops(undefined)).toBeNull();
    expect(fewestHops([{ snr: 5 }])).toBeNull();
  });

  it('returns the lowest count, including zero', () => {
    expect(fewestHops([{ hop_count: 4 }, { hop_count: 2 }, {}])).toBe(2);
    expect(fewestHops([{ hop_count: 0 }, { hop_count: 3 }])).toBe(0);
  });
});
