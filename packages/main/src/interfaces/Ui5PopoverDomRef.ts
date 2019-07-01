import { Ui5DomRef } from '../lib/Ui5DomRef';

export interface Ui5PopoverDomRef extends Ui5DomRef {
  openBy: (p: HTMLElement) => void;
  close: () => void;
}
