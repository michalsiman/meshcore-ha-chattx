/**
 * Turn a message's path (repeater hash prefixes from rx_log_data) into
 * points on a map, using the positions the repeaters advertise.
 *
 * A path lists the repeaters a packet went through as the first bytes of
 * their public keys, from the sender's side to ours. With 2-byte prefixes
 * almost every prefix names one repeater; with 1-byte prefixes many do.
 * When several known nodes share a prefix, the one nearest to the
 * neighbouring point already placed is taken and the point is marked as
 * uncertain. Placing starts at our own end of the path, which is the one
 * position always known.
 */

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

function pick(
  prefix: string,
  nodes: MapNode[],
  near: { lat: number; lon: number } | null,
): { node: MapNode | null; ambiguous: boolean } {
  const p = prefix.toLowerCase();
  // Repeaters and room servers forward packets; prefer them over companions.
  let candidates = nodes.filter((n) => n.key.startsWith(p) && (n.type === 2 || n.type === 3));
  if (candidates.length === 0) candidates = nodes.filter((n) => n.key.startsWith(p));
  if (candidates.length === 0) return { node: null, ambiguous: false };
  if (candidates.length === 1 || !near) return { node: candidates[0], ambiguous: candidates.length > 1 };
  let best = candidates[0];
  let bestD = Infinity;
  for (const c of candidates) {
    const d = distanceKm(near.lat, near.lon, c.lat, c.lon);
    if (d < bestD) {
      best = c;
      bestD = d;
    }
  }
  return { node: best, ambiguous: true };
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
  // Place repeaters starting from our end, each near the one placed before.
  const order = outgoing ? pathNodes.map((_, i) => i) : pathNodes.map((_, i) => pathNodes.length - 1 - i);
  const placed: RoutePoint[] = new Array(pathNodes.length);
  let near = meNear;
  for (const i of order) {
    const prefix = pathNodes[i];
    const { node, ambiguous } = pick(prefix, nodes, near);
    placed[i] = {
      kind: 'repeater',
      prefix: prefix.toUpperCase(),
      name: node?.name ?? '',
      lat: node?.lat ?? null,
      lon: node?.lon ?? null,
      ambiguous,
    };
    if (node) near = { lat: node.lat, lon: node.lon };
  }
  const mePoint: RoutePoint = {
    kind: 'me',
    prefix: '',
    name: me?.name ?? '',
    lat: me?.lat ?? null,
    lon: me?.lon ?? null,
    ambiguous: false,
  };
  if (outgoing) return [mePoint, ...placed];
  const sender = senderName ? nodes.find((n) => n.name === senderName) : undefined;
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
