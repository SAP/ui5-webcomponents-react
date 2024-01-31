'use client';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import type {
  ShellBarAccessibilityAttributes,
  ShellBarAccessibilityRoles,
  ShellBarAccessibilityTexts,
  ShellBarCoPilotClickEventDetail,
  ShellBarLogoClickEventDetail,
  ShellBarMenuItemClickEventDetail,
  ShellBarNotificationsClickEventDetail,
  ShellBarProductSwitchClickEventDetail,
  ShellBarProfileClickEventDetail
} from '@ui5/webcomponents-fiori/dist/ShellBar.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface ShellBarAttributes {
  /**
   * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
   */
  notificationsCount?: string;

  /**
   * Defines the `primaryTitle`.
   *
   * **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
   */
  primaryTitle?: string;

  /**
   * Defines the `secondaryTitle`.
   *
   * **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
   */
  secondaryTitle?: string;

  /**
   * Defines, if the product CoPilot icon would be displayed.
   * **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
   * @default false
   */
  showCoPilot?: boolean;

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
   * **Note:** By default the Search Field is not displayed.
   * @default false
   */
  showSearchField?: boolean;
}

interface ShellBarDomRef extends Required<ShellBarAttributes>, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values for customization depending on the use case. It supports the following fields:
   *
   * *   `expanded`: Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
   *     *   `true`
   *     *   `false`
   * *   `hasPopup`: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values:
   *     *   `Dialog`
   *     *   `Grid`
   *     *   `ListBox`
   *     *   `Menu`
   *     *   `Tree`
   */
  accessibilityAttributes: ShellBarAccessibilityAttributes;

  /**
   * An object of strings that defines additional accessibility roles for further customization. It supports the following fields: - `logoRole`: the accessibility role for the `logo`
   */
  accessibilityRoles: ShellBarAccessibilityRoles;

  /**
   * An object of strings that defines several additional accessibility texts for even further customization. It supports the following fields: - `profileButtonTitle`: defines the tooltip for the profile button - `logoTitle`: defines the tooltip for the logo
   */
  accessibilityTexts: ShellBarAccessibilityTexts;

  /**
   * Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event
   * @returns {void}
   */
  closeOverflow: () => void;

  /**
   * Returns the `copilot` DOM ref.
   */
  readonly copilotDomRef: HTMLElement | null;

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
      | 'onCoPilotClick'
      | 'onLogoClick'
      | 'onMenuItemClick'
      | 'onNotificationsClick'
      | 'onProductSwitchClick'
      | 'onProfileClick'
    > {
  /**
   * Defines the `ShellBar` aditional items.
   *
   * **Note:** You can use the  <ShellBarItem></ShellBarItem>.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the logo of the `ShellBar`. For example, you can use `ui5-avatar` or `img` elements as logo.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="logo"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  logo?: UI5WCSlotsNode;

  /**
   * Defines the items displayed in menu after a click on the primary title.
   *
   * **Note:** You can use the  <ui5-li></ui5-li> and its ancestors.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="menuItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  menuItems?: UI5WCSlotsNode;

  /**
   * You can pass `ui5-avatar` to set the profile image/icon. If no profile slot is set - profile will be excluded from actions. Note: We recommend not using the `size` attribute of `ui5-avatar` because it should have specific size by design in the context of `ShellBar` profile.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="profile"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  profile?: UI5WCSlotsNode;

  /**
   * Defines the `ui5-input`, that will be used as a search field.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="searchField"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  searchField?: UI5WCSlotsNode;

  /**
   * Defines a `ui5-button` in the bar that will be placed in the beginning. We encourage this slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="startButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startButton?: UI5WCSlotsNode;
  /**
   * Fired, when the notification icon is activated.
   */
  onNotificationsClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarNotificationsClickEventDetail>) => void;

  /**
   * Fired, when the profile slot is present.
   */
  onProfileClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarProfileClickEventDetail>) => void;

  /**
   * Fired, when the product switch icon is activated. **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
   */
  onProductSwitchClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarProductSwitchClickEventDetail>) => void;

  /**
   * Fired, when the logo is activated.
   */
  onLogoClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarLogoClickEventDetail>) => void;

  /**
   * Fired, when the co pilot is activated.
   */
  onCoPilotClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarCoPilotClickEventDetail>) => void;

  /**
   * Fired, when a menu item is activated **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
   */
  onMenuItemClick?: (event: Ui5CustomEvent<ShellBarDomRef, ShellBarMenuItemClickEventDetail>) => void;
}

/**
 * The `ShellBar` is meant to serve as an application header and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.
 *
 *
 * ### Stable DOM Refs
 *
 * You can use the following stable DOM refs for the `ShellBar`:
 *
 * *   logo
 * *   copilot
 * *   notifications
 * *   overflow
 * *   profile
 * *   product-switch
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 *
 * This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ShellBar = withWebComponent<ShellBarPropTypes, ShellBarDomRef>(
  'ui5-shellbar',
  ['notificationsCount', 'primaryTitle', 'secondaryTitle'],
  ['showCoPilot', 'showNotifications', 'showProductSwitch', 'showSearchField'],
  ['logo', 'menuItems', 'profile', 'searchField', 'startButton'],
  ['co-pilot-click', 'logo-click', 'menu-item-click', 'notifications-click', 'product-switch-click', 'profile-click'],
  () => import('@ui5/webcomponents-fiori/dist/ShellBar.js')
);

ShellBar.displayName = 'ShellBar';

export { ShellBar };
export type { ShellBarDomRef, ShellBarPropTypes };
