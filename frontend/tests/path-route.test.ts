import { describe, expect, it } from 'vitest';
import { fitZoom, knownNodes, project, resolveRoute } from '../src/utils/path-route';

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

  it('fits points into the map', () => {
    const z = fitZoom([{ lat: 50, lon: 14 }, { lat: 50.4, lon: 14.5 }], 520, 320);
    const a = project(50, 14, z);
    const b = project(50.4, 14.5, z);
    expect(Math.abs(a[0] - b[0])).toBeLessThanOrEqual(520 - 56);
    expect(Math.abs(a[1] - b[1])).toBeLessThanOrEqual(320 - 56);
    expect(fitZoom([{ lat: 50, lon: 14 }], 520, 320)).toBe(12);
  });
});
