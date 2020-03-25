import { ReactNode } from 'react';
import { HTMLEvent } from '../interfaces/HTMLEvent';
import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';

export interface Parameters {
  [key: string]: number | string | object | boolean | Parameters;
}

export class Event {
  readonly source: ReactNode;
  readonly originalEvent: HTMLEvent;
  readonly parameters: any;
  readonly htmlSource: EventTarget;

  /**
   * Event Constructor
   * @param source {ReactNode} The React Element instance
   * @param originalEvent {HTMLEvent} original HTML Event that triggered this event
   * @param parameters {Parameters} event payload
   */
  constructor(source: ReactNode, originalEvent: HTMLEvent, parameters: Parameters = {}) {
    this.source = source;
    this.originalEvent = originalEvent;
    this.parameters = parameters;
    this.htmlSource = originalEvent.target;
    deprecationNotice(
      '@ui5/webcomponents-react-base/lib/Event',
      'This class is deprecated and will be removed in future releases. We recommend working with CustomEvents from now on.'
    );
  }

  /**
   * Static initializer for an Event
   * @param source {ReactNode} The React Element instance
   * @param originalEvent {HTMLEvent} original HTML Event that triggered this event
   * @param parameters {Parameters} event payload
   */
  public static of(source: ReactNode, originalEvent: HTMLEvent, parameters: Parameters = {}) {
    return new Event(source, originalEvent, parameters);
  }

  public getSource(): ReactNode {
    return this.source;
  }

  public getOriginalEvent(): HTMLEvent {
    return this.originalEvent;
  }

  public getParameters(): Parameters {
    return this.parameters;
  }

  public getParameter(parameter: string): any {
    return this.parameters[parameter];
  }

  public getHtmlSourceElement(): EventTarget {
    return this.htmlSource;
  }

  public cancel(): void {
    this.originalEvent.stopPropagation();
  }

  public preventDefault(): void {
    this.originalEvent.preventDefault();
  }
}
