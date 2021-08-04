import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5DialogDomRef extends Ui5DomRef {
  /**
   * Shows the dialog.
   * @param {boolean} [preventInitialFocus] - Prevents applying the focus inside the popup
   */
  show: (preventInitialFocus?: boolean) => void;

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
