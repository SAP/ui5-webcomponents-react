import type { PropertyValue, SlotValue } from '@ui5/webcomponents-base/dist/UI5ElementMetadata.js';

type ChangeInfo = {
  type: 'property' | 'slot';
  name: string;
  reason?: string;
  child?: SlotValue;
  target?: Ui5DomRef;
  newValue?: PropertyValue;
  oldValue?: PropertyValue;
};

type InvalidationInfo = ChangeInfo & { target: Ui5DomRef };

export interface Ui5DomRef extends Omit<HTMLElement, 'focus'> {
  /**
   * Called every time before the component renders.
   * @public
   */
  onBeforeRendering(): void;
  /**
   * Called every time after the component renders.
   * @public
   */
  onAfterRendering(): void;
  /**
   * Called on connectedCallback - added to the DOM.
   * @public
   */
  onEnterDOM(): void;
  /**
   * Called on disconnectedCallback - removed from the DOM.
   * @public
   */
  onExitDOM(): void;
  /**
   * Attach a callback that will be executed whenever the component is invalidated
   *
   * @param callback
   * @public
   */
  attachInvalidate(callback: (param: InvalidationInfo) => void): void;
  /**
   * Detach the callback that is executed whenever the component is invalidated
   *
   * @param callback
   * @public
   */
  detachInvalidate(callback: (param: InvalidationInfo) => void): void;
  /**
   * A callback that is executed each time an already rendered component is invalidated (scheduled for re-rendering)
   *
   * @param  changeInfo An object with information about the change that caused invalidation.
   * The object can have the following properties:
   *  - type: (property|slot) tells what caused the invalidation
   *   1) property: a property value was changed either directly or as a result of changing the corresponding attribute
   *   2) slot: a slotted node(nodes) changed in one of several ways (see "reason")
   *
   *  - name: the name of the property or slot that caused the invalidation
   *
   *  - reason: (children|textcontent|childchange|slotchange) relevant only for type="slot" only and tells exactly what changed in the slot
   *   1) children: immediate children (HTML elements or text nodes) were added, removed or reordered in the slot
   *   2) textcontent: text nodes in the slot changed value (or nested text nodes were added or changed value). Can only trigger for slots of "type: Node"
   *   3) slotchange: a slot element, slotted inside that slot had its "slotchange" event listener called. This practically means that transitively slotted children changed.
   *	  Can only trigger if the child of a slot is a slot element itself.
   *   4) childchange: indicates that a UI5Element child in that slot was invalidated and in turn invalidated the component.
   *	  Can only trigger for slots with "invalidateOnChildChange" metadata descriptor
   *
   *  - newValue: the new value of the property (for type="property" only)
   *
   *  - oldValue: the old value of the property (for type="property" only)
   *
   *  - child the child that was changed (for type="slot" and reason="childchange" only)
   *
   * @public
   */
  onInvalidation(changeInfo: ChangeInfo): void;
  /**
   * Returns the DOM Element inside the Shadow Root that corresponds to the opening tag in the UI5 Web Component's template
   * *Note:* For logical (abstract) elements (items, options, etc...), returns the part of the parent's DOM that represents this option
   * Use this method instead of "this.shadowRoot" to read the Shadow DOM, if ever necessary
   *
   * @public
   */
  getDomRef(): HTMLElement | undefined;

  /**
   * Returns the DOM Element marked with "data-sap-focus-ref" inside the template.
   * This is the element that will receive the focus by default.
   * @public
   */
  getFocusDomRef(): HTMLElement | undefined;

  /**
   * Waits for dom ref and then returns the DOM Element marked with "data-sap-focus-ref" inside the template.
   * This is the element that will receive the focus by default.
   * @public
   */
  getFocusDomRefAsync(): Promise<HTMLElement | undefined>;
  /**
   * Set the focus to the element, returned by "getFocusDomRef()" (marked by "data-sap-focus-ref")
   * @param focusOptions additional options for the focus
   * @public
   */
  focus(focusOptions?: FocusOptions): Promise<void>;
  /**
   *
   * @public
   * @param name - name of the event
   * @param data - additional data for the event
   * @param cancelable - true, if the user can call preventDefault on the event object
   * @param bubbles - true, if the event bubbles
   * @returns false, if the event was cancelled (preventDefault called), true otherwise
   */
  fireEvent<T>(name: string, data?: T, cancelable?: boolean, bubbles?: boolean): boolean;
  /**
   * Returns the actual children, associated with a slot.
   * Useful when there are transitive slots in nested component scenarios and you don't want to get a list of the slots, but rather of their content.
   * @public
   */
  getSlottedNodes<T = Node>(slotName: string): Array<T>;
  /**
   * Attach a callback that will be executed whenever the component's state is finalized
   *
   * @param callback
   * @public
   */
  attachComponentStateFinalized(callback: () => void): void;
  /**
   * Detach the callback that is executed whenever the component's state is finalized
   *
   * @param callback
   * @public
   */
  detachComponentStateFinalized(callback: () => void): void;
  /**
   * Determines whether the component should be rendered in RTL mode or not.
   * Returns: "rtl", "ltr" or undefined
   *
   * @public
   * @default undefined
   */
  readonly effectiveDir: string | undefined;

  /**
   * Used to duck-type UI5 elements without using instanceof
   * @public
   * @default true
   */
  readonly isUI5Element: boolean;
}
