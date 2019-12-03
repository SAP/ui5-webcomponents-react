import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ProductSwitchItem from '@ui5/webcomponents-fiori/dist/ProductSwitchItem';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ProductSwitchItemPropTypes extends WithWebComponentPropTypes {
  heading?: string; // @generated
  subtitle?: string; // @generated
  icon?: string; // @generated
  target?: string; // @generated
  targetSrc?: string; // @generated
  onClick?: (event: Event) => void; // @generated
}

const ProductSwitchItem: FC<ProductSwitchItemPropTypes> = withWebComponent<ProductSwitchItemPropTypes>(
  UI5ProductSwitchItem
);

ProductSwitchItem.displayName = 'ProductSwitchItem';

ProductSwitchItem.defaultProps = {
  target: '_self' // @generated
};

export { ProductSwitchItem };
