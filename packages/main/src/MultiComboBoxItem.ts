import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { MultiComboBoxItemDomRef, MultiComboBoxItemPropTypes } from './webComponents/MultiComboBoxItem';
import { MultiComboBoxItem } from './webComponents/MultiComboBoxItem';

deprecationNotice(
  'MultiComboBoxItem',
  `importing from '@ui5/webcomponents-react/dist/MultiComboBoxItem' is deprecated. Please use "import { MultiComboBoxItem } from '@ui5/webcomponents-react';" instead.`
);

export { MultiComboBoxItem };

export type { MultiComboBoxItemPropTypes, MultiComboBoxItemDomRef };
