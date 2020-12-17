import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/ProductSwitch';
import { FC, ReactNode } from 'react';

export interface ProductSwitchPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the items of the `ProductSwitch`.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ProductSwitch` is an SAP Fiori specific web component that is used in `ShellBar` and allows the user to easily switch between products.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ProductSwitch" target="_blank">UI5 Web Components Playground</a>
 */
const ProductSwitch: FC<ProductSwitchPropTypes> = withWebComponent<ProductSwitchPropTypes>(
  'ui5-product-switch',
  [],
  [],
  [],
  []
);

ProductSwitch.displayName = 'ProductSwitch';

ProductSwitch.defaultProps = {};

export { ProductSwitch };
