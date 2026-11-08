import { describe, expect, it } from 'vitest';
import { lastPreviewOf } from '../src/utils/conversation-activity';
import type { Channel, Contact } from '../src/types';

const previews = {
  'binary_sensor.meshcore_24d959_ch_1_messages': { sender: 'Alice', text: 'hello mesh' },
  'binary_sensor.meshcore_24d959_c718f4_messages': { sender: 'OK1SIM-HA', text: 'hi Bob' },
};

describe('newest message in the chat list', () => {
  it('finds the preview of a channel and of a contact', () => {
    expect(lastPreviewOf({ channel_idx: 1 } as Channel, previews, '24d959')).toEqual({ sender: 'Alice', text: 'hello mesh' });
    expect(lastPreviewOf({ pubkey_prefix: 'c718f4aa' } as Contact, previews, '24d959')?.text).toBe('hi Bob');
    expect(lastPreviewOf({ channel_idx: 11 } as Channel, previews, '24d959')).toBeUndefined();
  });
});
