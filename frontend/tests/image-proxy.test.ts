// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { imageFailed, markImageFailed, proxiedImage } from '../src/utils/image-proxy';

describe('image previews through Home Assistant', () => {
  afterEach(() => localStorage.clear());

  it('asks for the signed address once and answers from memory afterwards', async () => {
    const hass = { callWS: vi.fn(async () => ({ path: '/api/meshcore_chattx/image_proxy?url=x&authSig=s' })) };
    const ready = vi.fn();
    expect(proxiedImage(hass as never, 'https://a.cz/1.jpg', ready)).toBeUndefined();
    expect(proxiedImage(hass as never, 'https://a.cz/1.jpg', ready)).toBeUndefined();
    await vi.waitFor(() => expect(ready).toHaveBeenCalled());
    expect(proxiedImage(hass as never, 'https://a.cz/1.jpg', ready)).toContain('authSig');
    expect(hass.callWS).toHaveBeenCalledTimes(1);
  });

  it('remembers an image that failed', () => {
    expect(imageFailed('https://a.cz/2.jpg')).toBe(false);
    markImageFailed('https://a.cz/2.jpg');
    markImageFailed('https://a.cz/2.jpg');
    expect(imageFailed('https://a.cz/2.jpg')).toBe(true);
  });
});
