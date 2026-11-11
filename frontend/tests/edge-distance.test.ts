import { describe, expect, it } from 'vitest';
import { edgeDistance, formatDistance, shortestPath, type MapNode } from '../src/utils/path-route';

const node = (key: string, lat: number, lon: number): MapNode => ({ key, name: key, lat, lon, type: 2 });

describe('distance between the end repeaters', () => {
  const nodes = [node('aaaa11', 49.75, 13.38), node('bbbb22', 50.08, 14.42), node('cccc33', 49.2, 16.6)];

  it('measures from the first to the last repeater', () => {
    const d = edgeDistance(['aaaa', 'bbbb', 'cccc'], nodes)!;
    expect(Math.round(d.km)).toBe(241);
    expect(Math.round(d.routeKm)).toBe(83 + 185);
    expect(d.approx).toBe(false);
    expect(formatDistance(d)).toBe('↔ 241 km (∑ 268 km)');
  });

  it('shows only the straight line for two repeaters', () => {
    expect(formatDistance(edgeDistance(['aaaa', 'bbbb'], nodes)!)).toBe('↔ 83 km');
  });

  it('needs two repeaters with a known position', () => {
    expect(edgeDistance(['aaaa'], nodes)).toBeNull();
    expect(edgeDistance(['aaaa', 'ffff'], nodes)).toBeNull();
  });

  it('measures from the outermost known repeaters when an end is unknown, as approximate', () => {
    const d = edgeDistance(['ffff', 'aaaa', 'bbbb', 'cccc', 'eeee'], nodes)!;
    expect(Math.round(d.km)).toBe(241);
    expect(d.approx).toBe(true);
    expect(d.routeApprox).toBe(true);
    expect(formatDistance(d)).toBe('↔ ~241 km (∑ ~268 km)');
  });

  it('chooses shared prefixes as the map does when our position is known', () => {
    // Two "dddd" repeaters: one 45 km from bbbb (Prague), one next to us in the west.
    const both = [...nodes, node('dddd01', 50.3, 15.0), node('dddd02', 49.62, 13.2)];
    const me = { lat: 49.6, lon: 13.15 };
    // Without our position the nearer one to bbbb is taken; with it, the one the
    // packet must have come through to reach us.
    expect(edgeDistance(['bbbb', 'dddd'], both)!.km).toBeLessThan(60);
    expect(edgeDistance(['bbbb', 'dddd'], both, me)!.km).toBeGreaterThan(80);
  });

  it('marks a shared prefix as approximate', () => {
    const d = edgeDistance(['aaaa', 'bbbb'], [...nodes, node('bbbb99', 50.1, 14.5)])!;
    expect(formatDistance(d)).toMatch(/^↔ ~/);
  });

  it('takes the shortest heard path', () => {
    expect(shortestPath([{ path_nodes: ['a', 'b', 'c'] }, { path_nodes: ['d', 'e'] }, {}])).toEqual(['d', 'e']);
  });
});
