import React, { forwardRef, RefObject } from 'react';

import { NotificationProptypes } from '../Notification';
import { Notification } from '@ui5/webcomponents-react/lib/Notification';

const NotificationGroup = forwardRef((props: NotificationProptypes, ref: RefObject<HTMLDivElement>) => {
  return <Notification {...props} />;
});

export { NotificationGroup };
