"""Late copies of own channel messages are kept on the original."""
from __future__ import annotations

from custom_components.meshcore_chattx.message_store import (
    _find_echo_original,
    _fold_late_echoes,
)

SENT = {
    "id": "0b24b7cb",
    "sender": "Me",
    "text": "Heard, 9 hops!",
    "timestamp": "2026-11-07T09:37:10.986796+00:00",
    "message_type": "channel",
    "outgoing": True,
    "rx_log_data": [{"timestamp": 1794044230, "hop_count": 1}],
}


def _echo(**changes):
    echo = {
        "id": "63392fe32bdb",
        "sender": "Me",
        "text": "Heard, 9 hops!",
        "timestamp": "2026-11-07T10:18:17.716204+00:00",
        "message_type": "channel",
        "outgoing": False,
        "rx_log_data": [{"timestamp": 1794044230, "hop_count": 25, "path_nodes": ["d658", "d658"]}],
    }
    echo.update(changes)
    return echo


def test_own_copy_matches_the_sent_message() -> None:
    assert _find_echo_original([dict(SENT)], _echo()) is not None


def test_other_sender_or_text_does_not_match() -> None:
    assert _find_echo_original([dict(SENT)], _echo(sender="Someone")) is None
    assert _find_echo_original([dict(SENT)], _echo(text="Other")) is None


def test_packet_sent_at_another_time_does_not_match() -> None:
    later = [{"timestamp": 1794044230 + 3600, "hop_count": 2}]
    assert _find_echo_original([dict(SENT)], _echo(rx_log_data=later)) is None


def test_copy_without_send_time_matches_by_text() -> None:
    synthesized = [{"hop_count": 26, "synthesized": True}]
    assert _find_echo_original([dict(SENT)], _echo(rx_log_data=synthesized)) is not None


def test_copy_after_a_day_does_not_match() -> None:
    assert _find_echo_original(
        [dict(SENT)], _echo(timestamp="2026-11-08T10:00:00+00:00", rx_log_data=[])
    ) is None


def test_fold_moves_stored_copies_onto_the_original() -> None:
    messages = [dict(SENT), _echo()]
    assert _fold_late_echoes(messages)
    assert len(messages) == 1
    assert messages[0]["late_echoes"][0]["hop_count"] == 25
    assert not _fold_late_echoes(messages)
