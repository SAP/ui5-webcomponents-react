import { Event, useConsolidatedRef } from '@ui5/webcomponents-react-base';
import UI5Dialog from '@ui5/webcomponents/dist/Dialog';
import React, { ReactNode, RefForwardingComponent, RefObject, useEffect, useRef } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';

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

const InnerDialog: RefForwardingComponent<Ui5DomRef, DialogPropTypes> = withWebComponent<DialogPropTypes>(UI5Dialog);

const Dialog = React.forwardRef((props: DialogPropTypes, dialogRef: RefObject<Ui5DialogDomRef>) => {
  const localDialogRef = useConsolidatedRef<Ui5DialogDomRef>(dialogRef);

  const setDialogOpen = (open) => {
    if (!localDialogRef.current || !localDialogRef.current.open) {
      return;
    }
    return open ? localDialogRef.current.open() : localDialogRef.current.close();
  };

  useEffect(() => {
    setDialogOpen(props.open);
  }, [props.open]);

  return <InnerDialog {...props} ref={localDialogRef} />;
});

Dialog.defaultProps = {
  initialFocus: null, // @generated
  headerText: '' // @generated
};

Dialog.displayName = 'Dialog';

export { Dialog };
