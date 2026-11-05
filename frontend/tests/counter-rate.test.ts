import { describe, expect, it } from 'vitest';
import { counterSamples, ratesFromCounters } from '../src/utils/counter-rate';

const H = 60 * 60 * 1000;

describe('counterSamples', () => {
  it('keeps numeric states and drops unavailable ones', () => {
    const out = counterSamples([
      { s: '100', lu: 10 },
      { s: 'unavailable', lu: 20 },
      { s: 'unknown', lu: 30 },
      { s: '160', lu: 40 },
    ]);
    expect(out).toEqual([
      { ts: 10_000, value: 100 },
      { ts: 40_000, value: 160 },
    ]);
  });

  it('falls back to last_changed and handles missing input', () => {
    expect(counterSamples([{ s: '5', lc: 2 }])).toEqual([{ ts: 2000, value: 5 }]);
    expect(counterSamples(undefined)).toEqual([]);
  });
});

describe('ratesFromCounters', () => {
  it('spreads a two-hour poll interval over both hours', () => {
    const out = ratesFromCounters(
      { recv: [{ ts: 0, value: 0 }, { ts: 2 * H, value: 1200 }] },
      0,
      2 * H,
    );
    expect(out).toEqual([
      { timestamp: 0, values: { recv: 10 } },
      { timestamp: H, values: { recv: 10 } },
    ]);
  });

  it('bridges a restart: readings around unavailable states still give the rate', () => {
    const samples = counterSamples([
      { s: '3326', lu: 0 },
      { s: 'unavailable', lu: 600 },
      { s: 'unavailable', lu: 3600 },
      { s: '4886', lu: 7200 },
    ]);
    const out = ratesFromCounters({ recv: samples }, 0, 7200_000);
    expect(out.map((b) => b.values.recv)).toEqual([13, 13]);
  });

  it('skips the interval where the counter went down (repeater reboot)', () => {
    const out = ratesFromCounters(
      {
        recv: [
          { ts: 0, value: 77000 },
          { ts: 2 * H, value: 50 },
          { ts: 4 * H, value: 650 },
        ],
      },
      0,
      4 * H,
    );
    expect(out.map((b) => b.timestamp)).toEqual([2 * H, 3 * H]);
    expect(out.map((b) => b.values.recv)).toEqual([5, 5]);
  });

  it('weights rates by time within a bucket and clips to the window', () => {
    const out = ratesFromCounters(
      {
        recv: [
          { ts: -H, value: 0 },
          { ts: 0.5 * H, value: 90 * 60 }, // 60/min, half inside the first hour
          { ts: H, value: 90 * 60 }, // 0/min for the second half
        ],
      },
      0,
      H,
    );
    expect(out).toHaveLength(1);
    expect(out[0].values.recv).toBeCloseTo(30);
  });

  it('keeps series apart in the same bucket', () => {
    const out = ratesFromCounters(
      {
        a: [{ ts: 0, value: 0 }, { ts: H, value: 60 }],
        b: [{ ts: 0, value: 0 }, { ts: H, value: 120 }],
      },
      0,
      H,
    );
    expect(out).toEqual([{ timestamp: 0, values: { a: 1, b: 2 } }]);
  });
});
