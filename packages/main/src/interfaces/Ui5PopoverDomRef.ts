import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5PopoverDomRef extends Ui5DomRef {
  /**
   * Opens the popover.
   * @param opener - The element that the popover is opened by.
   * @param preventInitialFocus - Prevents applying the focus inside the popover.
   */
  openBy: (opener: HTMLElement | EventTarget, preventInitialFocus?: boolean) => void;
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
