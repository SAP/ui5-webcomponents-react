'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ProductSwitchItemAttributes {
  /**
   * Defines the icon to be displayed as a graphical element within the component.
   *
   * Example:
   *
   * `<ProductSwitchItem icon="palette">`
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the subtitle of the component.
   * @default undefined
   */
  subtitleText?: string | undefined;

  /**
   * Defines a target where the `targetSrc` content must be open.
   *
   * Available options are:
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **Note:** By default target will be open in the same frame as it was clicked.
   * @default undefined
   */
  target?: string | undefined;

  /**
   * Defines the component target URI. Supports standard hyperlink behavior.
   * @default undefined
   */
  targetSrc?: string | undefined;

  /**
   * Defines the title of the component.
   * @default undefined
   */
  titleText?: string | undefined;
}

interface ProductSwitchItemDomRef extends Required<ProductSwitchItemAttributes>, Ui5DomRef {}

interface ProductSwitchItemPropTypes
  extends ProductSwitchItemAttributes,
    Omit<CommonProps, keyof ProductSwitchItemAttributes | 'onClick'> {
  /**
   * Fired when the `ProductSwitchItem` is activated either with a
   * click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<ProductSwitchItemDomRef>) => void;
}

/**
 * The `ProductSwitchItem` web component represents the items displayed in the
 * `ProductSwitch` web component.
 *
 * **Note:** `ProductSwitchItem` is not supported when used outside of `ProductSwitch`.
 *
 * ### Keyboard Handling
 * The `ProductSwitch` provides advanced keyboard handling.
 * When focused, the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Space] / [Enter] or [Return] - Trigger `ui5-click` event
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
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
export type { ProductSwitchItemDomRef, ProductSwitchItemPropTypes };
