// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import '../src/components/emoji-picker';
import { EMOJI, type EmojiPicker } from '../src/components/emoji-picker';

async function mount(disabled = false) {
  const el = document.createElement('chattx-emoji-picker') as EmojiPicker;
  el.disabled = disabled;
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

const toggle = (el: EmojiPicker) => el.shadowRoot!.querySelector<HTMLButtonElement>('.toggle')!;
const items = (el: EmojiPicker) => [...el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.item')];

describe('emoji picker', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('opens the list on click', async () => {
    const el = await mount();
    expect(items(el)).toHaveLength(0);
    toggle(el).click();
    await el.updateComplete;
    expect(items(el)).toHaveLength(EMOJI.length);
  });

  it('reports the picked emoji and closes', async () => {
    const el = await mount();
    const picked: string[] = [];
    el.addEventListener('emoji-selected', (e) => picked.push((e as CustomEvent).detail.emoji));
    toggle(el).click();
    await el.updateComplete;
    items(el)[0].click();
    await el.updateComplete;
    expect(picked).toEqual([EMOJI[0]]);
    expect(items(el)).toHaveLength(0);
  });

  it('closes on Escape and on a click elsewhere', async () => {
    const el = await mount();
    toggle(el).click();
    await el.updateComplete;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await el.updateComplete;
    expect(items(el)).toHaveLength(0);

    toggle(el).click();
    await el.updateComplete;
    document.body.click();
    await el.updateComplete;
    expect(items(el)).toHaveLength(0);
  });

  it('has no duplicates', () => {
    expect(new Set(EMOJI).size).toBe(EMOJI.length);
  });

  it('stays closed while disabled', async () => {
    const el = await mount(true);
    toggle(el).click();
    await el.updateComplete;
    expect(items(el)).toHaveLength(0);
  });
});
