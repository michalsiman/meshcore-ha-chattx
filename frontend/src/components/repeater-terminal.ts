import { t } from '../i18n';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { sendRepeaterCommand } from '../api';

interface TerminalLine {
  kind: 'command' | 'reply' | 'note';
  text: string;
}

const MAX_LINES = 200;

/** Send any CLI command to a repeater and read its answer. */
@customElement('chattx-repeater-terminal')
export class RepeaterTerminal extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: String }) prefix = '';
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) canSend = false;

  @state() private _lines: TerminalLine[] = [];
  @state() private _input = '';
  @state() private _busy = false;
  @query('.log') private _log?: HTMLElement;
  @query('input') private _inputEl?: HTMLInputElement;

  /** Sent commands, newest last, for recalling with the arrow keys. */
  private _history: string[] = [];
  private _historyIndex = 0;

  static styles = css`
    .log {
      height: 180px;
      margin-bottom: 8px;
      padding: 8px;
      overflow-y: auto;
      border-radius: 4px;
      background: #1e1e1e;
      color: #d4d4d4;
      font-family: monospace;
      font-size: 12px;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }
    .command { color: #4fc3f7; }
    .note { color: #9e9e9e; font-style: italic; }
    form { display: flex; gap: 8px; }
    input {
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-family: monospace;
      font-size: 13px;
    }
    button {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
  `;

  protected willUpdate(changed: Map<string, unknown>) {
    if (changed.has('prefix')) {
      this._lines = [];
      this._history = [];
      this._historyIndex = 0;
    }
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('_lines') && this._log) this._log.scrollTop = this._log.scrollHeight;
  }

  private _add(line: TerminalLine) {
    this._lines = [...this._lines, line].slice(-MAX_LINES);
  }

  private async _submit(e: Event) {
    e.preventDefault();
    const command = this._input.trim();
    if (!this.hass || !command || this._busy || !this.canSend) return;
    const prefix = this.prefix;
    this._input = '';
    this._history = [...this._history, command];
    this._historyIndex = this._history.length;
    this._add({ kind: 'command', text: `$ ${command}` });
    this._busy = true;
    const result = await sendRepeaterCommand(this.hass, prefix, command, this.entryId);
    this._busy = false;
    if (prefix !== this.prefix) return;
    if (result.success) {
      this._add({ kind: 'reply', text: result.reply ?? '' });
    } else if (result.reason === 'no_response') {
      this._add({ kind: 'note', text: t('No reply. The command may still have run, and it is not repeated automatically.') });
    } else if (result.reason === 'rate_limited') {
      this._add({ kind: 'note', text: t('Not sent because of the mesh traffic limit. Try again in {seconds} s.', { seconds: result.retry_after ?? 0 }) });
    } else {
      this._add({ kind: 'note', text: result.message ?? (t('Sending failed.')) });
    }
    await this.updateComplete;
    this._inputEl?.focus();
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    e.preventDefault();
    const step = e.key === 'ArrowUp' ? -1 : 1;
    this._historyIndex = Math.min(this._history.length, Math.max(0, this._historyIndex + step));
    this._input = this._history[this._historyIndex] ?? '';
  }

  render() {
    const placeholder = this.canSend
      ? (t('Command, e.g. get tx'))
      : (t('Log in as administrator first'));
    return html`
      <div class="log" role="log" aria-label=${t('Repeater replies')}>${this._lines.map(
        (line) => html`<div class=${line.kind}>${line.text}</div>`,
      )}${this._busy ? html`<div class="note">${t('Waiting for a reply…')}</div>` : ''}</div>
      <form @submit=${this._submit}>
        <input
          aria-label=${t('Repeater command')}
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          maxlength="160"
          placeholder=${placeholder}
          .value=${this._input}
          ?disabled=${!this.canSend}
          @input=${(e: Event) => { this._input = (e.target as HTMLInputElement).value; }}
          @keydown=${this._onKeydown} />
        <button type="submit" ?disabled=${!this.canSend || this._busy || !this._input.trim()}>${t('Send')}</button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chattx-repeater-terminal': RepeaterTerminal;
  }
}
