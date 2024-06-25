import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { setGlobalTagNameMap } from '../../util/formatters.js';
import { recursiveManifestResolver } from '../../util/recursiveManifestResolver.js';
import { AttributesRenderer } from './AttributesRenderer.js';
import { ComponentRenderer } from './ComponentRenderer.js';
import { DomRefRenderer } from './DomRefRenderer.js';
import { ExportsRenderer } from './ExportsRenderer.js';
import { ImportsRenderer } from './ImportsRenderer.js';
import { PropTypesRenderer } from './PropTypesRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

const WITH_WEB_COMPONENT_IMPORT_PATH = process.env.WITH_WEB_COMPONENT_IMPORT_PATH ?? '@ui5/webcomponents-react';

function filterAttributes(member: CEM.ClassField | CEM.ClassMethod): member is CEM.ClassField {
  return member.kind === 'field' && member.privacy === 'public' && !member.readonly && !member.static;
}

interface Options {
  additionalComponentNote?: string;
}

export default async function createWrappers(packageName: string, outDir: string, options: Options) {
  const customElementManifest = recursiveManifestResolver(packageName);

  const tagNameToComponentName = customElementManifest.modules.reduce(
    (map, mod) => {
      for (const declaration of mod.declarations ?? []) {
        if ('tagName' in declaration && declaration.tagName) {
          map[declaration.tagName] = declaration.name;
        }
      }
      return map;
    },
    {} as Record<string, string>
  );
  setGlobalTagNameMap(tagNameToComponentName);

  for (const module of customElementManifest.modules) {
    const declaration = module.declarations?.find(
      (decl) => 'customElement' in decl && decl.customElement
    ) as CEM.CustomElementDeclaration;
    const webComponentImport = `${packageName}/${module.path}`;

    if (!declaration?.tagName) {
      continue;
    }

    const wrapper = new WebComponentWrapper(declaration.tagName, declaration.name, webComponentImport, packageName);
    const attributes = declaration.members?.filter(filterAttributes) ?? [];

    wrapper.addNamedImport(WITH_WEB_COMPONENT_IMPORT_PATH, 'withWebComponent');
    wrapper.addUnassignedImport(webComponentImport);

    wrapper.addRenderer(new ImportsRenderer());
    wrapper.addRenderer(new AttributesRenderer().setAttributes(attributes));
    wrapper.addRenderer(new DomRefRenderer().setMembers(declaration.members ?? []));
    wrapper.addRenderer(new PropTypesRenderer().setSlots(declaration.slots ?? []).setEvents(declaration.events ?? []));
    wrapper.addRenderer(
      new ComponentRenderer()
        .setDescription(declaration.description ?? '')
        .setAttributes(attributes)
        .setSlots(declaration.slots ?? [])
        .setEvents(declaration.events ?? [])
        .setDynamicImportPath(webComponentImport)
        .setNote(options.additionalComponentNote ?? '')
        .setIsAbstract(declaration._ui5abstract ?? false)
        .setSince(declaration._ui5since)
    );
    wrapper.addRenderer(new ExportsRenderer());

    const componentTargetFolder = resolve(outDir, declaration.name);
    await mkdir(componentTargetFolder, { recursive: true });

    await writeFile(resolve(componentTargetFolder, 'index.tsx'), wrapper.render());
  }
}
