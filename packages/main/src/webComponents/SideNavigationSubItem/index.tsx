'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SideNavigationSubItemAttributes {
  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the subitem is selected.
   */
  selected?: boolean;
  /**
   * Defines the text of the item.
   */
  text?: string;
}

export interface SideNavigationSubItemDomRef extends SideNavigationSubItemAttributes, Ui5DomRef {}

export interface SideNavigationSubItemPropTypes extends SideNavigationSubItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired when the component is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationSubItemDomRef>) => void;
}

/**
 * The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-SideNavigation)
 */
const SideNavigationSubItem = withWebComponent<SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef>(
  'ui5-side-navigation-sub-item',
  ['icon', 'text'],
  ['selected'],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js')
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

export { SideNavigationSubItem };
