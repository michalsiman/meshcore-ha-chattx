import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { getQuickMessages } from '../api';
import { isCzech } from '../utils/language';

/** Composer button with a list of quick messages; fires `quick-message-selected`. */
@customElement('chattx-quick-message-picker')
export class QuickMessagePicker extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Boolean }) disabled = false;

  @state() private _open = false;
  @state() private _messages: string[] | null = null;

  static styles = css`
    :host { position: relative; display: block; flex-shrink: 0; }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--quick-message-toggle-size, 40px);
      height: var(--quick-message-toggle-size, 40px);
      border: none;
      border-radius: 50%;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .toggle:hover:not(:disabled) { background: var(--secondary-background-color, #f5f5f5); }
    .toggle:disabled { opacity: 0.5; cursor: not-allowed; }
    .menu {
      position: absolute;
      bottom: calc(100% + 8px);
      left: 0;
      z-index: 20;
      width: min(320px, 80vw);
      max-height: 280px;
      overflow-y: auto;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
    .item {
      display: block;
      width: 100%;
      padding: 10px 12px;
      border: none;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
      text-align: left;
      overflow-wrap: anywhere;
      cursor: pointer;
    }
    .item:hover, .item:focus-visible { background: var(--secondary-background-color, #f5f5f5); }
    .empty { padding: 12px; font-size: 13px; color: var(--secondary-text-color); }
  `;

  private _onOutsideClick = (e: Event) => {
    if (!e.composedPath().includes(this)) this._close();
  };

  private _onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this._close();
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    this._removeListeners();
  }

  private _removeListeners() {
    document.removeEventListener('click', this._onOutsideClick);
    document.removeEventListener('keydown', this._onKeydown);
  }

  private _close() {
    this._open = false;
    this._removeListeners();
  }

  private async _toggle() {
    if (this._open) {
      this._close();
      return;
    }
    this._open = true;
    document.addEventListener('click', this._onOutsideClick);
    document.addEventListener('keydown', this._onKeydown);
    if (this.hass) this._messages = await getQuickMessages(this.hass);
  }

  private _select(message: string) {
    this._close();
    this.dispatchEvent(new CustomEvent('quick-message-selected', { detail: { message } }));
  }

  render() {
    const cs = isCzech();
    const label = cs ? 'Předpřipravené zprávy' : 'Quick messages';
    return html`
      <button class="toggle" title=${label} aria-label=${label} aria-expanded=${this._open ? 'true' : 'false'} ?disabled=${this.disabled} @click=${this._toggle}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
      </button>
      ${this._open ? html`
        <div class="menu">
          ${this._messages === null ? ''
            : this._messages.length === 0
              ? html`<div class="empty">${cs ? 'Zatím tu nic není. Zprávy přidáš v záložce Settings.' : 'Nothing here yet. Add messages in the Settings tab.'}</div>`
              : this._messages.map((message) => html`<button class="item" @click=${() => this._select(message)}>${message}</button>`)}
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-quick-message-picker': QuickMessagePicker;
  }
}
