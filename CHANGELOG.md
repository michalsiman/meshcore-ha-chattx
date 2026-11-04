# Changelog

All notable changes to **MeshCore Chat for Home Assistant** are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/) loosely; entries are most-recent-first.

## [Unreleased]

## [0.1.13] - Unreleased

### Changed

- The conversation list shows the newest message's age in minutes under an hour.

### Added

- Switch in the manage dialog to hide contact IDs and channel numbers in the chat list, remembered per browser.

## [0.1.12] - Unreleased

### Changed

- Saved repeater data shows how long ago it was read instead of the date and time, which moved to the tooltip.

## [0.1.11] - Unreleased

### Added

- The hop count on received messages also shows the path's bytes per hop, for example "3 hops (2B)".
- The conversation list shows how long ago each conversation's newest message came, in hours and above 48 hours in days.

### Changed

- The quick messages and diacritics buttons are stacked to leave more width for the message text.

## [0.1.10] - Unreleased

### Added

- Message dialog option that puts "@[sender] Slyším, N hops!" in the composer, with the message's hop count.

### Changed

- The message dialog's copy and reply buttons are in Czech for Czech browsers.

## [0.1.9] - Unreleased

### Changed

- Repeater neighbours load ten at a time, with a button for the next ten.

## [0.1.8] - Unreleased

### Added

- Neighbours block after repeater login: heard nodes with SNR and when they were last heard.
- Regions block after repeater login: read the region tree, add and remove regions, set flood permission, home and default scope, and save to the repeater.

## [0.1.7] - Unreleased

### Changed

- The time values were read from a repeater turns orange after an hour and red after a day.

### Added

- Terminal block after repeater login: send any command and read the reply.

## [0.1.6] - Unreleased

### Fixed

- Reply moves the cursor to the message input, so typing continues there.

### Added

- Telemetry block after repeater login: battery voltage, MCU temperature and any other sensors the repeater reports. Values are remembered with the time they were read.

## [0.1.5] - Unreleased

### Added

- Bytes-left counter next to the chat input, red at the limit. Messages over the limit can't be sent.
- Switch next to the chat input to send without diacritics. The browser remembers it.

## [0.1.4] - Unreleased

### Added

- Quick messages: managed in Settings, offered by a button next to the chat input. Each can have up to 160 bytes.
- Values read from a repeater are remembered and shown with the time they were read. The button then offers a reload.
- The login icon turns green for a repeater with a remembered admin login.

### Changed

- Channels and contacts in the chat list are sorted by latest message.

## [0.1.3] - Unreleased

### Added

- Repeater login and settings can be opened from a repeater's chat conversation.
- A confirmed admin login is remembered, so settings can be loaded without logging in again. Repeaters keep admin logins indefinitely.

### Fixed

- Replies to commands typed in a repeater's chat conversation are stored again. Only replies to settings reads are left out of the chat.

## [0.1.2] - Unreleased

### Changed

- Repeater settings load one group at a time. Loading again fills only the fields still missing, or refreshes a fully loaded group.
- Commands to a zero-hop repeater no longer use core's mesh traffic budget.
- When the budget runs out, loading waits and continues instead of stopping.

### Fixed

- Frequency no longer shows floating-point noise.

## [0.1.1] - Unreleased

### Added

- Log in to a repeater contact, optionally remembering the password in Home Assistant.
- Read repeater settings group by group. Guest password and private key are not read, because core publishes every reply as a `meshcore_message` event.

### Changed

- Replies to repeater settings reads are not stored as chat messages.

## [0.1.0] - Unreleased

First release of **MeshCore Chattx**, a fork of [MeshCore Chat](https://github.com/mwolter805/meshcore-ha-chat) v0.3.1. Entries below this one are the upstream project's history; issue numbers in them refer to the upstream repository.

### Changed

- Renamed to domain `meshcore_chattx`, with its own panel URL, WebSocket commands, storage keys, HA events and custom element names, so it can run next to MeshCore Chat. Message history is not migrated.

### Fixed

- Follow-up delivery updates from meshcore 3.x no longer flip sent channel messages back to "Waiting…".
- Browsers load the new panel bundle after an update instead of a cached copy.

### Added

- Hop count on incoming message bubbles, in Czech or English depending on the browser language.

## [0.3.1] - 2026-06-24

### Fixed

- **Blank sidebar panel on older Android System WebViews (GitHub issue #22).** The panel bundle is now down-leveled at build time so it parses on browser engines back to roughly 2018 (Chrome / Android System WebView 64, Safari 12). The Lit 3 runtime ships ES2021 logical-assignment syntax (`??=`, `||=`, `&&=`) that an Android System WebView older than Chromium 85 cannot parse, which left the panel blank in the Home Assistant Android companion app while it rendered correctly in a desktop browser. The build now runs the assembled bundle through `@babel/preset-env` against an explicit `browserslist` floor; behavior on modern engines is unchanged and no new runtime polyfills are added.

## [0.3.0] - 2026-06-18

### Fixed

- **Device-config commands no longer report success on failure (GitHub issue #7).** Setting TX power, coordinates, radio parameters, or path-hash mode from the Settings tab now inspects each command's result: a firmware NACK or an error event surfaces a failure that names the setting that failed, the reason the device reported, and any settings already applied in that request, then stops — instead of silently reporting success while the radio was unchanged.
- **Storage hardening (GitHub issue #6).** A failed save of the message store, unread cursors, or channel scopes no longer risks silent message loss: save failures are caught and the affected conversations stay marked dirty for a passive retry, and message loads validate their on-disk shape and fall back to empty on corrupt data *without* overwriting the file. One aggregated error is logged per failed flush rather than a crash.
- **Channel add / edit / remove no longer fails after an upstream rename.** Saving a channel now calls the core integration's public `fetch_all_channel_info()`; the prior private method had been renamed upstream, which broke channel management with an `AttributeError`.
- **Editing a channel no longer regenerates a custom key.** The Edit Channel dialog now loads a channel's existing key, so changing a channel's region scope (or any other field) preserves a custom key instead of silently re-deriving it from the name — which had caused messages to stop decrypting across nodes.
- **Spurious error toast on contact add / remove.** Routed contact add/remove now treats a body-less OK from the core integration as success, so adding or removing a contact no longer shows an error even though the change took effect.

### Added

- **Per-channel region scope (GitHub issue #2).** Each channel can now be given a MeshCore region scope so sends are limited to that region, with an **All regions** option for an explicit global flood — matching the official app's "Set Scope". Received messages show the inbound scope (the region name, or an "all regions" badge for a global flood); the global label is derived by the panel itself from data the core integration already emits, so it works on a stock upstream install. Requires core meshcore-ha v2.7.0+ and companion firmware v1.10.0+ (see Compatibility).
- **Rich companion device card.** The Settings-tab companion card now renders the same hero tiles managed repeaters/clients get — battery (or USB/mains), signal (RSSI · SNR), radio activity, and message sent/received counts — plus a diagnostics sensor table (noise floor, TX queue), the radio fault flags (Packet Pool / CAD Timeout / RX-Start Timeout) shown as OK/Detected rows, and a 48-hour message-rate graph. The radio-activity tile is a lifetime average of the companion's cumulative TX/RX airtime over uptime (the companion exposes raw airtime rather than the windowed utilisation a repeater reports), and the Messages Received tile annotates the RX error rate from `recv_errors`. The tiles self-hide when their entities are absent, so the card is unchanged unless **Self Diagnostics** is enabled in the upstream meshcore integration.
- **Command dialog improvements.** The Issue Command dialog now shows human-readable values, a live device-response feed, and a distinct "login not confirmed" state; v1.16 firmware command-dialog updates are included.
- **Message-rate chart tooltip** and composer polish in the chat tab.

### Security

- **Disclosure policy and posture doc.** Added `SECURITY.md` (private vulnerability reporting via GitHub, coordinated-disclosure terms, and a Home Assistant trust-model scope note) and `docs/security-posture.md` documenting the threat model and trust boundaries — Lit auto-escaping at the render layer, the admin gate on every device- and config-changing WebSocket command, schema validation, and on-disk message persistence.
- **Automated security scanning.** Added CodeQL (Python + TypeScript), OpenSSF Scorecard, and Dependabot, with a Security section and status badges in the README. All workflow actions are pinned to commit SHAs.

### Compatibility

- **Home Assistant 2024.12+** — unchanged.
- **Core meshcore-ha integration floor raised to v2.7.0** (from v2.6.0). The region scope selector and "All regions" option rely on the message `scope` argument and inbound `region_scope` / `flood_scope` fields added to the core integration in v2.7.0 (released 2026-05-31); the rest of the release works on the prior floor.
- **Companion firmware v1.10.0 or newer** is required for the region scope feature — MeshCore flood-scope support landed in companion firmware v1.10.0.
- **No migration.** Channel keys, stored messages, unread cursors, and saved channel scopes are preserved across the upgrade.

## [0.2.1] - 2026-05-16

### Fixed

- **Custom channel keys (GitHub issue #1).** The "Custom Key" field in
  the Add Channel dialog now correctly accepts a 32-character hex
  string (16 bytes, AES-128) — matching the MeshCore protocol's
  channel-key size and the meshcore_py SDK's validation. Previously
  the field required 64 hex characters and the backend silently
  truncated the input to the first 16 bytes, which meant users
  pasting a normal MeshCore channel key were blocked at validation,
  and users who padded their key to 64 chars only had its first half
  programmed on the radio. Backward compatibility note: channels
  already configured under the prior UI continue to work as-is on
  the radio; re-entering the same key elsewhere now requires only
  the first 32 hex characters of whatever was originally typed.

- **Unread badge clearing on channel re-entry.** When clicking back into
  a busy channel with unread messages exceeding one viewport, the badge
  no longer disappears prematurely and the viewport now lands at the
  unread divider (not at the conversation tail). The fix landed in two
  layers across two commits: the first removed an active-entity-zero
  heuristic in the badge state, added `overflow-anchor: none` to the
  chat container, and gated mark-read during the post-switch scroll;
  the second simplified those gates by blocking the underlying race —
  lazy-load-older firing on the synthetic scroll event that follows
  Lit's re-render after `_fetchAroundAnchor`, before
  `_doScrollWithRetry` positions the divider. Now mark-read fires
  reliably when the user can see the latest message (small or
  fully-visible-unread conversations) and stays when the tail is
  below viewport (long-history channel re-entry).

- **Unread divider** no longer renders when only outgoing groups follow
  the anchor — fixes a divider-projection inconsistency surfaced during
  multi-entry switching tests.

### Refactored

- **UnreadController architecture (Phases 2-4).** The frontend's unread
  state is now consolidated in a single panel-owned `UnreadController`.
  Phase 2 introduces the controller and migrates the badge data
  subscription. Phase 3 moves the per-conversation read-progress state
  machine into the controller (anchor, grace window, post-switch timer,
  dedup guard). Phase 4 centralizes the "↓ N new" pill label and the
  `cursorAtTail` query.

### CI

- **Validate workflow** now skips on non-canonical repos via a
  `github.repository` guard, eliminating spurious HACS-validation
  failures on the private dev mirror.

### Compatibility

Same Home Assistant version floor as 0.2.0 (HA 2024.12+); same
core integration version floor (meshcore-ha v2.6.0+).

## [0.2.0] - 2026-05-09

First tagged release. Active development continues; treat this as an early preview, not a stable LTS.

### Security audit complete

A pre-public-release audit landed for this version:

- **Admin gate on 15 destructive WebSocket handlers** (b45cfc8). Non-admin HA users can no longer wipe channel keys, regenerate the companion identity, reconfigure the radio, or issue commands to managed repeaters. See [INSTRUCTIONS.md → Permissions](./INSTRUCTIONS.md#permissions) for the full list.
- **XSS hardening** (58454b8). Mention rendering escapes HTML instead of using `unsafeHTML`; regression test covers the previous attack vector.
- **Identity-dialog hardening** (21e5454). Hex validation on key fields; IMPORT flow requires typed confirmation.

### What's in 0.2.0

- Sidebar chat panel with channels, DMs, contact list, and per-message route popups (hops, SNR, RSSI, exact receive timestamp).
- Persistent message store (default 90-day / 500-msg per conversation, configurable to 1–365 days / 50–5000 msgs).
- Cross-conversation date-range search.
- Unread-count cursor — survives reloads, gates auto-mark-read on user engagement, refreshes on entry switch.
- Devices tab — per-device sensor tiles (SNR, RSSI, airtime, battery), neighbor tables, quick-action buttons, Issue Command, Reboot, Start OTA Update.
- Nodes tab — full network discovery view, filterable by Added / Discovered and by node type, with last-heard sort and stale-record cleanup.
- Settings tab — radio configuration (TX power, frequency, bandwidth, spreading factor, coding rate, path-hash mode), rename, location, Key Management.
- Trace dialog with Discover, Select repeaters, and Enter path modes.

### Requirements

- Home Assistant **2024.12** or newer.
- Core [meshcore-ha](https://github.com/meshcore-dev/meshcore-ha) integration **v2.6.0** or newer (released 2026-04-27). 0.2.0 of the chat companion calls the structured query services (`meshcore.get_contacts`, `meshcore.trace`) introduced in 2.6.0.

### Installation

Via HACS — see the [README's Installation section](./README.md#installation). After install, restart HA and add the integration from **Settings → Devices & Services → Add Integration → MeshCore Chat**.

### Known issues

- The **Discover** trace mode (flood path discovery) sometimes silently drops on multi-hop routes. If a Discover trace fails, switch to **Select repeaters** or **Enter path** in the trace dialog to specify the route explicitly.

### Upgrading

First tagged release — no migration. If you've been tracking `main` via HACS, switch HACS to track tagged releases and pin v0.2.0.
