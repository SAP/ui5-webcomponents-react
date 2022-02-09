import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { NotificationListItemDomRef, NotificationListItemPropTypes } from './webComponents/NotificationListItem';
import { NotificationListItem } from './webComponents/NotificationListItem';

deprecationNotice(
  'NotificationListItem',
  `importing from '@ui5/webcomponents-react/dist/NotificationListItem' is deprecated. Please use "import { NotificationListItem } from '@ui5/webcomponents-react';" instead.`
);

export { NotificationListItem };

export type { NotificationListItemPropTypes, NotificationListItemDomRef };
