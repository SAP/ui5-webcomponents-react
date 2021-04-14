import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5ResponsivePopoverDomRef extends Ui5DomRef {
  /**
   * Opens popover on desktop and dialog on mobile.
   * @param opener - The element that the popover is opened by.
   */
  open: (opener: HTMLElement) => void;
}
