import type * as CustomElementSchema from 'custom-elements-manifest';
import { CustomElementDeclaration } from 'custom-elements-manifest';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

export default async function createWrappers(packageName: string, outDir: string) {
  const require = createRequire(import.meta.url);
  const customElementManifestPath = require.resolve(`${packageName}/dist/custom-elements.json`);

  const customElementManifest = JSON.parse(
    await readFile(customElementManifestPath, { encoding: 'utf-8' })
  ) as CustomElementSchema.Package;
  console.log('-> customElementManifest', customElementManifest);

  for (const module of customElementManifest.modules) {
    const declaration = module.declarations?.at(0) as CustomElementDeclaration;

    const componentTargetFolder = resolve(outDir, declaration.name);

    await mkdir(componentTargetFolder, { recursive: true });

    const booleanAttributes = declaration.attributes?.filter((attr) => attr.type?.text === 'boolean') ?? [];
    const regularAttributes = declaration.attributes?.filter((attr) => attr.type?.text !== 'boolean') ?? [];

    const componentTemplate = `
    withWebComponent('${declaration.tagName}', 
      [${regularAttributes.map((attr) => `'${attr.name}'`).join(', ')}], 
      [${booleanAttributes.map((attr) => `'${attr.name}'`).join(', ')}],
      [${declaration.slots
        ?.filter((slot) => slot.name !== 'default')
        .map((slot) => `'${slot.name}'`)
        .join(', ')}],
      [${declaration.events?.map((event) => `'${event.name}'`).join(', ')}],
      () => import('${packageName}/dist/${module.path}') 
      );
    `;

    await writeFile(resolve(componentTargetFolder, 'index.tsx'), componentTemplate);
  }
}
