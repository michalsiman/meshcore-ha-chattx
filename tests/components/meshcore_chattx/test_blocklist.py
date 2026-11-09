"""Messages from blocked senders are matched by key (DMs) or by name (channels)."""
from __future__ import annotations

from types import SimpleNamespace

from custom_components.meshcore_chattx.blocklist import BlocklistStore, _matches


class _States:
    def __init__(self, contacts):
        self._contacts = contacts

    def async_all(self, domain):
        return [
            SimpleNamespace(entity_id=f"binary_sensor.meshcore_{i}_contact", attributes={"public_key": k, "adv_name": n})
            for i, (k, n) in enumerate(self._contacts)
        ]


def _store(contacts, keys):
    hass = SimpleNamespace(states=_States(contacts), async_create_task=lambda coro: coro.close())
    store = BlocklistStore.__new__(BlocklistStore)
    store._hass = hass
    store._entries = [{"key": k, "names": []} for k in keys]
    return store


def test_key_prefixes_match_either_way() -> None:
    assert _matches("abcdef012345", "abcdef")
    assert not _matches("abcdef012345", "abcdee")
    assert not _matches("abcde", "abcde")  # too short to tell


def test_direct_message_matched_by_key_prefix() -> None:
    store = _store([], ["abcdef012345"])
    assert store.is_blocked({"pubkey_prefix": "abcdef012345", "sender": "x"})
    assert not store.is_blocked({"pubkey_prefix": "999999999999", "sender": "x"})


def test_channel_message_matched_by_the_names_of_the_key() -> None:
    store = _store([("abcdef0123456789", "Spammer")], ["abcdef012345"])
    assert store.is_blocked({"sender": "Spammer", "message_type": "channel"})
    assert not store.is_blocked({"sender": "Friend", "message_type": "channel"})
    assert not store.is_blocked({"sender": "Spammer", "outgoing": True})
