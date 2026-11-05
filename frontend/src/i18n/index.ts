import { cs } from './cs';

/**
 * Translations. English text in the source is the key, so a missing
 * translation falls back to English. To add a language, copy `cs.ts`, translate
 * the values and list it in TRANSLATIONS and LANGUAGE_NAMES.
 *
 * Terms from the MeshCore documentation stay in English: repeater, advert,
 * flood, hop, path, SNR and similar.
 */
const TRANSLATIONS: Record<string, Record<string, string>> = { cs };

/** Each language under its own name, for the language menu. */
export const LANGUAGE_NAMES: Record<string, string> = { en: 'English', cs: 'Čeština' };

const STORAGE_KEY = 'chattx-language';
let hassLanguage: string | undefined;

type Params = Record<string, string | number>;

function primary(language: string | undefined): string | undefined {
  return language?.toLowerCase().split('-')[0];
}

function supported(language: string | undefined): string | undefined {
  const code = primary(language);
  return code && code in LANGUAGE_NAMES ? code : undefined;
}

function browserLanguage(): string | undefined {
  return typeof navigator !== 'undefined' ? navigator.language : undefined;
}

/** "auto", or the language picked in this browser. */
export function loadLanguageSetting(): string {
  try {
    return supported(localStorage.getItem(STORAGE_KEY) ?? undefined) ?? 'auto';
  } catch {
    return 'auto';
  }
}

export function saveLanguageSetting(setting: string): void {
  try {
    if (setting === 'auto') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, setting);
  } catch {
    // Storage unavailable: the choice lasts until the page reloads.
  }
}

/** The language from the user's Home Assistant profile. */
export function setHassLanguage(language: string | undefined): void {
  hassLanguage = language;
}

/** The picked language, else the Home Assistant profile, else the browser, else English. */
export function getLanguage(): string {
  const setting = loadLanguageSetting();
  if (setting !== 'auto') return setting;
  return supported(hassLanguage) ?? supported(browserLanguage()) ?? 'en';
}

/**
 * Locale for dates and numbers. Undefined keeps the browser's own regional
 * format, such as en-GB, when it already matches the language in use.
 */
export function getLocale(): string | undefined {
  const language = getLanguage();
  return primary(browserLanguage()) === language ? undefined : language;
}

function fill(text: string, params?: Params): string {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}

/** Translate English text. `{name}` is replaced from params. */
export function t(text: string, params?: Params): string {
  return fill(TRANSLATIONS[getLanguage()]?.[text] ?? text, params);
}

/**
 * Translate text that depends on a count. `{n}` is the count. A translation is
 * stored under the English plural, with its plural forms in Intl.PluralRules
 * order separated by "|", for Czech: one|few|other.
 */
export function tn(one: string, other: string, n: number, params?: Params): string {
  const language = getLanguage();
  const all = { n, ...params };
  const forms = TRANSLATIONS[language]?.[other]?.split('|');
  if (!forms) return fill(n === 1 ? one : other, all);
  const category = new Intl.PluralRules(language).select(n);
  const index = category === 'one' ? 0 : category === 'few' ? 1 : forms.length - 1;
  return fill(forms[Math.min(index, forms.length - 1)], all);
}

/** Mark English text for translation where it is defined; translate it with t() where it is shown. */
export function N_(text: string): string {
  return text;
}
