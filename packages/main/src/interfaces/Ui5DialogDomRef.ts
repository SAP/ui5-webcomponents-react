import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5DialogDomRef extends Ui5DomRef {
  open: () => void;
  close: () => void;
}
