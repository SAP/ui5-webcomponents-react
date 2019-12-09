import React, { FC, ReactNode } from 'react';
import UI5ProductSwitch from '@ui5/webcomponents-fiori/dist/ProductSwitch';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ProductSwitchPropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[]; // @generated
}

const ProductSwitch: FC<ProductSwitchPropTypes> = withWebComponent<ProductSwitchPropTypes>(UI5ProductSwitch);

ProductSwitch.displayName = 'ProductSwitch';

export { ProductSwitch };
