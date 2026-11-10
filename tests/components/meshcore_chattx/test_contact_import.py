"""Tests for parsing contacts entered by hand (key, QR link, contact card)."""

import struct

import pytest

from custom_components.meshcore_chattx.contact_import import (
    ContactParseError,
    new_contact_record,
    parse_advert_card,
    parse_contact_text,
)

KEY = "ab" * 32


def _card(flags: int, tail: bytes, route: int = 1, path: bytes = b"") -> bytes:
    return (
        bytes([route | (4 << 2), len(path)]) + path
        + bytes.fromhex(KEY) + b"\0" * 4 + b"\1" * 64 + bytes([flags]) + tail
    )


def test_qr_link():
    parsed = parse_contact_text(
        f"meshcore://contact/add?name=Test+Uzel%20%C5%A1&public_key={KEY.upper()}&type=2"
    )
    assert parsed == {"kind": "key", "public_key": KEY, "name": "Test Uzel š", "type": 2, "type_given": True}


def test_link_without_type_defaults_to_companion():
    parsed = parse_contact_text(f"meshcore://contact/add?public_key={KEY}")
    assert parsed["type"] == 1 and parsed["type_given"] is False


def test_form_overrides_link():
    parsed = parse_contact_text(f"meshcore://contact/add?name=A&public_key={KEY}&type=2", "B", 3)
    assert (parsed["name"], parsed["type"]) == ("B", 3)


def test_bare_key_with_spaces():
    parsed = parse_contact_text(" ".join(KEY[i:i + 8] for i in range(0, 64, 8)), "Jméno")
    assert parsed["public_key"] == KEY and parsed["type"] == 1 and parsed["name"] == "Jméno"
    assert parsed["type_given"] is False
    assert parse_contact_text(KEY, "", 2)["type_given"] is True


def test_long_name_is_cut_to_31_bytes():
    assert len(parse_contact_text(KEY, "š" * 40)["name"].encode()) <= 31


def test_card_with_location_and_name():
    card = _card(0x92, struct.pack("<ii", 49740000, 13370000) + b"radyne.cz", path=b"\x12")
    parsed = parse_contact_text("meshcore://" + card.hex())
    assert parsed["kind"] == "card" and parsed["card"] == card
    assert (parsed["public_key"], parsed["type"], parsed["name"]) == (KEY, 2, "radyne.cz")
    assert parsed["lat"] == pytest.approx(49.74)


def test_card_with_transport_codes():
    info = parse_advert_card(bytes([0 | (4 << 2)]) + b"\0" * 4 + _card(0x81, b"x")[1:])
    assert info["public_key"] == KEY and info["name"] == "x"


def test_not_an_advert():
    assert parse_advert_card(bytes([1 | (2 << 2), 0]) + b"\0" * 120) is None


@pytest.mark.parametrize(
    ("text", "code"),
    [
        ("", "empty"),
        ("hello", "invalid"),
        ("meshcore://contact/add?public_key=12", "invalid_key"),
        ("meshcore://zz", "invalid"),
        ("meshcore://" + "00" * 40, "invalid_card"),
    ],
)
def test_errors(text, code):
    with pytest.raises(ContactParseError) as err:
        parse_contact_text(text)
    assert err.value.code == code


def test_new_contact_record_is_flood():
    record = new_contact_record({"public_key": KEY, "name": "A", "type": 2})
    assert record["out_path_len"] == -1 and record["adv_name"] == "A" and record["type"] == 2
