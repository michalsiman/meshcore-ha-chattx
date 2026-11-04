// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/components/repeater-login';
import type { RepeaterLogin } from '../src/components/repeater-login';
import type { HomeAssistant } from '../src/types';

type Reply = Record<string, unknown> | Error;

function makeHass(loginReply: Reply, hasSaved = false, loggedInAt: string | null = null) {
  const callWS = vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_chattx/repeater_login_state') return { has_saved_password: hasSaved, logged_in_at: loggedInAt };
    if (msg.type === 'meshcore_chattx/repeater_forget_password') return { has_saved_password: false };
    if (loginReply instanceof Error) throw loginReply;
    return loginReply;
  });
  return { hass: { callWS } as unknown as HomeAssistant, callWS };
}

async function mount(hass: HomeAssistant) {
  const el = document.createElement('chattx-repeater-login') as RepeaterLogin;
  el.hass = hass;
  el.prefix = 'abcdef123456';
  document.body.appendChild(el);
  await flush(el);
  return el;
}

async function flush(el: RepeaterLogin) {
  for (let i = 0; i < 4; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

const $ = <T extends Element>(el: RepeaterLogin, selector: string) =>
  el.shadowRoot!.querySelector<T>(selector);

async function submit(el: RepeaterLogin, password?: string) {
  if (password !== undefined) {
    const input = $<HTMLInputElement>(el, 'input[type="password"]')!;
    input.value = password;
    input.dispatchEvent(new Event('input'));
  }
  $<HTMLFormElement>(el, 'form')!.dispatchEvent(new Event('submit', { cancelable: true }));
  await flush(el);
}

const loginCall = (callWS: ReturnType<typeof vi.fn>) =>
  callWS.mock.calls.map((c) => c[0]).find((m) => m.type === 'meshcore_chattx/repeater_login');

describe('repeater login form', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('sends the typed password and remember flag', async () => {
    const { hass, callWS } = makeHass({ success: true, is_admin: true, has_saved_password: true });
    const el = await mount(hass);
    const box = $<HTMLInputElement>(el, 'input[type="checkbox"]')!;
    box.checked = true;
    box.dispatchEvent(new Event('change'));

    await submit(el, 's3cret');

    expect(loginCall(callWS)).toMatchObject({ password: 's3cret', remember: true, target_prefix: 'abcdef123456' });
    expect($(el, '.success')!.textContent).toContain('administrator');
    expect($<HTMLInputElement>(el, 'input[type="password"]')!.value).toBe('');
  });

  it('starts ticked with a saved password and omits the password when logging in', async () => {
    const { hass, callWS } = makeHass({ success: true, is_admin: true, has_saved_password: true }, true);
    const el = await mount(hass);

    expect($<HTMLInputElement>(el, 'input[type="checkbox"]')!.checked).toBe(true);
    expect($<HTMLInputElement>(el, 'input[type="password"]')!.placeholder).toBe('Saved password');

    await submit(el);

    expect(loginCall(callWS)).not.toHaveProperty('password');
  });

  it('explains an unconfirmed login', async () => {
    const { hass } = makeHass({ success: false, reason: 'no_response', has_saved_password: false });
    const el = await mount(hass);
    await submit(el, 'wrong');

    expect($(el, '.error')!.textContent).toContain('did not confirm');
    expect($<HTMLInputElement>(el, 'input[type="password"]')!.value).toBe('wrong');
  });

  it('warns that a guest login cannot change settings', async () => {
    const { hass } = makeHass({ success: true, is_admin: false });
    const el = await mount(hass);
    await submit(el, 'guest');

    expect($(el, '.success')!.textContent).toContain('guest');
  });

  it('shows the wait time when rate limited', async () => {
    const { hass } = makeHass({ success: false, reason: 'rate_limited', retry_after: 12 });
    const el = await mount(hass);
    await submit(el, 'x');

    expect($(el, '.error')!.textContent).toContain('12 seconds');
  });

  it('shows WebSocket errors', async () => {
    const { hass } = makeHass(new Error('Contact not found on the radio'));
    const el = await mount(hass);
    await submit(el, 'x');

    expect($(el, '.error')!.textContent).toContain('Contact not found');
  });

  it('reports a remembered login without sending one', async () => {
    const { hass, callWS } = makeHass({ success: true }, true, '2026-11-04T11:00:00+00:00');
    const events: string[] = [];
    const el = document.createElement('chattx-repeater-login') as RepeaterLogin;
    el.addEventListener('repeater-logged-in', (e) => events.push((e as CustomEvent).detail.role));
    el.hass = hass;
    el.prefix = 'abcdef123456';
    document.body.appendChild(el);
    await flush(el);

    expect(events).toEqual(['admin']);
    expect(loginCall(callWS)).toBeUndefined();
    expect($(el, '.success')!.textContent).toContain('No need to log in again');
  });

  it('keeps a remembered login visible when a new attempt fails', async () => {
    const { hass } = makeHass({ success: false, reason: 'no_response' }, true, '2026-11-04T11:00:00+00:00');
    const el = await mount(hass);
    await submit(el, 'wrong');

    expect($(el, '.error')!.textContent).toContain('did not confirm');
    expect($(el, '.success')!.textContent).toContain('No need to log in again');
  });

  it('forgets a saved password', async () => {
    const { hass, callWS } = makeHass({ success: true }, true);
    const el = await mount(hass);
    $<HTMLButtonElement>(el, 'button.link')!.click();
    await flush(el);

    expect(callWS.mock.calls.map((c) => c[0].type)).toContain('meshcore_chattx/repeater_forget_password');
    expect($(el, 'button.link')).toBeNull();
    expect($<HTMLInputElement>(el, 'input[type="checkbox"]')!.checked).toBe(false);
  });
});
