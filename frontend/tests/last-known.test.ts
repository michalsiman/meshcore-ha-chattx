import { describe, expect, it } from 'vitest';
import {
  isMissingState,
  lastKnownFromHistory,
  oldestSubstitute,
  withLastKnown,
} from '../src/utils/last-known';
import type { HomeAssistant } from '../src/types';

function fakeHass(states: Record<string, { state: string; attributes?: Record<string, unknown> }>): HomeAssistant {
  const full: Record<string, unknown> = {};
  for (const [id, s] of Object.entries(states)) {
    full[id] = { entity_id: id, attributes: {}, last_changed: '', last_updated: '', ...s };
  }
  return { states: full, language: 'en' } as unknown as HomeAssistant;
}

describe('isMissingState', () => {
  it('treats unavailable, unknown and absent as missing', () => {
    expect(isMissingState('unavailable')).toBe(true);
    expect(isMissingState('unknown')).toBe(true);
    expect(isMissingState(undefined)).toBe(true);
    expect(isMissingState('0')).toBe(false);
    expect(isMissingState('off')).toBe(false);
  });
});

describe('lastKnownFromHistory', () => {
  it('takes the newest real state per entity', () => {
    const out = lastKnownFromHistory({
      'sensor.bat': [
        { s: '4.01', lu: 100 },
        { s: '4.08', lu: 200 },
        { s: 'unavailable', lu: 300 },
      ],
      'binary_sensor.online': [{ s: 'on', lu: 50 }, { s: 'unknown', lu: 300 }],
      'sensor.never': [{ s: 'unavailable', lu: 300 }],
    });
    expect(out).toEqual({
      'sensor.bat': { state: '4.08', ts: 200_000 },
      'binary_sensor.online': { state: 'on', ts: 50_000 },
    });
  });

  it('copes with no history', () => {
    expect(lastKnownFromHistory(undefined)).toEqual({});
  });
});

describe('withLastKnown', () => {
  const hass = fakeHass({
    'sensor.bat': { state: 'unavailable', attributes: { unit_of_measurement: 'V' } },
    'sensor.live': { state: '12' },
  });
  const known = {
    'sensor.bat': { state: '4.08', ts: 200_000 },
    'sensor.live': { state: '99', ts: 100_000 },
    'sensor.gone': { state: '7', ts: 100_000 },
  };

  it('substitutes only missing states and keeps attributes', () => {
    const view = withLastKnown(hass, known);
    expect(view.states['sensor.bat'].state).toBe('4.08');
    expect(view.states['sensor.bat'].attributes.unit_of_measurement).toBe('V');
    expect(view.states['sensor.bat'].last_updated).toBe(new Date(200_000).toISOString());
    expect(view.states['sensor.live'].state).toBe('12');
    expect(view.states['sensor.gone'].state).toBe('7');
    expect(view.states['sensor.other']).toBeUndefined();
  });

  it('returns hass itself when there is nothing to substitute', () => {
    expect(withLastKnown(hass, {})).toBe(hass);
  });

  it('reports the oldest substituted read time', () => {
    expect(oldestSubstitute(hass, ['sensor.bat', 'sensor.live'], known)).toBe(200_000);
    expect(oldestSubstitute(hass, ['sensor.live'], known)).toBeNull();
  });
});
