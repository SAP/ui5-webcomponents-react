export interface Ui5DomRef extends HTMLElement {
  /**
   * Returns the DOM Element inside the Shadow Root that corresponds to the opening tag in the UI5 Web Component's template
   * Use this method instead of "this.shadowRoot" to read the Shadow DOM, if ever necessary.
   */
  getDomRef?: () => HTMLElement;
  /**
   * Closes the popover/dialog.
   */
  close: () => void;
  /**
   * Focuses the element denoted by initialFocus, if provided, or the first focusable element otherwise.
   */
  applyFocus: () => void;
  /**
   * Override this method to provide custom logic for the popup's open/closed state. Maps to the "opened" property by default.
   */
  isOpen: () => void;
}
