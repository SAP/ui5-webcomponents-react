'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
import type { ReactNode } from 'react';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SideNavigationItemAttributes {
  /**
   * Defines if the item is expanded
   */
  expanded?: boolean;
  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the subitem is selected
   */
  selected?: boolean;
  /**
   * Defines the text of the item.
   */
  text?: string;
  /**
   * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `onClick` event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.
   */
  wholeItemToggleable?: boolean;
}

export interface SideNavigationItemDomRef extends SideNavigationItemAttributes, Ui5DomRef {}

export interface SideNavigationItemPropTypes extends SideNavigationItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Defines nested items by passing `SideNavigationSubItem` to the default slot.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationItemDomRef>) => void;
}

/**
 * The `SideNavigationItem` is used within `SideNavigation` only. Via the `SideNavigationItem` you control the content of the `SideNavigation`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SideNavigationItem = withWebComponent<SideNavigationItemPropTypes, SideNavigationItemDomRef>(
  'ui5-side-navigation-item',
  ['icon', 'text'],
  ['expanded', 'selected', 'wholeItemToggleable'],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationItem.js')
);

SideNavigationItem.displayName = 'SideNavigationItem';

export { SideNavigationItem };
