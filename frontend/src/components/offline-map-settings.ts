import { getLanguage, t } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { panelStyles } from '../styles';
import { offlineOnly, resetOfflineMap, setOfflineOnly } from '../utils/offline-map';
import { loadDistanceSetting, saveDistanceSetting, type DistanceSetting } from '../utils/units';

interface Status {
  countries: Record<string, { name: string; built?: string }>;
  world?: boolean;
  downloaded_at?: string | null;
  places: number;
  peaks: number;
}

interface IndexEntry {
  name: string;
  size: number;
  neighbours?: string[];
}

/** A country's name in the panel's language, from the browser; the English name otherwise. */
export function countryName(code: string, english: string): string {
  try {
    return new Intl.DisplayNames([getLanguage()], { type: 'region' }).of(code) ?? english;
  } catch {
    return english;
  }
}

/**
 * The countries to offer when nothing is downloaded yet: Home Assistant's
 * own country and its neighbours, as far as the index has them.
 */
export function suggestedCountries(home: string | null | undefined, index: Record<string, IndexEntry>): string[] {
  const code = (home ?? '').toUpperCase();
  if (!code || !index[code]) return [];
  return [code, ...(index[code].neighbours ?? [])].filter((c) => c in index);
}

/** Settings card body: the simplified offline map. */
@customElement('chattx-offline-map-settings')
export class OfflineMapSettings extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _status: Status | null = null;
  @state() private _index: Record<string, IndexEntry> | null = null;
  @state() private _worldSize = 0;
  @state() private _indexFailed = false;
  @state() private _selected = new Set<string>();
  @state() private _filter = '';
  @state() private _busy = false;
  @state() private _error = '';
  @state() private _offlineOnly = offlineOnly();
  @state() private _distance: DistanceSetting = loadDistanceSetting();
  private _loaded = false;

  static styles = [panelStyles, css`
    /* panelStyles sizes the panel's own host to the screen; a settings card is as tall as its content. */
    :host { display: block; width: auto; height: auto; }
    .search { margin-top: 10px; max-width: 320px; }
    .unit { max-width: 260px; display: block; margin-top: 4px; }
    .countries {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      margin: 8px 0 4px;
      padding: 8px 10px;
      max-height: 240px;
      /* A frame and an always visible scrollbar show that the list scrolls. */
      overflow-y: scroll;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      scrollbar-width: thin;
      scrollbar-color: var(--secondary-text-color, #888) transparent;
    }
    .countries::-webkit-scrollbar { width: 8px; }
    .countries::-webkit-scrollbar-thumb { background: var(--secondary-text-color, #888); border-radius: 4px; }
    .count { font-size: 11px; color: var(--secondary-text-color); }
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
      .callWS<{ success: boolean; countries: Record<string, IndexEntry>; world_size?: number }>({ type: 'meshcore_chattx/offline_map_index' })
      .catch(() => ({ success: false, countries: {} as Record<string, IndexEntry>, world_size: 0 }));
    this._indexFailed = !index.success;
    this._index = index.countries;
    this._worldSize = index.world_size ?? 0;
    this._selected = new Set(installed.length
      ? installed.filter((c) => c in index.countries)
      : suggestedCountries(hass.config?.country, index.countries));
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
    const names = Object.entries(s?.countries ?? {}).map(([code, c]) => countryName(code, c.name));
    if (!s || names.length === 0) {
      return html`<div class="status">${t('No offline map downloaded yet.')}</div>`;
    }
    const date = s.downloaded_at ? new Date(s.downloaded_at).toLocaleDateString() : '';
    return html`<div class="status">
      ${t('Downloaded: {countries}', { countries: names.join(', ') })}${date ? ` (${date})` : ''}
      · ${t('{places} places, {peaks} peaks', { places: s.places, peaks: s.peaks })}
    </div>`;
  }

  private _renderCountries(installed: string[]) {
    const index = this._index ?? {};
    const totalKb = ([...this._selected].reduce((sum, c) => sum + (index[c]?.size ?? 0), 0) + this._worldSize) / 1024;
    const filter = this._filter.trim().toLocaleLowerCase();
    const entries = Object.entries(index)
      .map(([code, c]) => ({ code, name: countryName(code, c.name), size: c.size }))
      .filter((c) => this._selected.has(c.code) || !filter
        || c.name.toLocaleLowerCase().includes(filter) || c.code.toLowerCase() === filter)
      // Chosen countries first, then by name.
      .sort((a, b) => Number(this._selected.has(b.code)) - Number(this._selected.has(a.code))
        || a.name.localeCompare(b.name));
    return html`
      <input class="form-input search" type="search" .value=${this._filter}
        placeholder=${t('Search country')}
        @input=${(e: Event) => { this._filter = (e.target as HTMLInputElement).value; }} />
      <div class="count">${t('{shown} of {total} countries, the list scrolls', { shown: entries.length, total: Object.keys(index).length })}</div>
      <div class="countries">
        ${entries.map((c) => html`<label>
          <input type="checkbox" .checked=${this._selected.has(c.code)} ?disabled=${this._busy}
            @change=${(e: Event) => this._toggleCountry(c.code, (e.target as HTMLInputElement).checked)} />
          ${c.name} <span class="size">${Math.max(1, Math.round(c.size / 1024))} kB</span>
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
      </div>`;
  }

  render() {
    const admin = !!this.hass?.user?.is_admin;
    const installed = Object.keys(this._status?.countries ?? {});
    return html`
      <div class="form-description">${t('When the online map can\'t be loaded, for example without internet, the route map and the nodes map show a simplified map instead: borders of countries and regions, towns and peaks. It is downloaded once and kept in Home Assistant. The borders and capitals of the whole world always come with it; choose the countries to show in detail.')}</div>
      <div class="section-row" style="margin-top: 10px">
        <label class="form-toggle">
          <input type="checkbox" .checked=${this._offlineOnly} @change=${this._onOfflineOnly} />
          <span class="form-toggle-label">${t('Always use the simplified map, even with internet')}</span>
        </label>
      </div>
      <div class="section-row" style="margin-top: 10px">
        <label class="form-label" for="chattx-distance-unit">${t('Distance unit')}</label>
        <select id="chattx-distance-unit" class="form-input unit" .value=${this._distance}
          @change=${(e: Event) => {
            this._distance = (e.target as HTMLSelectElement).value as DistanceSetting;
            saveDistanceSetting(this._distance);
            // Bubbles and dialogs show distances; redraw them.
            window.dispatchEvent(new CustomEvent('chattx-map-mode-changed'));
          }}>
          <option value="auto" ?selected=${this._distance === 'auto'}>${t('Automatic (Home Assistant)')}</option>
          <option value="km" ?selected=${this._distance === 'km'}>${t('Kilometres')}</option>
          <option value="mi" ?selected=${this._distance === 'mi'}>${t('Miles')}</option>
        </select>
      </div>
      ${this._renderStatus()}
      ${admin
        ? this._indexFailed
          ? html`<div class="error">${t('The list of countries could not be loaded. Downloading needs internet.')}</div>`
          : this._index
            ? this._renderCountries(installed)
            : html`<div class="status">${t('Loading...')}</div>`
        : nothing}
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : nothing}
      <div class="form-description" style="margin-top: 8px">${t('Map data: Natural Earth, geoBoundaries (CC BY 4.0) and GeoNames (CC BY 4.0).')}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-offline-map-settings': OfflineMapSettings;
  }
}
