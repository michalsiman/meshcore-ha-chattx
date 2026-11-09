// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { formatLength, saveDistanceSetting, setHassLengthUnit, unknownLength } from '../src/utils/units';
import { formatDistance } from '../src/utils/path-route';

describe('distance unit', () => {
  afterEach(() => {
    saveDistanceSetting('auto');
    setHassLengthUnit(undefined);
  });

  it('follows Home Assistant when automatic', () => {
    expect(formatLength(241)).toBe('241 km');
    setHassLengthUnit('mi');
    expect(formatLength(241)).toBe('150 mi');
    expect(unknownLength()).toBe('? mi');
  });

  it('a choice in Settings wins', () => {
    setHassLengthUnit('mi');
    saveDistanceSetting('km');
    expect(formatLength(8.04)).toBe('8.0 km');
    saveDistanceSetting('mi');
    expect(formatDistance({ km: 241, approx: false, routeKm: 530, routeApprox: true })).toBe('↔ 150 mi (∑ ~329 mi)');
  });
});
