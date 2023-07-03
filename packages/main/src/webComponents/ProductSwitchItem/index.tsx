'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ProductSwitchItemAttributes {
  /**
   * Defines the icon to be displayed as a graphical element within the component.
   *
   * Example:
   *
   * ProductSwitchItem icon="palette"
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the subtitle of the component.
   */
  subtitleText?: string;
  /**
   * Defines a target where the `targetSrc` content must be open.
   *
   * Available options are:
   *
   * *   `_self`
   * *   `_top`
   * *   `_blank`
   * *   `_parent`
   * *   `_search`
   */
  target?: string;
  /**
   * Defines the component target URI. Supports standard hyperlink behavior.
   */
  targetSrc?: string;
  /**
   * Defines the title of the component.
   */
  titleText?: string;
}

export interface ProductSwitchItemDomRef extends ProductSwitchItemAttributes, Ui5DomRef {}

export interface ProductSwitchItemPropTypes extends ProductSwitchItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired when the `ProductSwitchItem` is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<ProductSwitchItemDomRef>) => void;
}

/**
 * The `ProductSwitchItem` web component represents the items displayed in the `ProductSwitch` web component.
 *
 * **Note:** `ProductSwitchItem` is not supported when used outside of `ProductSwitch`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ProductSwitch" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const ProductSwitchItem = withWebComponent<ProductSwitchItemPropTypes, ProductSwitchItemDomRef>(
  'ui5-product-switch-item',
  ['icon', 'subtitleText', 'target', 'targetSrc', 'titleText'],
  [],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/ProductSwitchItem.js')
);

ProductSwitchItem.displayName = 'ProductSwitchItem';

export { ProductSwitchItem };
