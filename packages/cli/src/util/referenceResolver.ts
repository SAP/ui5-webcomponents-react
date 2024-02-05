import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types.js';
import type { WebComponentWrapper } from '../scripts/create-wrappers/WebComponentWrapper.js';
import { getCEM } from './cem-reader.js';

interface ReferenceResolution {
  isDefault: boolean;
  isType: boolean;
  named: string | false;
  importSpecifier: string;
}

function resolveReferenceImport(reference: CEM.Reference | undefined): ReferenceResolution | null {
  if (!reference) {
    return null;
  }
  const { name, package: pkgName, module: modulePath } = reference;
  const customElementManifest = getCEM(pkgName!);

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

export function resolveReferenceImports(references: CEM.Reference[], context: WebComponentWrapper): void {
  for (const ref of references) {
    const reference = resolveReferenceImport(ref);
    if (!reference) {
      continue;
    }
    if (reference.isDefault) {
      context.addDefaultImport(reference.importSpecifier, ref.name);
    } else if (reference.named) {
      context.addNamedImport(reference.importSpecifier, reference.named);
    } else if (reference.isType) {
      context.addTypeImport(reference.importSpecifier, ref.name);
    }
  }
}
