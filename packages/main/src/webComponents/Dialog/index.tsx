import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Dialog';
import { FC, ReactNode } from 'react';

export interface DialogPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the header text. <br><br> <b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.
   */
  headerText?: string;
  /**
   * Determines whether the <code>Dialog</code> should be stretched to fullscreen. <br><br> <b>Note:</b> The <code>Dialog</code> will be stretched to aproximetly 90% of the viewport.
   */
  stretch?: boolean;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   */
  preventFocusRestore?: boolean;
  /**
   * Defines the content of the Popup.
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
   * Fired after the component is closed. This event does not bubble.
   */
  onAfterClose?: (event: CustomEvent<{}>) => void;
  /**
   * Fired after the component is opened. This event does not bubble.
   */
  onAfterOpen?: (event: CustomEvent<{}>) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. This event does not bubble.
   */
  onBeforeClose?: (event: CustomEvent<{ escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.
   */
  onBeforeOpen?: (event: CustomEvent<{}>) => void;
}

/**
 * The <code>Dialog</code> component is used to temporarily display some information in a size-limited window in front of
 the regular app screen. It is used to prompt the user for an action or a confirmation. The
 <code>Dialog</code> interrupts the current app processing as it is the only focused UI element and the main screen is
 dimmed/blocked. The dialog combines concepts known from other technologies where the windows have names such as dialog
 box, dialog window, pop-up, pop-up window, alert box, or message box. <br /><br />
 The <code>Dialog</code> is modal, which means that user action is required before returning to the parent window is
 possible. The content of the <code>Dialog</code> is fully customizable.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Dialog" target="_blank">UI5 Web Components Playground</a>
 */
const Dialog: FC<DialogPropTypes> = withWebComponent<DialogPropTypes>(
  'ui5-dialog',
  ['headerText', 'initialFocus'],
  ['stretch', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  stretch: false,
  preventFocusRestore: false
};

export { Dialog };
