import { modalFrameStyles } from '../styles';
import { getLocale, t, tn } from '../i18n';
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Contact, ManagedDevice, HomeAssistant } from '../types';
import { attachDialogA11y } from '../utils/dialog-a11y';
import { publicNodes } from '../utils/public-nodes';
import { executeLocal, getContactPath, getContacts, getConversationInfo, getRepeaterLoginState } from '../api';
import './repeater-login';
import './repeater-settings';
import './repeater-telemetry';
import './repeater-terminal';
import './repeater-neighbours';
import './repeater-regions';

let hopNodesCache: { at: number; nodes: Contact[] } | null = null;

@customElement('chattx-node-detail-dialog')
export class NodeDetailDialog extends LitElement {
  @property({ type: Object }) node?: Contact | ManagedDevice;
  @property({ type: Boolean }) open = false;
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) entryId?: string;
  /** Show only repeater login and settings, for opening from outside Nodes. */
  @property({ type: Boolean }) loginOnly = false;
  // Parent-owned pending state; when set, the matching action button is
  // disabled and its label swaps to "Adding…" / "Removing…" so the user
  // gets feedback during the WS round-trip + coordinator refresh.
  @property({ type: String }) pendingAction: 'add-contact' | 'remove-contact' | null = null;

  @state() private _confirming = false;
  @state() private _confirmAction: 'remove-contact' | null = null;
  @state() private _showLogin = false;
  @state() private _canLoadSettings = false;
  @state() private _loggedIn = false;
  @state() private _keyCopied = false;
  /** Path reset: key of the contact and the path it had when reset, so the
   *  dialog shows flood until the coordinator reports a new path. */
  /** Key of the contact whose path was reset here; cleared when a new path is found. */
  @state() private _pathReset: { key: string } | null = null;
  /** The path as read from the radio, newer than the integration's contact list. */
  @state() private _freshPath: { key: string; out_path: string; out_path_len: number; out_path_hash_mode: number } | null = null;
  private _freshFor: string | null = null;
  private _pathWatch?: ReturnType<typeof setInterval>;
  @state() private _pathResetting = false;
  @state() private _pathResetError = '';
  /** The direct conversation with this node in Chat: stored messages and the newest one's time. */
  @state() private _conversation: { count: number; last: string | null } | null = null;
  private _conversationFor: string | null = null;

  private _loadConversation(prefix: string) {
    if (!this.hass || this._conversationFor === prefix) return;
    this._conversationFor = prefix;
    this._conversation = null;
    void getConversationInfo(this.hass, prefix).then((info) => {
      if (this._conversationFor === prefix) this._conversation = info;
    });
  }

  willUpdate() {
    const node = this.node as Contact | undefined;
    if (this.open && !this.loginOnly && node && 'adv_name' in node && node.pubkey_prefix) {
      this._loadConversation(node.pubkey_prefix);
    } else if (!this.open) {
      this._conversationFor = null;
    }
    // The path as the radio has it now, once per opened contact.
    const key = this.open && node && 'adv_name' in node ? node.public_key : null;
    if (key && this._freshFor !== key) {
      this._freshFor = key;
      this._freshPath = null;
      this._stopPathWatch();
      if (this._pathReset?.key !== key) this._pathReset = null;
      void this._readPath(key);
    } else if (!this.open && this._freshFor) {
      this._freshFor = null;
      this._freshPath = null;
      this._stopPathWatch();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopPathWatch();
  }

  private _renderConversationInfo() {
    const c = this._conversation;
    if (!c || !c.count) return html`<div class="conversation-info">${t('No conversation in Chat yet')}</div>`;
    const last = c.last ? new Date(c.last) : null;
    const when = last && !Number.isNaN(last.getTime())
      ? last.toLocaleString(getLocale(), { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      : '';
    return html`<div class="conversation-info">${tn('{n} message in Chat', '{n} messages in Chat', c.count)}${when
      ? html` · ${t('last {when}', { when })}` : ''}</div>`;
  }
  /** Repeaters and room servers, for naming the hops of a path. */
  @state() private _hopNodes: Contact[] | null = null;
  private _hopNodesLoading = false;

  private _loadHopNodes() {
    if (this._hopNodes || this._hopNodesLoading || !this.hass) return;
    const cached = hopNodesCache;
    if (cached && Date.now() - cached.at < 60_000) {
      this._hopNodes = cached.nodes;
      return;
    }
    this._hopNodesLoading = true;
    void getContacts(this.hass, this.entryId).then((all) => {
      const nodes = all.filter((c) => c.type === 2 || c.type === 3);
      hopNodesCache = { at: Date.now(), nodes };
      this._hopNodes = nodes;
    }).finally(() => { this._hopNodesLoading = false; });
  }

  /** Name a hop: one matching repeater gives its name, several or none keep the hex. */
  private _hopLabel(hex: string) {
    const matches = (this._hopNodes ?? []).filter((n) =>
      (n.public_key || n.pubkey_prefix || '').toLowerCase().startsWith(hex));
    if (matches.length === 1) {
      return html`<span class="hop-name">${matches[0].adv_name || hex}</span> <span class="hop-id">${hex}</span>`;
    }
    if (matches.length > 1) {
      const names = matches.map((m) => m.adv_name).filter(Boolean).join(', ');
      return html`<span class="hop-id" title=${names}>${hex}</span> <span class="hop-ambiguous">${tn('{n} possible repeater', '{n} possible repeaters', matches.length)}</span>`;
    }
    // Not among our contacts: the public map may know it.
    const listed = publicNodes(this.hass, () => this.requestUpdate()).filter((n) => n.key.startsWith(hex));
    if (listed.length === 1) {
      return html`<span class="hop-name">${listed[0].name || hex}</span>
        <span title=${t('From the public map map.meshcore.io, not one of your contacts')}>🌐</span> <span class="hop-id">${hex}</span>`;
    }
    return html`<span class="hop-id">${hex}</span>`;
  }

  private _pathWasReset(c: Contact): boolean {
    return !!this._pathReset && this._pathReset.key === c.public_key && (c.out_path_len ?? -1) < 0;
  }

  /** The contact with the path read from the radio, when there is one. */
  private _withFreshPath(c: Contact): Contact {
    const f = this._freshPath;
    return f && f.key === c.public_key
      ? { ...c, out_path: f.out_path, out_path_len: f.out_path_len, out_path_hash_mode: f.out_path_hash_mode }
      : c;
  }

  /** Read the contact's path from the radio; true when it has one. */
  private async _readPath(key: string): Promise<boolean> {
    if (!this.hass) return false;
    const path = await getContactPath(this.hass, key, this.entryId);
    if (!path || this._freshFor !== key) return false;
    this._freshPath = { key, ...path };
    if (path.out_path_len >= 0) {
      this._pathReset = null;
      return true;
    }
    return false;
  }

  /** After a reset, look for the new path every 5 s for up to 10 minutes. */
  private _watchPath(key: string) {
    this._stopPathWatch();
    let tries = 0;
    this._pathWatch = setInterval(() => {
      if (++tries > 120 || !this.open) {
        this._stopPathWatch();
        return;
      }
      void this._readPath(key).then((found) => { if (found) this._stopPathWatch(); });
    }, 5000);
  }

  private _stopPathWatch() {
    if (this._pathWatch) clearInterval(this._pathWatch);
    this._pathWatch = undefined;
  }

  /** The stored outgoing path split into hops ("a1b2", "c3d4", ...). */
  private _pathHops(c: Contact): string[] {
    const len = c.out_path_len ?? -1;
    const hex = (c.out_path || '').toLowerCase();
    if (len <= 0 || !hex) return [];
    const width = ((c.out_path_hash_mode ?? 0) + 1) * 2;
    const hops: string[] = [];
    for (let i = 0; i < len && (i + 1) * width <= hex.length; i++) {
      hops.push(hex.substring(i * width, (i + 1) * width));
    }
    return hops.length ? hops : [hex];
  }

  private _renderPathSection(contact: Contact) {
    const c = this._withFreshPath(contact);
    const reset = this._pathWasReset(c);
    const len = c.out_path_len ?? -1;
    const flood = reset || len < 0;
    const hops = flood || len <= 0 ? [] : this._pathHops(c);
    if (hops.length) this._loadHopNodes();
    const route = flood ? t('Flood')
      : len === 0 ? t('Direct (neighbour, no repeaters)')
      : html`<ol class="hop-list">${hops.map((h) => html`<li>${this._hopLabel(h)}</li>`)}</ol>`;
    return html`
      <div class="section">
        <div class="section-header">${t('Network')}</div>
        <div class="info-item">
          <div class="info-label">${t('Route (Outgoing Path)')}</div>
          <div class="info-value path-value">${route}</div>
        </div>
        ${!flood && len > 0 ? html`
          <div class="info-item" style="margin-top: 8px;">
            <div class="info-label">${t('Path Length')}</div>
            <div class="info-value">${len} hops</div>
          </div>` : html``}
        ${reset || !flood ? html`
          <div class="path-reset">
            ${reset
              ? html`<span class="path-reset-note">${t('Path reset. The next message is sent by flood and finds a new path.')}</span>`
              : html`<button class="path-reset-btn" ?disabled=${this._pathResetting}
                  title=${t('Forget the stored path; the next message is sent by flood')}
                  @click=${() => this._resetPath(c)}>${this._pathResetting ? t('Resetting…') : t('Reset path')}</button>`}
            ${this._pathResetError ? html`<span class="path-reset-error">${this._pathResetError}</span>` : html``}
          </div>` : html``}
      </div>
    `;
  }

  private async _resetPath(c: Contact) {
    if (!this.hass || !c.public_key || this._pathResetting) return;
    this._pathResetting = true;
    this._pathResetError = '';
    const result = await executeLocal(this.hass, 'reset_path', { key: c.public_key }, this.entryId);
    this._pathResetting = false;
    if (result.success && !/error/i.test(result.response || '')) {
      this._pathReset = { key: c.public_key };
      this._freshFor = c.public_key;
      this._freshPath = { key: c.public_key, out_path: '', out_path_len: -1, out_path_hash_mode: 0 };
      this._watchPath(c.public_key);
    } else {
      this._pathResetError = t('Error: {error}', { error: result.response || '?' });
    }
  }

  private async _copyKey(key: string) {
    try {
      await navigator.clipboard.writeText(key);
    } catch {
      const area = document.createElement('textarea');
      area.value = key;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    this._keyCopied = true;
    setTimeout(() => { this._keyCopied = false; }, 1500);
  }
  private _loginStatePrefix: string | null = null;

  constructor() {
    super();
    // Focus trap + Escape closes the dialog. When a
    // confirm sub-section is showing, Escape backs out of confirm mode
    // rather than closing the whole dialog — matches the Cancel button.
    attachDialogA11y(this, {
      isOpen: () => this.open,
      onEscape: () => {
        if (this._confirming) {
          this._confirming = false;
          this._confirmAction = null;
        } else if (this._showLogin) {
          this._showLogin = false;
          this._canLoadSettings = false;
        } else {
          this._close();
        }
      },
    });
  }

  static styles = [css`
    :host {
      display: contents;
    }

    .dialog-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      width: min(420px, 92vw);
      max-width: 420px;
      max-height: 72vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .dialog-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 19px;
      flex-shrink: 0;
    }

    .dialog-avatar.repeater { background: #ff9800; }
    .dialog-avatar.room-server { background: #9c27b0; }
    .dialog-avatar.sensor { background: #607d8b; }
    .dialog-avatar.client { background: #4caf50; }

    .dialog-title { flex: 1; overflow: hidden; }

    .dialog-name {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dialog-type {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .dialog-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { flex: 1; min-height: 0; overflow-y: auto; padding: 12px; }

    .section { margin-bottom: 16px; }

    .section-header {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .quick-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .quick-actions.full { grid-template-columns: 1fr; }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.warning {
      color: #ff9800;
      border-color: rgba(255, 152, 0, 0.4);
    }

    .action-btn.warning:hover {
      background: #ff9800;
      color: #fff;
      border-color: #ff9800;
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .action-btn:disabled {
      opacity: 0.6;
      cursor: wait;
      pointer-events: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .info-item.wide {
      grid-column: 1 / -1;
    }

    .info-value.key {
      font-size: 12px;
      user-select: all;
    }

    .copy-key {
      float: right;
      padding: 0 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: none;
      color: var(--primary-color, #03a9f4);
      font-size: 11px;
      cursor: pointer;
    }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
    }

    .info-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-top: 4px;
      word-break: break-all;
      font-family: monospace;
    }

    .confirm-section {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      margin-bottom: 12px;
    }

    .confirm-text {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .confirm-description {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-bottom: 10px;
    }

    .confirm-actions { display: flex; gap: 6px; }

    .confirm-btn {
      padding: 6px 10px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-btn.yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-btn.no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

    .action-btn.logged-in svg { color: var(--success-color, #43a047); }

    .conversation-info {
      margin-top: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }

    .path-reset {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
    }
    .path-reset-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .path-reset-btn:hover:not(:disabled) { border-color: var(--primary-color, #03a9f4); }
    .path-reset-btn:disabled { opacity: 0.6; cursor: default; }
    .path-value { overflow-wrap: anywhere; }
    .hop-list { margin: 4px 0 0; padding-left: 22px; }
    .hop-list li { margin: 2px 0; }
    .hop-id { font-family: monospace; font-size: 12px; color: var(--secondary-text-color); }
    .hop-ambiguous { font-size: 12px; color: var(--secondary-text-color); }
    .path-reset-note { font-size: 12px; color: var(--secondary-text-color); }
    .path-reset-error { font-size: 12px; color: var(--error-color, #db4437); }

    .back-btn {
      padding: 6px 0;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 13px;
      cursor: pointer;
    }

  `, modalFrameStyles];

  protected updated() {
    const prefix = this.open && !this.loginOnly && this.node ? this.node.pubkey_prefix ?? null : null;
    if (prefix === this._loginStatePrefix) return;
    this._loginStatePrefix = prefix;
    this._loggedIn = false;
    if (!prefix || !this.hass?.user?.is_admin) return;
    void getRepeaterLoginState(this.hass, prefix, this.entryId).then((state) => {
      if (prefix === this._loginStatePrefix) this._loggedIn = !!state.logged_in_at;
    });
  }

  render() {
    if (!this.open || !this.node) return html``;

    const isContact = 'adv_name' in this.node;
    const isRepeater = isContact ? (this.node as Contact).type === 2 : (this.node as ManagedDevice).type === 'repeater';
    const isRoomServer = isContact && (this.node as Contact).type === 3;
    const isClient = isContact ? (this.node as Contact).type === 1 : (this.node as ManagedDevice).type === 'client';
    const isSensor = isContact && (this.node as Contact).type === 4;

    const name = isContact ? (this.node as Contact).adv_name : (this.node as ManagedDevice).name;
    const prefix = isContact ? (this.node as Contact).pubkey_prefix : (this.node as ManagedDevice).pubkey_prefix;
    // Only contacts stored on the radio can be logged in to, and the backend
    // command is admin-only.
    const canLogin = (isRepeater || isSensor) && !!prefix && !!this.hass?.user?.is_admin
      && (!isContact || (this.node as Contact).added_to_node);

    let avatarSvg = html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`;
    let typeLabel = 'Contact';
    let typeClass = '';

    if (isRepeater) { avatarSvg = html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`; typeLabel = 'Repeater'; typeClass = 'repeater'; }
    else if (isRoomServer) { avatarSvg = html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`; typeLabel = 'Room Server'; typeClass = 'room-server'; }
    else if (isSensor) { avatarSvg = html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`; typeLabel = 'Sensor'; typeClass = 'sensor'; }
    else if (isClient) { avatarSvg = html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`; typeLabel = 'Client'; typeClass = 'client'; }

    return html`
      <div class="dialog-backdrop" @click=${this._close}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${t('Node detail — {name}', { name })}
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="dialog-header">
            <div class=${`dialog-avatar ${typeClass}`}>${avatarSvg}</div>
            <div class="dialog-title">
              <div class="dialog-name">${name}</div>
              <div class="dialog-type">${typeLabel}</div>
            </div>
            <button class="dialog-close" aria-label=${t('Close')} @click=${this._close}>✕</button>
          </div>

          <div class="dialog-content">
            ${this._showLogin || this.loginOnly
              ? html`
                  ${this.loginOnly && isContact ? this._renderPathSection(this.node as Contact) : html``}
                  <div class="section">
                    <div class="section-header">${isSensor ? t('Log in to sensor') : t('Log in to repeater')}</div>
                    <chattx-repeater-login
                      .hass=${this.hass}
                      .prefix=${prefix}
                      .entryId=${this.entryId}
                      .sensor=${isSensor}
                      @repeater-logged-in=${(e: CustomEvent<{ role: string }>) => {
                        // A login without a known role is an older firmware; let
                        // the repeater itself refuse if it isn't an admin session.
                        this._canLoadSettings = e.detail.role !== 'guest';
                        this._loggedIn = e.detail.role === 'admin';
                      }}></chattx-repeater-login>
                  </div>
                  <div class="section">
                    <div class="section-header">${t('Telemetry')}</div>
                    <chattx-repeater-telemetry
                      .hass=${this.hass}
                      .prefix=${prefix}
                      .entryId=${this.entryId}
                      .sensor=${isSensor}
                      .canLoad=${this._canLoadSettings || isSensor}></chattx-repeater-telemetry>
                  </div>
                  ${isSensor ? '' : html`<div class="section">
                    <div class="section-header">${t('Neighbours')}</div>
                    <chattx-repeater-neighbours
                      .hass=${this.hass}
                      .prefix=${prefix}
                      .entryId=${this.entryId}
                      .canLoad=${this._canLoadSettings}></chattx-repeater-neighbours>
                  </div>
                  <div class="section">
                    <div class="section-header">${t('Regions')}</div>
                    <chattx-repeater-regions
                      .hass=${this.hass}
                      .prefix=${prefix}
                      .entryId=${this.entryId}
                      .canEdit=${this._canLoadSettings}></chattx-repeater-regions>
                  </div>
                  <div class="section">
                    <div class="section-header">${t('Settings')}</div>
                    <chattx-repeater-settings
                      .hass=${this.hass}
                      .prefix=${prefix}
                      .entryId=${this.entryId}
                      .canLoad=${this._canLoadSettings}></chattx-repeater-settings>
                  </div>
                  <div class="section">
                    <div class="section-header">${t('Terminal')}</div>
                    <chattx-repeater-terminal
                      .hass=${this.hass}
                      .prefix=${prefix}
                      .entryId=${this.entryId}
                      .canSend=${this._canLoadSettings}></chattx-repeater-terminal>
                  </div>`}
                  ${this.loginOnly ? '' : html`<button class="back-btn" @click=${() => { this._showLogin = false; this._canLoadSettings = false; }}>‹ Back</button>`}
                `
              : this._confirming
              ? html`
                  <div class="confirm-section">
                    <div class="confirm-text">
                      ${this._confirmAction === 'remove-contact' ? t('Remove this as an Added Contact?') : ''}
                    </div>
                    ${this._confirmAction === 'remove-contact' ? html`
                      <div class="confirm-description">${t('Removing the contact will make it a Discovered Contact.')}</div>
                    ` : html``}
                    <div class="confirm-actions">
                      <button class="confirm-btn yes" @click=${() => this._confirmAction_exec()}>${t('Yes')}</button>
                      <button class="confirm-btn no" @click=${() => { this._confirming = false; this._confirmAction = null; }}>${t('Cancel')}</button>
                    </div>
                  </div>
                `
              : html`
                  <div class="section">
                    <div class="section-header">${t('Quick Actions')}</div>
                    <div class="quick-actions ${isContact ? '' : 'full'}">
                      ${canLogin ? html`
                        <button class=${this._loggedIn ? 'action-btn logged-in' : 'action-btn'} @click=${() => { this._showLogin = true; }}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>${this._loggedIn ? t('Logged in') : t('Log in')}</button>
                      ` : html``}
                      ${isContact && ((this.node as Contact).added_to_node || (this._conversation?.count ?? 0) > 0) ? html`
                        <button class="action-btn" @click=${() => this._dispatchEvent('message')}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>${t('Open conversation')}</button>
                      ` : html``}
                      ${prefix && !isClient ? html`
                        <button class="action-btn" @click=${() => this._dispatchEvent('trace')}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 12a2 2 0 104 0 2 2 0 10-4 0zM10 12a2 2 0 104 0 2 2 0 10-4 0zM18 12a2 2 0 104 0 2 2 0 10-4 0zM7 10l3 2-3 2zM15 10l3 2-3 2z"/></svg>${t('Trace')}</button>
                      ` : html``}
                      ${isContact && (this.node as Contact).added_to_node
                        ? html`<button class="action-btn warning"
                            ?disabled=${this.pendingAction === 'remove-contact'}
                            @click=${() => { this._confirming = true; this._confirmAction = 'remove-contact'; }}>${this.pendingAction === 'remove-contact' ? t('Removing…') : t('Remove Contact')}</button>`
                        : isContact ? html`<button class="action-btn"
                            ?disabled=${this.pendingAction === 'add-contact'}
                            @click=${() => this._dispatchEvent('add-contact')}>${this.pendingAction === 'add-contact'
                              ? html`${t('Adding…')}`
                              : html`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${t('Add contact')}`}</button>`
                        : html``}
                    </div>
                    ${isContact ? this._renderConversationInfo() : html``}
                  </div>

                  ${canLogin && isSensor ? html`
                    <div class="section">
                      <div class="section-header">${t('Telemetry')}</div>
                      <chattx-repeater-telemetry
                        .hass=${this.hass}
                        .prefix=${prefix}
                        .entryId=${this.entryId}
                        .sensor=${true}
                        .canLoad=${true}></chattx-repeater-telemetry>
                    </div>
                  ` : html``}

                  <div class="section">
                    <div class="section-header">${t('Information')}</div>
                    <div class="info-grid">
                      <div class="info-item">
                        <div class="info-label">${t('Public Key Prefix')}</div>
                        <div class="info-value">${prefix}</div>
                      </div>
                      <div class="info-item">
                        <div class="info-label">${t('Type')}</div>
                        <div class="info-value">${typeLabel}</div>
                      </div>
                      ${isContact && (this.node as Contact).public_key ? html`
                        <div class="info-item wide">
                          <div class="info-label">
                            ${t('Public key')}
                            <button class="copy-key" @click=${() => this._copyKey((this.node as Contact).public_key)}>
                              ${this._keyCopied ? t('Copied') : t('Copy')}
                            </button>
                          </div>
                          <div class="info-value key">${(this.node as Contact).public_key}</div>
                        </div>
                      ` : html``}
                      ${isContact ? html`
                        <div class="info-item">
                          <div class="info-label">${t('Last Advert')}</div>
                          <div class="info-value">
                            ${(this.node as Contact).last_advert
                              ? new Date((this.node as Contact).last_advert * 1000).toLocaleString(getLocale())
                              : t('Unknown')}
                          </div>
                        </div>
                        <div class="info-item">
                          <div class="info-label">${t('Status')}</div>
                          <div class="info-value">${(this.node as Contact).added_to_node ? 'Added Contact' : 'Discovered Contact'}</div>
                        </div>
                      ` : html``}
                    </div>
                  </div>

                  ${isContact && ((this.node as Contact).adv_lat !== 0 || (this.node as Contact).adv_lon !== 0)
                    ? html`
                        <div class="section">
                          <div class="section-header">${t('Location')}</div>
                          <div class="info-grid">
                            <div class="info-item">
                              <div class="info-label">${t('Latitude')}</div>
                              <div class="info-value">${(this.node as Contact).adv_lat.toFixed(6)}</div>
                            </div>
                            <div class="info-item">
                              <div class="info-label">${t('Longitude')}</div>
                              <div class="info-value">${(this.node as Contact).adv_lon.toFixed(6)}</div>
                            </div>
                          </div>
                        </div>
                      ` : html``}

                  ${isContact ? this._renderPathSection(this.node as Contact) : html``}

                `}
          </div>
        </div>
      </div>
    `;
  }

  private _close() {
    this.open = false;
    this._pathResetError = '';
    this._showLogin = false;
    this._canLoadSettings = false;
    this._confirming = false;
    this._confirmAction = null;
    this.dispatchEvent(
      new CustomEvent('node-detail-closed', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _dispatchEvent(action: string) {
    this.dispatchEvent(
      new CustomEvent(`node-${action}`, {
        detail: { node: this.node },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _confirmAction_exec() {
    if (this._confirmAction) {
      this._dispatchEvent(this._confirmAction);
    }
    this._close();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-node-detail-dialog': NodeDetailDialog;
  }
}
