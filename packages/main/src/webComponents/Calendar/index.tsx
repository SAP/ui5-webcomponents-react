import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Calendar from '@ui5/webcomponents/dist/Calendar';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the мinimum date available for selection.
   */
  minDate?: string;
  /**
   * Defines the calendar type used for display. If not defined, the calendar type of the global configuration is used. Available options are: "Gregorian", "Islamic", "Japanese", "Buddhist" and "Persian".
   */
  primaryCalendarType?: string;
  /**
   * Defines the selected dates as UTC timestamps.
   */
  selectedDates?: unknown[];
  /**
   * Defines the UNIX timestamp - seconds since 00:00:00 UTC on Jan 1, 1970.
   */
  timestamp?: number;
  /**
   * Fired when the selected dates changed.
   */
  onSelectedDatesChange?: (event: CustomEvent<{ dates: unknown[] }>) => void;
}

/**
 * <code>import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</a>
 */
const Calendar: FC<CalendarPropTypes> = withWebComponent<CalendarPropTypes>(UI5Calendar);

Calendar.displayName = 'Calendar';

Calendar.defaultProps = {
  maxDate: '',
  minDate: ''
};

export { Calendar };
