"""Tests for the repeater terminal command."""
from __future__ import annotations

from types import SimpleNamespace
from unittest.mock import MagicMock

import pytest
import voluptuous as vol
from homeassistant.exceptions import Unauthorized

from custom_components.meshcore_chattx import ws_api
from custom_components.meshcore_chattx.const import DOMAIN
from custom_components.meshcore_chattx.repeater_credentials import (
    RepeaterSettingsStore,
)

from .test_ws_api import _call_ws, _Connection

PREFIX = "abcdef123456"
SCHEMA = ws_api.ws_repeater_command._ws_schema


class _Api:
    connected = True

    def __init__(self, reply):
        self.reply = reply
        self.commands = []
        self._callback = None

    def contact_by_prefix(self, prefix):
        return {"public_key": PREFIX + "00" * 26, "out_path_len": 2}

    def subscribe(self, event_type, callback, attribute_filters=None):
        self._callback = callback
        return lambda: None

    async def exchange(self, name, contact, command, timestamp=None):
        self.commands.append(command)
        if self.reply is not None:
            self._callback(SimpleNamespace(payload={"text": self.reply}))
        return SimpleNamespace(type=None, payload={"suggested_timeout": 0})


def _setup(hass, monkeypatch, reply, wait=0.0):
    api = _Api(reply)
    coord = MagicMock()
    coord.api = api
    coord.check_interactive_budget.return_value = wait
    coord.config_entry.entry_id = "e"
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: coord)
    monkeypatch.setattr(ws_api, "_REPEATER_READ_MAX_TIMEOUT", 0.01)
    monkeypatch.setattr(ws_api, "_repeater_read_replies_until", {})
    return api


async def _send(hass, command):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_command,
        hass,
        conn,
        {"id": 1, "target_prefix": PREFIX, "command": command},
    )
    return conn


async def test_returns_the_raw_reply(hass, monkeypatch) -> None:
    api = _setup(hass, monkeypatch, "> 22")

    conn = await _send(hass, "get tx")

    assert conn.results[0][1] == {"success": True, "reply": "> 22"}
    assert api.commands == ["get tx"]


async def test_never_retries_a_command(hass, monkeypatch) -> None:
    api = _setup(hass, monkeypatch, None)

    conn = await _send(hass, "reboot")

    assert conn.results[0][1] == {"success": False, "reason": "no_response"}
    assert api.commands == ["reboot"]


async def test_rate_limit_does_not_send(hass, monkeypatch) -> None:
    api = _setup(hass, monkeypatch, "ok", wait=7.9)

    conn = await _send(hass, "reboot")

    assert conn.results[0][1] == {
        "success": False,
        "reason": "rate_limited",
        "retry_after": 7,
    }
    assert api.commands == []


async def test_reply_is_not_chat_and_not_remembered(hass, monkeypatch) -> None:
    store = RepeaterSettingsStore(hass)
    hass.data.setdefault(DOMAIN, {})["repeater_settings"] = store
    _setup(hass, monkeypatch, "> 22")

    await _send(hass, "get tx")

    assert ws_api.is_repeater_read_reply(PREFIX)
    assert store.get("e", PREFIX) == {}


@pytest.mark.parametrize("command", ["reboot", "set tx 20", "get guest.password", "x" * 160, "č" * 80])
def test_schema_accepts_any_command_within_the_limit(command) -> None:
    SCHEMA({"id": 1, "type": "meshcore_chattx/repeater_command", "target_prefix": PREFIX, "command": command})


@pytest.mark.parametrize("command", ["", "x" * 161, "č" * 81])
def test_schema_rejects_empty_and_too_long(command) -> None:
    with pytest.raises(vol.Invalid):
        SCHEMA({"id": 1, "type": "meshcore_chattx/repeater_command", "target_prefix": PREFIX, "command": command})


def test_requires_admin() -> None:
    conn = _Connection()
    conn.user = MagicMock(is_admin=False)
    with pytest.raises(Unauthorized):
        ws_api.ws_repeater_command(
            MagicMock(), conn, {"id": 1, "target_prefix": PREFIX, "command": "ver"}
        )
