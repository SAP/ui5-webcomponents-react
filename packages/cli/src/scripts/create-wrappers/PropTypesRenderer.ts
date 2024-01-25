import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import dedent from 'dedent';
import { capitalizeFirstLetter, propDescriptionFormatter, snakeCaseToCamelCase } from '../../util/formatters.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

function resolveEventDetailName(context: WebComponentWrapper, eventName: string) {
  return `${context.componentName}${capitalizeFirstLetter(snakeCaseToCamelCase(eventName))}EventDetail`;
}

export class PropTypesRenderer extends AbstractRenderer {
  public phase = RenderingPhase.props;

  private _slots: CEM.Slot[] = [];
  private _events: CEM.Event[] = [];

  public setSlots(slots: CEM.Slot[]) {
    this._slots = slots
      .map((s) => {
        if (s.name === 'default') {
          return {
            ...s,
            name: 'children'
          } as CEM.Slot;
        }
        return s;
      })
      .toSorted((a, b) => a.name.localeCompare(b.name));
    return this;
  }

  public setEvents(events: CEM.Event[]) {
    this._events = events;
    return this;
  }

  private getSlots() {
    return this._slots
      .map((slot) => {
        const isDefaultSlot = slot.name === 'children' || slot.name === '';
        const descriptionParts = [];
        descriptionParts.push(` * ${propDescriptionFormatter(slot.description ?? '')}`);

        if (!isDefaultSlot) {
          descriptionParts.push(` *`);
          descriptionParts.push(
            ` * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="${slot.name}"\`).`
          );
          descriptionParts.push(
            ` * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.`
          );
          descriptionParts.push(` *`);
          descriptionParts.push(
            ' * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.'
          );
          descriptionParts.push(
            `* Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`
          );
        }

        if (slot.deprecated) {
          descriptionParts.push(` *`);
          if (typeof slot.deprecated === 'string') {
            descriptionParts.push(` * @deprecated ${slot.deprecated}`);
          } else {
            descriptionParts.push(` * @deprecated`);
          }
        }

        // todo: detect slots which allow multiple slots
        return `/**\n${descriptionParts.join('\n')}\n */\n${snakeCaseToCamelCase(slot.name)}?: ${
          isDefaultSlot ? 'ReactNode | ReactNode[]' : 'UI5WCSlotsNode | UI5WCSlotsNode[]'
        }`;
      })
      .join('\n\n');
  }

  private getEvents(context: WebComponentWrapper) {
    return this._events
      .map((event) => {
        const descriptionParts = [];

        descriptionParts.push(` * ${propDescriptionFormatter(event.description ?? '')}`);
        if (event.deprecated) {
          descriptionParts.push(` *`);
          if (typeof event.deprecated === 'string') {
            descriptionParts.push(` * @deprecated ${event.deprecated}`);
          } else {
            descriptionParts.push(` * @deprecated`);
          }
        }

        const domRef = `${context.componentName}DomRef`;
        let eventType = '(event: unknown) => void;';
        if (event.type.text === 'CustomEvent') {
          eventType = `(event: Ui5CustomEvent<${domRef}, ${resolveEventDetailName(context, event.name)}>) => void;`;
        } else if (event.type.text === 'Event') {
          switch (event.name) {
            case 'click':
              eventType = `MouseEventHandler<${domRef}>`;
              break;
            case 'drop':
              eventType = `DragEventHandler<${domRef}>`;
              break;
            default:
              console.warn('Unknown Native Event', event.name);
          }
        }

        return `/**\n${descriptionParts.join('\n')}\n */\non${capitalizeFirstLetter(
          snakeCaseToCamelCase(event.name)
        )}?: ${eventType}`;
      })
      .join('\n\n');
  }

  prepare(context: WebComponentWrapper) {
    const interfacesImportPath = process.env.INTERFACES_IMPORT_PATH ?? '@ui5/webcomponents-react';

    context.addTypeImport(interfacesImportPath, 'CommonProps');
    context.typeExportSet.add(`${context.componentName}PropTypes`);
    if (this._slots.some((s) => s.name === 'children' || s.name === '')) {
      context.addTypeImport('react', 'ReactNode');
    }
    if (this._slots.some((s) => s.name !== 'children' && s.name !== '')) {
      context.addTypeImport(interfacesImportPath, 'UI5WCSlotsNode');
    }
    const customEvents = this._events.filter((event) => event.type.text === 'CustomEvent');
    if (customEvents.length > 0) {
      context.addTypeImport(interfacesImportPath, 'Ui5CustomEvent');
    }

    for (const event of this._events) {
      if (event.type.text === 'CustomEvent') {
        context.addTypeImport(context.modulePath, resolveEventDetailName(context, event.name));
      } else if (event.type.text === 'Event') {
        switch (event.name) {
          case 'click':
            context.addTypeImport('react', 'MouseEventHandler');
            break;
          case 'drop':
            context.addTypeImport('react', 'DragEventHandler');
            break;
          default:
            console.warn('Unknown Native Event', event.name);
        }
      }
    }
  }

  render(context: WebComponentWrapper): string {
    return dedent`
    interface ${context.componentName}PropTypes extends ${context.componentName}Attributes, CommonProps {
      ${this.getSlots()}
      ${this.getEvents(context)}
    }
    `;
  }
}
