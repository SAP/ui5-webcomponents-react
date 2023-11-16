import type * as CEM from 'custom-elements-manifest';
import dedent from 'dedent';
import { mapWebComponentTypeToPrimitive, propDescriptionFormatter } from '../../util/formatters.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

const loggedTypes = new Set<string>();

function mapWebComponentTypeToTsType(type: string = 'unknown') {
  const primitive = mapWebComponentTypeToPrimitive(type);
  if (primitive) {
    return primitive;
  }
  switch (type) {
    case 'sap.ui.webc.base.types.DOMReference':
      // opener props only accept strings as prop types
      return 'string | HTMLElement';
    case 'HTMLElement[]':
      return 'HTMLElement[]';
    case 'Date':
      return 'Date';
    case 'FileList':
      return 'FileList';
    case 'function':
      return 'Function';
    default:
      if (!loggedTypes.has(type)) {
        console.log('-> DomRef type', type);
        loggedTypes.add(type);
      }
      return type;
  }
}

function resolveDomRefType(type: string = 'unknown') {
  type = mapWebComponentTypeToTsType(type);

  const enumRegex = /sap\.ui\.webc\.(base|main|fiori)\.types\./;
  const isEnum = enumRegex.test(type);

  if (isEnum) {
    type = type.replace(enumRegex, '');
    const isArray = type.includes('[]');
    type = type.replace('[]', '');
    type += ` | keyof typeof ${type}`;
    if (isArray) {
      type = `(${type})[]`;
    }
  }

  return type;
}

export class DomRefRenderer extends AbstractRenderer {
  public phase = RenderingPhase.domRef;

  private _members: CEM.ClassMember[] = [];

  public setMembers(members: CEM.ClassMember[]) {
    this._members = members;
    return this;
  }

  private generateFieldType(member: CEM.ClassField) {
    return resolveDomRefType(member.type?.text);
  }

  private generateMethodType(member: CEM.ClassMethod) {
    const parameters =
      member.parameters?.map((param) => {
        return `${param.name}${param.optional ? '?' : ''}: ${mapWebComponentTypeToTsType(param.type?.text)}`;
      }) ?? [];
    return `(${parameters.join(', ')}) => ${member.return?.type?.text ?? 'void'}`;
  }

  private generateMethodJsDoc(member: CEM.ClassMethod) {
    const parts = [];
    member.parameters?.forEach((param) => {
      let name = param.name;
      if (param.optional) {
        name = `[${name}]`;
      }
      parts.push(
        ` * @param {${mapWebComponentTypeToTsType(param.type?.text)}} ${name} - ${propDescriptionFormatter(
          param.description ?? ''
        )}`
      );
    });
    if (member.return) {
      parts.push(
        ` * @returns {${mapWebComponentTypeToTsType(member.return.type?.text)} - ${propDescriptionFormatter(
          member.return.description ?? ''
        )}`
      );
    }
    return parts;
  }

  private memberTyping(member: CEM.ClassMember, context: WebComponentWrapper) {
    const descriptionParts = [];

    descriptionParts.push(` * ${propDescriptionFormatter(member.description ?? '')}`);
    if (member.deprecated) {
      descriptionParts.push(` *`);
      if (typeof member.deprecated === 'string') {
        descriptionParts.push(` * @deprecated ${member.deprecated}`);
      } else {
        descriptionParts.push(` * @deprecated`);
      }
    }

    let type: string;
    if (member.kind === 'method') {
      descriptionParts.push(...this.generateMethodJsDoc(member));
      type = this.generateMethodType(member);
    } else {
      type = this.generateFieldType(member);
    }

    return `/**\n${descriptionParts.join('\n')}\n */\n${member.name}: ${type};`;
  }

  private getMembersToProcess(context: WebComponentWrapper) {
    return this._members.filter((member) => {
      if (member.kind === 'method') {
        // methods can never be part of the attributes
        return true;
      }
      if (!context.attributesMap.has(member.name)) {
        // member is not part of the attributes
        return true;
      }
      const existingType = context.attributesMap.get(member.name)!;
      // the types don't match, e.g. for `opener` attributes
      return existingType !== resolveDomRefType(member.type?.text);
    });
  }

  prepare(context: WebComponentWrapper) {
    context.addTypeImport('@ui5/webcomponents-react', 'Ui5DomRef');
    context.typeExportSet.add(`${context.componentName}DomRef`);

    for (const member of this._members) {
      if (member.kind === 'field') {
        switch (true) {
          case member.type?.text.startsWith('sap.ui.webc.main.types.'): {
            const name = member.type?.text.replace('sap.ui.webc.main.types.', '')?.replace('[]', '')!;
            context.addDefaultTypeImport(`@ui5/webcomponents/dist/types/${name}.js`, name);
            break;
          }
          case member.type?.text.startsWith('sap.ui.webc.base.types.'): {
            const name = member.type?.text.replace('sap.ui.webc.base.types.', '')?.replace('[]', '')!;
            context.addDefaultTypeImport(`@ui5/webcomponents-base/dist/types/${name}.js`, name);
            break;
          }
        }
      }
    }
  }

  render(context: WebComponentWrapper): string {
    const membersToProcess = this.getMembersToProcess(context);
    const attributesToOmit = [...context.attributesMap.keys()]
      .filter((key) => membersToProcess.some((member) => member.name === key))
      .map((key) => `'${key}'`);

    let extendsStatement = `${context.componentName}Attributes`;
    if (attributesToOmit.length > 0) {
      extendsStatement = `Omit<${extendsStatement}, ${attributesToOmit.join(' | ')}>`;
    }
    return dedent`
    interface ${context.componentName}DomRef extends ${extendsStatement}, Ui5DomRef {
      ${membersToProcess.map((member) => this.memberTyping(member, context)).join('\n\n')}
    }
    `;
  }
}
