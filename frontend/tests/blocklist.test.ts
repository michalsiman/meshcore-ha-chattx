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

describe('sender key in the message dialog', () => {
  it('finds the keys of the contacts with the sender\'s name', async () => {
    const { senderKeys } = await import('../src/components/message-bubble');
    const states = {
      'binary_sensor.meshcore_a_contact': { attributes: { adv_name: 'mt_t096', public_key: 'ABCDEF01' } },
      'binary_sensor.meshcore_b_contact': { attributes: { adv_name: 'Other', public_key: '12345678' } },
      'sensor.meshcore_x': { attributes: { adv_name: 'mt_t096', public_key: 'ffff' } },
    } as never;
    expect(senderKeys(states, 'mt_t096')).toEqual(['abcdef01']);
    expect(senderKeys(states, 'Nobody')).toEqual([]);
  });
});

describe('blocked sender of a live message', () => {
  afterEach(() => setBlocklist([]));
  it('matches by name or by key prefix', async () => {
    const { isBlockedSender } = await import('../src/utils/blocklist');
    setBlocklist([{ key: '9dda04d81214', names: ['PiPin89🤖'] }]);
    expect(isBlockedSender('PiPin89🤖')).toBe(true);
    expect(isBlockedSender('Other', '9dda04d81214')).toBe(true);
    expect(isBlockedSender('Other', 'aaaaaaaaaaaa')).toBe(false);
  });
});
