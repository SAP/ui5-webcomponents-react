import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SortItemDomRef, SortItemPropTypes } from '../webComponents/SortItem';
import { SortItem } from '../webComponents/SortItem';

deprecationNotice(
  'SortItem',
  `importing from '@ui5/webcomponents-react/dist/SortItem' is deprecated. Please use "import { SortItem } from '@ui5/webcomponents-react';" instead.`
);

export { SortItem };

export type { SortItemPropTypes, SortItemDomRef };
