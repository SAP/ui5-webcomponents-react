// @generated

import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5PopoverDomRef extends Ui5DomRef {
  /**
   * Shows the popover.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   * @param {boolean} [preventInitialFocus] - prevents applying the focus inside the popover
   */
  showAt: (opener: HTMLElement | EventTarget, preventInitialFocus?: boolean) => void;

  /**
   * Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.
   *
   */
  applyFocus: () => void;

  /**
   * Hides the block layer (for modal popups only)
   *
   */
  close: () => void;

  /**
   * Tells if the component is opened
   *
   */
  isOpen: () => void;
}
