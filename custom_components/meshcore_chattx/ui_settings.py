"""Panel settings shared by everyone who opens Chattx.

There is one MeshCore companion, so the panel's settings (language, units,
hidden sensors, drafts, …) are kept once in Home Assistant, the same for
every user, browser and device. Values are strings under the panel's
"chattx-…" keys. Changes are merged key by key, so two devices changing
different settings don't overwrite each other, and pushed to every open
panel through ``meshcore_chattx/subscribe_settings``.
"""
from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from homeassistant.helpers.storage import Store

from .const import DOMAIN

STORAGE_KEY = "meshcore_chattx.ui_settings"
STORAGE_VERSION = 1
SIGNAL_SETTINGS_CHANGED = f"{DOMAIN}_ui_settings_changed"
MAX_KEYS = 100
MAX_VALUE = 64 * 1024


class UiSettingsStore:
    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store[dict] = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._values: dict[str, str] = {}

    async def async_load(self) -> None:
        data = await self._store.async_load()
        if isinstance(data, dict) and isinstance(data.get("values"), dict):
            self._values = {k: v for k, v in data["values"].items() if isinstance(k, str) and isinstance(v, str)}

    def values(self) -> dict[str, str]:
        return dict(self._values)

    async def async_update(self, changes: dict[str, str | None]) -> dict[str, str]:
        for key, value in changes.items():
            if value is None:
                self._values.pop(key, None)
            else:
                self._values[key] = value
        # Drafts change with every key press: write at most every few seconds.
        self._store.async_delay_save(lambda: {"values": self._values}, 3)
        async_dispatcher_send(self._hass, SIGNAL_SETTINGS_CHANGED, self.values())
        return self.values()


def _store(hass: HomeAssistant) -> UiSettingsStore | None:
    return hass.data.get(DOMAIN, {}).get("ui_settings")


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/get_settings"})
@websocket_api.async_response
async def ws_get_settings(hass, connection, msg):
    store = _store(hass)
    connection.send_result(msg["id"], {"values": store.values() if store else {}})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/set_settings",
        vol.Required("changes"): vol.All(
            {vol.Match(r"^chattx-[a-z0-9-]{1,60}$"): vol.Any(None, vol.All(str, vol.Length(max=MAX_VALUE)))},
            vol.Length(max=MAX_KEYS),
        ),
    }
)
@websocket_api.async_response
async def ws_set_settings(hass, connection, msg):
    """Change some settings (null removes one); every open panel gets the result."""
    store = _store(hass)
    if not store:
        connection.send_error(msg["id"], "not_found", "Integration is not set up yet")
        return
    values = await store.async_update(msg["changes"])
    connection.send_result(msg["id"], {"values": values})


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/subscribe_settings"})
@callback
def ws_subscribe_settings(hass, connection, msg):
    """Send the settings now and after every change, to any user."""
    @callback
    def forward(values: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"values": values}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_SETTINGS_CHANGED, forward)
    connection.send_result(msg["id"])
    store = _store(hass)
    forward(store.values() if store else {})


def async_register_ui_settings_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_get_settings)
    websocket_api.async_register_command(hass, ws_set_settings)
    websocket_api.async_register_command(hass, ws_subscribe_settings)
