import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { FilterItemDomRef, FilterItemPropTypes } from '../webComponents/FilterItem';
import { FilterItem } from '../webComponents/FilterItem';

deprecationNotice(
  'FilterItem',
  `importing from '@ui5/webcomponents-react/dist/FilterItem' is deprecated. Please use "import { FilterItem } from '@ui5/webcomponents-react';" instead.`
);

export { FilterItem };

export type { FilterItemPropTypes, FilterItemDomRef };
