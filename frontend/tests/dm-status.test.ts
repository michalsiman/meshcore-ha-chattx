// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import '../src/components/message-bubble';

type Bubble = HTMLElement & { _getStatusLabel(s: Record<string, unknown>): string };
const bubble = () => document.createElement('chattx-message-bubble') as Bubble;

describe('status of an own message', () => {
  it('a direct message follows the ACK, with its attempts', () => {
    expect(bubble()._getStatusLabel({ status: 'sent', ackReceived: true })).toBe('Delivered');
    expect(bubble()._getStatusLabel({ status: 'sent', ackReceived: false, attempts: 2 })).toBe('Not confirmed · 2 attempts');
    expect(bubble()._getStatusLabel({ status: 'delivered', ackReceived: false })).toBe('Delivered');
  });
  it('a channel message still follows the repeats', () => {
    expect(bubble()._getStatusLabel({ status: 'sent', repeaterCount: 0 })).toBe('Unheard');
    expect(bubble()._getStatusLabel({ status: 'sent', repeaterCount: 3 })).toBe('Repeated');
  });
});
