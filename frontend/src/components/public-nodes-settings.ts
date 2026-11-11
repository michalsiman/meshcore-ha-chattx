import { getLocale, t, tn } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { panelStyles } from '../styles';
import { resetPublicNodes } from '../utils/public-nodes';

interface Status {
  enabled: boolean;
  radius_km: number;
  count: number;
  fetched_at: number | null;
  error: string | null;
  radius_choices: number[];
}

/** Settings card part: repeaters from the public map map.meshcore.io for the route map. */
@customElement('chattx-public-nodes-settings')
export class PublicNodesSettings extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _status: Status | null = null;
  @state() private _busy = false;
  private _loaded = false;
  private _poll?: ReturnType<typeof setTimeout>;

  static styles = [panelStyles, css`
    :host { display: block; width: auto; height: auto; margin-top: 16px; }
    .radius { max-width: 200px; display: block; margin-top: 4px; }
    .state { font-size: 13px; color: var(--secondary-text-color); margin-top: 8px; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 6px; }
    .refresh { margin-top: 8px; }
  `];

  protected updated() {
    if (!this._loaded && this.hass) {
      this._loaded = true;
      void this._load();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._poll);
  }

  private async _load() {
    if (!this.hass) return;
    try {
      this._status = await this.hass.callWS<Status>({ type: 'meshcore_chattx/public_nodes_status' });
    } catch {
      this._status = null;
    }
    // A download started by turning it on runs in the background: look again soon.
    clearTimeout(this._poll);
    if (this._status?.enabled && !this._status.fetched_at && !this._status.error) {
      this._poll = setTimeout(() => void this._load(), 5000);
    }
  }

  private async _configure(change: { enabled?: boolean; radius_km?: number }) {
    if (!this.hass || this._busy) return;
    this._busy = true;
    try {
      this._status = await this.hass.callWS<Status>({ type: 'meshcore_chattx/public_nodes_configure', ...change });
      resetPublicNodes();
    } finally {
      this._busy = false;
    }
    void this._load();
  }

  private async _refresh() {
    if (!this.hass || this._busy) return;
    this._busy = true;
    try {
      this._status = await this.hass.callWS<Status>({ type: 'meshcore_chattx/public_nodes_refresh' });
      resetPublicNodes();
    } finally {
      this._busy = false;
    }
  }

  render() {
    const s = this._status;
    const admin = !!this.hass?.user?.is_admin;
    const updated = s?.fetched_at
      ? new Date(s.fetched_at * 1000).toLocaleString(getLocale(), { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' })
      : '';
    return html`
      <div class="form-group-inline">
        <label class="form-toggle">
          <input type="checkbox" .checked=${!!s?.enabled} ?disabled=${!admin || !s || this._busy}
            @change=${(e: Event) => this._configure({ enabled: (e.target as HTMLInputElement).checked })} />
          <span class="form-toggle-label">${t('Online repeater database (map.meshcore.io)')}</span>
        </label>
      </div>
      <div class="form-description">${t('Places the repeaters of message paths that your radio has never heard, using the public MeshCore map. Home Assistant downloads the map\'s list once a day and keeps the repeaters and room servers near you on your radio settings. Your own contacts come first; repeaters from the map are marked 🌐.')}</div>
      ${s?.enabled ? html`
        <label class="form-label" for="chattx-public-radius" style="margin-top: 10px; display: block;">${t('Distance from your node')}</label>
        <select id="chattx-public-radius" class="form-input radius" ?disabled=${!admin || this._busy}
          @change=${(e: Event) => this._configure({ radius_km: Number((e.target as HTMLSelectElement).value) })}>
          ${s.radius_choices.map((km) => html`<option value=${km} ?selected=${km === s.radius_km}>${km} km</option>`)}
        </select>
        <div class="state">${this._busy || (!s.fetched_at && !s.error)
          ? t('Downloading…')
          : s.fetched_at
            ? html`${tn('{n} repeater', '{n} repeaters', s.count)} · ${t('updated {when}', { when: updated })}`
            : nothing}</div>
        ${s.error ? html`<div class="error">${t('Update failed: {error}', { error: s.error })}</div>` : nothing}
        ${admin ? html`<button class="dialog-button refresh" ?disabled=${this._busy} @click=${() => this._refresh()}>${t('Update now')}</button>` : nothing}
      ` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-public-nodes-settings': PublicNodesSettings;
  }
}
