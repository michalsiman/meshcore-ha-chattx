// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { REPEATER_SETTING_GROUPS } from '../src/components/repeater-settings';
import type { RepeaterSettings } from '../src/components/repeater-settings';
import { isRepeaterSettingsReply, readRepeaterSetting } from '../src/api';
import type { HomeAssistant } from '../src/types';

type Reply = Record<string, unknown> | Array<Record<string, unknown>> | undefined;

function makeHass(replies: Record<string, Reply>, remembered: Record<string, unknown> = {}) {
  const callWS = vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_chattx/repeater_remembered_settings') return { settings: remembered };
    const reply = replies[msg.command as string];
    if (Array.isArray(reply)) return reply.shift() ?? { success: true, value: `value of ${msg.command}` };
    return reply ?? { success: true, value: `value of ${msg.command}` };
  });
  return { hass: { callWS } as unknown as HomeAssistant, callWS };
}

async function flush(el: RepeaterSettings) {
  for (let i = 0; i < 60; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

async function mount(hass: HomeAssistant, canLoad = true) {
  const el = document.createElement('chattx-repeater-settings') as RepeaterSettings;
  el.hass = hass;
  el.prefix = 'abcdef123456';
  el.canLoad = canLoad;
  document.body.appendChild(el);
  await flush(el);
  return el;
}

function fieldValue(el: RepeaterSettings, label: string): string | undefined {
  const match = [...el.shadowRoot!.querySelectorAll('label')].find((l) => l.textContent!.trim().startsWith(label));
  return match?.querySelector('input')?.value;
}

const groupButton = (el: RepeaterSettings, title: string) =>
  [...el.shadowRoot!.querySelectorAll('section')]
    .find((s) => s.querySelector('h4')!.textContent === title)!
    .querySelector('button') as HTMLButtonElement;

const commands = (callWS: ReturnType<typeof vi.fn>) =>
  callWS.mock.calls.map((c) => c[0].command).filter(Boolean);

describe('repeater settings', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('shows every field empty and disables loading before login', async () => {
    const { hass, callWS } = makeHass({});
    const el = await mount(hass, false);

    expect(fieldValue(el, 'Name')).toBe('');
    expect(fieldValue(el, 'TX power')).toBe('');
    expect(groupButton(el, 'Radio').disabled).toBe(true);
    expect(el.shadowRoot!.textContent).toContain('Log in as administrator');
    expect(commands(callWS)).toEqual([]);
  });

  it('loads only the chosen group, in order', async () => {
    const { hass, callWS } = makeHass({});
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);

    expect(commands(callWS)).toEqual(['get lat', 'get lon']);
    expect(fieldValue(el, 'Latitude')).toBe('value of get lat');
    expect(fieldValue(el, 'Name')).toBe('');
  });

  it('splits the radio reply into its fields', async () => {
    const { hass } = makeHass({ 'get radio': { success: true, value: '869.618,62.5,8,5' } });
    const el = await mount(hass);

    groupButton(el, 'Radio').click();
    await flush(el);

    expect(fieldValue(el, 'Frequency')).toBe('869.618');
    expect(fieldValue(el, 'Bandwidth')).toBe('62.5');
    expect(fieldValue(el, 'Spreading factor')).toBe('8');
    expect(fieldValue(el, 'Coding rate')).toBe('5');
  });

  it('marks unsupported settings and keeps going', async () => {
    const { hass, callWS } = makeHass({
      'get lat': { success: false, reason: 'unsupported', message: 'Unknown command' },
    });
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);

    expect(fieldValue(el, 'Latitude')).toBe('Not supported');
    expect(commands(callWS)).toContain('get lon');
  });

  it('has no way to load everything at once', async () => {
    const { hass } = makeHass({});
    const el = await mount(hass);

    expect(el.shadowRoot!.querySelectorAll('button').length).toBe(REPEATER_SETTING_GROUPS.length);
    expect(el.shadowRoot!.querySelectorAll('section button').length).toBe(REPEATER_SETTING_GROUPS.length);
  });

  it('stops after two unanswered commands in a row', async () => {
    const none = { success: false, reason: 'no_response' };
    const { hass, callWS } = makeHass({ 'get name': none, 'get role': none });
    const el = await mount(hass);

    groupButton(el, 'Basic').click();
    await flush(el);

    expect(commands(callWS)).toEqual(['get name', 'get role']);
    expect(fieldValue(el, 'Name')).toBe('No response');
    expect(el.shadowRoot!.querySelector('.error')!.textContent).toContain('stopped answering');
    expect(groupButton(el, 'Basic').disabled).toBe(false);
  });

  it('loading again fills only what is missing', async () => {
    const { hass, callWS } = makeHass({ 'get lon': [{ success: false, reason: 'no_response' }] });
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);
    expect(fieldValue(el, 'Longitude')).toBe('No response');

    callWS.mockClear();
    groupButton(el, 'Location').click();
    await flush(el);

    expect(commands(callWS)).toEqual(['get lon']);
    expect(fieldValue(el, 'Longitude')).toBe('value of get lon');
  });

  it('refreshes a fully loaded group', async () => {
    const { hass, callWS } = makeHass({});
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);
    callWS.mockClear();
    groupButton(el, 'Location').click();
    await flush(el);

    expect(commands(callWS)).toEqual(['get lat', 'get lon']);
  });

  it('waits out the traffic budget and continues', async () => {
    const { hass } = makeHass({ 'get lat': [{ success: false, reason: 'rate_limited', retry_after: 1 }] });
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);
    expect(el.shadowRoot!.querySelector('[role="status"]')!.textContent).toContain('1 s');
    expect(fieldValue(el, 'Latitude')).toBe('…');

    await new Promise((resolve) => setTimeout(resolve, 1100));
    await flush(el);

    expect(el.shadowRoot!.querySelector('[role="status"]')).toBeNull();
    expect(fieldValue(el, 'Latitude')).toBe('value of get lat');
    expect(fieldValue(el, 'Longitude')).toBe('value of get lon');
  });

  it('stops sending when the dialog closes during a wait', async () => {
    const { hass, callWS } = makeHass({ 'get lat': [{ success: false, reason: 'rate_limited', retry_after: 1 }] });
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);
    el.remove();
    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(commands(callWS)).toEqual(['get lat']);
  });

  it('rounds the frequency', async () => {
    const { hass } = makeHass({ 'get radio': { success: true, value: '869.4320068,62.5,7,5' } });
    const el = await mount(hass);

    groupButton(el, 'Radio').click();
    await flush(el);

    expect(fieldValue(el, 'Frequency')).toBe('869.432');
    expect(fieldValue(el, 'Bandwidth')).toBe('62.5');
  });

  it('flags replies only around a read', async () => {
    const { hass } = makeHass({});
    expect(isRepeaterSettingsReply('fedcba654321')).toBe(false);

    await readRepeaterSetting(hass, 'fedcba654321', 'get tx');

    expect(isRepeaterSettingsReply('fedcba654321')).toBe(true);
    expect(isRepeaterSettingsReply('ffffffffffff')).toBe(false);
    vi.useFakeTimers({ now: Date.now() + 3001 });
    expect(isRepeaterSettingsReply('fedcba654321')).toBe(false);
    vi.useRealTimers();
  });

  const READ_AT = '2026-11-01T10:00:00+00:00';
  const label = (el: RepeaterSettings, title: string) => groupButton(el, title).textContent!.trim();
  const note = (el: RepeaterSettings, title: string) =>
    [...el.shadowRoot!.querySelectorAll('section')]
      .find((s) => s.querySelector('h4')!.textContent === title)!
      .querySelector('.read-at');

  it('shows remembered values before login, without asking the repeater', async () => {
    const { hass, callWS } = makeHass({}, {
      'get lat': { value: '49.6', read_at: READ_AT },
      'get lon': { value: '13.1', read_at: READ_AT },
    });
    const el = await mount(hass, false);

    expect(fieldValue(el, 'Latitude')).toBe('49.6');
    expect(note(el, 'Location')!.textContent).toContain(new Date(READ_AT).toLocaleString());
    expect(label(el, 'Location')).toBe('Reload');
    expect(commands(callWS)).toEqual([]);
  });

  it('colours an old read time', async () => {
    const { hass } = makeHass({}, { 'get lat': { value: '49.6', read_at: READ_AT } });
    const el = await mount(hass);

    expect(note(el, 'Location')!.classList.contains('very-old')).toBe(true);
  });

  it('offers load until a group is complete and notes nothing before any read', async () => {
    const { hass } = makeHass({}, { 'get lat': { value: '49.6', read_at: READ_AT } });
    const el = await mount(hass);

    expect(label(el, 'Location')).toBe('Load');
    expect(note(el, 'Radio')).toBeNull();
  });

  it('counts a remembered unsupported answer as loaded', async () => {
    const { hass } = makeHass({}, {
      'get lat': { unsupported: 'Error: unsupported', read_at: READ_AT },
      'get lon': { value: '13.1', read_at: READ_AT },
    });
    const el = await mount(hass);

    expect(fieldValue(el, 'Latitude')).toBe('Not supported');
    expect(label(el, 'Location')).toBe('Reload');
  });

  it('notes the oldest time when a group was read at different times', async () => {
    const { hass } = makeHass({}, {
      'get lat': { value: '49.6', read_at: READ_AT },
      'get lon': { value: '13.1', read_at: '2026-11-03T10:00:00+00:00' },
    });
    const el = await mount(hass);

    expect(note(el, 'Location')!.textContent).toContain(new Date(READ_AT).toLocaleString());
  });

  it('keeps the old value and time when a reload gets no answer', async () => {
    const { hass } = makeHass({ 'get lat': { success: false, reason: 'no_response' } }, {
      'get lat': { value: '49.6', read_at: READ_AT },
      'get lon': { value: '13.1', read_at: READ_AT },
    });
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);

    expect(fieldValue(el, 'Latitude')).toBe('49.6');
    expect(fieldValue(el, 'Longitude')).toBe('value of get lon');
    expect(note(el, 'Location')!.textContent).toContain(new Date(READ_AT).toLocaleString());
  });

  it('updates the time after a successful reload', async () => {
    const { hass } = makeHass({}, {
      'get lat': { value: '49.6', read_at: READ_AT },
      'get lon': { value: '13.1', read_at: READ_AT },
    });
    const el = await mount(hass);

    groupButton(el, 'Location').click();
    await flush(el);

    expect(note(el, 'Location')!.textContent).not.toContain(new Date(READ_AT).toLocaleString());
  });

  it('never reads secrets', () => {
    const all = REPEATER_SETTING_GROUPS.flatMap((g) => g.fields.map((f) => f.command));
    expect(all).not.toContain('get guest.password');
    expect(all).not.toContain('get prv.key');
    expect(all.every((c) => /^(get [a-z0-9_.]+|ver|board)$/.test(c))).toBe(true);
  });
});
