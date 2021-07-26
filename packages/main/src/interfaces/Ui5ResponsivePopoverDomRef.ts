import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5ResponsivePopoverDomRef extends Ui5DomRef {
  /**
   * Opens popover on desktop and dialog on mobile.
   * @param opener - The element that the popover is opened by.
   */
  openBy: (opener: HTMLElement | EventTarget) => void;
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
