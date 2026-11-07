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


STORAGE_KEY_HEARD_REPLY = "meshcore_chattx.heard_reply"


class HeardReplyStore:
    """Persist the quick reply text of the message dialog ("Heard, {hops}!").

    ``None`` means it was never set here, so a panel may still bring over a
    text saved in its browser by older versions; an empty string means the
    default text.
    """

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store against HA's .storage directory."""
        self._store: Store[dict] = Store(hass, STORAGE_VERSION, STORAGE_KEY_HEARD_REPLY)
        self._text: str | None = None

    async def async_load(self) -> None:
        """Hydrate the text from disk (once, at setup)."""
        data = await self._store.async_load()
        if isinstance(data, dict) and isinstance(data.get("text"), str):
            self._text = data["text"]

    def get(self) -> str | None:
        """Return the text, '' for the default, None when never set."""
        return self._text

    async def async_set(self, text: str) -> None:
        """Replace the text and persist immediately."""
        self._text = text.strip()
        await self._store.async_save({"text": self._text})
