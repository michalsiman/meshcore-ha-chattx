/**
 * Map tiles through Home Assistant's own tile proxy.
 *
 * openstreetmap.org refuses tile requests that do not follow its usage
 * policy, which some browsers and the companion apps run into, and CARTO
 * now wants an API key. Home Assistant 2026.11 fetches OpenStreetMap tiles
 * on the server for its own maps (`/api/map_tiles`), authorised by a short
 * token from `map_tiles/access_token` that rotates every 30 minutes and
 * stays valid for at least 30 more. Older Home Assistant versions without
 * the proxy fall back to openstreetmap.org directly.
 */
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { HomeAssistant } from '../types';
import { loadOfflineMap, offlineOnly, type OfflineMap } from './offline-map';

const REFRESH_MS = 20 * 60 * 1000;

let token: string | null = null;
let fetchedAt = 0;
/** The proxy answered "unknown command"; don't ask again this page load. */
let noProxy = false;
let pending: Promise<string | null> | null = null;

export function mapTileToken(hass: HomeAssistant): Promise<string | null> {
  if (noProxy) return Promise.resolve(null);
  if (token && Date.now() - fetchedAt < REFRESH_MS) return Promise.resolve(token);
  pending ??= hass
    .callWS<{ token: string }>({ type: 'map_tiles/access_token' })
    .then((result) => {
      token = result.token;
      fetchedAt = Date.now();
      return token;
    })
    .catch((error: { code?: string }) => {
      if (error?.code === 'unknown_command') noProxy = true;
      return token;
    })
    .finally(() => {
      pending = null;
    });
  return pending;
}

export function mapTileUrl(tileToken: string | null, z: number, x: number, y: number): string {
  return tileToken
    ? `/api/map_tiles/raster/${z}/${x}/${y}.png?token=${encodeURIComponent(tileToken)}`
    : `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
}

/**
 * Map background of a map component: online tiles through the proxy, or
 * the simplified offline map when the tiles don't load, the browser is
 * offline, or the user chose the offline map only.
 */
export class MapTilesController implements ReactiveController {
  /** False until the first answer, so no tile is asked for with the wrong URL. */
  ready = false;
  /** The downloaded offline map, once loaded (null: none downloaded). */
  offlineMap: OfflineMap | null = null;
  offlineLoaded = false;
  private _token: string | null = null;
  private _timer: ReturnType<typeof setInterval> | null = null;
  private _tileErrors = 0;
  private _tileLoads = 0;
  private _loadingOffline = false;

  constructor(private host: ReactiveControllerHost, private getHass: () => HomeAssistant | undefined) {
    host.addController(this);
  }

  /** Draw the offline map instead of tiles. */
  get offline(): boolean {
    return offlineOnly()
      || (typeof navigator !== 'undefined' && navigator.onLine === false)
      || (this._tileErrors > 0 && this._tileLoads === 0)
      || this._tileErrors >= 3;
  }

  private _onChange = () => this.host.requestUpdate();

  private _onOfflineMapUpdated = () => {
    this.offlineLoaded = false;
    this.host.requestUpdate();
  };

  hostConnected(): void {
    void this._refresh();
    this._timer = setInterval(() => void this._refresh(), REFRESH_MS);
    window.addEventListener('chattx-map-mode-changed', this._onChange);
    window.addEventListener('online', this._onChange);
    window.addEventListener('offline', this._onChange);
    window.addEventListener('chattx-offline-map-updated', this._onOfflineMapUpdated);
  }

  hostDisconnected(): void {
    if (this._timer) clearInterval(this._timer);
    this._timer = null;
    window.removeEventListener('chattx-map-mode-changed', this._onChange);
    window.removeEventListener('online', this._onChange);
    window.removeEventListener('offline', this._onChange);
    window.removeEventListener('chattx-offline-map-updated', this._onOfflineMapUpdated);
  }

  hostUpdated(): void {
    // hass may arrive after connecting.
    if (!this.ready) void this._refresh();
    if (this.offline && !this.offlineLoaded) void this._loadOffline();
  }

  url(z: number, x: number, y: number): string {
    return mapTileUrl(this._token, z, x, y);
  }

  /** For the tile <image>'s error and load events. */
  tileError = () => {
    this._tileErrors++;
    this.host.requestUpdate();
  };

  tileLoad = () => {
    this._tileLoads++;
  };

  private async _loadOffline(): Promise<void> {
    const hass = this.getHass();
    if (!hass || this._loadingOffline) return;
    this._loadingOffline = true;
    try {
      this.offlineMap = await loadOfflineMap(hass);
      this.offlineLoaded = true;
      this.host.requestUpdate();
    } finally {
      this._loadingOffline = false;
    }
  }

  private _refreshing = false;

  private async _refresh(): Promise<void> {
    const hass = this.getHass();
    if (!hass || this._refreshing) return;
    this._refreshing = true;
    try {
      const next = await mapTileToken(hass);
      if (next !== this._token || !this.ready) {
        this._token = next;
        this.ready = true;
        this.host.requestUpdate();
      }
    } finally {
      this._refreshing = false;
    }
  }
}
