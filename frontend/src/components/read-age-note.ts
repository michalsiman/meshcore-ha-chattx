import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { isCzech } from '../utils/language';
import { formatReadAge, readAtClass } from '../utils/read-age';

const REFRESH_MS = 30_000;

/**
 * "Loaded … ago" note that keeps its age and colour current. It renders into
 * the parent's shadow root, so the parent's .read-at styles apply to it.
 */
@customElement('chattx-read-age-note')
export class ReadAgeNote extends LitElement {
  @property({ type: String }) readAt = '';
  private _timer: ReturnType<typeof setInterval> | null = null;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._timer = setInterval(() => this.requestUpdate(), REFRESH_MS);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timer) clearInterval(this._timer);
    this._timer = null;
  }

  render() {
    this.className = readAtClass(this.readAt);
    this.title = new Date(this.readAt).toLocaleString();
    const czech = isCzech();
    return html`${czech ? 'Načteno' : 'Loaded'} ${formatReadAge(this.readAt, czech)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-read-age-note': ReadAgeNote;
  }
}
