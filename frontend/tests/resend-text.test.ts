import { describe, expect, it } from 'vitest';
import { resendText } from '../src/components/message-bubble';
import type { ChatMessage } from '../src/types';

describe('resend line', () => {
  it('says how much later and how the copy came', () => {
    const msg = { timestamp: new Date('2026-11-09T12:54:56Z') } as ChatMessage;
    expect(resendText(msg, { received_at: '2026-11-09T12:55:11Z', hop_count: 2, path_nodes: ['4ff1', 'd658'] }))
      .toBe('Sent again by the sender after 15 s, 2 hops · 4FF1 > D658');
  });
});
