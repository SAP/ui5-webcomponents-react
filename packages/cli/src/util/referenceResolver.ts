import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types.js';

interface ReferenceResolution {
  isDefault: boolean;
  isType: boolean;
  named: string | false;
  importSpecifier: string;
}

export function resolveReferenceImport(reference: CEM.Reference | undefined): ReferenceResolution | null {
  if (!reference) {
    return null;
  }
  const { name, package: pkgName, module: modulePath } = reference;

  // load custom element manifest
  const require = createRequire(import.meta.url);
  const customElementManifestPath = require.resolve(`${pkgName!}/dist/custom-elements-internal.json`);

  const customElementManifest: CEM.Package = JSON.parse(readFileSync(customElementManifestPath, { encoding: 'utf-8' }));

  // find module
  const resolvedModule = customElementManifest.modules.find((mod) => mod.path === modulePath);

  if (resolvedModule) {
    const exportDeclaration = resolvedModule.exports?.find((exp) => exp.declaration.name === name);

    const exportedName = exportDeclaration?.name;
    const isDefaultExport = exportedName === 'default';
    return {
      isDefault: isDefaultExport,
      isType: exportedName === undefined,
      named: !isDefaultExport && exportedName !== undefined ? exportedName : false,
      importSpecifier: `${reference.package}/${reference.module}`
    };
  }
  return null;
}
