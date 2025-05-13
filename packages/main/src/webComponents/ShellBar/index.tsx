'use client';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import type {
  ShellBarAccessibilityAttributes,
  ShellBarContentItemVisibilityChangeEventDetail,
  ShellBarLogoClickEventDetail,
  ShellBarMenuItemClickEventDetail,
  ShellBarNotificationsClickEventDetail,
  ShellBarProductSwitchClickEventDetail,
  ShellBarProfileClickEventDetail,
  ShellBarSearchButtonEventDetail,
  ShellBarSearchFieldToggleEventDetail,
} from '@ui5/webcomponents-fiori/dist/ShellBar.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ShellBarAttributes {
  /**
   * Defines additional accessibility attributes on different areas of the component.
   *
   * The accessibilityAttributes object has the following fields,
   * where each field is an object supporting one or more accessibility attributes:
   *
   * - **logo** - `logo.role` and `logo.name`.
   * - **notifications** - `notifications.expanded` and `notifications.hasPopup`.
   * - **profile** - `profile.expanded`, `profile.hasPopup` and `profile.name`.
   * - **product** - `product.expanded` and `product.hasPopup`.
   * - **search** - `search.hasPopup`.
   * - **overflow** - `overflow.expanded` and `overflow.hasPopup`.
   * - **branding** - `branding.name`.
   *
   * The accessibility attributes support the following values:
   *
   * - **role**: Defines the accessible ARIA role of the logo area.
   * Accepts the following string values: `button` or `link`.
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls,
   * is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`.
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element,
   * such as menu or dialog, that can be triggered by the button.
   *
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   * - **name**: Defines the accessible ARIA name of the area.
   * Accepts any string.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: ShellBarAccessibilityAttributes;

  /**
   * Disables the automatic search field expansion/collapse when the available space is not enough.
   *
   * **Note:** The `disableSearchCollapse` property is in an experimental state and is a subject to change.
   * @default false
   */
  disableSearchCollapse?: boolean;

  /**
   * Defines the visibility state of the search button.
   *
   * **Note:** The `hideSearchButton` property is in an experimental state and is a subject to change.
   * @default false
   */
  hideSearchButton?: boolean;

  /**
   * Defines the `notificationsCount`,
   * displayed in the notification icon top-right corner.
   * @default undefined
   */
  notificationsCount?: string | undefined;

  /**
   * Defines the `primaryTitle`.
   *
   * **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
   * @default undefined
   */
  primaryTitle?: string | undefined;

  /**
   * Defines the `secondaryTitle`.
   *
   * **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
   * @default undefined
   */
  secondaryTitle?: string | undefined;

  /**
   * Defines, if the notification icon would be displayed.
   * @default false
   */
  showNotifications?: boolean;

  /**
   * Defines, if the product switch icon would be displayed.
   * @default false
   */
  showProductSwitch?: boolean;

  /**
   * Defines, if the Search Field would be displayed when there is a valid `searchField` slot.
   *
   * **Note:** By default the Search Field is not displayed.
   * @default false
   */
  showSearchField?: boolean;
}

interface ShellBarDomRef extends Required<ShellBarAttributes>, Ui5DomRef {
  /**
   * Closes the overflow area.
   * Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event
   * @returns {void}
   */
  closeOverflow: () => void;

  /**
   * Returns the `search` icon DOM ref.
   *
   * **Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents-fiori**.
   * @returns {Promise<HTMLElement | null>} - The search icon DOM ref
   */
  getSearchButtonDomRef: () => Promise<HTMLElement | null>;

  /**
   * Returns the `logo` DOM ref.
   */
  readonly logoDomRef: HTMLElement | null;

  /**
   * Returns the `notifications` icon DOM ref.
   */
  readonly notificationsDomRef: HTMLElement | null;

  /**
   * Returns the `overflow` icon DOM ref.
   */
  readonly overflowDomRef: HTMLElement | null;

  /**
   * Returns the `product-switch` icon DOM ref.
   */
  readonly productSwitchDomRef: HTMLElement | null;

  /**
   * Returns the `profile` icon DOM ref.
   */
  readonly profileDomRef: HTMLElement | null;
}

interface ShellBarPropTypes
  extends ShellBarAttributes,
    Omit<
      CommonProps,
      | keyof ShellBarAttributes
      | 'assistant'
      | 'children'
      | 'content'
      | 'logo'
      | 'menuItems'
      | 'profile'
      | 'searchField'
      | 'startButton'
      | 'onContentItemVisibilityChange'
      | 'onLogoClick'
      | 'onMenuItemClick'
      | 'onNotificationsClick'
      | 'onProductSwitchClick'
      | 'onProfileClick'
      | 'onSearchButtonClick'
      | 'onSearchFieldToggle'
    > {
  /**
   * Defines the assistant slot.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="assistant"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   */
  assistant?: UI5WCSlotsNode;

  /**
   * Defines the `ShellBar` additional items.
   *
   * **Note:**
   * You can use the `<ShellBarItem></ShellBarItem>`.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Define the items displayed in the content area.
   *
   * Use the `data-hide-order` attribute with numeric value to specify the order of the items to be hidden when the space is not enough.
   * Lower values will be hidden first.
   *
   * **Note:** The `content` slot is in an experimental state and is a subject to change.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="content"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   */
  content?: UI5WCSlotsNode;

  /**
   * Defines the logo of the `ShellBar`.
   * For example, you can use `ui5-avatar` or `img` elements as logo.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="logo"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  logo?: UI5WCSlotsNode;

  /**
   * Defines the items displayed in menu after a click on a start button.
   *
   * **Note:** You can use the  `<ui5-li></ui5-li>` and its ancestors.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="menuItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  menuItems?: UI5WCSlotsNode;

  /**
   * You can pass `ui5-avatar` to set the profile image/icon.
   * If no profile slot is set - profile will be excluded from actions.
   *
   * **Note:** We recommend not using the `size` attribute of `ui5-avatar` because
   * it should have specific size by design in the context of `ShellBar` profile.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="profile"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  profile?: UI5WCSlotsNode;

  /**
   * Defines the `ui5-input`, that will be used as a search field.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="searchField"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  searchField?: UI5WCSlotsNode;

  /**
   * Defines a `ui5-button` in the bar that will be placed in the beginning.
   * We encourage this slot to be used for a menu button.
   * It gets overstyled to match ShellBar's styling.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="startButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startButton?: UI5WCSlotsNode;
  /**
   * Fired, when an item from the content slot is hidden or shown.
   * **Note:** The `content-item-visibility-change` event is in an experimental state and is a subject to change.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onContentItemVisibilityChange?: (
    event: Ui5CustomEvent<ShellBarDomRef, ShellBarContentItemVisibilityChangeEventDetail>,
  ) => void;

  /**
   * Fired, when the logo is activated.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onLogoClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarLogoClickEventDetail>) => void;

  /**
   * Fired, when a menu item is activated
   *
   * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onMenuItemClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarMenuItemClickEventDetail>) => void;

  /**
   * Fired, when the notification icon is activated.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onNotificationsClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarNotificationsClickEventDetail>) => void;

  /**
   * Fired, when the product switch icon is activated.
   *
   * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onProductSwitchClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarProductSwitchClickEventDetail>) => void;

  /**
   * Fired, when the profile slot is present.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onProfileClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarProfileClickEventDetail>) => void;

  /**
   * Fired, when the search button is activated.
   *
   * **Note:** You can prevent expanding/collapsing of the search field by calling `event.preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onSearchButtonClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarSearchButtonEventDetail>) => void;

  /**
   * Fired, when the search field is expanded or collapsed.
   *
   * **Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSearchFieldToggle?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarSearchFieldToggleEventDetail>) => void;
}

/**
 * The `ShellBar` is meant to serve as an application header
 * and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.
 *
 * ### Stable DOM Refs
 *
 * You can use the following stable DOM refs for the `ShellBar`:
 *
 * - logo
 * - notifications
 * - overflow
 * - profile
 * - product-switch
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ShellBar = withWebComponent<ShellBarPropTypes, ShellBarDomRef>(
  'ui5-shellbar',
  ['accessibilityAttributes', 'notificationsCount', 'primaryTitle', 'secondaryTitle'],
  ['disableSearchCollapse', 'hideSearchButton', 'showNotifications', 'showProductSwitch', 'showSearchField'],
  ['assistant', 'content', 'logo', 'menuItems', 'profile', 'searchField', 'startButton'],
  [
    'content-item-visibility-change',
    'logo-click',
    'menu-item-click',
    'notifications-click',
    'product-switch-click',
    'profile-click',
    'search-button-click',
    'search-field-toggle',
  ],
);

ShellBar.displayName = 'ShellBar';

export { ShellBar };
export type { ShellBarDomRef, ShellBarPropTypes };
