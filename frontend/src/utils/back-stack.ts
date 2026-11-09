/**
 * Phone back gesture for windows inside the panel.
 *
 * Every open window (dialog, modal, the route map inside the message
 * dialog) is a "step" with its own history entry, so the system back
 * gesture closes the topmost step instead of leaving the panel. The URL
 * never changes, so Home Assistant's router keeps showing the panel.
 *
 * The open steps are listed in `history.state.chattxSteps`. Going back
 * to an entry whose list no longer contains a step closes that step.
 * Closing a step with its own button goes back over its entry, so the
 * history does not fill with dead entries. A step that opens right after
 * another one closed (one modal replacing another) reuses that entry.
 */

const KEY = 'chattxSteps';

const openSteps = new Map<string, () => void>();
/** Steps closed by the user interface whose entries still have to be left. */
let pending: string[] = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;
let seq = 0;
let listening = false;

function chain(): string[] {
  const steps = (history.state as Record<string, unknown> | null)?.[KEY];
  return Array.isArray(steps) ? (steps as string[]) : [];
}

function stateWith(steps: string[]): Record<string, unknown> {
  return { ...((history.state as Record<string, unknown> | null) ?? {}), [KEY]: steps };
}

function onPopState(): void {
  const current = new Set(chain());
  // Newest first, so an inner step closes before the one under it.
  const gone = [...openSteps.keys()].filter((t) => !current.has(t)).reverse();
  for (const token of gone) {
    const close = openSteps.get(token);
    openSteps.delete(token);
    close?.();
  }
}

function flush(): void {
  flushTimer = null;
  const steps = chain();
  const index = steps.findIndex((t) => pending.includes(t));
  pending = [];
  // Leaving the entry also closes any step still open above it.
  if (index >= 0) history.go(-(steps.length - index));
}

/** Open a step; `close` runs when the back gesture leaves its entry. Returns its token. */
export function openStep(close: () => void): string {
  if (!listening) {
    listening = true;
    window.addEventListener('popstate', onPopState);
  }
  const token = `s${Date.now().toString(36)}-${seq++}`;
  openSteps.set(token, close);
  const steps = chain();
  const top = steps[steps.length - 1];
  if (top !== undefined && pending.includes(top)) {
    pending = pending.filter((t) => t !== top);
    history.replaceState(stateWith([...steps.slice(0, -1), token]), '');
  } else {
    history.pushState(stateWith([...steps, token]), '');
  }
  return token;
}

/** The step was closed by the user interface (button, Escape, overlay tap). */
export function closeStep(token: string | null | undefined): void {
  if (!token || !openSteps.delete(token)) return;
  if (!chain().includes(token)) return;
  pending.push(token);
  flushTimer ??= setTimeout(flush, 0);
}

/** For tests. */
export function _resetBackStack(): void {
  openSteps.clear();
  pending = [];
  if (flushTimer) clearTimeout(flushTimer);
  flushTimer = null;
}
