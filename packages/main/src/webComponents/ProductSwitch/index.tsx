import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { FC, ReactNode } from 'react';

import '@ui5/webcomponents-fiori/dist/ProductSwitch';

export interface ProductSwitchPropTypes extends WithWebComponentPropTypes {
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
