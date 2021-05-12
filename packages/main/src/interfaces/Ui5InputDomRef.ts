import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5InputDomRef extends Ui5DomRef {
  /**
   * Checks if the picker is open
   */
  isOpen?: () => boolean;
}
