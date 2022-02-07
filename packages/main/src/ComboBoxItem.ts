import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ComboBoxItemDomRef, ComboBoxItemPropTypes } from './webComponents/ComboBoxItem';
import { ComboBoxItem } from './webComponents/ComboBoxItem';

deprecationNotice(
  'ComboBoxItem',
  `importing from '@ui5/webcomponents-react/dist/ComboBoxItem' is deprecated. Please use "import { ComboBoxItem } from '@ui5/webcomponents-react';" instead.`
);

export { ComboBoxItem };

export type { ComboBoxItemPropTypes, ComboBoxItemDomRef };
