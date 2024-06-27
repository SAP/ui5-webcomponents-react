export interface Ui5CustomEvent<EventTarget = HTMLElement, Detail = never> extends Omit<CustomEvent<Detail>, 'target'> {
  target: EventTarget;
}

export type EnrichedUi5CustomEvent<T, NewDetail> = T extends (event: infer E) => void
  ? (event: E extends Ui5CustomEvent<infer ET, any> ? Ui5CustomEvent<ET, NewDetail> : never) => void
  : never;
