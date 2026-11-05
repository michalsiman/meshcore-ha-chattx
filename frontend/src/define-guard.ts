/**
 * After an update, Home Assistant can load the new panel bundle into a page
 * that still runs the old one. Defining the same custom elements twice then
 * throws, so this keeps the first definition of the panel's own elements and
 * skips the repeats. The page keeps the old code until it is reloaded, and the
 * panel offers that reload. Imported first by the panel entry.
 */
const OWN = /^(meshcore-chattx-panel|chattx-)/;

const registry = typeof customElements !== 'undefined' ? customElements : undefined;
if (registry && !(registry as unknown as { __chattxGuard?: boolean }).__chattxGuard) {
  const define = registry.define.bind(registry);
  registry.define = (name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions) => {
    if (OWN.test(name) && registry.get(name)) return;
    define(name, constructor, options);
  };
  (registry as unknown as { __chattxGuard?: boolean }).__chattxGuard = true;
}

export {};
