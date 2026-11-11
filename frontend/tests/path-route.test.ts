import { describe, expect, it } from 'vitest';
import { chooseCandidates, fitZoom, knownNodes, project, resolveRoute } from '../src/utils/path-route';

const states = {
  'binary_sensor.meshcore_a_contact': { entity_id: 'binary_sensor.meshcore_a_contact', attributes: { public_key: 'd658aa', adv_name: 'Hill', adv_lat: 50.0, adv_lon: 14.0, type: 2 } },
  'binary_sensor.meshcore_b_contact': { entity_id: 'binary_sensor.meshcore_b_contact', attributes: { public_key: '4368bb', adv_name: 'Town', adv_lat: 50.2, adv_lon: 14.3, type: 2 } },
  'binary_sensor.meshcore_c_contact': { entity_id: 'binary_sensor.meshcore_c_contact', attributes: { public_key: '4368cc', adv_name: 'Far', adv_lat: 49.0, adv_lon: 17.0, type: 2 } },
  'binary_sensor.meshcore_d_contact': { entity_id: 'binary_sensor.meshcore_d_contact', attributes: { public_key: 'aaaa00', adv_name: 'Alice', adv_lat: 50.4, adv_lon: 14.5, type: 1 } },
  'binary_sensor.meshcore_e_contact': { entity_id: 'binary_sensor.meshcore_e_contact', attributes: { public_key: 'eeee00', adv_name: 'NoPos', adv_lat: 0, adv_lon: 0, type: 2 } },
  'sensor.other': { entity_id: 'sensor.other', attributes: {} },
};
const me = { lat: 49.95, lon: 13.95, name: 'Me' };

describe('route on the map', () => {
  it('keeps only contacts with a position', () => {
    expect(knownNodes(states).map((n) => n.name).sort()).toEqual(['Alice', 'Far', 'Hill', 'Town']);
  });

  it('places a received path from sender to us, picking the nearer of shared prefixes', () => {
    const route = resolveRoute({ pathNodes: ['4368', 'd658'], nodes: knownNodes(states), me, outgoing: false, senderName: 'Alice' });
    expect(route.map((p) => p.kind)).toEqual(['sender', 'repeater', 'repeater', 'me']);
    expect(route[0].name).toBe('Alice');
    expect(route[1].name).toBe('Town');
    expect(route[1].ambiguous).toBe(true);
    expect(route[2].name).toBe('Hill');
    expect(route[2].ambiguous).toBe(false);
  });

  it('marks unknown prefixes without a position', () => {
    const route = resolveRoute({ pathNodes: ['eeee', 'ffff'], nodes: knownNodes(states), me, outgoing: true });
    expect(route[0].kind).toBe('me');
    expect(route[1].lat).toBeNull();
    expect(route[2].lat).toBeNull();
  });

  it('chooses the shortest whole route, not the nearest candidate hop by hop', () => {
    // From us (west) to a sender in the east. Hop "aa" has a candidate right
    // next to us and one halfway; hop "bb" only sits near the sender. Hop by
    // hop the first "aa" wins and the route jumps; as a whole the halfway one.
    const node = (key: string, name: string, lat: number, lon: number) => ({ key, name, lat, lon, type: 2 });
    const layers = [
      [node('aa01', 'Near us', 50.0, 13.4), node('aa02', 'Halfway', 50.0, 14.5)],
      [node('bb01', 'Near sender', 50.0, 15.6)],
    ];
    const picked = chooseCandidates(layers, { lat: 50.0, lon: 13.3 }, { lat: 50.0, lon: 15.7 });
    expect(picked.map((n) => n?.name)).toEqual(['Halfway', 'Near sender']);
  });

  it('skips hops without candidates and copes with no ends', () => {
    const node = (key: string, lat: number, lon: number) => ({ key, name: key, lat, lon, type: 2 });
    const picked = chooseCandidates([[node('a1', 50, 14), node('a2', 49, 17)], [], [node('c1', 50.1, 14.1)]], null, null);
    expect(picked.map((n) => n?.key ?? null)).toEqual(['a1', null, 'c1']);
    expect(chooseCandidates([[], []], null, null)).toEqual([null, null]);
  });

    it('leaves out a 1-byte hop whose only known node is far off the route', () => {
    const node = (key: string, name: string, lat: number, lon: number) => ({ key, name, lat, lon, type: 2 });
    const layers = [[node('aa01', 'A', 50.0, 14.0)], [node('bb01', 'Far away', 49.0, 17.0)], [node('cc01', 'C', 50.0, 14.2)]];
    const start = { lat: 50.0, lon: 13.8 };
    expect(chooseCandidates(layers, start, null, [true, true, true]).map((n) => n?.name ?? null)).toEqual(['A', null, 'C']);
    // 2-byte prefixes are kept: the node is almost surely the right one.
    expect(chooseCandidates(layers, start, null, [false, false, false]).map((n) => n?.name)).toEqual(['A', 'Far away', 'C']);
  });

  it('marks a left-out hop', () => {
    const states2 = {
      ...states,
      'binary_sensor.meshcore_f_contact': { entity_id: 'binary_sensor.meshcore_f_contact', attributes: { public_key: '17aaaa', adv_name: 'Moravia', adv_lat: 49.3, adv_lon: 16.6, type: 2 } },
    };
    const route = resolveRoute({ pathNodes: ['d6', '17', 'd6'], nodes: knownNodes(states2), me, outgoing: true });
    expect(route[2].leftOut).toBe(true);
    expect(route[2].lat).toBeNull();
  });

    it('fits points into the map', () => {
    const z = fitZoom([{ lat: 50, lon: 14 }, { lat: 50.4, lon: 14.5 }], 520, 320);
    const a = project(50, 14, z);
    const b = project(50.4, 14.5, z);
    expect(Math.abs(a[0] - b[0])).toBeLessThanOrEqual(520 - 56);
    expect(Math.abs(a[1] - b[1])).toBeLessThanOrEqual(320 - 56);
    expect(fitZoom([{ lat: 50, lon: 14 }], 520, 320)).toBe(12);
  });
});
