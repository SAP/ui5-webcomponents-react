import { NotificationProptypes } from '@ui5/webcomponents-react/components/Notification';
import { Notification } from '@ui5/webcomponents-react/lib/Notification';
import React, { FC, forwardRef, RefObject } from 'react';

const NotificationGroup: FC<NotificationProptypes> = forwardRef(
  (props: NotificationProptypes, ref: RefObject<HTMLDivElement>) => {
    return <Notification {...props} ref={ref} />;
  }
);

NotificationGroup.defaultProps = {
  autoPriority: true,
  truncate: true
};

NotificationGroup.displayName = 'Notification Group';

export { NotificationGroup };
