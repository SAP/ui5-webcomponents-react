import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Dialog from '@ui5/webcomponents/dist/Dialog';
import React, { FC, ReactNode, RefForwardingComponent, RefObject, useEffect } from 'react';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface DialogPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines whether the <code>ui5-dialog</code> should be stretched to fullscreen. <br><br> <b>Note:</b> The <code>ui5-dialog</code> will be stretched to aproximetly 90% of the viewport.
   */
  stretch?: boolean;
  /**
   * Defines the header text. <br><br> <b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.
   */
  headerText?: string;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines the header HTML Element.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the footer HTML Element.
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the content of the Web Component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed.
   */
  onAfterClose?: (event: CustomEvent<{}>) => void;
  /**
   * Fired after the component is opened.
   */
  onAfterOpen?: (event: CustomEvent<{}>) => void;
  /**
   * Fired before the component is closed.
   */
  onBeforeClose?: (event: CustomEvent<{ escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened.
   */
  onBeforeOpen?: (event: CustomEvent<{}>) => void;
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
  initialFocus: null,
  headerText: ''
};

Dialog.displayName = 'Dialog';

export { Dialog };
