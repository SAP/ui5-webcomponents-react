import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Dialog from '@ui5/webcomponents/dist/Dialog';
import React, { FC, ReactNode, RefForwardingComponent, RefObject, useEffect } from 'react';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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

/**
 * <code>import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Dialog" target="_blank">UI5 Web Components Playground</a>
 */
const Dialog: FC<DialogPropTypes> = React.forwardRef(
  (props: DialogPropTypes, dialogRef: RefObject<Ui5DialogDomRef>) => {
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
  }
);

Dialog.defaultProps = {
  initialFocus: null, // @generated
  headerText: '' // @generated
};

Dialog.displayName = 'Dialog';

export { Dialog };
