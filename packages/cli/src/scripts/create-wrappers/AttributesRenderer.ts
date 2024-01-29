import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import dedent from 'dedent';
import {
  mapWebComponentTypeToPrimitive,
  propDescriptionFormatter,
  snakeCaseToCamelCase
} from '../../util/formatters.js';
import { resolveReferenceImports } from '../../util/referenceResolver.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

const loggedTypes = new Set<string>();

function mapWebComponentTypeToTsType(type: string) {
  const primitive = mapWebComponentTypeToPrimitive(type);
  if (primitive) {
    return primitive;
  }
  switch (type) {
    case 'HTMLElement | string | undefined':
      // opener props only accept strings as prop types
      return 'string';

    default:
      if (!loggedTypes.has(type)) {
        console.log('-> Attributes type', type);
        loggedTypes.add(type);
      }
      return type;
  }
}

export class AttributesRenderer extends AbstractRenderer {
  public phase = RenderingPhase.attributes;

  private _attributes: CEM.Attribute[] = [];

  setAttributes(value: CEM.Attribute[]) {
    this._attributes = value.toSorted((a, b) => a.name.localeCompare(b.name));
    return this;
  }

  private descriptionBuilder(attribute: CEM.Attribute) {
    const parts: string[] = [];

    parts.push(` * ${propDescriptionFormatter(attribute.description ?? '')}`);
    if (attribute.default && attribute.default.length > 0 && attribute.default !== '""') {
      parts.push(` * @default ${attribute.default}`);
    }

    if (attribute.deprecated) {
      parts.push(` * @deprecated ${attribute.deprecated}`);
    }

    return `/**\n${parts.join('\n')}\n */`;
  }

  private propTyping(attribute: CEM.Attribute, context: WebComponentWrapper) {
    let type = attribute.type?.text ?? 'unknown';
    type = mapWebComponentTypeToTsType(type);

    const references = attribute.type?.references;
    const isEnum = references != null && references?.length > 0;

    if (isEnum) {
      type += ` | keyof typeof ${type}`;
    }

    context.addAttribute(snakeCaseToCamelCase(attribute.name), type);

    return `${snakeCaseToCamelCase(attribute.name)}?: ${type};`;
  }

  prepare(context: WebComponentWrapper) {
    for (const attribute of this._attributes) {
      resolveReferenceImports(attribute.type?.references ?? [], context);
    }
  }

  render(context: WebComponentWrapper): string {
    return dedent`
    interface ${context.componentName}Attributes {
      ${this._attributes
        .map((attribute) => {
          return `${this.descriptionBuilder(attribute)}\n${this.propTyping(attribute, context)}`;
        })
        .join('\n\n')}
    }
    `;
  }
}
