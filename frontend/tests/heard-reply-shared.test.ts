// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { formatHeardReply, saveHeardReply, setSharedHeardReply, syncHeardReply } from '../src/utils/heard-reply';
import type { HomeAssistant } from '../src/types';

function hassWith(stored: string | null, isAdmin = true) {
  const calls: Array<Record<string, unknown>> = [];
  let text = stored;
  const hass = {
    user: { is_admin: isAdmin },
    callWS: vi.fn(async (msg: Record<string, unknown>) => {
      calls.push(msg);
      if (msg.type === 'meshcore_chattx/get_heard_reply') return { text };
      if (msg.type === 'meshcore_chattx/set_heard_reply') { text = String(msg.text); return { text }; }
      throw new Error('unexpected');
    }),
  } as unknown as HomeAssistant;
  return { hass, calls };
}

beforeEach(() => {
  localStorage.clear();
  setSharedHeardReply('');
});

describe('reply text kept in Home Assistant', () => {
  it('uses the text from Home Assistant, not the browser', async () => {
    localStorage.setItem('chattx-heard-reply', 'Browser {hops}');
    const { hass, calls } = hassWith('Shared {hops}');
    await syncHeardReply(hass);
    expect(formatHeardReply(3)).toBe('Shared 3 hops');
    expect(calls.some((c) => c.type === 'meshcore_chattx/set_heard_reply')).toBe(false);
  });

  it('brings over the browser text once when Home Assistant has none', async () => {
    localStorage.setItem('chattx-heard-reply', 'Old {hops}');
    const { hass } = hassWith(null);
    await syncHeardReply(hass);
    expect(formatHeardReply(1)).toBe('Old 1 hop');
    expect(localStorage.getItem('chattx-heard-reply')).toBeNull();
  });

  it('does not bring it over for a non-admin user', async () => {
    localStorage.setItem('chattx-heard-reply', 'Old {hops}');
    const { hass } = hassWith(null, false);
    await syncHeardReply(hass);
    expect(formatHeardReply(2)).toBe('Heard, 2 hops!');
  });

  it('saves for every browser', async () => {
    const { hass } = hassWith('');
    expect(await saveHeardReply(hass, '  Copy {hops} ')).toBe(true);
    expect(formatHeardReply(4)).toBe('Copy 4 hops');
  });
});
