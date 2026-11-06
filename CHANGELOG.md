# Changelog

All notable changes to **MeshCore Chattx for Home Assistant**, a fork of MeshCore Chat, are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/) loosely; entries are most-recent-first.

## [Unreleased]

## [0.4.0] - 2026-11-06

### Added

- Received channel messages show the region they were sent in after the time, as `#name`. A message sent in a region that is not in core meshcore's Flood Scope Allowlist shows "unknown region", because a region can only be recognised by its name. The message dialog always names the region, or says the message was a plain global flood.
- Settings → Region sets the companion's default region for sending (firmware v1.15.0 or newer). Channel messages without their own region go out in it; a region set on the channel still wins. The radio keeps the setting, so it also applies to other clients such as the phone app. Chattx reads the region back from the radio after saving it.
- The Chat tab shows how many messages are unread, so new messages are visible while another conversation or tab is open.

### Fixed

- Conversations showed no unread badge while Home Assistant's sidebar did. Chattx loaded the counts only when the panel opened for the first time, and missed messages that came in while another Home Assistant page was open or the phone was asleep. It now fetches them again when the panel comes back, when the connection is back and when the page becomes visible.
- "No region" could not be set as the default region: meshcore_py sends a frame that the firmware refuses with `ERR_CODE_ILLEGAL_ARG`. Chattx now sends the short command the firmware accepts.

## [0.3.4] - 2026-11-05

### Fixed

- The repeater's 48-hour message activity chart dropped to zero for hours after every Home Assistant restart, although the repeater kept working. It used core meshcore's rate sensors, which report 0 for the first repeater poll after a restart. The chart now computes the rates from the repeater's packet counters, skipping restarts and repeater reboots, which also corrects the hours already recorded.
- After a Home Assistant restart a repeater's tiles were blank and its status read "Unknown" until core meshcore's next repeater poll, up to two hours later. They now show the values from the last poll, with a "Loaded … ago" note in the header.
- The received messages tile showed "Flood NaN" and "Direct NaN" when the counters had no value; it shows a dash now.
- The panel's address now carries a hash of its content as well as the version, so a browser cannot keep running an older build of the same version.

## [0.3.3] - 2026-11-05

### Changed

- Chattx talks to the radio only through the calls meshcore-ha 3.x supports, instead of reaching into `api.mesh_core` and other 2.x internals (upstream issue #47). This removes the deprecation warnings and keeps Chattx working when meshcore-ha deletes those internals. With meshcore-ha 3.x, commands from Chattx now wait their turn with the integration's own radio traffic instead of interleaving with it. meshcore-ha 2.x still works the old way.

## [0.3.2] - 2026-11-05

### Fixed

- The region scope picker read the flood scope allowlist only where meshcore-ha 2.x keeps it, so with meshcore-ha 3.x it stayed empty. It now reads the 3.x location first (upstream issues #50 and #53, pull request #54).
- No more deprecation warnings for `coordinator._repeater_stats`, which meshcore-ha 3.x dropped, and for `device_registry.async_get_device`, which stops working in Home Assistant 2027.8 (upstream issue #45).

## [0.3.1] - 2026-11-05

### Added

- After an update, the panel shows a bar with a button to reload the page, instead of running the old version until the user reloads by hand.
- A page that still runs the old panel no longer logs errors when Home Assistant loads the new one into it.

### Fixed

- Opening a conversation with nothing new showed the top of the list for about a second before jumping to the newest message. It now opens at the newest message right away.

## [0.3.0] - 2026-11-05

### Added

- Panel languages: Slovak, Polish, German, French, Ukrainian, Croatian, Serbian (Latin, also for Bosnian and Montenegrin browsers), Slovenian, Finnish, Swedish and Danish. The longest technical tooltips are still in English in these languages, and so are the command catalog and the window for adding the integration.
- Translations are plain JSON files in `panel_translations`, loaded when the panel starts, so they can be corrected on GitHub without a rebuild. See TRANSLATING.md.

### Changed

- The panel file is smaller, because translations are no longer part of it.

## [0.2.0] - 2026-11-05

### Added

- Translations: the panel is fully in English and Czech, except the descriptions in the command catalog. Terms from the MeshCore documentation, such as repeater, flood and hop, stay in English.
- Language setting in the Settings tab: automatic (Home Assistant profile, then browser) or a specific language, per browser.
- The text of the quick reply can be changed in the Settings tab. The default follows the panel language: "Heard, 3 hops!" or "Slyším, 3 hops!".

### Fixed

- Settings showed the path hash mode as 1 byte whatever the device used. It now reads the mode from the device, and shows Unknown if the device does not say.

## [0.1.20] - 2026-11-05

### Changed

- The sidebar icon has an x, matching the Chattx logo.

## [0.1.19] - 2026-11-05

### Changed

- New banner and integration icon with the Chattx name.
- The README leads with how Chattx differs from MeshCore Chat, and has new screenshots and install steps for the Marketplace.

## [0.1.18] - 2026-11-05

### Changed

- Buttons next to the message field and sending a message no longer take the focus from it, so a phone's keyboard stays open.

## [0.1.17] - not released separately

### Changed

- The panel stays inside the visible part of the screen when the on-screen keyboard opens, so the top bar and back button stay reachable.
- The title is shortened to "MC Chattx" on phones.

## [0.1.16] - not released separately

### Added

- Emoji button above the bytes left: the picked emoji goes in at the cursor and the focus returns to the message field.

## [0.1.15] - not released separately

### Changed

- The node dialog's header with the name stays in place while its content scrolls.

## [0.1.14] - not released separately

### Changed

- Picking a conversation puts the cursor in the message field.
- Conversation circles show letters from the name instead of the ID or channel number: "Kamenny vrch" KV, "MBX-BASE" MB, "Public" PU, "Lx01 📟" L📟.

## [0.1.13] - not released separately

### Changed

- The conversation list shows the newest message's age in minutes under an hour.

### Added

- Switch in the manage dialog to hide contact IDs and channel numbers in the chat list, remembered per browser.

## [0.1.12] - not released separately

### Changed

- Saved repeater data shows how long ago it was read instead of the date and time, which moved to the tooltip.

## [0.1.11] - not released separately

### Added

- The hop count on received messages also shows the path's bytes per hop, for example "3 hops (2B)".
- The conversation list shows how long ago each conversation's newest message came, in hours and above 48 hours in days.

### Changed

- The quick messages and diacritics buttons are stacked to leave more width for the message text.

## [0.1.10] - not released separately

### Added

- Message dialog option that puts "@[sender] Slyším, N hops!" in the composer, with the message's hop count.

### Changed

- The message dialog's copy and reply buttons are in Czech for Czech browsers.

## [0.1.9] - not released separately

### Changed

- Repeater neighbours load ten at a time, with a button for the next ten.

## [0.1.8] - not released separately

### Added

- Neighbours block after repeater login: heard nodes with SNR and when they were last heard.
- Regions block after repeater login: read the region tree, add and remove regions, set flood permission, home and default scope, and save to the repeater.

## [0.1.7] - not released separately

### Changed

- The time values were read from a repeater turns orange after an hour and red after a day.

### Added

- Terminal block after repeater login: send any command and read the reply.

## [0.1.6] - not released separately

### Fixed

- Reply moves the cursor to the message input, so typing continues there.

### Added

- Telemetry block after repeater login: battery voltage, MCU temperature and any other sensors the repeater reports. Values are remembered with the time they were read.

## [0.1.5] - not released separately

### Added

- Bytes-left counter next to the chat input, red at the limit. Messages over the limit can't be sent.
- Switch next to the chat input to send without diacritics. The browser remembers it.

## [0.1.4] - not released separately

### Added

- Quick messages: managed in Settings, offered by a button next to the chat input. Each can have up to 160 bytes.
- Values read from a repeater are remembered and shown with the time they were read. The button then offers a reload.
- The login icon turns green for a repeater with a remembered admin login.

### Changed

- Channels and contacts in the chat list are sorted by latest message.

## [0.1.3] - not released separately

### Added

- Repeater login and settings can be opened from a repeater's chat conversation.
- A confirmed admin login is remembered, so settings can be loaded without logging in again. Repeaters keep admin logins indefinitely.

### Fixed

- Replies to commands typed in a repeater's chat conversation are stored again. Only replies to settings reads are left out of the chat.

## [0.1.2] - not released separately

### Changed

- Repeater settings load one group at a time. Loading again fills only the fields still missing, or refreshes a fully loaded group.
- Commands to a zero-hop repeater no longer use core's mesh traffic budget.
- When the budget runs out, loading waits and continues instead of stopping.

### Fixed

- Frequency no longer shows floating-point noise.

## [0.1.1] - not released separately

### Added

- Log in to a repeater contact, optionally remembering the password in Home Assistant.
- Read repeater settings group by group. Guest password and private key are not read, because core publishes every reply as a `meshcore_message` event.

### Changed

- Replies to repeater settings reads are not stored as chat messages.

## [0.1.0] - not released separately

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
