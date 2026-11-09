import { t } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { panelStyles } from '../styles';
import { blocklist, saveBlocklist, type BlockEntry } from '../utils/blocklist';

interface KnownContact {
  key: string;
  name: string;
}

/** Contacts with a public key, from the core integration's contact sensors. */
export function knownContacts(states: HomeAssistant['states']): KnownContact[] {
  const out: KnownContact[] = [];
  for (const [entityId, state] of Object.entries(states)) {
    if (!entityId.startsWith('binary_sensor.meshcore_') || !entityId.endsWith('_contact')) continue;
    const a = state.attributes as Record<string, unknown>;
    if (typeof a.public_key === 'string' && a.public_key && typeof a.adv_name === 'string') {
      out.push({ key: a.public_key.toLowerCase(), name: a.adv_name });
    }
  }
  return out.sort((x, y) => x.name.localeCompare(y.name));
}

/** The key for what was typed: a contact's name, "name (key…)" from the list, or a hex key. */
export function resolveBlockInput(value: string, contacts: KnownContact[]): string | null {
  const text = value.trim();
  if (!text) return null;
  const listed = /\(([0-9a-f]{6,})…?\)$/i.exec(text);
  if (listed) {
    const prefix = listed[1].toLowerCase();
    return contacts.find((c) => c.key.startsWith(prefix))?.key ?? prefix;
  }
  const byName = contacts.find((c) => c.name === text);
  if (byName) return byName.key;
  const hex = text.toLowerCase().replace(/\s+/g, '');
  return /^[0-9a-f]{6,64}$/.test(hex) ? hex : null;
}

/** Settings card body: senders whose messages are not shown. */
@customElement('chattx-blocklist-settings')
export class BlocklistSettings extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _entries: BlockEntry[] = blocklist();
  @state() private _input = '';
  @state() private _error = '';
  @state() private _busy = false;

  static styles = [panelStyles, css`
    /* panelStyles sizes the panel's own host to the screen; a settings card is as tall as its content. */
    :host { display: block; width: auto; height: auto; }
    ul { list-style: none; margin: 8px 0; padding: 0; }
    li { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 13px; color: var(--primary-text-color); }
    .key { font-family: monospace; font-size: 12px; color: var(--secondary-text-color); }
    .names { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .add { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; }
    .add input { flex: 1; min-width: 200px; max-width: 360px; }
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
    button.quiet { padding: 2px 10px; background: none; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #e0e0e0); font-weight: 400; }
    button:disabled { opacity: 0.5; cursor: default; }
    .empty { font-size: 13px; color: var(--secondary-text-color); margin: 8px 0; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 6px; }
  `];

  private _onChanged = () => {
    this._entries = blocklist();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('chattx-blocklist-changed', this._onChanged);
    this._entries = blocklist();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('chattx-blocklist-changed', this._onChanged);
  }

  private async _save(keys: string[]) {
    if (!this.hass || this._busy) return;
    this._busy = true;
    this._error = '';
    try {
      this._entries = await saveBlocklist(this.hass, keys);
    } catch (error) {
      this._error = (error as Error).message ?? String(error);
    } finally {
      this._busy = false;
    }
  }

  private async _add(contacts: KnownContact[]) {
    const key = resolveBlockInput(this._input, contacts);
    if (!key) {
      this._error = t('Choose a contact from the list or enter its public key (at least 6 hex digits).');
      return;
    }
    if (this._entries.some((e) => e.key === key)) {
      this._input = '';
      return;
    }
    await this._save([...this._entries.map((e) => e.key), key]);
    if (!this._error) this._input = '';
  }

  render() {
    const admin = !!this.hass?.user?.is_admin;
    const contacts = this.hass ? knownContacts(this.hass.states) : [];
    return html`
      <div class="form-description">${t('Messages from these senders are not shown or stored, in channels and direct messages. A sender is chosen by public key, whatever its name; in channels, where messages carry only the sender\'s name, every name the key goes by is matched.')}</div>
      ${this._entries.length === 0
        ? html`<div class="empty">${t('Nobody is blocked.')}</div>`
        : html`<ul>
            ${this._entries.map((e) => html`<li>
              <span class="names">${e.names.length ? e.names.join(', ') : t('Unknown name')}</span>
              <span class="key">${e.key.slice(0, 12)}</span>
              ${admin
                ? html`<button class="quiet" ?disabled=${this._busy}
                    @click=${() => this._save(this._entries.filter((x) => x.key !== e.key).map((x) => x.key))}>${t('Remove')}</button>`
                : nothing}
            </li>`)}
          </ul>`}
      ${admin
        ? html`<div class="add">
            <input class="form-input" list="chattx-block-contacts" .value=${this._input}
              placeholder=${t('Contact name or public key')}
              @input=${(e: Event) => { this._input = (e.target as HTMLInputElement).value; this._error = ''; }}
              @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter') void this._add(contacts); }} />
            <datalist id="chattx-block-contacts">
              ${contacts.map((c) => html`<option value=${`${c.name} (${c.key.slice(0, 12)}…)`}></option>`)}
            </datalist>
            <button ?disabled=${this._busy || !this._input.trim()} @click=${() => this._add(contacts)}>${t('Block')}</button>
          </div>`
        : nothing}
      ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-blocklist-settings': BlocklistSettings;
  }
}
