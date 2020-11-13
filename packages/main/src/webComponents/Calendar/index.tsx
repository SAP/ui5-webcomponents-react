import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Calendar';
import { FC } from 'react';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note: **For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.****
   */
  hideWeekNumbers?: boolean;
  /**
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the мinimum date available for selection.
   */
  minDate?: string;
  /**
   * Defines the calendar type used for display. If not defined, the calendar type of the global configuration is used. Available options are: "Gregorian", "Islamic", "Japanese", "Buddhist" and "Persian".<br/><b>Note:</b> Calendar types other than Gregorian must be imported manually:<br /><code>import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";</code>
   */
  primaryCalendarType?: CalendarType;
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
 * The `Calendar` can be used standale to display the years, months, weeks and days, but the main purpose of the `Calendar` is to be used within a `DatePicker`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</a>
 */
const Calendar: FC<CalendarPropTypes> = withWebComponent<CalendarPropTypes>(
  'ui5-calendar',
  ['maxDate', 'minDate', 'primaryCalendarType', 'selectedDates', 'timestamp'],
  ['hideWeekNumbers'],
  [],
  ['selected-dates-change']
);

Calendar.displayName = 'Calendar';

Calendar.defaultProps = {
  hideWeekNumbers: false
};

export { Calendar };
