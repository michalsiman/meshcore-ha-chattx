# Changelog

All notable changes to **MeshCore Chattx for Home Assistant**, a fork of MeshCore Chat, are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/) loosely; entries are most-recent-first.

## [Unreleased]

## [0.16.2] - 2026-11-10

### Fixed

- Opening "Add channel" or "Edit channel" from Manage moved the Manage window to the left edge of the screen, over the Home Assistant sidebar. Manage now stays in place and the channel window opens above it.
- Some texts were always in English: the title and hints of the channel window, the "+ Add channel" button in Manage, and "Add contact", "Adding…" and "Logged in" in node details. They are now translated in all languages.

## [0.16.1] - 2026-11-10

### Fixed

- Own direct messages showed the channel status "Unheard" even when the recipient had confirmed them. A direct message now shows "Delivered" when the recipient confirmed it (ACK) and "Not confirmed" otherwise; the details say whether an ACK came.
- Core MeshCore sends a direct message again when the recipient does not confirm it, and each attempt appeared as its own bubble. The attempts are now one message with their count ("Not confirmed · 2 attempts"); an ACK to any attempt makes it delivered. Attempts stored earlier are merged when the conversation is opened.

## [0.16.0] - 2026-11-10

### Added

- Six more panel languages: Spanish, Portuguese, Brazilian Portuguese, Italian, Greek and Welsh (19 in all). A browser or Home Assistant set to a region with its own translation, such as pt-BR, gets that variant; any other region gets the plain language. Like the other translations apart from Czech, they have not been checked by native speakers yet; corrections are welcome (see TRANSLATING.md).

## [0.15.0] - 2026-11-10

### Fixed

- A blocked sender's message no longer shows as the newest message of a channel in the chat list, nor moves the channel up: neither a live one nor one stored before blocking.
- Image upload tries again twice when the service answers with a server error or the network fails for a moment. When the service stays down, the dialog says that it is out of service right now and to choose another service, instead of showing the service's whole error page.
- An image preview that can't be loaded is tried only once: the conversation shows "The image could not be downloaded." in a box of the same size (nothing jumps), and the failure is remembered, so the image isn't tried again, also after a reload or on another device. Before, every redraw of the conversation loaded the preview again and the conversation jumped.

### Added

- Send again: the details of an own message have a "Send again" action that sends the same text to the conversation as a new message, for example when nobody heard it.
- A tap on an image preview shows the image large over the conversation instead of opening a new browser window; ✕ at the top right, a tap beside the image, Escape or the phone's back gesture closes it.
- A further image service in the upload dialog: tmpfiles.org (deleted after 60 minutes). Its link opens the file's page; previews take the image from that page through Home Assistant.

### Changed

- The time of recent messages is translated ("now", "5m", "3h" were English everywhere; Czech now shows "teď", "5 min", "3 h").
- Everything goes through Home Assistant; the browser contacts no other server. Image previews, and the image a tap on one opens, are fetched by Home Assistant (a new image proxy reached by a signed address, like camera images): a mobile network that blocks an image host no longer matters, and the image's server never sees the device. The proxy fetches only public http(s) addresses (nothing in the local network, checked after each redirect), only images up to 10 MB, and keeps recent ones in memory for a day. Without Home Assistant's map tile proxy (before 2026.11) the maps draw the offline map instead of loading tiles from openstreetmap.org in the browser. Link shortening, image upload and the offline map download already went through Home Assistant.
- Settings are kept once in Home Assistant by the integration, the same for every user, browser and device (there is one MeshCore companion), and a change shows on every open panel right away: language, contact IDs, diacritics, message previews in the chat list, the tab title count, hidden sensors, list or map in Nodes, distance unit, offline map only, image previews, how long uploaded images stay, and message drafts. What a browser kept locally moves into the shared settings on the first start (a shared value wins) and is removed from the browser.

## [0.14.0] - 2026-11-09

### Added

- Images in messages: paste an image into the message field (Ctrl+V) or pick one with the 📎 button. A dialog shows a preview and shrinks the image to at most 1600 px (JPEG); on Upload, Home Assistant puts it on catbox.moe (kept) or litterbox.catbox.moe (deleted after 1, 12, 24 or 72 hours; the choice is remembered per browser) and inserts the link into the message. The dialog warns that the image is public.
- Messages with a link to an image (https, ending in .jpg, .png, .gif or .webp, such as these uploads) show a small preview under the text; a tap opens the image. Settings → Images turns the previews off in a browser, as loading a preview shows the browser's address to the image's server.

## [0.13.1] - 2026-11-09

### Added

- The contact details show the contact's full public key with a Copy button, for example to block it.
- The message details show the sender's name and public key; a tap copies the key. A channel message carries only the name, so the key is looked up among the contacts by name (all of them when several share it).

### Fixed

- The Map and Blocked contacts cards in Settings were as tall as the screen, leaving large gaps between the cards.
- The country list of the offline map has a frame, an always visible scrollbar and a count, so it is clear that it scrolls.

## [0.13.0] - 2026-11-09

### Added

- Blocked contacts (Settings): messages from the senders listed there are neither shown nor stored, in channels and direct messages, and don't count as unread. A sender is added by choosing a contact or entering its public key, whatever its name. Direct messages are matched by key; channel messages carry only the sender's name, so every name the key has gone by is matched, and a blocked contact that renames itself stays blocked once its new advert is heard. Messages stored before blocking are hidden too.

- Offline map for the whole world: the borders and capitals of every country always come with it (about 330 kB), and any of 247 countries can be added in detail (regions, towns in the country's own language, peaks; most countries 20–300 kB, the largest about 1 MB). Settings → Map suggests Home Assistant's country and its neighbours, has a search, and names the countries in the panel's language. The data now lives on the repository's `offline-maps` branch, rebuilt by `tools/build_offline_maps.py`.
- The route map in the message dialog can be dragged and zoomed: one finger or the mouse moves it, two fingers or the mouse wheel zoom, and the +, − and ⤢ buttons zoom or return to the whole route.
- Distances in the message dialog: the route line ends with the straight-line distance and the route's length, so they show without opening the map, and the repeater list under the map shows each repeater's leg from the previous one, with both totals below.
- Distance unit: kilometres or miles, by default following Home Assistant's unit system; Settings → Map can choose one per browser. Used for every distance in the panel and in the quick reply.
- The quick reply in the message dialog can include distances: {km} becomes the straight-line distance between the first and the last repeater and {route} the length of the route through all repeaters (for example "Heard, {hops}, {km}!"), or "? km" when a repeater's position is unknown. Set the text in Settings → Quick reply.
- Received messages show the straight-line distance between the first and the last repeater of their path, and in brackets the length of the route through all repeaters, for example "↔ 241 km (∑ 530 km)", when the repeaters' positions are known. "~" marks a value that is approximate, because a repeater prefix is shared or a repeater has no position.

### Changed

- A message that its sender sent again within 5 minutes (the same text, as a new packet, which some clients do when they don't hear it repeated) is shown once, with "×2" by its time; the message details list each repeat with its delay and path. Repeats stored earlier are merged when a conversation is opened.

### Fixed

- Downloading the offline map failed with a JSON error, because only the first part of each file was read.
- The close button of the message dialog stays at the right edge when the route map widens the dialog.

## [0.12.0] - 2026-11-09

### Added

- Simplified offline map for the route map and the nodes map. When the online map can't be loaded, for example without internet, the maps switch to a plain map drawn by the panel itself: borders of countries and regions, towns with their local names (more of them as you zoom in) and named peaks with their height. Settings → Map downloads it once per chosen country (Czechia and its neighbours are offered first; about 1 MB together) and Home Assistant keeps it, so it then works without internet. A switch there shows only the simplified map even with internet (per browser). The data is built by `tools/build_offline_maps.py` into `offline_maps/` from geoBoundaries and GeoNames (both CC BY 4.0). All languages are translated.

### Fixed

- The route map and the nodes map showed "403 Access blocked" instead of the map on some devices, because openstreetmap.org refused their tile requests. Both maps now load the OpenStreetMap tiles through Home Assistant's own tile proxy (`/api/map_tiles`, Home Assistant 2026.11 or newer), the same way Home Assistant's own maps do. Older Home Assistant versions still load them from openstreetmap.org.

## [0.11.0] - 2026-11-09

### Added

- Sensor nodes: the node details of a sensor contact stored on the radio have a Telemetry section with a Load button that asks the sensor for its readings (battery voltage, MCU temperature and the attached sensors, with units). The last reading is remembered and shown with its age. A sensor answers only to clients in its access list, so log in with its password first (the Log in button, as for repeaters); after login only Telemetry is shown, because neighbours, regions, settings and the terminal are repeater features. All languages are translated.

## [0.10.0] - 2026-11-09

### Changed

- All windows (message details, node details, trace, manage contacts and channels, channel settings, confirmations, the repeater command window and the windows in Settings and Devices) share one look: the coloured border of the message dialog. On a phone, windows that filled the whole screen keep a small margin so the border shows.
- The phone's back gesture now closes only the topmost open window, one step at a time, in every window — for example the channel settings first, then Manage, and the map before the message details. Search in a conversation closes the same way. Only when no window is open does back leave the conversation. Closing a window with ✕, a tap outside or Escape leaves no empty step behind in the history.

## [0.9.0] - 2026-11-08

### Added

- Experimental: the Nodes tab can show the nodes on a map. The List / Map switch next to the search shows every node matching the current filters and search that advertises a position, coloured by type (repeater, companion, room server, sensor), with your own node marked. Nodes close together are drawn as a numbered cluster; a tap on a cluster zooms in, a tap on a node opens its details. The map can be dragged and zoomed with the mouse wheel, two fingers or the buttons, and ⤢ returns to the whole view, which fits the bulk of the nodes. The choice of list or map is kept per browser. Map tiles come from openstreetmap.org.

### Changed

- The node details dialog is a little smaller, and on a phone the Nodes tab's buttons wrap onto a second row instead of running off the screen.

## [0.8.0] - 2026-11-08

### Added

- A message being written stays in the message field when you switch to another conversation or another Home Assistant page and come back. Each conversation keeps its own draft in this browser; a draft untouched for an hour is forgotten, and sending removes it.
- The chat list shows who wrote the newest message of each conversation and how it starts, such as "Alice: see you at the repeater", or "You: …" for your own. It updates as messages come in. The switch is in the chat list's gear menu, per browser, and on by default.

### Changed

- Conversation names in the chat list are a little larger and bolder; the age and message preview below them are quieter.

## [0.7.0] - 2026-11-08

### Added

- Web addresses in messages are links. Addresses starting with http://, https:// or www. open in a new window, which the Home Assistant app hands to the default browser; a tap on a link does not open the message dialog. Punctuation that ends the sentence stays out of the link, other schemes such as javascript: stay plain text.
- Shorten a link before sending. When the message being written contains a web address longer than a short one would be, "Shorten link" above the message field replaces it with a short address from is.gd (or v.gd when is.gd does not answer), such as https://is.gd/T4mWrg, which leaves more bytes for the text. Home Assistant asks the shortener, so it needs internet access; when it fails, the text stays as it was and the reason is shown.

## [0.6.2] - 2026-11-08

### Changed

- On a phone the system back gesture in the message dialog first hides the route map, then closes the dialog, instead of leaving the conversation. The close button, a tap outside the dialog and Escape keep the browser history in step, so the next back gesture still behaves as expected.

## [0.6.1] - 2026-11-08

### Fixed

- On a phone the message dialog with the route map was taller than the screen: it could not be scrolled and there was no way to close it. The dialog now scrolls inside and has a close button at the top that stays visible.

## [0.6.0] - 2026-11-08

### Added

- Experimental: the route of a message on a map. In the message dialog, "Show route on map" draws the path over OpenStreetMap: the sender when its position is known, every repeater of the path, and your companion, with the list of repeaters below. Repeaters are found among your contacts by the start of their public key; when several share it, the one nearest to the route is shown and marked "(?)", and a repeater without a known position is listed but not drawn. A message heard over several paths gets a tab per path. The map tiles come from openstreetmap.org, so the browser needs internet access.

### Changed

- The quick reply text of the message dialog ("Heard, 3 hops!") is now kept in Home Assistant, so every browser and computer offers the same text. It was kept in each browser before. The first time an administrator opens Chattx after the update, the text that browser had is carried over, unless one is already set in Home Assistant. Only administrators can change it.

## [0.5.1] - 2026-11-07

### Fixed

- An own channel message that looped through the mesh and came back, sometimes an hour later and over 25 hops, showed as a new received message from yourself and counted as unread. Chattx now recognises such a copy (own name as sender, same text, and the same send time when the packet carries one) and keeps it on the message you sent; its dialog says when it came back and through which repeaters. Copies stored before this version are moved the same way when the conversation loads.

## [0.5.0] - 2026-11-07

### Added

- A channel can be left out of the unread total on the Chat tab, in the channel settings ("Leave out of the Chat tab total"). Busy channels such as test or bot channels then stop raising the total, while their own conversation badges still count new messages. The choice is kept in Home Assistant, so it applies in every browser.
- New sensor `sensor.meshcore_chattx_unread` with the same total as the Chat tab, channels left out of it included. It adds up the counts Chattx already keeps for the conversation badges. Use it for a sidebar badge, a dashboard chip or an automation.
- The browser tab title starts with the unread total, such as `(3) Home Assistant`, on every Home Assistant page. It can be switched off per browser in Settings → Browser tab.

### Fixed

- Translations: 89 texts were missing in every language except Czech and showed in English, among them the new region and unread texts and the long technical tooltips. All 12 languages are complete again; only Czech has been reviewed by a native speaker.

## [0.4.1] - 2026-11-06

### Fixed

- On a phone the system back gesture in an open conversation left Chattx for the previous Home Assistant page. It now returns to the conversation list, like the back button in the conversation header; the next back gesture leaves Chattx.

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
