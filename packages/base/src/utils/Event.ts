import { ReactNode } from 'react';
import { HTMLEvent } from '../interfaces/HTMLEvent';

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
