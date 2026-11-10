<p align="center"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/banner.png" alt="MeshCore Chattx for Home Assistant" width="800"></p>

# MeshCore Chattx for Home Assistant

**MeshCore Chattx** is a fork of [MeshCore Chat](https://github.com/mwolter805/meshcore-ha-chat) by Matt Wolter. It keeps the sidebar chat panel for the [MeshCore](https://meshcore.io) mesh radio network and adds repeater management, better message writing and proper phone support.

> [!TIP]
> **New in Chattx:** manage repeaters right from the chat, with login, settings, telemetry, neighbours, regions and a command terminal.

## How it differs from the original

| | MeshCore Chat | **MeshCore Chattx** |
|---|---|---|
| **Repeater login from the chat** | – | ✅ **With an optional saved password** |
| **Repeater settings** | Single commands, for repeaters set up as devices | ✅ **All settings by group, from the repeater's conversation, with the age of each value** |
| **Repeater telemetry and neighbours** | Devices tab, for repeaters set up as devices | ✅ **In the repeater's conversation, remembered with their age** |
| **Repeater regions** | Single commands | ✅ **Region tree you can edit and save to the repeater** |
| **Repeater commands** | Command catalog | ✅ **Terminal: type any command and read the reply** |
| **Bytes left in a message** | – | ✅ **Counter that blocks messages that are too long** |
| **Send without diacritics** | – | ✅ **One-tap switch** |
| **Emoji and quick messages** | – | ✅ **Pickers next to the message field** |
| **Hop information** | In the message dialog | ✅ **Hop count and path size on each message** |
| **Conversation list** | Contact ID or channel number | ✅ **Readable initials, newest first, age of the last message, IDs can be hidden** |
| **Language** | English | ✅ **19 languages, automatic or chosen in Settings, easy to correct on GitHub** |
| **On a phone** | Keyboard can push the top bar away | ✅ **Top bar stays reachable and the keyboard stays open** |
| **Chat panel** | ✅ | ✅ |
| **Message history, search, trace, node discovery** | ✅ | ✅ |

<p align="center"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-chat.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-chat.png" alt="MeshCore Chattx chat with initials, message ages and hop counts" width="800"></a></p>

<p align="center"><i>Demo data, with made-up names and values.</i></p>

It works as a **companion** to the [core meshcore integration](https://github.com/meshcore-dev/meshcore-ha), so install both. This integration does not drive the radio itself. It uses its own domain, `meshcore_chattx`, so it can be installed next to the original, and message history is not shared between them.

> **Status:** in active development. See the [latest release](https://github.com/michalsiman/meshcore-ha-chattx/releases/latest) and the [changelog](CHANGELOG.md).

## What Chattx adds

Everything below is new or reworked compared with the original MeshCore Chat.

These features were built by [Michal Šiman](https://github.com/michalsiman) ([OK1SIM](https://ok1sim.cz/)) together with [Claude Code](https://claude.com/claude-code), Anthropic's AI coding assistant. Michal ([OK1SIM](https://ok1sim.cz/)) chose the features and tested them on his own MeshCore network, and Claude wrote most of the code.

**Repeaters**, from the lock icon in a repeater's conversation:

- Log in as admin or guest, optionally remembering the password in Home Assistant
- Read settings group by group: name, firmware, radio, location, features, network health and more
- Read telemetry: battery voltage, temperature and any other sensors the repeater reports
- Read neighbours with SNR and when they were last heard
- Read and edit regions: add and remove them, set flood permission, home and default scope
- Terminal: send any command, such as `set tx 22`, and read the reply
- Values stay available after reading, with their age: orange after an hour, red after a day
- Replies to settings reads stay out of the chat and out of the unread counts

**Writing messages**

- Bytes-left counter that counts in UTF-8 bytes and blocks messages that are too long
- Long web addresses can be shortened with is.gd before sending; addresses in messages are clickable
- Switch that sends text without diacritics, which leaves more room in a message
- Emoji picker, inserting at the cursor
- Quick messages, managed in Settings
- One-tap quick reply with the sender's name and the message's hop count, such as "Heard, 3 hops!" (the text can be changed in Settings)
- The cursor moves to the message field when you pick a conversation

**Conversation list**

- Sorted by the newest message, with its age in minutes, hours or days
- Readable initials in the circles: `Forest Hill Relay` is FH, `#hiking` is HI, `Anna K. 📟` is A📟
- Switch in the gear menu that hides contact IDs and channel numbers
- The newest message of each conversation (sender and start of the text), switchable in the gear menu
- Unsent drafts stay in the message field per conversation for an hour, also after leaving the panel
- Unread total on the Chat tab; busy channels such as #test can be left out of it in the channel settings, while their own badges still count

**Unread messages outside the panel**

- Sensor `sensor.meshcore_chattx_unread` with the same total as the Chat tab, for a sidebar badge, a dashboard or an automation
- The browser tab title starts with the unread count, such as `(3) Home Assistant`, on every Home Assistant page (can be switched off per browser in Settings)

**Messages**

- Hop count and path size on received messages, for example `3 hops (2B)`
- Experimental: the route of a message on a map, with the repeaters it went through
- Experimental: all nodes with a known position on a map in the Nodes tab, with clusters, zoom and node details
- A simplified offline map for both maps when there is no internet: world borders and capitals, and borders, regions, towns and peaks of the countries chosen in Settings → Map (247 countries)
- The distance between the first and last repeater of a received message, and the length of its route
- Images: paste or pick an image, Home Assistant uploads it to catbox.moe and puts the link into the message; image links show a preview

**Phones**

- The top bar and Back button stay reachable when the keyboard opens
- The keyboard stays open when you press a button next to the message field or send a message
- Shorter title, `MC Chattx`, so the header stays on one line

**Languages**

- English, Czech, Slovak, Polish, German, French, Ukrainian, Croatian, Serbian (Latin), Slovenian, Finnish, Swedish and Danish
- Follows your Home Assistant profile, then your browser, or pick a language in Settings
- Terms from the MeshCore documentation, such as repeater, flood and hop, stay in English
- **Found a mistake?** Translations are plain text files you can fix right on GitHub. See [TRANSLATING.md](TRANSLATING.md)

### Screenshots of the new features

These use demo data, and the names and values are made up.

<table>
<tr>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-chat.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-chat.png" alt="Chat with an image preview, distances and a repeat count"></a></td>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-composer.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-composer.png" alt="Emoji picker, bytes-left counter and diacritics switch"></a></td>
</tr>
<tr>
<td><b>Chat</b> — the newest message under each conversation, image previews, hop count, path size and the distance between the first and last repeater (with the route length in brackets) on messages, ×2 on a message its sender sent twice, and "Unheard" on an own message nobody repeated.</td>
<td><b>Writing</b> — quick messages and the diacritics switch on the left, emoji and bytes left on the right.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-image-upload.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-image-upload.png" alt="Dialog for sending an image"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-image-viewer.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-image-viewer.png" alt="An image shown large over the conversation"></a></td>
</tr>
<tr>
<td><b>Images</b> — paste an image or pick one with 📎; Home Assistant uploads it to catbox.moe, litterbox or tmpfiles.org and the link goes into the message.</td>
<td><b>Image viewer</b> — a tap on a preview shows the image large over the conversation; ✕, a tap beside it, Escape or the back gesture closes it.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-route-map-offline.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-route-map-offline.png" alt="Route on the offline map"></a></td>
<td align="center"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-route-map-offline.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-route-map-offline.png" alt="Route on the offline map on a phone" width="300"></a></td>
</tr>
<tr>
<td><b>Offline map</b> — without internet (or always, if chosen) the maps are drawn from data kept in Home Assistant: borders, regions, towns and peaks.</td>
<td align="center"><b>Phone</b> — the same on a phone; one finger moves the map, two zoom.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-nodes-map-offline.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-nodes-map-offline.png" alt="Nodes on the offline map"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-send-again.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-send-again.png" alt="Send again in the details of an own message"></a></td>
</tr>
<tr>
<td><b>Nodes on the offline map</b> — the Nodes tab map works offline too.</td>
<td><b>Send again</b> — the same text once more, for example when nobody heard it.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-settings-blocklist.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-settings-blocklist.png" alt="Blocked contacts in Settings"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-settings-map.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-settings-map.png" alt="Offline map download in Settings"></a></td>
</tr>
<tr>
<td><b>Blocked contacts</b> — chosen by public key; their messages are neither shown nor stored.</td>
<td><b>Map settings</b> — countries for the offline map (247, Home Assistant's country and its neighbours suggested), distance unit, and the switch for the offline map only.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-route-map.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-route-map.png" alt="Route of a message on a map"></a></td>
<td align="center"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-route-map.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-route-map.png" alt="Route map on a phone" width="300"></a></td>
</tr>
<tr>
<td><b>Route on a map</b> (experimental) — the repeaters a message went through, found among your contacts by their key prefix and drawn over OpenStreetMap (loaded through Home Assistant); the map can be dragged and zoomed, and the list below gives each leg and both distances.</td>
<td align="center"><b>Phone</b> — the same map; the dialog scrolls, and the back gesture hides the map, then closes the dialog.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-message-popup.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-message-popup.png" alt="Message dialog with distances and the sender's key"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-hide-ids.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-hide-ids.png" alt="Switch that hides contact IDs and channel numbers"></a></td>
</tr>
<tr>
<td><b>Message details</b> — the route with its distances, the sender's public key to copy, and a quick reply set in Settings with {hops}, {km} and {route}, here "Heard, 4 hops, 123 km (124 km)!".</td>
<td><b>Cleaner list</b> — the gear menu hides contact IDs and channel numbers.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-login-telemetry.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-login-telemetry.png" alt="Repeater login, telemetry and neighbours"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-settings.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-settings.png" alt="Repeater settings"></a></td>
</tr>
<tr>
<td><b>Repeater login, telemetry and neighbours</b> — the header stays in place while the content scrolls.</td>
<td><b>Repeater settings</b> — read group by group, with the age of each group.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-regions.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-regions.png" alt="Repeater regions"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-terminal.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-repeater-terminal.png" alt="Repeater terminal"></a></td>
</tr>
<tr>
<td><b>Regions</b> — edit the region tree and save it to the repeater.</td>
<td><b>Terminal</b> — send any command to the repeater.</td>
</tr>
</table>

<table>
<tr>
<td width="50%" align="center"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-list.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-list.png" alt="Conversation list on a phone" width="300"></a></td>
<td width="50%" align="center"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-chat.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-mobile-chat.png" alt="Chat on a phone" width="300"></a></td>
</tr>
<tr>
<td align="center"><b>Phone</b> — conversation list with the newest message of each conversation.</td>
<td align="center"><b>Phone</b> — chat with the compact message bar.</td>
</tr>
</table>

## Features from the original

- Sidebar chat panel with channels, DMs, and contact list
- Persistent message history (survives Home Assistant restarts)
- Trace / path-discovery dialog with route visualization
- Per-conversation search
- Unread counts, delivery status
- Live device telemetry, neighbor tables, and remote command issue from the same UI
- Network-wide node discovery view (typically hundreds of nodes)

## More screenshots

The Chat images use demo data. The others come from the original MeshCore Chat, so some details differ from the current version, such as the title.

### The four main tabs

<table>
<tr>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-chat.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-chat.png" alt="Chat tab"></a></td>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/devices-tab.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/devices-tab.jpg" alt="Devices tab"></a></td>
</tr>
<tr>
<td><b>Chat</b> — channels and DMs in the left rail with All / Unread / DMs / Channels filters; messages rendered with sender, age, hop count, path size and delivery status (Repeated / Sent / Waiting).</td>
<td><b>Devices</b> — per-device sensor tiles (SNR, RSSI, airtime, battery, message counts) with a neighbor table and quick-action buttons (Flood Advert, Sync Clock, Req Telemetry, Req Status).</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/nodes-tab.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/nodes-tab.jpg" alt="Nodes tab"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/settings-tab.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/settings-tab.jpg" alt="Settings tab"></a></td>
</tr>
<tr>
<td><b>Nodes</b> — full network discovery view (All / Added / Discovered, then Clients / Repeaters), with search, last-heard sort, and stale-record cleanup.</td>
<td><b>Settings</b> — companion device profile, radio configuration (TX power, frequency, bandwidth, spreading factor, coding rate, path hash mode), rename, and location. When <b>Self Diagnostics</b> is enabled in the upstream meshcore integration, the companion card also shows the same rich tiles managed devices have (battery, signal, radio activity, message counts) plus a diagnostics sensor table.</td>
</tr>
</table>

### Chat features

<table>
<tr>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-message-popup.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-message-popup.png" alt="Message popup with route metadata"></a></td>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-hide-ids.png"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/chattx-hide-ids.png" alt="Manage contacts and channels"></a></td>
</tr>
<tr>
<td><b>Message popup</b> — click or tap any message for Copy, Reply or the one-tap quick reply, plus the route metadata: hop sequence, SNR, RSSI, and exact receive timestamp.</td>
<td><b>Manage contacts &amp; channels</b> — promote any discovered node to an Added contact, or remove it; channel list lives on the second tab. The switch at the top hides contact IDs and channel numbers in the chat list.</td>
</tr>
</table>

### Nodes features

<table>
<tr>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/node-popup.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/node-popup.jpg" alt="Node detail popup"></a></td>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/trace-dialog.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/trace-dialog.jpg" alt="Path trace dialog"></a></td>
</tr>
<tr>
<td><b>Node details</b> — click any node tile in the Nodes tab to open quick actions (Trace, Remove Contact), public-key prefix, type, last advert, and location.</td>
<td><b>Path trace</b> — launched from the Trace quick action in the Node details dialog; pick repeaters in order to test a multi-hop path, or run a direct-neighbor probe; resolved path is shown alongside.</td>
</tr>
</table>

### Device management

<table>
<tr>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/device-settings.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/device-settings.jpg" alt="Device settings menu"></a></td>
<td width="50%"><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/device-command.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/device-command.jpg" alt="Issue command picker"></a></td>
</tr>
<tr>
<td><b>Device settings menu</b> — per-device gear menu: View Hidden Sensors, Issue Command, Reboot, Start OTA Update.</td>
<td><b>Issue Command</b> — full command catalog grouped by category (Device Management, Device Info, etc.) — drives the underlying meshcore service from the panel.</td>
</tr>
<tr>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/companion-settings.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/companion-settings.jpg" alt="Companion settings menu"></a></td>
<td><a href="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/tile-more-info.jpg"><img src="https://raw.githubusercontent.com/michalsiman/meshcore-ha-chattx/main/assets/screenshots/tile-more-info.jpg" alt="Sensor tile more-info"></a></td>
</tr>
<tr>
<td><b>Companion settings menu</b> — same gear menu pattern for the local companion device, with Key Management as an additional option.</td>
<td><b>Sensor history</b> — clicking any sensor tile opens Home Assistant's standard more-info dialog with full historical chart.</td>
</tr>
</table>

## Installation

### Marketplace or HACS (custom repository)

From Home Assistant 2026.11, HACS is built in as the Marketplace under Settings. Older versions use HACS.

[![Open meshcore-ha-chattx in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=michalsiman&repository=meshcore-ha-chattx&category=integration)

Click the badge above to open this repository, or follow the manual steps:

1. Open the Marketplace or HACS and go to its custom repositories
2. Add `https://github.com/michalsiman/meshcore-ha-chattx` as an "Integration"
3. Install **MeshCore Chattx**
4. Restart Home Assistant
5. Settings → Devices & Services → Add Integration → **MeshCore Chattx**

### Manual

Copy `custom_components/meshcore_chattx/` into your HA `config/custom_components/` directory. Restart HA. Add the integration from the UI.

## Usage

For a walkthrough of common tasks (adding contacts, managing channels, issuing commands, tracing paths, changing radio settings) plus operational warnings (radio-reboot requirements, the entity_id rename gotcha), see [INSTRUCTIONS.md](./INSTRUCTIONS.md).

> **Permissions.** Reading messages and browsing the panel works for any authenticated HA user. **Destructive actions** — radio reconfiguration, identity regeneration, channel-key changes, issuing commands, adding / removing / blocking contacts, and running path traces — require **administrator** rights on your HA instance. See [INSTRUCTIONS.md → Permissions](./INSTRUCTIONS.md#permissions) for the full list.

## Requirements

- Home Assistant 2024.12 or newer
- The core [meshcore integration](https://github.com/meshcore-dev/meshcore-ha) **v2.7.0 or newer** installed and configured. The per-channel region scope selector and the "All regions" option rely on the message `scope` argument and the inbound `region_scope` / `flood_scope` fields that landed in the core integration's v2.7.0 (released 2026-05-31). The chat companion also calls the structured query services (`meshcore.get_contacts`, `meshcore.trace`) introduced in 2.6.0; on a core older than the floor the trace dialog returns a *"service not registered"* error and the contact list falls back to a legacy code path with a one-time warning in the logs.

## Security

Security issues can be reported privately — see [SECURITY.md](SECURITY.md). For how the integration handles untrusted, mesh-sourced data and where its trust boundaries are, see [docs/security-posture.md](docs/security-posture.md).

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/michalsiman/meshcore-ha-chattx/badge)](https://scorecard.dev/viewer/?uri=github.com/michalsiman/meshcore-ha-chattx)
[![CodeQL](https://github.com/michalsiman/meshcore-ha-chattx/actions/workflows/codeql.yml/badge.svg)](https://github.com/michalsiman/meshcore-ha-chattx/actions/workflows/codeql.yml)

## Relationship to other projects

- [meshcore-dev/meshcore-ha](https://github.com/meshcore-dev/meshcore-ha) — the core integration that drives the MeshCore radio. **Required.**  
  [![Open meshcore-ha in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=meshcore-dev&repository=meshcore-ha&category=integration)

## Use cases

- **Off-grid mesh chat panel.** Run a tablet in your kitchen showing the MeshCore Chattx sidebar; talk to local mesh peers without leaving Home Assistant.
- **Search recent traffic.** "Who pinged the @[Repeater Cliff] node yesterday?" — date-range message search across all conversations.
- **Path diagnostics.** Trace the route a message took (hops, SNR, RSSI per repeater) right from the message bubble.
- **Managed-device dashboard.** Monitor battery, last-heard, neighbour SNR, and uptime on every repeater you've added — one card per device.

## Known limitations

- **Requires meshcore ≥ 2.7.0.** The per-channel region scope selector and "All regions" option need core-integration support that landed in v2.7.0; Trace and Get Contacts use upstream services from 2.6.0, and older cores fall back to direct coordinator reads where supported.
- **Message archive is not a long-term log.** Default retention is 90 days, capped at 500 messages per conversation. Configurable via Settings → MeshCore Chattx → Configure (range 1–365 days, 50–5000 messages).
- **Discover-mode traces don't always return.** Flood path discovery on multi-hop routes sometimes silently drops. If a **Discover** trace fails, switch to **Select repeaters** or **Enter path** in the trace dialog to specify the route explicitly.

## Removal

To uninstall:

1. Settings → Devices & Services → MeshCore Chattx → ⋮ → Delete.
2. Optional: remove the message archive from disk:
   ```bash
   rm /config/.storage/meshcore_chattx.*
   ```
   The archive is per-entry; deleting the config entry does not remove these files automatically (HA's standard behaviour). Skip this step if you intend to re-add the integration later — the archive will be re-attached.
3. If you also want to uninstall the underlying meshcore integration: Settings → Devices & Services → MeshCore → Delete, then remove `custom_components/meshcore` (HACS or manual).

## Development

Contributions and bug reports welcome — file issues at [github.com/michalsiman/meshcore-ha-chattx/issues](https://github.com/michalsiman/meshcore-ha-chattx/issues).

### Repo layout

- `custom_components/meshcore_chattx/` — the Home Assistant integration (Python).
- `frontend/` — the Lit-based sidebar panel (TypeScript). Rolled up into a single bundle that lands at `custom_components/meshcore_chattx/meshcore-chattx-panel.js`.
- `tests/` — Python test suite (pytest + `pytest-homeassistant-custom-component`).
- `frontend/tests/` — frontend unit tests (vitest).

### Python tests

The integration targets the Python version shipped in the current HA OS / Docker image (3.14 as of HA 2025.x). Set up a local venv:

```bash
cd meshcore-ha-chattx
uv venv --python 3.14 .venv
.venv/bin/pip install pytest-homeassistant-custom-component
```

`pytest-homeassistant-custom-component` (PHACC) transitively pulls in Home Assistant core, pytest, pytest-asyncio, and the full HA test fixture surface — no other install steps are needed. The integration is **not** installed as a package; `tests/conftest.py` puts the repo root on `sys.path` so `custom_components.meshcore_chattx.*` is importable directly.

Run the suite:

```bash
.venv/bin/pytest tests/                    # full suite (~1s)
.venv/bin/pytest tests/components/meshcore_chattx/test_ws_api.py -k identity
```

> **Do not** `pip install -e .[test]` (or any pip install) inside a running Home Assistant Docker container. The editable-install metadata persists across `pip uninstall` and crashes HA on the next restart with `FileNotFoundError` from `async_get_custom_components`. Always use a separate venv.

### Frontend

```bash
cd frontend
npm install
npm run build       # production bundle (minified)
npm run dev         # rollup watch mode
npm test            # vitest, run once
npm run test:watch  # vitest in watch mode
npm run lint        # eslint
```

The build writes straight to `../custom_components/meshcore_chattx/meshcore-chattx-panel.js`. Committing the rebuilt bundle does not deploy it — for that, see below.

### Deploying a dev build to a live HA host

After `npm run build`, copy the rebuilt panel bundle to your HA host:

```bash
scp custom_components/meshcore_chattx/meshcore-chattx-panel.js \
    root@<ha-host>:/config/custom_components/meshcore_chattx/
```

Then **hard-refresh** the panel in the browser (Cmd/Ctrl-Shift-R). No Home Assistant restart is needed for frontend-only changes — the panel is reloaded from disk on browser refresh.

For Python-side changes (anything under `custom_components/meshcore_chattx/*.py`), SCP the changed files and reload the integration: **Settings → Devices & Services → MeshCore Chattx → ⋮ → Reload**, or restart HA if the change touches `__init__.py`, the config-flow, or anything wired at setup time.

## Tips & Troubleshooting

The integration should be fairly easy to understand and navigate, for instructions on dialog pop-ups and operational gotchas worth knowing, see [INSTRUCTIONS.md](./INSTRUCTIONS.md).

## License

MIT — see [LICENSE](LICENSE).
