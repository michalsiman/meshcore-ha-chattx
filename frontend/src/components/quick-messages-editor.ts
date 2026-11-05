import { t } from '../i18n';
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getQuickMessages, MAX_QUICK_MESSAGE_BYTES, MAX_QUICK_MESSAGES, saveQuickMessages } from '../api';

/** Settings card body: one quick message per line. */
@customElement('chattx-quick-messages-editor')
export class QuickMessagesEditor extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;

  @state() private _text = '';
  @state() private _saving = false;
  @state() private _status = '';
  @state() private _error = '';
  private _loaded = false;

  static styles = css`
    p { margin: 0 0 8px; font-size: 13px; color: var(--secondary-text-color); }
    textarea {
      box-sizing: border-box;
      width: 100%;
      min-height: 120px;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
      resize: vertical;
    }
    .actions { display: flex; align-items: center; gap: 12px; margin-top: 8px; }
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
    button:disabled { opacity: 0.5; cursor: default; }
    .status { font-size: 13px; color: var(--success-color, #43a047); }
    .error { font-size: 13px; color: var(--error-color, #db4437); }
  `;

  protected updated() {
    if (this.hass && !this._loaded) {
      this._loaded = true;
      void getQuickMessages(this.hass).then((messages) => { this._text = messages.join('\n'); });
    }
  }

  private async _save() {
    if (!this.hass) return;
    const messages = this._text.split('\n').map((line) => line.trim()).filter(Boolean);
    this._status = '';
    this._error = '';
    if (messages.length > MAX_QUICK_MESSAGES) {
      this._error = t('At most {MAX_QUICK_MESSAGES} messages.', { MAX_QUICK_MESSAGES });
      return;
    }
    const encoder = new TextEncoder();
    const tooLong = messages.find((message) => encoder.encode(message).length > MAX_QUICK_MESSAGE_BYTES);
    if (tooLong) {
      const start = tooLong.length > 30 ? `${tooLong.slice(0, 30)}…` : tooLong;
      this._error = t('A message can have at most {MAX_QUICK_MESSAGE_BYTES} bytes (a letter with diacritics takes 2): "{start}"', { MAX_QUICK_MESSAGE_BYTES, start });
      return;
    }
    this._saving = true;
    const error = await saveQuickMessages(this.hass, messages);
    this._saving = false;
    if (error) {
      this._error = error;
      return;
    }
    this._text = messages.join('\n');
    this._status = t('Saved.');
  }

  render() {
    const canEdit = !!this.hass?.user?.is_admin;
    return html`
      <p>${t('One message per line. They are offered in chat under the lightning button.')}</p>
      <textarea
        aria-label=${t('Quick messages')}
        ?readonly=${!canEdit}
        .value=${this._text}
        @input=${(e: Event) => { this._text = (e.target as HTMLTextAreaElement).value; this._status = ''; }}></textarea>
      ${canEdit ? html`
        <div class="actions">
          <button ?disabled=${this._saving} @click=${this._save}>${t('Save')}</button>
          ${this._status ? html`<span class="status" role="status">${this._status}</span>` : ''}
          ${this._error ? html`<span class="error" role="alert">${this._error}</span>` : ''}
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-quick-messages-editor': QuickMessagesEditor;
  }
}
