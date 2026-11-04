"""Remembered repeater passwords, kept server-side.

Passwords sit in plain text in ``.storage`` (and therefore in HA backups),
the same way the core meshcore integration stores the password of a managed
repeater. They are never sent back to the frontend and never logged.
"""
from __future__ import annotations

import logging

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_LOGGER = logging.getLogger(__name__)

STORAGE_VERSION = 1
STORAGE_KEY_REPEATER_CREDENTIALS = "meshcore_chattx.repeater_credentials"
STORAGE_KEY_REPEATER_LOGINS = "meshcore_chattx.repeater_logins"
STORAGE_KEY_REPEATER_SETTINGS = "meshcore_chattx.repeater_settings"
_REPEATER_SETTINGS_SAVE_DELAY = 5


class RepeaterCredentialStore:
    """Persist passwords as ``{upstream_entry_id: {pubkey_prefix: password}}``."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store against HA's .storage directory."""
        self._store: Store[dict[str, dict[str, str]]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY_REPEATER_CREDENTIALS, private=True
        )
        self._passwords: dict[str, dict[str, str]] = {}

    async def async_load(self) -> None:
        """Hydrate the in-memory map from disk (once, at setup)."""
        data = await self._store.async_load()
        if isinstance(data, dict):
            self._passwords = data

    def get(self, entry_id: str, prefix: str) -> str | None:
        """Return the remembered password, or None when there is none."""
        return self._passwords.get(entry_id, {}).get(prefix)

    async def async_set(self, entry_id: str, prefix: str, password: str) -> None:
        """Remember a password and persist immediately."""
        per_entry = self._passwords.setdefault(entry_id, {})
        if per_entry.get(prefix) == password:
            return
        per_entry[prefix] = password
        await self._async_save(prefix)

    async def async_forget(self, entry_id: str, prefix: str) -> None:
        """Forget a password and persist immediately."""
        per_entry = self._passwords.get(entry_id)
        if not per_entry or prefix not in per_entry:
            return
        del per_entry[prefix]
        if not per_entry:
            del self._passwords[entry_id]
        await self._async_save(prefix)

    async def async_remove(self) -> None:
        """Delete the file when the integration is removed."""
        self._passwords = {}
        await self._store.async_remove()

    async def _async_save(self, prefix: str) -> None:
        # A failed save must not fail the login that triggered it. The
        # in-memory map stays updated, so the next successful save persists it.
        try:
            await self._store.async_save(self._passwords)
        except Exception as ex:
            _LOGGER.error(
                "Failed to persist repeater password for %s: %s",
                prefix,
                type(ex).__name__,
            )


class RepeaterLoginStore:
    """Remember confirmed admin logins as ``{entry_id: {prefix: iso_time}}``.

    A repeater has no session timeout. It keeps an admin login in flash, across
    reboots, and never evicts it, so one login stays valid until it is revoked
    on the repeater. Guest logins are transient and aren't remembered.
    """

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store against HA's .storage directory."""
        self._store: Store[dict[str, dict[str, str]]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY_REPEATER_LOGINS
        )
        self._logins: dict[str, dict[str, str]] = {}

    async def async_load(self) -> None:
        """Hydrate the in-memory map from disk (once, at setup)."""
        data = await self._store.async_load()
        if isinstance(data, dict):
            self._logins = data

    def get(self, entry_id: str, prefix: str) -> str | None:
        """Return when the admin login was confirmed, or None."""
        return self._logins.get(entry_id, {}).get(prefix)

    async def async_set(self, entry_id: str, prefix: str, when: str) -> None:
        """Record a confirmed admin login."""
        self._logins.setdefault(entry_id, {})[prefix] = when
        await self._async_save(prefix)

    async def async_forget(self, entry_id: str, prefix: str) -> None:
        """Drop a login the repeater no longer grants as admin."""
        per_entry = self._logins.get(entry_id)
        if not per_entry or prefix not in per_entry:
            return
        del per_entry[prefix]
        if not per_entry:
            del self._logins[entry_id]
        await self._async_save(prefix)

    async def async_remove(self) -> None:
        """Delete the file when the integration is removed."""
        self._logins = {}
        await self._store.async_remove()

    async def _async_save(self, prefix: str) -> None:
        try:
            await self._store.async_save(self._logins)
        except Exception as ex:
            _LOGGER.error(
                "Failed to persist repeater login for %s: %s",
                prefix,
                type(ex).__name__,
            )


class RepeaterSettingsStore:
    """Remember the last answer per setting, and the last telemetry.

    Shape: ``{entry_id: {prefix: {command: {"value" or "unsupported", "read_at"}}}}``,
    with telemetry under the command ``telemetry`` as ``{"sensors", "read_at"}``.
    Secrets never get here, since they can't be read through the panel.
    """

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store against HA's .storage directory."""
        self._store: Store[dict] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY_REPEATER_SETTINGS
        )
        self._settings: dict[str, dict[str, dict[str, dict]]] = {}

    async def async_load(self) -> None:
        """Hydrate the in-memory map from disk (once, at setup)."""
        data = await self._store.async_load()
        if isinstance(data, dict):
            self._settings = data

    def get(self, entry_id: str, prefix: str) -> dict[str, dict]:
        """Return the remembered answers for one repeater."""
        return self._settings.get(entry_id, {}).get(prefix, {})

    def record(
        self, entry_id: str, prefix: str, command: str, answer: dict
    ) -> None:
        """Remember one answer; several reads in a row share one disk write."""
        per_repeater = self._settings.setdefault(entry_id, {}).setdefault(prefix, {})
        per_repeater[command] = answer
        self._store.async_delay_save(
            lambda: self._settings, _REPEATER_SETTINGS_SAVE_DELAY
        )

    async def async_remove(self) -> None:
        """Delete the file when the integration is removed."""
        self._settings = {}
        await self._store.async_remove()
