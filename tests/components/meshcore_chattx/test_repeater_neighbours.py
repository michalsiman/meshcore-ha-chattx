"""Tests for reading a repeater's neighbours and regions."""
from __future__ import annotations

from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

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
ENTRY = "meshcore_entry"
PAGE = [
    {"pubkey": "aaaaaaaa", "secs_ago": 30, "snr": 5.25},
    {"pubkey": "bbbbbbbb", "secs_ago": 90, "snr": -2.0},
]


def _answer(items=PAGE, total=3):
    return SimpleNamespace(payload={"neighbours_count": total, "neighbours": items})


def _setup(hass, monkeypatch, *answers, out_path_len=2, wait=0.0):
    store = RepeaterSettingsStore(hass)
    hass.data.setdefault(DOMAIN, {})["repeater_settings"] = store
    coord = MagicMock()
    coord.config_entry.entry_id = ENTRY
    coord.api.connected = True
    coord.api.contact_by_prefix.return_value = {"out_path_len": out_path_len}
    coord.api.req_neighbours = AsyncMock(side_effect=list(answers))
    coord.check_interactive_budget.return_value = wait
    coord.resolve_neighbor_name.side_effect = lambda key: f"name-{key[:2]}"
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: coord)
    return coord, store


async def _read(hass, offset=0):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_read_neighbours,
        hass,
        conn,
        {"id": 1, "target_prefix": PREFIX, "offset": offset},
    )
    return conn


async def test_asks_for_ten_and_remembers_them(hass, monkeypatch) -> None:
    coord, store = _setup(hass, monkeypatch, _answer())

    conn = await _read(hass)

    assert coord.api.req_neighbours.await_args.args[1:] == (0, 10)
    result = conn.results[0][1]
    assert result["success"] is True
    assert result["total"] == 3
    first = result["neighbours"][0]
    assert first["name"] == "name-aa"
    assert first["snr"] == 5.25
    assert first["read_at"]
    assert store.get(ENTRY, PREFIX)["neighbours"]["total"] == 3


async def test_next_page_appends_without_duplicates(hass, monkeypatch) -> None:
    next_page = [PAGE[1], {"pubkey": "cccccccc", "secs_ago": 5, "snr": 1.0}]
    coord, store = _setup(hass, monkeypatch, _answer(), _answer(next_page))
    first = (await _read(hass)).results[0][1]

    second = (await _read(hass, offset=2)).results[0][1]

    assert coord.api.req_neighbours.await_args.args[1:] == (2, 10)
    assert [n["pubkey"] for n in second["neighbours"]] == ["aaaaaaaa", "bbbbbbbb", "cccccccc"]
    assert second["read_at"] == first["read_at"]
    assert len(store.get(ENTRY, PREFIX)["neighbours"]["neighbours"]) == 3


async def test_offset_zero_starts_over(hass, monkeypatch) -> None:
    _setup(hass, monkeypatch, _answer(), _answer(PAGE[:1], total=1))
    await _read(hass)

    result = (await _read(hass)).results[0][1]

    assert [n["pubkey"] for n in result["neighbours"]] == ["aaaaaaaa"]
    assert result["total"] == 1


async def test_retries_once_and_keeps_old_list(hass, monkeypatch) -> None:
    coord, store = _setup(hass, monkeypatch, None, None)
    store.record(ENTRY, PREFIX, "neighbours", {"neighbours": [], "read_at": "t"})

    conn = await _read(hass)

    assert conn.results[0][1] == {"success": False, "reason": "no_response"}
    assert coord.api.req_neighbours.await_count == 2
    assert store.get(ENTRY, PREFIX)["neighbours"]["read_at"] == "t"


async def test_rate_limit_does_not_send(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch, wait=7.9)

    conn = await _read(hass)

    assert conn.results[0][1]["reason"] == "rate_limited"
    coord.api.req_neighbours.assert_not_awaited()


async def test_zero_hop_skips_budget(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch, _answer(), out_path_len=0, wait=99.0)

    conn = await _read(hass)

    assert conn.results[0][1]["success"] is True
    coord.check_interactive_budget.assert_not_called()


async def test_older_core_is_refused(hass, monkeypatch) -> None:
    coord, _ = _setup(hass, monkeypatch)
    del coord.api.req_neighbours

    conn = await _read(hass)

    assert conn.errors[0][1] == "not_supported"


def test_requires_admin() -> None:
    conn = _Connection()
    conn.user = MagicMock(is_admin=False)
    with pytest.raises(Unauthorized):
        ws_api.ws_repeater_read_neighbours(
            MagicMock(), conn, {"id": 1, "target_prefix": PREFIX, "offset": 0}
        )


READ_SCHEMA = ws_api.ws_repeater_read._ws_schema


def _read_payload(command):
    return {
        "id": 1,
        "type": "meshcore_chattx/repeater_read",
        "target_prefix": PREFIX,
        "command": command,
    }


@pytest.mark.parametrize(
    "command",
    ["region", "region home", "region default", "region list allowed", "region list denied"],
)
def test_region_reads_are_allowed(command) -> None:
    READ_SCHEMA(_read_payload(command))


@pytest.mark.parametrize(
    "command",
    [
        "region home cz",
        "region default cz",
        "region save",
        "region put x",
        "region remove x",
        "region denyf *",
        "region load",
        "region list",
        "region\nreboot",
    ],
)
def test_region_writes_cant_pass_as_reads(command) -> None:
    with pytest.raises(vol.Invalid):
        READ_SCHEMA(_read_payload(command))


def test_firmware_region_errors_are_not_values() -> None:
    assert ws_api._parse_repeater_reply("Err - ??")["success"] is False


def test_multiline_tree_keeps_its_indent() -> None:
    assert ws_api._parse_repeater_reply("*^ F\n cz F\n")["value"] == "*^ F\n cz F"
