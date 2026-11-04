"""Tests for reading repeater settings."""
from __future__ import annotations

import asyncio
from types import SimpleNamespace
from unittest.mock import MagicMock

import pytest
import voluptuous as vol

from custom_components.meshcore_chattx import ws_api
from custom_components.meshcore_chattx.ws_api import is_repeater_read_reply

from .test_ws_api import _call_ws, _Connection

meshcore_events = pytest.importorskip("meshcore.events")

PREFIX = "abcdef123456"
SCHEMA = ws_api.ws_repeater_read._ws_schema


class FakeApi:
    """Radio link that answers each command from a list of replies."""

    connected = True

    def __init__(self, replies):
        self.replies = list(replies)
        self.commands = []
        self.timestamps = []
        self.filters = None
        self._callback = None

    def contact_by_prefix(self, prefix):
        return {"public_key": PREFIX + "00" * 26, "out_path_len": 1, "type": 2}

    def subscribe(self, event_type, callback, attribute_filters=None):
        self._callback = callback
        self.filters = attribute_filters

        def unsubscribe():
            self._callback = None

        return unsubscribe

    async def exchange(self, name, contact, command, timestamp=None):
        self.commands.append(command)
        self.timestamps.append(timestamp)
        reply = self.replies.pop(0)
        if reply is not None:
            self._callback(SimpleNamespace(payload={"text": reply}))
        return SimpleNamespace(type=None, payload={"suggested_timeout": 0})


@pytest.fixture(autouse=True)
def short_timeouts(monkeypatch):
    monkeypatch.setattr(ws_api, "_REPEATER_READ_MIN_TIMEOUT", 0.01)
    monkeypatch.setattr(ws_api, "_REPEATER_READ_MAX_TIMEOUT", 0.01)


def _use_api(monkeypatch, api, wait=0.0):
    coord = MagicMock()
    coord.api = api
    coord.check_interactive_budget.return_value = wait
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: coord)
    return coord


async def _read(hass, command="get tx"):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_read,
        hass,
        conn,
        {"id": 1, "target_prefix": PREFIX, "command": command},
    )
    return conn


async def test_reply_is_returned_without_cli_prefix(hass, monkeypatch) -> None:
    api = FakeApi(["  > 22\n"])
    _use_api(monkeypatch, api)

    conn = await _read(hass)

    assert conn.results[0][1] == {"success": True, "value": "22"}
    assert api.filters == {"pubkey_prefix": PREFIX}


async def test_reply_without_prefix_is_kept(hass, monkeypatch) -> None:
    api = FakeApi(["v1.18.0 (Build: 1 Nov 2026)"])
    _use_api(monkeypatch, api)

    conn = await _read(hass, "ver")

    assert conn.results[0][1]["value"] == "v1.18.0 (Build: 1 Nov 2026)"


async def test_empty_value_is_a_success(hass, monkeypatch) -> None:
    _use_api(monkeypatch, FakeApi(["> "]))

    conn = await _read(hass, "get owner.info")

    assert conn.results[0][1] == {"success": True, "value": ""}


@pytest.mark.parametrize(
    "reply", ["Error: unsupported by this board", "Unknown command", "??: get x"]
)
async def test_firmware_refusal_is_unsupported(hass, monkeypatch, reply) -> None:
    _use_api(monkeypatch, FakeApi([reply]))

    conn = await _read(hass)

    assert conn.results[0][1] == {
        "success": False,
        "reason": "unsupported",
        "message": reply,
    }


async def test_retries_once_with_a_newer_timestamp(hass, monkeypatch) -> None:
    api = FakeApi([None, "> 22"])
    _use_api(monkeypatch, api)

    conn = await _read(hass)

    assert conn.results[0][1]["value"] == "22"
    assert api.commands == ["get tx", "get tx"]
    assert api.timestamps[1] > api.timestamps[0]


async def test_no_response_after_retry(hass, monkeypatch) -> None:
    api = FakeApi([None, None])
    _use_api(monkeypatch, api)

    conn = await _read(hass)

    assert conn.results[0][1] == {"success": False, "reason": "no_response"}
    assert len(api.commands) == 2


async def test_rate_limit_does_not_send(hass, monkeypatch) -> None:
    api = FakeApi([])
    _use_api(monkeypatch, api, wait=7.9)

    conn = await _read(hass)

    assert conn.results[0][1]["reason"] == "rate_limited"
    assert conn.results[0][1]["retry_after"] == 7
    assert api.commands == []


async def test_consecutive_reads_never_share_a_timestamp(hass, monkeypatch) -> None:
    api = FakeApi(["> 1", "> 2", "> 3"])
    _use_api(monkeypatch, api)

    for _ in range(3):
        await _read(hass)

    assert len(set(api.timestamps)) == 3
    assert api.timestamps == sorted(api.timestamps)


@pytest.mark.parametrize("command", ["get tx", "get radio.rxgain", "ver", "board"])
def test_schema_accepts_read_commands(command) -> None:
    SCHEMA({"id": 1, "type": "meshcore_chattx/repeater_read", "target_prefix": PREFIX, "command": command})


@pytest.mark.parametrize(
    "command",
    [
        "set tx 22",
        "reboot",
        "password x",
        "get tx; reboot",
        "get tx\nreboot",
        "get guest.password",
        "get prv.key",
        "start ota",
    ],
)
def test_schema_rejects_everything_else(command) -> None:
    with pytest.raises(vol.Invalid):
        SCHEMA({"id": 1, "type": "meshcore_chattx/repeater_read", "target_prefix": PREFIX, "command": command})


async def test_replies_hidden_only_around_a_read(hass, monkeypatch) -> None:
    monkeypatch.setattr(ws_api, "_REPEATER_READ_REPLY_GRACE", 0.05)
    monkeypatch.setattr(ws_api, "_repeater_read_replies_until", {})
    assert not is_repeater_read_reply(PREFIX)

    seen_during_read = []

    class Api(FakeApi):
        async def exchange(self, *args, **kwargs):
            seen_during_read.append(is_repeater_read_reply(PREFIX))
            return await super().exchange(*args, **kwargs)

    _use_api(monkeypatch, Api(["> 22"]))
    await _read(hass)

    assert seen_during_read == [True]
    assert is_repeater_read_reply(PREFIX)  # late reply grace
    assert not is_repeater_read_reply("ffffffffffff")
    assert not is_repeater_read_reply(None)

    await asyncio.sleep(0.06)
    assert not is_repeater_read_reply(PREFIX)
