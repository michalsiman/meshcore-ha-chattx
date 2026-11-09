import { describe, expect, it } from 'vitest';
import { mapTileUrl } from '../src/utils/map-tiles';

describe('map tiles', () => {
  it('goes through the Home Assistant proxy when there is a token', () => {
    expect(mapTileUrl('a b', 7, 70, 44)).toBe('/api/map_tiles/raster/7/70/44.png?token=a%20b');
  });
  it('falls back to openstreetmap.org without a token', () => {
    expect(mapTileUrl(null, 7, 70, 44)).toBe('https://tile.openstreetmap.org/7/70/44.png');
  });
});
