import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types.js';

const cache = new Map<string, CEM.Package>();

export function getCEM(packageName: string) {
  if (!cache.has(packageName)) {
    const require = createRequire(import.meta.url);
    const customElementManifestPath = require.resolve(`${packageName}/dist/custom-elements-internal.json`);

    const customElementManifest: CEM.Package = JSON.parse(
      readFileSync(customElementManifestPath, { encoding: 'utf-8' })
    );
    cache.set(packageName, customElementManifest);
  }

  const cem = cache.get(packageName);
  if (!cem) {
    throw new Error(`Could not load CEM for ${packageName}`);
  }
  return cem;
}
