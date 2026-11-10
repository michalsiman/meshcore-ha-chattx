import { t } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import jsQR from 'jsqr';
import type { HomeAssistant } from '../types';
import { modalFrameStyles, panelStyles } from '../styles';
import { attachDialogA11y } from '../utils/dialog-a11y';

/** What the integration read from the entry (meshcore_chattx/import_contact with dry_run). */
interface ContactPreview {
  kind: 'key' | 'card';
  public_key: string;
  name: string;
  type: number;
  already_added: boolean;
  known: boolean;
}

const TYPES: Array<[number, string]> = [
  [1, 'Companion'],
  [2, 'Repeater'],
  [3, 'Room server'],
  [4, 'Sensor'],
];

/** Longest side the QR image is scaled to before decoding; enough for any phone screenshot. */
const QR_MAX_SIDE = 1200;

interface BarcodeDetectorLike {
  detect(source: ImageBitmapSource): Promise<Array<{ rawValue: string }>>;
}

/** Read the text of a QR code in an image: BarcodeDetector where the browser has it, else jsQR. */
export async function decodeQrImage(file: Blob): Promise<string | null> {
  const bitmap = await createImageBitmap(file);
  try {
    const Detector = (globalThis as unknown as {
      BarcodeDetector?: new (o: { formats: string[] }) => BarcodeDetectorLike;
    }).BarcodeDetector;
    if (Detector) {
      try {
        const found = await new Detector({ formats: ['qr_code'] }).detect(bitmap);
        if (found[0]?.rawValue) return found[0].rawValue;
      } catch {
        // Unsupported format or platform: fall through to jsQR.
      }
    }
    const scale = Math.min(1, QR_MAX_SIDE / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(bitmap, 0, 0, width, height);
    const pixels = ctx.getImageData(0, 0, width, height);
    // Dark-theme screenshots have light modules on dark ground: try both.
    const code = jsQR(pixels.data, width, height, { inversionAttempts: 'attemptBoth' });
    return code?.data || null;
  } finally {
    bitmap.close?.();
  }
}

/**
 * Add a contact by hand: paste a public key, a MeshCore QR link
 * (meshcore://contact/add?...) or a contact card (meshcore://<hex>), or load
 * a QR code from an image. Fires `contact-imported` after adding.
 */
@customElement('chattx-contact-import-dialog')
export class ContactImportDialog extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) open = false;

  @state() private _text = '';
  @state() private _name = '';
  @state() private _type = 1;
  @state() private _preview: ContactPreview | null = null;
  @state() private _error = '';
  @state() private _info = '';
  @state() private _busy = false;
  @state() private _reading = false;
  private _checkTimer?: ReturnType<typeof setTimeout>;
  private _checkSeq = 0;
  /** Name and type were changed by hand, so a new preview does not overwrite them. */
  private _nameEdited = false;
  private _typeEdited = false;

  static styles = [panelStyles, css`
    :host { display: contents; }
    .dialog-overlay { z-index: 1100; }
    .dialog { max-width: 480px; }
    label { display: block; font-size: 13px; color: var(--primary-text-color); margin: 10px 0 4px; }
    textarea { width: 100%; box-sizing: border-box; min-height: 84px; resize: vertical;
      font-family: monospace; font-size: 12px; }
    .row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px; }
    .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
    .qr-btn { padding: 6px 12px; border: 1px solid var(--divider-color, #e0e0e0); border-radius: 6px;
      background: transparent; color: var(--primary-text-color); font: inherit; font-size: 13px; cursor: pointer; }
    .qr-btn:hover:not(:disabled) { border-color: var(--primary-color, #03a9f4); }
    input[type=file] { display: none; }
    .preview { margin-top: 12px; padding: 10px; border-radius: 8px;
      background: var(--secondary-background-color, rgba(127,127,127,0.1)); font-size: 13px; }
    .preview .key { font-family: monospace; font-size: 11px; color: var(--secondary-text-color);
      overflow-wrap: anywhere; margin-top: 4px; }
    .ok { color: var(--success-color, #43a047); }
    .warn { color: var(--warning-color, #ff9800); }
    select, input[type=text] { width: 100%; box-sizing: border-box; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 8px; }
  `, modalFrameStyles];

  constructor() {
    super();
    attachDialogA11y(this, {
      isOpen: () => this.open,
      onEscape: () => this._close(),
    });
  }

  protected willUpdate(changed: Map<string, unknown>) {
    if (changed.has('open') && this.open) {
      this._text = '';
      this._name = '';
      this._type = 1;
      this._preview = null;
      this._error = '';
      this._info = '';
      this._nameEdited = false;
      this._typeEdited = false;
    }
  }

  private _close() {
    clearTimeout(this._checkTimer);
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  private _onText(value: string) {
    this._text = value;
    this._info = '';
    clearTimeout(this._checkTimer);
    this._checkTimer = setTimeout(() => void this._check(), 300);
  }

  private _errorText(e: { code?: string; message?: string }): string {
    switch (e.code) {
      case 'empty': return '';
      case 'invalid_key': return t('The public key must be 64 hex characters.');
      case 'invalid_card': return t('The contact card cannot be read.');
      case 'invalid': return t('Enter a public key (64 hex characters), a meshcore:// link or a contact card.');
      case 'already_added': return t('This contact is already added.');
      case 'name_required': return t('Enter a name for the contact.');
      case 'not_connected': return t('The companion radio is not connected.');
      default: return e.message ?? String(e);
    }
  }

  private async _check() {
    if (!this.hass) return;
    const seq = ++this._checkSeq;
    if (!this._text.trim()) {
      this._preview = null;
      this._error = '';
      return;
    }
    try {
      const msg: Record<string, unknown> = { type: 'meshcore_chattx/import_contact', text: this._text, dry_run: true };
      if (this.entryId) msg.entry_id = this.entryId;
      const preview = await this.hass.callWS<ContactPreview>(msg);
      if (seq !== this._checkSeq) return;
      this._preview = preview;
      this._error = '';
      if (!this._nameEdited) this._name = preview.name;
      if (!this._typeEdited) this._type = preview.type;
    } catch (error) {
      if (seq !== this._checkSeq) return;
      this._preview = null;
      this._error = this._errorText(error as { code?: string; message?: string });
    }
  }

  private async _loadImage(file: Blob | null | undefined) {
    if (!file) return;
    this._reading = true;
    this._error = '';
    this._info = '';
    try {
      const text = await decodeQrImage(file);
      if (!text) {
        this._error = t('No QR code found in the image. Try a sharper or tighter crop.');
        return;
      }
      this._text = text;
      this._info = t('QR code read.');
      await this._check();
    } catch {
      this._error = t('This file can\'t be read as an image.');
    } finally {
      this._reading = false;
    }
  }

  private _onPaste(e: ClipboardEvent) {
    const item = Array.from(e.clipboardData?.items ?? []).find((i) => i.type.startsWith('image/'));
    if (!item) return;
    e.preventDefault();
    void this._loadImage(item.getAsFile());
  }

  private async _add() {
    if (!this.hass || !this._preview || this._busy) return;
    this._busy = true;
    this._error = '';
    try {
      const msg: Record<string, unknown> = { type: 'meshcore_chattx/import_contact', text: this._text };
      if (this._preview.kind === 'key') {
        msg.name = this._name.trim();
        msg.node_type = this._type;
      }
      if (this.entryId) msg.entry_id = this.entryId;
      const result = await this.hass.callWS<ContactPreview>(msg);
      this.dispatchEvent(new CustomEvent('contact-imported', { detail: result, bubbles: true, composed: true }));
      this._close();
    } catch (error) {
      this._error = this._errorText(error as { code?: string; message?: string });
    } finally {
      this._busy = false;
    }
  }

  render() {
    if (!this.open) return nothing;
    const p = this._preview;
    const canAdd = !!p && !p.already_added && !this._busy && (p.kind === 'card' || !!this._name.trim());
    return html`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${t('Add contact manually')}
          @click=${(e: Event) => e.stopPropagation()} @paste=${this._onPaste}>
          <div class="dialog-header"><div class="dialog-header-title">${t('Add contact manually')}</div></div>
          <div class="dialog-body">
            <label for="chattx-contact-text">${t('Public key, MeshCore link or contact card')}</label>
            <textarea id="chattx-contact-text" class="form-input" spellcheck="false" autocomplete="off"
              placeholder="meshcore://contact/add?name=…&public_key=…&type=1"
              .value=${this._text} @input=${(e: Event) => this._onText((e.target as HTMLTextAreaElement).value)}></textarea>
            <div class="row">
              <button class="qr-btn" ?disabled=${this._reading}
                @click=${() => (this.renderRoot.querySelector('#chattx-qr-file') as HTMLInputElement)?.click()}>
                ${this._reading ? t('Reading…') : t('Load QR code from image')}
              </button>
              <input id="chattx-qr-file" type="file" accept="image/*"
                @change=${(e: Event) => {
                  const input = e.target as HTMLInputElement;
                  void this._loadImage(input.files?.[0]);
                  input.value = '';
                }} />
            </div>
            <div class="hint">${t('You can also paste a QR code image here (Ctrl+V).')}</div>
            ${this._info ? html`<div class="hint ok">${this._info}</div>` : nothing}

            ${p ? html`
              ${p.kind === 'key' ? html`
                <label for="chattx-contact-name">${t('Name')}</label>
                <input id="chattx-contact-name" type="text" class="form-input" maxlength="31" .value=${this._name}
                  @input=${(e: Event) => { this._name = (e.target as HTMLInputElement).value; this._nameEdited = true; }} />
                <label for="chattx-contact-type">${t('Type')}</label>
                <select id="chattx-contact-type" class="form-input" .value=${String(this._type)}
                  @change=${(e: Event) => { this._type = Number((e.target as HTMLSelectElement).value); this._typeEdited = true; }}>
                  ${TYPES.map(([v, label]) => html`<option value=${v} ?selected=${this._type === v}>${t(label)}</option>`)}
                </select>
              ` : nothing}
              <div class="preview">
                <div><strong>${p.kind === 'key' ? (this._name || '—') : (p.name || '—')}</strong>
                  · ${t((TYPES.find(([v]) => v === (p.kind === 'key' ? this._type : p.type)) ?? TYPES[0])[1])}</div>
                <div class="key">${p.public_key}</div>
                <div style="margin-top: 6px;">
                  ${p.already_added
                    ? html`<span class="warn">${t('This contact is already added.')}</span>`
                    : p.kind === 'card'
                      ? html`<span class="ok">${t('Signed contact card: the radio adds it with its name and location.')}</span>`
                      : html`<span class="ok">${p.known ? t('Known from the mesh; it will be added.') : t('Not heard yet; it will be added and messages go by flood until a path is found.')}</span>`}
                </div>
              </div>
            ` : nothing}
            ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : nothing}
          </div>
          <div class="dialog-footer">
            <button class="dialog-button" @click=${this._close}>${t('Cancel')}</button>
            <button class="dialog-button primary" ?disabled=${!canAdd} @click=${this._add}>
              ${this._busy ? t('Adding…') : t('Add contact')}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-contact-import-dialog': ContactImportDialog;
  }
}
