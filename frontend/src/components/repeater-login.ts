import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { forgetRepeaterPassword, getRepeaterLoginState, loginToRepeater } from '../api';

/** Password form for one repeater; reports the outcome inline. */
@customElement('chattx-repeater-login')
export class RepeaterLogin extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) prefix = '';
  @property({ type: String }) entryId?: string;

  @state() private _password = '';
  @state() private _remember = false;
  @state() private _hasSaved = false;
  @state() private _busy = false;
  @state() private _error = '';
  @state() private _loggedInAs: 'admin' | 'guest' | 'unknown' | null = null;
  @state() private _loggedInAt: string | null = null;

  static styles = css`
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-size: 13px; color: var(--secondary-text-color); }
    input[type='password'] {
      box-sizing: border-box;
      width: 100%;
      margin-top: 4px;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
    }
    .remember { display: flex; align-items: center; gap: 8px; color: var(--primary-text-color); }
    .actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    button { padding: 8px 14px; border: none; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: pointer; }
    button:disabled { opacity: 0.6; cursor: default; }
    .primary { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
    .link { padding: 8px 0; background: none; color: var(--secondary-text-color); font-weight: 400; text-decoration: underline; }
    .note { font-size: 13px; color: var(--secondary-text-color); }
    .error { font-size: 13px; color: var(--error-color, #db4437); }
    .success { font-size: 14px; color: var(--success-color, #43a047); }
  `;

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('prefix') && this.prefix) void this._loadState();
  }

  private async _loadState() {
    if (!this.hass) return;
    const prefix = this.prefix;
    this._password = '';
    this._error = '';
    this._loggedInAs = null;
    this._loggedInAt = null;
    const state = await getRepeaterLoginState(this.hass, prefix, this.entryId);
    if (prefix !== this.prefix) return;
    this._hasSaved = state.has_saved_password;
    this._remember = state.has_saved_password;
    // Repeaters keep an admin login indefinitely, so don't send another one.
    if (state.logged_in_at) {
      this._loggedInAt = state.logged_in_at;
      this._loggedInAs = 'admin';
      this._notifyLoggedIn();
    }
  }

  private async _submit(e: Event) {
    e.preventDefault();
    if (!this.hass || this._busy) return;
    this._busy = true;
    this._error = '';
    const result = await loginToRepeater(this.hass, this.prefix, {
      password: this._password || undefined,
      remember: this._remember,
      entryId: this.entryId,
    });
    this._busy = false;
    if (result.has_saved_password !== undefined) this._hasSaved = result.has_saved_password;
    if (result.success) {
      this._password = '';
      this._loggedInAs = result.is_admin === true ? 'admin' : result.is_admin === false ? 'guest' : 'unknown';
      this._loggedInAt = null;
      this._notifyLoggedIn();
    } else if (result.reason === 'rate_limited') {
      this._error = `Too much mesh traffic right now. Try again in ${result.retry_after} seconds.`;
    } else if (result.reason === 'no_response') {
      this._error = 'The repeater did not confirm the login. The password may be wrong, or the repeater may be out of reach.';
    } else {
      this._error = result.message ?? 'Login failed.';
    }
  }

  private _notifyLoggedIn() {
    this.dispatchEvent(new CustomEvent('repeater-logged-in', { detail: { role: this._loggedInAs } }));
  }

  private async _forget() {
    if (!this.hass) return;
    const error = await forgetRepeaterPassword(this.hass, this.prefix, this.entryId);
    if (error) {
      this._error = error;
      return;
    }
    this._hasSaved = false;
    this._remember = false;
  }

  render() {
    return html`
      <form @submit=${this._submit}>
        <label>
          Password
          <input
            type="password"
            autocomplete="new-password"
            placeholder=${this._hasSaved ? 'Saved password' : ''}
            .value=${this._password}
            ?disabled=${this._busy}
            @input=${(e: Event) => { this._password = (e.target as HTMLInputElement).value; }}
          />
        </label>
        <label class="remember">
          <input
            type="checkbox"
            .checked=${this._remember}
            ?disabled=${this._busy}
            @change=${(e: Event) => { this._remember = (e.target as HTMLInputElement).checked; }}
          />
          Remember password
        </label>
        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this._busy}>${this._busy ? 'Logging in…' : 'Log in'}</button>
          ${this._hasSaved
            ? html`<button class="link" type="button" ?disabled=${this._busy} @click=${this._forget}>Forget saved password</button>`
            : ''}
        </div>
        ${this._busy ? html`<div class="note">This can take up to a minute over several hops.</div>` : ''}
        ${this._error ? html`<div class="error" role="alert">${this._error}</div>` : ''}
        ${this._loggedInAs
          ? html`<div class="success" role="status">${
              this._loggedInAt
                ? `Logged in as administrator since ${new Date(this._loggedInAt).toLocaleDateString()}. No need to log in again.`
                : this._loggedInAs === 'admin'
                ? 'Logged in as administrator.'
                : this._loggedInAs === 'guest'
                  ? 'Logged in as guest. Changing settings requires the admin password.'
                  : 'Logged in.'
            }</div>`
          : ''}
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-login': RepeaterLogin;
  }
}
