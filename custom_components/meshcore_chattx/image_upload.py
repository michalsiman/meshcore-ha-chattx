"""Upload an image for a message and return its web address.

The panel shrinks the image in the browser and sends it here; Home
Assistant uploads it to the chosen service and the panel puts the returned
address into the message. Done here rather than in the browser, which may
not reach another site. All services take anonymous uploads:

- catbox.moe: kept permanently
- litterbox.catbox.moe: deleted after 1, 12, 24 or 72 hours
- tmpfiles.org: deleted after 60 minutes; the address is the file's page
  (the image itself is served only under a short-lived signed address on
  that page, which the image proxy follows for previews)

(0x0.st was tried too: its uploads are switched off because of spam.)

When a service is down (server error or no connection, also after two
retries) the error code is ``service_down`` with the service's host, so
the panel can say so and suggest another service.
"""
from __future__ import annotations

import asyncio
import base64
import binascii
import json
import re

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

# The panel sends a shrunk JPEG or PNG; this is far above that.
MAX_BYTES = 3 * 1024 * 1024
_TYPES = {"image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif"}
USER_AGENT = "MeshCore-Chattx (Home Assistant integration)"

# expiry value → (upload address, form field of the file, other form fields)
_SERVICES: dict[str, tuple[str, str, dict[str, str]]] = {
    "permanent": ("https://catbox.moe/user/api.php", "fileToUpload", {"reqtype": "fileupload", "userhash": ""}),
    **{
        h: ("https://litterbox.catbox.moe/resources/internals/api.php", "fileToUpload", {"reqtype": "fileupload", "time": h})
        for h in ("1h", "12h", "24h", "72h")
    },
    "tmpfiles": ("https://tmpfiles.org/api/v1/upload", "file", {}),
}
_ADDRESS = re.compile(
    r"^https://(files\.catbox\.moe|litter\.catbox\.moe|tmpfiles\.org)/\S+$"
)


def image_address(expiry: str, body: str) -> str | None:
    """The image's address from a service's answer, or None."""
    text = body.strip()
    if expiry == "tmpfiles":
        # {"status": "success", "data": {"url": "http://tmpfiles.org/123/x.jpg"}}
        try:
            text = str(json.loads(text)["data"]["url"])
        except (ValueError, KeyError, TypeError):
            return None
        text = re.sub(r"^http://", "https://", text)
    return text if _ADDRESS.match(text) else None


@websocket_api.websocket_command(
    {
        vol.Required("type"): "meshcore_chattx/upload_image",
        vol.Required("data"): vol.All(str, vol.Length(max=MAX_BYTES * 4 // 3 + 16)),
        vol.Required("mime"): vol.In(list(_TYPES)),
        vol.Optional("expiry", default="permanent"): vol.In(list(_SERVICES)),
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

    url, file_field, extra = _SERVICES[msg["expiry"]]
    host = url.split("/")[2]
    session = async_get_clientsession(hass)
    problem = ""
    down = True
    # The services fail now and then for a moment (HTTP 5xx): try again.
    for attempt in range(3):
        if attempt:
            await asyncio.sleep(1.5 * attempt)
        form = aiohttp.FormData()
        for key, value in extra.items():
            form.add_field(key, value)
        form.add_field(
            file_field, content,
            filename=f"chattx.{_TYPES[msg['mime']]}", content_type=msg["mime"],
        )
        try:
            async with session.post(
                url, data=form, headers={"User-Agent": USER_AGENT},
                timeout=aiohttp.ClientTimeout(total=60),
            ) as resp:
                status = resp.status
                body = (await resp.text()).strip()
        except Exception as ex:  # network down, timeout, DNS
            problem = str(ex) or type(ex).__name__
            continue
        address = image_address(msg["expiry"], body) if status == 200 else None
        if address:
            connection.send_result(msg["id"], {"url": address})
            return
        # An error page is HTML: report the status, not the page.
        problem = f"the server answered {status}" if body.lstrip().startswith("<") or not body else body[:200]
        if status < 500:
            down = status in (403, 429)  # refused or too many uploads: also unusable now
            break
    connection.send_error(
        msg["id"], "service_down" if down else "unavailable", f"{host}: {problem}"
    )


def async_register_image_upload_commands(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_upload_image)
