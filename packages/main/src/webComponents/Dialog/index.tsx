import '@ui5/webcomponents/dist/Dialog.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface DialogAttributes {
  /**
   * Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.
   *
   * **Note:** The component can be draggable only in desktop mode.
   */
  draggable?: boolean;
  /**
   * Defines the header text.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   */
  headerText?: string;
  /**
   * Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.
   *
   * **Note:** The component can be resizable only in desktop mode.
   * **Note:** Upon resizing, externally defined height and width styling will be ignored.
   */
  resizable?: boolean;
  /**
   * Determines whether the component should be stretched to fullscreen.
   *
   * **Note:** The component will be stretched to approximately 90% of the viewport.
   */
  stretch?: boolean;
  /**
   * Defines the accessible name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the IDs of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   */
  preventFocusRestore?: boolean;
}

export interface DialogDomRef extends DialogAttributes, Omit<Ui5DomRef, 'draggable'> {
  /**
   * Shows the dialog.
   * @param {boolean} [preventInitialFocus] - Prevents applying the focus inside the popup
   * @returns {Promise<void>} Resolves when the dialog is open
   */
  show: (preventInitialFocus?: boolean) => Promise<void>;
  /**
   * Focuses the element denoted by `initialFocus`, if provided, or the first focusable element otherwise.
   * @returns {Promise<void>} Promise that resolves when the focus is applied
   */
  applyFocus: () => Promise<void>;
  /**
   * Hides the block layer (for modal popups only)
   */
  close: () => void;
  /**
   * Tells if the component is opened
   * @returns {boolean}
   */
  isOpen: () => boolean;
}

export interface DialogPropTypes extends DialogAttributes, Omit<CommonProps, 'draggable'> {
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the header HTML Element.
   *
   * **Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer. `accessibleName` should be used.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<HTMLElement, { escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * The `Dialog` component is used to temporarily display some information in a size-limited window in front of the regular app screen. It is used to prompt the user for an action or a confirmation. The `Dialog` interrupts the current app processing as it is the only focused UI element and the main screen is dimmed/blocked. The dialog combines concepts known from other technologies where the windows have names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
 *
 * The `Dialog` is modal, which means that user action is required before returning to the parent window is possible. The content of the `Dialog` is fully customizable.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Dialog" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Dialog = withWebComponent<DialogPropTypes, DialogDomRef>(
  'ui5-dialog',
  ['headerText', 'accessibleName', 'accessibleNameRef', 'initialFocus'],
  ['draggable', 'resizable', 'stretch', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

Dialog.displayName = 'Dialog';

export { Dialog };
