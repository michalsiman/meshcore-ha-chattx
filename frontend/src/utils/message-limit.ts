/** Firmware MAX_TEXT_LEN: the limit is in UTF-8 bytes, not characters. */
const MAX_MESSAGE_BYTES = 160;

const encoder = new TextEncoder();

/**
 * Bytes left in a message. Firmware sends channel messages as
 * "<sender>: <text>", so the sender's name and ": " use up the limit there;
 * direct messages carry only the text. Negative when the text is too long.
 */
export function remainingMessageBytes(text: string, channelSender: string | null): number {
  const prefix = channelSender === null ? 0 : encoder.encode(`${channelSender}: `).length;
  return MAX_MESSAGE_BYTES - prefix - encoder.encode(text.trim()).length;
}
