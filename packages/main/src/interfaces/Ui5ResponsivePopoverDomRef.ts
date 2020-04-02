import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5ResponsivePopoverDomRef extends Ui5DomRef {
  open: (p: HTMLElement) => void;
  close: () => void;
}
