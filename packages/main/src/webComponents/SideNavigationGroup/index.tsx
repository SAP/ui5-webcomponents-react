'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationGroup.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SideNavigationGroupAttributes {
  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines if the item is expanded
   * @default false
   */
  expanded?: boolean;

  /**
   * Defines the text of the item.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * A tooltip attribute should be provided, in order to represent meaning/function,
   * when the component is collapsed ("icon only" design is visualized) or the item text is truncated.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  tooltip?: string | undefined;
}

interface SideNavigationGroupDomRef extends Required<SideNavigationGroupAttributes>, Ui5DomRef {}

interface SideNavigationGroupPropTypes
  extends SideNavigationGroupAttributes,
    Omit<CommonProps, keyof SideNavigationGroupAttributes | 'children'> {
  /**
   * Defines nested items by passing `SideNavigationItem` to the default slot.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * Represents a group of navigation actions within `SideNavigation`.
 * The `SideNavigationGroup` can only be used inside a `SideNavigation`.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.24.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const SideNavigationGroup = withWebComponent<SideNavigationGroupPropTypes, SideNavigationGroupDomRef>(
  'ui5-side-navigation-group',
  ['text', 'tooltip'],
  ['disabled', 'expanded'],
  [],
  [],
);

SideNavigationGroup.displayName = 'SideNavigationGroup';

export { SideNavigationGroup };
export type { SideNavigationGroupDomRef, SideNavigationGroupPropTypes };
