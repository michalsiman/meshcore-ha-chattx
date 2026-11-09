// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { isBlockedMessage, setBlocklist } from '../src/utils/blocklist';
import { resolveBlockInput } from '../src/components/blocklist-settings';
import type { ChatMessage } from '../src/types';

const msg = (sender: string, isOutgoing = false) => ({ sender, isOutgoing, isSystem: false } as ChatMessage);
const contacts = [{ key: 'abcdef0123456789', name: 'Spammer' }, { key: '1234567890abcdef', name: 'Friend' }];

describe('blocked senders', () => {
  afterEach(() => setBlocklist([]));

  it('hides received messages under any name the key went by', () => {
    setBlocklist([{ key: 'abcdef012345', names: ['Spammer', 'Spammer2'] }]);
    expect(isBlockedMessage(msg('Spammer2'))).toBe(true);
    expect(isBlockedMessage(msg('Friend'))).toBe(false);
    expect(isBlockedMessage(msg('Spammer', true))).toBe(false);
  });

  it('takes a name from the list, a contact name or a hex key', () => {
    expect(resolveBlockInput('Spammer (abcdef012345…)', contacts)).toBe('abcdef0123456789');
    expect(resolveBlockInput('Friend', contacts)).toBe('1234567890abcdef');
    expect(resolveBlockInput(' ABCDEF01 ', contacts)).toBe('abcdef01');
    expect(resolveBlockInput('nobody', contacts)).toBeNull();
    expect(resolveBlockInput('abc', contacts)).toBeNull();
  });
});
