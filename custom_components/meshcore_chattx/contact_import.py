"""Parse a contact entered by hand: a public key, a MeshCore QR link or a contact card.

Accepted forms:

* ``meshcore://contact/add?name=…&public_key=<64 hex>&type=<1-4>``, the link
  in the contact QR code of the MeshCore apps (docs.meshcore.io/qr_codes).
* ``meshcore://<hex>``, a contact card as ``export_contact`` gives it: a whole
  signed advert packet. The radio imports it with ``import_contact``.
* ``<public key:type:name>``, a contact shared in a message by the MeshCore
  apps, e.g. ``<ee6a…3d95:1:amm.ave>``.
* A bare public key, 64 hex characters; name and type then come from the form.

Pure functions, no Home Assistant imports, so they can be tested alone.
"""

from __future__ import annotations

import re
import struct
from typing import Any
from urllib.parse import parse_qs, urlsplit

PUBLIC_KEY_HEX = 64
MAX_NAME_BYTES = 31
CONTACT_TYPES = (1, 2, 3, 4)
_HEX = re.compile(r"^[0-9a-fA-F]+$")
# A contact shared in a message: <64 hex:type:name>
SHARED_CONTACT = re.compile(r"<([0-9a-fA-F]{64}):(\d{1,2}):([^<>\n]{1,64})>")
_PAYLOAD_ADVERT = 4


class ContactParseError(ValueError):
    """The text is not a contact. ``code`` is a short machine-readable reason."""

    def __init__(self, code: str, message: str) -> None:
        super().__init__(message)
        self.code = code


def _clean_name(name: str) -> str:
    name = (name or "").strip()
    raw = name.encode("utf-8")
    if len(raw) > MAX_NAME_BYTES:
        name = raw[:MAX_NAME_BYTES].decode("utf-8", "ignore")
    return name


def parse_advert_card(card: bytes) -> dict[str, Any] | None:
    """Read key, name, type and location from an advert packet; None when unreadable."""
    try:
        pos = 0
        header = card[pos]
        pos += 1
        route = header & 0x03
        if ((header >> 2) & 0x0F) != _PAYLOAD_ADVERT:
            return None
        if route in (0, 3):  # transport codes
            pos += 4
        path_byte = card[pos]
        pos += 1
        pos += (path_byte & 0x3F) * ((path_byte >> 6) + 1)
        public_key = card[pos:pos + 32]
        if len(public_key) != 32:
            return None
        pos += 32 + 4 + 64  # key, timestamp, signature
        flags = card[pos]
        pos += 1
        info: dict[str, Any] = {
            "public_key": public_key.hex(),
            "type": flags & 0x0F,
            "name": "",
        }
        if flags & 0x10:
            lat, lon = struct.unpack_from("<ii", card, pos)
            info["lat"], info["lon"] = lat / 1e6, lon / 1e6
            pos += 8
        if flags & 0x20:
            pos += 2
        if flags & 0x40:
            pos += 2
        if flags & 0x80:
            info["name"] = card[pos:].split(b"\0", 1)[0].decode("utf-8", "replace").strip()
        return info
    except (IndexError, struct.error):
        return None


def parse_contact_text(text: str, name: str = "", node_type: int | None = None) -> dict[str, Any]:
    """Turn what the user entered into a contact to add.

    Returns ``{"kind": "card", "card": bytes, ...info}`` or
    ``{"kind": "key", "public_key", "name", "type", "type_given"}``;
    ``type_given`` is False when the type is only the default. ``name`` and
    ``node_type`` fill in what a bare key lacks and override the link's.
    """
    shared = SHARED_CONTACT.fullmatch((text or "").strip())
    if shared:
        contact = _key_contact(shared.group(1), name or shared.group(3), node_type or int(shared.group(2)))
        contact["type_given"] = True
        return contact
    s = re.sub(r"\s+", "", text or "") if "://" not in (text or "") else (text or "").strip()
    if not s:
        raise ContactParseError("empty", "Nothing entered")

    if s.lower().startswith("meshcore://"):
        rest = s[len("meshcore://"):]
        if rest.lower().startswith("contact/add"):
            query = parse_qs(urlsplit(s).query)
            key = (query.get("public_key") or [""])[0].strip()
            link_name = (query.get("name") or [""])[0]
            try:
                link_type = int(query["type"][0]) if query.get("type") else None
            except ValueError:
                link_type = None
            contact = _key_contact(key, name or link_name, node_type or link_type or 1)
            contact["type_given"] = bool(node_type or link_type)
            return contact
        rest = rest.split("?", 1)[0].strip("/")
        if not rest or not _HEX.match(rest) or len(rest) % 2:
            raise ContactParseError("invalid", "Unknown meshcore:// link")
        return _card_contact(bytes.fromhex(rest), name, node_type)

    if _HEX.match(s) and len(s) == PUBLIC_KEY_HEX:
        contact = _key_contact(s, name, node_type or 1)
        contact["type_given"] = node_type is not None
        return contact
    if _HEX.match(s) and len(s) > PUBLIC_KEY_HEX and len(s) % 2 == 0:
        return _card_contact(bytes.fromhex(s), name, node_type)
    raise ContactParseError(
        "invalid",
        "Enter a public key (64 hex characters), a meshcore:// link or a contact card",
    )


def _key_contact(key: str, name: str, node_type: int) -> dict[str, Any]:
    if not _HEX.match(key or "") or len(key) != PUBLIC_KEY_HEX:
        raise ContactParseError("invalid_key", "The public key must be 64 hex characters")
    if node_type not in CONTACT_TYPES:
        node_type = 1
    return {
        "kind": "key",
        "public_key": key.lower(),
        "name": _clean_name(name),
        "type": node_type,
    }


def _card_contact(card: bytes, name: str, node_type: int | None) -> dict[str, Any]:
    info = parse_advert_card(card)
    if info is None:
        raise ContactParseError("invalid_card", "The contact card cannot be read")
    out: dict[str, Any] = {"kind": "card", "card": card, **info}
    if out["type"] not in CONTACT_TYPES:
        out["type"] = 1
    out["name"] = _clean_name(out.get("name") or "")
    return out


def new_contact_record(parsed: dict[str, Any]) -> dict[str, Any]:
    """The contact dict ``add_contact`` sends to the radio for a bare key, flood route."""
    return {
        "public_key": parsed["public_key"],
        "type": parsed["type"],
        "flags": 0,
        "out_path_len": -1,
        "out_path": "",
        "out_path_hash_mode": 0,
        "adv_name": parsed["name"],
        "last_advert": 0,
        "adv_lat": 0.0,
        "adv_lon": 0.0,
    }
