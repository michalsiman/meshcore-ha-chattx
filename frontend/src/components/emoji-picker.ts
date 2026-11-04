import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { isCzech } from '../utils/language';

export const EMOJI = [
  '😀', '😁', '😂', '🤣', '😊', '😉', '😍', '😘', '😎', '🤔', '😅', '😇',
  '🙂', '🙃', '😐', '😴', '😢', '😭', '😡', '😱', '🤯', '🥳', '🤝', '🙏',
  '👍', '👎', '👌', '👋', '👏', '💪', '✌️', '🤞', '❤️', '🔥', '⭐', '✅',
  '❌', '❗', '❓', '⚠️', '🎉', '💡', '📡', '📻', '📟', '📱', '🛰️', '🗼',
  '🔋', '🔌', '⚡', '🌐', '📍', '🗺️', '🧭', '🏠', '🚗', '🚲', '🥾', '⛰️',
  '☀️', '⛅', '🌧️', '❄️', '🌙', '☕', '🍺', '🍕', '🐶', '🐱', '🦌', '🌲',
];

/** Composer button with a grid of emoji; fires `emoji-selected`. */
@customElement('chattx-emoji-picker')
export class EmojiPicker extends LitElement {
  @property({ type: Boolean }) disabled = false;

  @state() private _open = false;

  static styles = css`
    :host { position: relative; display: block; flex-shrink: 0; }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
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
      right: 0;
      z-index: 20;
      display: grid;
      grid-template-columns: repeat(auto-fill, 38px);
      justify-content: center;
      width: min(290px, 80vw);
      max-height: 240px;
      overflow-y: auto;
      padding: 6px;
      box-sizing: border-box;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
    .item {
      width: 38px;
      height: 38px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: none;
      font-size: 22px;
      line-height: 1;
      cursor: pointer;
    }
    .item:hover, .item:focus-visible { background: var(--secondary-background-color, #f5f5f5); }
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

  private _toggle() {
    if (this._open) {
      this._close();
      return;
    }
    this._open = true;
    document.addEventListener('click', this._onOutsideClick);
    document.addEventListener('keydown', this._onKeydown);
  }

  private _select(emoji: string) {
    this._close();
    this.dispatchEvent(new CustomEvent('emoji-selected', { detail: { emoji } }));
  }

  render() {
    const label = isCzech() ? 'Vložit smajlík' : 'Insert emoji';
    return html`
      <button class="toggle" title=${label} aria-label=${label} aria-expanded=${this._open ? 'true' : 'false'} ?disabled=${this.disabled} @click=${this._toggle}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z"/></svg>
      </button>
      ${this._open ? html`
        <div class="menu">
          ${EMOJI.map((emoji) => html`<button class="item" @click=${() => this._select(emoji)}>${emoji}</button>`)}
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-emoji-picker': EmojiPicker;
  }
}
