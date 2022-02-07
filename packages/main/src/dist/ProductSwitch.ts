import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ProductSwitchDomRef, ProductSwitchPropTypes } from '../webComponents/ProductSwitch';
import { ProductSwitch } from '../webComponents/ProductSwitch';

deprecationNotice(
  'ProductSwitch',
  `importing from '@ui5/webcomponents-react/dist/ProductSwitch' is deprecated. Please use "import { ProductSwitch } from '@ui5/webcomponents-react';" instead.`
);

export { ProductSwitch };

export type { ProductSwitchPropTypes, ProductSwitchDomRef };
