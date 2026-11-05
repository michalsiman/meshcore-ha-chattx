// @ts-ignore: node types are not installed
import { readFileSync } from 'node:fs';
// @ts-ignore: node types are not installed
import { join } from 'node:path';
import { vi } from 'vitest';
import { registerTranslations } from '../../src/i18n';

/** Read a language file the way the panel gets it. */
export function readLanguage(language: string): Record<string, string> {
  // @ts-ignore: node types are not installed
  const dir = join(process.cwd(), '..', 'custom_components', 'meshcore_chattx', 'panel_translations');
  return JSON.parse(readFileSync(join(dir, `${language}.json`), 'utf8'));
}

/** Run code with the browser set to a language whose texts are loaded. */
export function inLanguage<T>(language: string, run: () => T): T {
  if (language !== 'en') registerTranslations(language, readLanguage(language));
  vi.stubGlobal('navigator', { language });
  try {
    return run();
  } finally {
    vi.unstubAllGlobals();
  }
}
