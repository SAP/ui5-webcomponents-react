'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';
import type { ReactNode } from 'react';

interface ProductSwitchAttributes {}

interface ProductSwitchDomRef extends Required<ProductSwitchAttributes>, Ui5DomRef {}

interface ProductSwitchPropTypes extends ProductSwitchAttributes, Omit<CommonProps, 'children'> {
  /**
   * Defines the items of the `ProductSwitch`.
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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ProductSwitch = withWebComponent<ProductSwitchPropTypes, ProductSwitchDomRef>(
  'ui5-product-switch',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents-fiori/dist/ProductSwitch.js')
);

ProductSwitch.displayName = 'ProductSwitch';

export { ProductSwitch };
export type { ProductSwitchDomRef, ProductSwitchPropTypes };
