/**
 * Unsent message drafts, one per conversation, kept in this browser so a
 * message being written survives a visit to another Home Assistant page.
 * A draft untouched for an hour is forgotten: by then nobody continues it.
 */
const STORAGE_KEY = 'chattx-drafts';
export const DRAFT_MAX_AGE_MS = 60 * 60 * 1000;

type Drafts = Record<string, { text: string; at: number }>;

function read(now: number): Drafts {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Drafts;
    const fresh: Drafts = {};
    for (const [key, draft] of Object.entries(raw ?? {})) {
      if (draft && typeof draft.text === 'string' && typeof draft.at === 'number' && now - draft.at < DRAFT_MAX_AGE_MS) {
        fresh[key] = draft;
      }
    }
    return fresh;
  } catch {
    return {};
  }
}

function write(drafts: Drafts): void {
  try {
    if (Object.keys(drafts).length === 0) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // Storage unavailable: the draft lives only while the page is open.
  }
}

/** The draft of a conversation, or '' when there is none or it is older than an hour. */
export function loadDraft(conversation: string, now = Date.now()): string {
  return read(now)[conversation]?.text ?? '';
}

/** Keep the text as the conversation's draft; empty text removes it. */
export function saveDraft(conversation: string, text: string, now = Date.now()): void {
  const drafts = read(now);
  if (text.trim()) drafts[conversation] = { text, at: now };
  else delete drafts[conversation];
  write(drafts);
}
