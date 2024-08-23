import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import dedent from 'dedent';
import { sinceFilter, snakeCaseToCamelCase, summaryFormatter } from '../../util/formatters.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class ComponentRenderer extends AbstractRenderer {
  public phase = RenderingPhase.component;

  private attributes: CEM.ClassField[] = [];
  private slots: CEM.Slot[] = [];
  private events: CEM.Event[] = [];
  private description: string = '';
  private note: string = '';
  private isAbstract: boolean = false;
  private since: string | undefined;

  setAttributes(attrs: CEM.ClassField[]) {
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

  setNote(value: string) {
    this.note = value;
    return this;
  }

  setIsAbstract(value: boolean) {
    this.isAbstract = value;
    return this;
  }

  setSince(value: string | undefined) {
    this.since = value;
    return this;
  }

  prepare(context: WebComponentWrapper) {
    context.exportSet.add(context.componentName);
  }

  render(context: WebComponentWrapper): string {
    let comment = `/**\n * ${summaryFormatter(this.description)}\n *\n`;

    if (this.note) {
      comment += ` * __Note__: ${this.note}\n`;
    }
    if (sinceFilter(this.since)) {
      comment += ` *\n`;
      comment += ` * @since [${this.since}](https://github.com/SAP/ui5-webcomponents/releases/tag/v${this.since}) of __${context.packageName}__.\n`;
    }

    if (this.isAbstract) {
      comment += ' * @abstract\n';
    }
    comment += '*/';

    const component = dedent`
      const ${context.componentName} = withWebComponent<${context.componentName}PropTypes, ${
        context.componentName
      }DomRef>('${context.tagName}', 
        [${this.attributes
          .filter((attr) => attr.type?.text !== 'boolean')
          .map((attr) => `'${snakeCaseToCamelCase(attr.name)}'`)
          .toSorted((a, b) => a.localeCompare(b))
          .join(', ')}], 
        [${this.attributes
          .filter((attr) => attr.type?.text === 'boolean')
          .map((attr) => `'${snakeCaseToCamelCase(attr.name)}'`)
          .toSorted((a, b) => a.localeCompare(b))
          .join(', ')}],
        [${this.slots
          ?.filter((slot) => slot.name !== 'default')
          .map((slot) => `'${snakeCaseToCamelCase(slot.name)}'`)
          .toSorted((a, b) => a.localeCompare(b))
          .join(', ')}],
        [${this.events
          ?.map((event) => `'${event.name}'`)
          .toSorted((a, b) => a.localeCompare(b))
          .join(', ')}]
    );
    
    ${context.componentName}.displayName = '${context.componentName}';
    `;

    return [comment, component].join('\n');
  }
}
