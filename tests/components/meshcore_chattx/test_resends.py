"""A message sent again by the sender's client is kept on the first copy."""
from __future__ import annotations

from custom_components.meshcore_chattx.message_store import (
    _find_resend_original,
    _fold_resends,
)


def _msg(id_: str, at: str, **changes):
    msg = {
        "id": id_,
        "sender": "Alice",
        "text": "See you at the repeater",
        "timestamp": f"2026-11-09T12:{at}+00:00",
        "message_type": "channel",
        "outgoing": False,
        "rx_log_data": [{"hop_count": 2, "snr": -0.75, "rssi": -88}],
    }
    msg.update(changes)
    return msg


def test_same_text_again_within_minutes_matches() -> None:
    first = _msg("a", "54:56")
    assert _find_resend_original([first], _msg("b", "55:11")) is first


def test_other_message_in_between_does_not_matter() -> None:
    first = _msg("a", "54:56")
    other = _msg("x", "55:00", sender="Bob", text="hi")
    assert _find_resend_original([first, other], _msg("b", "55:11")) is first


def test_other_text_sender_or_own_message_does_not_match() -> None:
    first = _msg("a", "54:56")
    assert _find_resend_original([first], _msg("b", "55:11", text="Other")) is None
    assert _find_resend_original([first], _msg("b", "55:11", sender="Bob")) is None
    assert _find_resend_original([_msg("a", "54:56", outgoing=True)], _msg("b", "55:11")) is None


def test_same_text_much_later_is_a_new_message() -> None:
    assert _find_resend_original([_msg("a", "40:00")], _msg("b", "55:11")) is None


def test_fold_moves_stored_repeats_onto_the_first_copy() -> None:
    messages = [_msg("a", "54:56"), _msg("b", "55:11"), _msg("c", "55:30")]
    assert _fold_resends(messages)
    assert [m["id"] for m in messages] == ["a"]
    assert len(messages[0]["resends"]) == 2
    assert messages[0]["resends"][0]["hop_count"] == 2
    assert not _fold_resends(messages)
