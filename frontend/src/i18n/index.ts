import * as settings from '../utils/user-settings';
/**
 * Translations. English text in the source is the key, so a missing
 * translation falls back to English. The texts live in
 * custom_components/meshcore_chattx/panel_translations/<language>.json and are
 * loaded when the panel starts, so a correction needs no rebuild. To add a
 * language, add its file and list it in LANGUAGE_NAMES.
 *
 * Terms from the MeshCore documentation stay in English: repeater, advert,
 * flood, hop, path, SNR and similar.
 */
const TRANSLATIONS: Record<string, Record<string, string>> = {};

/** Each language under its own name, for the language menu. */
export const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  cs: 'Čeština',
  cy: 'Cymraeg',
  da: 'Dansk',
  de: 'Deutsch',
  el: 'Ελληνικά',
  es: 'Español',
  fr: 'Français',
  hr: 'Hrvatski',
  it: 'Italiano',
  pl: 'Polski',
  pt: 'Português',
  'pt-br': 'Português (Brasil)',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  sr: 'Srpski (latinica)',
  fi: 'Suomi',
  sv: 'Svenska',
  uk: 'Українська',
};

/** Languages close enough to share a translation. */
const ALIASES: Record<string, string> = { bs: 'sr', cnr: 'sr', me: 'sr' };

/** Plural forms of a translation, in the order they are separated by "|". */
const PLURAL_ORDER: Record<string, string[]> = {
  cs: ['one', 'few', 'other'],
  hr: ['one', 'few', 'other'],
  pl: ['one', 'few', 'many'],
  sk: ['one', 'few', 'other'],
  sl: ['one', 'two', 'few', 'other'],
  sr: ['one', 'few', 'other'],
  uk: ['one', 'few', 'many'],
};

const STORAGE_KEY = 'chattx-language';
let hassLanguage: string | undefined;

type Params = Record<string, string | number>;

function primary(language: string | undefined): string | undefined {
  return language?.toLowerCase().split('-')[0];
}

function supported(language: string | undefined): string | undefined {
  // A regional variant with its own translation first (pt-BR), then the language.
  const full = language?.toLowerCase();
  if (full && full in LANGUAGE_NAMES) return full;
  const code = primary(language);
  const known = code ? ALIASES[code] ?? code : undefined;
  return known && known in LANGUAGE_NAMES ? known : undefined;
}

function browserLanguage(): string | undefined {
  return typeof navigator !== 'undefined' ? navigator.language : undefined;
}

/** "auto", or the language picked in this browser. */
export function loadLanguageSetting(): string {
  try {
    return supported(settings.getItem(STORAGE_KEY) ?? undefined) ?? 'auto';
  } catch {
    return 'auto';
  }
}

export function saveLanguageSetting(setting: string): void {
  try {
    if (setting === 'auto') settings.removeItem(STORAGE_KEY);
    else settings.setItem(STORAGE_KEY, setting);
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
  if (primary(browserLanguage()) === language) return undefined;
  return language === 'sr' ? 'sr-Latn' : language;
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
 * stored under the English plural, with its forms separated by "|" in the order
 * given by PLURAL_ORDER, for Czech: one|few|other. Other languages: one|other.
 */
export function tn(one: string, other: string, n: number, params?: Params): string {
  const language = getLanguage();
  const all = { n, ...params };
  const forms = TRANSLATIONS[language]?.[other]?.split('|');
  if (!forms) return fill(n === 1 ? one : other, all);
  const order = PLURAL_ORDER[language] ?? ['one', 'other'];
  const index = order.indexOf(new Intl.PluralRules(language).select(n));
  return fill(forms[index >= 0 ? index : forms.length - 1] ?? forms[forms.length - 1], all);
}

/** Make a translation available, as the panel does after fetching its file. */
export function registerTranslations(language: string, texts: Record<string, string>): void {
  TRANSLATIONS[language] = texts;
}

/** Fetch the texts of the current language. Without them the panel stays in English. */
export async function loadTranslations(): Promise<void> {
  const language = getLanguage();
  if (language === 'en' || TRANSLATIONS[language]) return;
  try {
    const version = new URL(import.meta.url).search;
    const response = await fetch(`/meshcore_chattx_panel/i18n/${language}.json${version}`);
    if (response.ok) registerTranslations(language, await response.json());
  } catch {
    // English stays as the fallback.
  }
}

/** Mark English text for translation where it is defined; translate it with t() where it is shown. */
export function N_(text: string): string {
  return text;
}
