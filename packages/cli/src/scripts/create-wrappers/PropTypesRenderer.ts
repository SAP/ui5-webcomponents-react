import type * as CEM from 'custom-elements-manifest';
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
    this._slots = slots;
    return this;
  }

  public setEvents(events: CEM.Event[]) {
    this._events = events;
    return this;
  }

  private getSlots() {
    return this._slots
      .map((slot) => {
        const descriptionParts = [];

        descriptionParts.push(` * ${propDescriptionFormatter(slot.description ?? '')}`);

        if (slot.name !== 'default') {
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

        const slotName = slot.name === 'default' ? 'children' : slot.name;

        return `/**\n${descriptionParts.join('\n')}\n */\n${snakeCaseToCamelCase(slotName)}?: ReactNode | ReactNode[];`;
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
        // @ts-expect-error: the UI5 CEM is not spec compliant here
        if (event.type === 'CustomEvent') {
          eventType = `(event: Ui5CustomEvent<${domRef}, ${resolveEventDetailName(context, event.name)}>) => void;`;
          // @ts-expect-error: the UI5 CEM is not spec compliant here
        } else if (event.type === 'NativeEvent') {
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
    context.addTypeImport('@ui5/webcomponents-react', 'CommonProps');
    context.typeExportSet.add(`${context.componentName}PropTypes`);
    if (this._slots.length > 0) {
      context.addTypeImport('react', 'ReactNode');
    }
    // @ts-expect-error: the UI5 CEM is not spec compliant here
    const customEvents = this._events.filter((event) => event.type === 'CustomEvent');
    if (customEvents.length > 0) {
      context.addTypeImport('@ui5/webcomponents-react', 'Ui5CustomEvent');
    }

    for (const event of this._events) {
      // @ts-expect-error: the UI5 CEM is not spec compliant here
      if (event.type === 'CustomEvent') {
        context.addTypeImport(context.modulePath, resolveEventDetailName(context, event.name));
        // @ts-expect-error: the UI5 CEM is not spec compliant here
      } else if (event.type === 'NativeEvent') {
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
