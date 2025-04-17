'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsDialog.js';
import type { UserSettingsItemSelectEventDetail } from '@ui5/webcomponents-fiori/dist/UserSettingsDialog.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserSettingsDialogAttributes {
  /**
   * Defines the headerText of the item.
   * @default undefined
   */
  headerText?: string | undefined;

  /**
   * Defines, if the User Settings Dialog is opened.
   * @default false
   */
  open?: boolean;

  /**
   * Defines if the Search Field would be displayed.
   *
   * **Note:** By default the Search Field is not displayed.
   * @default false
   */
  showSearchField?: boolean;
}

interface UserSettingsDialogDomRef extends Required<UserSettingsDialogAttributes>, Ui5DomRef {}

interface UserSettingsDialogPropTypes
  extends UserSettingsDialogAttributes,
    Omit<
      CommonProps,
      | keyof UserSettingsDialogAttributes
      | 'children'
      | 'fixedItems'
      | 'onBeforeClose'
      | 'onClose'
      | 'onOpen'
      | 'onSelectionChange'
    > {
  /**
   * Defines the user settings items.
   *
   * **Note:**  If no setting item is set as `selected`, the first one will be selected.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the fixed user settings items.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="fixedItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  fixedItems?: UI5WCSlotsNode;
  /**
   * Fired before the settings dialog is closed.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onBeforeClose?: (event: Ui5CustomEvent<UserSettingsDialogDomRef>) => void;

  /**
   * Fired when a settings dialog is closed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<UserSettingsDialogDomRef>) => void;

  /**
   * Fired when a settings dialog is open.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onOpen?: (event: Ui5CustomEvent<UserSettingsDialogDomRef>) => void;

  /**
   * Fired when an item is selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onSelectionChange?: (event: Ui5CustomEvent<UserSettingsDialogDomRef, UserSettingsItemSelectEventDetail>) => void;
}

/**
 * The `UserSettingsDialog` is an SAP Fiori-specific web component used in the `UserMenu`.
 * It allows the user to easily view information and settings for an account.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserSettingsDialog = withWebComponent<UserSettingsDialogPropTypes, UserSettingsDialogDomRef>(
  'ui5-user-settings-dialog',
  ['headerText'],
  ['open', 'showSearchField'],
  ['fixedItems'],
  ['before-close', 'close', 'open', 'selection-change']
);

UserSettingsDialog.displayName = 'UserSettingsDialog';

export { UserSettingsDialog };
export type { UserSettingsDialogDomRef, UserSettingsDialogPropTypes };
