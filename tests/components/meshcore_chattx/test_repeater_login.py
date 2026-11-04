"""Tests for repeater login and remembered passwords."""
from __future__ import annotations

from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import Unauthorized

from custom_components.meshcore_chattx import async_remove_entry, ws_api
from custom_components.meshcore_chattx.const import DOMAIN
from custom_components.meshcore_chattx.repeater_credentials import (
    STORAGE_KEY_REPEATER_CREDENTIALS,
    RepeaterCredentialStore,
    RepeaterLoginStore,
)

from .test_ws_api import _call_ws, _Connection

PREFIX = "abcdef123456"
ENTRY = "meshcore_entry"


def _success(is_admin=True):
    return SimpleNamespace(payload={"is_admin": is_admin, "permissions": 1})


@pytest.fixture
async def credentials(hass: HomeAssistant) -> RepeaterCredentialStore:
    store = RepeaterCredentialStore(hass)
    bucket = hass.data.setdefault(DOMAIN, {})
    bucket["repeater_credentials"] = store
    bucket["repeater_logins"] = RepeaterLoginStore(hass)
    return store


@pytest.fixture
def coordinator(monkeypatch) -> MagicMock:
    coord = MagicMock()
    coord.config_entry.entry_id = ENTRY
    coord.api.connected = True
    coord.api.contact_by_prefix.return_value = {
        "public_key": PREFIX,
        "out_path_len": 2,
    }
    coord.api.login = AsyncMock(return_value=_success())
    coord.check_interactive_budget.return_value = 0.0
    monkeypatch.setattr(ws_api, "_get_coordinator", lambda hass, entry_id=None: coord)
    return coord


async def _login(hass, **fields):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_login,
        hass,
        conn,
        {"id": 1, "target_prefix": PREFIX, "remember": False, **fields},
    )
    return conn


async def test_remember_saves_after_success_without_exposing_password(
    hass, credentials, coordinator
) -> None:
    conn = await _login(hass, password="s3cret", remember=True)

    result = conn.results[0][1]
    assert result == {"success": True, "is_admin": True, "has_saved_password": True}
    assert "s3cret" not in str(result)
    assert credentials.get(ENTRY, PREFIX) == "s3cret"
    coordinator.api.login.assert_awaited_once()
    assert coordinator.api.login.await_args.args[1] == "s3cret"


async def test_failed_login_does_not_save_or_replace(
    hass, credentials, coordinator
) -> None:
    await credentials.async_set(ENTRY, PREFIX, "old")
    coordinator.api.login.return_value = None

    conn = await _login(hass, password="wrong", remember=True)

    assert conn.results[0][1]["reason"] == "no_response"
    assert conn.results[0][1]["has_saved_password"] is True
    assert credentials.get(ENTRY, PREFIX) == "old"


async def test_omitted_password_uses_saved_one(hass, credentials, coordinator) -> None:
    await credentials.async_set(ENTRY, PREFIX, "stored")

    await _login(hass, remember=True)

    assert coordinator.api.login.await_args.args[1] == "stored"
    assert credentials.get(ENTRY, PREFIX) == "stored"


async def test_success_without_remember_forgets_saved(
    hass, credentials, coordinator
) -> None:
    await credentials.async_set(ENTRY, PREFIX, "stored")

    conn = await _login(hass, password="new", remember=False)

    assert conn.results[0][1]["has_saved_password"] is False
    assert credentials.get(ENTRY, PREFIX) is None


async def test_blank_password_is_not_remembered(hass, credentials, coordinator) -> None:
    conn = await _login(hass, remember=True)

    assert coordinator.api.login.await_args.args[1] == ""
    assert conn.results[0][1]["has_saved_password"] is False


async def test_guest_login_reports_not_admin(hass, credentials, coordinator) -> None:
    coordinator.api.login.return_value = _success(is_admin=False)

    conn = await _login(hass, password="guest")

    assert conn.results[0][1]["is_admin"] is False


async def test_rate_limited_does_not_send(hass, credentials, coordinator) -> None:
    coordinator.check_interactive_budget.return_value = 12.5

    conn = await _login(hass, password="x")

    assert conn.results[0][1]["reason"] == "rate_limited"
    assert conn.results[0][1]["retry_after"] == 12
    coordinator.api.login.assert_not_awaited()


@pytest.mark.parametrize(("out_path_len", "lane"), [(2, "direct"), (-1, "flood"), (None, "flood")])
async def test_budget_lane_follows_known_route(
    hass, credentials, coordinator, out_path_len, lane
) -> None:
    coordinator.api.contact_by_prefix.return_value = {"out_path_len": out_path_len}

    await _login(hass, password="x")

    coordinator.check_interactive_budget.assert_called_once_with(lane)


async def test_zero_hop_repeater_skips_budget(hass, credentials, coordinator) -> None:
    coordinator.api.contact_by_prefix.return_value = {"out_path_len": 0}
    coordinator.check_interactive_budget.return_value = 99.0

    conn = await _login(hass, password="x")

    coordinator.check_interactive_budget.assert_not_called()
    assert conn.results[0][1]["success"] is True


async def test_unknown_contact_and_disconnected_radio(
    hass, credentials, coordinator
) -> None:
    coordinator.api.contact_by_prefix.return_value = None
    conn = await _login(hass, password="x")
    assert conn.errors[0][1] == "not_found"

    coordinator.api.connected = False
    conn = await _login(hass, password="x")
    assert conn.errors[0][1] == "not_connected"
    coordinator.api.login.assert_not_awaited()


async def test_login_exception_does_not_leak_password(
    hass, credentials, coordinator, caplog
) -> None:
    coordinator.api.login.side_effect = RuntimeError("radio down")

    conn = await _login(hass, password="s3cret", remember=True)

    assert conn.errors[0][1] == "error"
    assert "s3cret" not in str(conn.errors)
    assert "s3cret" not in caplog.text
    assert credentials.get(ENTRY, PREFIX) is None


async def test_state_and_forget(hass, credentials, coordinator) -> None:
    await credentials.async_set(ENTRY, PREFIX, "stored")

    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_login_state, hass, conn, {"id": 1, "target_prefix": PREFIX}
    )
    assert conn.results[0][1] == {"has_saved_password": True, "logged_in_at": None}

    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_forget_password, hass, conn, {"id": 2, "target_prefix": PREFIX}
    )
    assert conn.results[0][1] == {"has_saved_password": False}
    assert credentials.get(ENTRY, PREFIX) is None


async def test_commands_require_admin() -> None:
    for handler in (
        ws_api.ws_repeater_login,
        ws_api.ws_repeater_login_state,
        ws_api.ws_repeater_forget_password,
    ):
        conn = _Connection()
        conn.user = MagicMock(is_admin=False)
        with pytest.raises(Unauthorized):
            handler(MagicMock(), conn, {"id": 1, "target_prefix": PREFIX})


async def _state(hass):
    conn = _Connection()
    await _call_ws(
        ws_api.ws_repeater_login_state, hass, conn, {"id": 1, "target_prefix": PREFIX}
    )
    return conn.results[0][1]


async def test_admin_login_is_remembered(hass, credentials, coordinator) -> None:
    assert (await _state(hass))["logged_in_at"] is None

    await _login(hass, password="x")

    assert (await _state(hass))["logged_in_at"]


async def test_failed_login_keeps_a_remembered_login(
    hass, credentials, coordinator
) -> None:
    await _login(hass, password="x")
    coordinator.api.login.return_value = None

    await _login(hass, password="y")

    assert (await _state(hass))["logged_in_at"]


async def test_guest_login_clears_a_remembered_login(
    hass, credentials, coordinator
) -> None:
    await _login(hass, password="x")
    coordinator.api.login.return_value = _success(is_admin=False)

    await _login(hass, password="guest")

    assert (await _state(hass))["logged_in_at"] is None


async def test_guest_login_is_not_remembered(hass, credentials, coordinator) -> None:
    coordinator.api.login.return_value = _success(is_admin=False)

    await _login(hass, password="guest")

    assert (await _state(hass))["logged_in_at"] is None


async def test_store_survives_reload(hass, hass_storage) -> None:
    store = RepeaterCredentialStore(hass)
    await store.async_set(ENTRY, PREFIX, "stored")

    reloaded = RepeaterCredentialStore(hass)
    await reloaded.async_load()

    assert reloaded.get(ENTRY, PREFIX) == "stored"


async def test_removing_integration_deletes_passwords(
    hass, hass_storage, credentials
) -> None:
    await credentials.async_set(ENTRY, PREFIX, "stored")
    assert STORAGE_KEY_REPEATER_CREDENTIALS in hass_storage

    await async_remove_entry(hass, MagicMock(entry_id="gone"))

    assert STORAGE_KEY_REPEATER_CREDENTIALS not in hass_storage
    assert "repeater_credentials" not in hass.data[DOMAIN]
    assert "repeater_logins" not in hass.data[DOMAIN]
