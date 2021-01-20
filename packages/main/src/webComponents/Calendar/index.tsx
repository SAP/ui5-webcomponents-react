import { CalendarSelection } from '@ui5/webcomponents-react/lib/CalendarSelection';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Calendar';
import { FC } from 'react';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the selected dates as UTC timestamps.
   */
  selectedDates?: unknown[];
  /**
   * Defines the UNIX timestamp - seconds since 00:00:00 UTC on Jan 1, 1970.
   */
  timestamp?: number;
  /**
   * Determines the calendar type. The input value is formated according to the calendar type and the picker shows the months and years from the specified calendar.
   *
   * Available options are:
   *
   * *   `Gregorian`
   * *   `Islamic`
   * *   `Japanese`
   * *   `Buddhist`
   * *   `Persian`<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`
   */
  primaryCalendarType?: CalendarType;
  /**
   * Determines the minimum date available for selection.
   */
  minDate?: string;
  /**
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note: **For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.****
   */
  hideWeekNumbers?: boolean;
  /**
   * Defines the type of selection used in the calendar component. The property takes as value an object of type `CalendarSelection`. Accepted property values are:
   *
   * *   `CalendarSelection.Single` - enables a single date selection.(default value)
   * *   `CalendarSelection.Range` - enables selection of a date range.
   * *   `CalendarSelection.Multiple` - enables selection of multiple dates.
   */
  selection?: CalendarSelection;
  /**
   * Fired when the selected dates changed.
   */
  onSelectedDatesChange?: (event: CustomEvent<{ dates: unknown[] }>) => void;
}

/**
 * The `Calendar` can be used stand alone to display the years, months, weeks and days
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</a>
 */
const Calendar: FC<CalendarPropTypes> = withWebComponent<CalendarPropTypes>(
  'ui5-calendar',
  ['primaryCalendarType', 'formatPattern', 'maxDate', 'minDate', 'selection', 'selectedDates', 'timestamp'],
  ['hideWeekNumbers'],
  [],
  ['selected-dates-change']
);

Calendar.displayName = 'Calendar';

Calendar.defaultProps = {
  hideWeekNumbers: false,
  selection: CalendarSelection.Single,
  primaryCalendarType: CalendarType.Gregorian
};

export { Calendar };
