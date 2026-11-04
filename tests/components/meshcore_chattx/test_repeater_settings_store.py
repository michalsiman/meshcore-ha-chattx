"""Tests for remembering values read from a repeater."""
from __future__ import annotations

from types import SimpleNamespace
from unittest.mock import MagicMock

from custom_components.meshcore_chattx import async_remove_entry, ws_api
from custom_components.meshcore_chattx.const import DOMAIN
from custom_components.meshcore_chattx.repeater_credentials import (
    RepeaterSettingsStore,
)

from .test_ws_api import _call_ws, _Connection

PREFIX = "abcdef123456"
ENTRY = "meshcore_entry"


class _Api:
    connected = True

    def __init__(self, reply):
        self.reply = reply
        self._callback = None

    def contact_by_prefix(self, prefix):
        return {"public_key": PREFIX + "00" * 26, "out_path_len": 0}

    def subscribe(self, event_type, callback, attribute_filters=None):
        self._callback = callback
        return lambda: None

    async def exchange(self, name, contact, command, timestamp=None):
        if self.reply is not None:
            self._callback(SimpleNamespace(payload={"text": self.reply}))
        return SimpleNamespace(type=None, payload={"suggested_timeout": 0})


def _setup(hass, monkeypatch, reply):
    store = RepeaterSettingsStore(hass)
    hass.data.setdefault(DOMAIN, {})["repeater_settings"] = store
    coord = MagicMock()
    coord.api = _Api(reply)
    coord.config_entry.entry_id = ENTRY
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: coord)
    monkeypatch.setattr(ws_api, "_REPEATER_READ_MIN_TIMEOUT", 0.01)
    monkeypatch.setattr(ws_api, "_REPEATER_READ_MAX_TIMEOUT", 0.01)
    return store


async def _read(hass, command="get tx"):
    await _call_ws(
        ws_api.ws_repeater_read,
        hass,
        _Connection(),
        {"id": 1, "target_prefix": PREFIX, "command": command},
    )


async def _remembered(hass):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_remembered_settings,
        hass,
        conn,
        {"id": 1, "target_prefix": PREFIX},
    )
    return conn.results[0][1]["settings"]


async def test_value_is_remembered_with_time(hass, monkeypatch) -> None:
    _setup(hass, monkeypatch, "> 22")

    await _read(hass)

    answer = (await _remembered(hass))["get tx"]
    assert answer["value"] == "22"
    assert answer["read_at"]


async def test_unsupported_answer_is_remembered(hass, monkeypatch) -> None:
    _setup(hass, monkeypatch, "Error: unsupported")

    await _read(hass)

    assert (await _remembered(hass))["get tx"]["unsupported"] == "Error: unsupported"


async def test_unanswered_read_keeps_the_old_value(hass, monkeypatch) -> None:
    store = _setup(hass, monkeypatch, None)
    store.record(ENTRY, PREFIX, "get tx", {"value": "20", "read_at": "t"})

    await _read(hass)

    assert (await _remembered(hass))["get tx"]["value"] == "20"


async def test_empty_before_setup(hass, monkeypatch) -> None:
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: MagicMock())
    assert await _remembered(hass) == {}


async def test_values_survive_reload_and_removal_deletes_them(
    hass, hass_storage, freezer
) -> None:
    store = RepeaterSettingsStore(hass)
    hass.data.setdefault(DOMAIN, {})["repeater_settings"] = store
    store.record(ENTRY, PREFIX, "get tx", {"value": "22", "read_at": "t"})
    await store._store.async_save(store._settings)

    reloaded = RepeaterSettingsStore(hass)
    await reloaded.async_load()
    assert reloaded.get(ENTRY, PREFIX)["get tx"]["value"] == "22"

    await async_remove_entry(hass, MagicMock(entry_id="gone"))
    assert "meshcore_chattx.repeater_settings" not in hass_storage
