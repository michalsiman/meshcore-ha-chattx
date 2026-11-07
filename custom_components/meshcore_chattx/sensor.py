"""Unread total of MeshCore Chattx as a sensor.

The number is the one on the panel's Chat tab: the unread counts Chattx
already keeps for each conversation (the same counts the conversation
badges show), added up, leaving out the channels the user left out of
the Chat tab total in the channel settings. Other parts of Home
Assistant can show it, such as a sidebar badge or the browser tab
title (``chattx-tab-badge.js``).
"""
from __future__ import annotations

import logging

from homeassistant.components.sensor import SensorEntity, SensorStateClass
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN, EVENT_MESHCORE_CONNECTED, MESHCORE_DOMAIN
from .unread_tracking import EVENT_UNREAD_UPDATED

_LOGGER = logging.getLogger(__name__)

# Fired when a channel is left out of the Chat tab total or counted again.
SIGNAL_TOTAL_EXCLUSIONS_CHANGED = f"{DOMAIN}_total_exclusions_changed"

UNREAD_ENTITY_ID = "sensor.meshcore_chattx_unread"


def excluded_entity_suffixes(hass: HomeAssistant) -> set[str]:
    """Entity id endings of the channels left out of the Chat tab total.

    Channel conversations are ``binary_sensor.meshcore_<prefix>_ch_<idx>_messages``
    where ``<prefix>`` is the first 6 hex characters of the companion's
    public key, the same match the panel uses.
    """
    exclusions = hass.data.get(DOMAIN, {}).get("channel_total_exclusions")
    if exclusions is None:
        return set()
    suffixes: set[str] = set()
    for coordinator in hass.data.get(MESHCORE_DOMAIN, {}).values():
        entry = getattr(coordinator, "config_entry", None)
        prefix = (getattr(coordinator, "pubkey", "") or "")[:6]
        if entry is None or not prefix:
            continue
        for idx in range(getattr(coordinator, "max_channels", 0) or 0):
            if exclusions.is_excluded(entry.entry_id, idx):
                suffixes.add(f".meshcore_{prefix}_ch_{idx}_messages")
    return suffixes


async def async_setup_entry(
    hass: HomeAssistant, entry, async_add_entities: AddEntitiesCallback
) -> None:
    """Add the unread total sensor."""
    async_add_entities([ChattxUnreadSensor(entry)])


class ChattxUnreadSensor(SensorEntity):
    """Unread messages counted on the panel's Chat tab."""

    _attr_has_entity_name = True
    _attr_translation_key = "unread_messages"
    _attr_state_class = SensorStateClass.MEASUREMENT
    _attr_should_poll = False

    def __init__(self, entry) -> None:
        self._entry = entry
        self._attr_unique_id = f"{entry.entry_id}_unread"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name="MeshCore Chattx",
            entry_type=DeviceEntryType.SERVICE,
        )
        self.entity_id = UNREAD_ENTITY_ID
        self._counts: dict[str, int] = {}
        self._attr_native_value = 0
        self._attr_extra_state_attributes = {"left_out": 0}

    async def async_added_to_hass(self) -> None:
        """Read the current counts and follow their changes."""
        await self._load_counts()
        self.async_on_remove(
            self.hass.bus.async_listen(EVENT_UNREAD_UPDATED, self._on_unread_updated)
        )
        self.async_on_remove(
            async_dispatcher_connect(
                self.hass, SIGNAL_TOTAL_EXCLUSIONS_CHANGED, self._recompute
            )
        )
        # The companion's public key, which ties a channel to its
        # conversation, may arrive after this sensor starts.
        self.async_on_remove(
            self.hass.bus.async_listen(EVENT_MESHCORE_CONNECTED, self._on_connected)
        )
        self._recompute()

    async def _load_counts(self) -> None:
        """Take the counts the conversation badges start from."""
        runtime = getattr(self._entry, "runtime_data", None)
        store = getattr(runtime, "store", None)
        tracker = self.hass.data.get(DOMAIN, {}).get("unread_tracker")
        if store is None or tracker is None:
            return
        counts: dict[str, int] = {}
        for entity_id in list(store.get_message_index().keys()):
            count = await store.count_unread_after(entity_id, tracker.get_last_read(entity_id))
            if count > 0:
                counts[entity_id] = count
        self._counts = counts

    @callback
    def _on_unread_updated(self, event: Event) -> None:
        entity_id = event.data.get("entity_id")
        if not isinstance(entity_id, str):
            return
        try:
            count = int(event.data.get("unread_count") or 0)
        except (TypeError, ValueError):
            return
        if count > 0:
            self._counts[entity_id] = count
        else:
            self._counts.pop(entity_id, None)
        self._recompute()

    @callback
    def _on_connected(self, _event: Event) -> None:
        self._recompute()

    @callback
    def _recompute(self) -> None:
        suffixes = excluded_entity_suffixes(self.hass)
        left_out = sum(
            count
            for entity_id, count in self._counts.items()
            if any(entity_id.endswith(s) for s in suffixes)
        )
        total = sum(self._counts.values()) - left_out
        if total == self._attr_native_value and left_out == self._attr_extra_state_attributes["left_out"]:
            return
        self._attr_native_value = total
        self._attr_extra_state_attributes = {"left_out": left_out}
        if self.hass is not None:
            self.async_write_ha_state()
