'use client';

import '@ui5/webcomponents/dist/MenuItem.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
   * Defines whether `MenuItem` is in disabled state.
   *
   * **Note:** A disabled `MenuItem` is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * **\* Example:** See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Menu" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const MenuItem = withWebComponent<MenuItemPropTypes, MenuItemDomRef>(
  'ui5-menu-item',
  ['accessibleName', 'additionalText', 'icon', 'text'],
  ['disabled', 'startsSection'],
  [],
  []
);

MenuItem.displayName = 'MenuItem';

export { MenuItem };
