/**
 * Last known values for sensors that are unavailable right now.
 *
 * Core meshcore marks every repeater sensor unavailable when Home Assistant
 * restarts and fills them again only at the next repeater poll, which can be
 * hours away. Until then the panel shows the last real value from the
 * recorder history, with its age, instead of blanks.
 */
import type { HomeAssistant } from '../types';

export interface LastKnown {
  state: string;
  /** Epoch milliseconds when the value was read. */
  ts: number;
}

/** A state that carries no value: missing, unavailable or unknown. */
export function isMissingState(state: string | undefined | null): boolean {
  return state == null || state === 'unavailable' || state === 'unknown' || state === '';
}

/** Pick each entity's newest real state from a minimal-response history. */
export function lastKnownFromHistory(
  history: Record<string, Array<{ s?: unknown; lu?: number; lc?: number }>> | null | undefined,
): Record<string, LastKnown> {
  const out: Record<string, LastKnown> = {};
  for (const [entityId, states] of Object.entries(history ?? {})) {
    let best: LastKnown | null = null;
    for (const st of states ?? []) {
      const seconds = st.lu ?? st.lc;
      if (typeof st.s !== 'string' || isMissingState(st.s) || typeof seconds !== 'number') continue;
      const ts = seconds * 1000;
      if (!best || ts >= best.ts) best = { state: st.s, ts };
    }
    if (best) out[entityId] = best;
  }
  return out;
}

/**
 * A view of `hass` whose states fall back to the last known value for
 * entities that are unavailable now. The substitute keeps the entity's
 * attributes (unit, device class) and carries the time it was read.
 */
export function withLastKnown(
  hass: HomeAssistant,
  lastKnown: Record<string, LastKnown>,
): HomeAssistant {
  if (Object.keys(lastKnown).length === 0) return hass;
  const states = new Proxy(hass.states, {
    get(target, key, receiver) {
      const current = Reflect.get(target, key, receiver);
      if (typeof key !== 'string') return current;
      const known = lastKnown[key];
      if (!known || (current && !isMissingState(current.state))) return current;
      const when = new Date(known.ts).toISOString();
      return {
        entity_id: key,
        attributes: {},
        ...current,
        state: known.state,
        last_changed: when,
        last_updated: when,
      };
    },
  });
  return { ...hass, states } as HomeAssistant;
}

/** Oldest read time among the entities that are showing a last known value. */
export function oldestSubstitute(
  hass: HomeAssistant | undefined,
  entityIds: Iterable<string>,
  lastKnown: Record<string, LastKnown>,
): number | null {
  let oldest: number | null = null;
  for (const id of entityIds) {
    const known = lastKnown[id];
    if (!known || !isMissingState(hass?.states[id]?.state)) continue;
    if (oldest === null || known.ts < oldest) oldest = known.ts;
  }
  return oldest;
}
