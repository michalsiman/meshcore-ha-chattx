const EMOJI = /\p{RI}\p{RI}|[0-9#*]️?⃣|\p{Extended_Pictographic}(?:️|\p{EMod})?(?:‍\p{Extended_Pictographic}(?:️|\p{EMod})?)*/gu;
const WORD_SEPARATOR = /[^\p{L}\p{M}\p{N}]+/u;

const firstLetter = (word: string) => Array.from(word)[0].toUpperCase();

/**
 * Short readable label for a conversation's circle. Two or more words give
 * the first letters of the first two ("Kamenny vrch" KV, "oak1.mesh.example"
 * OM), one word gives its first two letters, and an emoji in the name gives
 * the first letter plus the last emoji. A leading # on a channel counts as a
 * separator. Returns the fallback when the name has nothing to show.
 */
export function avatarLabel(name: string | undefined, fallback: string): string {
  const text = (name ?? '').normalize('NFC');
  const emoji = text.match(EMOJI) ?? [];
  const words = text.replace(EMOJI, ' ').split(WORD_SEPARATOR).filter(Boolean);
  const lastEmoji = emoji[emoji.length - 1];
  if (lastEmoji) return `${words.length > 0 ? firstLetter(words[0]) : ''}${lastEmoji}`;
  if (words.length === 0) return fallback;
  if (words.length > 1) return firstLetter(words[0]) + firstLetter(words[1]);
  return Array.from(words[0]).slice(0, 2).join('').toUpperCase();
}
