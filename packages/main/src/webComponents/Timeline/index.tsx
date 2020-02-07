import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Timeline from '@ui5/webcomponents/dist/Timeline';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TimelinePropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Timeline" target="_blank">UI5 Web Components Playground</a>
 */
const Timeline: FC<TimelinePropTypes> = withWebComponent<TimelinePropTypes>(UI5Timeline);

Timeline.displayName = 'Timeline';

export { Timeline };
