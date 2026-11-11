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

type CopyState = 'idle' | 'busy' | 'copied' | 'shared' | 'saved' | 'failed';

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
  /** State of the Copy image button: idle, working, or the outcome shown for a moment. */
  @state() private _copyState: CopyState = 'idle';
  private _copyTimer?: ReturnType<typeof setTimeout>;

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
    .controls button svg { display: block; margin: auto; }
    .controls button:disabled { opacity: 0.6; cursor: default; }
    .copy-note {
      position: absolute;
      left: 6px;
      bottom: 6px;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 12px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #222);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
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
        <button aria-label=${t('Copy map as image')} title=${t('Copy map as image')} ?disabled=${this._copyState === 'busy'}
          @click=${() => void this._copyImage()}><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
        <button aria-label=${t('Send map in a message')} title=${t('Send map in a message')} ?disabled=${this._copyState === 'busy'}
          @click=${() => void this._sendImage()}><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>
      ${this._copyState !== 'idle' ? html`<div class="copy-note" role="status">${
        this._copyState === 'busy' ? t('Preparing image…')
        : this._copyState === 'copied' ? t('Map image copied')
        : this._copyState === 'shared' ? t('Map image shared')
        : this._copyState === 'saved' ? t('Map image downloaded')
        : t('The map image could not be made')}</div>` : nothing}
    </div>
    ${offline && this._tiles.offlineLoaded && !this._tiles.offlineMap
      ? html`<div class="note">${t('No offline map downloaded. Download it in Settings → Map.')}</div>`
      : nothing}`;
  }

  /** The map as it is shown, with the hop list below it, as a PNG. */
  private async _mapImage(): Promise<Blob> {
    const shown = this.renderRoot.querySelector('.wrap svg') as SVGSVGElement | null;
    if (!shown) throw new Error('no map');
    const clone = shown.cloneNode(true) as SVGSVGElement;
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(WIDTH));
    clone.setAttribute('height', String(HEIGHT));
    // Styles live in the shadow root; a standalone SVG needs them inline.
    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `${offlineMapStyles.cssText}
      .label { font: 600 10px sans-serif; paint-order: stroke; stroke: #fff; stroke-width: 3px; fill: #222; }
      .attribution { font: 9px sans-serif; fill: #333; }`;
    clone.insertBefore(style, clone.firstChild);
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute('width', String(WIDTH));
    bg.setAttribute('height', String(HEIGHT));
    bg.setAttribute('fill', '#aad3df');
    clone.insertBefore(bg, style.nextSibling);
    // An SVG drawn as an image loads nothing from outside: embed the tiles.
    await Promise.all(Array.from(clone.querySelectorAll('image')).map(async (img) => {
      const href = img.getAttribute('href');
      if (!href || href.startsWith('data:')) return;
      try {
        const blob = await (await fetch(href)).blob();
        img.setAttribute('href', await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(blob);
        }));
      } catch {
        img.remove();
      }
    }));
    const svgUrl = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' }));
    try {
      const picture = new Image();
      await new Promise<void>((resolve, reject) => {
        picture.onload = () => resolve();
        picture.onerror = () => reject(new Error('svg'));
        picture.src = svgUrl;
      });
      // The hop list and distance as text under the map.
      const lines = Array.from(this.renderRoot.querySelectorAll('ol li'))
        .map((li, i) => `${i + 1}. ${(li.textContent ?? '').replace(/\s+/g, ' ').trim()}`);
      const distance = (this.renderRoot.querySelector('.note.distance')?.textContent ?? '').trim();
      if (distance) lines.push(distance);
      const scale = 2;
      const lineHeight = 18;
      const pad = 10;
      const canvas = document.createElement('canvas');
      canvas.width = WIDTH * scale;
      canvas.height = (HEIGHT + (lines.length ? pad * 2 + lines.length * lineHeight : 0)) * scale;
      const ctx = canvas.getContext('2d')!;
      ctx.scale(scale, scale);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, WIDTH, canvas.height / scale);
      ctx.drawImage(picture, 0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = '#222';
      ctx.font = '13px sans-serif';
      ctx.textBaseline = 'top';
      lines.forEach((line, i) => ctx.fillText(line, pad, HEIGHT + pad + i * lineHeight, WIDTH - pad * 2));
      return await new Promise<Blob>((resolve, reject) =>
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('png'))), 'image/png'));
    } finally {
      URL.revokeObjectURL(svgUrl);
    }
  }

  /** Hand the map image to the chat, which opens the image upload dialog for the message. */
  private async _sendImage() {
    if (this._copyState === 'busy') return;
    clearTimeout(this._copyTimer);
    this._copyState = 'busy';
    try {
      const blob = await this._mapImage();
      this._copyState = 'idle';
      this.dispatchEvent(new CustomEvent('chattx-send-image', {
        detail: { file: new File([blob], 'chattx-route.png', { type: 'image/png' }) },
        bubbles: true,
        composed: true,
      }));
    } catch {
      this._copyState = 'failed';
      this._copyTimer = setTimeout(() => { this._copyState = 'idle'; }, 2500);
    }
  }

  /** Copy the map image; where the browser can't, share it (phones) or download it. */
  private async _copyImage() {
    if (this._copyState === 'busy') return;
    clearTimeout(this._copyTimer);
    this._copyState = 'busy';
    let result: CopyState = 'failed';
    try {
      const png = this._mapImage();
      let copied = false;
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        try {
          // Pass the promise so Safari keeps the click as the user gesture.
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
          copied = true;
        } catch {
          copied = false;
        }
      }
      if (copied) {
        result = 'copied';
      } else {
        const blob = await png;
        const file = new File([blob], 'chattx-route.png', { type: 'image/png' });
        const nav = navigator as Navigator & { canShare?: (d: { files: File[] }) => boolean };
        if (nav.canShare?.({ files: [file] }) && nav.share) {
          try {
            await nav.share({ files: [file] });
            result = 'shared';
          } catch (err) {
            result = (err as Error)?.name === 'AbortError' ? 'idle' : 'failed';
          }
        } else {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = file.name;
          a.click();
          setTimeout(() => URL.revokeObjectURL(a.href), 10_000);
          result = 'saved';
        }
      }
    } catch {
      result = 'failed';
    }
    this._copyState = result;
    if (result !== 'idle') this._copyTimer = setTimeout(() => { this._copyState = 'idle'; }, 2500);
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
