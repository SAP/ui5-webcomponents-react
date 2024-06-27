export interface Ui5CustomEvent<EventTarget = HTMLElement, Detail = never> extends Omit<CustomEvent<Detail>, 'target'> {
  target: EventTarget;
}
