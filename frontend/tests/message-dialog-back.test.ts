// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import '../src/components/message-bubble';
import type { ChatMessage } from '../src/types';

function message(): ChatMessage {
  return {
    id: 'm1', sender: 'Alice', text: 'hi', timestamp: new Date(), isOutgoing: false, isSystem: false,
    raw: 'hi', mentions: [], rxLogData: [{ path_nodes: ['d658'], hop_count: 1 }],
  } as ChatMessage;
}

async function popTo(el: HTMLElement, state: unknown) {
  history.replaceState(state, '');
  window.dispatchEvent(new PopStateEvent('popstate', { state }));
  await (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;
}

describe('phone back gesture in the message dialog', () => {
  it('hides the map first, then closes the dialog', async () => {
    history.replaceState({ chattxConversation: true }, '');
    const el = document.createElement('chattx-message-bubble') as HTMLElement & Record<string, unknown>;
    el.message = message();
    el.hass = { states: {} };
    document.body.appendChild(el);
    await (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;

    (el as unknown as { _openDialog(m: ChatMessage): void })._openDialog(message());
    expect(history.state).toMatchObject({ chattxConversation: true, chattxMessageDialog: true });
    await (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;
    (el as unknown as { _toggleMap(): void })._toggleMap();
    expect(history.state).toMatchObject({ chattxMessageDialog: true, chattxMessageMap: true });
    await (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;
    expect(el._showMap).toBe(true);

    await popTo(el, { chattxConversation: true, chattxMessageDialog: true });
    expect(el._showMap).toBe(false);
    expect(el._selectedMessage).not.toBeNull();

    await popTo(el, { chattxConversation: true });
    expect(el._selectedMessage).toBeNull();
    el.remove();
  });
});
