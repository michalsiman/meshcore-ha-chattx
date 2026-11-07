import { describe, expect, it } from 'vitest';
import { lateEchoText } from '../src/components/message-bubble';
import { toClientMessage } from '../src/chat/message-parser';
import type { ChatMessage, StoredMessage } from '../src/types';

const sent = { timestamp: new Date('2026-11-07T09:37:10Z') } as ChatMessage;

describe('late echoes of own messages', () => {
  it('says how late and through which repeaters the copy came back', () => {
    expect(lateEchoText(sent, {
      received_at: '2026-11-07T10:18:17+00:00',
      hop_count: 3,
      path_nodes: ['d658', '4368', 'd658'],
    })).toBe('Came back through the mesh after 41 min, 3 hops · D658 > 4368 > D658');
  });

  it('works without a path', () => {
    expect(lateEchoText(sent, { received_at: '2026-11-07T11:07:10+00:00' }))
      .toBe('Came back through the mesh after 90 min');
  });

  it('maps stored late_echoes onto the message', () => {
    const stored = {
      id: 'a', sender: 'Me', text: 'hi', timestamp: '2026-11-07T09:37:10+00:00',
      message_type: 'channel', outgoing: true, rx_log_data: [], delivery_status: 'sent',
      late_echoes: [{ received_at: '2026-11-07T10:18:17+00:00', hop_count: 25 }],
    } as StoredMessage;
    expect(toClientMessage(stored).lateEchoes).toEqual(stored.late_echoes);
    expect(toClientMessage({ ...stored, late_echoes: [] }).lateEchoes).toBeUndefined();
  });
});
