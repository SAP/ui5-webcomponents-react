import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type {
  NotificationListGroupItemDomRef,
  NotificationListGroupItemPropTypes
} from '../webComponents/NotificationListGroupItem';
import { NotificationListGroupItem } from '../webComponents/NotificationListGroupItem';

deprecationNotice(
  'NotificationListGroupItem',
  `importing from '@ui5/webcomponents-react/dist/NotificationListGroupItem' is deprecated. Please use "import { NotificationListGroupItem } from '@ui5/webcomponents-react';" instead.`
);

export { NotificationListGroupItem };

export type { NotificationListGroupItemPropTypes, NotificationListGroupItemDomRef };
