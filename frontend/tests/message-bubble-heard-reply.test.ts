// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/components/message-bubble';
import type { MessageBubble } from '../src/components/message-bubble';
import type { ChatMessage } from '../src/types';
import { registerTranslations } from '../src/i18n';
import { readLanguage } from './helpers/language';

function makeMessage(overrides: Partial<ChatMessage> = {}): ChatMessage {
  return {
    id: 'msg-1',
    sender: 'Alice',
    text: 'hello mesh',
    timestamp: new Date('2026-06-09T12:00:00Z'),
    isOutgoing: false,
    isSystem: false,
    raw: 'hello mesh',
    mentions: [],
    rxLogData: [{ hop_count: 5 }, { hop_count: 3 }],
    ...overrides,
  };
}

async function openDialog(msg: ChatMessage) {
  const el = document.createElement('chattx-message-bubble') as MessageBubble;
  el.group = {
    sender: msg.sender,
    isOutgoing: msg.isOutgoing,
    isSystem: msg.isSystem,
    messages: [msg],
    startTime: msg.timestamp,
    endTime: msg.timestamp,
  };
  document.body.appendChild(el);
  await el.updateComplete;
  (el as unknown as { _selectedMessage: ChatMessage })._selectedMessage = msg;
  await el.updateComplete;
  const actions = () => [...el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.message-dialog-action')];
  return { el, actions };
}

describe('message dialog reply actions', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.innerHTML = '';
  });

  it('puts the sender and the fewest hops in the composer text', async () => {
    const { el, actions } = await openDialog(makeMessage());
    const heard = actions().find((b) => b.textContent!.includes('Heard'))!;
    expect(heard.textContent!.trim()).toBe('Heard, 3 hops!');

    const details: Array<{ mention: string }> = [];
    el.addEventListener('reply-to-sender', (e) => details.push((e as CustomEvent).detail));
    heard.click();
    expect(details).toEqual([{ mention: '@[Alice] Heard, 3 hops! ' }]);
  });

  it('uses the singular for one hop and keeps zero hops', async () => {
    const one = await openDialog(makeMessage({ rxLogData: [{ hop_count: 1 }] }));
    expect(one.actions().some((b) => b.textContent!.includes('Heard, 1 hop!'))).toBe(true);
    const zero = await openDialog(makeMessage({ rxLogData: [{ hop_count: 0 }] }));
    expect(zero.actions().some((b) => b.textContent!.includes('Heard, 0 hops!'))).toBe(true);
  });

  it('hides the option without a hop count or on own messages', async () => {
    const unknown = await openDialog(makeMessage({ rxLogData: [{ snr: 5 }] }));
    expect(unknown.actions().some((b) => b.textContent!.includes('Heard'))).toBe(false);
    const own = await openDialog(makeMessage({ isOutgoing: true }));
    expect(own.actions().some((b) => b.textContent!.includes('Heard'))).toBe(false);
  });

  it('translates the buttons for Czech browsers only', async () => {
    registerTranslations('cs', readLanguage('cs'));
    vi.stubGlobal('navigator', { language: 'cs-CZ' });
    const cs = await openDialog(makeMessage());
    const csLabels = cs.actions().map((b) => b.textContent!.trim());
    expect(csLabels).toContain('Kopírovat text');
    expect(csLabels).toContain('Odpovědět');

    vi.stubGlobal('navigator', { language: 'en-US' });
    const en = await openDialog(makeMessage());
    const enLabels = en.actions().map((b) => b.textContent!.trim());
    expect(enLabels).toContain('Copy Text');
    expect(enLabels).toContain('Reply');
  });
});
