import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import { getCEM } from './cem-reader.js';

const fieldsToMerge = ['members', 'slots', 'events', 'cssParts'] as const;

const EXCLUDED_MEMBERS = new Set([
  'detachComponentStateFinalized',
  'attachComponentStateFinalized',
  'effectiveDir',
  'isUI5Element',
  'attachInvalidate',
  'define',
  'detachInvalidate',
  'fireEvent',
  'focus',
  'getDomRef',
  'getFocusDomRef',
  'getFocusDomRefAsync',
  'getMetadata',
  'getSlottedNodes',
  'getUniqueDependencies',
  'onAfterRendering',
  'onBeforeRendering',
  'onEnterDOM',
  'onExitDOM',
  'onInvalidation',
  'getStaticAreaItemDomRef'
]);

function mergeArraysWithoutDuplicates(currentValues: any[], newValue: any) {
  if (!currentValues.find((currentValue) => currentValue.name === newValue.name)) {
    if (!EXCLUDED_MEMBERS.has(newValue.name)) {
      currentValues.push(newValue);
    }
  }

  return currentValues;
}

function getSuperClassDeclaration(declaration: CEM.ClassDeclaration) {
  if (declaration.superclass) {
    const cem = getCEM(declaration.superclass.package!);
    const mod = cem.modules.find((mod) => mod.path === declaration.superclass!.module);
    if (mod) {
      return (
        (mod.declarations?.find(
          (decl) => decl.name === declaration.superclass!.name
        ) as CEM.CustomElementDeclaration) ?? null
      );
    }
  }
  return null;
}

function resolveTree(declaration: CEM.CustomElementDeclaration, acc: CEM.CustomElementDeclaration[] = []) {
  const superclass = getSuperClassDeclaration(declaration);
  if (superclass) {
    acc.push(superclass);
    resolveTree(superclass, acc);
  }
  return acc;
}

function resolveModule(mod: CEM.JavaScriptModule) {
  for (const declaration of mod.declarations ?? []) {
    const customElementDeclaration = declaration as CEM.CustomElementDeclaration;
    const superclasses = resolveTree(declaration as CEM.CustomElementDeclaration);
    for (const superClass of superclasses) {
      for (const field of fieldsToMerge) {
        const superClassFields = superClass[field];
        if (!superClassFields) {
          continue;
        }
        customElementDeclaration[field] = superClassFields.reduce(
          mergeArraysWithoutDuplicates,
          customElementDeclaration[field] ?? []
        );
      }
    }
  }
}

export function recursiveManifestResolver(pkgName: string) {
  const customElementManifest = getCEM(pkgName);
  for (const module of customElementManifest.modules) {
    resolveModule(module);
  }
  return customElementManifest;
}
