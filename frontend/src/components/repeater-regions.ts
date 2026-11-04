import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import type { HomeAssistant } from '../types';
import { getRememberedRepeaterSettings, readRepeaterSetting, sendRepeaterCommand } from '../api';
import { isCzech } from '../utils/language';
import './read-age-note';

export interface RegionRow {
  name: string;
  depth: number;
  home: boolean;
  flood: boolean;
}

/** Firmware cuts the region tree at this many bytes of reply. */
const MAX_REPLY_BYTES = 160;

/** Whether a reply filled the whole reply buffer, so it may have been cut. */
export function isRegionTreeCut(reply: string): boolean {
  return new TextEncoder().encode(reply).length >= MAX_REPLY_BYTES - 1;
}

/** Parse `region` output: one region per line, indented, `^` = home, ` F` = flood. */
export function parseRegionTree(reply: string): RegionRow[] {
  const lines = reply.split('\n').filter((line) => line.trim());
  if (isRegionTreeCut(reply)) lines.pop(); // the last line may be cut in half
  return lines.map((line) => {
    const depth = line.length - line.trimStart().length;
    const [rawName, flag] = line.trim().split(/\s+/);
    const home = rawName.endsWith('^');
    return { name: home ? rawName.slice(0, -1) : rawName, depth, home, flood: flag === 'F' };
  });
}

/** Firmware confirms region changes with OK or a "... is now ..." sentence. */
export function isRegionReplyOk(reply: string): boolean {
  const text = reply.trim().toLowerCase();
  return text.startsWith('ok') || text.includes(' is now ');
}

interface PendingConfirm {
  text: string;
  command: string;
  saves?: boolean;
}

/** Read and edit a repeater's regions. Changes last until reboot unless saved. */
@customElement('chattx-repeater-regions')
export class RepeaterRegions extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) prefix = '';
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) canEdit = false;

  @state() private _rows: RegionRow[] | null = null;
  @state() private _cut = false;
  @state() private _defaultScope: string | null = null;
  @state() private _readAt: string | null = null;
  @state() private _busy = false;
  @state() private _dirty = false;
  @state() private _error = '';
  @state() private _notice = '';
  @state() private _confirm: PendingConfirm | null = null;
  @state() private _newName = '';
  @state() private _newParent = '*';

  static styles = css`
    .header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at, .hint { font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    .error { margin-bottom: 8px; font-size: 13px; color: var(--error-color, #db4437); }
    .notice { margin-bottom: 8px; font-size: 13px; color: var(--success-color, #43a047); }
    .warning {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
      padding: 8px;
      border-radius: 4px;
      background: var(--warning-color, #ff9800);
      color: #000;
      font-size: 13px;
    }
    .confirm { margin-bottom: 8px; padding: 8px; border: 1px solid var(--error-color, #db4437); border-radius: 4px; font-size: 13px; color: var(--primary-text-color); }
    .confirm-actions { display: flex; gap: 8px; margin-top: 8px; }
    .row { display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 1px solid var(--divider-color, #e0e0e0); font-size: 13px; color: var(--primary-text-color); }
    .name { flex: 1; min-width: 0; overflow-wrap: anywhere; }
    .flood { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--secondary-text-color); }
    .add { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
    .scope { display: flex; align-items: center; gap: 8px; margin-top: 8px; font-size: 13px; color: var(--secondary-text-color); }
    input[type='text'], select {
      min-width: 0;
      flex: 1;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
    }
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
    button.load { margin-left: auto; }
    button.quiet { padding: 4px 8px; background: none; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #e0e0e0); }
    button.home-on { color: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); }
    button.danger { background: var(--error-color, #db4437); }
    button.save { background: #000; color: #fff; }
  `;

  protected willUpdate(changed: Map<string, unknown>) {
    if (changed.has('prefix')) {
      this._rows = null;
      this._readAt = null;
      this._defaultScope = null;
      this._dirty = false;
      this._error = '';
      this._notice = '';
      this._confirm = null;
    }
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('prefix') && this.prefix) void this._loadRemembered();
  }

  private async _loadRemembered() {
    if (!this.hass) return;
    const prefix = this.prefix;
    const remembered = await getRememberedRepeaterSettings(this.hass, prefix, this.entryId);
    const tree = remembered.region;
    if (prefix !== this.prefix || tree?.value === undefined || this._busy || this._rows) return;
    this._applyTree(tree.value);
    this._readAt = tree.read_at;
    const scope = remembered['region default']?.value;
    if (scope !== undefined) this._defaultScope = parseDefaultScope(scope);
  }

  private _applyTree(reply: string) {
    this._rows = parseRegionTree(reply);
    this._cut = isRegionTreeCut(reply);
  }

  /** Read the tree and the default scope; false if it couldn't be read. */
  private async _readRegions(): Promise<boolean> {
    if (!this.hass) return false;
    const prefix = this.prefix;
    const tree = await readRepeaterSetting(this.hass, prefix, 'region', this.entryId);
    if (prefix !== this.prefix || !this.isConnected) return false;
    if (!tree.success) {
      this._error = this._failure(tree.reason, tree.retry_after, tree.message);
      return false;
    }
    this._applyTree(tree.value ?? '');
    this._readAt = new Date().toISOString();
    const scope = await readRepeaterSetting(this.hass, prefix, 'region default', this.entryId);
    if (scope.success && prefix === this.prefix) this._defaultScope = parseDefaultScope(scope.value ?? '');
    return true;
  }

  private _failure(reason: string | undefined, retryAfter: number | undefined, message: string | undefined): string {
    const cs = isCzech();
    if (reason === 'rate_limited') {
      return cs ? `Limit provozu sítě, zkus to za ${retryAfter} s.` : `Mesh traffic limit, try again in ${retryAfter} s.`;
    }
    if (reason === 'no_response') {
      return cs
        ? 'Repeater neodpověděl. Změna se mohla provést, načti regiony znovu.'
        : 'The repeater did not answer. A change may still have applied, so load the regions again.';
    }
    return message ?? (cs ? 'Požadavek selhal.' : 'The request failed.');
  }

  private async _load() {
    if (this._busy) return;
    this._busy = true;
    this._error = '';
    this._notice = '';
    try {
      await this._readRegions();
    } finally {
      this._busy = false;
    }
  }

  /** Send one change, then read the tree back to show what really happened. */
  private async _run(command: string, options: { saves?: boolean } = {}) {
    if (!this.hass || this._busy) return;
    this._busy = true;
    this._error = '';
    this._notice = '';
    this._confirm = null;
    try {
      const result = await sendRepeaterCommand(this.hass, this.prefix, command, this.entryId);
      if (!this.isConnected) return;
      if (!result.success) {
        this._error = this._failure(result.reason, result.retry_after, result.message);
        if (result.reason === 'no_response') this._dirty = true;
        return;
      }
      if (!isRegionReplyOk(result.reply ?? '')) {
        this._error = result.reply ?? '';
        return;
      }
      this._dirty = !options.saves;
      if (options.saves) this._notice = isCzech() ? 'Uloženo do repeateru.' : 'Saved to the repeater.';
      await this._readRegions();
    } finally {
      this._busy = false;
    }
  }

  private _toggleFlood(row: RegionRow) {
    const cs = isCzech();
    const command = `region ${row.flood ? 'denyf' : 'allowf'} ${row.name}`;
    if (row.flood && row.name === '*') {
      this._confirm = {
        command,
        text: cs
          ? 'Repeater začne zahazovat všechny flood pakety bez regionu, tedy i běžný provoz v síti. Opravdu?'
          : 'The repeater will drop all flood packets without a region, including ordinary traffic. Are you sure?',
      };
      return;
    }
    void this._run(command);
  }

  private _askRemove(row: RegionRow) {
    const cs = isCzech();
    this._confirm = {
      command: `region remove ${row.name}`,
      text: cs ? `Odebrat region ${row.name}?` : `Remove region ${row.name}?`,
    };
  }

  private _setDefault(scope: string) {
    const cs = isCzech();
    this._confirm = {
      command: `region default ${scope}`,
      saves: true,
      text: cs
        ? 'Změna výchozího regionu se ihned uloží do repeateru, a s ní všechny dosud neuložené změny regionů. Pokračovat?'
        : 'Changing the default scope saves to the repeater right away, along with any unsaved region changes. Continue?',
    };
  }

  private _add(e: Event) {
    e.preventDefault();
    const cs = isCzech();
    const name = this._newName.trim();
    if (!name) return;
    if (/\s/.test(name)) {
      this._error = cs ? 'Název regionu nesmí obsahovat mezery.' : 'A region name cannot contain spaces.';
      return;
    }
    // On an existing name, firmware would move that region and allow flood on it.
    const bare = name.replace(/^#/, '');
    if (this._rows?.some((row) => row.name.replace(/^#/, '') === bare)) {
      this._error = cs ? `Region ${name} už existuje.` : `Region ${name} already exists.`;
      return;
    }
    this._newName = '';
    void this._run(this._newParent === '*' ? `region put ${name}` : `region put ${name} ${this._newParent}`);
  }

  private _renderRows(cs: boolean) {
    const disabled = !this.canEdit || this._busy;
    return this._rows!.map((row) => html`
      <div class="row" style="padding-left: ${row.depth * 16}px">
        <span class="name">${row.name}</span>
        <label class="flood">
          <input type="checkbox" .checked=${row.flood} ?disabled=${disabled} @click=${(e: Event) => { e.preventDefault(); this._toggleFlood(row); }} />
          Flood
        </label>
        <button class=${row.home ? 'quiet home-on' : 'quiet'} ?disabled=${disabled || row.home}
          title=${cs ? 'Domovský region' : 'Home region'} @click=${() => this._run(`region home ${row.name}`)}>${cs ? 'Domov' : 'Home'}</button>
        ${row.name === '*' ? '' : html`
          <button class="quiet" ?disabled=${disabled} aria-label=${cs ? `Odebrat ${row.name}` : `Remove ${row.name}`} @click=${() => this._askRemove(row)}>✕</button>
        `}
      </div>
    `);
  }

  render() {
    const cs = isCzech();
    const disabled = !this.canEdit || this._busy;
    return html`
      ${this._dirty ? html`
        <div class="warning" role="status">
          <span>${cs ? 'Změny nejsou uložené. Po restartu repeateru se ztratí.' : 'Changes are not saved. They will be lost when the repeater restarts.'}</span>
          <button class="save" ?disabled=${disabled} @click=${() => this._run('region save', { saves: true })}>${cs ? 'Uložit' : 'Save'}</button>
        </div>
      ` : ''}
      ${this._confirm ? html`
        <div class="confirm" role="alertdialog">
          ${this._confirm.text}
          <div class="confirm-actions">
            <button class="danger" @click=${() => { const c = this._confirm!; void this._run(c.command, { saves: c.saves }); }}>${cs ? 'Ano' : 'Yes'}</button>
            <button class="quiet" @click=${() => { this._confirm = null; }}>${cs ? 'Zrušit' : 'Cancel'}</button>
          </div>
        </div>
      ` : ''}
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : ''}
      ${this._notice ? html`<div class="notice" role="status">${this._notice}</div>` : ''}
      <div class="header">
        ${this._readAt
          ? html`<chattx-read-age-note .readAt=${this._readAt}></chattx-read-age-note>`
          : ''}
        <button class="load" ?disabled=${disabled} @click=${this._load}>
          ${this._busy
            ? (cs ? 'Pracuji…' : 'Working…')
            : this._rows ? (cs ? 'Přenačíst' : 'Reload') : (cs ? 'Načíst' : 'Load')}
        </button>
      </div>
      ${this._rows === null
        ? html`<div class="hint">${cs ? 'Zatím nenačteno.' : 'Not loaded yet.'}</div>`
        : html`
          ${this._cut ? html`<div class="error">${cs
            ? 'Seznam se nevešel do jedné odpovědi repeateru (160 bajtů), takže část regionů tu chybí. Úplný seznam je dostupný jen přes sériový port.'
            : 'The list did not fit in one repeater reply (160 bytes), so some regions are missing here. The full list is only available over the serial port.'}</div>` : ''}
          ${this._renderRows(cs)}
          <div class="scope">
            ${cs ? 'Výchozí region' : 'Default scope'}
            <select .value=${live(this._defaultScope ?? '<null>')} ?disabled=${disabled} @change=${(e: Event) => this._setDefault((e.target as HTMLSelectElement).value)}>
              <option value="<null>" ?selected=${this._defaultScope === null}>${cs ? 'žádný' : 'none'}</option>
              ${this._rows.filter((row) => row.name !== '*').map((row) => html`
                <option value=${row.name} ?selected=${this._defaultScope === row.name}>${row.name}</option>
              `)}
            </select>
          </div>
          <form class="add" @submit=${this._add}>
            <input type="text" aria-label=${cs ? 'Název nového regionu' : 'New region name'} placeholder=${cs ? 'Nový region' : 'New region'}
              autocapitalize="off" spellcheck="false" ?disabled=${disabled} .value=${this._newName}
              @input=${(e: Event) => { this._newName = (e.target as HTMLInputElement).value; }} />
            <select aria-label=${cs ? 'Nadřazený region' : 'Parent region'} ?disabled=${disabled}
              @change=${(e: Event) => { this._newParent = (e.target as HTMLSelectElement).value; }}>
              ${this._rows.map((row) => html`<option value=${row.name} ?selected=${this._newParent === row.name}>${row.name}</option>`)}
            </select>
            <button type="submit" ?disabled=${disabled || !this._newName.trim()}>${cs ? 'Přidat' : 'Add'}</button>
          </form>
        `}
    `;
  }
}

function parseDefaultScope(reply: string): string | null {
  const name = reply.trim().split(/\s+/).pop() ?? '';
  return !name || name === '<null>' ? null : name;
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-regions': RepeaterRegions;
  }
}
