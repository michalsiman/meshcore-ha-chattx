"""Talk to the meshcore radio through the API meshcore-ha supports.

meshcore-ha 3.x wraps the SDK in a RadioSession and logs a deprecation
warning when another integration reaches for ``api.mesh_core`` or other 2.x
internals. Its supported calls also take the session's exchange lock, so a
Chattx command cannot interleave with the integration's own polling.

Each helper here uses the 3.x call when the session offers it and falls back
to the 2.x attribute otherwise, so Chattx keeps working on both.
"""

from __future__ import annotations

from typing import Any


def _supports_session_api(api: Any) -> bool:
    """Return whether ``api`` is a meshcore-ha 3.x RadioSession."""
    return callable(getattr(type(api), "exchange", None))


def _legacy_core(api: Any) -> Any:
    """Return the 2.x SDK instance, or None when the link is down."""
    return getattr(api, "mesh_core", None)


def radio_ready(api: Any) -> bool:
    """Return whether the radio link is up and can take commands."""
    if api is None or not getattr(api, "connected", False):
        return False
    if _supports_session_api(api):
        return True
    return _legacy_core(api) is not None


def has_command(api: Any, name: str) -> bool:
    """Return whether the SDK offers a public command called ``name``."""
    if name.startswith("_"):
        return False
    if _supports_session_api(api):
        return api.command_parameters(name) is not None
    core = _legacy_core(api)
    return core is not None and callable(getattr(core.commands, name, None))


# Commands that go out over the mesh, as meshcore-ha 3.x's execute_command
# service routes them: they hold the session's mesh lease (the firmware has a
# single pending-request slot), and the ones that wait for a remote reply run
# outside the exchange lock so they cannot stall the integration's polling.
MESH_LEASE_COMMANDS = frozenset({
    "send_advert",
    "send_login",
    "send_path_discovery",
    "send_statusreq",
    "send_telemetry_req",
    "send_trace",
    "send_msg",
    "send_cmd",
    "send_chan_msg",
    "send_logout",
    "send_binary_req",
    "send_anon_req",
    "send_node_discover_req",
    "send_control_data",
    "share_contact",
    "req_neighbours_async",
    "req_regions_async",
    "req_owner_async",
    "req_basic_async",
})
REMOTE_WAIT_COMMANDS = frozenset({
    "fetch_all_neighbours",
    "send_msg_with_retry",
    "req_status",
    "req_telemetry",
    "req_acl",
})


def _routing(name: str) -> tuple[bool, bool]:
    """Return whether a command needs the mesh lease and waits on a remote reply."""
    waits_remote = name.endswith("_sync") or name in REMOTE_WAIT_COMMANDS
    return waits_remote or name in MESH_LEASE_COMMANDS, waits_remote


async def radio_command(api: Any, name: str, /, *args: Any, **kwargs: Any) -> Any:
    """Run one SDK command by name, such as ``set_name`` or ``send_cmd``.

    On 3.x it goes through the session: local commands under its exchange
    lock, mesh requests under its mesh lease, the same way meshcore-ha's own
    execute_command service runs them. Never call it while holding the mesh
    lease, which is not re-entrant.

    A missing link raises the session's RadioUnavailable on 3.x and
    AttributeError on 2.x; callers already turn any exception into an error
    reply.
    """
    if not _supports_session_api(api):
        return await getattr(_legacy_core(api).commands, name)(*args, **kwargs)
    needs_lease, waits_remote = _routing(name)
    run = api.invoke if waits_remote else api.exchange
    lease = getattr(api, "mesh_lease", None)
    if needs_lease and callable(lease):
        async with lease():
            return await run(name, *args, **kwargs)
    return await run(name, *args, **kwargs)


async def login(api: Any, contact: Any, password: str) -> Any:
    """Log in to a remote node; None when the login was not confirmed.

    3.x returns the LOGIN_SUCCESS event or None. 2.x ``send_login_sync``
    returns None on silence, which is how a wrong password usually looks too.
    """
    if _supports_session_api(api):
        return await api.login(contact, password)
    return await _legacy_core(api).commands.send_login_sync(contact, password)


def contact_by_prefix(api: Any, prefix: str) -> dict[str, Any] | None:
    """Look a contact up by public-key prefix; None when unknown or offline."""
    if _supports_session_api(api):
        return api.contact_by_prefix(prefix)
    core = _legacy_core(api)
    return core.get_contact_by_key_prefix(prefix) if core is not None else None


def cache_self_info(api: Any, event: Any) -> None:
    """Store a fresh SELF_INFO reply so the integration's sensors update."""
    if _supports_session_api(api):
        api.cache_self_info_event(event)
    else:
        api._cache_self_info_event(event)


def mark_contacts_dirty(api: Any) -> None:
    """Make the integration fetch the radio's contact table again."""
    if _supports_session_api(api):
        api.mark_contacts_dirty()
        return
    core = _legacy_core(api)
    if core is not None:
        core._contacts_dirty = True


def forget_contact(api: Any, public_key: str) -> bool:
    """Drop a contact from the integration's cached table; True if it was there."""
    if _supports_session_api(api):
        return bool(api.forget_contact(public_key))
    contacts = getattr(_legacy_core(api), "_contacts", None)
    if isinstance(contacts, dict) and public_key in contacts:
        del contacts[public_key]
        return True
    return False
