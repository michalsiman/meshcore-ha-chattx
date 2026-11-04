import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getRememberedRepeaterSettings, readRepeaterTelemetry, type TelemetrySensor } from '../api';
import { isCzech } from '../utils/language';
import './read-age-note';

// Units of the Cayenne LPP types, as the core meshcore integration shows them.
const UNITS: Record<string, string> = {
  'analog input': 'V',
  'analog output': 'V',
  illuminance: 'lx',
  temperature: '°C',
  humidity: '%',
  accelerometer: 'G',
  barometer: 'hPa',
  voltage: 'V',
  current: 'A',
  frequency: 'Hz',
  percentage: '%',
  altitude: 'm',
  load: 'kg',
  concentration: 'ppm',
  power: 'W',
  distance: 'm',
  energy: 'kWh',
  direction: '°',
  gyrometer: '°/s',
};

/** Firmware reports the node's battery voltage and MCU temperature on this channel. */
const SELF_CHANNEL = 1;
const SELF_NAMES: Record<string, string> = {
  voltage: 'Battery voltage',
  temperature: 'MCU temperature',
};

const PLACEHOLDERS = ['Battery voltage (V)', 'MCU temperature (°C)'];

function title(type: string): string {
  return type.charAt(0).toUpperCase() + type.slice(1).replace(/_/g, ' ');
}

export function telemetryLabel(sensor: TelemetrySensor): string {
  const unit = UNITS[sensor.type];
  const name = sensor.channel === SELF_CHANNEL
    ? SELF_NAMES[sensor.type] ?? title(sensor.type)
    : `${title(sensor.type)}, channel ${sensor.channel}`;
  return unit ? `${name} (${unit})` : name;
}

function formatNumber(value: unknown): string {
  return typeof value === 'number' ? String(Number(value.toFixed(3))) : String(value);
}

export function telemetryValue(sensor: TelemetrySensor): string {
  const { value } = sensor;
  if (Array.isArray(value)) return value.map(formatNumber).join(', ');
  if (value !== null && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, part]) => `${key}: ${formatNumber(part)}`)
      .join(', ');
  }
  return formatNumber(value);
}

/** Sensors a repeater reports; which ones exist is known only after reading. */
@customElement('chattx-repeater-telemetry')
export class RepeaterTelemetry extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) prefix = '';
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) canLoad = false;

  @state() private _sensors: TelemetrySensor[] | null = null;
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
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 12px; }
    label { display: block; min-width: 0; font-size: 12px; color: var(--secondary-text-color); }
    input {
      box-sizing: border-box;
      width: 100%;
      margin-top: 2px;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--secondary-background-color, #f5f5f5);
      color: var(--primary-text-color);
      font-size: 13px;
    }
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
    @media (max-width: 420px) { .fields { grid-template-columns: 1fr; } }
  `;

  protected willUpdate(changed: Map<string, unknown>) {
    if (changed.has('prefix')) {
      this._sensors = null;
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
    const remembered = await getRememberedRepeaterSettings(this.hass, prefix, this.entryId);
    const telemetry = remembered.telemetry;
    if (prefix !== this.prefix || !telemetry?.sensors || this._loading || this._sensors) return;
    this._sensors = telemetry.sensors;
    this._readAt = telemetry.read_at;
  }

  private async _load() {
    if (!this.hass || this._loading) return;
    const hass = this.hass;
    const prefix = this.prefix;
    const isCurrent = () => this.isConnected && prefix === this.prefix;
    this._loading = true;
    this._error = '';
    try {
      let result = await readRepeaterTelemetry(hass, prefix, this.entryId);
      while (result.reason === 'rate_limited' && isCurrent()) {
        for (let left = result.retry_after ?? 1; left > 0 && this.isConnected; left--) {
          this._waitSeconds = left;
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        this._waitSeconds = 0;
        if (!isCurrent()) return;
        result = await readRepeaterTelemetry(hass, prefix, this.entryId);
      }
      if (!isCurrent()) return;
      if (result.success) {
        this._sensors = result.sensors ?? [];
        this._readAt = new Date().toISOString();
      } else if (result.reason === 'no_response') {
        this._error = 'The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.';
      } else {
        this._error = result.message ?? 'Reading telemetry failed.';
      }
    } finally {
      if (prefix === this.prefix) this._loading = false;
    }
  }

  private _field(label: string, value: string) {
    return html`<label>${label}<input readonly .value=${value} title=${value} /></label>`;
  }

  render() {
    const cs = isCzech();
    const loaded = this._sensors !== null;
    return html`
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : ''}
      <div class="header">
        ${this._waitSeconds
          ? html`<span class="hint" role="status">${cs ? `Limit provozu sítě, pokračuji za ${this._waitSeconds} s.` : `Mesh traffic limit, continuing in ${this._waitSeconds} s.`}</span>`
          : this._readAt
            ? html`<chattx-read-age-note .readAt=${this._readAt}></chattx-read-age-note>`
            : ''}
        <button ?disabled=${!this.canLoad || this._loading} @click=${this._load}>
          ${this._loading
            ? (cs ? 'Načítám…' : 'Loading…')
            : loaded ? (cs ? 'Přenačíst' : 'Reload') : (cs ? 'Načíst' : 'Load')}
        </button>
      </div>
      ${loaded && this._sensors!.length === 0
        ? html`<div class="hint">${cs ? 'Repeater nehlásí žádné senzory.' : 'The repeater reports no sensors.'}</div>`
        : html`<div class="fields">${loaded
          ? [...this._sensors!]
            .sort((a, b) => a.channel - b.channel)
            .map((sensor) => this._field(telemetryLabel(sensor), telemetryValue(sensor)))
          : PLACEHOLDERS.map((label) => this._field(label, ''))}</div>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-telemetry': RepeaterTelemetry;
  }
}
