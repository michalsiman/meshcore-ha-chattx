// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { formatHeardAgo } from '../src/components/repeater-neighbours';
import type { RepeaterNeighbours } from '../src/components/repeater-neighbours';
import type { HomeAssistant } from '../src/types';

const LIST = [
  { pubkey: 'aaaaaaaa', name: 'Weak', secs_ago: 7200, snr: -7.75 },
  { pubkey: 'bbbbbbbb', name: 'Strong', secs_ago: 30, snr: 5.25 },
];

function makeHass(replies: Array<Record<string, unknown>>, remembered: Record<string, unknown> = {}) {
  const callWS = vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_chattx/repeater_remembered_settings') return { settings: remembered };
    return replies.shift();
  });
  return { hass: { callWS } as unknown as HomeAssistant, callWS };
}

async function flush(el: RepeaterNeighbours) {
  for (let i = 0; i < 6; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

async function mount(hass: HomeAssistant, canLoad = true) {
  const el = document.createElement('chattx-repeater-neighbours') as RepeaterNeighbours;
  el.hass = hass;
  el.prefix = 'abcdef123456';
  el.canLoad = canLoad;
  document.body.appendChild(el);
  await flush(el);
  return el;
}

const rows = (el: RepeaterNeighbours) =>
  [...el.shadowRoot!.querySelectorAll('tbody tr')].map((r) => [...r.querySelectorAll('td')].map((d) => d.textContent));
const load = async (el: RepeaterNeighbours) => {
  el.shadowRoot!.querySelector<HTMLButtonElement>('.reload')!.click();
  await flush(el);
};
const offsets = (callWS: ReturnType<typeof vi.fn>) =>
  callWS.mock.calls.map((c) => c[0]).filter((m) => m.type === 'meshcore_chattx/repeater_read_neighbours').map((m) => m.offset);

describe('formatHeardAgo', () => {
  it('picks a readable unit', () => {
    expect(formatHeardAgo(30, false)).toBe('30 s ago');
    expect(formatHeardAgo(300, false)).toBe('5 min ago');
    expect(formatHeardAgo(7200, true)).toBe('před 2 h');
    expect(formatHeardAgo(259200, true)).toBe('před 3 d');
  });
});

describe('neighbours block', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('waits for login', async () => {
    const { hass } = makeHass([]);
    const el = await mount(hass, false);

    expect(el.shadowRoot!.querySelector('button')!.disabled).toBe(true);
  });

  it('lists neighbours strongest first', async () => {
    const { hass } = makeHass([{ success: true, neighbours: LIST, total: 2 }]);
    const el = await mount(hass);

    await load(el);

    expect(rows(el).map((r) => r.slice(0, 2))).toEqual([['Strong', '5.25'], ['Weak', '-7.75']]);
    expect(el.shadowRoot!.querySelector('button')!.textContent!.trim()).toBe('Reload');
  });

  it('shows remembered neighbours, adding the time since the read', async () => {
    const readAt = new Date(Date.now() - 3600_000).toISOString();
    const { hass, callWS } = makeHass([], { neighbours: { neighbours: LIST, total: 2, read_at: readAt } });
    const el = await mount(hass, false);

    expect(rows(el)[0]).toEqual(['Strong', '5.25', '1 h ago']);
    expect(el.shadowRoot!.querySelector('.read-at')).not.toBeNull();
    expect(callWS.mock.calls.filter((c) => c[0].type === 'meshcore_chattx/repeater_read_neighbours')).toHaveLength(0);
  });

  it('offers the next ten and asks from where the list ended', async () => {
    const more = [...LIST, { pubkey: 'cccccccc', name: 'Third', secs_ago: 5, snr: 1 }];
    const { hass, callWS } = makeHass([
      { success: true, neighbours: LIST, total: 3 },
      { success: true, neighbours: more, total: 3 },
    ]);
    const el = await mount(hass);

    await load(el);
    expect(el.shadowRoot!.textContent).toContain('2 of 3');

    el.shadowRoot!.querySelector<HTMLButtonElement>('.next')!.click();
    await flush(el);

    expect(offsets(callWS)).toEqual([0, 2]);
    expect(rows(el)).toHaveLength(3);
    expect(el.shadowRoot!.querySelector('.next')).toBeNull();
  });

  it('starts over on reload', async () => {
    const { hass, callWS } = makeHass([{ success: true, neighbours: LIST, total: 5 }], {
      neighbours: { neighbours: LIST, total: 5, read_at: new Date().toISOString() },
    });
    const el = await mount(hass);

    await load(el);

    expect(offsets(callWS)).toEqual([0]);
  });

  it('continues a remembered list where it ended', async () => {
    const { hass, callWS } = makeHass([{ success: true, neighbours: LIST, total: 5 }], {
      neighbours: { neighbours: LIST, total: 5, read_at: new Date().toISOString() },
    });
    const el = await mount(hass);

    el.shadowRoot!.querySelector<HTMLButtonElement>('.next')!.click();
    await flush(el);

    expect(offsets(callWS)).toEqual([2]);
  });

  it('counts heard time from when each entry was read', async () => {
    const earlier = new Date(Date.now() - 3600_000).toISOString();
    const entry = { pubkey: 'a', name: 'A', secs_ago: 0, snr: 1, read_at: earlier };
    const { hass } = makeHass([], { neighbours: { neighbours: [entry], total: 1, read_at: new Date().toISOString() } });
    const el = await mount(hass);

    expect(rows(el)[0][2]).toBe('1 h ago');
  });

  it('keeps the old list when a reload gets no answer', async () => {
    const { hass } = makeHass([{ success: false, reason: 'no_response' }], {
      neighbours: { neighbours: LIST, total: 2, read_at: new Date().toISOString() },
    });
    const el = await mount(hass);

    await load(el);

    expect(rows(el)).toHaveLength(2);
    expect(el.shadowRoot!.querySelector('.error')).not.toBeNull();
  });

  it('says when there are none', async () => {
    const { hass } = makeHass([{ success: true, neighbours: [], total: 0 }]);
    const el = await mount(hass);

    await load(el);

    expect(el.shadowRoot!.textContent).toContain('no neighbours');
  });
});
