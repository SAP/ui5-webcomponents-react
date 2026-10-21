'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ProductSwitchAttributes {}

interface ProductSwitchDomRef extends Required<ProductSwitchAttributes>, Ui5DomRef {}

interface ProductSwitchPropTypes extends ProductSwitchAttributes, Omit<CommonProps, 'children'> {
  /**
   * Defines the items of the `ProductSwitch`.
   *
   * __Supported Node Type/s:__ `Array<IProductSwitchItem>`
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ProductSwitch` is an SAP Fiori specific web component that is used in `ShellBar`
 * and allows the user to easily switch between products.
 *
 * ### Keyboard Handling
 * The `ProductSwitch` provides advanced keyboard handling.
 * When focused, the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Tab] - Move focus to the next interactive element after the `ProductSwitch`
 * - [Up] or [Down] - Navigates up and down the items
 * - [Left] or [Right] - Navigates left and right the items
 *
 *
 *
 * `import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";` (for `ProductSwitchItem`)
 *
 * __Note:__ This is a UI5 Web Component! [ProductSwitch UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ProductSwitch) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 */
const ProductSwitch = withWebComponent<ProductSwitchPropTypes, ProductSwitchDomRef>(
  'ui5-product-switch',
  [],
  [],
  [],
  [],
);

ProductSwitch.displayName = 'ProductSwitch';

export { ProductSwitch };
export type { ProductSwitchDomRef, ProductSwitchPropTypes };
