"""Automatic retries of an own direct message are one message."""
from __future__ import annotations

from custom_components.meshcore_chattx.message_store import _find_retry_original, _fold_retries


def _dm(id_: str, at: str, text: str = "zkouska", **changes):
    msg = {"id": id_, "sender": "Me", "text": text, "timestamp": f"2026-11-10T13:{at}+00:00",
           "message_type": "direct", "outgoing": True, "ack_received": False, "delivery_status": "sent"}
    msg.update(changes)
    return msg


def test_retry_within_seconds_matches_the_first_attempt() -> None:
    first = _dm("a", "30:01")
    assert _find_retry_original([first], _dm("b", "30:18")) is first


def test_manual_resend_minutes_later_is_a_new_message() -> None:
    assert _find_retry_original([_dm("a", "30:01")], _dm("b", "36:27")) is None


def test_channel_and_received_messages_are_not_retries() -> None:
    first = _dm("a", "30:01")
    assert _find_retry_original([first], _dm("b", "30:18", message_type="channel")) is None
    assert _find_retry_original([first], _dm("b", "30:18", outgoing=False)) is None


def test_fold_keeps_one_message_and_any_ack() -> None:
    messages = [_dm("a", "30:01"), _dm("b", "30:18", ack_received=True)]
    assert _fold_retries(messages)
    assert len(messages) == 1
    assert messages[0]["delivery_status"] == "delivered"
    assert [r["id"] for r in messages[0]["retries"]] == ["b"]
