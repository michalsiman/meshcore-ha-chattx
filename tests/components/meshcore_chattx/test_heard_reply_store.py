"""The quick reply text is kept in Home Assistant for every browser."""
from __future__ import annotations

from homeassistant.core import HomeAssistant

from custom_components.meshcore_chattx.quick_messages import HeardReplyStore


async def test_never_set_then_saved_and_reloaded(hass: HomeAssistant) -> None:
    store = HeardReplyStore(hass)
    await store.async_load()
    assert store.get() is None

    await store.async_set("  Copy, {hops}!  ")
    assert store.get() == "Copy, {hops}!"

    reloaded = HeardReplyStore(hass)
    await reloaded.async_load()
    assert reloaded.get() == "Copy, {hops}!"


async def test_empty_text_means_default(hass: HomeAssistant) -> None:
    store = HeardReplyStore(hass)
    await store.async_load()
    await store.async_set("   ")
    assert store.get() == ""
