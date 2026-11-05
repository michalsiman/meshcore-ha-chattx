/** The version in a bundle URL such as /meshcore_chattx_panel/meshcore-chattx-panel.js?v=0.3.1. */
export function versionOf(url: string | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url, 'http://localhost').searchParams.get('v');
  } catch {
    return null;
  }
}

/** Whether Home Assistant now serves a different version than the one this page runs. */
export function isOutdated(loadedUrl: string | undefined, servedUrl: string | undefined): boolean {
  const loaded = versionOf(loadedUrl);
  const served = versionOf(servedUrl);
  return loaded !== null && served !== null && loaded !== served;
}

/** The bundle URL of a panel entry from Home Assistant's panel list. */
export function panelModuleUrl(panel: unknown): string | undefined {
  const config = (panel as { config?: { _panel_custom?: { module_url?: string } } } | undefined)?.config;
  return config?._panel_custom?.module_url;
}
