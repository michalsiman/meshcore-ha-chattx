/**
 * Our own channel message as our radio heard it repeated: one line per
 * heard copy, with the repeaters it went through by name.
 */

import { resolveRoute, type MapNode } from './path-route';

export interface HeardCopy {
  /** Repeaters in travel order, by name ("(?)" when the prefix is shared), else the prefix. */
  repeaters: string[];
  hops: number;
  snr?: number;
  rssi?: number;
}

function label(point: { name: string; prefix: string; ambiguous: boolean }): string {
  if (!point.name) return point.prefix;
  return point.ambiguous ? `${point.name} (?)` : point.name;
}

/** Heard copies, shortest route first, then the stronger signal. */
export function heardCopies(
  rxLogData: Array<Record<string, unknown>> | undefined,
  nodes: MapNode[],
  me: { lat: number; lon: number } | null,
): HeardCopy[] {
  const copies: HeardCopy[] = [];
  for (const entry of rxLogData ?? []) {
    const path = (entry.path_nodes as string[] | undefined) ?? [];
    if (path.length === 0) continue;
    const route = resolveRoute({
      pathNodes: path,
      nodes,
      me: me ? { ...me, name: '' } : null,
      outgoing: true,
    }).filter((p) => p.kind === 'repeater');
    const snr = typeof entry.snr === 'number' ? entry.snr : undefined;
    const rssi = typeof entry.rssi === 'number' ? entry.rssi : undefined;
    copies.push({ repeaters: route.map(label), hops: path.length, snr, rssi });
  }
  return copies.sort((a, b) => a.hops - b.hops || (b.snr ?? -99) - (a.snr ?? -99));
}

/** How many repeaters we heard repeat it: the last repeater of each copy, counted once. */
export function heardRepeaterCount(rxLogData: Array<Record<string, unknown>> | undefined): number {
  const last = new Set<string>();
  for (const entry of rxLogData ?? []) {
    const path = entry.path_nodes as string[] | undefined;
    if (path && path.length > 0) last.add(path[path.length - 1].toLowerCase());
  }
  return last.size;
}
