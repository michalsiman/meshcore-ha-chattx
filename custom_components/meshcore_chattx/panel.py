"""MeshCore Chattx sidebar panel registration.

Adapted from the upstream meshcore integration's panel registration.

Differences vs. upstream:
- All HTTP/sidebar URLs are scoped under `meshcore_chattx` so the companion
  panel co-exists with upstream's panel if both are installed.
- Sidebar title is "MeshCore Chattx" so users can tell the two apart.
- Module-URL filename matches the renamed entry point
  (`meshcore-chattx-panel.js`, produced by the rollup config).
"""
from __future__ import annotations

import hashlib
import logging
from pathlib import Path

from homeassistant.components.frontend import (
    add_extra_js_url,
    async_register_built_in_panel,
    async_remove_panel as frontend_async_remove_panel,
)
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant
from homeassistant.loader import async_get_integration

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

# Module-level: whether the bundle's GET route has been registered with
# aiohttp's router for THIS HA process. The static path is owned by
# `hass.http` (process-lifetime) — there is no public unregister API, and
# aiohttp raises `RuntimeError: Added route will never be executed,
# method GET is already registered` on a duplicate registration. The
# sidebar entry, by contrast, is owned by `hass.frontend` and removed on
# last-entry unload. We therefore track the two registrations on
# different lifecycles: this module-level flag persists across config-
# entry reloads (the module is imported once per process), while the
# sidebar entry is registered per `async_register_panel` call as before.
# The flag resets to False naturally on HA restart (fresh import).
_static_path_registered = False

# HTTP URL the bundle is served at; module_url below points at this path.
PANEL_URL = "/meshcore_chattx_panel/meshcore-chattx-panel.js"
# Filesystem path to the bundle. Lives flat at the integration root since
# the rollup output is a single file (no chunks, no source maps, no other
# assets); a wrapper directory would add nothing.
PANEL_FRONTEND_PATH = str(Path(__file__).parent / "meshcore-chattx-panel.js")

# The sidebar renders before the panel loads, so its icon comes from a small
# separate script that the frontend loads at startup.
ICONS_URL = "/meshcore_chattx_panel/chattx-icons.js"
ICONS_FRONTEND_PATH = str(Path(__file__).parent / "chattx-icons.js")
# Unread total in the browser tab title, on every Home Assistant page.
TAB_BADGE_URL = "/meshcore_chattx_panel/chattx-tab-badge.js"
TAB_BADGE_FRONTEND_PATH = str(Path(__file__).parent / "chattx-tab-badge.js")

# Panel texts, one JSON file per language, fetched by the panel at startup.
TRANSLATIONS_URL = "/meshcore_chattx_panel/i18n"
TRANSLATIONS_PATH = str(Path(__file__).parent / "panel_translations")

PANEL_ICON = "chattx:radio-handheld-x"
PANEL_TITLE = "MeshCore Chattx"

# Sidebar URL slug — the panel will be reachable at /meshcore-chattx in the HA UI.
PANEL_URL_PATH = "meshcore-chattx"


def _bundle_fingerprint() -> str:
    """Return a short hash of the bundle, or an empty string if unreadable."""
    try:
        return hashlib.sha256(Path(PANEL_FRONTEND_PATH).read_bytes()).hexdigest()[:10]
    except OSError:
        return ""


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register the MeshCore Chattx sidebar panel.

    Static-path registration is gated on the module-level
    `_static_path_registered` flag — it runs exactly once per HA process
    lifetime, regardless of how many times the config entry is reloaded.
    The sidebar entry, by contrast, is registered per call here and torn
    down by `async_remove_panel` on last-entry unload, matching HA's
    `frontend` panel-lifecycle convention.
    """
    global _static_path_registered
    integration = await async_get_integration(hass, DOMAIN)
    if not _static_path_registered:
        await hass.http.async_register_static_paths(
            [
                StaticPathConfig(PANEL_URL, PANEL_FRONTEND_PATH, cache_headers=False),
                StaticPathConfig(ICONS_URL, ICONS_FRONTEND_PATH, cache_headers=False),
                StaticPathConfig(TAB_BADGE_URL, TAB_BADGE_FRONTEND_PATH, cache_headers=False),
                StaticPathConfig(TRANSLATIONS_URL, TRANSLATIONS_PATH, cache_headers=False),
            ]
        )
        add_extra_js_url(hass, f"{ICONS_URL}?v={integration.version}")
        add_extra_js_url(hass, f"{TAB_BADGE_URL}?v={integration.version}")
        _static_path_registered = True
        _LOGGER.debug("Registered MeshCore Chattx panel static path %s", PANEL_URL)
    # The version alone stays the same while a build is being tested, so a
    # browser could keep the previous build; the content hash changes with it.
    fingerprint = await hass.async_add_executor_job(_bundle_fingerprint)
    bundle_version = (
        f"{integration.version}-{fingerprint}" if fingerprint else str(integration.version)
    )
    async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        frontend_url_path=PANEL_URL_PATH,
        config={
            "_panel_custom": {
                "name": "meshcore-chattx-panel",
                # Version and content hash in the URL make browsers fetch
                # the new bundle after an update instead of a cached copy.
                "module_url": f"{PANEL_URL}?v={bundle_version}",
            }
        },
        require_admin=False,
    )
    _LOGGER.debug("Registered MeshCore Chattx sidebar panel")


async def async_remove_panel(hass: HomeAssistant) -> None:
    """Remove the MeshCore Chattx sidebar panel.

    The static path registered in `async_register_panel` is intentionally
    NOT torn down — `hass.http` has no public unregister API, and aiohttp
    will reject re-registration on the next setup. The bundle URL stays
    served for the lifetime of the HA process; only the sidebar entry is
    removed. This matches HA's documented panel/static-path contract:
    static paths are process-lifetime, sidebar entries are entry-lifetime.
    """
    frontend_async_remove_panel(hass, PANEL_URL_PATH)
    _LOGGER.debug("Removed MeshCore Chattx sidebar panel")
