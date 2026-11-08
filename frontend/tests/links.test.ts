import { describe, expect, it } from 'vitest';
import { splitLinks } from '../src/utils/links';

describe('web addresses in messages', () => {
  it('finds http, https and www addresses', () => {
    expect(splitLinks('see https://meshcore.co.uk/map and www.ok1sim.cz now')).toEqual([
      { text: 'see ' },
      { url: 'https://meshcore.co.uk/map', label: 'https://meshcore.co.uk/map' },
      { text: ' and ' },
      { url: 'https://www.ok1sim.cz', label: 'www.ok1sim.cz' },
      { text: ' now' },
    ]);
  });

  it('leaves sentence punctuation out of the address', () => {
    expect(splitLinks('Look at http://example.com/a.')).toEqual([
      { text: 'Look at ' },
      { url: 'http://example.com/a', label: 'http://example.com/a' },
      { text: '.' },
    ]);
    expect(splitLinks('(https://example.com)')[1]).toEqual({ url: 'https://example.com', label: 'https://example.com' });
  });

  it('keeps a bracket that is part of the address', () => {
    expect(splitLinks('https://en.wikipedia.org/wiki/Mesh_(networking)')[0])
      .toEqual({ url: 'https://en.wikipedia.org/wiki/Mesh_(networking)', label: 'https://en.wikipedia.org/wiki/Mesh_(networking)' });
  });

  it('leaves text without addresses alone and ignores other schemes', () => {
    expect(splitLinks('hello 3 hops')).toEqual([{ text: 'hello 3 hops' }]);
    expect(splitLinks('javascript:alert(1)')).toEqual([{ text: 'javascript:alert(1)' }]);
  });
});

import { longLink } from '../src/utils/links';

describe('link worth shortening', () => {
  it('offers a long address, not a short or already shortened one', () => {
    expect(longLink('map: https://meshcore.co.uk/map.html?lat=49.6&lon=13.1&zoom=9')?.label)
      .toBe('https://meshcore.co.uk/map.html?lat=49.6&lon=13.1&zoom=9');
    expect(longLink('see www.ok1sim.cz')).toBeNull();
    expect(longLink('https://is.gd/abc123 and more text here')).toBeNull();
    expect(longLink('no link here')).toBeNull();
  });
});
