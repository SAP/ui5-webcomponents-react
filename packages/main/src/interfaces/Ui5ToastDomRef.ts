import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5ToastDomRef extends Ui5DomRef {
  /**
   * Shows the component.
   *
   */
  show: () => void;
}
