// Unread Chattx messages in the browser tab title, e.g. "(3) Home Assistant",
// on every Home Assistant page. The number is the state of the Chattx unread
// sensor, the same total as on the panel's Chat tab. Switched off in Chattx
// Settings ("chattx-tab-badge" = "false" in the panel's shared settings, the
// same for everyone on every device).
(() => {
  const STORAGE_KEY = "chattx-tab-badge";
  const DEFAULT_ENTITY = "sensor.meshcore_chattx_unread";
  const PREFIX = /^\(\d+\+?\) /;
  let count = 0;

  let setting = null;
  const enabled = () => setting !== "false";

  const apply = () => {
    const base = document.title.replace(PREFIX, "");
    const shown = enabled() && count > 0 ? `(${count > 99 ? "99+" : count}) ${base}` : base;
    if (document.title !== shown) document.title = shown;
  };

  // Home Assistant sets the title on every page change; put the number back.
  new MutationObserver(apply).observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  window.addEventListener("chattx-tab-badge-changed", apply);

  const entityId = (hass) => {
    const entry = Object.values(hass.entities ?? {}).find(
      (e) => e.platform === "meshcore_chattx" && e.entity_id.startsWith("sensor.")
    );
    return entry?.entity_id ?? DEFAULT_ENTITY;
  };

  const read = (state) => {
    const n = parseInt(state, 10);
    count = Number.isFinite(n) && n > 0 ? n : 0;
    apply();
  };

  const subscribe = (hass) => {
    // The setting, from the panel's shared settings, kept up to date.
    hass.connection.subscribeMessage(
      (msg) => {
        setting = msg?.values?.[STORAGE_KEY] ?? null;
        apply();
      },
      { type: "meshcore_chattx/subscribe_settings" }
    ).catch(() => {});
    const id = entityId(hass);
    hass.connection.subscribeMessage(
      (msg) => {
        if (msg.a?.[id]) read(msg.a[id].s);
        const changed = msg.c?.[id]?.["+"];
        if (changed && "s" in changed) read(changed.s);
        if (msg.r?.includes(id)) read(0);
      },
      { type: "subscribe_entities", entity_ids: [id] }
    );
  };

  const start = () => {
    const hass = document.querySelector("home-assistant")?.hass;
    if (hass?.connection && hass.entities) subscribe(hass);
    else setTimeout(start, 1000);
  };
  start();
})();
