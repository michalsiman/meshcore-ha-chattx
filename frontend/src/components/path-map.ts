import { t } from '../i18n';
import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ChatMessage, HomeAssistant } from '../types';
import { getDeviceConfig } from '../api';
import { MapTilesController } from '../utils/map-tiles';
import { formatLength } from '../utils/units';
import { offlineMapLayer, offlineMapStyles } from '../utils/offline-map';
import {
  TILE_SIZE,
  distanceKm,
  fitZoom,
  formatDistance,
  knownNodes,
  project,
  resolveRoute,
  type RoutePoint,
} from '../utils/path-route';

const WIDTH = 520;
const HEIGHT = 320;

/** Our companion's position, read once per page load. */
let ownPosition: Promise<{ lat: number; lon: number } | null> | null = null;

export function loadOwnPosition(hass: HomeAssistant): Promise<{ lat: number; lon: number } | null> {
  ownPosition ??= getDeviceConfig(hass)
    .then((c) => {
      const lat = Number(c.latitude);
      const lon = Number(c.longitude);
      return Number.isFinite(lat) && Number.isFinite(lon) && (lat !== 0 || lon !== 0) ? { lat, lon } : null;
    })
    .catch(() => null)
    .then((pos) => {
      if (pos) return pos;
      const home = hass.states['zone.home']?.attributes as Record<string, unknown> | undefined;
      const lat = Number(home?.latitude);
      const lon = Number(home?.longitude);
      return Number.isFinite(lat) && Number.isFinite(lon) ? { lat, lon } : null;
    });
  return ownPosition;
}

/** The repeater paths of a message, one per heard copy, with their hop counts. */
function messagePaths(msg: ChatMessage): string[][] {
  const paths: string[][] = [];
  const seen = new Set<string>();
  for (const entry of msg.rxLogData ?? []) {
    const nodes = entry.path_nodes as string[] | undefined;
    if (!nodes || nodes.length === 0) continue;
    const key = nodes.join('>');
    if (seen.has(key)) continue;
    seen.add(key);
    paths.push(nodes);
  }
  return paths.sort((a, b) => a.length - b.length);
}

export function hasMapPath(msg: ChatMessage): boolean {
  return messagePaths(msg).length > 0;
}

/**
 * The route a message took, drawn over OpenStreetMap tiles: sender (when
 * its position is known), the repeaters of the path, and our companion.
 */
@customElement('chattx-path-map')
export class PathMap extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) message?: ChatMessage;
  @property({ type: String }) nodeName = '';
  @state() private _me: { lat: number; lon: number } | null = null;
  @state() private _meLoaded = false;
  @state() private _pathIndex = 0;
  /** Zoom and centre (world pixels) after the user moved the map; null: fitted to the route. */
  @state() private _view: { zoom: number; cx: number; cy: number } | null = null;
  private _fittedView: { zoom: number; cx: number; cy: number } | null = null;
  private _pointers = new Map<number, { x: number; y: number }>();
  private _pinchStart = 0;
  private _lastWheel = 0;
  private _tiles = new MapTilesController(this, () => this.hass);

  static styles = [offlineMapStyles, css`
    :host {
      display: block;
    }
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      padding: 6px 8px 0;
    }
    .tabs button {
      font: inherit;
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      border: 1px solid var(--divider-color, #555);
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .tabs button.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .wrap {
      position: relative;
      margin-top: 6px;
      /* Fingers move and zoom the map instead of scrolling the dialog. */
      touch-action: none;
      cursor: grab;
      user-select: none;
    }
    .wrap:active { cursor: grabbing; }
    svg {
      display: block;
      width: 100%;
      height: auto;
      background: #aad3df;
    }
    .controls {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .controls button {
      width: 30px;
      height: 30px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #222);
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
    }
    .label {
      font: 600 10px sans-serif;
      paint-order: stroke;
      stroke: #fff;
      stroke-width: 3px;
      fill: #222;
    }
    ol {
      margin: 6px 0 8px;
      padding: 0 12px 0 30px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    li {
      margin: 2px 0;
    }
    .prefix {
      font-family: monospace;
    }
    .leg {
      color: var(--secondary-text-color);
      opacity: 0.8;
      font-size: 11px;
    }
    .note.distance {
      font-size: 12px;
      color: var(--primary-text-color);
    }
    .note {
      padding: 0 12px 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .attribution {
      font: 9px sans-serif;
      fill: #333;
    }
  `];

  connectedCallback() {
    super.connectedCallback();
    if (this.hass && !this._meLoaded) {
      void loadOwnPosition(this.hass).then((pos) => {
        this._me = pos;
        this._meLoaded = true;
      });
    }
  }

  render() {
    if (!this.hass || !this.message) return nothing;
    if (!this._meLoaded) return html`<div class="note">${t('Loading...')}</div>`;
    const paths = messagePaths(this.message);
    if (paths.length === 0) return nothing;
    const index = Math.min(this._pathIndex, paths.length - 1);
    const route = resolveRoute({
      pathNodes: paths[index],
      nodes: knownNodes(this.hass.states as unknown as Record<string, { entity_id: string; attributes: Record<string, unknown> }>),
      me: this._me ? { ...this._me, name: this.nodeName } : null,
      outgoing: this.message.isOutgoing,
      senderName: this.message.isOutgoing ? undefined : this.message.sender,
    });
    return html`
      ${paths.length > 1
        ? html`<div class="tabs">
            ${paths.map((p, i) => html`<button class=${i === index ? 'active' : ''} @click=${(e: Event) => { e.stopPropagation(); this._pathIndex = i; this._view = null; }}>
              ${t('Path {n}', { n: i + 1 })} · ${p.length} hops
            </button>`)}
          </div>`
        : nothing}
      ${this._renderMap(route)}
      ${this._renderList(route)}
    `;
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('message')) this._view = null;
  }

  private _current() {
    return this._view ?? this._fittedView ?? { zoom: 8, cx: 0, cy: 0 };
  }

  /** Zoom to a level keeping the point (sx, sy) of the view, in SVG units, in place. */
  private _zoomAt(zoom: number, sx = WIDTH / 2, sy = HEIGHT / 2) {
    const v = this._current();
    const z = Math.max(2, Math.min(17, zoom));
    if (z === v.zoom) return;
    const scale = 2 ** (z - v.zoom);
    const wx = v.cx - WIDTH / 2 + sx;
    const wy = v.cy - HEIGHT / 2 + sy;
    this._view = { zoom: z, cx: wx * scale - (sx - WIDTH / 2), cy: wy * scale - (sy - HEIGHT / 2) };
  }

  /** Pointer position in SVG units (the SVG is scaled to the dialog's width). */
  private _local(e: PointerEvent | WheelEvent) {
    const r = (this.renderRoot.querySelector('.wrap svg') as SVGElement).getBoundingClientRect();
    const k = r.width > 0 ? WIDTH / r.width : 1;
    return { x: (e.clientX - r.left) * k, y: (e.clientY - r.top) * k };
  }

  private _onWheel(e: WheelEvent) {
    e.preventDefault();
    const now = Date.now();
    if (now - this._lastWheel < 120) return;
    this._lastWheel = now;
    const p = this._local(e);
    this._zoomAt(this._current().zoom + (e.deltaY < 0 ? 1 : -1), p.x, p.y);
  }

  private _onPointerDown(e: PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this._pointers.set(e.pointerId, this._local(e));
    if (this._pointers.size === 2) this._pinchStart = this._pinchDistance();
  }

  private _pinchDistance(): number {
    const [a, b] = [...this._pointers.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  private _onPointerMove(e: PointerEvent) {
    const prev = this._pointers.get(e.pointerId);
    if (!prev) return;
    const cur = this._local(e);
    this._pointers.set(e.pointerId, cur);
    if (this._pointers.size === 1) {
      const v = this._current();
      if (cur.x !== prev.x || cur.y !== prev.y) {
        this._view = { zoom: v.zoom, cx: v.cx - (cur.x - prev.x), cy: v.cy - (cur.y - prev.y) };
      }
    } else if (this._pointers.size === 2 && this._pinchStart > 0) {
      const d = this._pinchDistance();
      const [a, b] = [...this._pointers.values()];
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      if (d / this._pinchStart > 1.5) {
        this._zoomAt(this._current().zoom + 1, mid.x, mid.y);
        this._pinchStart = d;
      } else if (d / this._pinchStart < 0.67) {
        this._zoomAt(this._current().zoom - 1, mid.x, mid.y);
        this._pinchStart = d;
      }
    }
  }

  private _onPointerUp(e: PointerEvent) {
    this._pointers.delete(e.pointerId);
    if (this._pointers.size < 2) this._pinchStart = 0;
  }

  private _renderMap(route: RoutePoint[]) {
    const known = route.filter((p) => p.lat !== null && p.lon !== null) as Array<RoutePoint & { lat: number; lon: number }>;
    if (known.length === 0) {
      return html`<div class="note">${t('No repeater on this path has a known position.')}</div>`;
    }
    const fitted = (() => {
      const z = fitZoom(known, WIDTH, HEIGHT);
      const px = known.map((p) => project(p.lat, p.lon, z));
      const xs = px.map((p) => p[0]);
      const ys = px.map((p) => p[1]);
      return { zoom: z, cx: (Math.min(...xs) + Math.max(...xs)) / 2, cy: (Math.min(...ys) + Math.max(...ys)) / 2 };
    })();
    // The fitted view until the user drags or zooms.
    const view = this._view ?? fitted;
    this._fittedView = fitted;
    const { zoom, cx, cy } = view;
    const left = cx - WIDTH / 2;
    const top = cy - HEIGHT / 2;
    const tiles = [];
    const n = 2 ** zoom;
    const offline = this._tiles.offline;
    if (offline) {
      tiles.push(offlineMapLayer(this._tiles.offlineMap, zoom, left, top, WIDTH, HEIGHT));
    } else {
      for (let tx = Math.floor(left / TILE_SIZE); tx <= Math.floor((left + WIDTH) / TILE_SIZE); tx++) {
        for (let ty = Math.floor(top / TILE_SIZE); ty <= Math.floor((top + HEIGHT) / TILE_SIZE); ty++) {
          if (ty < 0 || ty >= n) continue;
          const wx = ((tx % n) + n) % n;
          if (!this._tiles.ready) continue;
          tiles.push(svg`<image href=${this._tiles.url(zoom, wx, ty)} @error=${this._tiles.tileError} @load=${this._tiles.tileLoad}
            x=${tx * TILE_SIZE - left} y=${ty * TILE_SIZE - top} width=${TILE_SIZE} height=${TILE_SIZE} />`);
        }
      }
    }
    const at = (p: { lat: number; lon: number }) => {
      const [x, y] = project(p.lat, p.lon, zoom);
      return [x - left, y - top] as const;
    };
    // Segments between consecutive placed points; dashed when a point in
    // between has no position or either end is uncertain.
    const segments = [];
    let prev: (RoutePoint & { lat: number; lon: number }) | null = null;
    let gap = false;
    for (const p of route) {
      if (p.lat === null || p.lon === null) {
        if (prev) gap = true;
        continue;
      }
      const cur = p as RoutePoint & { lat: number; lon: number };
      if (prev) {
        const [x1, y1] = at(prev);
        const [x2, y2] = at(cur);
        const dashed = gap || prev.ambiguous || cur.ambiguous;
        segments.push(svg`<line x1=${x1} y1=${y1} x2=${x2} y2=${y2} stroke="#d32f2f" stroke-width="3"
          stroke-linecap="round" stroke-dasharray=${dashed ? '6 5' : 'none'} opacity="0.9" />`);
      }
      prev = cur;
      gap = false;
    }
    let hop = 0;
    const markers = route.map((p) => {
      if (p.kind === 'repeater') hop++;
      if (p.lat === null || p.lon === null) return nothing;
      const [x, y] = at(p as { lat: number; lon: number });
      const color = p.kind === 'me' ? '#1e88e5' : p.kind === 'sender' ? '#43a047' : '#fb8c00';
      const label = p.kind === 'repeater' ? `${hop}` : p.kind === 'me' ? t('You') : (p.name || t('Sender'));
      return svg`
        <circle cx=${x} cy=${y} r=${p.kind === 'repeater' ? 6 : 8} fill=${p.ambiguous ? '#fff' : color}
          stroke=${color} stroke-width="3" />
        <text class="label" x=${x + 10} y=${y + 4}>${label}</text>`;
    });
    return html`<div class="wrap"
        @wheel=${this._onWheel}
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
        @click=${(e: Event) => e.stopPropagation()}>
      <svg viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label=${t('Route on the map')}>
        ${tiles}
        ${segments}
        ${markers}
        <text class="attribution" x=${WIDTH - 4} y=${HEIGHT - 4} text-anchor="end">${offline ? '© geoBoundaries, GeoNames' : '© OpenStreetMap'}</text>
      </svg>
      <div class="controls" @pointerdown=${(e: Event) => e.stopPropagation()}>
        <button aria-label=${t('Zoom in')} @click=${() => this._zoomAt(zoom + 1)}>+</button>
        <button aria-label=${t('Zoom out')} @click=${() => this._zoomAt(zoom - 1)}>−</button>
        <button aria-label=${t('Show all')} @click=${() => { this._view = null; }}>⤢</button>
      </div>
    </div>
    ${offline && this._tiles.offlineLoaded && !this._tiles.offlineMap
      ? html`<div class="note">${t('No offline map downloaded. Download it in Settings → Map.')}</div>`
      : nothing}`;
  }

  private _renderList(route: RoutePoint[]) {
    let hop = 0;
    const uncertain = route.some((p) => p.ambiguous);
    const repeaters = route.filter((p) => p.kind === 'repeater');
    // Each repeater's leg from the previous repeater with a known position.
    let prev: RoutePoint | null = null;
    const legs = repeaters.map((p) => {
      if (p.lat === null || p.lon === null) return null;
      const leg = prev ? distanceKm(prev.lat!, prev.lon!, p.lat, p.lon) : null;
      prev = p;
      return leg;
    });
    // The same repeaters as drawn: straight line between the ends, and the legs added up.
    const first = repeaters[0];
    const last = repeaters[repeaters.length - 1];
    const total = repeaters.length >= 2 && first.lat !== null && first.lon !== null && last.lat !== null && last.lon !== null
      ? {
          km: distanceKm(first.lat, first.lon, last.lat, last.lon),
          approx: first.ambiguous || last.ambiguous,
          routeKm: legs.reduce<number>((sum, leg) => sum + (leg ?? 0), 0),
          routeApprox: repeaters.some((p) => p.ambiguous || p.lat === null),
        }
      : null;
    return html`
      <ol>
        ${repeaters.map((p, i) => {
          hop++;
          const leg = legs[i];
          return html`<li value=${hop}>
            <span class="prefix">${p.prefix}</span>
            ${p.name ? html` ${p.name}` : html` – ${t('no known position')}`}${p.ambiguous ? ' (?)' : ''}${leg !== null
              ? html` <span class="leg">+${formatLength(leg)}</span>`
              : nothing}
          </li>`;
        })}
      </ol>
      ${total ? html`<div class="note distance">${formatDistance(total)}</div>` : nothing}
      ${uncertain
        ? html`<div class="note">${t('(?) Several repeaters share this prefix; the one nearest to the route is shown.')}</div>`
        : nothing}
      <div class="note">🧪 ${t('Experimental feature')}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-path-map': PathMap;
  }
}
