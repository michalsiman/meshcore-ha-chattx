// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { telemetryLabel, telemetryValue } from '../src/components/repeater-telemetry';
import type { RepeaterTelemetry } from '../src/components/repeater-telemetry';
import type { HomeAssistant } from '../src/types';

const SENSORS = [
  { channel: 2, type: 'current', value: -0.16 },
  { channel: 1, type: 'voltage', value: 3.9876 },
  { channel: 1, type: 'temperature', value: 6.2 },
];

function makeHass(replies: Array<Record<string, unknown>>, remembered: Record<string, unknown> = {}) {
  const callWS = vi.fn(async (msg: Record<string, unknown>) => {
    if (msg.type === 'meshcore_chattx/repeater_remembered_settings') return { settings: remembered };
    return replies.shift();
  });
  return { hass: { callWS } as unknown as HomeAssistant, callWS };
}

async function flush(el: RepeaterTelemetry) {
  for (let i = 0; i < 6; i++) {
    await el.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

async function mount(hass: HomeAssistant, canLoad = true) {
  const el = document.createElement('chattx-repeater-telemetry') as RepeaterTelemetry;
  el.hass = hass;
  el.prefix = 'abcdef123456';
  el.canLoad = canLoad;
  document.body.appendChild(el);
  await flush(el);
  return el;
}

const labels = (el: RepeaterTelemetry) =>
  [...el.shadowRoot!.querySelectorAll('label')].map((l) => l.textContent!.trim());
const value = (el: RepeaterTelemetry, label: string) =>
  [...el.shadowRoot!.querySelectorAll('label')].find((l) => l.textContent!.trim() === label)!.querySelector('input')!.value;
const button = (el: RepeaterTelemetry) => el.shadowRoot!.querySelector('button')!;
const reads = (callWS: ReturnType<typeof vi.fn>) =>
  callWS.mock.calls.filter((c) => c[0].type === 'meshcore_chattx/repeater_read_telemetry');

describe('telemetry labels and values', () => {
  it('names channel 1 voltage as the battery', () => {
    expect(telemetryLabel({ channel: 1, type: 'voltage', value: 3.9 })).toBe('Battery voltage (V)');
    expect(telemetryLabel({ channel: 2, type: 'voltage', value: 3.9 })).toBe('Voltage, channel 2 (V)');
    expect(telemetryLabel({ channel: 1, type: 'temperature', value: 6 })).toBe('MCU temperature (°C)');
    expect(telemetryLabel({ channel: 2, type: 'temperature', value: 6 })).toBe('Temperature, channel 2 (°C)');
  });

  it('labels unknown sensor types without a unit', () => {
    expect(telemetryLabel({ channel: 1, type: 'new_type', value: 1 })).toBe('New type');
  });

  it('formats numbers, lists and objects', () => {
    expect(telemetryValue({ channel: 1, type: 'voltage', value: 3.98765 })).toBe('3.988');
    expect(telemetryValue({ channel: 1, type: 'gyrometer', value: [1, 2.5] })).toBe('1, 2.5');
    expect(telemetryValue({ channel: 1, type: 'gps', value: { latitude: 49.5, longitude: 13 } })).toBe('latitude: 49.5, longitude: 13');
    expect(telemetryValue({ channel: 1, type: 'presence', value: 0 })).toBe('0');
  });
});

describe('telemetry block', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('shows named empty fields and waits for login', async () => {
    const { hass, callWS } = makeHass([]);
    const el = await mount(hass, false);

    expect(labels(el)).toEqual(['Battery voltage (V)', 'MCU temperature (°C)']);
    expect(button(el).disabled).toBe(true);
    expect(reads(callWS)).toHaveLength(0);
  });

  it('replaces them with whatever the repeater reports, by channel', async () => {
    const { hass } = makeHass([{ success: true, sensors: SENSORS }]);
    const el = await mount(hass);

    button(el).click();
    await flush(el);

    expect(labels(el)).toEqual(['Battery voltage (V)', 'MCU temperature (°C)', 'Current, channel 2 (A)']);
    expect(value(el, 'Battery voltage (V)')).toBe('3.988');
    expect(button(el).textContent!.trim()).toBe('Reload');
    expect(el.shadowRoot!.querySelector('.read-at')).not.toBeNull();
  });

  it('shows remembered values without asking the repeater', async () => {
    const { hass, callWS } = makeHass([], { telemetry: { sensors: SENSORS, read_at: '2026-11-01T10:00:00+00:00' } });
    const el = await mount(hass, false);

    expect(value(el, 'MCU temperature (°C)')).toBe('6.2');
    expect(el.shadowRoot!.querySelector('.read-at')!.getAttribute('title')).toContain(new Date('2026-11-01T10:00:00+00:00').toLocaleString());
    expect(reads(callWS)).toHaveLength(0);
  });

  it('colours an old read time and clears it after a reload', async () => {
    const { hass } = makeHass([{ success: true, sensors: SENSORS }], {
      telemetry: { sensors: SENSORS, read_at: '2026-11-01T10:00:00+00:00' },
    });
    const el = await mount(hass);
    expect(el.shadowRoot!.querySelector('.read-at')!.classList.contains('very-old')).toBe(true);

    button(el).click();
    await flush(el);

    expect(el.shadowRoot!.querySelector('.read-at')!.className).toBe('read-at');
  });

  it('keeps old values and time when a reload gets no answer', async () => {
    const { hass } = makeHass([{ success: false, reason: 'no_response' }], {
      telemetry: { sensors: SENSORS, read_at: '2026-11-01T10:00:00+00:00' },
    });
    const el = await mount(hass);

    button(el).click();
    await flush(el);

    expect(value(el, 'MCU temperature (°C)')).toBe('6.2');
    expect(el.shadowRoot!.querySelector('.error')!.textContent).toContain('did not answer');
    expect(el.shadowRoot!.querySelector('.read-at')!.getAttribute('title')).toContain(new Date('2026-11-01T10:00:00+00:00').toLocaleString());
  });

  it('says so when there are no sensors', async () => {
    const { hass } = makeHass([{ success: true, sensors: [] }]);
    const el = await mount(hass);

    button(el).click();
    await flush(el);

    expect(el.shadowRoot!.querySelector('.hint')!.textContent).toContain('no sensors');
  });

  it('waits out the traffic budget and continues', async () => {
    const { hass, callWS } = makeHass([
      { success: false, reason: 'rate_limited', retry_after: 1 },
      { success: true, sensors: SENSORS },
    ]);
    const el = await mount(hass);

    button(el).click();
    await flush(el);
    expect(el.shadowRoot!.querySelector('[role="status"]')!.textContent).toContain('1 s');

    await new Promise((resolve) => setTimeout(resolve, 1100));
    await flush(el);

    expect(reads(callWS)).toHaveLength(2);
    expect(value(el, 'MCU temperature (°C)')).toBe('6.2');
  });
});
