"""Simplified offline map: borders, regions, places and peaks per country.

The panel draws this map itself when online map tiles can't be loaded, or
always when the user chooses so. The data comes as one small JSON file per
country from the Chattx repository (``offline_maps/``, built by
``tools/build_offline_maps.py`` from geoBoundaries and GeoNames), is
downloaded once on request and kept in ``.storage`` so the map works
without internet.
"""
from __future__ import annotations

import asyncio
import json
import logging
import re
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY = "meshcore_chattx.offline_map"
STORAGE_VERSION = 1
BASE_URL = "https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/offline_maps"
MAX_FILE_BYTES = 5 * 1024 * 1024
_COUNTRY = re.compile(r"^[A-Z]{2}$")


def _valid_country(data: Any, code: str) -> bool:
    if not isinstance(data, dict) or data.get("v") != 1 or data.get("country") != code:
        return False
    return all(isinstance(data.get(k), list) for k in ("border", "regions", "places", "peaks"))


class OfflineMapStore:
    """The downloaded countries, read from disk only when first needed."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store[dict] = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._data: dict | None = None
        self._lock = asyncio.Lock()

    async def _load(self) -> dict:
        if self._data is None:
            data = await self._store.async_load()
            self._data = data if isinstance(data, dict) and isinstance(data.get("countries"), dict) else {"countries": {}}
        return self._data

    async def status(self) -> dict:
        data = await self._load()
        countries = data["countries"]
        return {
            "countries": {
                code: {"name": c.get("name", code), "built": c.get("built")}
                for code, c in countries.items()
            },
            "downloaded_at": data.get("downloaded_at"),
            "places": sum(len(c["places"]) for c in countries.values()),
            "peaks": sum(len(c["peaks"]) for c in countries.values()),
        }

    async def countries(self) -> dict:
        return (await self._load())["countries"]

    async def download(self, codes: list[str]) -> dict:
        """Replace the stored countries with fresh copies of `codes`."""
        from homeassistant.helpers.aiohttp_client import async_get_clientsession
        import aiohttp

        session = async_get_clientsession(self._hass)
        fetched: dict[str, dict] = {}
        async with self._lock:
            for code in codes:
                async with session.get(
                    f"{BASE_URL}/{code}.json", timeout=aiohttp.ClientTimeout(total=60)
                ) as resp:
                    resp.raise_for_status()
                    body = await resp.content.read(MAX_FILE_BYTES + 1)
                if len(body) > MAX_FILE_BYTES:
                    raise ValueError(f"Offline map of {code} is too large")
                data = json.loads(body)
                if not _valid_country(data, code):
                    raise ValueError(f"Offline map of {code} is not valid")
                fetched[code] = data
            self._data = {"countries": fetched, "downloaded_at": dt_util.utcnow().isoformat()}
            await self._store.async_save(self._data)
        return await self.status()

    async def clear(self) -> None:
        async with self._lock:
            self._data = {"countries": {}}
            await self._store.async_remove()


def _store(hass: HomeAssistant) -> OfflineMapStore:
    bucket = hass.data.setdefault(DOMAIN, {})
    store = bucket.get("offline_map")
    if store is None:
        store = bucket["offline_map"] = OfflineMapStore(hass)
    return store


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/offline_map_index"})
@websocket_api.async_response
async def ws_offline_map_index(hass, connection, msg):
    """Countries that can be downloaded, from the repository's index."""
    from homeassistant.helpers.aiohttp_client import async_get_clientsession
    import aiohttp

    try:
        session = async_get_clientsession(hass)
        async with session.get(
            f"{BASE_URL}/index.json", timeout=aiohttp.ClientTimeout(total=15)
        ) as resp:
            resp.raise_for_status()
            index = await resp.json(content_type=None)
        countries = {
            code: {"name": str(c.get("name", code)), "size": int(c.get("size", 0))}
            for code, c in (index.get("countries") or {}).items()
            if _COUNTRY.match(code) and isinstance(c, dict)
        }
        connection.send_result(msg["id"], {"success": True, "countries": countries})
    except Exception as ex:  # no internet, GitHub down
        _LOGGER.debug("Offline map index not available: %s", ex)
        connection.send_result(msg["id"], {"success": False, "countries": {}})


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/offline_map_status"})
@websocket_api.async_response
async def ws_offline_map_status(hass, connection, msg):
    """What is downloaded."""
    connection.send_result(msg["id"], await _store(hass).status())


@websocket_api.websocket_command({vol.Required("type"): "meshcore_chattx/offline_map_data"})
@websocket_api.async_response
async def ws_offline_map_data(hass, connection, msg):
    """The downloaded countries, for drawing."""
    connection.send_result(msg["id"], {"countries": await _store(hass).countries()})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/offline_map_download",
        vol.Required("countries"): vol.All(
            [vol.All(str, vol.Upper, vol.Match(_COUNTRY))], vol.Length(max=30)
        ),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_offline_map_download(hass, connection, msg):
    """Download the chosen countries (an empty list removes the map)."""
    store = _store(hass)
    codes = list(dict.fromkeys(msg["countries"]))
    try:
        if not codes:
            await store.clear()
            connection.send_result(msg["id"], {"success": True, **(await store.status())})
            return
        status = await store.download(codes)
        connection.send_result(msg["id"], {"success": True, **status})
    except Exception as ex:
        _LOGGER.warning("Offline map download failed: %s", ex)
        connection.send_result(msg["id"], {"success": False, "message": str(ex)})


def async_register_offline_map_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_offline_map_index)
    websocket_api.async_register_command(hass, ws_offline_map_status)
    websocket_api.async_register_command(hass, ws_offline_map_data)
    websocket_api.async_register_command(hass, ws_offline_map_download)
