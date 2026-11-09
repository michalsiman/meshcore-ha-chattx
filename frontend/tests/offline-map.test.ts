// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { render } from 'lit';
import { decodeOfflineMap, offlineMapLayer } from '../src/utils/offline-map';
import { project } from '../src/utils/path-route';

// A square "country" around Plzeň, a big town, a small one next to it and a peak.
const country = {
  name: 'Test',
  border: [[133000, 497000, 1000, 0, 0, 1000, -1000, 0]],
  regions: [],
  places: [
    [133800, 497500, 'Plzeň', 170000, 1],
    [133900, 497500, 'Doubravka', 1200, 2],
    [134500, 497300, 'Starý Plzenec', 5000, 2],
  ],
  peaks: [[134000, 497200, 'Radyně', 567]],
} as const;

function draw(zoom: number) {
  const map = decodeOfflineMap({ T: country as never });
  const [cx, cy] = project(49.75, 13.38, zoom);
  const div = document.createElement('div');
  render(offlineMapLayer(map, zoom, cx - 300, cy - 200, 600, 400), div);
  return div;
}

describe('offline map', () => {
  it('decodes delta rings into degrees', () => {
    const map = decodeOfflineMap({ T: country as never });
    expect(Array.from(map.borders[0])).toEqual([13.3, 49.7, 13.4, 49.7, 13.4, 49.8, 13.3, 49.8]);
  });

  it('shows only important places when zoomed out', () => {
    const text = draw(7).textContent ?? '';
    expect(text).toContain('Plzeň');
    expect(text).not.toContain('Starý Plzenec');
    expect(text).not.toContain('Radyně');
  });

  it('shows small places and peaks when zoomed in, without overlapping labels', () => {
    const text = draw(11).textContent ?? '';
    expect(text).toContain('Starý Plzenec');
    expect(text).toContain('Radyně 567');
    // Doubravka sits right next to Plzeň: its label would overlap, so it is left out at zoom 11.
    expect(text).not.toContain('Doubravka');
  });

  it('draws an empty background without data', () => {
    const div = document.createElement('div');
    render(offlineMapLayer(null, 8, 0, 0, 100, 100), div);
    expect(div.querySelector('rect.om-sea')).not.toBeNull();
    expect(div.querySelector('text')).toBeNull();
  });
});

describe('world layer and country choice', () => {
  it('draws world borders and capitals only where no country is downloaded', async () => {
    const world = {
      borders: { T: [[0, 0, 10, 0, 0, 10]], XX: [[500000, 0, 10, 0, 0, 10]] },
      capitals: [[133800, 497500, 'Duplicate', 'T'], [500000, 0, 'Elsewhere', 'XX']],
    };
    const map = decodeOfflineMap({ T: country as never }, world as never);
    // T's own border plus XX's world border.
    expect(map.borders).toHaveLength(2);
    expect(map.labels.map((l) => l.text)).toContain('Elsewhere');
    expect(map.labels.map((l) => l.text)).not.toContain('Duplicate');
  });

  it('suggests Home Assistant\'s country and its neighbours', async () => {
    const { suggestedCountries } = await import('../src/components/offline-map-settings');
    const index = { CZ: { name: 'Czechia', size: 1, neighbours: ['PL', 'DE', 'XX'] }, PL: { name: 'Poland', size: 1 }, DE: { name: 'Germany', size: 1 } };
    expect(suggestedCountries('cz', index)).toEqual(['CZ', 'PL', 'DE']);
    expect(suggestedCountries(null, index)).toEqual([]);
  });
});
