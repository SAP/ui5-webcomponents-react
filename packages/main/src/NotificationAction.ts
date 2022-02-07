import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { NotificationActionDomRef, NotificationActionPropTypes } from './webComponents/NotificationAction';
import { NotificationAction } from './webComponents/NotificationAction';

deprecationNotice(
  'NotificationAction',
  `importing from '@ui5/webcomponents-react/dist/NotificationAction' is deprecated. Please use "import { NotificationAction } from '@ui5/webcomponents-react';" instead.`
);

export { NotificationAction };

export type { NotificationActionPropTypes, NotificationActionDomRef };
