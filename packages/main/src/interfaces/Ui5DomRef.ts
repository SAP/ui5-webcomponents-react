export interface Ui5DomRef extends HTMLElement {
  /**
   * Returns the DOM Element inside the Shadow Root that corresponds to the opening tag in the UI5 Web Component's template
   * Use this method instead of "this.shadowRoot" to read the Shadow DOM, if ever necessary.
   */
  getDomRef?: () => HTMLElement;
}
