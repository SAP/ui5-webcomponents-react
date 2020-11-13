import '@ui5/webcomponents-fiori/dist/ProductSwitch';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface ProductSwitchPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the items of the <code>ProductSwitch</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 *  The <code>ProductSwitch</code> is an SAP Fiori specific web component that is used in <code>ShellBar</code> and allows the user to easily switch between products. <br><br>
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
