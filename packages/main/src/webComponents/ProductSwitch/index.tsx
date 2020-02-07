import UI5ProductSwitch from '@ui5/webcomponents-fiori/dist/ProductSwitch';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ProductSwitchPropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[]; // @generated
}

/**
 * <code>import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ProductSwitch" target="_blank">UI5 Web Components Playground</a>
 */
const ProductSwitch: FC<ProductSwitchPropTypes> = withWebComponent<ProductSwitchPropTypes>(UI5ProductSwitch);

ProductSwitch.displayName = 'ProductSwitch';

export { ProductSwitch };
