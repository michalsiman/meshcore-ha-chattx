/** A piece of message text: plain text or a web address. */
export type TextPart = { text: string } | { url: string; label: string };

// http(s):// or www. up to the next space; quotes and angle brackets end it too.
const LINK = /\b(?:https?:\/\/|www\.)[^\s<>"']+/gi;
// Punctuation that usually ends the sentence, not the address.
const TRAILING = /[.,;:!?)\]}]+$/;

/** Split text into plain parts and web addresses (http, https and www. only). */
export function splitLinks(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    let label = match[0];
    const trailing = label.match(TRAILING)?.[0] ?? '';
    // Keep a closing bracket that belongs to the address, e.g. a Wikipedia link.
    if (trailing && !(trailing.startsWith(')') && label.slice(0, -trailing.length).includes('('))) {
      label = label.slice(0, -trailing.length);
    }
    const start = match.index ?? 0;
    if (label.length < 5) continue;
    if (start > last) parts.push({ text: text.slice(last, start) });
    const url = /^https?:\/\//i.test(label) ? label : `https://${label}`;
    parts.push({ url, label });
    last = start + label.length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
}


/** Length of a short address from is.gd or v.gd, e.g. https://is.gd/abc123. */
export const SHORT_URL_LENGTH = 20;

/** The first web address in the text that a shortener would make shorter. */
export function longLink(text: string): { url: string; label: string } | null {
  for (const part of splitLinks(text)) {
    if ('url' in part && part.label.length > SHORT_URL_LENGTH + 2 && !/^https?:\/\/(is|v)\.gd\//i.test(part.label)) {
      return part;
    }
  }
  return null;
}
