import '@ui5/webcomponents-fiori/dist/ProductSwitch';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ProductSwitchPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the items of the <code>ui5-product-switch</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';</code>
 * <br />
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
