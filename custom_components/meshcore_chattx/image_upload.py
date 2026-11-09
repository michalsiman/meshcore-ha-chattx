"""Upload an image for a message and return its web address.

The panel shrinks the image in the browser and sends it here; Home
Assistant uploads it to catbox.moe (kept) or litterbox.catbox.moe (deleted
after 1 to 72 hours). Both take anonymous uploads through a documented API
and answer with the file's address, which the panel puts into the message.
Done here rather than in the browser, which may not call another site.
"""
from __future__ import annotations

import base64
import binascii
import re

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

CATBOX = "https://catbox.moe/user/api.php"
LITTERBOX = "https://litterbox.catbox.moe/resources/internals/api.php"
# The panel sends a shrunk JPEG or PNG; this is far above that.
MAX_BYTES = 3 * 1024 * 1024
_TYPES = {"image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif"}
_EXPIRY = ("permanent", "1h", "12h", "24h", "72h")
_ADDRESS = re.compile(r"^https://(files\.catbox\.moe|litter\.catbox\.moe)/\S+$")


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/upload_image",
        vol.Required("data"): vol.All(str, vol.Length(max=MAX_BYTES * 4 // 3 + 16)),
        vol.Required("mime"): vol.In(list(_TYPES)),
        vol.Optional("expiry", default="permanent"): vol.In(_EXPIRY),
    }
)
@websocket_api.async_response
async def ws_upload_image(hass, connection, msg):
    """Upload a base64 image; return {"url": ...}."""
    from homeassistant.helpers.aiohttp_client import async_get_clientsession
    import aiohttp

    try:
        content = base64.b64decode(msg["data"], validate=True)
    except (binascii.Error, ValueError):
        connection.send_error(msg["id"], "invalid", "The image is not valid base64")
        return
    if not content or len(content) > MAX_BYTES:
        connection.send_error(msg["id"], "invalid", "The image is empty or too large")
        return

    form = aiohttp.FormData()
    form.add_field("reqtype", "fileupload")
    if msg["expiry"] == "permanent":
        url = CATBOX
        form.add_field("userhash", "")
    else:
        url = LITTERBOX
        form.add_field("time", msg["expiry"])
    form.add_field(
        "fileToUpload", content,
        filename=f"chattx.{_TYPES[msg['mime']]}", content_type=msg["mime"],
    )
    try:
        session = async_get_clientsession(hass)
        async with session.post(url, data=form, timeout=aiohttp.ClientTimeout(total=60)) as resp:
            body = (await resp.text()).strip()
    except Exception as ex:  # network down, timeout, DNS
        connection.send_error(msg["id"], "unavailable", f"Could not upload the image: {ex or type(ex).__name__}")
        return
    if resp.status != 200 or not _ADDRESS.match(body):
        connection.send_error(msg["id"], "unavailable", f"Could not upload the image: {body[:200] or resp.status}")
        return
    connection.send_result(msg["id"], {"url": body})


def async_register_image_upload_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_upload_image)
