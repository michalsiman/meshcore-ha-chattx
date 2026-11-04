import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getRememberedRepeaterSettings, readRepeaterNeighbours, type RepeaterNeighbour } from '../api';
import { isCzech } from '../utils/language';
import { readAtClass } from '../utils/read-age';

export function formatHeardAgo(seconds: number, cs: boolean): string {
  if (seconds < 60) return cs ? `před ${seconds} s` : `${seconds} s ago`;
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return cs ? `před ${minutes} min` : `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return cs ? `před ${hours} h` : `${hours} h ago`;
  const days = Math.round(hours / 24);
  return cs ? `před ${days} d` : `${days} d ago`;
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
        this._error = 'The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.';
      } else {
        this._error = result.message ?? 'Reading neighbours failed.';
      }
    } finally {
      if (prefix === this.prefix) this._loading = false;
    }
  }

  private _renderList(cs: boolean) {
    if (this._neighbours === null) {
      return html`<div class="hint">${cs ? 'Zatím nenačteno.' : 'Not loaded yet.'}</div>`;
    }
    if (this._neighbours.length === 0) {
      return html`<div class="hint">${cs ? 'Repeater žádné sousedy nehlásí.' : 'The repeater reports no neighbours.'}</div>`;
    }
    const sinceRead = (n: RepeaterNeighbour) => {
      const readAt = n.read_at ?? this._readAt;
      return readAt ? Math.max(0, (Date.now() - Date.parse(readAt)) / 1000) : 0;
    };
    const sorted = [...this._neighbours].sort((a, b) => b.snr - a.snr);
    return html`
      <table>
        <thead><tr><th>${cs ? 'Uzel' : 'Node'}</th><th class="number">SNR (dB)</th><th class="number">${cs ? 'Slyšen' : 'Heard'}</th></tr></thead>
        <tbody>${sorted.map((n) => html`
          <tr>
            <td title=${n.pubkey}>${n.name}</td>
            <td class="number">${n.snr.toFixed(2)}</td>
            <td class="number">${formatHeardAgo(Math.round(n.secs_ago + sinceRead(n)), cs)}</td>
          </tr>
        `)}</tbody>
      </table>
      ${this._total > this._neighbours.length
        ? html`<div class="more">
            <span class="hint">${cs
              ? `Načteno ${this._neighbours.length} z ${this._total}, nejdřív naposledy slyšení.`
              : `Loaded ${this._neighbours.length} of ${this._total}, most recently heard first.`}</span>
            <button class="next" ?disabled=${!this.canLoad || this._loading} @click=${() => this._load(this._neighbours!.length)}>
              ${cs ? 'Načíst dalších 10' : 'Load 10 more'}
            </button>
          </div>`
        : ''}
    `;
  }

  render() {
    const cs = isCzech();
    return html`
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : ''}
      <div class="header">
        ${this._waitSeconds
          ? html`<span class="hint" role="status">${cs ? `Limit provozu sítě, pokračuji za ${this._waitSeconds} s.` : `Mesh traffic limit, continuing in ${this._waitSeconds} s.`}</span>`
          : this._readAt
            ? html`<span class=${readAtClass(this._readAt)}>${cs ? 'Načteno' : 'Loaded'} ${new Date(this._readAt).toLocaleString()}</span>`
            : ''}
        <button class="reload" ?disabled=${!this.canLoad || this._loading} @click=${() => this._load(0)}>
          ${this._loading
            ? (cs ? 'Načítám…' : 'Loading…')
            : this._neighbours !== null ? (cs ? 'Přenačíst' : 'Reload') : (cs ? 'Načíst' : 'Load')}
        </button>
      </div>
      ${this._renderList(cs)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-neighbours': RepeaterNeighbours;
  }
}
