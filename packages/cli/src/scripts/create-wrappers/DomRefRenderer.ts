import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import dedent from 'dedent';
import { mapWebComponentTypeToPrimitive, propDescriptionFormatter } from '../../util/formatters.js';
import { resolveReferenceImports } from '../../util/referenceResolver.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

const loggedTypes = new Set<string>();

function mapWebComponentTypeToTsType(type: string = 'unknown') {
  const primitive = mapWebComponentTypeToPrimitive(type);
  if (primitive) {
    return primitive;
  }
  switch (type) {
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

function resolveDomRefType(type: CEM.Type | undefined) {
  if (!type) {
    return 'unknown';
  }

  return mapWebComponentTypeToTsType(type.text);
}

type UI5ClassMember = CEM.ClassField | CEM.ClassMethod;

export class DomRefRenderer extends AbstractRenderer {
  public phase = RenderingPhase.domRef;

  private _members: UI5ClassMember[] = [];

  public setMembers(members: UI5ClassMember[]) {
    this._members = members.toSorted((a, b) => a.name.localeCompare(b.name));
    return this;
  }

  private generateFieldType(member: CEM.ClassField) {
    return resolveDomRefType(member.type);
  }

  private generateMethodType(member: CEM.ClassMethod) {
    const parameters =
      member.parameters?.map((param) => {
        return `${param.name}${param.optional ? '?' : ''}: ${resolveDomRefType(param.type)}`;
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
        ` * @param {${resolveDomRefType(param.type)}} ${name} - ${propDescriptionFormatter(param.description ?? '')}`
      );
    });
    if (member.return) {
      let returnDescription = '';
      if (member.return.description?.length) {
        returnDescription = ` - ${propDescriptionFormatter(member.return.description ?? '')}`;
      }
      parts.push(` * @returns {${resolveDomRefType(member.return.type)}}${returnDescription}`);
    }
    return parts;
  }

  private memberTyping(member: UI5ClassMember, context: WebComponentWrapper) {
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
    let readonlyModifier = '';
    if (member.kind === 'method') {
      descriptionParts.push(...this.generateMethodJsDoc(member));
      type = this.generateMethodType(member);
    } else {
      type = this.generateFieldType(member);
      if (member.readonly) {
        readonlyModifier = 'readonly ';
      }
    }

    return `/**\n${descriptionParts.join('\n')}\n */\n${readonlyModifier}${member.name}: ${type};`;
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
      let domRefType = resolveDomRefType(member.type);
      if (member._ui5validator === 'CSSColor') {
        domRefType = `CSSProperties['color']`;
      } else if (member._ui5validator === 'CSSSize') {
        domRefType = `CSSProperties['width'] | CSSProperties['height']`;
      }
      // in attributes, some enum types are widened to keyof typeof REF
      return ![domRefType, `${domRefType} | keyof typeof ${domRefType}`].includes(existingType);
    });
  }

  prepare(context: WebComponentWrapper) {
    context.addTypeImport(process.env.INTERFACES_IMPORT_PATH ?? '@ui5/webcomponents-react', 'Ui5DomRef');
    context.typeExportSet.add(`${context.componentName}DomRef`);

    for (const member of this._members) {
      if (member.kind === 'field') {
        resolveReferenceImports(member.type?.references ?? [], context);
      }
      if (member.kind === 'method') {
        const parameterReferences = member.parameters?.map((param) => param.type?.references ?? []);
        resolveReferenceImports(parameterReferences?.flat() ?? [], context);
        resolveReferenceImports(member.return?.type?.references ?? [], context);
      }
    }
  }

  render(context: WebComponentWrapper): string {
    const membersToProcess = this.getMembersToProcess(context);
    const attributesToOmit = [...context.attributesMap.keys()]
      .filter((key) => membersToProcess.some((member) => member.name === key))
      .map((key) => `'${key}'`);

    let extendsStatement = `Required<${context.componentName}Attributes>`;
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
