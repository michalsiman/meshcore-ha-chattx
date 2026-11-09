import { describe, expect, it } from 'vitest';
import { imageLinks } from '../src/utils/links';

describe('image links', () => {
  it('finds https addresses of images', () => {
    expect(imageLinks('look https://files.catbox.moe/a1b2c3.jpg and https://x.cz/p.PNG?w=2 too'))
      .toEqual(['https://files.catbox.moe/a1b2c3.jpg', 'https://x.cz/p.PNG?w=2']);
  });
  it('ignores pages, http and duplicates, and stops at the limit', () => {
    expect(imageLinks('https://is.gd/abc http://x.cz/a.jpg')).toEqual([]);
    expect(imageLinks('https://a.cz/1.jpg https://a.cz/1.jpg')).toEqual(['https://a.cz/1.jpg']);
    expect(imageLinks('https://a.cz/1.jpg https://a.cz/2.jpg https://a.cz/3.jpg https://a.cz/4.jpg')).toHaveLength(3);
  });
});
