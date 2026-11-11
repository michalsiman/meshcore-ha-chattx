import { getLocale, t, tn } from '../i18n';
import { regionInfo } from '../utils/region-label';
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ChatMessage, MessageGroup, DeliveryStatus, LateEcho, HomeAssistant } from '../types';
import './path-map';
import { hasMapPath } from './path-map';
import { fewestHops, formatHopLabel, formatTimestamp } from '../chat/message-parser';
import { cachedKnownNodes, edgeDistance, formatDistance, shortestPath } from '../utils/path-route';
import { closeStep, openStep } from '../utils/back-stack';
import { attachDialogA11y } from '../utils/dialog-a11y';
import { formatHeardReply } from '../utils/heard-reply';
import { imageLinks, splitLinks } from '../utils/links';
import { loadImagePreviews } from '../utils/image-previews';
import { imageFailed, markImageFailed, proxiedImage } from '../utils/image-proxy';
import './image-viewer';

/**
 * Generate a deterministic color from a string (e.g., pubkey prefix).
 */
function senderColorFromPrefix(prefix: string): string {
  let hash = 0;
  for (let i = 0; i < prefix.length; i++) {
    hash = ((hash << 5) - hash) + prefix.charCodeAt(i);
  }
  const colors = ['#e57373', '#64b5f6', '#81c784', '#ffb74d', '#ba68c8', '#4dd0e1', '#fff176', '#a1887f'];
  return colors[Math.abs(hash) % colors.length];
}

@customElement('chattx-message-bubble')
export class MessageBubble extends LitElement {
  @property({ type: Object }) group?: MessageGroup;
  @property({ type: Object }) message?: ChatMessage;
  @property({ type: String }) timestampFormat: 'relative' | 'time' | 'datetime' = 'relative';

  @state() private _selectedMessage: ChatMessage | null = null;
  /** Needed for the route map: contact positions and our own position. */
  // Only the first value counts: the map reads states when it opens, and
  // re-rendering every bubble on each state change in Home Assistant would be wasted.
  @property({ attribute: false, hasChanged: (value: unknown, old: unknown) => !old && !!value }) hass?: HomeAssistant;
  @property({ type: String }) nodeName = '';
  @state() private _showMap = false;
  /** Contacts shared in this message: adding in progress, added, already a contact, failed. */
  @state() private _sharedContacts: Record<string, 'busy' | 'added' | 'exists' | 'error'> = {};
  @state() private _copiedKey = '';
  /** The image shown large over the conversation. */
  @state() private _viewer: { src: string; url: string } | null = null;

  constructor() {
    super();
    // Focus trap + Escape closes the message-action sheet.
    attachDialogA11y(this, {
      isOpen: () => this._selectedMessage !== null,
      onEscape: () => this._closeDialog(),
      getScope: () => this.shadowRoot?.querySelector('.message-dialog'),
    });
  }

  static styles = css`
    :host {
      display: block;
    }

    .message-group {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }

    .message-group.outgoing {
      align-items: flex-end;
    }

    .message-group.incoming {
      align-items: flex-start;
    }

    .message-group.system {
      align-items: center;
    }

    .sender {
      font-size: 12px;
      font-weight: 600;
      color: var(--sender-color, var(--primary-color, #03a9f4));
      margin-bottom: 2px;
      padding: 0 4px;
      max-width: 85%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-group.outgoing .sender {
      display: none;
    }

    .bubble {
      max-width: 85%;
      padding: 8px 12px;
      border-radius: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      position: relative;
      cursor: pointer;
      transition: opacity 0.15s;
      line-height: 1.4;
      font-size: 14px;
    }

    .bubble:active {
      opacity: 0.7;
    }

    .bubble.search-highlight {
      animation: highlight-flash 2.5s ease-out;
    }

    @keyframes highlight-flash {
      0%, 20% {
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.6);
      }
      100% {
        box-shadow: 0 0 0 3px transparent;
      }
    }

    .bubble + .bubble {
      margin-top: 2px;
    }

    .bubble.incoming {
      background: var(--bubble-incoming-bg, var(--secondary-background-color, #e8e8e8));
      color: var(--bubble-incoming-text, var(--primary-text-color, #212121));
      border-bottom-left-radius: 4px;
    }

    .bubble.incoming:first-of-type {
      border-top-left-radius: 16px;
    }

    .bubble.outgoing {
      background: var(--bubble-outgoing-bg, var(--primary-color, #03a9f4));
      color: var(--bubble-outgoing-text, #fff);
      border-bottom-right-radius: 4px;
    }

    .bubble.outgoing:first-of-type {
      border-top-right-radius: 16px;
    }

    .bubble.system {
      background: transparent;
      color: var(--system-msg-color, var(--secondary-text-color, #727272));
      font-style: italic;
      font-size: 13px;
      text-align: center;
      cursor: default;
      padding: 4px 12px;
    }

    .message-text {
      white-space: pre-wrap;
    }

    .shared-contact {
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
      padding: 4px 8px;
      margin: 2px 0;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      background: rgba(127, 127, 127, 0.08);
      vertical-align: middle;
    }
    .shared-contact-type {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .shared-contact-add {
      font: inherit;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid var(--primary-color, #03a9f4);
      background: transparent;
      color: var(--primary-color, #03a9f4);
      cursor: pointer;
    }
    .shared-contact-add:disabled {
      border-color: var(--divider-color, #888);
      color: var(--secondary-text-color);
      cursor: default;
    }
    .message-text .mention {
      background: var(--mention-bg, rgba(3, 169, 244, 0.15));
      color: var(--mention-text, var(--primary-color, #03a9f4));
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 4px;
    }

    .message-text .link {
      color: var(--primary-color, #03a9f4);
      text-decoration: underline;
      word-break: break-all;
    }

    .bubble.outgoing .message-text .link {
      color: #fff;
    }

    .bubble.outgoing .message-text .mention {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .timestamp {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      margin-top: 2px;
      padding: 0 4px;
    }

    .bubble.outgoing .timestamp {
      color: rgba(255, 255, 255, 0.6);
    }

    .bubble.incoming .timestamp {
      color: var(--secondary-text-color, #727272);
    }

    .message-group.outgoing .timestamp {
      text-align: right;
    }

    .route-info {
      font-size: 10px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      padding: 2px 4px;
      font-family: monospace;
    }

    .route-info-inline {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      font-family: monospace;
      margin-top: 2px;
      padding: 0 4px;
      opacity: 0.7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delivery-status {
      color: inherit;
    }

    .flood-scope {
      color: inherit;
      opacity: 0.85;
      white-space: nowrap;
    }

    .message-images {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 6px;
    }

    .image-box {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 140px;
      height: 140px;
      padding: 8px;
      border-radius: 8px;
      background: rgba(127, 127, 127, 0.2);
      font-size: 11px;
      text-align: center;
      opacity: 0.8;
    }

    .image-open {
      padding: 0;
      border: none;
      background: none;
      cursor: zoom-in;
    }

    .message-images img {
      display: block;
      height: 140px;
      max-width: 220px;
      object-fit: cover;
      border-radius: 8px;
      background: rgba(127, 127, 127, 0.2);
    }

    .message-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-dialog {
      background: #333;
      border: 2px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      min-width: 240px;
      max-width: 300px;
      /* A dialog taller than the screen (the route map on a phone) scrolls
         inside instead of hiding its top and bottom. */
      max-height: calc(100dvh - 24px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      z-index: 21;
    }

    .message-dialog-top {
      position: sticky;
      top: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      background: #333;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .message-dialog-top .message-dialog-preview {
      flex: 1;
      min-width: 0;
      /* Fill the bar, so the close button sits at the right edge also in
         the wider dialog with the map. */
      max-width: none;
      border-bottom: none;
    }

    .message-dialog-close {
      flex: none;
      width: 44px;
      height: 44px;
      border: none;
      background: transparent;
      color: var(--primary-text-color, #fff);
      font-size: 20px;
      cursor: pointer;
    }

    .message-dialog-preview {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 280px;
    }

    .message-dialog-action {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      min-height: 48px;
      transition: background 0.15s;
    }

    .message-dialog-action:hover,
    .message-dialog-action:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }

    .message-dialog-action + .message-dialog-action {
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .message-dialog.with-map {
      max-width: min(560px, 94vw);
      width: min(560px, 94vw);
    }

    .sender-key {
      margin-top: 4px;
      font-family: monospace;
      font-size: 11px;
      word-break: break-all;
      cursor: pointer;
    }
    .sender-key.unknown {
      font-family: inherit;
      cursor: default;
      opacity: 0.8;
    }
    .copy-hint {
      margin-left: 6px;
      font-family: sans-serif;
      color: var(--primary-color, #03a9f4);
    }

    .message-dialog-route {
      padding: 12px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      font-family: monospace;
      word-break: break-all;
      transition: background 0.15s;
    }

    .message-dialog-route:hover,
    .message-dialog-route:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }
  `;

  render() {
    if (this.group) {
      return html`
        ${this._renderGroup()}
        ${this._selectedMessage ? this._renderMessageDialog(this._selectedMessage) : html``}
        ${this._viewer
          ? html`<chattx-image-viewer .src=${this._viewer.src} .original=${this._viewer.url}
              @close=${() => { this._viewer = null; }}></chattx-image-viewer>`
          : html``}
      `;
    }
    return html``;
  }

  private _renderGroup() {
    if (!this.group) return html``;

    const g = this.group;
    const classes = {
      'message-group': true,
      incoming: !g.isOutgoing && !g.isSystem,
      outgoing: g.isOutgoing,
      system: g.isSystem,
    };

    // Determine sender color
    let senderColor: string | undefined;
    if (g.messages.length > 0) {
      const firstMsg = g.messages[0];
      senderColor = firstMsg.senderColor || senderColorFromPrefix(g.sender);
    }

    return html`
      <div class=${this._classMap(classes)} style=${senderColor ? `--sender-color: ${senderColor}` : ''}>
        ${!g.isSystem && !g.isOutgoing
          ? html`<div class="sender">${g.sender}</div>`
          : html``}
        ${g.messages.map((msg) => this._renderBubble(msg))}
      </div>
    `;
  }

  private _renderBubble(msg: ChatMessage) {
    const bubbleClasses = {
      bubble: true,
      incoming: !msg.isOutgoing && !msg.isSystem,
      outgoing: msg.isOutgoing,
      system: msg.isSystem,
    };

    const statusLabel = msg.isOutgoing && msg.deliveryStatus ? this._getStatusLabel(msg.deliveryStatus) : '';
    const hopLabel = !msg.isOutgoing && !msg.isSystem ? formatHopLabel(msg.rxLogData) : '';
    // Straight-line distance between the first and the last repeater, when known.
    const edge = !msg.isOutgoing && !msg.isSystem && this.hass
      ? edgeDistance(shortestPath(msg.rxLogData), cachedKnownNodes(this.hass.states as unknown as Record<string, { entity_id: string; attributes: Record<string, unknown> }>))
      : null;
    const ts = formatTimestamp(msg.timestamp, this.timestampFormat) + (hopLabel ? ` · ${hopLabel}` : '')
      + (edge ? ` · ${formatDistance(edge)}` : '')
      + (msg.resends ? ` · ×${msg.resends.length + 1}` : '');
    // Inbound region scope — incoming bubbles only. "*" → "🌐 all regions",
    // a region name renders verbatim, absent renders nothing. The outbound
    // scope is shown by the thread-header chip, so outgoing is unaffected.
    const scopeLabel = !msg.isOutgoing && !msg.isSystem ? regionInfo(msg.floodScope, msg.regionScope).short : '';

    return html`
      <div class=${this._classMap(bubbleClasses)} data-msg-id=${msg.id} @click=${(e: Event) => { e.stopPropagation(); this._openDialog(msg); }}>
        <div class="message-text">${this._renderTextWithMentions(msg.text, msg.mentions)}</div>
        ${this._renderImages(msg.text)}
        <div class="timestamp">${statusLabel ? html`<span class="delivery-status">${statusLabel}</span> · ` : ''}${ts}${scopeLabel ? html` · <span class="flood-scope">${scopeLabel}</span>` : ''}</div>
      </div>
    `;
  }

  /**
   * Get inline delivery status label for the timestamp line.
   * Shows "Repeated" for messages heard by repeaters, "No repeats" otherwise.
   * Full details (repeater count, RTT) are in the click-to-open dialog.
   */
  private _getStatusLabel(deliveryStatus: DeliveryStatus): string {
    const status = deliveryStatus.status;
    const repeats = deliveryStatus.repeaterCount ?? 0;
    // A direct message is confirmed by the recipient (ACK); repeats are a
    // channel matter. Its automatic retries are counted.
    if (deliveryStatus.ackReceived !== undefined) {
      const tries = (deliveryStatus.attempts ?? 1) > 1
        ? ` · ${tn('{n} attempt', '{n} attempts', deliveryStatus.attempts!)}` : '';
      if (status === 'pending' || status === 'waiting') return t('Waiting...');
      if (status === 'failed') return t('Failed') + tries;
      return (deliveryStatus.ackReceived || status === 'delivered' ? t('Delivered') : t('Not confirmed')) + tries;
    }

    switch (status) {
      case 'pending':
      case 'waiting':
        return t('Waiting...');
      case 'sent':
        return repeats > 0 ? t('Repeated') : t('Unheard');
      case 'delivered':
        return t('Delivered');
      case 'failed':
        return t('Failed');
      case 'unconfirmed':
      default:
        return t('Sent');
    }
  }

  private _renderTextWithMentions(text: string, mentions: string[]) {
    if (mentions.length === 0) {
      // No mentions to highlight. Lit auto-escapes string interpolations
      // in html`...` templates; web addresses become links.
      return this._renderRich(text);
    }

    // Build a single regex matching either @[Name] or @Name forms for any
    // known mention. Escape regex special chars in mention names so a name
    // containing parentheses or other regex metacharacters can't break the
    // pattern or inject capture groups.
    const escaped = mentions.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(
      `@\\[(${escaped.join('|')})\\]|@(${escaped.join('|')})\\b`,
      'g',
    );

    const parts: unknown[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = pattern.exec(text)) !== null) {
      if (m.index > last) parts.push(this._renderRich(text.slice(last, m.index)));
      const name = m[1] ?? m[2];
      parts.push(html`<span class="mention">@${name}</span>`);
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push(this._renderRich(text.slice(last)));
    return parts;
  }

  /**
   * Small previews of image links (catbox.moe uploads and any other https
   * address of an image), loaded through Home Assistant: the browser never
   * contacts the image's server. A tap shows the image large over the
   * conversation (chattx-image-viewer). A fixed height keeps the conversation from
   * jumping while they load; one that fails to load is hidden. A tap opens
   * the image in the browser, not the message dialog.
   */
  private _renderImages(text: string) {
    if (!loadImagePreviews() || !this.hass) return html``;
    const urls = imageLinks(text);
    if (urls.length === 0) return html``;
    const hass = this.hass;
    // Every state has the same size, so the conversation never jumps.
    return html`<div class="message-images">
      ${urls.map((url) => {
        const failed = html`<span class="image-box image-failed" title=${url}>${t('The image could not be downloaded.')}</span>`;
        if (imageFailed(url)) return failed;
        const src = proxiedImage(hass, url, () => this.requestUpdate());
        if (src === undefined) return html`<span class="image-box"></span>`;
        if (src === null) {
          markImageFailed(url);
          return failed;
        }
        return html`<button class="image-open" aria-label=${t('Image')}
            @click=${(e: Event) => { e.stopPropagation(); this._viewer = { src, url }; }}>
            <img src=${src} alt="" loading="lazy"
              @error=${() => { markImageFailed(url); this.requestUpdate(); }} />
          </button>`;
      })}
    </div>`;
  }

  /** Text with contacts shared by the MeshCore apps (<key:type:name>) as cards, and links. */
  private _renderRich(text: string) {
    const share = /<([0-9a-fA-F]{64}):(\d{1,2}):([^<>\n]{1,64})>/g;
    if (!share.test(text)) return this._renderLinks(text);
    share.lastIndex = 0;
    const parts: unknown[] = [];
    let last = 0;
    for (const m of text.matchAll(share)) {
      const start = m.index ?? 0;
      if (start > last) parts.push(this._renderLinks(text.slice(last, start)));
      parts.push(this._renderSharedContact(m[1].toLowerCase(), Number(m[2]), m[3].trim()));
      last = start + m[0].length;
    }
    if (last < text.length) parts.push(this._renderLinks(text.slice(last)));
    return parts;
  }

  private _renderSharedContact(key: string, type: number, name: string) {
    const typeLabel = ({ 1: 'Companion', 2: 'Repeater', 3: 'Room server', 4: 'Sensor' } as Record<number, string>)[type] ?? 'Contact';
    const state = this._sharedContacts[key];
    const label = state === 'busy' ? t('Adding…')
      : state === 'added' ? t('Contact added')
      : state === 'exists' ? t('Already a contact')
      : state === 'error' ? t('Adding failed, try again')
      : t('Add contact');
    return html`<span class="shared-contact" title=${key}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      <b>${name}</b><span class="shared-contact-type">${t(typeLabel)} · ${key.slice(0, 6)}</span>
      ${this.hass?.user?.is_admin ? html`<button class="shared-contact-add"
        ?disabled=${state === 'busy' || state === 'added' || state === 'exists'}
        @click=${(e: Event) => { e.stopPropagation(); void this._addSharedContact(key, type, name); }}>${label}</button>` : ''}
    </span>`;
  }

  /** Add a contact shared in a message; says so when it is a contact already. */
  private async _addSharedContact(key: string, type: number, name: string) {
    if (!this.hass) return;
    const set = (state: 'busy' | 'added' | 'exists' | 'error') => {
      this._sharedContacts = { ...this._sharedContacts, [key]: state };
    };
    set('busy');
    const text = `<${key}:${type}:${name}>`;
    try {
      const preview = await this.hass.callWS<{ already_added: boolean }>({ type: 'meshcore_chattx/import_contact', text, dry_run: true });
      if (preview.already_added) {
        set('exists');
        return;
      }
      await this.hass.callWS({ type: 'meshcore_chattx/import_contact', text });
      set('added');
      this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
    } catch (err) {
      set((err as { code?: string })?.code === 'already_added' ? 'exists' : 'error');
    }
  }

  /**
   * Web addresses as links that open in a new window, which the Home
   * Assistant app hands to the default browser. A click on a link does not
   * open the message dialog.
   */
  private _renderLinks(text: string) {
    const parts = splitLinks(text);
    if (parts.length === 1 && 'text' in parts[0]) return text;
    return parts.map((p) => ('url' in p
      ? html`<a class="link" href=${p.url} target="_blank" rel="noopener noreferrer"
          @click=${(e: Event) => e.stopPropagation()}>${p.label}</a>`
      : p.text));
  }

  // ── Phone back gesture ──────────────────────────────────────────────
  // The dialog gets its history step from attachDialogA11y; the map is
  // one more step above it, so the back gesture first hides the map,
  // then closes the dialog (see utils/back-stack.ts).

  private _mapStep: string | null = null;

  private _openDialog(msg: ChatMessage) {
    this._selectedMessage = msg;
  }

  private _toggleMap() {
    if (!this._showMap) {
      this._showMap = true;
      this._mapStep = openStep(() => {
        this._mapStep = null;
        this._showMap = false;
      });
    } else {
      this._hideMap();
    }
  }

  private _hideMap() {
    closeStep(this._mapStep);
    this._mapStep = null;
    this._showMap = false;
  }

  private _closeDialog() {
    this._hideMap();
    this._selectedMessage = null;
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('_selectedMessage') && this._showMap) this._hideMap();
  }

  private _renderMessageDialog(msg: ChatMessage) {
    const hasRoute = msg.rxLogData && msg.rxLogData.length > 0;
    const knownForRoute = this.hass
      ? cachedKnownNodes(this.hass.states as unknown as Record<string, { entity_id: string; attributes: Record<string, unknown> }>)
      : [];
    const routeText = hasRoute
      ? msg.rxLogData!
          .map((e) => {
            const nodes = e.path_nodes as string[] | undefined;
            const hops = e.hop_count as number | undefined;
            const snr = e.snr as number | undefined;
            const rssi = e.rssi as number | undefined;
            const parts: string[] = [];
            if (nodes && nodes.length > 0) {
              parts.push(nodes.map((n: string) => n.substring(0, 4).toUpperCase()).join(' > '));
            } else if (hops !== undefined) {
              parts.push(`${hops} hop${hops !== 1 ? 's' : ''}`);
            } else {
              // No path_nodes / hop_count → packet was heard directly by
              // the local node. Label as "0 hops" rather than "direct" so
              // it isn't confusable with the "direct message" message-type
              // for channel broadcasts that happened to be in radio range.
              parts.push('0 hops');
            }
            if (snr !== undefined) parts.push(`SNR: ${snr}`);
            if (rssi !== undefined) parts.push(`RSSI: ${rssi}`);
            // Distances between the repeaters, when their positions are known.
            const distance = nodes ? edgeDistance(nodes, knownForRoute) : null;
            if (distance) parts.push(formatDistance(distance));
            return parts.join(' · ');
          })
          .join(' | ')
      : '';

    const fullDateTime = msg.timestamp.toLocaleString(getLocale(), {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    });
    const hops = fewestHops(msg.rxLogData);
    const distance = this.hass
      ? edgeDistance(shortestPath(msg.rxLogData), cachedKnownNodes(this.hass.states as unknown as Record<string, { entity_id: string; attributes: Record<string, unknown> }>))
      : null;
    const heardText = hops === null ? '' : formatHeardReply(hops, distance);
    const footerStyle = 'padding: 8px 16px; font-size: 12px; color: var(--secondary-text-color); border-top: 1px solid var(--divider-color, #e0e0e0);';

    return html`
      <div class="message-dialog-overlay" @click=${() => this._closeDialog()}>
        <div class="message-dialog ${this._showMap ? 'with-map' : ''}"
             role="dialog" aria-modal="true" aria-label=${t('Message actions')}
             @click=${(e: Event) => e.stopPropagation()}>
          <div class="message-dialog-top">
            <div class="message-dialog-preview">${msg.text}</div>
            <button class="message-dialog-close" aria-label=${t('Close')} title=${t('Close')}
              @click=${() => this._closeDialog()}>✕</button>
          </div>
          <button class="message-dialog-action" @click=${() => this._copyText(msg.text)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>${t('Copy Text')}
          </button>
          ${msg.isOutgoing && !msg.id.startsWith('optimistic_')
            ? html`
                <button class="message-dialog-action" @click=${() => this._resend(msg.text)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>${t('Send again')}
                </button>
              `
            : html``}
          ${!msg.isOutgoing && !msg.isSystem
            ? html`
                <button class="message-dialog-action" @click=${() => this._replyToSender(msg.sender)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>${t('Reply')}
                </button>
                ${heardText
                  ? html`
                      <button class="message-dialog-action" @click=${() => this._replyToSender(msg.sender, heardText)}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>${heardText}
                      </button>
                    `
                  : html``}
              `
            : html``}
          ${hasRoute
            ? html`
                <div class="message-dialog-route" @click=${() => this._copyText(routeText)}>
                  ${t('Route: {route}', { route: routeText })}
                </div>
              `
            : html``}
          ${this.hass && hasMapPath(msg)
            ? html`
                <button class="message-dialog-action" @click=${() => this._toggleMap()}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>${this._showMap ? t('Hide map') : t('Show route on map')}
                </button>
                ${this._showMap
                  ? html`<chattx-path-map .hass=${this.hass} .message=${msg} .nodeName=${this.nodeName}
                      @chattx-send-image=${() => this._closeDialog()}></chattx-path-map>`
                  : html``}
              `
            : html``}
          ${!msg.isOutgoing && !msg.isSystem ? this._renderSender(msg, footerStyle) : html``}
          <div style=${footerStyle}>
            ${msg.isOutgoing ? t('Sent') : t('Received')}: ${fullDateTime}
          </div>
          ${!msg.isOutgoing && !msg.isSystem && regionInfo(msg.floodScope, msg.regionScope).long
            ? html`<div style=${footerStyle}>${regionInfo(msg.floodScope, msg.regionScope).long}</div>`
            : html``}
          ${msg.isOutgoing && msg.deliveryStatus
            ? html`
                <div style=${footerStyle}>
                  ${msg.deliveryStatus.ackReceived !== undefined
                    ? (msg.deliveryStatus.ackReceived
                      ? t('ACK received')
                      : t('The recipient has not confirmed the message (no ACK).'))
                      + ((msg.deliveryStatus.attempts ?? 1) > 1
                        ? ` · ${t('Sent {n} times, retried automatically', { n: msg.deliveryStatus.attempts ?? 1 })}` : '')
                    : (msg.deliveryStatus.repeaterCount ?? 0) > 0
                      ? tn('{n} repeater responded', '{n} repeaters responded', msg.deliveryStatus.repeaterCount ?? 0)
                      : t('No repeaters responded')}${msg.deliveryStatus.roundTripMs ? ` · ${msg.deliveryStatus.roundTripMs}ms RTT` : ''}
                </div>
              `
            : html``}
          ${!msg.isOutgoing && msg.resends
            ? msg.resends.map((copy) => html`
                <div class="message-dialog-route" @click=${() => this._copyText(resendText(msg, copy))}>
                  ${resendText(msg, copy)}
                </div>
              `)
            : html``}
          ${msg.isOutgoing && msg.lateEchoes
            ? msg.lateEchoes.map((echo) => html`
                <div class="message-dialog-route" @click=${() => this._copyText(lateEchoText(msg, echo))}>
                  ${lateEchoText(msg, echo)}
                </div>
              `)
            : html``}
        </div>
      </div>
    `;
  }

  /**
   * The sender's name and public key. A channel message carries only the
   * name, so the key is looked up among the contacts by name; several
   * contacts with that name are all listed.
   */
  private _renderSender(msg: ChatMessage, footerStyle: string) {
    const contacts = this.hass ? senderKeys(this.hass.states, msg.sender) : [];
    return html`<div style=${footerStyle}>
      ${t('Sender')}: <b>${msg.sender}</b>
      ${contacts.length === 0
        ? html`<div class="sender-key unknown">${t('Public key unknown: the sender is not among the contacts.')}</div>`
        : contacts.map((key) => html`<div class="sender-key" title=${t('Copy')}
            @click=${() => { void this._copyText(key); this._copiedKey = key; setTimeout(() => { this._copiedKey = ''; }, 1500); }}>
            ${key} <span class="copy-hint">${this._copiedKey === key ? t('Copied') : t('Copy')}</span>
          </div>`)}
      ${contacts.length > 1 ? html`<div class="sender-key unknown">${t('Several contacts have this name.')}</div>` : html``}
    </div>`;
  }

  private async _copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this._closeDialog();
  }

  /** Send an own message again to the same conversation (the chat page sends it). */
  private _resend(text: string) {
    this.dispatchEvent(new CustomEvent('resend-message', { detail: { text }, bubbles: true, composed: true }));
    this._closeDialog();
  }

  /** Hand the composer a reply to the sender; sending stays a separate step. */
  private _replyToSender(sender: string, text = '') {
    this.dispatchEvent(
      new CustomEvent('reply-to-sender', {
        detail: { mention: text ? `@[${sender}] ${text} ` : `@[${sender}] ` },
        bubbles: true,
        composed: true,
      }),
    );
    this._closeDialog();
  }

  private _classMap(obj: Record<string, boolean>): string {
    return Object.entries(obj)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(' ');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-message-bubble': MessageBubble;
  }
}

/**
 * One line for a late copy of an own message: after how long it came back
 * and through which repeaters. It is the same packet looping through the
 * mesh, not a new message.
 */
export function lateEchoText(msg: ChatMessage, echo: LateEcho): string {
  const received = new Date(echo.received_at);
  const minutes = Math.max(0, Math.round((received.getTime() - msg.timestamp.getTime()) / 60000));
  const head = typeof echo.hop_count === 'number'
    ? t('Came back through the mesh after {minutes} min, {hops} hops', { minutes, hops: echo.hop_count })
    : t('Came back through the mesh after {minutes} min', { minutes });
  const path = echo.path_nodes?.length ? ` · ${echo.path_nodes.map((n) => n.substring(0, 4).toUpperCase()).join(' > ')}` : '';
  return head + path;
}

/**
 * One line for a copy the sender sent again: how much later and how it
 * came. Shown in the dialog of the first copy, which the chat shows once.
 */
export function resendText(msg: ChatMessage, copy: LateEcho): string {
  const seconds = Math.max(0, Math.round((new Date(copy.received_at).getTime() - msg.timestamp.getTime()) / 1000));
  const head = typeof copy.hop_count === 'number'
    ? t('Sent again by the sender after {seconds} s, {hops} hops', { seconds, hops: copy.hop_count })
    : t('Sent again by the sender after {seconds} s', { seconds });
  const path = copy.path_nodes?.length ? ` · ${copy.path_nodes.map((n) => n.substring(0, 4).toUpperCase()).join(' > ')}` : '';
  return head + path;
}

/** Public keys of the contacts named `name`, from the core integration's contact sensors. */
export function senderKeys(states: HomeAssistant['states'], name: string): string[] {
  const keys: string[] = [];
  for (const [entityId, state] of Object.entries(states)) {
    if (!entityId.startsWith('binary_sensor.meshcore_') || !entityId.endsWith('_contact')) continue;
    const a = state.attributes as Record<string, unknown>;
    if (a.adv_name === name && typeof a.public_key === 'string' && a.public_key) keys.push(a.public_key.toLowerCase());
  }
  return keys;
}
