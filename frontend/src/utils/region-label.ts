import { t } from '../i18n';

/** Region of a received channel message, as the bubble and its dialog show it. */
export interface RegionInfo {
  /** Short label after the time in the bubble; '' when there is nothing to flag. */
  short: string;
  /** Line for the message dialog; '' when the message carries no region data. */
  long: string;
  /** True for a scoped flood whose region name is not in the allowlist. */
  unknown: boolean;
}

/** The '#' prefix is how firmware names regions; the label reads better without it. */
const bare = (name: string) => name.replace(/^#/, '');

/**
 * `floodScope` is a matched region name, or '*' for a global flood when the
 * allowlist lists '*'. `regionScope` is true for any scoped (transport) flood,
 * false for a plain flood, undefined for direct messages and old records.
 */
export function regionInfo(floodScope?: string, regionScope?: boolean): RegionInfo {
  if (floodScope && floodScope !== '*') {
    const name = bare(floodScope);
    return { short: `#${name}`, long: t('Region: #{name}', { name }), unknown: false };
  }
  if (regionScope === true) {
    return {
      short: t('unknown region'),
      long: t('Region: unknown. Add its name to the Flood Scope Allowlist in the MeshCore integration options to see it.'),
      unknown: true,
    };
  }
  if (floodScope === '*') {
    // Shown only when the allowlist lists '*': the user asked to see global floods.
    return { short: `🌐 ${t('all regions')}`, long: t('Region: none (global flood)'), unknown: false };
  }
  if (regionScope === false) {
    return { short: '', long: t('Region: none (global flood)'), unknown: false };
  }
  return { short: '', long: '', unknown: false };
}
