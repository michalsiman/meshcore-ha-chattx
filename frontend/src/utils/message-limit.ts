/** Firmware MAX_TEXT_LEN: the limit is in UTF-8 bytes, not characters. */
const MAX_MESSAGE_BYTES = 160;

/**
 * A channel message longer than this still goes out, but its repeats never
 * reach Home Assistant: the companion pushes a heard packet only when it fits
 * a 176-byte frame, and "<sender>: <text>" over 155 bytes is encrypted into
 * one more 16-byte block (176 instead of 160). It would always show as not
 * heard, so a longer channel text is split instead.
 */
const MAX_CHANNEL_MESSAGE_BYTES = 155;

function limit(channelSender: string | null): number {
  return channelSender === null ? MAX_MESSAGE_BYTES : MAX_CHANNEL_MESSAGE_BYTES;
}

/** A long text is sent in at most this many messages. */
export const MAX_MESSAGE_PARTS = 8;

const encoder = new TextEncoder();

function bytes(text: string): number {
  return encoder.encode(text).length;
}

function prefixBytes(channelSender: string | null): number {
  return channelSender === null ? 0 : bytes(`${channelSender}: `);
}

/**
 * Bytes left in a message. Firmware sends channel messages as
 * "<sender>: <text>", so the sender's name and ": " use up the limit there;
 * direct messages carry only the text. Negative when the text is too long.
 */
export function remainingMessageBytes(text: string, channelSender: string | null): number {
  return limit(channelSender) - prefixBytes(channelSender) - bytes(text.trim());
}

/** Cut a word that alone is longer than `budget` bytes, between characters. */
function cutWord(word: string, budget: number): string[] {
  const pieces: string[] = [];
  let piece = '';
  for (const ch of word) {
    if (bytes(piece + ch) > budget && piece) {
      pieces.push(piece);
      piece = '';
    }
    piece += ch;
  }
  if (piece) pieces.push(piece);
  return pieces;
}

/**
 * Fill parts of at most `budget` bytes with whole words where possible. The
 * spaces and line breaks between words are kept, except where a part ends.
 */
function fill(text: string, budget: number): string[] {
  const parts: string[] = [];
  let current = '';
  let gap = '';
  for (const token of text.split(/(\s+)/)) {
    if (!token) continue;
    if (/^\s+$/.test(token)) {
      gap = token;
      continue;
    }
    for (const piece of bytes(token) > budget ? cutWord(token, budget) : [token]) {
      const next = current ? current + gap + piece : piece;
      if (bytes(next) <= budget) {
        current = next;
      } else {
        parts.push(current);
        current = piece;
      }
      gap = '';
    }
  }
  if (current) parts.push(current);
  return parts;
}

/**
 * A text too long for one message, split into numbered messages of about the
 * same length, each within the message limit: "… 1/3", "… 2/3", "… 3/3".
 * Null when it fits in one message or would need more than MAX_MESSAGE_PARTS.
 */
export function splitMessage(text: string, channelSender: string | null): string[] | null {
  const trimmed = text.trim();
  if (remainingMessageBytes(trimmed, channelSender) >= 0) return null;
  const room = limit(channelSender) - prefixBytes(channelSender);
  const total = bytes(trimmed);
  for (let count = 2; count <= MAX_MESSAGE_PARTS; count++) {
    const budget = room - bytes(` ${count}/${count}`);
    if (budget < 8) return null;
    if (fill(trimmed, budget).length > count) continue;
    // Even out the parts: the smallest budget that still needs only `count`.
    for (let even = Math.min(budget, Math.ceil(total / count)); even <= budget; even++) {
      const parts = fill(trimmed, even);
      if (parts.length <= count) {
        return parts.map((part, i) => `${part} ${i + 1}/${parts.length}`);
      }
    }
  }
  return null;
}
