import { t } from '../i18n';
import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ChatMessage, HomeAssistant } from '../types';
import { getDeviceConfig } from '../api';
import {
  TILE_SIZE,
  fitZoom,
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

  static styles = css`
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
    svg {
      display: block;
      width: 100%;
      height: auto;
      background: #aad3df;
      margin-top: 6px;
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
    .note {
      padding: 0 12px 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .attribution {
      font: 9px sans-serif;
      fill: #333;
    }
  `;

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
            ${paths.map((p, i) => html`<button class=${i === index ? 'active' : ''} @click=${(e: Event) => { e.stopPropagation(); this._pathIndex = i; }}>
              ${t('Path {n}', { n: i + 1 })} · ${p.length} hops
            </button>`)}
          </div>`
        : nothing}
      ${this._renderMap(route)}
      ${this._renderList(route)}
    `;
  }

  private _renderMap(route: RoutePoint[]) {
    const known = route.filter((p) => p.lat !== null && p.lon !== null) as Array<RoutePoint & { lat: number; lon: number }>;
    if (known.length === 0) {
      return html`<div class="note">${t('No repeater on this path has a known position.')}</div>`;
    }
    const zoom = fitZoom(known, WIDTH, HEIGHT);
    const px = known.map((p) => project(p.lat, p.lon, zoom));
    const xs = px.map((p) => p[0]);
    const ys = px.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const left = cx - WIDTH / 2;
    const top = cy - HEIGHT / 2;
    const tiles = [];
    const n = 2 ** zoom;
    for (let tx = Math.floor(left / TILE_SIZE); tx <= Math.floor((left + WIDTH) / TILE_SIZE); tx++) {
      for (let ty = Math.floor(top / TILE_SIZE); ty <= Math.floor((top + HEIGHT) / TILE_SIZE); ty++) {
        if (ty < 0 || ty >= n) continue;
        const wx = ((tx % n) + n) % n;
        tiles.push(svg`<image href=${`https://tile.openstreetmap.org/${zoom}/${wx}/${ty}.png`}
          x=${tx * TILE_SIZE - left} y=${ty * TILE_SIZE - top} width=${TILE_SIZE} height=${TILE_SIZE} />`);
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
    return html`<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label=${t('Route on the map')}>
      ${tiles}
      ${segments}
      ${markers}
      <text class="attribution" x=${WIDTH - 4} y=${HEIGHT - 4} text-anchor="end">© OpenStreetMap</text>
    </svg>`;
  }

  private _renderList(route: RoutePoint[]) {
    let hop = 0;
    const uncertain = route.some((p) => p.ambiguous);
    return html`
      <ol>
        ${route.filter((p) => p.kind === 'repeater').map((p) => {
          hop++;
          return html`<li value=${hop}>
            <span class="prefix">${p.prefix}</span>
            ${p.name ? html` ${p.name}` : html` – ${t('no known position')}`}${p.ambiguous ? ' (?)' : ''}
          </li>`;
        })}
      </ol>
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
