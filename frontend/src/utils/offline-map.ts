/**
 * The simplified offline map: country borders, regions, places and peaks,
 * drawn as SVG under the route map and the nodes map when online tiles
 * can't be loaded (or always, when chosen in Settings).
 *
 * The data is downloaded by the integration per country (see
 * custom_components/meshcore_chattx/offline_map.py) and read here once per
 * page load. Coordinates come as integers in 1e-4 degrees, each ring as
 * [lon0, lat0, dlon1, dlat1, ...].
 */
import { css, svg, type SVGTemplateResult } from 'lit';
import type { HomeAssistant } from '../types';
import { project } from './path-route';
import * as settings from './user-settings';

const SCALE = 10_000;
const OFFLINE_ONLY_KEY = 'chattx-map-offline-only';

interface CountryData {
  name: string;
  border: number[][];
  regions: number[][];
  /** [lon, lat, name, population, rank]: rank 0 capital, 1 region seat, 2 other. */
  places: Array<[number, number, string, number, number]>;
  /** [lon, lat, name, elevation] */
  peaks: Array<[number, number, string, number]>;
}

interface Label {
  lon: number;
  lat: number;
  text: string;
  /** Lower draws first and wins a place. */
  priority: number;
  kind: 'capital' | 'seat' | 'place' | 'peak';
  /** Smallest zoom at which the label is shown. */
  minZoom: number;
}

interface WorldData {
  /** Country code → border rings. */
  borders: Record<string, number[][]>;
  /** [lon, lat, name, country code] */
  capitals: Array<[number, number, string, string]>;
}

export interface OfflineMap {
  borders: Float64Array[];
  regions: Float64Array[];
  labels: Label[];
}

/** Offline map instead of online tiles even when the internet works (per browser). */
export function offlineOnly(): boolean {
  try {
    return settings.getItem(OFFLINE_ONLY_KEY) === '1';
  } catch {
    return false;
  }
}

export function setOfflineOnly(on: boolean): void {
  try {
    if (on) settings.setItem(OFFLINE_ONLY_KEY, '1');
    else settings.removeItem(OFFLINE_ONLY_KEY);
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new CustomEvent('chattx-map-mode-changed'));
}

function decodeRing(ring: number[]): Float64Array {
  const out = new Float64Array(ring.length);
  let x = 0;
  let y = 0;
  for (let i = 0; i + 1 < ring.length; i += 2) {
    x += ring[i];
    y += ring[i + 1];
    out[i] = x / SCALE;
    out[i + 1] = y / SCALE;
  }
  return out;
}

function placeMinZoom(pop: number, rank: number): number {
  if (rank === 0) return 0;
  if (rank === 1 || pop >= 200_000) return 5;
  if (pop >= 50_000) return 7;
  if (pop >= 15_000) return 8;
  if (pop >= 5_000) return 9;
  if (pop >= 2_000) return 10;
  return 11;
}

function peakMinZoom(ele: number): number {
  if (ele >= 2500) return 8;
  if (ele >= 1000) return 9;
  if (ele >= 600) return 10;
  return 11;
}

export function decodeOfflineMap(countries: Record<string, CountryData>, world?: WorldData | null): OfflineMap {
  const borders: Float64Array[] = [];
  const regions: Float64Array[] = [];
  const labels: Label[] = [];
  // The flat world layer, where no country is downloaded in detail.
  if (world) {
    for (const [code, rings] of Object.entries(world.borders ?? {})) {
      if (countries[code]) continue;
      for (const r of rings) borders.push(decodeRing(r));
    }
    for (const [lon, lat, name, code] of world.capitals ?? []) {
      if (countries[code]) continue;
      labels.push({
        lon: lon / SCALE, lat: lat / SCALE, text: name,
        priority: 5_000_000, kind: 'capital', minZoom: 3,
      });
    }
  }
  for (const c of Object.values(countries)) {
    for (const r of c.border) borders.push(decodeRing(r));
    for (const r of c.regions) regions.push(decodeRing(r));
    for (const [lon, lat, name, pop, rank] of c.places) {
      labels.push({
        lon: lon / SCALE, lat: lat / SCALE, text: name,
        priority: rank * 10_000_000 - pop,
        kind: rank === 0 ? 'capital' : rank === 1 ? 'seat' : 'place',
        minZoom: placeMinZoom(pop, rank),
      });
    }
    for (const [lon, lat, name, ele] of c.peaks) {
      labels.push({
        lon: lon / SCALE, lat: lat / SCALE, text: `${name} ${ele}`,
        priority: 30_000_000 - ele,
        kind: 'peak',
        minZoom: peakMinZoom(ele),
      });
    }
  }
  labels.sort((a, b) => a.priority - b.priority);
  return { borders, regions, labels };
}

let loaded: Promise<OfflineMap | null> | null = null;

/** The downloaded offline map, or null when none is downloaded. */
export function loadOfflineMap(hass: HomeAssistant): Promise<OfflineMap | null> {
  loaded ??= hass
    .callWS<{ countries: Record<string, CountryData>; world?: WorldData | null }>({ type: 'meshcore_chattx/offline_map_data' })
    .then((r) => (Object.keys(r.countries ?? {}).length || r.world ? decodeOfflineMap(r.countries ?? {}, r.world) : null))
    .catch(() => {
      loaded = null;
      return null;
    });
  return loaded;
}

/** Forget the loaded map, after a new download. */
export function resetOfflineMap(): void {
  loaded = null;
  window.dispatchEvent(new CustomEvent('chattx-offline-map-updated'));
}

// ── Drawing ─────────────────────────────────────────────────────────────

const pathCache = new WeakMap<OfflineMap, Map<number, { borders: string; regions: string }>>();

function ringsPath(rings: Float64Array[], zoom: number): string {
  const parts: string[] = [];
  for (const ring of rings) {
    let d = '';
    for (let i = 0; i + 1 < ring.length; i += 2) {
      const [x, y] = project(ring[i + 1], ring[i], zoom);
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    parts.push(`${d}Z`);
  }
  return parts.join('');
}

/** Paths in world pixels of a zoom level, built once per zoom. */
function paths(map: OfflineMap, zoom: number) {
  let byZoom = pathCache.get(map);
  if (!byZoom) {
    byZoom = new Map();
    pathCache.set(map, byZoom);
  }
  let p = byZoom.get(zoom);
  if (!p) {
    p = { borders: ringsPath(map.borders, zoom), regions: ringsPath(map.regions, zoom) };
    if (byZoom.size >= 6) byZoom.delete(byZoom.keys().next().value!);
    byZoom.set(zoom, p);
  }
  return p;
}

const MAX_LABELS = 160;

/** Rough label width: CJK and other wide characters take about a full em. */
function textWidth(text: string, size: number): number {
  let em = 0;
  for (const ch of text) em += ch.codePointAt(0)! >= 0x2e80 ? 1 : 0.56;
  return em * size;
}

/**
 * The offline map for a view: `left`/`top` are the view's corner in world
 * pixels at `zoom`, `width` × `height` its size.
 */
export function offlineMapLayer(
  map: OfflineMap | null,
  zoom: number,
  left: number,
  top: number,
  width: number,
  height: number,
): SVGTemplateResult {
  if (!map) return svg`<rect class="om-sea" width=${width} height=${height} />`;
  const { borders, regions } = paths(map, zoom);
  // Labels: most important first, skipped where they would overlap one already placed.
  const boxes: Array<[number, number, number, number]> = [];
  const labels: SVGTemplateResult[] = [];
  for (const l of map.labels) {
    if (labels.length >= MAX_LABELS) break;
    if (l.minZoom > zoom) continue;
    const [wx, wy] = project(l.lat, l.lon, zoom);
    const x = wx - left;
    const y = wy - top;
    if (x < -4 || y < -4 || x > width + 4 || y > height + 4) continue;
    const size = l.kind === 'capital' ? 13 : l.kind === 'seat' ? 12 : l.kind === 'peak' ? 10 : 11;
    const w = textWidth(l.text, size) + 10;
    const box: [number, number, number, number] = [x - 4, y - size, x + w, y + 4];
    if (boxes.some((b) => box[0] < b[2] && box[2] > b[0] && box[1] < b[3] && box[3] > b[1])) continue;
    boxes.push(box);
    labels.push(l.kind === 'peak'
      ? svg`<path class="om-peak" d="M${x} ${y - 4}l4 7h-8z" /><text class="om-label om-peak-label" x=${x + 6} y=${y + 3}>${l.text}</text>`
      : svg`<circle class="om-dot om-${l.kind}" cx=${x} cy=${y} r=${l.kind === 'place' ? 2.2 : 3.2} /><text class="om-label om-${l.kind}-label" x=${x + 5} y=${y + 4}>${l.text}</text>`);
  }
  return svg`
    <rect class="om-sea" width=${width} height=${height} />
    <g transform="translate(${-left} ${-top})">
      <path class="om-land" d=${borders} />
      <path class="om-region" d=${regions} />
      <path class="om-border" d=${borders} />
    </g>
    ${labels}`;
}

export const offlineMapStyles = css`
  /* The same colour as the land: neighbouring borders, simplified separately, leave thin gaps. */
  .om-sea { fill: var(--card-background-color, #fff); }
  .om-land { fill: var(--card-background-color, #fff); fill-rule: nonzero; }
  .om-region { fill: none; stroke: var(--divider-color, #c8c8c8); stroke-width: 1; }
  .om-border { fill: none; stroke: var(--secondary-text-color, #777); stroke-width: 1.8; }
  .om-dot { fill: var(--primary-text-color, #333); }
  .om-capital { fill: #c62828; }
  .om-peak { fill: #8d6e63; }
  .om-label {
    font: 11px sans-serif;
    fill: var(--primary-text-color, #333);
    paint-order: stroke;
    stroke: var(--card-background-color, #fff);
    stroke-width: 3px;
  }
  .om-capital-label { font-size: 13px; font-weight: 700; }
  .om-seat-label { font-size: 12px; font-weight: 600; }
  .om-peak-label { font-size: 10px; fill: #6d4c41; }
`;
