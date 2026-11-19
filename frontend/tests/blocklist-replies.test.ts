// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { isBlockedMessage, setBlocklist } from '../src/utils/blocklist';
import type { ChatMessage } from '../src/types';

const msg = (sender: string, text: string, isOutgoing = false) =>
  ({ sender, text, isOutgoing, isSystem: false }) as unknown as ChatMessage;

afterEach(() => setBlocklist([]));

describe('replies to blocked senders', () => {
  it('hides a reply that mentions a blocked name, unless it mentions us too', () => {
    setBlocklist([{ key: 'aabbccdd', names: ['Spammer🤖'] }]);
    expect(isBlockedMessage(msg('Spammer🤖', 'hello'), 'Me')).toBe(true);
    expect(isBlockedMessage(msg('Bob', '@[Spammer🤖] stop it'), 'Me')).toBe(true);
    expect(isBlockedMessage(msg('Bob', '@[Spammer🤖]: stop it'), 'Me')).toBe(true);
    expect(isBlockedMessage(msg('Bob', 'thanks @[Spammer🤖], bye'), 'Me')).toBe(true);
    expect(isBlockedMessage(msg('Bob', '@[Me] @[Spammer🤖] both of you'), 'Me')).toBe(false);
    expect(isBlockedMessage(msg('Bob', '@[Alice] hi'), 'Me')).toBe(false);
    expect(isBlockedMessage(msg('Me', '@[Spammer🤖] my own reply', true), 'Me')).toBe(false);
  });

  it('hides nothing when nobody is blocked', () => {
    expect(isBlockedMessage(msg('Bob', '@[Spammer🤖] hi'), 'Me')).toBe(false);
  });
});
