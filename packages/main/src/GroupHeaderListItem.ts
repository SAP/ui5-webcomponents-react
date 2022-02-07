import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { GroupHeaderListItemDomRef, GroupHeaderListItemPropTypes } from './webComponents/GroupHeaderListItem';
import { GroupHeaderListItem } from './webComponents/GroupHeaderListItem';

deprecationNotice(
  'GroupHeaderListItem',
  `importing from '@ui5/webcomponents-react/dist/GroupHeaderListItem' is deprecated. Please use "import { GroupHeaderListItem } from '@ui5/webcomponents-react';" instead.`
);

export { GroupHeaderListItem };

export type { GroupHeaderListItemPropTypes, GroupHeaderListItemDomRef };
