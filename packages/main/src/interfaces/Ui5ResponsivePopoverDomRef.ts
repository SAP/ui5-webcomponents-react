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
   */
  showAt: (opener: HTMLElement | EventTarget) => void;

  /**
   * Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.
   *
   */
  applyFocus: () => void;
}
