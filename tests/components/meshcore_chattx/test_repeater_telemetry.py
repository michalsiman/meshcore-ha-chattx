"""Tests for reading a repeater's telemetry."""
from __future__ import annotations

from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant.exceptions import Unauthorized

from custom_components.meshcore_chattx import ws_api
from custom_components.meshcore_chattx.const import DOMAIN
from custom_components.meshcore_chattx.repeater_credentials import (
    RepeaterSettingsStore,
)

from .test_ws_api import _call_ws, _Connection

PREFIX = "abcdef123456"
ENTRY = "meshcore_entry"
LPP = [{"channel": 1, "type": "voltage", "value": 3.9}]


def _setup(hass, monkeypatch, *answers, out_path_len=2, wait=0.0):
    store = RepeaterSettingsStore(hass)
    hass.data.setdefault(DOMAIN, {})["repeater_settings"] = store
    coord = MagicMock()
    coord.config_entry.entry_id = ENTRY
    coord.api.connected = True
    coord.api.contact_by_prefix.return_value = {"out_path_len": out_path_len}
    coord.api.req_telemetry = AsyncMock(side_effect=list(answers))
    coord.check_interactive_budget.return_value = wait
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: coord)
    return coord, store


async def _read(hass):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_read_telemetry, hass, conn, {"id": 1, "target_prefix": PREFIX}
    )
    return conn


def _answer(lpp=LPP):
    return SimpleNamespace(payload={"lpp": lpp})


async def test_returns_and_remembers_sensors(hass, monkeypatch) -> None:
    _, store = _setup(hass, monkeypatch, _answer())

    conn = await _read(hass)

    assert conn.results[0][1] == {"success": True, "sensors": LPP}
    remembered = store.get(ENTRY, PREFIX)["telemetry"]
    assert remembered["sensors"] == LPP
    assert remembered["read_at"]


async def test_no_sensors_is_a_success(hass, monkeypatch) -> None:
    _setup(hass, monkeypatch, _answer([]))

    conn = await _read(hass)

    assert conn.results[0][1] == {"success": True, "sensors": []}


async def test_retries_once_then_gives_up_keeping_old_values(hass, monkeypatch) -> None:
    coord, store = _setup(hass, monkeypatch, None, None)
    store.record(ENTRY, PREFIX, "telemetry", {"sensors": LPP, "read_at": "t"})

    conn = await _read(hass)

    assert conn.results[0][1] == {"success": False, "reason": "no_response"}
    assert coord.api.req_telemetry.await_count == 2
    assert store.get(ENTRY, PREFIX)["telemetry"]["read_at"] == "t"


async def test_rate_limit_does_not_send(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch, wait=7.9)

    conn = await _read(hass)

    assert conn.results[0][1]["reason"] == "rate_limited"
    coord.api.req_telemetry.assert_not_awaited()


async def test_zero_hop_skips_budget(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch, _answer(), out_path_len=0, wait=99.0)

    conn = await _read(hass)

    assert conn.results[0][1]["success"] is True
    coord.check_interactive_budget.assert_not_called()


async def test_exception_gives_generic_error(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch)
    coord.api.req_telemetry = AsyncMock(side_effect=RuntimeError("radio down"))

    conn = await _read(hass)

    assert conn.errors[0][1] == "error"


async def test_older_core_is_refused(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch)
    del coord.api.req_telemetry

    conn = await _read(hass)

    assert conn.errors[0][1] == "not_supported"


def test_requires_admin() -> None:
    conn = _Connection()
    conn.user = MagicMock(is_admin=False)
    with pytest.raises(Unauthorized):
        ws_api.ws_repeater_read_telemetry(
            MagicMock(), conn, {"id": 1, "target_prefix": PREFIX}
        )
