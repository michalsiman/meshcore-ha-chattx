import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getRememberedRepeaterSettings, readRepeaterSetting } from '../api';
import { isCzech } from '../utils/language';
import './read-age-note';

interface SettingField {
  /** Read-only CLI command that returns this field's value. */
  command: string;
  label: string;
  unit?: string;
  /** Labels when one comma-separated reply fills several fields. */
  parts?: Array<{ label: string; unit?: string; decimals?: number }>;
}

interface SettingGroup {
  title: string;
  fields: SettingField[];
}

// Same grouping as the MeshCore clients' repeater settings screen.
export const REPEATER_SETTING_GROUPS: SettingGroup[] = [
  {
    title: 'Basic',
    fields: [
      { command: 'get name', label: 'Name' },
      { command: 'get role', label: 'Role' },
      { command: 'ver', label: 'Firmware' },
      { command: 'board', label: 'Board' },
    ],
  },
  {
    title: 'Radio',
    fields: [
      {
        command: 'get radio',
        label: 'Radio',
        parts: [
          { label: 'Frequency', unit: 'MHz', decimals: 3 },
          { label: 'Bandwidth', unit: 'kHz' },
          { label: 'Spreading factor' },
          { label: 'Coding rate' },
        ],
      },
      { command: 'get tx', label: 'TX power', unit: 'dBm' },
      { command: 'get radio.rxgain', label: 'RX boosted gain' },
    ],
  },
  {
    title: 'Location',
    fields: [
      { command: 'get lat', label: 'Latitude' },
      { command: 'get lon', label: 'Longitude' },
    ],
  },
  {
    title: 'Features',
    fields: [
      { command: 'get repeat', label: 'Packet forwarding' },
      { command: 'get allow.read.only', label: 'Guest read-only access' },
      { command: 'get multi.acks', label: 'Multi-ACKs' },
    ],
  },
  {
    title: 'Network health',
    fields: [
      { command: 'get loop.detect', label: 'Loop detection' },
      { command: 'get dutycycle', label: 'Duty cycle' },
      { command: 'get rxdelay', label: 'Receive delay' },
    ],
  },
  {
    title: 'Advertisement',
    fields: [
      { command: 'get advert.interval', label: 'Local advert interval', unit: 'min' },
      { command: 'get flood.advert.interval', label: 'Flood advert interval', unit: 'h' },
      { command: 'get flood.max', label: 'Flood max hops' },
      { command: 'get flood.max.advert', label: 'Flood max hops, adverts' },
      { command: 'get flood.max.unscoped', label: 'Flood max hops, unscoped' },
    ],
  },
  {
    title: 'Operator info',
    fields: [{ command: 'get owner.info', label: 'Operator info' }],
  },
  {
    title: 'Advanced',
    fields: [
      { command: 'get path.hash.mode', label: 'Node ID size in paths' },
      { command: 'get txdelay', label: 'Flood TX delay' },
      { command: 'get direct.txdelay', label: 'Direct TX delay' },
      { command: 'get int.thresh', label: 'Interference threshold' },
      { command: 'get cad', label: 'Channel activity detection' },
      { command: 'get agc.reset.interval', label: 'AGC reset interval' },
      { command: 'get adc.multiplier', label: 'Battery voltage calibration' },
    ],
  },
];

type FieldState =
  | { kind: 'value'; value: string; readAt: string }
  | { kind: 'loading' }
  | { kind: 'unsupported'; message: string; readAt: string }
  | { kind: 'no_response' };

/** Stop loading a group after this many unanswered commands in a row. */
const MAX_CONSECUTIVE_NO_RESPONSE = 2;

/** Read-only repeater settings, loaded one group at a time over the mesh. */
@customElement('chattx-repeater-settings')
export class RepeaterSettings extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) prefix = '';
  @property({ type: String }) entryId?: string;
  /** False until logged in as administrator; the CLI only answers admins. */
  @property({ type: Boolean }) canLoad = false;

  @state() private _fields: Record<string, FieldState> = {};
  @state() private _loading = false;
  @state() private _error = '';
  @state() private _waitSeconds = 0;

  static styles = css`
    .hint { margin-bottom: 12px; font-size: 13px; color: var(--secondary-text-color); }
    .error { margin-bottom: 12px; font-size: 13px; color: var(--error-color, #db4437); }
    section { margin-bottom: 16px; }
    .group-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at { display: block; margin: -4px 0 8px; font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    h4 { margin: 0; font-size: 14px; font-weight: 600; color: var(--primary-text-color); }
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
    input.problem { color: var(--secondary-text-color); font-style: italic; }
    button {
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
      this._fields = {};
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
    if (prefix !== this.prefix) return;
    const fields: Record<string, FieldState> = {};
    for (const [command, answer] of Object.entries(remembered)) {
      if (answer.sensors || answer.neighbours) continue; // shown by their own blocks
      fields[command] = answer.unsupported !== undefined
        ? { kind: 'unsupported', message: answer.unsupported, readAt: answer.read_at }
        : { kind: 'value', value: answer.value ?? '', readAt: answer.read_at };
    }
    // Anything already being loaded is newer than what HA remembers.
    this._fields = { ...fields, ...this._fields };
  }

  private _isLoaded(field: SettingField): boolean {
    const kind = this._fields[field.command]?.kind;
    return kind === 'value' || kind === 'unsupported';
  }

  /** When the group's oldest value was read, or null if none has been. */
  private _groupReadAt(group: SettingGroup): string | null {
    const times = group.fields.flatMap((field) => {
      const state = this._fields[field.command];
      return state && 'readAt' in state ? [state.readAt] : [];
    });
    if (times.length === 0) return null;
    return times.reduce((oldest, time) => (Date.parse(time) < Date.parse(oldest) ? time : oldest));
  }

  private _setField(command: string, value: FieldState) {
    this._fields = { ...this._fields, [command]: value };
  }

  /**
   * Load a group field by field: a partly loaded group fills its gaps, a fully
   * loaded one refreshes. Waits out the mesh traffic budget instead of failing.
   */
  private async _loadGroup(group: SettingGroup) {
    if (!this.hass || this._loading) return;
    const hass = this.hass;
    const prefix = this.prefix;
    const isCurrent = () => this.isConnected && prefix === this.prefix;
    const pending = group.fields.every((f) => this._isLoaded(f))
      ? group.fields
      : group.fields.filter((f) => !this._isLoaded(f));

    this._loading = true;
    this._error = '';
    let unanswered = 0;
    try {
      for (const field of pending) {
        const previous = this._fields[field.command];
        this._setField(field.command, { kind: 'loading' });
        const read = () => readRepeaterSetting(hass, prefix, field.command, this.entryId);
        let result = await read();
        while (result.reason === 'rate_limited' && isCurrent()) {
          await this._waitOut(result.retry_after ?? 1);
          if (!isCurrent()) return;
          result = await read();
        }
        if (!isCurrent()) return;
        if (result.success) {
          unanswered = 0;
          this._setField(field.command, { kind: 'value', value: result.value ?? '', readAt: new Date().toISOString() });
        } else if (result.reason === 'unsupported') {
          unanswered = 0;
          this._setField(field.command, { kind: 'unsupported', message: result.message ?? '', readAt: new Date().toISOString() });
        } else if (result.reason === 'no_response') {
          // A failed reload keeps the old value, and with it its old time.
          this._setField(field.command, previous && 'readAt' in previous ? previous : { kind: 'no_response' });
          unanswered += 1;
          if (unanswered >= MAX_CONSECUTIVE_NO_RESPONSE) {
            this._error = 'The repeater stopped answering. It may be out of reach, or it may no longer accept this login. In that case, log in again.';
            return;
          }
        } else {
          const fields = { ...this._fields };
          if (previous) fields[field.command] = previous;
          else delete fields[field.command];
          this._fields = fields;
          this._error = result.message ?? 'Reading the setting failed.';
          return;
        }
      }
    } finally {
      if (prefix === this.prefix) this._loading = false;
    }
  }

  private async _waitOut(seconds: number) {
    for (let left = seconds; left > 0 && this.isConnected; left--) {
      this._waitSeconds = left;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    this._waitSeconds = 0;
  }

  private _renderInput(label: string, unit: string | undefined, state: FieldState | undefined, partIndex?: number, decimals?: number) {
    let value = '';
    let problem = false;
    if (state?.kind === 'loading') {
      value = '…';
    } else if (state?.kind === 'no_response') {
      value = 'No response';
      problem = true;
    } else if (state?.kind === 'unsupported') {
      value = 'Not supported';
      problem = true;
    } else if (state?.kind === 'value') {
      value = partIndex === undefined ? state.value : state.value.split(',')[partIndex]?.trim() ?? '';
      const number = Number(value);
      if (decimals !== undefined && value !== '' && Number.isFinite(number)) value = number.toFixed(decimals);
    }
    return html`
      <label>
        ${label}${unit ? ` (${unit})` : ''}
        <input class=${problem ? 'problem' : ''} readonly .value=${value} title=${state?.kind === 'unsupported' ? state.message : value} />
      </label>
    `;
  }

  private _renderField(field: SettingField) {
    const state = this._fields[field.command];
    if (field.parts) {
      return field.parts.map((part, index) => this._renderInput(part.label, part.unit, state, index, part.decimals));
    }
    return this._renderInput(field.label, field.unit, state);
  }

  render() {
    const cs = isCzech();
    const disabled = !this.canLoad || this._loading;
    return html`
      ${this.canLoad ? '' : html`<div class="hint">Log in as administrator to load values.</div>`}
      ${this._waitSeconds
        ? html`<div class="hint" role="status">${cs
            ? `Limit provozu sítě, pokračuji za ${this._waitSeconds} s.`
            : `Mesh traffic limit, continuing in ${this._waitSeconds} s.`}</div>`
        : ''}
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : ''}
      ${REPEATER_SETTING_GROUPS.map((group) => {
        const readAt = this._groupReadAt(group);
        const loaded = group.fields.every((field) => this._isLoaded(field));
        return html`
        <section>
          <div class="group-header">
            <h4>${group.title}</h4>
            <button ?disabled=${disabled} @click=${() => this._loadGroup(group)}>
              ${loaded ? (cs ? 'Přenačíst' : 'Reload') : (cs ? 'Načíst' : 'Load')}
            </button>
          </div>
          ${readAt
            ? html`<chattx-read-age-note .readAt=${readAt}></chattx-read-age-note>`
            : ''}
          <div class="fields">${group.fields.map((field) => this._renderField(field))}</div>
        </section>
      `;
      })}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-settings': RepeaterSettings;
  }
}
