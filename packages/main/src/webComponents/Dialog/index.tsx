import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Dialog';
import { FC, ReactNode } from 'react';

export interface DialogPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines whether the `Dialog` is draggable. If this property is set to true, the Dialog will be draggable by its header.
   *
   * **Note:** The `Dialog` can be draggable only in desktop mode.
   */
  draggable?: boolean;
  /**
   * Defines the header text.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   */
  headerText?: string;
  /**
   * Configures the `Dialog` to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.
   *
   * **Note:** The `Dialog` can be resizable only in desktop mode.
   * **Note:** Upon resizing, externally defined height and width styling will be ignored.
   */
  resizable?: boolean;
  /**
   * Determines whether the `Dialog` should be stretched to fullscreen.
   *
   * **Note:** The `Dialog` will be stretched to approximately 90% of the viewport.
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
  onAfterClose?: (event: CustomEvent) => void;
  /**
   * Fired after the component is opened. This event does not bubble.
   */
  onAfterOpen?: (event: CustomEvent) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. This event does not bubble.
   */
  onBeforeClose?: (event: CustomEvent<{ escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.
   */
  onBeforeOpen?: (event: CustomEvent) => void;
}

/**
 * The `Dialog` component is used to temporarily display some information in a size-limited window in front of the regular app screen. It is used to prompt the user for an action or a confirmation. The `Dialog` interrupts the current app processing as it is the only focused UI element and the main screen is dimmed/blocked. The dialog combines concepts known from other technologies where the windows have names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
 *
 * The `Dialog` is modal, which means that user action is required before returning to the parent window is possible. The content of the `Dialog` is fully customizable.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Dialog" target="_blank">UI5 Web Components Playground</a>
 */
const Dialog: FC<DialogPropTypes> = withWebComponent<DialogPropTypes>(
  'ui5-dialog',
  ['headerText', 'initialFocus'],
  ['draggable', 'resizable', 'stretch', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  draggable: false,
  resizable: false,
  stretch: false,
  preventFocusRestore: false
};

export { Dialog };
