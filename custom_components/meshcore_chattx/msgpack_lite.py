"""A small MessagePack decoder for the public node database.

map.meshcore.io serves its node list as MessagePack. This reads the subset
of the format that list uses (and the rest of the plain types), so Chattx
needs no extra package. The input comes from the internet: every length is
checked against the data, nesting is limited, and anything malformed raises
ValueError.
"""

from __future__ import annotations

import struct

MAX_DEPTH = 32


def unpackb(data: bytes) -> object:
    """Decode one MessagePack value; raises ValueError on malformed input."""
    reader = _Reader(memoryview(data))
    value = reader.value(0)
    if reader.pos != len(data):
        raise ValueError("trailing bytes after MessagePack value")
    return value


class _Reader:
    def __init__(self, data: memoryview) -> None:
        self.data = data
        self.pos = 0

    def take(self, n: int) -> bytes:
        if n < 0 or self.pos + n > len(self.data):
            raise ValueError("MessagePack data ends early")
        out = bytes(self.data[self.pos:self.pos + n])
        self.pos += n
        return out

    def uint(self, size: int) -> int:
        return int.from_bytes(self.take(size), "big")

    def value(self, depth: int) -> object:
        if depth > MAX_DEPTH:
            raise ValueError("MessagePack nesting too deep")
        b = self.uint(1)
        if b <= 0x7F:
            return b
        if b >= 0xE0:
            return b - 0x100
        if 0x80 <= b <= 0x8F:
            return self.map(b & 0x0F, depth)
        if 0x90 <= b <= 0x9F:
            return self.array(b & 0x0F, depth)
        if 0xA0 <= b <= 0xBF:
            return self.text(b & 0x1F)
        if b == 0xC0:
            return None
        if b == 0xC2:
            return False
        if b == 0xC3:
            return True
        if b in (0xC4, 0xC5, 0xC6):
            return self.take(self.uint(1 << (b - 0xC4)))
        if b in (0xC7, 0xC8, 0xC9):
            size = self.uint(1 << (b - 0xC7))
            return self.ext(size)
        if b == 0xCA:
            return struct.unpack(">f", self.take(4))[0]
        if b == 0xCB:
            return struct.unpack(">d", self.take(8))[0]
        if 0xCC <= b <= 0xCF:
            return self.uint(1 << (b - 0xCC))
        if 0xD0 <= b <= 0xD3:
            size = 1 << (b - 0xD0)
            return int.from_bytes(self.take(size), "big", signed=True)
        if 0xD4 <= b <= 0xD8:
            return self.ext(1 << (b - 0xD4))
        if b in (0xD9, 0xDA, 0xDB):
            return self.text(self.uint(1 << (b - 0xD9)))
        if b in (0xDC, 0xDD):
            return self.array(self.uint(2 if b == 0xDC else 4), depth)
        if b in (0xDE, 0xDF):
            return self.map(self.uint(2 if b == 0xDE else 4), depth)
        raise ValueError(f"unknown MessagePack type 0x{b:02x}")

    def text(self, size: int) -> str:
        return self.take(size).decode("utf-8", "replace")

    def array(self, size: int, depth: int) -> list:
        if size > len(self.data) - self.pos:
            raise ValueError("MessagePack array longer than the data")
        return [self.value(depth + 1) for _ in range(size)]

    def map(self, size: int, depth: int) -> dict:
        if size * 2 > len(self.data) - self.pos:
            raise ValueError("MessagePack map longer than the data")
        out = {}
        for _ in range(size):
            key = self.value(depth + 1)
            if isinstance(key, (dict, list, bytes)):
                key = repr(key)
            out[key] = self.value(depth + 1)
        return out

    def ext(self, size: int) -> object:
        kind = int.from_bytes(self.take(1), "big", signed=True)
        body = self.take(size)
        if kind == -1:  # timestamp → seconds since the epoch
            if size == 4:
                return int.from_bytes(body, "big")
            if size == 8:
                value = int.from_bytes(body, "big")
                return value & 0x3_FFFF_FFFF
            if size == 12:
                return int.from_bytes(body[4:], "big", signed=True)
        return {"ext": kind, "data": body}
