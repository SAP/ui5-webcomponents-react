import type * as CEM from 'custom-elements-manifest';
import dedent from 'dedent';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class ComponentRenderer extends AbstractRenderer {
  public phase = RenderingPhase.component;

  private dynamicImportPath: string | undefined;
  private attributes: CEM.Attribute[] = [];
  private slots: CEM.Slot[] = [];
  private events: CEM.Event[] = [];

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

  render(context: WebComponentWrapper): string {
    context.exportSet.add(context.componentName);
    return dedent`
      const ${context.componentName} = withWebComponent<${context.componentName}PropTypes, ${
        context.componentName
      }DomRef>('${context.tagName}', 
        [${this.attributes
          .filter((attr) => attr.type?.text !== 'boolean')
          .map((attr) => `'${attr.name}'`)
          .join(', ')}], 
        [${this.attributes
          .filter((attr) => attr.type?.text === 'boolean')
          .map((attr) => `'${attr.name}'`)
          .join(', ')}],
        [${this.slots
          ?.filter((slot) => slot.name !== 'default')
          .map((slot) => `'${slot.name}'`)
          .join(', ')}],
        [${this.events?.map((event) => `'${event.name}'`).join(', ')}],
        () => import('${this.dynamicImportPath}') 
    );
    
    ${context.componentName}.displayName = '${context.componentName}';
    `;
  }
}
