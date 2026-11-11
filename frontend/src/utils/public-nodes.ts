/**
 * Repeaters from the public MeshCore map (map.meshcore.io), kept by the
 * integration when "Online repeater database" is on in Settings → Map.
 * They are extra candidates for placing a message's path; our own contacts
 * come first.
 */

import type { HomeAssistant } from '../types';
import type { MapNode } from './path-route';

let cache: MapNode[] | undefined;
let loading: Promise<void> | null = null;
const waiting = new Set<() => void>();
const merged = new WeakMap<MapNode[], { from: MapNode[]; nodes: MapNode[] }>();

interface StoredNode { k: string; n: string; t: number; lat: number; lon: number; la?: number | null }

/** The public repeaters loaded so far ([] until loaded); onLoad runs once they arrive. */
export function publicNodes(hass: HomeAssistant | undefined, onLoad?: () => void): MapNode[] {
  if (cache !== undefined) return cache;
  if (onLoad) waiting.add(onLoad);
  if (hass && !loading) {
    loading = hass.callWS<{ nodes: StoredNode[] }>({ type: 'meshcore_chattx/public_nodes' })
      .then((r) => {
        cache = (r.nodes ?? []).map((n) => ({ key: n.k, name: n.n, lat: n.lat, lon: n.lon, type: n.t, public: true }));
      })
      .catch(() => { cache = []; })
      .finally(() => {
        const callbacks = [...waiting];
        waiting.clear();
        callbacks.forEach((f) => f());
      });
  }
  return [];
}

/** Forget the loaded list, after the setting changed or the list was updated. */
export function resetPublicNodes(): void {
  cache = undefined;
  loading = null;
}

/** Our contacts plus the public repeaters we don't have as contacts. */
export function withPublicNodes(local: MapNode[], extra: MapNode[]): MapNode[] {
  if (extra.length === 0) return local;
  const known = merged.get(local);
  if (known && known.from === extra) return known.nodes;
  const keys = new Set(local.map((n) => n.key));
  const nodes = [...local, ...extra.filter((n) => !keys.has(n.key))];
  merged.set(local, { from: extra, nodes });
  return nodes;
}
