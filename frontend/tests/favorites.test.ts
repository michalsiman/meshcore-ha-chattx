// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { favoriteKey, isFavorite, loadFavorites, toggleFavorite, FAVORITES_CHANGED } from '../src/utils/favorites';
import '../src/components/conversation-list';
import type { ConversationList } from '../src/components/conversation-list';
import type { Channel, Contact } from '../src/types';

const contact = { pubkey_prefix: 'ABCDEF123456', adv_name: 'Alice', public_key: 'abcdef123456' } as unknown as Contact;
const channel = { channel_idx: 3, name: '#Test' } as unknown as Channel;
const other = { channel_idx: 0, name: 'Public' } as unknown as Channel;

afterEach(() => {
  localStorage.clear();
  document.body.innerHTML = '';
});

describe('favourites', () => {
  it('keys contacts by prefix and channels by name', () => {
    expect(favoriteKey(contact)).toBe('c:abcdef123456');
    expect(favoriteKey(channel)).toBe('ch:#test');
  });

  it('stars and unstars, and tells the page', () => {
    let events = 0;
    const count = () => { events += 1; };
    window.addEventListener(FAVORITES_CHANGED, count);
    expect(toggleFavorite(channel)).toBe(true);
    expect(isFavorite(channel)).toBe(true);
    expect(isFavorite({ ...channel, channel_idx: 7 } as Channel)).toBe(true);
    expect(toggleFavorite(channel)).toBe(false);
    expect(loadFavorites().size).toBe(0);
    window.removeEventListener(FAVORITES_CHANGED, count);
    expect(events).toBe(2);
  });

  it('the chat list offers All, Unread and Favourites, and Favourites shows the starred chats', async () => {
    toggleFavorite(contact);
    const el = document.createElement('chattx-conversation-list') as ConversationList;
    el.conversations = [contact, channel, other];
    document.body.appendChild(el);
    await el.updateComplete;
    const buttons = [...el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.filter-btn')];
    expect(buttons.map((b) => b.textContent!.trim())).toEqual(['All', 'Unread', 'Favourites']);
    buttons[2].click();
    await el.updateComplete;
    await el.updateComplete;
    const names = [...el.shadowRoot!.querySelectorAll('.conversation-name')].map((n) => n.textContent!.replace('★', ''));
    expect(names).toEqual(['Alice']);
    toggleFavorite(channel);
    await el.updateComplete;
    await el.updateComplete;
    expect([...el.shadowRoot!.querySelectorAll('.conversation-name')].map((n) => n.textContent!.replace('★', ''))).toEqual(['Alice', '#Test']);
  });
});

describe('favourites on top', () => {
  it('puts favourites first, alphabetically, the rest in the given order', async () => {
    const { favoritesFirst, saveFavoritesOnTop } = await import('../src/utils/favorites');
    const zed = { pubkey_prefix: '999999999999', adv_name: 'zed' } as unknown as Contact;
    const bob = { pubkey_prefix: '888888888888', adv_name: 'Bob' } as unknown as Contact;
    toggleFavorite(zed);
    toggleFavorite(channel);
    const list = [other, zed, contact, channel, bob];
    expect(favoritesFirst(list, loadFavorites()).map((c) => ('adv_name' in c ? c.adv_name : c.name)))
      .toEqual(['#Test', 'zed', 'Public', 'Alice', 'Bob']);

    saveFavoritesOnTop(true);
    const el = document.createElement('chattx-conversation-list') as ConversationList;
    el.conversations = list;
    document.body.appendChild(el);
    await el.updateComplete;
    await el.updateComplete;
    expect([...el.shadowRoot!.querySelectorAll('.conversation-name')].map((n) => n.textContent!.replace('★', '')))
      .toEqual(['#Test', 'zed', 'Public', 'Alice', 'Bob']);
  });
});

describe('favourite mark in the chat list', () => {
  it('shows a star before the name of a favourite only', async () => {
    toggleFavorite(contact);
    const el = document.createElement('chattx-conversation-list') as ConversationList;
    el.conversations = [contact, other];
    document.body.appendChild(el);
    await el.updateComplete;
    await el.updateComplete;
    const names = [...el.shadowRoot!.querySelectorAll('.conversation-name')];
    expect(names[0].querySelector('.fav-star')?.textContent).toBe('★');
    expect(names[1].querySelector('.fav-star')).toBeNull();
  });
});
