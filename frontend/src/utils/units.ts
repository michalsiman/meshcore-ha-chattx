import * as settings from './user-settings';
/**
 * Distance unit for the distances shown in the panel: kilometres or miles.
 * "auto" follows Home Assistant's unit system (US customary → miles).
 * Chosen per browser in Settings → Map.
 */
const KEY = 'chattx-distance-unit';
const KM_PER_MILE = 1.609344;

export type DistanceSetting = 'auto' | 'km' | 'mi';

let hassLength: string | undefined;

/** Home Assistant's length unit ("km" or "mi"), from hass.config.unit_system. */
export function setHassLengthUnit(unit: string | undefined): void {
  hassLength = unit;
}

export function loadDistanceSetting(): DistanceSetting {
  try {
    const v = settings.getItem(KEY);
    return v === 'km' || v === 'mi' ? v : 'auto';
  } catch {
    return 'auto';
  }
}

export function saveDistanceSetting(setting: DistanceSetting): void {
  try {
    if (setting === 'auto') settings.removeItem(KEY);
    else settings.setItem(KEY, setting);
  } catch {
    /* private mode */
  }
}

export function distanceUnit(): 'km' | 'mi' {
  const setting = loadDistanceSetting();
  if (setting !== 'auto') return setting;
  return hassLength === 'mi' ? 'mi' : 'km';
}

/** A distance given in kilometres, in the chosen unit: "241 km", "150 mi"; one decimal below 10. */
export function formatLength(km: number, approx = false): string {
  const unit = distanceUnit();
  const value = unit === 'mi' ? km / KM_PER_MILE : km;
  return `${approx ? '~' : ''}${value < 10 ? value.toFixed(1) : Math.round(value)} ${unit}`;
}

/** "? km" or "? mi", for a distance that isn't known. */
export function unknownLength(): string {
  return `? ${distanceUnit()}`;
}
