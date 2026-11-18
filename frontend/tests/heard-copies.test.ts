// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { enrichRxLog } from '../src/chat/message-parser';
import { heardCopies, heardRepeaterCount } from '../src/utils/heard-copies';
import type { MapNode } from '../src/utils/path-route';

const node = (key: string, name: string, lat: number, lon: number): MapNode => ({ key, name, lat, lon, type: 2 });
const nodes = [node('aaaa11', 'Hill', 50.0, 14.0), node('bbbb22', 'Tower', 50.1, 14.1), node('cccc33', 'Far', 50.3, 14.3)];
const me = { lat: 49.95, lon: 13.95 };

describe('enrichRxLog', () => {
  it('splits the raw path by the hash size and sets the hop count', () => {
    const [e] = enrichRxLog([{ path: 'aaaabbbbcccc', path_len: 3, path_hash_size: 2 }]);
    expect(e.path_nodes).toEqual(['aaaa', 'bbbb', 'cccc']);
    expect(e.hop_count).toBe(3);
  });

  it('derives the width from path_len and keeps existing nodes', () => {
    expect(enrichRxLog([{ path: 'aabbcc', path_len: 3 }])[0].path_nodes).toEqual(['aa', 'bb', 'cc']);
    expect(enrichRxLog([{ path: 'aabb', path_nodes: ['x'] }])[0].path_nodes).toEqual(['x']);
  });
});

describe('heardCopies', () => {
  const rx = enrichRxLog([
    { path: 'aaaabbbbcccc', path_len: 3, path_hash_size: 2, snr: 2 },
    { path: 'bbbb', path_len: 1, path_hash_size: 2, snr: -1 },
    { path: 'aaaa', path_len: 1, path_hash_size: 2, snr: 12 },
    { path: 'dddd', path_len: 1, path_hash_size: 2, snr: 1 },
  ]);

  it('names the repeaters of each copy, shortest and strongest first', () => {
    const copies = heardCopies(rx, nodes, me);
    expect(copies.map((c) => c.repeaters.join(' → '))).toEqual(['Hill', 'DDDD', 'Tower', 'Hill → Tower → Far']);
    expect(copies[3].hops).toBe(3);
  });

  it('counts each repeater we heard it from once', () => {
    expect(heardRepeaterCount(rx)).toBe(4);
    expect(heardRepeaterCount([...rx, ...enrichRxLog([{ path: 'cccc', path_len: 1, path_hash_size: 2 }])])).toBe(4);
  });
});
