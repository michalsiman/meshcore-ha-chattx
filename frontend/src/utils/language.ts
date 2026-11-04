/** Whether the browser asks for Czech; the rest of the panel is English. */
export function isCzech(): boolean {
  const language = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return language.toLowerCase().startsWith('cs');
}
