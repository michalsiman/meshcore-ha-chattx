"""Unit tests for ``custom_components.meshcore_chattx.radio_compat``.

The helpers must use meshcore-ha 3.x's supported RadioSession calls when the
api is a session (so no deprecation warnings), and the 2.x attributes when it
is not. A plain MagicMock api stands in for 2.x, as in the rest of the suite.
"""
from __future__ import annotations

import asyncio
import contextlib
from unittest.mock import AsyncMock, MagicMock

from custom_components.meshcore_chattx import radio_compat as rc


class FakeSession:
    """Minimal stand-in for meshcore-ha 3.x RadioSession."""

    def __init__(self, connected: bool = True) -> None:
        self.connected = connected
        self.calls: list[tuple] = []
        self.leased = False
        self.lease_events: list[str] = []
        self.dirty = False
        self.cached = None
        self.contacts = {"abcdef": {"public_key": "abcdef"}}

    @property
    def mesh_core(self):
        raise AssertionError("3.x path must not touch api.mesh_core")

    def _cache_self_info_event(self, event):
        raise AssertionError("3.x path must not use the deprecated name")

    async def exchange(self, name, *args, **kwargs):
        self.calls.append(("exchange", name, args, kwargs, self.leased))
        return f"ok:{name}"

    async def invoke(self, name, *args, **kwargs):
        self.calls.append(("invoke", name, args, kwargs, self.leased))
        return f"ok:{name}"

    @contextlib.asynccontextmanager
    async def mesh_lease(self):
        self.leased = True
        self.lease_events.append("acquire")
        try:
            yield
        finally:
            self.leased = False
            self.lease_events.append("release")

    def command_parameters(self, name):
        return [] if name in {"set_name", "send_cmd"} else None

    async def login(self, contact, password):
        self.calls.append(("login", contact, password))
        return "login-event"

    def contact_by_prefix(self, prefix):
        return self.contacts.get(prefix)

    def cache_self_info_event(self, event):
        self.cached = event

    def mark_contacts_dirty(self):
        self.dirty = True

    def forget_contact(self, public_key):
        return self.contacts.pop(public_key, None) is not None


def _run(coro):
    return asyncio.run(coro)


def _legacy_api():
    api = MagicMock()
    api.connected = True
    api.mesh_core.commands.set_name = AsyncMock(return_value="legacy")
    api.mesh_core.commands.send_login_sync = AsyncMock(return_value="legacy-login")
    return api


def test_local_command_uses_exchange_without_lease():
    session = FakeSession()
    assert _run(rc.radio_command(session, "set_name", "Node")) == "ok:set_name"
    assert session.calls == [("exchange", "set_name", ("Node",), {}, False)]
    assert session.lease_events == []


def test_mesh_command_holds_the_lease():
    session = FakeSession()
    _run(rc.radio_command(session, "send_cmd", {"pk": 1}, "ver"))
    assert session.calls[0][:2] == ("exchange", "send_cmd")
    assert session.calls[0][4] is True
    assert session.lease_events == ["acquire", "release"]


def test_remote_wait_command_uses_invoke_under_lease():
    session = FakeSession()
    _run(rc.radio_command(session, "req_status_sync", {"pk": 1}))
    assert session.calls[0][:2] == ("invoke", "req_status_sync")
    assert session.calls[0][4] is True


def test_legacy_command_goes_to_mesh_core():
    api = _legacy_api()
    assert _run(rc.radio_command(api, "set_name", "Node")) == "legacy"
    api.mesh_core.commands.set_name.assert_awaited_once_with("Node")


def test_login_session_and_legacy():
    session = FakeSession()
    assert _run(rc.login(session, {"pk": 1}, "pw")) == "login-event"
    api = _legacy_api()
    assert _run(rc.login(api, {"pk": 1}, "pw")) == "legacy-login"
    api.mesh_core.commands.send_login_sync.assert_awaited_once_with({"pk": 1}, "pw")


def test_has_command():
    session = FakeSession()
    assert rc.has_command(session, "set_name")
    assert not rc.has_command(session, "nope")
    assert not rc.has_command(session, "_send_login_raw")
    api = _legacy_api()
    api.mesh_core.commands = MagicMock(spec=["set_name"])
    assert rc.has_command(api, "set_name")
    assert not rc.has_command(api, "nope")


def test_radio_ready():
    assert rc.radio_ready(FakeSession())
    assert not rc.radio_ready(FakeSession(connected=False))
    assert not rc.radio_ready(None)
    api = _legacy_api()
    assert rc.radio_ready(api)
    api.mesh_core = None
    assert not rc.radio_ready(api)


def test_contacts_and_self_info_on_session():
    session = FakeSession()
    assert rc.contact_by_prefix(session, "abcdef") == {"public_key": "abcdef"}
    rc.cache_self_info(session, "event")
    assert session.cached == "event"
    rc.mark_contacts_dirty(session)
    assert session.dirty
    assert rc.forget_contact(session, "abcdef")
    assert not rc.forget_contact(session, "abcdef")


def test_contacts_and_self_info_on_legacy():
    api = _legacy_api()
    api.mesh_core.get_contact_by_key_prefix.return_value = {"x": 1}
    assert rc.contact_by_prefix(api, "ab") == {"x": 1}
    rc.cache_self_info(api, "event")
    api._cache_self_info_event.assert_called_once_with("event")
    rc.mark_contacts_dirty(api)
    assert api.mesh_core._contacts_dirty is True
    api.mesh_core._contacts = {"pk": {}}
    assert rc.forget_contact(api, "pk")
    assert api.mesh_core._contacts == {}
