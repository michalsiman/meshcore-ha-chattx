import { t } from '../i18n';
import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Contact, HomeAssistant } from '../types';
import { MapTilesController } from '../utils/map-tiles';
import { offlineMapLayer, offlineMapStyles } from '../utils/offline-map';
import { TILE_SIZE, fitZoom, project } from '../utils/path-route';

const MIN_ZOOM = 2;
const MAX_ZOOM = 17;
/** Markers closer than this many pixels are drawn as one numbered cluster. */
const CLUSTER_CELL = 44;

const TYPE_COLORS: Record<number, string> = {
  1: '#42a5f5', // companion
  2: '#fb8c00', // repeater
  3: '#ab47bc', // room server
  4: '#66bb6a', // sensor
};

interface Placed {
  node: Contact;
  lat: number;
  lon: number;
}

function position(node: Contact): Placed | null {
  const lat = Number(node.adv_lat);
  const lon = Number(node.adv_lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || (lat === 0 && lon === 0)) return null;
  if (Math.abs(lat) > 85 || Math.abs(lon) > 180) return null;
  return { node, lat, lon };
}

/**
 * Nodes with a known position on an OpenStreetMap map that can be dragged
 * and zoomed (mouse wheel, buttons, two fingers). Markers that would overlap
 * are drawn as a cluster with their count; a click on a cluster zooms in, a
 * click on a node fires `node-selected`.
 */
@customElement('chattx-nodes-map')
export class NodesMap extends LitElement {
  @property({ attribute: false }) nodes: Contact[] = [];
  @property({ attribute: false }) home: { lat: number; lon: number } | null = null;
  @property({ type: Boolean }) loading = false;
  /** Only the first hass is used (for the tile token), so state changes don't redraw the map. */
  @property({ attribute: false, hasChanged: (value: unknown, old: unknown) => !old && !!value }) hass?: HomeAssistant;
  private _tiles = new MapTilesController(this, () => this.hass);

  @state() private _zoom = 7;
  /** Centre of the view in world pixels at the current zoom. */
  @state() private _cx = 0;
  @state() private _cy = 0;
  @state() private _w = 600;
  @state() private _h = 480;

  private _fitted = false;
  /** The user moved or zoomed the map; a resize then keeps their view. */
  private _userMoved = false;
  private _resize?: ResizeObserver;
  private _pointers = new Map<number, { x: number; y: number }>();
  private _moved = 0;
  private _pinchStart = 0;
  private _lastWheel = 0;
  /** Marker under the first finger or the mouse when pressed. */
  private _downMarker: string | null = null;

  static styles = [offlineMapStyles, css`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
    }
    .wrap {
      position: relative;
      flex: 1;
      min-height: 240px;
      border-radius: 12px;
      overflow: hidden;
      background: #aad3df;
      touch-action: none;
      user-select: none;
      cursor: grab;
    }
    .wrap:active {
      cursor: grabbing;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    .controls {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .controls button {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      background: rgba(255, 255, 255, 0.92);
      color: #222;
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
    }
    .legend {
      flex: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      padding: 6px 4px 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 4px;
      vertical-align: -1px;
    }
    .cluster-text {
      font: 700 11px sans-serif;
      fill: #fff;
      pointer-events: none;
    }
    .label {
      font: 600 10px sans-serif;
      paint-order: stroke;
      stroke: #fff;
      stroke-width: 3px;
      fill: #222;
      pointer-events: none;
    }
    .attribution {
      font: 9px sans-serif;
      fill: #333;
    }
    .offline-note {
      position: absolute;
      left: 8px;
      top: 8px;
      max-width: calc(100% - 70px);
      padding: 2px 8px;
      border-radius: 10px;
      background: var(--card-background-color, #fff);
      color: var(--secondary-text-color);
      font-size: 11px;
      opacity: 0.9;
      pointer-events: none;
    }
  `];

  firstUpdated() {
    const wrap = this.renderRoot.querySelector('.wrap') as HTMLElement;
    this._resize = new ResizeObserver(() => {
      const r = wrap.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        this._w = Math.round(r.width);
        this._h = Math.round(r.height);
        if (!this._fitted || !this._userMoved) this._fit();
      }
    });
    this._resize.observe(wrap);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._resize?.disconnect();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('nodes') && this.nodes.length > 0) {
      this._userMoved = false;
      this._fit();
    }
  }

  private _placed(): Placed[] {
    return this.nodes.map(position).filter((p): p is Placed => p !== null);
  }

  private _fit() {
    // Fit the bulk of the nodes: a few far away ones (another country, a
    // wrong position) would otherwise zoom the map out to a continent.
    let pts = this._placed().map((p) => ({ lat: p.lat, lon: p.lon }));
    if (pts.length >= 20) {
      const q = (vals: number[], f: number) => vals.slice().sort((a, b) => a - b)[Math.floor(f * (vals.length - 1))];
      const lats = pts.map((p) => p.lat);
      const lons = pts.map((p) => p.lon);
      const [la0, la1, lo0, lo1] = [q(lats, 0.02), q(lats, 0.98), q(lons, 0.02), q(lons, 0.98)];
      pts = pts.filter((p) => p.lat >= la0 && p.lat <= la1 && p.lon >= lo0 && p.lon <= lo1);
    }
    if (this.home) pts.push(this.home);
    if (pts.length === 0) return;
    const zoom = pts.length === 1 ? 12 : Math.min(15, fitZoom(pts, this._w, this._h, 30));
    const px = pts.map((p) => project(p.lat, p.lon, zoom));
    const xs = px.map((p) => p[0]);
    const ys = px.map((p) => p[1]);
    this._zoom = zoom;
    this._cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    this._cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    this._fitted = true;
  }

  /** Zoom to a level keeping the point under (sx, sy) on the screen in place. */
  private _zoomAt(zoom: number, sx = this._w / 2, sy = this._h / 2) {
    this._userMoved = true;
    const z = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom));
    if (z === this._zoom) return;
    const scale = 2 ** (z - this._zoom);
    const wx = this._cx - this._w / 2 + sx;
    const wy = this._cy - this._h / 2 + sy;
    this._cx = wx * scale - (sx - this._w / 2);
    this._cy = wy * scale - (sy - this._h / 2);
    this._zoom = z;
  }

  private _local(e: PointerEvent | WheelEvent) {
    const r = (this.renderRoot.querySelector('.wrap') as HTMLElement).getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  private _onWheel(e: WheelEvent) {
    e.preventDefault();
    const now = Date.now();
    if (now - this._lastWheel < 120) return;
    this._lastWheel = now;
    const p = this._local(e);
    this._zoomAt(this._zoom + (e.deltaY < 0 ? 1 : -1), p.x, p.y);
  }

  private _onPointerDown(e: PointerEvent) {
    if (this._pointers.size === 0) {
      const target = (e.composedPath()[0] as Element | undefined)?.closest?.('[data-marker]');
      this._downMarker = target?.getAttribute('data-marker') ?? null;
    }
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this._pointers.set(e.pointerId, this._local(e));
    this._moved = 0;
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
      this._cx -= cur.x - prev.x;
      this._cy -= cur.y - prev.y;
      this._userMoved = true;
      this._moved += Math.abs(cur.x - prev.x) + Math.abs(cur.y - prev.y);
    } else if (this._pointers.size === 2 && this._pinchStart > 0) {
      this._moved += 10;
      const d = this._pinchDistance();
      const [a, b] = [...this._pointers.values()];
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      if (d / this._pinchStart > 1.5) {
        this._zoomAt(this._zoom + 1, mid.x, mid.y);
        this._pinchStart = d;
      } else if (d / this._pinchStart < 0.67) {
        this._zoomAt(this._zoom - 1, mid.x, mid.y);
        this._pinchStart = d;
      }
    }
  }

  private _onPointerUp(e: PointerEvent) {
    this._pointers.delete(e.pointerId);
    if (this._pointers.size < 2) this._pinchStart = 0;
    // A tap (no drag) on a marker or cluster.
    if (this._pointers.size === 0 && this._moved < 6 && this._downMarker) {
      this._activate(this._downMarker);
    }
    if (this._pointers.size === 0) this._downMarker = null;
  }

  private _clusters: Map<string, { x: number; y: number; items: Placed[] }> = new Map();

  private _activate(key: string) {
    const c = this._clusters.get(key);
    if (!c) return;
    if (c.items.length === 1) {
      this.dispatchEvent(new CustomEvent('node-selected', { detail: { node: c.items[0].node }, bubbles: true, composed: true }));
    } else {
      this._zoomAt(this._zoom + 2, c.x, c.y);
    }
  }

  render() {
    const placed = this._placed();
    const z = this._zoom;
    const left = this._cx - this._w / 2;
    const top = this._cy - this._h / 2;
    const n = 2 ** z;
    const tiles = [];
    const offline = this._tiles.offline;
    if (offline) {
      tiles.push(offlineMapLayer(this._tiles.offlineMap, z, left, top, this._w, this._h));
    } else {
      for (let tx = Math.floor(left / TILE_SIZE); tx <= Math.floor((left + this._w) / TILE_SIZE); tx++) {
        for (let ty = Math.floor(top / TILE_SIZE); ty <= Math.floor((top + this._h) / TILE_SIZE); ty++) {
          if (ty < 0 || ty >= n) continue;
          const wx = ((tx % n) + n) % n;
          if (!this._tiles.ready) continue;
          tiles.push(svg`<image href=${this._tiles.url(z, wx, ty)} @error=${this._tiles.tileError} @load=${this._tiles.tileLoad}
            x=${tx * TILE_SIZE - left} y=${ty * TILE_SIZE - top} width=${TILE_SIZE} height=${TILE_SIZE} />`);
        }
      }
    }
    // Cluster markers on a screen grid; only what is in view.
    const clusters = new Map<string, { x: number; y: number; items: Placed[] }>();
    for (const p of placed) {
      const [wx, wy] = project(p.lat, p.lon, z);
      const x = wx - left;
      const y = wy - top;
      if (x < -20 || y < -20 || x > this._w + 20 || y > this._h + 20) continue;
      const key = `${Math.floor(x / CLUSTER_CELL)},${Math.floor(y / CLUSTER_CELL)}`;
      const c = clusters.get(key);
      if (c) {
        c.x = (c.x * c.items.length + x) / (c.items.length + 1);
        c.y = (c.y * c.items.length + y) / (c.items.length + 1);
        c.items.push(p);
      } else {
        clusters.set(key, { x, y, items: [p] });
      }
    }
    this._clusters = clusters;
    const showLabels = z >= 11;
    const markers = [...clusters.entries()].map(([key, c]) => {
      if (c.items.length === 1) {
        const node = c.items[0].node;
        const color = TYPE_COLORS[node.type] ?? '#9e9e9e';
        return svg`<g data-marker=${key} style="cursor:pointer">
          <circle cx=${c.x} cy=${c.y} r="12" fill="transparent" />
          <circle cx=${c.x} cy=${c.y} r="7" fill=${color} stroke="#fff" stroke-width="2"><title>${node.adv_name}</title></circle>
        </g>
        ${showLabels ? svg`<text class="label" x=${c.x + 10} y=${c.y + 4}>${node.adv_name}</text>` : nothing}`;
      }
      const r = Math.min(22, 11 + Math.log2(c.items.length) * 2.2);
      return svg`<g data-marker=${key} style="cursor:pointer">
        <circle cx=${c.x} cy=${c.y} r=${r} fill="#d84315" fill-opacity="0.85" stroke="#fff" stroke-width="2">
          <title>${c.items.length}</title></circle>
        <text class="cluster-text" x=${c.x} y=${c.y + 4} text-anchor="middle">${c.items.length}</text>
      </g>`;
    });
    let homeMarker = svg``;
    if (this.home) {
      const [hx, hy] = project(this.home.lat, this.home.lon, z);
      homeMarker = svg`<circle cx=${hx - left} cy=${hy - top} r="9" fill="#1e88e5" stroke="#fff" stroke-width="3"><title>${t('You')}</title></circle>`;
    }
    const missing = this.nodes.length - placed.length;
    return html`
      <div class="wrap"
        @wheel=${this._onWheel}
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}>
        <svg viewBox="0 0 ${this._w} ${this._h}" role="img" aria-label=${t('Nodes on the map')}>
          ${tiles}
          ${markers}
          ${homeMarker}
          <text class="attribution" x=${this._w - 4} y=${this._h - 4} text-anchor="end">${offline ? '© geoBoundaries, GeoNames' : '© OpenStreetMap'}</text>
        </svg>
        ${offline ? html`<div class="offline-note">${this._tiles.offlineLoaded && !this._tiles.offlineMap
          ? t('No offline map downloaded. Download it in Settings → Map.')
          : t('Offline map')}</div>` : nothing}
        <div class="controls" @pointerdown=${(e: Event) => e.stopPropagation()}>
          <button aria-label=${t('Zoom in')} @click=${() => this._zoomAt(this._zoom + 1)}>+</button>
          <button aria-label=${t('Zoom out')} @click=${() => this._zoomAt(this._zoom - 1)}>−</button>
          <button aria-label=${t('Show all')} @click=${() => { this._userMoved = false; this._fit(); }}>⤢</button>
        </div>
      </div>
      <div class="legend">
        <span><span class="dot" style="background:${TYPE_COLORS[2]}"></span>${t('Repeater')}</span>
        <span><span class="dot" style="background:${TYPE_COLORS[1]}"></span>${t('Companion')}</span>
        <span><span class="dot" style="background:${TYPE_COLORS[3]}"></span>${t('Room server')}</span>
        <span><span class="dot" style="background:${TYPE_COLORS[4]}"></span>${t('Sensor')}</span>
        <span><span class="dot" style="background:#1e88e5"></span>${t('You')}</span>
        <span>${this.loading
          ? t('Loading...')
          : t('{shown} of {total} nodes have a known position', { shown: placed.length, total: placed.length + missing })}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-nodes-map': NodesMap;
  }
}
