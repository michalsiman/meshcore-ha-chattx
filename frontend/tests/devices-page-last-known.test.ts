// @vitest-environment happy-dom

import { describe, expect, it, vi } from 'vitest';

const BAT = 'sensor.meshcore_rpt1de_bat_testrepeater';
const RECV = 'sensor.meshcore_rpt1de_nb_recv_testrepeater';
const ONLINE = 'binary_sensor.meshcore_rpt1de_online_testrepeater';

vi.mock('../src/api', () => ({
  executeRemote: vi.fn(),
  getManagedDevices: vi.fn(async () => ({
    repeaters: [{ pubkey_prefix: 'rpt1deadbeef', name: 'TestRepeater', status: 'unknown', status_entity_id: ONLINE }],
    clients: [],
  })),
  getNeighbors: vi.fn(async () => []),
  getContacts: vi.fn(async () => []),
}));

vi.mock('../src/utils/classify-entity', () => ({
  loadMeshcoreEntityRegistry: vi.fn(async () => ({
    meshcoreDeviceMap: { 'test-entry_repeater_rpt1deadbeef': 'dev1' },
    deviceEntities: {
      dev1: [
        { entity_id: BAT, label: 'Battery Voltage', icon: '', colorScheme: 'battery', sortOrder: 1, metricKey: 'battery_voltage' },
        { entity_id: RECV, label: 'Received', icon: '', colorScheme: 'neutral', sortOrder: 2 },
      ],
    },
  })),
}));

import '../src/pages/devices-page';
import type { HomeAssistant } from '../src/types';

const READ_AT = Date.parse('2026-11-05T21:01:08Z');

function makeHass(callWS: ReturnType<typeof vi.fn>): HomeAssistant {
  const st = (entity_id: string, state: string) => ({ entity_id, state, attributes: {}, last_changed: '', last_updated: '' });
  return {
    states: { [BAT]: st(BAT, 'unavailable'), [RECV]: st(RECV, 'unavailable'), [ONLINE]: st(ONLINE, 'unknown') },
    entities: {},
    language: 'en',
    callWS,
    callService: async () => {},
    callApi: async () => ({}),
    connection: { subscribeEvents: async () => () => {} },
  } as unknown as HomeAssistant;
}

const flush = async () => {
  for (let i = 0; i < 10; i++) await new Promise((r) => setTimeout(r, 0));
};

describe('devices-page last known values', () => {
  it('fills blank repeater sensors from history and says how old they are', async () => {
    const callWS = vi.fn(async (msg: Record<string, unknown>) => {
      if (msg.type === 'history/history_during_period') {
        const s = READ_AT / 1000;
        return {
          [BAT]: [{ s: '4.08', lu: s }, { s: 'unavailable', lu: s + 1500 }],
          [RECV]: [{ s: '6808', lu: s }, { s: 'unavailable', lu: s + 1500 }],
          [ONLINE]: [{ s: 'on', lu: s }, { s: 'unknown', lu: s + 1500 }],
        };
      }
      return {};
    });
    const page = document.createElement('chattx-devices-page') as HTMLElement & Record<string, unknown>;
    page.hass = makeHass(callWS);
    page.config = { entry_id: 'test-entry' };
    page.selectedDevice = { entry_id: 'test-entry' };
    document.body.appendChild(page);
    await flush();

    const historyCalls = callWS.mock.calls.filter(([m]) => m.type === 'history/history_during_period');
    expect(historyCalls).toHaveLength(1);
    expect((historyCalls[0][0].entity_ids as string[]).sort()).toEqual([BAT, ONLINE, RECV].sort());
    expect(page._lastKnown).toMatchObject({ [BAT]: { state: '4.08' }, [ONLINE]: { state: 'on' } });

    const root = page.shadowRoot!;
    expect(root.querySelector('.status-badge')?.textContent).toContain('Online');
    expect(root.querySelector('chattx-read-age-note')).not.toBeNull();
    const summary = root.querySelector('chattx-node-summary') as HTMLElement & { hass: HomeAssistant };
    expect(summary.hass.states[BAT].state).toBe('4.08');
    page.remove();
  });
});
