'use client';

import '@ui5/webcomponents-fiori/dist/UserMenuItemGroup.js';
import type MenuItemGroupCheckMode from '@ui5/webcomponents/dist/types/MenuItemGroupCheckMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserMenuItemGroupAttributes {
  /**
   * Defines the component's check mode.
   * @default "None"
   */
  checkMode?: MenuItemGroupCheckMode | keyof typeof MenuItemGroupCheckMode;
}

interface UserMenuItemGroupDomRef extends Required<UserMenuItemGroupAttributes>, Ui5DomRef {}

interface UserMenuItemGroupPropTypes
  extends UserMenuItemGroupAttributes,
    Omit<CommonProps, keyof UserMenuItemGroupAttributes | 'children'> {
  /**
   * Defines the items of this component.
   * **Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.
 * Items belonging to the same group should be wrapped by a `UserMenuItemGroup`.
 * Each group can have an `itemCheckMode` property, which defines the check mode for the items within the group.
 * The possible values for `itemCheckMode` are:
 * - 'None' (default) - no items can be checked
 * - 'Single' - Only one item can be checked at a time
 * - 'Multiple' - Multiple items can be checked simultaneously
 *
 * **Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.
 * If multiple items are marked as checked, the last checked item will take precedence.
 *
 * ### Usage
 *
 * `UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.
 * The items are addeed to the group's `items` slot.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserMenuItemGroup = withWebComponent<UserMenuItemGroupPropTypes, UserMenuItemGroupDomRef>(
  'ui5-user-menu-item-group',
  ['checkMode'],
  [],
  [],
  [],
);

UserMenuItemGroup.displayName = 'UserMenuItemGroup';

export { UserMenuItemGroup };
export type { UserMenuItemGroupDomRef, UserMenuItemGroupPropTypes };
