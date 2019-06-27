import { Event } from '@ui5/webcomponents-react-base';
import UI5Dialog from '@ui5/webcomponents/dist/Dialog';
import React, { ReactNode, RefForwardingComponent, RefObject, useEffect, useRef } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';

export interface DialogPropTypes extends WithWebComponentPropTypes {
  initialFocus?: string; // @generated
  hideHeader?: boolean; // @generated
  headerText?: string; // @generated
  stretch?: boolean; // @generated
  onBeforeOpen?: (event: Event) => void; // @generated
  onAfterOpen?: (event: Event) => void; // @generated
  onBeforeClose?: (event: Event) => void; // @generated
  onAfterClose?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  footer?: ReactNode; // @generated
  content?: ReactNode | ReactNode[];
  open?: boolean;
}

export interface Ui5DialogDomRef extends Ui5DomRef {
  open: () => void;
  close: () => void;
}

const InnerDialog: RefForwardingComponent<Ui5DomRef, DialogPropTypes> = withWebComponent<DialogPropTypes>(UI5Dialog);

const Dialog = React.forwardRef((props: DialogPropTypes, dialogRef: RefObject<Ui5DialogDomRef>) => {
  const localDialogRef: RefObject<Ui5DialogDomRef> = useRef(null);

  const getDialogRef = () => dialogRef || localDialogRef;

  const setDialogOpen = (open) => {
    if (!getDialogRef().current || !getDialogRef().current.open) {
      return;
    }
    return open ? getDialogRef().current.open() : getDialogRef().current.close();
  };

  useEffect(() => {
    setDialogOpen(props.open);
  }, [props.open]);

  return <InnerDialog {...props} ref={getDialogRef()} />;
});

Dialog.defaultProps = {
  initialFocus: null, // @generated
  headerText: '' // @generated
};

Dialog.displayName = 'Dialog';

export { Dialog };
