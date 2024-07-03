'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface SideNavigationSubItemAttributes {
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
   * Defines the link target URI. Supports standard hyperlink behavior.
   * If a JavaScript action should be triggered,
   * this should not be set, but instead an event handler
   * for the `click` event should be registered.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  href?: string | undefined;

  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines whether the item is selected
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the component target.
   *
   * **Notes:**
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **This property must only be used when the `href` property is set.**
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  target?: string | undefined;

  /**
   * Defines the text of the item.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * A tooltip attribute should be provided, in order to represent meaning/function, when the component is collapsed(icon only is visualized).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  tooltip?: string | undefined;
}

interface SideNavigationSubItemDomRef extends Required<SideNavigationSubItemAttributes>, Ui5DomRef {}

interface SideNavigationSubItemPropTypes
  extends SideNavigationSubItemAttributes,
    Omit<CommonProps, keyof SideNavigationSubItemAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a
   * click/tap or by using the [Enter] or [Space] keys.
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationSubItemDomRef>) => void;
}

/**
 * Represents a single navigation action within `SideNavigationItem`.
 * The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const SideNavigationSubItem = withWebComponent<SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef>(
  'ui5-side-navigation-sub-item',
  ['href', 'icon', 'target', 'text', 'tooltip'],
  ['disabled', 'selected'],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js')
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

export { SideNavigationSubItem };
export type { SideNavigationSubItemDomRef, SideNavigationSubItemPropTypes };
