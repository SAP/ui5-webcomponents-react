'use client';

import '@ui5/webcomponents/dist/MenuItemGroup.js';
import type MenuItemGroupCheckMode from '@ui5/webcomponents/dist/types/MenuItemGroupCheckMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface MenuItemGroupAttributes {
  /**
   * Defines the component's check mode.
   * @default "None"
   */
  checkMode?: MenuItemGroupCheckMode | keyof typeof MenuItemGroupCheckMode;
}

interface MenuItemGroupDomRef extends Required<MenuItemGroupAttributes>, Ui5DomRef {}

interface MenuItemGroupPropTypes
  extends MenuItemGroupAttributes,
    Omit<CommonProps, keyof MenuItemGroupAttributes | 'children'> {
  /**
   * Defines the items of this component.
   * **Note:** The slot can hold any combination of components of type `MenuItem` or `MenuSeparator` or both.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `MenuItemGroup` component represents a group of items designed for use inside a `Menu`.
 * Items belonging to the same group should be wrapped by a `MenuItemGroup`.
 * Each group can have an `checkMode` property, which defines the check mode for the items within the group.
 * The possible values for `checkMode` are:
 * - 'None' (default) - no items can be checked
 * - 'Single' - Only one item can be checked at a time
 * - 'Multiple' - Multiple items can be checked simultaneously
 *
 * **Note:** If the `checkMode` property is set to 'Single', only one item can remain checked at any given time.
 * If multiple items are marked as checked, the last checked item will take precedence.
 *
 * ### Usage
 *
 * `MenuItemGroup` represents a collection of `MenuItem` components that can have the same check mode.
 * The items are addeed to the group's `items` slot.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents__.
 */
const MenuItemGroup = withWebComponent<MenuItemGroupPropTypes, MenuItemGroupDomRef>(
  'ui5-menu-item-group',
  ['checkMode'],
  [],
  [],
  [],
);

MenuItemGroup.displayName = 'MenuItemGroup';

export { MenuItemGroup };
export type { MenuItemGroupDomRef, MenuItemGroupPropTypes };
