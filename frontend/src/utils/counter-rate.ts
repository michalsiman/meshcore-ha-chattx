/**
 * Message rates from a repeater's packet counters.
 *
 * Core meshcore's `*_rate` sensors compare each repeater poll with the one
 * before it, and after a Home Assistant restart they report 0 instead of
 * nothing, because there is no earlier poll in memory. Polls are hours apart,
 * so each restart shows up as hours of silence. Working from the counters'
 * own history avoids that: a restart only leaves `unavailable` states, which
 * are skipped, and the next two real readings still give the right rate.
 */

export interface CounterSample {
  /** Epoch milliseconds. */
  ts: number;
  value: number;
}

/** One time bucket of msg/min values, keyed by series. */
export interface RateBucket {
  timestamp: number;
  values: Record<string, number>;
}

/** Turn recorder states into numeric samples, dropping unavailable/unknown. */
export function counterSamples(
  states: Array<{ s?: unknown; lu?: number; lc?: number }> | undefined,
): CounterSample[] {
  const out: CounterSample[] = [];
  for (const st of states ?? []) {
    const value = typeof st.s === 'string' ? Number(st.s) : NaN;
    const seconds = st.lu ?? st.lc;
    if (!Number.isFinite(value) || typeof seconds !== 'number') continue;
    out.push({ ts: seconds * 1000, value });
  }
  return out.sort((a, b) => a.ts - b.ts);
}

/**
 * Average msg/min per bucket for each counter series.
 *
 * Each pair of consecutive readings gives a rate over its interval, which is
 * spread time-weighted over the buckets it covers. A counter that went down
 * means the repeater rebooted; that interval is skipped because the count
 * before the reboot is lost. A bucket gets a value for a series only where
 * some interval covers it.
 */
export function ratesFromCounters(
  series: Record<string, CounterSample[]>,
  start: number,
  end: number,
  bucketMs = 60 * 60 * 1000,
): RateBucket[] {
  const firstBucket = Math.floor(start / bucketMs) * bucketMs;
  const buckets = new Map<number, Record<string, { sum: number; covered: number }>>();

  for (const [key, samples] of Object.entries(series)) {
    for (let i = 1; i < samples.length; i++) {
      const a = samples[i - 1];
      const b = samples[i];
      const span = b.ts - a.ts;
      const delta = b.value - a.value;
      if (span <= 0 || delta < 0) continue;
      const perMin = delta / (span / 60000);
      const from = Math.max(a.ts, start);
      const to = Math.min(b.ts, end);
      for (let t = Math.max(firstBucket, Math.floor(from / bucketMs) * bucketMs); t < to; t += bucketMs) {
        const overlap = Math.min(to, t + bucketMs) - Math.max(from, t);
        if (overlap <= 0) continue;
        const bucket = buckets.get(t) ?? {};
        const acc = (bucket[key] ??= { sum: 0, covered: 0 });
        acc.sum += perMin * overlap;
        acc.covered += overlap;
        buckets.set(t, bucket);
      }
    }
  }

  return [...buckets.entries()]
    .sort(([a], [b]) => a - b)
    .map(([timestamp, bucket]) => ({
      timestamp,
      values: Object.fromEntries(
        Object.entries(bucket).map(([key, acc]) => [key, acc.sum / acc.covered]),
      ),
    }));
}
