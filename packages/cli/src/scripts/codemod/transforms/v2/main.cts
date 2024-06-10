import type { API, Collection, FileInfo, JSCodeshift, Options } from 'jscodeshift';

const config = require('./codemodConfig.json');

interface ComponentTransformConfig {
  newComponent?: string;
  changedProps?: {
    [key: string]: string;
  };
  removedProps?: string[];
}

function componentIsImportedFromWebComponentsReact(j: JSCodeshift, root: Collection, componentName: string): boolean {
  const imports = root.find(j.ImportDeclaration);
  const importStatement = imports.find(j.ImportSpecifier, { local: { name: componentName } });

  if (importStatement.length === 0) return false;

  const importedFrom = importStatement.get().parentPath.parentPath.value.source.value;

  return importedFrom.startsWith('@ui5/webcomponents-react');
}

function addWebComponentsReactImport(j: JSCodeshift, root: Collection, importName: string) {
  const imports = root.find(j.ImportDeclaration);
  const n = imports.length;

  const isAlreadyImported = componentIsImportedFromWebComponentsReact(j, root, importName);

  if (isAlreadyImported) {
    return;
  }

  const importStatement = j.importDeclaration(
    [j.importSpecifier(j.identifier(importName), j.identifier(importName))],
    j.literal('@ui5/webcomponents-react')
  );

  if (n) {
    imports.at(n - 1).get().insertAfter(importStatement);
  } else {
    root.get().node.program.body.unshift(importStatement);
  }
}

export default function transform(file: FileInfo, api: API, options?: Options): string | undefined {
  const j = api.jscodeshift;
  const root = j(file.source);

  let isDirty = false;

  // components
  Object.entries<ComponentTransformConfig>(config.components).forEach(([componentName, changes]) => {
    const jsxElements = root.findJSXElements(componentName);

    if (jsxElements.length === 0) {
      return;
    }

    const validMatch = componentIsImportedFromWebComponentsReact(j, root, componentName);

    if (!validMatch) {
      return;
    }

    if (typeof changes.newComponent === 'string') {
      jsxElements.find(j.Identifier, { name: componentName }).replaceWith(j.jsxIdentifier(changes.newComponent));
      const importSpecifier = root.find(j.ImportSpecifier, { local: { name: componentName } });
      const importedFrom = importSpecifier.get().parentPath.parentPath.value.source.value;
      if (importedFrom === '@ui5/webcomponents-react') {
        importSpecifier.replaceWith(
          j.importSpecifier(j.identifier(changes.newComponent), j.identifier(changes.newComponent))
        );
      }
      isDirty = true;
    }

    Object.entries(changes.changedProps ?? {}).forEach(([oldName, newName]) => {
      const jsxAttributes = jsxElements.find(j.JSXAttribute, { name: { name: oldName } });
      if (!jsxAttributes.length) {
        return;
      }
      jsxAttributes.find(j.JSXIdentifier, { name: oldName }).replaceWith(j.jsxIdentifier(newName));
      isDirty = true;
    });

    (changes.removedProps ?? []).forEach((propToRemove) => {
      const jsxAttributes = jsxElements.find(j.JSXAttribute, { name: { name: propToRemove } });
      if (!jsxAttributes.length) {
        return;
      }
      jsxAttributes.remove();
      isDirty = true;
    });
  });

  Object.entries<string>(config.enums).forEach(([enumName, newImport]) => {
    const currentImportSpecifier = root.find(j.ImportSpecifier, { local: { name: enumName } });
    if (currentImportSpecifier.paths().length) {
      console.log('-> currentImportSpecifier', currentImportSpecifier);
      const importedFrom = currentImportSpecifier.get().parentPath.parentPath.value.source.value;

      if (importedFrom === '@ui5/webcomponents-react') {
        currentImportSpecifier.remove();

        const imports = root.find(j.ImportDeclaration);
        const currentImportStatementsLength = imports.length;

        const newImportDeclaration = j.importDeclaration(
          [j.importSpecifier(j.identifier(enumName), j.identifier(enumName))],
          j.literal(newImport)
        );

        if (currentImportStatementsLength) {
          imports.at(-1).get().insertAfter(newImportDeclaration);
        } else {
          root.get().node.program.body.unshift(newImportDeclaration);
        }
        isDirty = true;
      }
    }
  });

  return isDirty ? root.toSource() : undefined;
}
