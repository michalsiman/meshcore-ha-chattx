// @vitest-environment happy-dom

// @ts-ignore: node types are not installed
import { readdirSync, readFileSync, statSync } from 'node:fs';
// @ts-ignore: node types are not installed
import { join } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  getLanguage, getLocale, LANGUAGE_NAMES, loadLanguageSetting, registerTranslations,
  saveLanguageSetting, setHassLanguage, t, tn,
} from '../src/i18n';
import { readLanguage } from './helpers/language';
import { formatHeardReply, saveHeardReply } from '../src/utils/heard-reply';

const NAMES_ONLY = new Set(['MeshCore Chattx', 'MC Chattx', '']);

function sources(dir: string): string[] {
  return readdirSync(dir).flatMap((name: string) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === 'i18n' || name === 'commands' ? [] : sources(path);
    return path.endsWith('.ts') ? [path] : [];
  });
}

function unescape(text: string): string {
  return text.replace(/\\n/g, '\n').replace(/\\(['\\])/g, '$1');
}

const cs = readLanguage('cs');
registerTranslations('cs', cs);

describe('language choice', () => {
  afterEach(() => {
    localStorage.clear();
    setHassLanguage(undefined);
    vi.unstubAllGlobals();
  });

  const browser = (language: string) => vi.stubGlobal('navigator', { language });

  it('prefers the Home Assistant profile over the browser', () => {
    browser('en-US');
    setHassLanguage('cs');
    expect(getLanguage()).toBe('cs');
    setHassLanguage('en');
    browser('cs-CZ');
    expect(getLanguage()).toBe('en');
  });

  it('uses the browser when Home Assistant has no language we support', () => {
    browser('cs-CZ');
    setHassLanguage('ja');
    expect(getLanguage()).toBe('cs');
  });

  it('falls back to English', () => {
    browser('ja');
    expect(getLanguage()).toBe('en');
  });

  it('prefers the language picked in the settings', () => {
    browser('cs-CZ');
    setHassLanguage('cs');
    saveLanguageSetting('en');
    expect(getLanguage()).toBe('en');
    saveLanguageSetting('auto');
    expect(loadLanguageSetting()).toBe('auto');
    expect(getLanguage()).toBe('cs');
  });

  it('keeps the regional format when the browser matches the language', () => {
    browser('en-GB');
    expect(getLocale()).toBeUndefined();
    saveLanguageSetting('cs');
    expect(getLocale()).toBe('cs');
  });
});

describe('translating', () => {
  afterEach(() => {
    localStorage.clear();
    vi.unstubAllGlobals();
  });

  it('translates and fills in values', () => {
    saveLanguageSetting('cs');
    expect(t('Remove {name}', { name: 'X' })).toBe('Odebrat X');
  });

  it('keeps English for unknown text', () => {
    saveLanguageSetting('cs');
    expect(t('No such text {a}', { a: 1 })).toBe('No such text 1');
  });

  it('picks the Czech plural form', () => {
    saveLanguageSetting('cs');
    const count = (n: number) => tn('{n} result', '{n} results', n);
    expect(count(1)).toBe('1 výsledek');
    expect(count(3)).toBe('3 výsledky');
    expect(count(5)).toBe('5 výsledků');
  });

  it('picks the English plural form', () => {
    saveLanguageSetting('en');
    expect(tn('{n} result', '{n} results', 1)).toBe('1 result');
    expect(tn('{n} result', '{n} results', 2)).toBe('2 results');
  });
});

describe('quick reply text', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('defaults to the panel language', () => {
    saveLanguageSetting('en');
    expect(formatHeardReply(3)).toBe('Heard, 3 hops!');
    expect(formatHeardReply(1)).toBe('Heard, 1 hop!');
    saveLanguageSetting('cs');
    expect(formatHeardReply(3)).toBe('Slyším, 3 hops!');
  });

  it('uses the saved text, and an empty text restores the default', () => {
    saveLanguageSetting('en');
    saveHeardReply('Copy, {hops} here');
    expect(formatHeardReply(2)).toBe('Copy, 2 hops here');
    saveHeardReply('  ');
    expect(formatHeardReply(2)).toBe('Heard, 2 hops!');
  });
});

describe('language files', () => {
  // @ts-ignore: node types are not installed
  const root = join(process.cwd(), 'src');
  const keys = new Set<string>();
  for (const path of sources(root)) {
    const text = readFileSync(path, 'utf8');
    for (const match of text.matchAll(/\b(?:t|N_)\(\s*'((?:[^'\\]|\\.)*)'/g)) keys.add(unescape(match[1]));
    for (const match of text.matchAll(/\btn\(\s*'(?:[^'\\]|\\.)*',\s*'((?:[^'\\]|\\.)*)'/g)) keys.add(unescape(match[1]));
  }
  const languages = Object.keys(LANGUAGE_NAMES).filter((code) => code !== 'en');

  it('Czech covers every text in the panel', () => {
    expect([...keys].filter((key) => !NAMES_ONLY.has(key) && !(key in cs))).toEqual([]);
  });

  it.each(languages)('%s keeps the placeholders of each text', (language) => {
    const names = (text: string) => [...new Set(text.match(/\{\w+\}/g) ?? [])].sort().join();
    const broken = Object.entries(readLanguage(language)).filter(([key, value]) =>
      value.split('|').some((form) => names(form) !== names(key)));
    expect(broken).toEqual([]);
  });

  it.each(languages)('%s has no empty text and uses known keys', (language) => {
    const entries = Object.entries(readLanguage(language));
    expect(entries.filter(([, value]) => !value.trim())).toEqual([]);
    const known = new Set([...keys, ...Object.keys(cs)]);
    expect(entries.filter(([key]) => !known.has(key)).map(([key]) => key)).toEqual([]);
  });
});
