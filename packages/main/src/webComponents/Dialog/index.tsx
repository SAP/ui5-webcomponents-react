'use client';

import '@ui5/webcomponents/dist/Dialog.js';
import type { PopupBeforeCloseEventDetail } from '@ui5/webcomponents/dist/Popup.js';
import type PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface DialogAttributes {
  /**
   * Defines the accessible name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the IDs of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   */
  accessibleNameRef?: string;

  /**
   * Allows setting a custom role.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default "Dialog"
   */
  accessibleRole?: PopupAccessibleRole | keyof typeof PopupAccessibleRole;

  /**
   * Determines whether the component is draggable.
   * If this property is set to true, the Dialog will be draggable by its header.
   *
   * **Note:** The component can be draggable only in desktop mode.
   *
   * **Note:** This property overrides the default HTML "draggable" attribute native behavior.
   * When "draggable" is set to true, the native browser "draggable"
   * behavior is prevented and only the Dialog custom logic ("draggable by its header") works.
   * @default false
   */
  draggable?: boolean;

  /**
   * Defines the header text.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   */
  headerText?: string;

  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;

  /**
   * Indicates if the element is open
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines if the focus should be returned to the previously focused element,
   * when the popup closes.
   * @default false
   */
  preventFocusRestore?: boolean;

  /**
   * Configures the component to be resizable.
   * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
   * In RTL languages, the resize handle will be placed in the bottom left corner.
   *
   * **Note:** The component can be resizable only in desktop mode.
   *
   * **Note:** Upon resizing, externally defined height and width styling will be ignored.
   * @default false
   */
  resizable?: boolean;

  /**
   * Defines the state of the `Dialog`.
   *
   * **Note:** If `"Error"` and `"Warning"` state is set, it will change the
   * accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.
   * @default "None"
   */
  state?: ValueState | keyof typeof ValueState;

  /**
   * Determines whether the component should be stretched to fullscreen.
   *
   * **Note:** The component will be stretched to approximately
   * 90% of the viewport.
   * @default false
   */
  stretch?: boolean;
}

interface DialogDomRef extends Required<DialogAttributes>, Ui5DomRef {
  /**
   * Focuses the element denoted by `initialFocus`, if provided,
   * or the first focusable element otherwise.
   * @returns {Promise<void>} - Promise that resolves when the focus is applied
   */
  applyFocus: () => Promise<void>;

  /**
   * Closes the popup.
   * @returns {void}
   */
  close: () => void;

  /**
   * Tells if the component is opened
   * @returns {boolean}
   */
  isOpen: () => boolean;

  /**
   * Shows the dialog.
   * @param {boolean} [preventInitialFocus] - Prevents applying the focus inside the popup
   * @returns {Promise<void>} - Resolves when the dialog is open
   */
  show: (preventInitialFocus?: boolean) => Promise<void>;
}

interface DialogPropTypes
  extends DialogAttributes,
    Omit<
      CommonProps,
      | keyof DialogAttributes
      | 'children'
      | 'footer'
      | 'header'
      | 'onAfterClose'
      | 'onAfterOpen'
      | 'onBeforeClose'
      | 'onBeforeOpen'
    > {
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the footer HTML Element.
   *
   * **Note:** When a `ui5-bar` is used in the footer, you should remove the default dialog's paddings.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="footer"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footer?: UI5WCSlotsNode;

  /**
   * Defines the header HTML Element.
   *
   * **Note:** When a `ui5-bar` is used in the header, you should remove the default dialog's paddings.
   *
   * **Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer.
   * `accessibleName` should be used.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
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
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onBeforeClose?: (event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void;

  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onBeforeOpen?: (event: Ui5CustomEvent<DialogDomRef>) => void;
}

/**
 * The `Dialog` component is used to temporarily display some information in a
 * size-limited window in front of the regular app screen.
 * It is used to prompt the user for an action or a confirmation.
 * The `Dialog` interrupts the current app processing as it is the only focused UI element and
 * the main screen is dimmed/blocked.
 * The dialog combines concepts known from other technologies where the windows have
 * names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
 *
 * The `Dialog` is modal, which means that an user action is required before it is possible to return to the parent window.
 * To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
 * The content of the `Dialog` is fully customizable.
 *
 * ### Structure
 * A `Dialog` consists of a header, content, and a footer for action buttons.
 * The `Dialog` is usually displayed at the center of the screen.
 * Its position can be changed by the user. To enable this, you need to set the property `draggable` accordingly.
 *
 *
 * ### Responsive Behavior
 * The `stretch` property can be used to stretch the
 * `Dialog` on full screen.
 *
 * **Note:** When a `ui5-bar` is used in the header or in the footer, you should remove the default dialog's paddings.
 *
 * For more information see the sample "Bar in Header/Footer".
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * When the `Dialog` has the `draggable` property set to `true` and the header is focused, the user can move the dialog
 * with the following keyboard shortcuts:
 *
 * - [Up] or [Down] arrow keys - Move the dialog up/down.
 * - [Left] or [Right] arrow keys - Move the dialog left/right.
 *
 * #### Resizing
 * When the `Dialog` has the `resizable` property set to `true` and the header is focused, the user can change the size of the dialog
 * with the following keyboard shortcuts:
 *
 * - [Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog.
 * - [Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog.
 *
 *
 *
 * **Note:** We recommend placing popup-like components (`Dialog` and `Popover`)
 * outside any other components. Preferably, the popup-like components should be placed
 * in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
 * the position and/or z-index management of the popup-like components.
 *
 * **Note:** We don't recommend nesting popup-like components (`Dialog`, `Popover`).
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Dialog = withWebComponent<DialogPropTypes, DialogDomRef>(
  'ui5-dialog',
  ['accessibleName', 'accessibleNameRef', 'accessibleRole', 'headerText', 'initialFocus', 'state'],
  ['draggable', 'open', 'preventFocusRestore', 'resizable', 'stretch'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open'],
  () => import('@ui5/webcomponents/dist/Dialog.js')
);

Dialog.displayName = 'Dialog';

export { Dialog };
export type { DialogDomRef, DialogPropTypes };
