import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ComboBoxGroupItemDomRef, ComboBoxGroupItemPropTypes } from './webComponents/ComboBoxGroupItem';
import { ComboBoxGroupItem } from './webComponents/ComboBoxGroupItem';

deprecationNotice(
  'ComboBoxGroupItem',
  `importing from '@ui5/webcomponents-react/dist/ComboBoxGroupItem' is deprecated. Please use "import { ComboBoxGroupItem } from '@ui5/webcomponents-react';" instead.`
);

export { ComboBoxGroupItem };

export type { ComboBoxGroupItemPropTypes, ComboBoxGroupItemDomRef };
