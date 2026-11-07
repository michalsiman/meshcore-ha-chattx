"""Channels left out of the Chat tab's unread total.

A busy channel such as a test or bot channel can make the Chat tab's
unread total useless. The user can leave such channels out of that
total: their own conversation badges still count new messages, only
the tab total ignores them. The choice is per (upstream config entry,
channel index) pair, like the channel's region scope, and lives in
HA's ``Store`` so every browser sees the same total.

Writes happen only when the user saves or removes a channel in the
panel, so saves are immediate (no debounce). The singleton instance
lives in ``hass.data["meshcore_chattx"]["channel_total_exclusions"]``.
"""
from __future__ import annotations

import logging

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_LOGGER = logging.getLogger(__name__)

STORAGE_VERSION = 1
STORAGE_KEY_CHANNEL_TOTAL_EXCLUSIONS = "meshcore_chattx.channel_total_exclusions"


class ChannelTotalExclusionStore:
    """Persist which channels the Chat tab's unread total leaves out.

    Payload shape::

        {"<upstream_entry_id>": [<channel_idx>, ...], ...}

    Indices are kept sorted and unique; an entry with no excluded
    channel is dropped.
    """

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store against HA's .storage directory."""
        self._store: Store[dict[str, list[int]]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY_CHANNEL_TOTAL_EXCLUSIONS
        )
        self._excluded: dict[str, list[int]] = {}

    async def async_load(self) -> None:
        """Hydrate the in-memory map from disk (once, at setup)."""
        data = await self._store.async_load()
        if not isinstance(data, dict):
            return
        cleaned: dict[str, list[int]] = {}
        for entry_id, indices in data.items():
            if not isinstance(indices, list):
                continue
            valid = sorted({i for i in indices if isinstance(i, int) and not isinstance(i, bool)})
            if valid:
                cleaned[str(entry_id)] = valid
        self._excluded = cleaned

    def is_excluded(self, entry_id: str, channel_idx: int) -> bool:
        """Return True when the channel is left out of the tab total."""
        return channel_idx in self._excluded.get(entry_id, [])

    async def async_set(self, entry_id: str, channel_idx: int, excluded: bool) -> None:
        """Leave a channel out of the total, or count it again, and persist."""
        current = set(self._excluded.get(entry_id, []))
        if excluded == (channel_idx in current):
            return  # no change — skip the disk write
        if excluded:
            current.add(channel_idx)
        else:
            current.discard(channel_idx)
        if current:
            self._excluded[entry_id] = sorted(current)
        else:
            self._excluded.pop(entry_id, None)

        # A save failure must not propagate out of the WS handler that
        # calls this; the in-memory map stays updated and the next
        # successful save persists it.
        try:
            await self._store.async_save(self._excluded)
        except Exception as ex:
            _LOGGER.error(
                "Failed to persist the Chat total exclusion (entry=%s, channel=%s): %s",
                entry_id,
                channel_idx,
                ex,
            )
