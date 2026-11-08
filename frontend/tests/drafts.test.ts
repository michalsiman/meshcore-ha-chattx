// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest';
import { DRAFT_MAX_AGE_MS, loadDraft, saveDraft } from '../src/utils/drafts';

beforeEach(() => localStorage.clear());

describe('message drafts', () => {
  it('keeps a draft per conversation', () => {
    saveDraft('0', 'hello channel', 1000);
    saveDraft('abc123', 'hello Alice', 1000);
    expect(loadDraft('0', 2000)).toBe('hello channel');
    expect(loadDraft('abc123', 2000)).toBe('hello Alice');
    expect(loadDraft('5', 2000)).toBe('');
  });

  it('removes a draft when the text is emptied, e.g. after sending', () => {
    saveDraft('0', 'hello', 1000);
    saveDraft('0', '  ', 1500);
    expect(loadDraft('0', 2000)).toBe('');
    expect(localStorage.getItem('chattx-drafts')).toBeNull();
  });

  it('forgets a draft untouched for an hour', () => {
    saveDraft('0', 'old', 0);
    expect(loadDraft('0', DRAFT_MAX_AGE_MS - 1)).toBe('old');
    expect(loadDraft('0', DRAFT_MAX_AGE_MS)).toBe('');
  });
});
