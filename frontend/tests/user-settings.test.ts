// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import * as settings from '../src/utils/user-settings';

function fakeHass(shared: Record<string, string>, perUser: Record<string, string> | null = null) {
  const calls: Array<Record<string, unknown>> = [];
  let push: ((e: { values: unknown }) => void) | null = null;
  const hass = {
    callWS: vi.fn(async (msg: Record<string, unknown>) => {
      calls.push(msg);
      if (msg.type === 'meshcore_chattx/get_settings') return { values: shared };
      if (msg.type === 'frontend/get_user_data') return { value: perUser };
      return null;
    }),
    connection: {
      subscribeMessage: vi.fn(async (cb: (e: { values: unknown }) => void) => { push = cb; return () => {}; }),
    },
  };
  return { hass: hass as never, calls, push: (v: unknown) => push?.({ values: v }) };
}

describe('settings shared in Home Assistant', () => {
  afterEach(() => {
    settings._resetUserSettings();
    localStorage.clear();
    vi.useRealTimers();
  });

  it('adds this browser\'s and the user\'s older settings where the shared ones have none', async () => {
    vi.useFakeTimers();
    localStorage.setItem('chattx-language', 'cs');
    localStorage.setItem('chattx-strip-diacritics', 'true');
    localStorage.setItem('other-app', 'x');
    const { hass, calls } = fakeHass({ 'chattx-language': 'de' }, { 'chattx-distance-unit': 'mi' });
    await settings.initUserSettings(hass);
    // The shared value wins; missing ones come from the browser and the user data.
    expect(settings.getItem('chattx-language')).toBe('de');
    expect(settings.getItem('chattx-strip-diacritics')).toBe('true');
    expect(settings.getItem('chattx-distance-unit')).toBe('mi');
    expect(localStorage.getItem('chattx-language')).toBeNull();
    expect(localStorage.getItem('other-app')).toBe('x');
    expect(calls.some((c) => c.type === 'frontend/set_user_data' && c.value === null)).toBe(true);
    vi.advanceTimersByTime(500);
    const saved = calls.find((c) => c.type === 'meshcore_chattx/set_settings');
    expect(saved?.changes).toEqual({ 'chattx-strip-diacritics': 'true', 'chattx-distance-unit': 'mi' });
  });

  it('follows a change made on another device', async () => {
    const { hass, push } = fakeHass({});
    await settings.initUserSettings(hass);
    const seen = vi.fn();
    window.addEventListener(settings.SETTINGS_CHANGED, seen);
    push({ 'chattx-distance-unit': 'mi' });
    expect(settings.getItem('chattx-distance-unit')).toBe('mi');
    expect(seen).toHaveBeenCalled();
    window.removeEventListener(settings.SETTINGS_CHANGED, seen);
  });

  it('changes go to Home Assistant as one merge, not to the browser', async () => {
    vi.useFakeTimers();
    const { hass, calls } = fakeHass({});
    await settings.initUserSettings(hass);
    settings.setItem('chattx-tab-badge', 'false');
    settings.setItem('chattx-image-previews', '0');
    vi.advanceTimersByTime(500);
    expect(localStorage.getItem('chattx-tab-badge')).toBeNull();
    const saves = calls.filter((c) => c.type === 'meshcore_chattx/set_settings');
    expect(saves).toHaveLength(1); // one update for both
    expect(saves[0].changes).toEqual({ 'chattx-tab-badge': 'false', 'chattx-image-previews': '0' });
  });
});
