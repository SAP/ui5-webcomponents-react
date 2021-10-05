// @generated

import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5ResponsivePopoverDomRef extends Ui5DomRef {
  /**
   * Closes the popover/dialog.
   *
   */
  close: () => void;

  /**
   * Tells if the responsive popover is open
   *
   */
  isOpen: () => void;

  /**
   * Shows popover on desktop and dialog on mobile.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   * @param {boolean} [preventInitialFocus] - Prevents applying the focus inside the popup
   */
  showAt: (opener: HTMLElement | EventTarget, preventInitialFocus?: boolean) => void;

  /**
   * Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.
   *
   */
  applyFocus: () => void;
}
