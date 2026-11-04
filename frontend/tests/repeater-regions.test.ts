// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { isRegionReplyOk, isRegionTreeCut, parseRegionTree } from '../src/components/repeater-regions';
import type { RepeaterRegions } from '../src/components/repeater-regions';
import type { HomeAssistant } from '../src/types';

const TREE = '*^ F\n cz F\n  plzen\n sk F';

describe('parseRegionTree', () => {
  it('reads depth, home and flood', () => {
    expect(parseRegionTree(TREE)).toEqual([
      { name: '*', depth: 0, home: true, flood: true },
      { name: 'cz', depth: 1, home: false, flood: true },
      { name: 'plzen', depth: 2, home: false, flood: false },
      { name: 'sk', depth: 1, home: false, flood: true },
    ]);
  });

  it('reads the single wildcard of a fresh repeater', () => {
    expect(parseRegionTree('*^ F')).toEqual([{ name: '*', depth: 0, home: true, flood: true }]);
  });

  it('drops the possibly half line of a reply that was cut', () => {
    const cut = `*^ F\n${' a F\n'.repeat(31)} xxxxxx`.slice(0, 159);
    expect(isRegionTreeCut(cut)).toBe(true);
    expect(parseRegionTree(cut).some((row) => row.name.startsWith('x'))).toBe(false);
    expect(isRegionTreeCut(TREE)).toBe(false);
  });
});

describe('isRegionReplyOk', () => {
  it('accepts firmware confirmations', () => {
    for (const reply of ['OK', 'OK - (flood allowed)', ' home is now cz', ' default scope is now <null>']) {
      expect(isRegionReplyOk(reply)).toBe(true);
    }
  });

  it('refuses errors', () => {
    for (const reply of ['Err - not empty', 'Err - unknown region', 'Err - unable to put', '']) {
      expect(isRegionReplyOk(reply)).toBe(false);
    }
  });
});

function makeHass(commandReply: Record<string, unknown> = { success: true, reply: 'OK' }, remembered: Record<string, unknown> = {}) {
  const callWS = vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_chattx/repeater_remembered_settings') return { settings: remembered };
    if (msg.type === 'meshcore_chattx/repeater_read') {
      return { success: true, value: msg.command === 'region default' ? 'default scope is cz' : TREE };
    }
    return commandReply;
  });
  return { hass: { callWS } as unknown as HomeAssistant, callWS };
}

async function flush(el: RepeaterRegions) {
  for (let i = 0; i < 8; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

async function mountLoaded(hass: HomeAssistant, canEdit = true) {
  const el = document.createElement('chattx-repeater-regions') as RepeaterRegions;
  el.hass = hass;
  el.prefix = 'abcdef123456';
  el.canEdit = canEdit;
  document.body.appendChild(el);
  await flush(el);
  if (canEdit) {
    el.shadowRoot!.querySelector<HTMLButtonElement>('button.load')!.click();
    await flush(el);
  }
  return el;
}

const sent = (callWS: ReturnType<typeof vi.fn>) =>
  callWS.mock.calls.map((c) => c[0]).filter((m) => m.type === 'meshcore_chattx/repeater_command').map((m) => m.command);
const row = (el: RepeaterRegions, name: string) =>
  [...el.shadowRoot!.querySelectorAll('.row')].find((r) => r.querySelector('.name')!.textContent === name)!;
const yes = (el: RepeaterRegions) => el.shadowRoot!.querySelector<HTMLButtonElement>('.confirm .danger')!;

describe('regions block', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('shows remembered regions before login and locks editing', async () => {
    const { hass, callWS } = makeHass(undefined, { region: { value: TREE, read_at: '2026-11-01T10:00:00+00:00' } });
    const el = await mountLoaded(hass, false);

    expect(el.shadowRoot!.querySelectorAll('.row')).toHaveLength(4);
    expect(row(el, 'cz').querySelector('input')!.disabled).toBe(true);
    expect(el.shadowRoot!.querySelector('.read-at')!.classList.contains('very-old')).toBe(true);
    expect(sent(callWS)).toEqual([]);
  });

  it('toggles flood right away and asks to save', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);

    row(el, 'plzen').querySelector('input')!.click();
    await flush(el);
    expect(sent(callWS)).toEqual(['region allowf plzen']);
    expect(el.shadowRoot!.querySelector('.warning')).not.toBeNull();

    el.shadowRoot!.querySelector<HTMLButtonElement>('.save')!.click();
    await flush(el);
    expect(sent(callWS)).toEqual(['region allowf plzen', 'region save']);
    expect(el.shadowRoot!.querySelector('.warning')).toBeNull();
    expect(el.shadowRoot!.querySelector('.notice')).not.toBeNull();
  });

  it('asks before denying flood on the wildcard', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);

    row(el, '*').querySelector('input')!.click();
    await flush(el);
    expect(sent(callWS)).toEqual([]);
    expect(el.shadowRoot!.querySelector('.confirm')).not.toBeNull();

    yes(el).click();
    await flush(el);
    expect(sent(callWS)).toEqual(['region denyf *']);
  });

  it('can cancel a confirmation', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);

    row(el, 'sk').querySelector<HTMLButtonElement>('button:last-child')!.click();
    await flush(el);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.confirm .quiet')!.click();
    await flush(el);

    expect(sent(callWS)).toEqual([]);
    expect(el.shadowRoot!.querySelector('.confirm')).toBeNull();
  });

  it('asks before removing and offers no removal of the wildcard', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);

    expect(row(el, '*').querySelector('button[aria-label]')).toBeNull();
    row(el, 'sk').querySelector<HTMLButtonElement>('button[aria-label]')!.click();
    await flush(el);
    yes(el).click();
    await flush(el);

    expect(sent(callWS)).toEqual(['region remove sk']);
  });

  it('shows firmware errors and stays unsaved-free', async () => {
    const { hass } = makeHass({ success: true, reply: 'Err - not empty' });
    const el = await mountLoaded(hass);

    row(el, 'cz').querySelector<HTMLButtonElement>('button[aria-label]')!.click();
    await flush(el);
    yes(el).click();
    await flush(el);

    expect(el.shadowRoot!.querySelector('.error')!.textContent).toContain('not empty');
    expect(el.shadowRoot!.querySelector('.warning')).toBeNull();
  });

  const addRegion = async (el: RepeaterRegions, name: string) => {
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.add input')!;
    input.value = name;
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;
    el.shadowRoot!.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await flush(el);
  };

  it('adds a region under the chosen parent', async () => {
    const { hass, callWS } = makeHass({ success: true, reply: 'OK - (flood allowed)' });
    const el = await mountLoaded(hass);
    await addRegion(el, 'de');
    expect(sent(callWS)).toEqual(['region put de']);

    const parent = el.shadowRoot!.querySelector<HTMLSelectElement>('.add select')!;
    parent.value = 'cz';
    parent.dispatchEvent(new Event('change'));
    await el.updateComplete;
    await addRegion(el, 'brno');

    expect(sent(callWS)).toEqual(['region put de', 'region put brno cz']);
  });

  it('refuses an existing name, which firmware would move and open to flood', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);

    await addRegion(el, '#plzen');

    expect(sent(callWS)).toEqual([]);
    expect(el.shadowRoot!.querySelector('.error')!.textContent).toContain('already exists');
  });

  it('refuses a name with spaces, which would become other arguments', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);

    await addRegion(el, 'a b');

    expect(sent(callWS)).toEqual([]);
  });

  it('warns that the default scope saves everything, then sends it', async () => {
    const { hass, callWS } = makeHass({ success: true, reply: ' default scope is now sk' });
    const el = await mountLoaded(hass);

    const select = el.shadowRoot!.querySelector<HTMLSelectElement>('.scope select')!;
    select.value = 'sk';
    select.dispatchEvent(new Event('change'));
    await flush(el);
    expect(sent(callWS)).toEqual([]);
    yes(el).click();
    await flush(el);

    expect(sent(callWS)).toEqual(['region default sk']);
    expect(el.shadowRoot!.querySelector('.warning')).toBeNull();
  });

  it('puts the default scope back when the change is cancelled', async () => {
    const { hass, callWS } = makeHass();
    const el = await mountLoaded(hass);
    const select = el.shadowRoot!.querySelector<HTMLSelectElement>('.scope select')!;
    expect(select.value).toBe('cz');

    select.value = 'sk';
    select.dispatchEvent(new Event('change'));
    await flush(el);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.confirm .quiet')!.click();
    await flush(el);

    expect(select.value).toBe('cz');
    expect(sent(callWS)).toEqual([]);
  });

  it('warns when a missing reply leaves the outcome unknown', async () => {
    const { hass } = makeHass({ success: false, reason: 'no_response' });
    const el = await mountLoaded(hass);

    row(el, 'plzen').querySelector('input')!.click();
    await flush(el);

    expect(el.shadowRoot!.querySelector('.error')!.textContent).toContain('did not answer');
    expect(el.shadowRoot!.querySelector('.warning')).not.toBeNull();
  });
});
