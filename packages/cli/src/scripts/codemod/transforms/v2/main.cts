import type { API, ASTPath, Collection, FileInfo, JSCodeshift, JSXElement, Options } from 'jscodeshift';

const config = require('./codemodConfig.json');

interface ComponentTransformConfig {
  newComponent?: string;
  changedProps?: Record<string, string>;
  removedProps?: string[];
  renamedEnums?: Record<string, string>;
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

function extractValueFromProp(
  j: JSCodeshift,
  el: ASTPath<JSXElement>,
  componentName: string,
  propName: string
): string | null {
  const prop = j(el).find(j.JSXAttribute, { name: { name: propName } });

  if (prop.size()) {
    const s = prop.get();
    const stringLiteral = prop.find(j.StringLiteral);
    const numericLiteral = prop.find(j.NumericLiteral);
    prop.remove();

    if (stringLiteral.size() > 0) {
      return stringLiteral.get().value.value;
    } else if (numericLiteral.size() > 0) {
      return numericLiteral.get().value.value;
    } else {
      console.warn(`Unable to read value for prop '${propName}' (${componentName}). Please check the code manually.`);
      return null;
    }
  }
  return null;
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
    if (componentName === 'Button') {
      jsxElements.forEach((el) => {
        const icon = j(el).find(j.JSXAttribute, { name: { name: 'icon' } });
        const iconEnd = j(el).find(j.JSXAttribute, { name: { name: 'iconEnd' } });
        if (icon.size() > 0 && iconEnd.size() > 0) {
          if (iconEnd.get().value.value === null || iconEnd.get().value.value.expression.value) {
            icon.find(j.JSXIdentifier, { name: 'icon' }).replaceWith(j.jsxIdentifier('endIcon'));
          }
          iconEnd.remove();
          isDirty = true;
        }
      });
    }

    if (componentName === 'Carousel') {
      jsxElements.forEach((el) => {
        const sizeValues: string[] = [
          ['S', 'itemsPerPageS'],
          ['M', 'itemsPerPageM'],
          ['L', 'itemsPerPageL']
        ]
          .map(([key, prop]) => {
            const val = extractValueFromProp(j, el, componentName, prop);
            if (val != null) {
              return `${key}${val}`;
            }
            return '';
          })
          .filter((val) => val.length > 0);

        if (sizeValues.length > 0) {
          j(el)
            .find(j.JSXOpeningElement)
            .get()
            .value.attributes.push(
              j.jsxAttribute(j.jsxIdentifier('itemsPerPage'), j.stringLiteral(sizeValues.join(' ')))
            );
          isDirty = true;
        }
      });
    }

    if (componentName === 'Form') {
      jsxElements.forEach((el) => {
        const labelSpan: string[] = [
          ['S', 'labelSpanS'],
          ['M', 'labelSpanM'],
          ['L', 'labelSpanL'],
          ['XL', 'labelSpanXL']
        ]
          .map(([key, prop]) => {
            const val = extractValueFromProp(j, el, componentName, prop);
            if (val != null) {
              return `${key}${val}`;
            }
            return '';
          })
          .filter((val) => val.length > 0);

        if (labelSpan.length > 0) {
          j(el)
            .find(j.JSXOpeningElement)
            .get()
            .value.attributes.push(j.jsxAttribute(j.jsxIdentifier('labelSpan'), j.stringLiteral(labelSpan.join(' '))));
          isDirty = true;
        }

        const layout: string[] = [
          ['S', 'columnsS'],
          ['M', 'columnsM'],
          ['L', 'columnsL'],
          ['XL', 'columnsXL']
        ]
          .map(([key, prop]) => {
            const val = extractValueFromProp(j, el, componentName, prop);
            if (val != null) {
              return `${key}${val}`;
            }
            return '';
          })
          .filter((val) => val.length > 0);

        if (layout.length > 0) {
          j(el)
            .find(j.JSXOpeningElement)
            .get()
            .value.attributes.push(j.jsxAttribute(j.jsxIdentifier('layout'), j.stringLiteral(layout.join(' '))));
          isDirty = true;
        }
      });
    }

    if (componentName === 'FormItem') {
      jsxElements.forEach((el) => {
        const label = j(el).find(j.JSXAttribute, { name: { name: 'label' } });
        if (label.size()) {
          const labelNode = label.get();
          let value: string | undefined;
          if (labelNode.value.value.type === 'StringLiteral') {
            value = labelNode.value.value.value;
          }
          if (
            labelNode.value.value.type === 'JSXExpressionContainer' &&
            labelNode.value.value.expression.type === 'StringLiteral'
          ) {
            value = labelNode.value.value.expression.value;
          }

          if (value) {
            addWebComponentsReactImport(j, root, 'Label');
            const labelComponent = j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Label'), [], false),
              j.jsxClosingElement(j.jsxIdentifier('Label')),
              [j.jsxText(value)]
            );
            label.replaceWith(
              j.jsxAttribute(j.jsxIdentifier('labelContent'), j.jsxExpressionContainer(labelComponent))
            );
            isDirty = true;
          }
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
          isDirty = true;
        }
      });
    }

    if (componentName === 'Page') {
      jsxElements.forEach((el) => {
        const floatingFooter = j(el).find(j.JSXAttribute, { name: { name: 'floatingFooter' } });
        if (
          floatingFooter.size() === 0 ||
          !(floatingFooter.get().value.value === null || floatingFooter.get().value.value.expression.value)
        ) {
          j(el)
            .find(j.JSXOpeningElement)
            .get()
            .value.attributes.push(j.jsxAttribute(j.jsxIdentifier('fixedFooter'), null));
        }
        floatingFooter.remove();
        isDirty = true;
      });
    }

    if (componentName === 'TableRow') {
      jsxElements.forEach((el) => {
        const type = j(el).find(j.JSXAttribute, { name: { name: 'type' } });

        if (type.size() > 0) {
          let isInteractive = false;
          const typeNode = type.get();
          if (typeNode.value.value.type === 'StringLiteral') {
            isInteractive = typeNode.value.value.value === 'Interactive';
          } else if (typeNode.value.value.type === 'JSXExpressionContainer') {
            const container = typeNode.value.value;
            if (container.expression.type === 'StringLiteral') {
              isInteractive = typeNode.value.value.expression.value === 'Interactive';
            } else if (container.expression.type === 'MemberExpression') {
              const expr = container.expression;
              if (expr.object.name === 'TableMode') {
                if (expr.property.type === 'Identifier' && expr.property.name === 'Interactive') {
                  isInteractive = true;
                }
                if (expr.property.type === 'StringLiteral' && expr.property.value === 'Interactive') {
                  isInteractive = true;
                }
              }
            }
          }

          if (isInteractive) {
            j(el)
              .find(j.JSXOpeningElement)
              .get()
              .value.attributes.push(j.jsxAttribute(j.jsxIdentifier('interactive'), null));
            type.remove();
            isDirty = true;
          }
        }
      });
    }

    // before renaming any values, replace hard coded enum values
    Object.entries(changes.renamedEnums ?? {}).forEach(([propName, enumRef]) => {
      jsxElements.forEach((el) => {
        const prop = j(el).find(j.JSXAttribute, { name: { name: propName } });
        if (prop.size() > 0) {
          const enumMapping = config.enumProperties[enumRef];
          Object.entries<string>(enumMapping).forEach(([oldEnumValue, newEnumValue]) => {
            const literalToReplace = prop.find(j.StringLiteral, { value: oldEnumValue });
            if (literalToReplace.size() > 0) {
              literalToReplace.replaceWith(j.stringLiteral(newEnumValue));
              isDirty = true;
            }
          });
        }
      });
    });

    // change wrapping type
    if (config.wrappingTypeComponents.includes(componentName)) {
      jsxElements.forEach((el) => {
        const wrappingType = j(el).find(j.JSXAttribute, { name: { name: 'wrappingType' } });
        if (wrappingType.size() === 0) {
          j(el)
            .find(j.JSXOpeningElement)
            .get()
            .value.attributes.push(j.jsxAttribute(j.jsxIdentifier('wrappingType'), j.stringLiteral('None')));
          isDirty = true;
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
