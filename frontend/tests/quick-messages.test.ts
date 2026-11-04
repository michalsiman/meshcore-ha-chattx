// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/components/quick-message-picker';
import '../src/components/quick-messages-editor';
import type { QuickMessagePicker } from '../src/components/quick-message-picker';
import type { QuickMessagesEditor } from '../src/components/quick-messages-editor';
import type { HomeAssistant } from '../src/types';

function makeHass(messages: string[], isAdmin = true) {
  const callWS = vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_chattx/set_quick_messages') return { messages: msg.messages };
    return { messages };
  });
  return { hass: { callWS, user: { is_admin: isAdmin } } as unknown as HomeAssistant, callWS };
}

async function flush(el: { updateComplete: Promise<boolean> }) {
  for (let i = 0; i < 4; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

async function mountPicker(hass: HomeAssistant) {
  const el = document.createElement('chattx-quick-message-picker') as QuickMessagePicker;
  el.hass = hass;
  document.body.appendChild(el);
  await flush(el);
  return el;
}

async function mountEditor(hass: HomeAssistant) {
  const el = document.createElement('chattx-quick-messages-editor') as QuickMessagesEditor;
  el.hass = hass;
  document.body.appendChild(el);
  await flush(el);
  return el;
}

describe('quick message picker', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  const open = async (el: QuickMessagePicker) => {
    el.shadowRoot!.querySelector<HTMLButtonElement>('.toggle')!.click();
    await flush(el);
  };

  it('offers the messages and reports the chosen one, then closes', async () => {
    const { hass } = makeHass(['ahoj', 'jsem na ceste']);
    const el = await mountPicker(hass);
    const chosen: string[] = [];
    el.addEventListener('quick-message-selected', (e) => chosen.push((e as CustomEvent).detail.message));

    await open(el);
    const items = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.item');
    expect([...items].map((i) => i.textContent)).toEqual(['ahoj', 'jsem na ceste']);

    items[1].click();
    await flush(el);

    expect(chosen).toEqual(['jsem na ceste']);
    expect(el.shadowRoot!.querySelector('.menu')).toBeNull();
  });

  it('explains where to add messages when there are none', async () => {
    const { hass } = makeHass([]);
    const el = await mountPicker(hass);
    await open(el);

    expect(el.shadowRoot!.querySelector('.empty')).not.toBeNull();
  });

  it('closes on an outside click and on Escape', async () => {
    const { hass } = makeHass(['ahoj']);
    const el = await mountPicker(hass);

    await open(el);
    document.body.click();
    await flush(el);
    expect(el.shadowRoot!.querySelector('.menu')).toBeNull();

    await open(el);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await flush(el);
    expect(el.shadowRoot!.querySelector('.menu')).toBeNull();
  });

  it('does not open while disabled', async () => {
    const { hass, callWS } = makeHass(['ahoj']);
    const el = await mountPicker(hass);
    el.disabled = true;
    await flush(el);

    el.shadowRoot!.querySelector<HTMLButtonElement>('.toggle')!.click();
    await flush(el);

    expect(callWS).not.toHaveBeenCalled();
  });
});

describe('quick messages editor', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  const type = async (el: QuickMessagesEditor, text: string) => {
    const area = el.shadowRoot!.querySelector('textarea')!;
    area.value = text;
    area.dispatchEvent(new Event('input'));
    await flush(el);
  };

  it('shows stored messages one per line', async () => {
    const { hass } = makeHass(['a', 'b']);
    const el = await mountEditor(hass);

    expect(el.shadowRoot!.querySelector('textarea')!.value).toBe('a\nb');
  });

  it('saves trimmed lines without empty ones', async () => {
    const { hass, callWS } = makeHass([]);
    const el = await mountEditor(hass);
    await type(el, '  a  \n\n b\n');

    el.shadowRoot!.querySelector('button')!.click();
    await flush(el);

    expect(callWS).toHaveBeenCalledWith({ type: 'meshcore_chattx/set_quick_messages', messages: ['a', 'b'] });
    expect(el.shadowRoot!.querySelector('.status')).not.toBeNull();
  });

  it('refuses overlong messages without saving', async () => {
    const { hass, callWS } = makeHass([]);
    const el = await mountEditor(hass);
    await type(el, 'č'.repeat(81));

    el.shadowRoot!.querySelector('button')!.click();
    await flush(el);

    expect(el.shadowRoot!.querySelector('.error')).not.toBeNull();
    expect(callWS.mock.calls.map((c) => c[0].type)).not.toContain('meshcore_chattx/set_quick_messages');
  });

  it('accepts a message of exactly the limit', async () => {
    const { hass, callWS } = makeHass([]);
    const el = await mountEditor(hass);
    await type(el, 'č'.repeat(80));

    el.shadowRoot!.querySelector('button')!.click();
    await flush(el);

    expect(el.shadowRoot!.querySelector('.error')).toBeNull();
    expect(callWS.mock.calls.map((c) => c[0].type)).toContain('meshcore_chattx/set_quick_messages');
  });

  it('is read-only for non-admins', async () => {
    const { hass } = makeHass(['a'], false);
    const el = await mountEditor(hass);

    expect(el.shadowRoot!.querySelector('textarea')!.readOnly).toBe(true);
    expect(el.shadowRoot!.querySelector('button')).toBeNull();
  });
});
