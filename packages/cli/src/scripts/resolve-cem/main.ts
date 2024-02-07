import { writeFile } from 'node:fs/promises';
import { recursiveManifestResolver } from '../../util/recursiveManifestResolver.js';

export default async function resolveCustomElementManifest(packageName: string, outPath: string) {
  const customElementManifest = recursiveManifestResolver(packageName);
  await writeFile(outPath, JSON.stringify(customElementManifest, null, 2));
}
