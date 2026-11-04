"""Tests for quick messages and conversation activity."""
from __future__ import annotations

from unittest.mock import MagicMock

import pytest
import voluptuous as vol
from homeassistant.exceptions import Unauthorized

from custom_components.meshcore_chattx import ws_api
from custom_components.meshcore_chattx.const import DOMAIN
from custom_components.meshcore_chattx.quick_messages import QuickMessageStore

from .test_ws_api import _call_ws, _Connection

SCHEMA = ws_api.ws_set_quick_messages._ws_schema


def _payload(messages):
    return {"id": 1, "type": "meshcore_chattx/set_quick_messages", "messages": messages}


async def test_set_get_and_reload_keep_order(hass, hass_storage) -> None:
    hass.data.setdefault(DOMAIN, {})["quick_messages"] = QuickMessageStore(hass)

    conn = _Connection()
    await _call_ws(ws_api.ws_set_quick_messages, hass, conn, _payload(["b", "a"]))
    assert conn.results[0][1] == {"messages": ["b", "a"]}

    conn = _Connection()
    await _call_ws(ws_api.ws_get_quick_messages, hass, conn, {"id": 2})
    assert conn.results[0][1] == {"messages": ["b", "a"]}

    reloaded = QuickMessageStore(hass)
    await reloaded.async_load()
    assert reloaded.get() == ["b", "a"]


async def test_get_is_empty_before_setup(hass) -> None:
    conn = _Connection()
    await _call_ws(ws_api.ws_get_quick_messages, hass, conn, {"id": 1})
    assert conn.results[0][1] == {"messages": []}


@pytest.mark.parametrize("messages", [[""], ["x" * 161], ["č" * 81], ["x"] * 51, [1]])
def test_schema_rejects_bad_lists(messages) -> None:
    with pytest.raises(vol.Invalid):
        SCHEMA(_payload(messages))


@pytest.mark.parametrize("message", ["x" * 160, "č" * 80])
def test_schema_accepts_messages_at_the_limit(message) -> None:
    SCHEMA(_payload([message]))


def test_saving_requires_admin() -> None:
    conn = _Connection()
    conn.user = MagicMock(is_admin=False)
    with pytest.raises(Unauthorized):
        ws_api.ws_set_quick_messages(MagicMock(), conn, _payload(["x"]))


async def test_activity_skips_conversations_without_a_time(hass, monkeypatch) -> None:
    store = MagicMock()
    store.get_message_index.return_value = {
        "binary_sensor.a": {"last_message_ts": "2026-11-04T10:00:00+00:00"},
        "binary_sensor.b": {"last_message_ts": ""},
    }
    monkeypatch.setattr(ws_api, "_get_store", lambda hass, entry_id: store)

    conn = _Connection()
    await _call_ws(ws_api.ws_get_conversation_activity, hass, conn, {"id": 1})

    assert conn.results[0][1] == {"activity": {"binary_sensor.a": "2026-11-04T10:00:00+00:00"}}
