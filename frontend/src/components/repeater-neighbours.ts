import { t } from '../i18n';
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getRememberedRepeaterSettings, readRepeaterNeighbours, type RepeaterNeighbour } from '../api';
import './read-age-note';

export function formatHeardAgo(seconds: number): string {
  if (seconds < 60) return t('{seconds} s ago', { seconds });
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return t('{minutes} min ago', { minutes });
  const hours = Math.round(minutes / 60);
  if (hours < 48) return t('{hours} h ago', { hours });
  const days = Math.round(hours / 24);
  return t('{days} d ago', { days });
}

/** Nodes a repeater has heard directly, read ten at a time. */
@customElement('chattx-repeater-neighbours')
export class RepeaterNeighbours extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) prefix = '';
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) canLoad = false;

  @state() private _neighbours: RepeaterNeighbour[] | null = null;
  @state() private _total = 0;
  @state() private _readAt: string | null = null;
  @state() private _loading = false;
  @state() private _waitSeconds = 0;
  @state() private _error = '';

  static styles = css`
    .header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at, .hint { font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    .error { margin-bottom: 8px; font-size: 13px; color: var(--error-color, #db4437); }
    .more { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 8px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th { font-size: 12px; font-weight: 500; text-align: left; color: var(--secondary-text-color); }
    th, td { padding: 4px 8px 4px 0; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    td { color: var(--primary-text-color); overflow-wrap: anywhere; }
    .number { white-space: nowrap; text-align: right; }
    button {
      margin-left: auto;
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
  `;

  protected willUpdate(changed: Map<string, unknown>) {
    if (changed.has('prefix')) {
      this._neighbours = null;
      this._readAt = null;
      this._error = '';
    }
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('prefix') && this.prefix) void this._loadRemembered();
  }

  private async _loadRemembered() {
    if (!this.hass) return;
    const prefix = this.prefix;
    const remembered = (await getRememberedRepeaterSettings(this.hass, prefix, this.entryId)).neighbours;
    if (prefix !== this.prefix || !remembered?.neighbours || this._loading || this._neighbours) return;
    this._neighbours = remembered.neighbours;
    this._total = remembered.total ?? remembered.neighbours.length;
    this._readAt = remembered.read_at;
  }

  private async _load(offset: number) {
    if (!this.hass || this._loading) return;
    const hass = this.hass;
    const prefix = this.prefix;
    const isCurrent = () => this.isConnected && prefix === this.prefix;
    this._loading = true;
    this._error = '';
    try {
      let result = await readRepeaterNeighbours(hass, prefix, offset, this.entryId);
      while (result.reason === 'rate_limited' && isCurrent()) {
        for (let left = result.retry_after ?? 1; left > 0 && this.isConnected; left--) {
          this._waitSeconds = left;
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        this._waitSeconds = 0;
        if (!isCurrent()) return;
        result = await readRepeaterNeighbours(hass, prefix, offset, this.entryId);
      }
      if (!isCurrent()) return;
      if (result.success) {
        this._neighbours = result.neighbours ?? [];
        this._total = result.total ?? this._neighbours.length;
        this._readAt = result.read_at ?? new Date().toISOString();
      } else if (result.reason === 'no_response') {
        this._error = t('The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.');
      } else {
        this._error = result.message ?? t('Reading neighbours failed.');
      }
    } finally {
      if (prefix === this.prefix) this._loading = false;
    }
  }

  private _renderList() {
    if (this._neighbours === null) {
      return html`<div class="hint">${t('Not loaded yet.')}</div>`;
    }
    if (this._neighbours.length === 0) {
      return html`<div class="hint">${t('The repeater reports no neighbours.')}</div>`;
    }
    const sinceRead = (n: RepeaterNeighbour) => {
      const readAt = n.read_at ?? this._readAt;
      return readAt ? Math.max(0, (Date.now() - Date.parse(readAt)) / 1000) : 0;
    };
    const sorted = [...this._neighbours].sort((a, b) => b.snr - a.snr);
    return html`
      <table>
        <thead><tr><th>${t('Node')}</th><th class="number">${t('SNR (dB)')}</th><th class="number">${t('Heard')}</th></tr></thead>
        <tbody>${sorted.map((n) => html`
          <tr>
            <td title=${n.pubkey}>${n.name}</td>
            <td class="number">${n.snr.toFixed(2)}</td>
            <td class="number">${formatHeardAgo(Math.round(n.secs_ago + sinceRead(n)))}</td>
          </tr>
        `)}</tbody>
      </table>
      ${this._total > this._neighbours.length
        ? html`<div class="more">
            <span class="hint">${t('Loaded {length} of {total}, most recently heard first.', { length: this._neighbours.length, total: this._total })}</span>
            <button class="next" ?disabled=${!this.canLoad || this._loading} @click=${() => this._load(this._neighbours!.length)}>
              ${t('Load 10 more')}
            </button>
          </div>`
        : ''}
    `;
  }

  render() {
    return html`
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : ''}
      <div class="header">
        ${this._waitSeconds
          ? html`<span class="hint" role="status">${t('Mesh traffic limit, continuing in {waitSeconds} s.', { waitSeconds: this._waitSeconds })}</span>`
          : this._readAt
            ? html`<chattx-read-age-note .readAt=${this._readAt}></chattx-read-age-note>`
            : ''}
        <button class="reload" ?disabled=${!this.canLoad || this._loading} @click=${() => this._load(0)}>
          ${this._loading
            ? (t('Loading…'))
            : this._neighbours !== null ? (t('Reload')) : (t('Load'))}
        </button>
      </div>
      ${this._renderList()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-neighbours': RepeaterNeighbours;
  }
}
