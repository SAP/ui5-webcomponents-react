import UI5Timeline from '@ui5/webcomponents/dist/Timeline';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TimelinePropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[];
}

const Timeline: FC<TimelinePropTypes> = withWebComponent<TimelinePropTypes>(UI5Timeline);

Timeline.displayName = 'Timeline';

export { Timeline };
