import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

import '@ui5/webcomponents/dist/CalendarDate.js';

export interface CalendarDatePropTypes extends CommonProps {
  /**
   * The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component
   */
  value?: string;
}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CalendarDate" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CalendarDate = withWebComponent<CalendarDatePropTypes>('ui5-date', ['value'], [], [], []);

CalendarDate.displayName = 'CalendarDate';

export { CalendarDate };
