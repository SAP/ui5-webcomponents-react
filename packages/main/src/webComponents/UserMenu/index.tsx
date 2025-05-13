'use client';

import '@ui5/webcomponents-fiori/dist/UserMenu.js';
import type {
  UserMenuItemClickEventDetail,
  UserMenuOtherAccountClickEventDetail,
} from '@ui5/webcomponents-fiori/dist/UserMenu.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserMenuAttributes {
  /**
   * Defines if the User Menu is opened.
   * @default false
   */
  open?: boolean;

  /**
   * Defines the ID or DOM Reference of the element at which the user menu is shown.
   * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
   * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
   * @default undefined
   */
  opener?: HTMLElement | string | undefined;

  /**
   * Defines if the User Menu shows the Edit Accounts option.
   * @default false
   */
  showEditAccounts?: boolean;

  /**
   * Defines if the User menu shows edit button.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  showEditButton?: boolean;

  /**
   * Defines if the User Menu shows the Manage Account option.
   * @default false
   */
  showManageAccount?: boolean;

  /**
   * Defines if the User Menu shows the Other Accounts option.
   * @default false
   */
  showOtherAccounts?: boolean;
}

interface UserMenuDomRef extends Required<UserMenuAttributes>, Ui5DomRef {}

interface UserMenuPropTypes
  extends UserMenuAttributes,
    Omit<
      CommonProps,
      | keyof UserMenuAttributes
      | 'accounts'
      | 'children'
      | 'onAvatarClick'
      | 'onChangeAccount'
      | 'onClose'
      | 'onEditAccountsClick'
      | 'onItemClick'
      | 'onManageAccountClick'
      | 'onOpen'
      | 'onSignOutClick'
    > {
  /**
   * Defines the user accounts.
   *
   * **Note:** If one item is used, it will be shown as the selected one. If more than one item is used, the first one will be shown as selected unless
   * there is an item with `selected` property set to `true`.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="accounts"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  accounts?: UI5WCSlotsNode;

  /**
   * Defines the menu items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the account avatar is selected.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onAvatarClick?: (event: Ui5CustomEvent<UserMenuDomRef>) => void;

  /**
   * Fired when the account is switched to a different one.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onChangeAccount?: (event: Ui5CustomEvent<UserMenuDomRef, UserMenuOtherAccountClickEventDetail>) => void;

  /**
   * Fired when a user menu is close.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<UserMenuDomRef>) => void;

  /**
   * Fired when the "Edit Accounts" button is selected.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onEditAccountsClick?: (event: Ui5CustomEvent<UserMenuDomRef>) => void;

  /**
   * Fired when a menu item is selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onItemClick?: (event: Ui5CustomEvent<UserMenuDomRef, UserMenuItemClickEventDetail>) => void;

  /**
   * Fired when the "Manage Account" button is selected.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onManageAccountClick?: (event: Ui5CustomEvent<UserMenuDomRef>) => void;

  /**
   * Fired when a user menu is open.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onOpen?: (event: Ui5CustomEvent<UserMenuDomRef>) => void;

  /**
   * Fired when the "Sign Out" button is selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onSignOutClick?: (event: Ui5CustomEvent<UserMenuDomRef>) => void;
}

/**
 * The `UserMenu` is an SAP Fiori specific web component that is used in `ShellBar`
 * and allows the user to easily see information and settings for the current user and all other logged in accounts.
 *
 *
 *
 * `import "@ui5/webcomponents-fiori/dist/UserMenuItem.js";` (for `UserMenuItem`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserMenu = withWebComponent<UserMenuPropTypes, UserMenuDomRef>(
  'ui5-user-menu',
  ['opener'],
  ['open', 'showEditAccounts', 'showEditButton', 'showManageAccount', 'showOtherAccounts'],
  ['accounts'],
  [
    'avatar-click',
    'change-account',
    'close',
    'edit-accounts-click',
    'item-click',
    'manage-account-click',
    'open',
    'sign-out-click',
  ],
);

UserMenu.displayName = 'UserMenu';

export { UserMenu };
export type { UserMenuDomRef, UserMenuPropTypes };
