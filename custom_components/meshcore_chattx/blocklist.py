"""Blocked senders: messages from them are not stored or shown.

An entry is a public key (or its first bytes, at least 6 hex digits).
Direct messages carry the sender's key prefix, so they are matched by key.
Channel messages carry only the sender's name, so they are matched by the
names the key goes by: the current name of the contact with that key, and
every name seen for it since it was blocked (kept in the entry), so a
renamed contact stays blocked once its new advert has been heard.
"""
from __future__ import annotations

import re
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN

STORAGE_KEY = "meshcore_chattx.blocklist"
STORAGE_VERSION = 1
EVENT_BLOCKLIST_UPDATED = f"{DOMAIN}_blocklist_updated"
_KEY = re.compile(r"^[0-9a-f]{6,64}$")
MAX_ENTRIES = 200


def _contact_names(hass: HomeAssistant) -> dict[str, str]:
    """Public key → advertised name, from the core integration's contact sensors."""
    names: dict[str, str] = {}
    for state in hass.states.async_all("binary_sensor"):
        if not state.entity_id.startswith("binary_sensor.meshcore_") or not state.entity_id.endswith("_contact"):
            continue
        key = state.attributes.get("public_key")
        name = state.attributes.get("adv_name")
        if isinstance(key, str) and key and isinstance(name, str) and name:
            names[key.lower()] = name
    return names


def _matches(key: str, other: str) -> bool:
    """Same key, when one may be a prefix of the other."""
    n = min(len(key), len(other))
    return n >= 6 and key[:n] == other[:n]


class BlocklistStore:
    """The blocked keys with the names they were seen under."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store[dict] = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._entries: list[dict[str, Any]] = []

    async def async_load(self) -> None:
        data = await self._store.async_load()
        if isinstance(data, dict) and isinstance(data.get("entries"), list):
            self._entries = [
                {"key": e["key"], "names": [n for n in e.get("names", []) if isinstance(n, str)]}
                for e in data["entries"]
                if isinstance(e, dict) and isinstance(e.get("key"), str) and _KEY.match(e["key"])
            ]

    def _refresh_names(self) -> bool:
        """Add the current names of the blocked keys; True when one was new."""
        changed = False
        contacts = _contact_names(self._hass)
        for entry in self._entries:
            for key, name in contacts.items():
                if _matches(entry["key"], key) and name not in entry["names"]:
                    entry["names"].append(name)
                    changed = True
        return changed

    def entries(self) -> list[dict[str, Any]]:
        if self._refresh_names():
            self._hass.async_create_task(self._save())
        return [dict(e, names=list(e["names"])) for e in self._entries]

    async def async_set(self, keys: list[str]) -> None:
        """Replace the list, keeping the names already known for kept keys."""
        known = {e["key"]: e["names"] for e in self._entries}
        self._entries = [{"key": k, "names": list(known.get(k, []))} for k in dict.fromkeys(keys)]
        self._refresh_names()
        await self._save()

    async def _save(self) -> None:
        await self._store.async_save({"entries": self._entries})

    def is_blocked(self, record: dict) -> bool:
        """True for a received message from a blocked sender."""
        if not self._entries or record.get("outgoing"):
            return False
        prefix = str(record.get("pubkey_prefix") or "").lower()
        if prefix and any(_matches(e["key"], prefix) for e in self._entries):
            return True
        sender = record.get("sender") or ""
        if not sender:
            return False
        if self._refresh_names():
            self._hass.async_create_task(self._save())
        return any(sender in e["names"] for e in self._entries)


def get_blocklist(hass: HomeAssistant) -> BlocklistStore | None:
    return hass.data.get(DOMAIN, {}).get("blocklist")


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/get_blocklist"})
@websocket_api.async_response
async def ws_get_blocklist(hass, connection, msg):
    """The blocked keys and the names they go by."""
    store = get_blocklist(hass)
    connection.send_result(msg["id"], {"entries": store.entries() if store else []})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/set_blocklist",
        vol.Required("keys"): vol.All(
            [vol.All(str, vol.Lower, vol.Match(_KEY))], vol.Length(max=MAX_ENTRIES)
        ),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_set_blocklist(hass, connection, msg):
    """Replace the blocked keys."""
    store = get_blocklist(hass)
    if not store:
        connection.send_error(msg["id"], "not_found", "Integration is not set up yet")
        return
    await store.async_set(msg["keys"])
    entries = store.entries()
    hass.bus.async_fire(EVENT_BLOCKLIST_UPDATED, {"entries": entries})
    connection.send_result(msg["id"], {"entries": entries})


def async_register_blocklist_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_get_blocklist)
    websocket_api.async_register_command(hass, ws_set_blocklist)
