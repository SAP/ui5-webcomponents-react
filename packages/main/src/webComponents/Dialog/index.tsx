'use client';

import '@ui5/webcomponents/dist/Dialog.js';
import type { DialogBeforeCloseEventDetail } from '@ui5/webcomponents/dist/Dialog.js';
import type { ReactNode } from 'react';
import { ValueState, PopupAccessibleRole } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface DialogAttributes {
  /**
   * Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.
   *
   * **Note:** The component can be draggable only in desktop mode.
   *
   * **Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.
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
   * Defines the state of the `Dialog`.
   *
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.
   *
   * **Note:** If `"Error"` and `"Warning"` state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.
   */
  state?: ValueState | keyof typeof ValueState;
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
   * Allows setting a custom role. Available options are:
   *
   * *   `Dialog`
   * *   `None`
   * *   `AlertDialog`
   */
  accessibleRole?: PopupAccessibleRole | keyof typeof PopupAccessibleRole;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Indicates if the element is open
   */
  open?: boolean;
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
   * Closes the popup.
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
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="footer"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footer?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the header HTML Element.
   *
   * **Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer. `accessibleName` should be used.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<DialogDomRef>) => void;
  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<DialogDomRef>) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<DialogDomRef, DialogBeforeCloseEventDetail>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<DialogDomRef>) => void;
}

/**
 * The `Dialog` component is used to temporarily display some information in a size-limited window in front of the regular app screen. It is used to prompt the user for an action or a confirmation. The `Dialog` interrupts the current app processing as it is the only focused UI element and the main screen is dimmed/blocked. The dialog combines concepts known from other technologies where the windows have names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
 *
 * The `Dialog` is modal, which means that an user action is required before it is possible to return to the parent window. To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other. The content of the `Dialog` is fully customizable.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Dialog" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Dialog = withWebComponent<DialogPropTypes, DialogDomRef>(
  'ui5-dialog',
  ['headerText', 'state', 'accessibleName', 'accessibleNameRef', 'accessibleRole', 'initialFocus'],
  ['draggable', 'resizable', 'stretch', 'open', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open'],
  () => import('@ui5/webcomponents/dist/Dialog.js')
);

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  state: ValueState.None,
  accessibleRole: PopupAccessibleRole.Dialog
};

export { Dialog };
