import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/CalendarDate.js';
import { FC } from 'react';

export interface CalendarDatePropTypes extends WithWebComponentPropTypes {
  /**
   * The date formatted according to the `formatPattern` property of the `Calendar` that hosts the `CalendarDate`
   */
  value?: string;
}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/CalendarDate" target="_blank">UI5 Web Components Playground</a>
 */
const CalendarDate: FC<CalendarDatePropTypes> = withWebComponent<CalendarDatePropTypes>(
  'ui5-date',
  ['value'],
  [],
  [],
  []
);

CalendarDate.displayName = 'CalendarDate';

CalendarDate.defaultProps = {};

export { CalendarDate };
