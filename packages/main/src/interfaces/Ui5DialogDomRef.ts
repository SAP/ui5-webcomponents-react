import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5DialogDomRef extends Ui5DomRef {
  /**
   * Shows the block layer (for modal popups only) and sets the correct z-index for the purpose of popup stacking.
   * @param preventInitialFocus - Prevents applying the focus inside the popup.
   */
  open: (preventInitialFocus?: boolean) => void;
}
