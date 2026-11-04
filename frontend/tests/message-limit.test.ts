// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { remainingMessageBytes } from '../src/utils/message-limit';

describe('remainingMessageBytes', () => {
  it('gives direct messages the full limit', () => {
    expect(remainingMessageBytes('', null)).toBe(160);
    expect(remainingMessageBytes('ahoj', null)).toBe(156);
  });

  it('takes the sender and separator off channel messages', () => {
    expect(remainingMessageBytes('', 'TEST-NODE')).toBe(149);
    expect(remainingMessageBytes('ahoj', 'TEST-NODE')).toBe(145);
  });

  it('counts bytes, so diacritics and emoji cost more', () => {
    expect(remainingMessageBytes('č', null)).toBe(158);
    expect(remainingMessageBytes('😀', null)).toBe(156);
    expect(remainingMessageBytes('', 'Čáp')).toBe(153);
  });

  it('ignores surrounding whitespace, which is not sent', () => {
    expect(remainingMessageBytes('  ahoj \n', null)).toBe(156);
  });

  it('goes negative past the limit', () => {
    expect(remainingMessageBytes('x'.repeat(160), null)).toBe(0);
    expect(remainingMessageBytes('x'.repeat(165), null)).toBe(-5);
  });
});
