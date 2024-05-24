'use client';

import '@ui5/webcomponents/dist/MenuItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';
import type { ReactNode } from 'react';

interface MenuItemAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.
   */
  accessibleName?: string;

  /**
   * Defines the `additionalText`, displayed in the end of the menu item.
   *
   * **Note:** The additional text would not be displayed if the item has a submenu.
   *
   * **Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.
   */
  additionalText?: string;

  /**
   * Defines whether `MenuItem` is in disabled state.
   *
   * **Note:** A disabled `MenuItem` is noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon to be displayed as graphical element within the component.
   * The SAP-icons font provides numerous options.
   *
   * **Example:**
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
   *
   * **Note:** If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Defines whether a visual separator should be rendered before the item.
   * @default false
   */
  startsSection?: boolean;

  /**
   * Defines the text of the tree item.
   */
  text?: string;

  /**
   * Defines the text of the tooltip for the menu item.
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  tooltip?: string;
}

interface MenuItemDomRef extends Required<MenuItemAttributes>, Ui5DomRef {}

interface MenuItemPropTypes extends MenuItemAttributes, Omit<CommonProps, keyof MenuItemAttributes | 'children'> {
  /**
   * Defines the items of this component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * `MenuItem` is the item to use inside a `Menu`.
 * An arbitrary hierarchy structure can be represented by recursively nesting menu items.
 *
 * ### Usage
 *
 * `MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list,
 * and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use
 * `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.3.0) of __@ui5/webcomponents__.
 * @abstract
 */
const MenuItem = withWebComponent<MenuItemPropTypes, MenuItemDomRef>(
  'ui5-menu-item',
  ['accessibleName', 'additionalText', 'icon', 'loadingDelay', 'text', 'tooltip'],
  ['disabled', 'loading', 'startsSection'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/MenuItem.js')
);

MenuItem.displayName = 'MenuItem';

export { MenuItem };
export type { MenuItemDomRef, MenuItemPropTypes };
