// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/components/repeater-terminal';
import type { RepeaterTerminal } from '../src/components/repeater-terminal';
import type { HomeAssistant } from '../src/types';

function makeHass(reply: Record<string, unknown> | Error) {
  const callWS = vi.fn(async () => {
    if (reply instanceof Error) throw reply;
    return reply;
  });
  return { hass: { callWS } as unknown as HomeAssistant, callWS };
}

async function flush(el: RepeaterTerminal) {
  for (let i = 0; i < 5; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

async function mount(hass: HomeAssistant, canSend = true) {
  const el = document.createElement('chattx-repeater-terminal') as RepeaterTerminal;
  el.hass = hass;
  el.prefix = 'abcdef123456';
  el.canSend = canSend;
  document.body.appendChild(el);
  await flush(el);
  return el;
}

const input = (el: RepeaterTerminal) => el.shadowRoot!.querySelector('input')!;
const log = (el: RepeaterTerminal) =>
  [...el.shadowRoot!.querySelectorAll('.log > div')].map((d) => d.textContent);

async function send(el: RepeaterTerminal, command: string) {
  input(el).value = command;
  input(el).dispatchEvent(new Event('input'));
  await el.updateComplete;
  el.shadowRoot!.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
  await flush(el);
}

describe('repeater terminal', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('sends the command and shows it with the reply', async () => {
    const { hass, callWS } = makeHass({ success: true, reply: '> 22' });
    const el = await mount(hass);

    await send(el, '  get tx ');

    expect(callWS).toHaveBeenCalledWith({
      type: 'meshcore_chattx/repeater_command',
      target_prefix: 'abcdef123456',
      command: 'get tx',
    });
    expect(log(el)).toEqual(['$ get tx', '> 22']);
    expect(input(el).value).toBe('');
  });

  it('sends once and explains a missing reply', async () => {
    const { hass, callWS } = makeHass({ success: false, reason: 'no_response' });
    const el = await mount(hass);

    await send(el, 'reboot');

    expect(callWS).toHaveBeenCalledTimes(1);
    expect(log(el)[1]).toContain('No reply');
  });

  it('does not send later when the traffic limit refuses', async () => {
    const { hass, callWS } = makeHass({ success: false, reason: 'rate_limited', retry_after: 9 });
    const el = await mount(hass);

    await send(el, 'reboot');
    await new Promise((resolve) => setTimeout(resolve, 20));

    expect(callWS).toHaveBeenCalledTimes(1);
    expect(log(el)[1]).toContain('9 s');
  });

  it('shows server errors', async () => {
    const { hass } = makeHass(new Error('Contact not found'));
    const el = await mount(hass);

    await send(el, 'ver');

    expect(log(el)[1]).toContain('Contact not found');
  });

  it('shows replies as text, not markup', async () => {
    const { hass } = makeHass({ success: true, reply: '<img src=x onerror=alert(1)>' });
    const el = await mount(hass);

    await send(el, 'ver');

    expect(el.shadowRoot!.querySelector('.log img')).toBeNull();
    expect(log(el)[1]).toBe('<img src=x onerror=alert(1)>');
  });

  it('recalls earlier commands with the arrow keys', async () => {
    const { hass } = makeHass({ success: true, reply: 'ok' });
    const el = await mount(hass);
    await send(el, 'one');
    await send(el, 'two');
    const press = async (key: string) => {
      input(el).dispatchEvent(new KeyboardEvent('keydown', { key }));
      await el.updateComplete;
    };

    await press('ArrowUp');
    expect(input(el).value).toBe('two');
    await press('ArrowUp');
    expect(input(el).value).toBe('one');
    await press('ArrowDown');
    expect(input(el).value).toBe('two');
    await press('ArrowDown');
    expect(input(el).value).toBe('');
  });

  it('is locked until logged in', async () => {
    const { hass, callWS } = makeHass({ success: true, reply: 'ok' });
    const el = await mount(hass, false);

    expect(input(el).disabled).toBe(true);
    el.shadowRoot!.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await flush(el);

    expect(callWS).not.toHaveBeenCalled();
  });
});
