"""Public node database: the MessagePack reader and the regional excerpt."""

import struct
import time

import pytest

from custom_components.meshcore_chattx.msgpack_lite import unpackb
from custom_components.meshcore_chattx.public_nodes import radio_signature, select_nodes


def pack(value) -> bytes:
    """A minimal MessagePack writer for the test data."""
    if value is None:
        return b"\xc0"
    if isinstance(value, bool):
        return b"\xc3" if value else b"\xc2"
    if isinstance(value, int):
        if 0 <= value <= 0x7F:
            return bytes([value])
        if -32 <= value < 0:
            return struct.pack("b", value)
        return b"\xd3" + struct.pack(">q", value)
    if isinstance(value, float):
        return b"\xcb" + struct.pack(">d", value)
    if isinstance(value, str):
        raw = value.encode()
        return (bytes([0xA0 | len(raw)]) if len(raw) < 32 else b"\xd9" + bytes([len(raw)])) + raw
    if isinstance(value, bytes):
        return b"\xc4" + bytes([len(value)]) + value
    if isinstance(value, list):
        return b"\xdc" + struct.pack(">H", len(value)) + b"".join(pack(v) for v in value)
    if isinstance(value, dict):
        return b"\xde" + struct.pack(">H", len(value)) + b"".join(pack(k) + pack(v) for k, v in value.items())
    raise TypeError(value)


def test_reader_roundtrip():
    data = {"a": [1, -5, 300, -70000, 1.5, None, True, False, "č", b"\x01\x02"], "b": {"c": "x" * 40}}
    assert unpackb(pack(data)) == data


def test_reader_timestamp_ext():
    # fixext 4, type -1: seconds since the epoch
    assert unpackb(b"\xd6\xff" + struct.pack(">I", 1794400000)) == 1794400000


@pytest.mark.parametrize("raw", [b"", b"\x92\x01", b"\xdc\xff\xff", b"\xc1", b"\x01\x02"])
def test_reader_rejects_bad_data(raw):
    with pytest.raises(ValueError):
        unpackb(raw)


NOW = time.time()
RADIO = radio_signature(869.432, 62.5, 7, 5)


def node(key: int, **over):
    rec = {"pk": bytes([key]) * 32, "n": f"rpt{key}", "t": 2, "lat": 49.7, "lon": 13.4,
           "la": NOW - 3600, "ud": NOW - 3600, "p": {"freq": 869.4320068, "bw": 62.5, "sf": 7, "cr": 5}}
    rec.update(over)
    return rec


def test_select_keeps_nearby_forwarders_on_our_radio():
    records = [
        node(1),
        node(2, t=1),                                   # companion
        node(3, lat=40.0, lon=-3.7),                    # Madrid, too far
        node(4, p={"freq": 869.618, "bw": 62.5, "sf": 8, "cr": 8}),  # other preset
        node(5, ud=NOW - 200 * 86400, la=NOW - 200 * 86400),         # stale
        node(6, pk=b"short"),                           # bad key
        node(7, lat=0, lon=0),                          # no position
        node(8, n="bad\x00name\x07"),
        "garbage",
    ]
    kept = select_nodes(records, center=(49.62, 13.16), radius_km=500, radio=RADIO, now=NOW)
    assert [k["k"][:2] for k in kept] == ["01", "08"]
    assert kept[1]["n"] == "badname"
    assert kept[0] == {"k": "01" * 32, "n": "rpt1", "t": 2, "lat": 49.7, "lon": 13.4, "la": int(NOW - 3600)}


def test_select_without_radio_or_center():
    kept = select_nodes([node(1), node(3, lat=40.0, lon=-3.7)], center=None, radius_km=500, radio=None, now=NOW)
    assert len(kept) == 2
    assert select_nodes("nope", center=None, radius_km=1, radio=None, now=NOW) == []


def test_radio_signature_rounds_float_noise():
    assert radio_signature(869.4320068, 62.5, 7, 5) == radio_signature(869.432, 62.5, 7, 5)
    assert radio_signature(None, 62.5, 7, 5) is None
