# Translating MeshCore Chattx

Translations are plain text files, one per language. You can fix a typo or improve a wording right on GitHub, with no programming and no tools to install.

## Fix a translation on GitHub

1. Open your language in [`custom_components/meshcore_chattx/panel_translations`](custom_components/meshcore_chattx/panel_translations).
2. Click the pencil icon, **Edit this file**. GitHub makes a copy for you if needed.
3. Press `Ctrl`+`F` and find the text. Each line looks like this:

   ```json
   "Search messages": "Hledat ve zprávách",
   ```

   Change only the part on the right. The English text on the left must stay as it is.
4. Click **Commit changes**, then **Propose changes** and **Create pull request**.

Automatic checks then test your file and tell you if something is wrong. The fix reaches users with the next release.

Not comfortable with this? [Open an issue](https://github.com/michalsiman/meshcore-ha-chattx/issues) with your language, the current text and the better one.

## Rules

- **Keep everything in curly brackets**, such as `{name}` or `{n}`, exactly as it is. You can move it within the sentence.
- **Keep the terms from the MeshCore documentation in English**: repeater, node, flood, direct, hop, path, advert, scope, companion, room server, trace, airtime, SNR, RSSI, duty cycle, bandwidth, spreading factor, coding rate, firmware, public key and private key.
- **Texts with a count** have their forms separated by `|`, in this order:

  | Language | Forms | Example meaning |
  |---|---|---|
  | Czech, Slovak, Croatian, Serbian | one\|few\|other | 1 / 2–4 / 5+ |
  | Polish, Ukrainian | one\|few\|many | 1 / 2–4 / 5+ |
  | Slovenian | one\|two\|few\|other | 1 / 2 / 3–4 / 5+ |
  | Other languages | one\|other | 1 / 2+ |

- **A text that is missing** from the file appears in English, so it is fine to translate only part of a file. The longest technical tooltips are still missing in most languages, and are a good place to help.

## Add a language

1. Copy [`cs.json`](custom_components/meshcore_chattx/panel_translations/cs.json), which contains every text, to a new file named with the language code, such as `it.json`, and translate the right side.
2. Add the language to `LANGUAGE_NAMES` in [`frontend/src/i18n/index.ts`](frontend/src/i18n/index.ts). If it has more than the forms one and other, add it to `PLURAL_ORDER` there too. The panel then needs rebuilding, so feel free to send only the JSON file and ask for this step in the pull request.

The window for adding the integration in Home Assistant uses separate files in [`translations`](custom_components/meshcore_chattx/translations), so far in English and Czech.
