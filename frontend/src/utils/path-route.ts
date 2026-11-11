/**
 * Turn a message's path (repeater hash prefixes from rx_log_data) into
 * points on a map, using the positions the repeaters advertise.
 *
 * A path lists the repeaters a packet went through as the first bytes of
 * their public keys, from the sender's side to ours. With 2-byte prefixes
 * almost every prefix names one repeater; with 1-byte prefixes many do.
 * When several known nodes share a prefix, the point is marked as
 * uncertain and the candidates are chosen together: of all combinations,
 * the one whose route from us to the sender (when its position is known)
 * is shortest, with long legs counting more than short ones. A radio
 * route does not jump far away and back, so this beats taking each hop's
 * nearest candidate one by one, where one wrong guess drags the rest.
 */

import { formatLength } from './units';

export interface MapNode {
  key: string;
  name: string;
  lat: number;
  lon: number;
  type: number;
}

export type RouteKind = 'sender' | 'repeater' | 'me';

export interface RoutePoint {
  kind: RouteKind;
  /** Hash prefix as shown in the path, upper case; '' for sender and me. */
  prefix: string;
  name: string;
  lat: number | null;
  lon: number | null;
  /** More than one known node shares the prefix. */
  ambiguous: boolean;
  /** Known nodes share the prefix, but all lie off the route: probably a repeater we don't know. */
  leftOut?: boolean;
}

interface StateLike {
  entity_id: string;
  attributes: Record<string, unknown>;
}

function coordinate(value: unknown): number | null {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) && n !== 0 ? n : null;
}

/** Contacts with a public key and an advertised position, from Home Assistant's states. */
export function knownNodes(states: Record<string, StateLike>): MapNode[] {
  const nodes: MapNode[] = [];
  for (const [entityId, state] of Object.entries(states)) {
    if (!entityId.startsWith('binary_sensor.meshcore_') || !entityId.endsWith('_contact')) continue;
    const a = state.attributes;
    const key = typeof a.public_key === 'string' ? a.public_key.toLowerCase() : '';
    const lat = coordinate(a.adv_lat ?? a.latitude);
    const lon = coordinate(a.adv_lon ?? a.longitude);
    if (!key || lat === null || lon === null) continue;
    nodes.push({
      key,
      name: String(a.adv_name ?? a.friendly_name ?? key.slice(0, 6)),
      lat,
      lon,
      type: Number(a.type ?? 0),
    });
  }
  return nodes;
}

/** Distance in kilometres. */
export function distanceKm(aLat: number, aLon: number, bLat: number, bLon: number): number {
  const r = Math.PI / 180;
  const dLat = (bLat - aLat) * r;
  const dLon = (bLon - aLon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * r) * Math.cos(bLat * r) * Math.sin(dLon / 2) ** 2;
  return 12742 * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Known nodes a path prefix can stand for; repeaters and room servers first, as they forward packets. */
function candidatesFor(prefix: string, nodes: MapNode[]): MapNode[] {
  const p = prefix.toLowerCase();
  const forwarders = nodes.filter((n) => n.key.startsWith(p) && (n.type === 2 || n.type === 3));
  return forwarders.length ? forwarders : nodes.filter((n) => n.key.startsWith(p));
}

/** Cost of one leg: its length, with legs over about 100 km counting ever more. */
function legCost(a: { lat: number; lon: number }, b: { lat: number; lon: number }): number {
  const d = distanceKm(a.lat, a.lon, b.lat, b.lon);
  return d + (d * d) / 100;
}

/**
 * What leaving a hop out costs: about one 100 km leg. With 1-byte prefixes
 * many repeaters on a path are not among our contacts, and the one known
 * node with the same prefix may be far away; dropping it is then more
 * likely right than a long jump there and back.
 */
const SKIP_COST = 200;

interface ChainState {
  pos: { lat: number; lon: number } | null;
  cost: number;
  picks: Array<MapNode | null>;
}

/**
 * Choose one candidate per hop so that the chain start → hops → end is
 * cheapest. Hops without candidates are left out; a hop marked skippable
 * may be left out too, at SKIP_COST, as a repeater we don't know. The legs
 * around a left-out hop join its neighbours.
 */
export function chooseCandidates(
  layers: MapNode[][],
  start: { lat: number; lon: number } | null,
  end: { lat: number; lon: number } | null,
  skippable: boolean[] = [],
): Array<MapNode | null> {
  // One state per "last placed node": the cheapest chain that ends there.
  let states = new Map<string, ChainState>([['', { pos: start, cost: 0, picks: [] }]]);
  layers.forEach((layer, k) => {
    const next = new Map<string, ChainState>();
    const offer = (key: string, state: ChainState) => {
      const old = next.get(key);
      if (!old || state.cost < old.cost) next.set(key, state);
    };
    for (const [key, s] of states) {
      for (const c of layer) {
        offer(c.key, {
          pos: { lat: c.lat, lon: c.lon },
          cost: s.cost + (s.pos ? legCost(s.pos, c) : 0),
          picks: [...s.picks, c],
        });
      }
      if (layer.length === 0 || skippable[k]) {
        offer(key, { pos: s.pos, cost: s.cost + (layer.length ? SKIP_COST : 0), picks: [...s.picks, null] });
      }
    }
    states = next;
  });
  let best: ChainState | null = null;
  let bestCost = Infinity;
  for (const s of states.values()) {
    const total = s.cost + (end && s.pos ? legCost(s.pos, end) : 0);
    if (total < bestCost) {
      bestCost = total;
      best = s;
    }
  }
  return best ? best.picks : layers.map(() => null);
}

/**
 * Points of a path in travel order. A received message goes from the
 * sender through the repeaters to us; our own message goes from us
 * through the repeaters that were heard repeating it.
 */
export function resolveRoute(options: {
  pathNodes: string[];
  nodes: MapNode[];
  me: { lat: number; lon: number; name: string } | null;
  outgoing: boolean;
  senderName?: string;
}): RoutePoint[] {
  const { pathNodes, nodes, me, outgoing, senderName } = options;
  const meNear = me ? { lat: me.lat, lon: me.lon } : null;
  const sender = !outgoing && senderName ? nodes.find((n) => n.name === senderName) : undefined;
  // Chain from our end: us, the repeaters nearest to us first, then the sender.
  const order = outgoing ? pathNodes.map((_, i) => i) : pathNodes.map((_, i) => pathNodes.length - 1 - i);
  const layers = order.map((i) => candidatesFor(pathNodes[i], nodes));
  // A 1-byte prefix (two hex digits) may well be a repeater we don't know.
  const skippable = order.map((i) => pathNodes[i].length <= 2);
  const picked = chooseCandidates(layers, meNear, sender ? { lat: sender.lat, lon: sender.lon } : null, skippable);
  const placed: RoutePoint[] = new Array(pathNodes.length);
  order.forEach((i, k) => {
    const node = picked[k];
    placed[i] = {
      kind: 'repeater',
      prefix: pathNodes[i].toUpperCase(),
      name: node?.name ?? '',
      lat: node?.lat ?? null,
      lon: node?.lon ?? null,
      ambiguous: layers[k].length > 1,
      ...(node === null && layers[k].length > 0 ? { leftOut: true } : {}),
    };
  });
  const mePoint: RoutePoint = {
    kind: 'me',
    prefix: '',
    name: me?.name ?? '',
    lat: me?.lat ?? null,
    lon: me?.lon ?? null,
    ambiguous: false,
  };
  if (outgoing) return [mePoint, ...placed];
  const senderPoint: RoutePoint = {
    kind: 'sender',
    prefix: '',
    name: senderName ?? '',
    lat: sender?.lat ?? null,
    lon: sender?.lon ?? null,
    ambiguous: false,
  };
  return [senderPoint, ...placed, mePoint];
}

// ── Web Mercator for OpenStreetMap tiles ─────────────────────────────────

export const TILE_SIZE = 256;

/** Pixel position of a coordinate at a zoom level, in world pixels. */
export function project(lat: number, lon: number, zoom: number): [number, number] {
  const size = TILE_SIZE * 2 ** zoom;
  const x = ((lon + 180) / 360) * size;
  const s = Math.sin((Math.max(-85, Math.min(85, lat)) * Math.PI) / 180);
  const y = (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * size;
  return [x, y];
}

/** The highest zoom at which all points fit into width × height with a margin. */
export function fitZoom(
  points: Array<{ lat: number; lon: number }>,
  width: number,
  height: number,
  margin = 28,
): number {
  if (points.length < 2) return 12;
  for (let z = 15; z >= 2; z--) {
    const px = points.map((p) => project(p.lat, p.lon, z));
    const xs = px.map((p) => p[0]);
    const ys = px.map((p) => p[1]);
    if (Math.max(...xs) - Math.min(...xs) <= width - 2 * margin
      && Math.max(...ys) - Math.min(...ys) <= height - 2 * margin) {
      return z;
    }
  }
  return 2;
}


/** Coordinate of a world pixel position at a zoom level (inverse of project). */
export function unproject(x: number, y: number, zoom: number): { lat: number; lon: number } {
  const size = TILE_SIZE * 2 ** zoom;
  const lon = (x / size) * 360 - 180;
  const n = Math.PI - (2 * Math.PI * y) / size;
  const lat = (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  return { lat, lon };
}

// ── Distance between the end repeaters of a path ────────────────────────

const nodeCache = new WeakMap<object, MapNode[]>();

/** knownNodes, computed once per states object. */
export function cachedKnownNodes(states: Record<string, StateLike>): MapNode[] {
  let nodes = nodeCache.get(states);
  if (!nodes) {
    nodes = knownNodes(states);
    nodeCache.set(states, nodes);
  }
  return nodes;
}

/** The shortest repeater path among the heard copies of a message. */
export function shortestPath(rxLogData: Array<Record<string, unknown>> | undefined): string[] | null {
  let best: string[] | null = null;
  for (const entry of rxLogData ?? []) {
    const nodes = entry.path_nodes as string[] | undefined;
    if (nodes && nodes.length > 0 && (!best || nodes.length < best.length)) best = nodes;
  }
  return best;
}

/**
 * Straight-line distance between the first and the last repeater of a
 * path, when both have a known position, and the length of the route
 * itself: the legs between consecutive repeaters added up (repeaters
 * without a position are skipped, which makes it approximate). `approx`
 * when a prefix is shared by several known repeaters, so the nearest one
 * was taken.
 */
export function edgeDistance(
  pathNodes: string[] | null,
  nodes: MapNode[],
): { km: number; approx: boolean; routeKm: number; routeApprox: boolean } | null {
  if (!pathNodes || pathNodes.length < 2) return null;
  const repeaters = resolveRoute({ pathNodes, nodes, me: null, outgoing: false })
    .filter((p) => p.kind === 'repeater');
  const first = repeaters[0];
  const last = repeaters[repeaters.length - 1];
  if (first.lat === null || first.lon === null || last.lat === null || last.lon === null) return null;
  let routeKm = 0;
  let prev: RoutePoint | null = null;
  for (const p of repeaters) {
    if (p.lat === null || p.lon === null) continue;
    if (prev) routeKm += distanceKm(prev.lat!, prev.lon!, p.lat, p.lon);
    prev = p;
  }
  return {
    km: distanceKm(first.lat, first.lon, last.lat, last.lon),
    approx: first.ambiguous || last.ambiguous,
    routeKm,
    routeApprox: repeaters.some((p) => p.ambiguous || p.lat === null),
  };
}

/** "↔ 241 km (∑ 530 km)": straight line between the end repeaters, then the route's length. */
export function formatDistance(d: { km: number; approx: boolean; routeKm: number; routeApprox: boolean }): string {
  const straight = `↔ ${formatLength(d.km, d.approx)}`;
  // With two repeaters the route is the straight line.
  return d.routeKm - d.km > 0.5 ? `${straight} (∑ ${formatLength(d.routeKm, d.routeApprox)})` : straight;
}
