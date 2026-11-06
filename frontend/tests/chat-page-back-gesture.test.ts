// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest';
import '../src/pages/chat-page';

type Page = HTMLElement & {
  _narrowShowMessages: boolean;
  _openNarrowConversation(): void;
  _closeNarrowConversation(): void;
  _onPopState(): void;
};

const make = () => document.createElement('chattx-chat-page') as unknown as Page;
const marker = () => (history.state as { chattxConversation?: boolean } | null)?.chattxConversation;

describe('chat page back gesture on phones', () => {
  it('opening a conversation adds one history entry for it', () => {
    history.replaceState(null, '');
    const page = make();
    const before = history.length;
    page._openNarrowConversation();
    expect(page._narrowShowMessages).toBe(true);
    expect(marker()).toBe(true);
    expect(history.length).toBe(before + 1);
    // Opening again does not stack entries.
    page._openNarrowConversation();
    expect(history.length).toBe(before + 1);
  });

  it('going back to an entry without the marker closes the conversation', () => {
    const page = make();
    page._narrowShowMessages = true;
    history.replaceState({ other: 1 }, '');
    page._onPopState();
    expect(page._narrowShowMessages).toBe(false);
  });

  it('a popstate that keeps the marker leaves the conversation open', () => {
    const page = make();
    page._narrowShowMessages = true;
    history.replaceState({ chattxConversation: true }, '');
    page._onPopState();
    expect(page._narrowShowMessages).toBe(true);
  });

  it('the back button closes directly when the entry is not ours', () => {
    const page = make();
    page._narrowShowMessages = true;
    history.replaceState(null, '');
    page._closeNarrowConversation();
    expect(page._narrowShowMessages).toBe(false);
  });
});
