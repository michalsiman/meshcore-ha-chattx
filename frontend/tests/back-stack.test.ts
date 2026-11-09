// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { _resetBackStack, closeStep, openStep } from '../src/utils/back-stack';

const steps = () => ((history.state as { chattxSteps?: string[] } | null)?.chattxSteps ?? []);

function popTo(state: unknown) {
  history.replaceState(state, '');
  window.dispatchEvent(new PopStateEvent('popstate', { state }));
}

describe('back stack', () => {
  beforeEach(() => {
    _resetBackStack();
    history.replaceState({ other: 1 }, '');
  });

  it('each open step adds one history entry and keeps other state', () => {
    const before = history.length;
    openStep(() => {});
    openStep(() => {});
    expect(history.length).toBe(before + 2);
    expect(steps()).toHaveLength(2);
    expect(history.state).toMatchObject({ other: 1 });
  });

  it('going back closes only the top step', () => {
    const outer = vi.fn();
    const inner = vi.fn();
    openStep(outer);
    const outerState = history.state;
    openStep(inner);
    popTo(outerState);
    expect(inner).toHaveBeenCalledOnce();
    expect(outer).not.toHaveBeenCalled();
    popTo({ other: 1 });
    expect(outer).toHaveBeenCalledOnce();
  });

  it('closing a step by its button goes back over its entry', () => {
    vi.useFakeTimers();
    const go = vi.spyOn(history, 'go').mockImplementation(() => {});
    const token = openStep(() => {});
    closeStep(token);
    vi.runAllTimers();
    expect(go).toHaveBeenCalledWith(-1);
    go.mockRestore();
    vi.useRealTimers();
  });

  it('a step opened right after another closed reuses its entry', () => {
    vi.useFakeTimers();
    const go = vi.spyOn(history, 'go').mockImplementation(() => {});
    const first = openStep(() => {});
    const before = history.length;
    closeStep(first);
    openStep(() => {});
    vi.runAllTimers();
    expect(go).not.toHaveBeenCalled();
    expect(history.length).toBe(before);
    expect(steps()).toHaveLength(1);
    expect(steps()[0]).not.toBe(first);
    go.mockRestore();
    vi.useRealTimers();
  });

  it('a step already left by the back gesture is not closed twice', () => {
    const close = vi.fn();
    const token = openStep(close);
    popTo({ other: 1 });
    closeStep(token);
    expect(close).toHaveBeenCalledOnce();
  });
});
