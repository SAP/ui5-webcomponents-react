import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ProductSwitchItemDomRef, ProductSwitchItemPropTypes } from '../webComponents/ProductSwitchItem';
import { ProductSwitchItem } from '../webComponents/ProductSwitchItem';

deprecationNotice(
  'ProductSwitchItem',
  `importing from '@ui5/webcomponents-react/dist/ProductSwitchItem' is deprecated. Please use "import { ProductSwitchItem } from '@ui5/webcomponents-react';" instead.`
);

export { ProductSwitchItem };

export type { ProductSwitchItemPropTypes, ProductSwitchItemDomRef };
