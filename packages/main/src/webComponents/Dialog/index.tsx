import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Dialog from '@ui5/webcomponents/dist/Dialog';
import React, { FC, ReactNode } from 'react';
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
   * Defines the content of the Web Component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the footer HTML Element.
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the header HTML Element.
   */
  header?: ReactNode | ReactNode[];
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
}

/**
 * <code>import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Dialog" target="_blank">UI5 Web Components Playground</a>
 */
const Dialog: FC<DialogPropTypes> = withWebComponent<DialogPropTypes>(UI5Dialog);

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  stretch: false,
  headerText: '',
  initialFocus: ''
};

export { Dialog };
