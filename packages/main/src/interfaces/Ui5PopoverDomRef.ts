import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5PopoverDomRef extends Ui5DomRef {
  openBy: (p: HTMLElement) => void;
  close: () => void;
}
