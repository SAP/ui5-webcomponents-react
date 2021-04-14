import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5PopoverDomRef extends Ui5DomRef {
  /**
   * Opens the popover.
   * @param opener - The element that the popover is opened by.
   * @param preventInitialFocus - Prevents applying the focus inside the popover.
   */
  openBy: (opener: HTMLElement, preventInitialFocus?: boolean) => void;
}
