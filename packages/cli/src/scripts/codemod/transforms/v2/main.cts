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
    imports
      .at(n - 1)
      .get()
      .insertAfter(importStatement);
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

    // Special Handling for logic inversions, etc.
    if (componentName === 'Carousel') {
      jsxElements.forEach((el) => {
        const itemsPerPageS = j(el).find(j.JSXAttribute, { name: { name: 'itemsPerPageS' } });
        const itemsPerPageM = j(el).find(j.JSXAttribute, { name: { name: 'itemsPerPageM' } });
        const itemsPerPageL = j(el).find(j.JSXAttribute, { name: { name: 'itemsPerPageL' } });

        const sizeValues: string[] = [];

        if (itemsPerPageS.size()) {
          const s = itemsPerPageS.get();
          const stringLiteral = itemsPerPageS.find(j.StringLiteral);
          const numericLiteral = itemsPerPageS.find(j.NumericLiteral);

          if (stringLiteral.size() > 0) {
            sizeValues.push(`S${stringLiteral.get().value.value}`);
          } else if (numericLiteral.size() > 0) {
            sizeValues.push(`S${numericLiteral.get().value.value}`);
          } else {
            console.warn(`Unable to read value for prop 'itemsPerPageS' (Carousel). Please check the code manually.`);
          }
        }

        if (itemsPerPageM.size()) {
          const stringLiteral = itemsPerPageM.find(j.StringLiteral);
          const numericLiteral = itemsPerPageM.find(j.NumericLiteral);
          if (stringLiteral.size() > 0) {
            sizeValues.push(`M${stringLiteral.get().value.value}`);
          } else if (numericLiteral.size() > 0) {
            sizeValues.push(`M${numericLiteral.get().value.value}`);
          } else {
            console.warn(`Unable to read value for prop 'itemsPerPageM' (Carousel). Please check the code manually.`);
          }
        }

        if (itemsPerPageL.size()) {
          const stringLiteral = itemsPerPageL.find(j.StringLiteral);
          const numericLiteral = itemsPerPageL.find(j.NumericLiteral);
          if (stringLiteral.size() > 0) {
            sizeValues.push(`L${stringLiteral.get().value.value}`);
          } else if (numericLiteral.size() > 0) {
            sizeValues.push(`L${numericLiteral.get().value.value}`);
          } else {
            console.warn(`Unable to read value for prop 'itemsPerPageL' (Carousel). Please check the code manually.`);
          }
        }

        if (sizeValues.length > 0) {
          [itemsPerPageS, itemsPerPageM, itemsPerPageL].forEach((e) => e.remove());
          j(el)
            .find(j.JSXOpeningElement)
            .get()
            .value.attributes.push(
              j.jsxAttribute(j.jsxIdentifier('itemsPerPage'), j.stringLiteral(sizeValues.join(' ')))
            );
        }
      });
    }

    if (componentName === 'Icon') {
      jsxElements.forEach((el) => {
        const interactive = j(el).find(j.JSXAttribute, { name: { name: 'interactive' } });
        if (interactive.size() > 0) {
          if (interactive.get().value.value === null || interactive.get().value.value.expression.value) {
            j(el)
              .find(j.JSXOpeningElement)
              .get()
              .value.attributes.push(j.jsxAttribute(j.jsxIdentifier('mode'), j.stringLiteral('Interactive')));
          }
          interactive.remove();
        }
      });
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

  Object.entries<Record<string, string>>(config.enumProperties).forEach(([changedEnum, changedValues]) => {
    Object.entries(changedValues ?? {}).forEach(([oldValue, newValue]) => {
      const enumValueToReplace = root
        .find(j.MemberExpression, {
          object: { name: changedEnum },
          property: { name: oldValue }
        })
        .find(j.Identifier, { name: oldValue });

      if (enumValueToReplace.length) {
        enumValueToReplace.replaceWith(j.identifier(newValue));
        isDirty = true;
      }
    });
  });

  return isDirty ? root.toSource() : undefined;
}
