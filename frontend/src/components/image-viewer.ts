import { t } from '../i18n';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { attachDialogA11y } from '../utils/dialog-a11y';

/**
 * An image from a message, large, over the conversation. Closed with the
 * ✕ at the top right, a tap beside the image, Escape or the phone's back
 * gesture (attachDialogA11y gives it a history step). `src` is the image
 * through Home Assistant; `original` is the address in the message.
 */
@customElement('chattx-image-viewer')
export class ImageViewer extends LitElement {
  @property({ type: String }) src = '';
  @property({ type: String }) original = '';

  static styles = css`
    :host { display: contents; }
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 1200;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.9);
    }
    img {
      max-width: 94vw;
      max-height: 86vh;
      max-height: 86dvh;
      object-fit: contain;
      border-radius: 6px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      font-size: 22px;
      cursor: pointer;
    }
    .original {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 90vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
    }
  `;

  constructor() {
    super();
    attachDialogA11y(this, {
      isOpen: () => !!this.src,
      onEscape: () => this._close(),
    });
  }

  private _close() {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  render() {
    if (!this.src) return nothing;
    return html`
      <div class="overlay" role="dialog" aria-modal="true" aria-label=${t('Image')}
        @click=${(e: Event) => { e.stopPropagation(); this._close(); }}>
        <img src=${this.src} alt="" @click=${(e: Event) => e.stopPropagation()} />
        <button class="close" aria-label=${t('Close')} title=${t('Close')}
          @click=${(e: Event) => { e.stopPropagation(); this._close(); }}>✕</button>
        ${this.original
          ? html`<span class="original" @click=${(e: Event) => e.stopPropagation()}>${this.original}</span>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-image-viewer': ImageViewer;
  }
}
