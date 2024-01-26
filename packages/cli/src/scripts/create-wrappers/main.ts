import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { setGlobalTagNameMap } from '../../util/formatters.js';
import { AttributesRenderer } from './AttributesRenderer.js';
import { ComponentRenderer } from './ComponentRenderer.js';
import { DomRefRenderer } from './DomRefRenderer.js';
import { ExportsRenderer } from './ExportsRenderer.js';
import { ImportsRenderer } from './ImportsRenderer.js';
import { PropTypesRenderer } from './PropTypesRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

const WITH_WEB_COMPONENT_IMPORT_PATH = process.env.WITH_WEB_COMPONENT_IMPORT_PATH ?? '@ui5/webcomponents-react';

function filterAttributes(member: CEM.ClassField | CEM.ClassMethod) {
  return member.kind === 'field' && !member.readonly;
}

export default async function createWrappers(packageName: string, outDir: string) {
  const require = createRequire(import.meta.url);
  const customElementManifestPath = require.resolve(`${packageName}/dist/custom-elements.json`);

  const customElementManifest: CEM.Package = JSON.parse(
    await readFile(customElementManifestPath, { encoding: 'utf-8' })
  );

  const tagNameToComponentName = customElementManifest.modules.reduce(
    (map, mod) => {
      const declaration = mod.declarations?.at(0) as CEM.CustomElementDeclaration;
      if (declaration) {
        map[declaration.tagName!] = declaration.name;
      }
      return map;
    },
    {} as Record<string, string>
  );
  setGlobalTagNameMap(tagNameToComponentName);

  for (const module of customElementManifest.modules) {
    const declaration = module.declarations?.at(0) as CEM.CustomElementDeclaration;
    const webComponentImport = `${packageName}/${module.path}`;

    if (!declaration?.tagName) {
      continue;
    }

    const wrapper = new WebComponentWrapper(declaration.tagName, declaration.name, webComponentImport);
    wrapper.addNamedImport(WITH_WEB_COMPONENT_IMPORT_PATH, 'withWebComponent');
    wrapper.addUnassignedImport(webComponentImport);

    wrapper.addRenderer(new ImportsRenderer());
    wrapper.addRenderer(
      new AttributesRenderer().setAttributes(declaration.members?.filter((member) => filterAttributes(member)) ?? [])
    );
    wrapper.addRenderer(new DomRefRenderer().setMembers(declaration.members ?? []));
    wrapper.addRenderer(new PropTypesRenderer().setSlots(declaration.slots ?? []).setEvents(declaration.events ?? []));
    wrapper.addRenderer(
      new ComponentRenderer()
        .setDescription(declaration.description ?? '')
        .setAttributes(declaration.members?.filter((member) => filterAttributes(member)) ?? [])
        .setSlots(declaration.slots ?? [])
        .setEvents(declaration.events ?? [])
        .setDynamicImportPath(webComponentImport)
    );
    wrapper.addRenderer(new ExportsRenderer());

    const componentTargetFolder = resolve(outDir, declaration.name);
    await mkdir(componentTargetFolder, { recursive: true });

    await writeFile(resolve(componentTargetFolder, 'index.tsx'), wrapper.render());
  }
}
