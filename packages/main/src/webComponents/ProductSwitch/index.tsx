'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ProductSwitchAttributes {}

interface ProductSwitchDomRef extends ProductSwitchAttributes, Ui5DomRef {}

interface ProductSwitchPropTypes extends ProductSwitchAttributes, Omit<CommonProps, keyof ProductSwitchAttributes> {
  /**
   * Defines the items of the `ProductSwitch`.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ProductSwitch` is an SAP Fiori specific web component that is used in `ShellBar` and allows the user to easily switch between products.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ProductSwitch)
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
