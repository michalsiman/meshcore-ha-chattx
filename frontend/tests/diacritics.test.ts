// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';
import { loadStripDiacritics, saveStripDiacritics, stripDiacritics } from '../src/utils/diacritics';

describe('stripDiacritics', () => {
  it('handles all Czech letters', () => {
    expect(stripDiacritics('Příliš žluťoučký kůň úpěl ďábelské ódy')).toBe('Prilis zlutoucky kun upel dabelske ody');
    expect(stripDiacritics('ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ')).toBe('ACDEEINORSTUUYZ');
  });

  it('keeps emoji intact, including their joiners and variation selectors', () => {
    expect(stripDiacritics('čau ❤️ 👍🏽 1️⃣')).toBe('cau ❤️ 👍🏽 1️⃣');
  });

  it('keeps other scripts unchanged', () => {
    expect(stripDiacritics('йод 한글')).toBe('йод 한글');
  });

  it('keeps mentions unchanged', () => {
    expect(stripDiacritics('@[Čáp] ahoj Čápe')).toBe('@[Čáp] ahoj Cape');
  });
});

describe('remembered state', () => {
  afterEach(() => { localStorage.clear(); });

  it('is off by default and remembers the choice', () => {
    expect(loadStripDiacritics()).toBe(false);
    saveStripDiacritics(true);
    expect(loadStripDiacritics()).toBe(true);
    saveStripDiacritics(false);
    expect(loadStripDiacritics()).toBe(false);
  });
});
