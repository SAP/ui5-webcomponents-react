import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ProductSwitch" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ProductSwitch = withWebComponent<ProductSwitchPropTypes, ProductSwitchDomRef>(
  'ui5-product-switch',
  [],
  [],
  [],
  []
);

ProductSwitch.displayName = 'ProductSwitch';

export { ProductSwitch };
