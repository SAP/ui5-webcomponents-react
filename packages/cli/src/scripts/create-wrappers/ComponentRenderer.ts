import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import dedent from 'dedent';
import { snakeCaseToCamelCase, summaryFormatter } from '../../util/formatters.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class ComponentRenderer extends AbstractRenderer {
  public phase = RenderingPhase.component;

  private dynamicImportPath: string | undefined;
  private attributes: CEM.Attribute[] = [];
  private slots: CEM.Slot[] = [];
  private events: CEM.Event[] = [];
  private description: string = '';

  setDynamicImportPath(value: string) {
    this.dynamicImportPath = value;
    return this;
  }

  setAttributes(attrs: CEM.Attribute[]) {
    this.attributes.push(...attrs);
    return this;
  }

  setSlots(slots: CEM.Slot[]) {
    this.slots.push(...slots);
    return this;
  }

  setEvents(events: CEM.Event[]) {
    this.events.push(...events);
    return this;
  }

  setDescription(value: string) {
    this.description = value;
    return this;
  }

  prepare(context: WebComponentWrapper) {
    context.exportSet.add(context.componentName);
  }

  render(context: WebComponentWrapper): string {
    const comment = `/**\n * ${summaryFormatter(this.description)}\n */`;

    const component = dedent`
      const ${context.componentName} = withWebComponent<${context.componentName}PropTypes, ${
        context.componentName
      }DomRef>('${context.tagName}', 
        [${this.attributes
          .filter((attr) => attr.type?.text !== 'boolean')
          .map((attr) => `'${snakeCaseToCamelCase(attr.name)}'`)
          .join(', ')}], 
        [${this.attributes
          .filter((attr) => attr.type?.text === 'boolean')
          .map((attr) => `'${snakeCaseToCamelCase(attr.name)}'`)
          .join(', ')}],
        [${this.slots
          ?.filter((slot) => slot.name !== 'default')
          .map((slot) => `'${snakeCaseToCamelCase(slot.name)}'`)
          .join(', ')}],
        [${this.events?.map((event) => `'${event.name}'`).join(', ')}],
        () => import('${this.dynamicImportPath}') 
    );
    
    ${context.componentName}.displayName = '${context.componentName}';
    `;

    return [comment, component].join('\n');
  }
}
