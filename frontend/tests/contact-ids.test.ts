// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import '../src/components/conversation-list';
import type { ConversationList } from '../src/components/conversation-list';
import '../src/components/manage-dialog';
import type { ManageDialog } from '../src/components/manage-dialog';
import type { Channel, Contact } from '../src/types';
import { loadShowContactIds, saveShowContactIds } from '../src/utils/contact-ids';

const contact = { pubkey_prefix: 'a1b2c3aabbcc', adv_name: 'Alice' } as unknown as Contact;
const channel = { channel_idx: 1, name: 'Public' } as unknown as Channel;

async function mountList(showContactIds: boolean, activity: Record<string, string> = {}) {
  const el = document.createElement('chattx-conversation-list') as ConversationList;
  el.unread = new Proxy({}, { get: () => () => 0 }) as unknown as ConversationList['unread'];
  el.nodePrefix = 'abc';
  el.conversations = [contact, channel];
  el.activity = activity;
  el.showContactIds = showContactIds;
  document.body.appendChild(el);
  await el.updateComplete;
  await el.updateComplete;
  return el;
}

const rows = (el: ConversationList) => [...el.shadowRoot!.querySelectorAll('.conversation-item')];
const detail = (row: Element) => row.querySelector('.conversation-detail')?.textContent ?? null;

describe('contact IDs in the chat list', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
  });

  it('shows the ID by default', async () => {
    const [row] = rows(await mountList(true));
    expect(detail(row)).toBe('a1b2c3aabbcc');
  });

  it('shows the channel number by default', async () => {
    const [, channelRow] = rows(await mountList(true));
    expect(detail(channelRow)).toBe('Channel 1');
  });

  it('hides the contact ID and channel number when switched off', async () => {
    const [contactRow, channelRow] = rows(await mountList(false));
    expect(detail(contactRow)).toBeNull();
    expect(contactRow.getAttribute('aria-label')).toBe('Alice');
    expect(detail(channelRow)).toBeNull();
    expect(channelRow.getAttribute('aria-label')).toBe('Public');
  });

  it('keeps a channel age without its number', async () => {
    const recent = new Date(Date.now() - 5 * 60_000).toISOString();
    const [, channelRow] = rows(await mountList(false, { 'binary_sensor.meshcore_abc_ch_1_messages': recent }));
    expect(detail(channelRow)).toMatch(/5 min/);
    expect(detail(channelRow)).not.toContain('Channel');
  });

  it('keeps the message age without the ID', async () => {
    const recent = new Date(Date.now() - 5 * 60_000).toISOString();
    const [row] = rows(await mountList(false, { 'binary_sensor.meshcore_abc_a1b2c3_messages': recent }));
    expect(detail(row)).toMatch(/5 min/);
    expect(detail(row)).not.toContain('a1b2c3');
  });

  it('remembers the choice and defaults to on', () => {
    expect(loadShowContactIds()).toBe(true);
    saveShowContactIds(false);
    expect(loadShowContactIds()).toBe(false);
    saveShowContactIds(true);
    expect(loadShowContactIds()).toBe(true);
  });

  it('reports the switch from the manage dialog', async () => {
    const el = document.createElement('chattx-manage-dialog') as ManageDialog;
    document.body.appendChild(el);
    await el.updateComplete;
    const events: boolean[] = [];
    el.addEventListener('show-contact-ids-changed', (e) => events.push((e as CustomEvent).detail.enabled));
    const box = el.shadowRoot!.querySelector<HTMLInputElement>('.list-option input')!;
    expect(box.checked).toBe(true);
    box.click();
    expect(events).toEqual([false]);
  });
});
