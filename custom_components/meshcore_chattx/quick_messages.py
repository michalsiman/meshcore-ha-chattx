"""Quick messages offered in the chat composer, shared by all users."""
from __future__ import annotations

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

STORAGE_VERSION = 1
STORAGE_KEY_QUICK_MESSAGES = "meshcore_chattx.quick_messages"


class QuickMessageStore:
    """Persist the ordered list of quick messages."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store against HA's .storage directory."""
        self._store: Store[list[str]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY_QUICK_MESSAGES
        )
        self._messages: list[str] = []

    async def async_load(self) -> None:
        """Hydrate the in-memory list from disk (once, at setup)."""
        data = await self._store.async_load()
        if isinstance(data, list):
            self._messages = data

    def get(self) -> list[str]:
        """Return the messages in display order."""
        return list(self._messages)

    async def async_set(self, messages: list[str]) -> None:
        """Replace the list and persist immediately."""
        self._messages = list(messages)
        await self._store.async_save(self._messages)
