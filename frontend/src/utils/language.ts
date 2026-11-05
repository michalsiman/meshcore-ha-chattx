import { getLanguage } from '../i18n';

/** Whether the panel is in Czech, for helpers that decline words themselves. */
export function isCzech(): boolean {
  return getLanguage() === 'cs';
}
