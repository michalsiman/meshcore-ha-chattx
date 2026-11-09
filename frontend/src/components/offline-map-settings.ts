import { N_, t } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { panelStyles } from '../styles';
import { offlineOnly, resetOfflineMap, setOfflineOnly } from '../utils/offline-map';

interface Status {
  countries: Record<string, { name: string; built?: string }>;
  downloaded_at?: string | null;
  places: number;
  peaks: number;
}

/** Country names of offline_maps/index.json, for translation. */
export const COUNTRY_NAMES = [
  N_('Austria'), N_('Switzerland'), N_('Czechia'), N_('Germany'), N_('Croatia'),
  N_('Hungary'), N_('Poland'), N_('Slovenia'), N_('Slovakia'),
];

/** Countries offered first: the Czech Republic and its neighbours. */
const DEFAULT_COUNTRIES = ['CZ', 'SK', 'PL', 'DE', 'AT'];

/** Settings card body: the simplified offline map. */
@customElement('chattx-offline-map-settings')
export class OfflineMapSettings extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _status: Status | null = null;
  @state() private _index: Record<string, { name: string; size: number }> | null = null;
  @state() private _indexFailed = false;
  @state() private _selected = new Set<string>();
  @state() private _busy = false;
  @state() private _error = '';
  @state() private _offlineOnly = offlineOnly();
  private _loaded = false;

  static styles = [panelStyles, css`
    :host { display: block; }
    .countries { display: flex; flex-wrap: wrap; gap: 4px 14px; margin: 8px 0; }
    .countries label { display: flex; align-items: center; gap: 4px; font-size: 13px; color: var(--primary-text-color); cursor: pointer; }
    .size { color: var(--secondary-text-color); font-size: 11px; }
    .actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
    button {
      padding: 6px 14px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    button.quiet { background: none; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #e0e0e0); }
    button:disabled { opacity: 0.5; cursor: default; }
    .status { font-size: 13px; color: var(--primary-text-color); margin-top: 10px; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 6px; }
  `];

  protected updated() {
    if (this.hass && !this._loaded) {
      this._loaded = true;
      void this._load();
    }
  }

  private async _load() {
    const hass = this.hass!;
    try {
      this._status = await hass.callWS<Status>({ type: 'meshcore_chattx/offline_map_status' });
    } catch {
      this._status = null;
    }
    const installed = Object.keys(this._status?.countries ?? {});
    if (!hass.user?.is_admin) return;
    const index = await hass
      .callWS<{ success: boolean; countries: Record<string, { name: string; size: number }> }>({ type: 'meshcore_chattx/offline_map_index' })
      .catch(() => ({ success: false, countries: {} }));
    this._indexFailed = !index.success;
    this._index = index.countries;
    const offered = Object.keys(index.countries);
    this._selected = new Set(installed.length ? installed : DEFAULT_COUNTRIES.filter((c) => offered.includes(c)));
  }

  private _toggleCountry(code: string, on: boolean) {
    const next = new Set(this._selected);
    if (on) next.add(code);
    else next.delete(code);
    this._selected = next;
  }

  private async _download(countries: string[]) {
    if (!this.hass || this._busy) return;
    this._busy = true;
    this._error = '';
    try {
      const result = await this.hass.callWS<Status & { success: boolean; message?: string }>({
        type: 'meshcore_chattx/offline_map_download',
        countries,
      });
      if (result.success) {
        this._status = result;
        resetOfflineMap();
      } else {
        this._error = t('Downloading the offline map failed: {message}', { message: result.message ?? '' });
      }
    } catch (error) {
      this._error = t('Downloading the offline map failed: {message}', { message: (error as Error).message ?? String(error) });
    } finally {
      this._busy = false;
    }
  }

  private _onOfflineOnly(e: Event) {
    this._offlineOnly = (e.target as HTMLInputElement).checked;
    setOfflineOnly(this._offlineOnly);
  }

  private _renderStatus() {
    const s = this._status;
    const names = Object.values(s?.countries ?? {}).map((c) => t(c.name));
    if (!s || names.length === 0) {
      return html`<div class="status">${t('No offline map downloaded yet.')}</div>`;
    }
    const date = s.downloaded_at ? new Date(s.downloaded_at).toLocaleDateString() : '';
    return html`<div class="status">
      ${t('Downloaded: {countries}', { countries: names.join(', ') })}${date ? ` (${date})` : ''}
      · ${t('{places} places, {peaks} peaks', { places: s.places, peaks: s.peaks })}
    </div>`;
  }

  render() {
    const admin = !!this.hass?.user?.is_admin;
    const installed = Object.keys(this._status?.countries ?? {});
    const index = this._index ?? {};
    const totalKb = [...this._selected].reduce((sum, c) => sum + (index[c]?.size ?? 0), 0) / 1024;
    return html`
      <div class="form-description">${t('When the online map can\'t be loaded, for example without internet, the route map and the nodes map show a simplified map instead: borders of countries and regions, towns and peaks. It is downloaded once and kept in Home Assistant.')}</div>
      <div class="section-row" style="margin-top: 10px">
        <label class="form-toggle">
          <input type="checkbox" .checked=${this._offlineOnly} @change=${this._onOfflineOnly} />
          <span class="form-toggle-label">${t('Always use the simplified map, even with internet')}</span>
        </label>
      </div>
      ${this._renderStatus()}
      ${admin
        ? this._indexFailed
          ? html`<div class="error">${t('The list of countries could not be loaded. Downloading needs internet.')}</div>`
          : this._index
            ? html`
                <div class="countries">
                  ${Object.entries(index)
                    .sort((a, b) => t(a[1].name).localeCompare(t(b[1].name)))
                    .map(([code, c]) => html`<label>
                      <input type="checkbox" .checked=${this._selected.has(code)} ?disabled=${this._busy}
                        @change=${(e: Event) => this._toggleCountry(code, (e.target as HTMLInputElement).checked)} />
                      ${t(c.name)} <span class="size">${Math.max(1, Math.round(c.size / 1024))} kB</span>
                    </label>`)}
                </div>
                <div class="actions">
                  <button ?disabled=${this._busy || this._selected.size === 0} @click=${() => this._download([...this._selected])}>
                    ${this._busy ? t('Downloading…') : installed.length ? t('Download again') : t('Download')}
                  </button>
                  ${installed.length
                    ? html`<button class="quiet" ?disabled=${this._busy} @click=${() => this._download([])}>${t('Remove')}</button>`
                    : nothing}
                  <span class="size">${t('about {size} kB', { size: Math.round(totalKb) })}</span>
                </div>`
            : html`<div class="status">${t('Loading...')}</div>`
        : nothing}
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : nothing}
      <div class="form-description" style="margin-top: 8px">${t('Map data: geoBoundaries (CC BY 4.0) and GeoNames (CC BY 4.0).')}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-offline-map-settings': OfflineMapSettings;
  }
}
