// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import '../src/components/message-bubble';
import type { MessageBubble } from '../src/components/message-bubble';
import type { ChatMessage, MessageReaction } from '../src/types';

function reaction(emoji: string, sender: string): MessageReaction {
  return { emoji, sender, time: '2026-11-18T12:00:00Z' } as MessageReaction;
}

async function mount(reactions: MessageReaction[]) {
  const msg = {
    id: 'msg-1', sender: 'Alice', text: 'hello', timestamp: new Date('2026-11-18T12:00:00Z'),
    isOutgoing: false, isSystem: false, raw: 'hello', mentions: [], reactions,
  } as unknown as ChatMessage;
  const el = document.createElement('chattx-message-bubble') as MessageBubble;
  el.group = { sender: 'Alice', isOutgoing: false, isSystem: false, messages: [msg], startTime: msg.timestamp, endTime: msg.timestamp };
  document.body.appendChild(el);
  await el.updateComplete;
  return [...el.shadowRoot!.querySelectorAll<HTMLElement>('.reaction')];
}

afterEach(() => { document.body.innerHTML = ''; });

describe('reaction names under the bubble', () => {
  it('names who reacted next to each emoji', async () => {
    const chips = await mount([reaction('👍', 'Carol'), reaction('👍', 'Bob'), reaction('😂', 'Eva')]);
    expect(chips.map((c) => c.textContent!.replace(/\s+/g, ' ').trim())).toEqual(['👍Carol, Bob', '😂Eva']);
  });

  it('shortens many names to three and a count, full list on hover', async () => {
    const names = ['A', 'B', 'C', 'D', 'E'];
    const [chip] = await mount(names.map((n) => reaction('👍', n)));
    expect(chip.querySelector('.reaction-names')!.textContent).toBe('A, B, C +2');
    expect(chip.title).toBe('A, B, C, D, E');
  });
});
