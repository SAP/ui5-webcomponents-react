import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CustomListItemDomRef, CustomListItemPropTypes } from '../webComponents/CustomListItem';
import { CustomListItem } from '../webComponents/CustomListItem';

deprecationNotice(
  'CustomListItem',
  `importing from '@ui5/webcomponents-react/dist/CustomListItem' is deprecated. Please use "import { CustomListItem } from '@ui5/webcomponents-react';" instead.`
);

export { CustomListItem };

export type { CustomListItemPropTypes, CustomListItemDomRef };
