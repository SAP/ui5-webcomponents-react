import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types-internal.d.ts';
import dedent from 'dedent';
import {
  capitalizeFirstLetter,
  propDescriptionFormatter,
  sinceFilter,
  snakeCaseToCamelCase
} from '../../util/formatters.js';
import { resolveReferenceImports } from '../../util/referenceResolver.js';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class PropTypesRenderer extends AbstractRenderer {
  public phase = RenderingPhase.props;

  private _slots: CEM.Slot[] = [];
  private _events: CEM.Event[] = [];
  private eventNames = new Set<string>();

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
    this._events = events.toSorted((a, b) => a.name.localeCompare(b.name));
    return this;
  }

  private eventHasDetails(event: CEM.Event) {
    return Array.isArray(event.type.references) && event.type.references.length > 0;
  }

  private getSlots(context: WebComponentWrapper) {
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
            `* Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`
          );
        }

        if (sinceFilter(slot._ui5since)) {
          descriptionParts.push(` *`);
          descriptionParts.push(
            ` * **Note:** Available since [v${slot._ui5since}](https://github.com/SAP/ui5-webcomponents/releases/tag/v${slot._ui5since}) of **${context.packageName}**.`
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

        return `/**\n${descriptionParts.join('\n')}\n */\n${snakeCaseToCamelCase(slot.name)}?: ${
          isDefaultSlot ? 'ReactNode | ReactNode[]' : 'UI5WCSlotsNode'
        }`;
      })
      .join('\n\n');
  }

  private getEvents(context: WebComponentWrapper) {
    return this._events
      .map((event) => {
        const descriptionParts = [];

        descriptionParts.push(` * ${propDescriptionFormatter(event.description ?? '')}`);
        if (event._ui5allowPreventDefault) {
          descriptionParts.push(` *`);
          descriptionParts.push(
            ` * **Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`
          );
        }
        if (sinceFilter(event._ui5since)) {
          descriptionParts.push(` *`);
          descriptionParts.push(
            ` * **Note:** Available since [v${event._ui5since}](https://github.com/SAP/ui5-webcomponents/releases/tag/v${event._ui5since}) of **${context.packageName}**.`
          );
        }
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
        const reactEventName = `on${capitalizeFirstLetter(snakeCaseToCamelCase(event.name))}`;
        if (event.type.text?.startsWith('CustomEvent')) {
          const hasDetails = this.eventHasDetails(event);
          if (hasDetails) {
            eventType = `(event: Ui5CustomEvent<${domRef}, ${event.type.references!.at(0)!.name}>) => void;`;
          } else {
            eventType = `(event: Ui5CustomEvent<${domRef}>) => void;`;
          }
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

        return `/**\n${descriptionParts.join('\n')}\n */\n${reactEventName}?: ${eventType}`;
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
    const customEvents = this._events.filter((event) => event.type.text.includes('CustomEvent'));
    if (customEvents.length > 0) {
      context.addTypeImport(interfacesImportPath, 'Ui5CustomEvent');
    }

    for (const event of this._events) {
      const reactEventName = `on${capitalizeFirstLetter(snakeCaseToCamelCase(event.name))}`;
      this.eventNames.add(reactEventName);
      if (event.type.text.startsWith('CustomEvent') && this.eventHasDetails(event)) {
        resolveReferenceImports(event.type?.references ?? [], context);
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
    const typesToOmit = [];
    if (context.attributesMap.size > 0) {
      typesToOmit.push(`keyof ${context.componentName}Attributes`);
    }

    for (const slot of this._slots) {
      typesToOmit.push(`'${snakeCaseToCamelCase(slot.name)}'`);
    }

    if (this.eventNames.size > 0) {
      typesToOmit.push(...Array.from(this.eventNames).map((evt) => `'${evt}'`));
    }

    const CommonProps = typesToOmit.length > 0 ? `Omit<CommonProps, ${typesToOmit.join(' | ')}>` : 'CommonProps';

    return dedent`
    interface ${context.componentName}PropTypes extends ${context.componentName}Attributes, ${CommonProps} {
      ${this.getSlots(context)}
      ${this.getEvents(context)}
    }
    `;
  }
}
