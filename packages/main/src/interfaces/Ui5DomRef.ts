export interface Ui5DomRef extends Omit<HTMLElement, 'focus'> {
  /**
   * Attach a callback that will be executed whenever the component is invalidated
   *
   * @param callback
   */
  attachInvalidate: (callback) => void;
  /**
   * Detach the callback that is executed whenever the component is invalidated
   *
   * @param callback
   */
  detachInvalidate: (callback) => void;
  /**
   * Returns the DOM Element inside the Shadow Root that corresponds to the opening tag in the UI5 Web Component's template
   *
   * __Note:__ For logical (abstract) elements (items, options, etc...), returns the part of the parent's DOM that represents this option
   *
   * Use this method instead of "this.shadowRoot" to read the Shadow DOM, if ever necessary
   */
  getDomRef: () => HTMLElement;
  /**
   * Returns the DOM Element marked with `data-sap-focus-ref` inside the template.
   * This is the element that will receive the focus by default.
   */
  getFocusDomRef: () => HTMLElement;
  /**
   * Returns the DOM Element marked with `data-sap-focus-ref` inside the template.
   * This is the element that will receive the focus by default.
   */
  getFocusDomRefAsync: () => Promise<HTMLElement>;
  /**
   * Set the focus to the element, returned by "getFocusDomRef()" (marked by "data-sap-focus-ref")
   */
  focus: () => Promise<void>;
  /**
   * Used to duck-type UI5 elements without using instanceof
   */
  readonly isUI5Element: boolean;
  /**
   * Returns the `staticAreaItem` DOM Element.
   */
  readonly getStaticAreaItemDomRef: HTMLElement;
}
