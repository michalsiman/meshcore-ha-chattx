// Icon for the sidebar. It has to load with the frontend, before the panel itself.
const ICONS = {
  "radio-handheld-x": "M9,2A1,1 0 0,0 8,3C8,8.67 8,14.33 8,20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V9C17,7.89 16.11,7 15,7H10V3A1,1 0 0,0 9,2M10,9H15V13H10V9ZM16.3,1.95L17.55,0.7L19.5,2.65L21.45,0.7L22.7,1.95L20.75,3.9L22.7,5.85L21.45,7.1L19.5,5.15L17.55,7.1L16.3,5.85L18.25,3.9Z",
};

window.customIcons = window.customIcons || {};
window.customIcons["chattx"] = {
  getIcon: async (name) => ({ path: ICONS[name] ?? "" }),
  getIconList: async () => Object.keys(ICONS).map((name) => ({ name })),
};

// Home Assistant loads extra modules after the app has started, so the sidebar
// may have asked for "chattx:…" before this file ran. ha-icon then gives up on
// the icon (an empty legacy icon) and never asks again: ask it once more.
const PREFIX = "chattx:";

function* iconsIn(root) {
  for (const el of root.querySelectorAll("*")) {
    if (el.localName === "ha-icon" && typeof el.icon === "string" && el.icon.startsWith(PREFIX)) yield el;
    if (el.shadowRoot) yield* iconsIn(el.shadowRoot);
  }
}

function refreshIcons() {
  for (const el of iconsIn(document)) {
    const icon = el.icon;
    el._legacy = false;  // set when the icon set was missing; the reload below doesn't clear it
    el.icon = "";
    requestAnimationFrame(() => { el.icon = icon; });
  }
}

for (const ms of [0, 1000, 3000, 10000]) setTimeout(refreshIcons, ms);
