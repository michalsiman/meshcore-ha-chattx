"""Repeater positions from the public MeshCore map (map.meshcore.io).

Your radio knows only the repeaters it has heard adverts from. A message's
path often goes through others, so the route map can't place them. The
public map collects adverts from many uploaders; Chattx keeps a regional
excerpt of it and uses those repeaters as extra candidates when it places
a path. Your own contacts always come first.

Off by default. When on, Home Assistant downloads the list at most once a
day and keeps only repeaters and room servers
  * within a chosen distance of your companion,
  * on the same radio settings (frequency, bandwidth, SF, CR) when those
    are known, and
  * seen by the map in the last two months.
"""

from __future__ import annotations

import asyncio
import logging
import math
import re
import time
from collections.abc import Callable
from datetime import timedelta
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .msgpack_lite import unpackb

_LOGGER = logging.getLogger(__name__)

SOURCE_URL = "https://map.meshcore.io/api/v1/nodes?binary=1&short=1"
USER_AGENT = "MeshCore-Chattx (+https://github.com/michalsiman/meshcore-ha-chattx)"
STORAGE_KEY = "meshcore_chattx.public_nodes"
STORAGE_VERSION = 1
MAX_DOWNLOAD_BYTES = 64 * 1024 * 1024
REFRESH_SECONDS = 24 * 3600
MAX_AGE_SECONDS = 60 * 24 * 3600
RADIUS_CHOICES_KM = (300, 500, 1000, 2000)
DEFAULT_RADIUS_KM = 1000
FORWARDER_TYPES = (2, 3)  # repeater, room server
_NAME_JUNK = re.compile(r"[\x00-\x1f\x7f]")


def _km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    rad = math.pi / 180
    h = (math.sin((lat2 - lat1) * rad / 2) ** 2
         + math.cos(lat1 * rad) * math.cos(lat2 * rad) * math.sin((lon2 - lon1) * rad / 2) ** 2)
    return 12742 * math.asin(min(1.0, math.sqrt(h)))


def _number(value: Any) -> float | None:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    return float(value) if math.isfinite(value) else None


def radio_signature(freq_mhz: Any, bw_khz: Any, sf: Any, cr: Any) -> tuple[int, int, int, int] | None:
    """Radio settings rounded so float noise doesn't matter: (kHz, Hz of bandwidth, SF, CR)."""
    values = [_number(v) for v in (freq_mhz, bw_khz, sf, cr)]
    if any(v is None or v <= 0 for v in values):
        return None
    freq, bw, sf_, cr_ = values  # type: ignore[misc]
    return round(freq * 1000), round(bw * 1000), int(sf_), int(cr_)


def select_nodes(
    records: Any,
    *,
    center: tuple[float, float] | None,
    radius_km: float,
    radio: tuple[int, int, int, int] | None,
    now: float,
) -> list[dict]:
    """Keep the repeaters worth knowing from the map's records, as compact dicts.

    A record is a map with short keys: pk (32-byte key), n (name), t (type),
    lat/lon, la (last advert) and ud (last update) as epoch seconds, and p
    (radio parameters: freq MHz, bw kHz, sf, cr). Anything that doesn't fit
    is skipped, never trusted.
    """
    if not isinstance(records, list):
        return []
    kept: list[dict] = []
    for rec in records:
        if not isinstance(rec, dict):
            continue
        if rec.get("t") not in FORWARDER_TYPES:
            continue
        key = rec.get("pk")
        if not isinstance(key, (bytes, bytearray)) or len(key) != 32:
            continue
        lat, lon = _number(rec.get("lat")), _number(rec.get("lon"))
        if lat is None or lon is None or not (-90 <= lat <= 90 and -180 <= lon <= 180) or (lat == 0 and lon == 0):
            continue
        updated = _number(rec.get("ud")) or _number(rec.get("la"))
        if updated is None or now - updated > MAX_AGE_SECONDS:
            continue
        if center is not None and _km(center[0], center[1], lat, lon) > radius_km:
            continue
        if radio is not None:
            params = rec.get("p")
            if not isinstance(params, dict):
                continue
            if radio_signature(params.get("freq"), params.get("bw"), params.get("sf"), params.get("cr")) != radio:
                continue
        name = rec.get("n")
        name = _NAME_JUNK.sub("", name)[:40].strip() if isinstance(name, str) else ""
        heard = _number(rec.get("la"))
        kept.append({
            "k": bytes(key).hex(),
            "n": name,
            "t": rec["t"],
            "lat": round(lat, 5),
            "lon": round(lon, 5),
            "la": int(heard) if heard else None,
        })
    return kept


ContextProvider = Callable[[], tuple[tuple[float, float] | None, tuple[int, int, int, int] | None]]


class PublicNodes:
    """Settings, the stored excerpt, and the daily refresh."""

    def __init__(self, hass: HomeAssistant, context: ContextProvider) -> None:
        self._hass = hass
        self._context = context
        self._store: Store[dict] = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._data: dict | None = None
        self._lock = asyncio.Lock()

    async def _load(self) -> dict:
        if self._data is None:
            data = await self._store.async_load()
            if not isinstance(data, dict):
                data = {}
            data.setdefault("enabled", False)
            data.setdefault("radius_km", DEFAULT_RADIUS_KM)
            data.setdefault("nodes", [])
            data.setdefault("fetched_at", None)
            data.setdefault("error", None)
            self._data = data
        return self._data

    async def status(self) -> dict:
        data = await self._load()
        return {
            "enabled": data["enabled"],
            "radius_km": data["radius_km"],
            "count": len(data["nodes"]),
            "fetched_at": data["fetched_at"],
            "error": data["error"],
            "radius_choices": list(RADIUS_CHOICES_KM),
            "source": "map.meshcore.io",
        }

    async def nodes(self) -> list[dict]:
        data = await self._load()
        return data["nodes"] if data["enabled"] else []

    async def configure(self, enabled: bool | None, radius_km: int | None) -> dict:
        data = await self._load()
        changed_radius = radius_km is not None and radius_km != data["radius_km"]
        if enabled is not None:
            data["enabled"] = enabled
        if radius_km is not None:
            data["radius_km"] = radius_km
        if not data["enabled"]:
            data["nodes"], data["fetched_at"], data["error"] = [], None, None
        await self._store.async_save(data)
        if data["enabled"] and (changed_radius or not data["fetched_at"]):
            self._hass.async_create_task(self.refresh())
        return await self.status()

    async def refresh(self, force: bool = True) -> dict:
        """Download and filter the map's list; keeps the old excerpt when that fails."""
        async with self._lock:
            data = await self._load()
            if not data["enabled"]:
                return await self.status()
            if not force and data["fetched_at"] and time.time() - data["fetched_at"] < REFRESH_SECONDS:
                return await self.status()
            center, radio = self._context()
            try:
                raw = await self._download()
                records = await self._hass.async_add_executor_job(unpackb, raw)
                del raw
                nodes = await self._hass.async_add_executor_job(
                    lambda: select_nodes(records, center=center, radius_km=data["radius_km"], radio=radio, now=time.time())
                )
                data["nodes"] = nodes
                data["fetched_at"] = int(time.time())
                data["error"] = None
                _LOGGER.info("Public node database: %d repeaters kept", len(nodes))
            except Exception as err:  # network, size, format
                data["error"] = str(err)[:200] or type(err).__name__
                _LOGGER.warning("Public node database could not be updated: %s", data["error"])
            await self._store.async_save(data)
            return await self.status()

    async def _download(self) -> bytes:
        import aiohttp
        from homeassistant.helpers.aiohttp_client import async_get_clientsession

        session = async_get_clientsession(self._hass)
        async with session.get(
            SOURCE_URL,
            headers={"User-Agent": USER_AGENT},
            timeout=aiohttp.ClientTimeout(total=180),
        ) as resp:
            resp.raise_for_status()
            body = bytearray()
            async for chunk in resp.content.iter_chunked(256 * 1024):
                body += chunk
                if len(body) > MAX_DOWNLOAD_BYTES:
                    raise ValueError("the node list is larger than expected")
        return bytes(body)


def get_public_nodes(hass: HomeAssistant) -> PublicNodes | None:
    return hass.data.get(DOMAIN, {}).get("public_nodes")


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/public_nodes_status"})
@websocket_api.async_response
async def ws_status(hass, connection, msg):
    manager = get_public_nodes(hass)
    if manager is None:
        connection.send_error(msg["id"], "not_ready", "Not set up")
        return
    connection.send_result(msg["id"], await manager.status())


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/public_nodes"})
@websocket_api.async_response
async def ws_nodes(hass, connection, msg):
    manager = get_public_nodes(hass)
    connection.send_result(msg["id"], {"nodes": await manager.nodes() if manager else []})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/public_nodes_configure",
        vol.Optional("enabled"): bool,
        vol.Optional("radius_km"): vol.In(RADIUS_CHOICES_KM),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_configure(hass, connection, msg):
    manager = get_public_nodes(hass)
    if manager is None:
        connection.send_error(msg["id"], "not_ready", "Not set up")
        return
    connection.send_result(msg["id"], await manager.configure(msg.get("enabled"), msg.get("radius_km")))


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/public_nodes_refresh"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_refresh(hass, connection, msg):
    manager = get_public_nodes(hass)
    if manager is None:
        connection.send_error(msg["id"], "not_ready", "Not set up")
        return
    connection.send_result(msg["id"], await manager.refresh(force=True))


def async_register_public_nodes(hass: HomeAssistant, context: ContextProvider) -> None:
    """Create the manager, its commands, and an hourly check for the daily refresh."""
    bucket = hass.data.setdefault(DOMAIN, {})
    if "public_nodes" in bucket:
        return
    manager = bucket["public_nodes"] = PublicNodes(hass, context)
    for command in (ws_status, ws_nodes, ws_configure, ws_refresh):
        websocket_api.async_register_command(hass, command)

    @callback
    def _tick(_now=None) -> None:
        hass.async_create_task(manager.refresh(force=False))

    async_track_time_interval(hass, _tick, timedelta(hours=1))
    hass.loop.call_later(120, _tick)
