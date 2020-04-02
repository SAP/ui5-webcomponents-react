import { CSSProperties, ReactNode } from 'react';

export interface UI5WebComponentsReactPopoverPropTypes {
  openByStyle?: CSSProperties;
  openBy?: ReactNode;
  open?: boolean;
  propagateOpenByClickEvent?: boolean;
}
