import { describe, expect, it } from 'vitest';
import { MAX_MESSAGE_PARTS, remainingMessageBytes, splitMessage } from '../src/utils/message-limit';

const word = 'slovo ';

describe('splitMessage', () => {
  it('leaves a message that fits alone', () => {
    expect(splitMessage('ahoj', 'OK1SIM-HA')).toBeNull();
  });

  it('numbers the parts and keeps each within the limit', () => {
    const text = word.repeat(60).trim();
    const parts = splitMessage(text, 'OK1SIM-HA')!;
    expect(parts.length).toBeGreaterThan(1);
    parts.forEach((part, i) => {
      expect(part.endsWith(` ${i + 1}/${parts.length}`)).toBe(true);
      expect(remainingMessageBytes(part, 'OK1SIM-HA')).toBeGreaterThanOrEqual(0);
    });
    expect(parts.map((p) => p.replace(/ \d+\/\d+$/, '')).join(' ')).toBe(text);
  });

  it('counts diacritics as two bytes and direct messages without a prefix', () => {
    const text = 'žluťoučký kůň '.repeat(12).trim();
    for (const sender of [null, 'Uzel']) {
      for (const part of splitMessage(text, sender)!) {
        expect(remainingMessageBytes(part, sender)).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('keeps line breaks inside a part', () => {
    const parts = splitMessage(`první řádek\ndruhý řádek ${'x'.repeat(170)}`, null)!;
    expect(parts[0].startsWith('první řádek\ndruhý řádek')).toBe(true);
  });

  it('keeps a channel message within 155 bytes so its repeats can be seen', () => {
    expect(remainingMessageBytes('x'.repeat(144), 'OK1SIM-HA')).toBe(0);
    expect(splitMessage('x '.repeat(73).trim() + ' xxx', 'OK1SIM-HA')).not.toBeNull();
    expect(remainingMessageBytes('x'.repeat(160), null)).toBe(0);
  });

  it('cuts a very long word', () => {
    const parts = splitMessage('a'.repeat(300), null)!;
    expect(parts.length).toBe(2);
  });

  it('fills the parts evenly up to the channel limit', () => {
    const text = word.repeat(60).trim();
    const parts = splitMessage(text, 'OK1SIM-HA')!;
    const sizes = parts.map((p) => new TextEncoder().encode(`OK1SIM-HA: ${p}`).length);
    expect(parts.length).toBe(3);
    expect(Math.max(...sizes)).toBeLessThanOrEqual(155);
    expect(Math.max(...sizes) - Math.min(...sizes)).toBeLessThanOrEqual(2 * word.length);
  });

  it('refuses a text that needs too many parts', () => {
    expect(splitMessage(word.repeat(40 * MAX_MESSAGE_PARTS), null)).toBeNull();
  });
});
