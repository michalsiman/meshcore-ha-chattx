import { t } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { modalFrameStyles, panelStyles } from '../styles';
import { attachDialogA11y } from '../utils/dialog-a11y';
import * as settings from '../utils/user-settings';

/** Longest side of the uploaded image; enough for a phone screen, small to send. */
const MAX_SIDE = 1600;
const EXPIRY_KEY = 'chattx-image-expiry';

export type Expiry = 'permanent' | '1h' | '12h' | '24h' | '72h' | 'tmpfiles';

/**
 * Shrink an image to at most MAX_SIDE pixels and encode it as JPEG (PNG
 * when it is small and has transparency would grow, so JPEG always, on a
 * white background). Returns base64 without the data: prefix.
 */
export async function shrinkImage(file: Blob): Promise<{ data: string; mime: string; width: number; height: number; bytes: number }> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close?.();
  const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
  const data = dataUrl.slice(dataUrl.indexOf(',') + 1);
  return { data, mime: 'image/jpeg', width, height, bytes: Math.floor((data.length * 3) / 4) };
}

/**
 * Upload an image for a message: preview, choose how long it stays,
 * upload through Home Assistant and fire `image-uploaded` with the address.
 */
@customElement('chattx-image-upload-dialog')
export class ImageUploadDialog extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) file: Blob | null = null;

  @state() private _preview = '';
  @state() private _image: Awaited<ReturnType<typeof shrinkImage>> | null = null;
  @state() private _expiry: Expiry = (settings.getItem(EXPIRY_KEY) as Expiry | null) ?? 'permanent';
  @state() private _busy = false;
  @state() private _error = '';

  static styles = [panelStyles, css`
    :host { display: contents; }
    .dialog-overlay { z-index: 1100; }
    .dialog { max-width: 440px; }
    .preview { display: block; max-width: 100%; max-height: 40vh; margin: 0 auto 10px; border-radius: 6px; }
    .info { font-size: 12px; color: var(--secondary-text-color); margin-bottom: 10px; }
    label { font-size: 13px; color: var(--primary-text-color); }
    select { margin: 4px 0 10px; width: 100%; }
    .warning { font-size: 12px; color: var(--warning-color, #ff9800); }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 8px; }
  `, modalFrameStyles];

  constructor() {
    super();
    attachDialogA11y(this, {
      isOpen: () => this.file !== null,
      onEscape: () => this._close(),
    });
  }

  protected async willUpdate(changed: Map<string, unknown>) {
    if (changed.has('file')) {
      if (this._preview) URL.revokeObjectURL(this._preview);
      this._preview = this.file ? URL.createObjectURL(this.file) : '';
      this._image = null;
      this._error = '';
      if (this.file) {
        const file = this.file;
        try {
          const image = await shrinkImage(file);
          if (file === this.file) this._image = image;
        } catch {
          if (file === this.file) this._error = t('This file can\'t be read as an image.');
        }
      }
    }
  }

  private _close() {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  private async _upload() {
    if (!this.hass || !this._image || this._busy) return;
    this._busy = true;
    this._error = '';
    try {
      settings.setItem(EXPIRY_KEY, this._expiry);
      const result = await this.hass.callWS<{ url: string }>({
        type: 'meshcore_chattx/upload_image',
        data: this._image.data,
        mime: this._image.mime,
        expiry: this._expiry,
      });
      this.dispatchEvent(new CustomEvent('image-uploaded', { detail: { url: result.url }, bubbles: true, composed: true }));
    } catch (error) {
      const e = error as { code?: string; message?: string };
      this._error = e.code === 'service_down'
        ? t('{service} is out of service right now. Choose another service above and upload again.', { service: (e.message ?? '').split(':')[0] })
        : t('Uploading the image failed: {message}', { message: e.message ?? String(error) });
    } finally {
      this._busy = false;
    }
  }

  render() {
    if (!this.file) return nothing;
    const kb = this._image ? Math.round(this._image.bytes / 1024) : 0;
    return html`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${t('Send an image')}
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="dialog-header"><div class="dialog-header-title">${t('Send an image')}</div></div>
          <div class="dialog-body">
            ${this._preview ? html`<img class="preview" src=${this._preview} alt="" />` : nothing}
            <div class="info">${this._image
              ? t('{width} × {height} px, {kb} kB to upload', { width: this._image.width, height: this._image.height, kb })
              : this._error ? '' : t('Preparing…')}</div>
            <label for="chattx-image-expiry">${t('Keep the image')}</label>
            <select id="chattx-image-expiry" class="form-input" .value=${this._expiry}
              @change=${(e: Event) => { this._expiry = (e.target as HTMLSelectElement).value as Expiry; }}>
              <option value="permanent" ?selected=${this._expiry === 'permanent'}>${t('Permanently (catbox.moe)')}</option>
              <option value="1h" ?selected=${this._expiry === '1h'}>${t('{n} hours (litterbox.catbox.moe)', { n: 1 })}</option>
              <option value="12h" ?selected=${this._expiry === '12h'}>${t('{n} hours (litterbox.catbox.moe)', { n: 12 })}</option>
              <option value="24h" ?selected=${this._expiry === '24h'}>${t('{n} hours (litterbox.catbox.moe)', { n: 24 })}</option>
              <option value="72h" ?selected=${this._expiry === '72h'}>${t('{n} hours (litterbox.catbox.moe)', { n: 72 })}</option>
              <option value="tmpfiles" ?selected=${this._expiry === 'tmpfiles'}>${t('{n} minutes (tmpfiles.org)', { n: 60 })}</option>
            </select>
            <div class="warning">${t('The image will be public: anyone with the link can open it, and a permanent one can\'t be deleted. The link is put into your message; recipients need internet to open it.')}</div>
            ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : nothing}
          </div>
          <div class="dialog-footer">
            <button class="dialog-button" @click=${this._close}>${t('Cancel')}</button>
            <button class="dialog-button primary" ?disabled=${!this._image || this._busy} @click=${this._upload}>
              ${this._busy ? t('Uploading…') : t('Upload')}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-image-upload-dialog': ImageUploadDialog;
  }
}
