import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Timeline';
import { FC, ReactNode } from 'react';

export interface TimelinePropTypes extends WithWebComponentPropTypes {
  /**
   * Determines the content of the <code>ui5-timeline</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Timeline" target="_blank">UI5 Web Components Playground</a>
 */
const Timeline: FC<TimelinePropTypes> = withWebComponent<TimelinePropTypes>('ui5-timeline', [], [], [], []);

Timeline.displayName = 'Timeline';

Timeline.defaultProps = {};

export { Timeline };
