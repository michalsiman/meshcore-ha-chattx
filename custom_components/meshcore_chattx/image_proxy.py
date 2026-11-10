"""Images from messages, fetched by Home Assistant for the panel.

A preview of an image link is loaded through Home Assistant instead of
straight from the image's server, so the browser only ever talks to Home
Assistant: a mobile network that blocks the image's domain doesn't matter,
and the image's server never sees the browser's address.

The panel asks for a signed address (``meshcore_chattx/sign_image_url``)
and loads it as an ordinary <img>; Home Assistant's own signed-path check
authorises it. Only public http(s) addresses are fetched (no addresses in
the local network, checked again after every redirect), only images, at
most MAX_BYTES; recent images are kept in memory.
"""
from __future__ import annotations

import asyncio
import ipaddress
import re
import socket
import time
from collections import OrderedDict
from datetime import timedelta
from urllib.parse import quote, urljoin, urlsplit

import voluptuous as vol
from aiohttp import web
from homeassistant.components import websocket_api
from homeassistant.components.http import HomeAssistantView
from homeassistant.components.http.auth import async_sign_path
from homeassistant.core import HomeAssistant

from .const import DOMAIN

PATH = "/api/meshcore_chattx/image_proxy"
MAX_BYTES = 10 * 1024 * 1024
MAX_REDIRECTS = 3
CACHE_BYTES = 32 * 1024 * 1024
CACHE_SECONDS = 24 * 3600
SIGNED_FOR = timedelta(hours=24)
_TMPFILES_IMAGE = re.compile(r'https://tmpfiles\.org/dl/\d+\.[0-9a-f]+/[^"\'<>\s]+')


class _Cache:
    def __init__(self) -> None:
        self._items: OrderedDict[str, tuple[float, str, bytes]] = OrderedDict()
        self._size = 0

    def get(self, url: str) -> tuple[str, bytes] | None:
        item = self._items.get(url)
        if not item or time.monotonic() - item[0] > CACHE_SECONDS:
            return None
        self._items.move_to_end(url)
        return item[1], item[2]

    def put(self, url: str, content_type: str, body: bytes) -> None:
        if url in self._items:
            self._size -= len(self._items.pop(url)[2])
        self._items[url] = (time.monotonic(), content_type, body)
        self._size += len(body)
        while self._size > CACHE_BYTES and self._items:
            _, (_, _, old) = self._items.popitem(last=False)
            self._size -= len(old)


async def _public_host(hass: HomeAssistant, host: str, port: int) -> bool:
    """True when every address of the host is public (no LAN, loopback, …)."""
    try:
        infos = await hass.loop.getaddrinfo(host, port, type=socket.SOCK_STREAM)
    except OSError:
        return False
    if not infos:
        return False
    for info in infos:
        address = ipaddress.ip_address(info[4][0])
        if not address.is_global or address.is_multicast:
            return False
    return True


def _allowed_url(url: str) -> tuple[str, int] | None:
    parts = urlsplit(url)
    if parts.scheme not in ("http", "https") or not parts.hostname:
        return None
    try:
        port = parts.port or (443 if parts.scheme == "https" else 80)
    except ValueError:
        return None
    return parts.hostname, port


class ImageProxyView(HomeAssistantView):
    """Serve an image from the internet; reached by signed path only."""

    url = PATH
    name = "api:meshcore_chattx:image_proxy"
    requires_auth = True

    def __init__(self) -> None:
        self._cache = _Cache()

    async def get(self, request: web.Request) -> web.StreamResponse:
        hass: HomeAssistant = request.app["hass"]
        url = request.query.get("url", "")
        cached = self._cache.get(url)
        if cached:
            return self._respond(*cached)

        from homeassistant.helpers.aiohttp_client import async_get_clientsession
        import aiohttp

        session = async_get_clientsession(hass)
        current = url
        page_followed = False
        for _ in range(MAX_REDIRECTS + 2):
            target = _allowed_url(current)
            if not target or not await _public_host(hass, *target):
                return web.Response(status=403, text="Address not allowed")
            try:
                async with session.get(
                    current,
                    allow_redirects=False,
                    timeout=aiohttp.ClientTimeout(total=20),
                    headers={"User-Agent": "MeshCore-Chattx image preview (Home Assistant)"},
                ) as resp:
                    if resp.status in (301, 302, 303, 307, 308) and resp.headers.get("Location"):
                        current = urljoin(current, resp.headers["Location"])
                        continue
                    if resp.status != 200:
                        return web.Response(status=502, text=f"Image server answered {resp.status}")
                    content_type = resp.headers.get("Content-Type", "").split(";")[0].strip().lower()
                    if content_type == "text/html" and urlsplit(current).hostname == "tmpfiles.org" and not page_followed:
                        # tmpfiles.org shows the image on a page, under a short-lived
                        # signed address: take that address and fetch the image.
                        page = (await resp.content.read(512 * 1024)).decode("utf-8", "replace")
                        found = _TMPFILES_IMAGE.search(page)
                        if found:
                            current = found.group(0)
                            page_followed = True
                            continue
                    if not content_type.startswith("image/") or content_type == "image/svg+xml":
                        return web.Response(status=415, text="Not an image")
                    body = bytearray()
                    async for chunk in resp.content.iter_chunked(64 * 1024):
                        body += chunk
                        if len(body) > MAX_BYTES:
                            return web.Response(status=413, text="Image too large")
            except (aiohttp.ClientError, asyncio.TimeoutError) as ex:
                return web.Response(status=502, text=f"Could not load the image: {ex or type(ex).__name__}")
            data = bytes(body)
            self._cache.put(url, content_type, data)
            return self._respond(content_type, data)
        return web.Response(status=502, text="Too many redirects")

    @staticmethod
    def _respond(content_type: str, body: bytes) -> web.Response:
        return web.Response(
            body=body,
            content_type=content_type,
            headers={
                "Cache-Control": "private, max-age=86400",
                "X-Content-Type-Options": "nosniff",
                "Content-Security-Policy": "default-src 'none'",
            },
        )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/sign_image_url",
        vol.Required("url"): vol.All(str, vol.Length(min=8, max=2000)),
    }
)
@websocket_api.async_response
async def ws_sign_image_url(hass, connection, msg):
    """A signed address of the image proxy for an image link (valid 24 h)."""
    if not _allowed_url(msg["url"]):
        connection.send_error(msg["id"], "invalid", "Only http and https addresses")
        return
    path = async_sign_path(
        hass,
        f"{PATH}?url={quote(msg['url'], safe='')}",
        SIGNED_FOR,
        refresh_token_id=connection.refresh_token_id,
    )
    connection.send_result(msg["id"], {"path": path})


def async_register_image_proxy(hass: HomeAssistant) -> None:
    """Register the view once and the WebSocket command."""
    bucket = hass.data.setdefault(DOMAIN, {})
    if not bucket.get("image_proxy_view"):
        hass.http.register_view(ImageProxyView())
        bucket["image_proxy_view"] = True
    websocket_api.async_register_command(hass, ws_sign_image_url)
