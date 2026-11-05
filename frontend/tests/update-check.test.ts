// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest';
import '../src/define-guard';
import { isOutdated, panelModuleUrl, versionOf } from '../src/utils/update-check';

const url = (version: string) => `/meshcore_chattx_panel/meshcore-chattx-panel.js?v=${version}`;

describe('update check', () => {
  it('reads the version from a bundle URL', () => {
    expect(versionOf(url('0.3.1'))).toBe('0.3.1');
    expect(versionOf('http://ha.local' + url('0.3.1'))).toBe('0.3.1');
    expect(versionOf('/meshcore_chattx_panel/meshcore-chattx-panel.js')).toBeNull();
    expect(versionOf(undefined)).toBeNull();
  });

  it('reports an update only when both versions are known and differ', () => {
    expect(isOutdated('http://ha.local' + url('0.3.0'), url('0.3.1'))).toBe(true);
    expect(isOutdated('http://ha.local' + url('0.3.1'), url('0.3.1'))).toBe(false);
    expect(isOutdated('blob:abc', url('0.3.1'))).toBe(false);
    expect(isOutdated(url('0.3.1'), undefined)).toBe(false);
  });

  it('finds the bundle URL in a panel entry', () => {
    expect(panelModuleUrl({ config: { _panel_custom: { module_url: url('1') } } })).toBe(url('1'));
    expect(panelModuleUrl({})).toBeUndefined();
  });
});

describe('define guard', () => {
  it('keeps the first definition of the panel elements', () => {
    class First extends HTMLElement {}
    class Second extends HTMLElement {}
    customElements.define('chattx-guard-test', First);
    expect(() => customElements.define('chattx-guard-test', Second)).not.toThrow();
    expect(customElements.get('chattx-guard-test')).toBe(First);
  });

  it('leaves other elements alone', () => {
    class Other extends HTMLElement {}
    customElements.define('other-guard-test', Other);
    expect(() => customElements.define('other-guard-test', class extends HTMLElement {})).toThrow();
  });
});
