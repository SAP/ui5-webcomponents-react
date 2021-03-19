import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import '@ui5/webcomponents/dist/CalendarDate';
import { FC } from 'react';

export interface CalendarDatePropTypes extends WithWebComponentPropTypes {
  /**
   * The date formatted according to the `formatPattern` property of the `Calendar` that hosts the `CalendarDate`
   */
  value?: string;
}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
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
