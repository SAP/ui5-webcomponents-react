'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface SideNavigationSubItemAttributes {
  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered, this should not be set, but instead an event handler for the `click` event should be registered.
   */
  href?: string;

  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

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
   * *   `_self`
   * *   `_top`
   * *   `_blank`
   * *   `_parent`
   * *   `_search`
   *
   * **This property must only be used when the `href` property is set.**
   */
  target?: string;

  /**
   * Defines the text of the item.
   */
  text?: string;
}

interface SideNavigationSubItemDomRef extends SideNavigationSubItemAttributes, Ui5DomRef {}

interface SideNavigationSubItemPropTypes
  extends SideNavigationSubItemAttributes,
    Omit<CommonProps, keyof SideNavigationSubItemAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationSubItemDomRef>) => void;
}

/**
 * The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const SideNavigationSubItem = withWebComponent<SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef>(
  'ui5-side-navigation-sub-item',
  ['href', 'icon', 'target', 'text'],
  ['disabled', 'selected'],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js')
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

export { SideNavigationSubItem };
export type { SideNavigationSubItemDomRef, SideNavigationSubItemPropTypes };
