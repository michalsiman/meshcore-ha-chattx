/** Smaller changes come from a browser's address bar, not the on-screen keyboard. */
const KEYBOARD_MIN_HEIGHT = 120;

/**
 * Keep an element inside the part of the screen left visible by the on-screen
 * keyboard, so its top bar stays reachable. Returns a function that stops it.
 * Pinch zoom also shrinks the visual viewport, so it does not count. The
 * tallest height is remembered per width, because some browsers and app
 * WebViews shrink window.innerHeight together with the visual viewport.
 */
export function keepAboveKeyboard(element: HTMLElement): () => void {
  const viewport = window.visualViewport;
  if (!viewport) return () => {};

  let width = viewport.width;
  let fullHeight = viewport.height;
  let raised = false;

  const lower = () => {
    if (!raised) return;
    raised = false;
    for (const name of ['position', 'top', 'left', 'width', 'height']) element.style.removeProperty(name);
    window.scrollTo(0, 0);
  };

  const sync = () => {
    if (viewport.scale > 1.01) {
      lower();
      return;
    }
    if (Math.abs(viewport.width - width) > 1) {
      width = viewport.width;
      fullHeight = viewport.height;
    }
    fullHeight = Math.max(fullHeight, viewport.height);
    if (fullHeight - viewport.height < KEYBOARD_MIN_HEIGHT) {
      lower();
      return;
    }
    raised = true;
    element.style.position = 'fixed';
    element.style.top = `${viewport.offsetTop}px`;
    element.style.left = '0';
    element.style.width = '100%';
    element.style.height = `${viewport.height}px`;
  };

  viewport.addEventListener('resize', sync);
  viewport.addEventListener('scroll', sync);
  sync();
  return () => {
    viewport.removeEventListener('resize', sync);
    viewport.removeEventListener('scroll', sync);
    lower();
  };
}
