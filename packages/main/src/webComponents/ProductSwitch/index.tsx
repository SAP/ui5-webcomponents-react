'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ProductSwitchAttributes {}

export interface ProductSwitchDomRef extends ProductSwitchAttributes, Ui5DomRef {}

export interface ProductSwitchPropTypes extends ProductSwitchAttributes, CommonProps {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ProductSwitch" target="_blank">UI5 Web Components Storybook</ui5-link>
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
