// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { keepAboveKeyboard } from '../src/utils/keyboard-viewport';

class FakeViewport extends EventTarget {
  width = 390;
  height = 800;
  offsetTop = 0;
  scale = 1;

  set(values: Partial<Pick<FakeViewport, 'width' | 'height' | 'offsetTop' | 'scale'>>) {
    Object.assign(this, values);
    this.dispatchEvent(new Event('resize'));
  }
}

describe('keepAboveKeyboard', () => {
  let viewport: FakeViewport;
  let element: HTMLElement;
  let stop: () => void;

  beforeEach(() => {
    viewport = new FakeViewport();
    vi.stubGlobal('visualViewport', viewport);
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    element = document.createElement('div');
    stop = keepAboveKeyboard(element);
  });

  afterEach(() => {
    stop();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('leaves the element alone without a keyboard', () => {
    expect(element.style.position).toBe('');
  });

  it('fits the element to the visible part when the keyboard opens', () => {
    viewport.set({ height: 450, offsetTop: 120 });
    expect(element.style.position).toBe('fixed');
    expect(element.style.top).toBe('120px');
    expect(element.style.height).toBe('450px');
  });

  it('follows the visible part when it scrolls', () => {
    viewport.set({ height: 450 });
    viewport.offsetTop = 60;
    viewport.dispatchEvent(new Event('scroll'));
    expect(element.style.top).toBe('60px');
  });

  it('restores the element when the keyboard closes', () => {
    viewport.set({ height: 450 });
    viewport.set({ height: 800 });
    expect(element.style.position).toBe('');
    expect(element.style.height).toBe('');
  });

  it('ignores an address bar and pinch zoom', () => {
    viewport.set({ height: 744 });
    expect(element.style.position).toBe('');
    viewport.set({ height: 300, scale: 2.5 });
    expect(element.style.position).toBe('');
  });

  it('starts over after rotating the phone', () => {
    viewport.set({ width: 800, height: 390 });
    expect(element.style.position).toBe('');
    viewport.set({ height: 200 });
    expect(element.style.position).toBe('fixed');
  });

  it('restores the element when stopped', () => {
    viewport.set({ height: 450 });
    stop();
    expect(element.style.position).toBe('');
    viewport.set({ height: 400 });
    expect(element.style.position).toBe('');
  });
});
