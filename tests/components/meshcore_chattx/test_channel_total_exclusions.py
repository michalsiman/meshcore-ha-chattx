"""Unit tests for ``custom_components.meshcore_chattx.channel_total_exclusions``."""
from __future__ import annotations

from homeassistant.core import HomeAssistant

from custom_components.meshcore_chattx.channel_total_exclusions import (
    ChannelTotalExclusionStore,
)


async def test_set_and_clear(hass: HomeAssistant) -> None:
    store = ChannelTotalExclusionStore(hass)
    await store.async_load()

    assert not store.is_excluded("entry_a", 3)

    await store.async_set("entry_a", 3, True)
    await store.async_set("entry_a", 1, True)
    assert store.is_excluded("entry_a", 3)
    assert store.is_excluded("entry_a", 1)
    # Entries are independent namespaces
    assert not store.is_excluded("entry_b", 3)

    await store.async_set("entry_a", 3, False)
    assert not store.is_excluded("entry_a", 3)
    assert store.is_excluded("entry_a", 1)


async def test_round_trip(hass: HomeAssistant) -> None:
    store = ChannelTotalExclusionStore(hass)
    await store.async_load()
    await store.async_set("entry_a", 2, True)

    reloaded = ChannelTotalExclusionStore(hass)
    await reloaded.async_load()
    assert reloaded.is_excluded("entry_a", 2)


async def test_last_channel_drops_the_entry(hass: HomeAssistant) -> None:
    store = ChannelTotalExclusionStore(hass)
    await store.async_load()
    await store.async_set("entry_a", 2, True)
    await store.async_set("entry_a", 2, False)
    assert store._excluded == {}

    # Counting an already counted channel again is a no-op
    await store.async_set("entry_a", 5, False)
    assert store._excluded == {}
