'use client';

import '@ui5/webcomponents/dist/MenuItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface MenuItemAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the `additionalText`, displayed in the end of the menu item. **Note:** The additional text would not be displayed if the item has a submenu.
   */
  additionalText?: string;
  /**
   * Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding Menu popover. Note: If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.
   */
  busy?: boolean;
  /**
   * Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding Menu popover.
   */
  busyDelay?: number;
  /**
   * Defines whether `MenuItem` is in disabled state.
   *
   * **Note:** A disabled `MenuItem` is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * **\* Example:** See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether a visual separator should be rendered before the item.
   */
  startsSection?: boolean;
  /**
   * Defines the text of the tree item.
   */
  text?: string;
}

export interface MenuItemDomRef extends MenuItemAttributes, Ui5DomRef {}

export interface MenuItemPropTypes extends MenuItemAttributes, CommonProps {
  /**
   * Defines the items of this component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * `MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Menu)
 */
const MenuItem = withWebComponent<MenuItemPropTypes, MenuItemDomRef>(
  'ui5-menu-item',
  ['accessibleName', 'additionalText', 'busyDelay', 'icon', 'text'],
  ['busy', 'disabled', 'startsSection'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/MenuItem.js')
);

MenuItem.displayName = 'MenuItem';

MenuItem.defaultProps = {
  busyDelay: 1000
};

export { MenuItem };
