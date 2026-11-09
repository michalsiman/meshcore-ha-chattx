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

const steps = () => ((history.state as { chattxSteps?: string[] } | null)?.chattxSteps ?? []);

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
    const done = () => (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;
    await done();

    (el as unknown as { _openDialog(m: ChatMessage): void })._openDialog(message());
    await done();
    expect(history.state).toMatchObject({ chattxConversation: true });
    expect(steps()).toHaveLength(1);
    const dialogState = history.state;

    (el as unknown as { _toggleMap(): void })._toggleMap();
    await done();
    expect(steps()).toHaveLength(2);
    expect(el._showMap).toBe(true);

    await popTo(el, dialogState);
    expect(el._showMap).toBe(false);
    expect(el._selectedMessage).not.toBeNull();

    await popTo(el, { chattxConversation: true });
    expect(el._selectedMessage).toBeNull();
    el.remove();
  });
});
