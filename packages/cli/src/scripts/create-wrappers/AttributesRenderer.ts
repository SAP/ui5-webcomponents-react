import type * as CEM from 'custom-elements-manifest';
import dedent from 'dedent';
import { propDescriptionFormatter, snakeCaseToCamelCase } from '../../util/formatters.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

const loggedTypes = new Set();

function mapWebComponentTypeToTsType(type: string) {
  switch (type) {
    case 'sap.ui.webc.base.types.Integer':
    case 'sap.ui.webc.base.types.Float':
      return 'number';
    case 'sap.ui.webc.base.types.DOMReference':
      // opener props only accept strings as prop types
      return 'string';

    case 'Boolean':
      return 'boolean';
    default:
      if (!loggedTypes.has(type)) {
        console.log('-> type', type);
        loggedTypes.add(type);
      }
      return type;
  }
}

export class AttributesRenderer extends AbstractRenderer {
  public phase = RenderingPhase.attributes;

  private _attributes: CEM.Attribute[] = [];

  setAttributes(value: CEM.Attribute[]) {
    this._attributes = value;
    return this;
  }

  private descriptionBuilder(attribute: CEM.Attribute) {
    const parts: string[] = [];

    parts.push(` * ${propDescriptionFormatter(attribute.description ?? '')}`);
    if (attribute.default && attribute.default.length > 0 && attribute.default !== '""') {
      parts.push(` * @default ${attribute.default}`);
    }

    return `/**\n${parts.join('\n')}\n */`;
  }

  private propTyping(attribute: CEM.Attribute) {
    let type = attribute.type?.text ?? 'unknown';
    type = mapWebComponentTypeToTsType(type);
    const enumRegex = /sap\.ui\.webc\.(base|main)\.types\./;
    const isEnum = enumRegex.test(type);

    if (isEnum) {
      type = type.replace(enumRegex, '');
      type += ` | keyof typeof ${type}`;
    }
    return `${snakeCaseToCamelCase(attribute.name)}?: ${type};`;
  }

  prepare(context: WebComponentWrapper) {
    for (const attribute of this._attributes) {
      switch (true) {
        case attribute.type?.text.startsWith('sap.ui.webc.main.types.'): {
          const name = attribute.type?.text.replace('sap.ui.webc.main.types.', '')!;
          context.addDefaultTypeImport(`@ui5/webcomponents/dist/types/${name}.js`, name);
          break;
        }
        case attribute.type?.text.startsWith('sap.ui.webc.base.types.'): {
          const name = attribute.type?.text.replace('sap.ui.webc.base.types.', '')!;
          context.addDefaultTypeImport(`@ui5/webcomponents-base/dist/types/${name}.js`, name);
          break;
        }
      }
    }
  }

  render(context: WebComponentWrapper): string {
    return dedent`
    interface ${context.componentName}Attributes {
      ${this._attributes
        .map((attribute) => {
          return `${this.descriptionBuilder(attribute)}\n${this.propTyping(attribute)}`;
        })
        .join('\n\n')}
    }
    `;
  }
}
