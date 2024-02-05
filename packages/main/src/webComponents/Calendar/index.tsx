'use client';

import '@ui5/webcomponents/dist/Calendar.js';
import type { CalendarSelectedDatesChangeEventDetail } from '@ui5/webcomponents/dist/Calendar.js';
import type { ReactNode } from 'react';
import type { CalendarType } from '../../enums/index.js';
import { CalendarSelectionMode } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../types/index.js';

interface CalendarAttributes {
  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.
   */
  hideWeekNumbers?: boolean;
  /**
   * Defines the type of selection used in the calendar component. Accepted property values are:
   *
   * *   `CalendarSelectionMode.Single` - enables a single date selection.(default value)
   * *   `CalendarSelectionMode.Range` - enables selection of a date range.
   * *   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
   */
  selectionMode?: CalendarSelectionMode | keyof typeof CalendarSelectionMode;
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Determines the maximum date available for selection. **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  maxDate?: string;
  /**
   * Determines the minimum date available for selection. **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  minDate?: string;
  /**
   * Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`
   */
  primaryCalendarType?: CalendarType | keyof typeof CalendarType;
  /**
   * Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.
   */
  secondaryCalendarType?: CalendarType | keyof typeof CalendarType;
}

interface CalendarDomRef extends CalendarAttributes, Ui5DomRef {}

interface CalendarPropTypes extends CalendarAttributes, Omit<CommonProps, keyof CalendarAttributes> {
  /**
   * Defines the selected date or dates (depending on the `selectionMode` property) for this calendar as instances of `CalendarDate`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected dates change. **Note:** If you call `preventDefault()` for this event, the component will not create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.
   */
  onSelectedDatesChange?: (event: Ui5CustomEvent<CalendarDomRef, CalendarSelectedDatesChangeEventDetail>) => void;
}

/**
 * The `Calendar` component allows users to select one or more dates.
 *
 * Currently selected dates are represented with instances of `CalendarDate` as children of the `Calendar`. The value property of each `CalendarDate` must be a date string, correctly formatted according to the `Calendar`'s `formatPattern` property. Whenever the user changes the date selection, `Calendar` will automatically create/remove instances of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the `onSelectedDatesChange` event. This is useful if you want to control the selected dates externally.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Calendar)
 */
const Calendar = withWebComponent<CalendarPropTypes, CalendarDomRef>(
  'ui5-calendar',
  ['formatPattern', 'maxDate', 'minDate', 'primaryCalendarType', 'secondaryCalendarType', 'selectionMode'],
  ['hideWeekNumbers'],
  [],
  ['selected-dates-change'],
  () => import('@ui5/webcomponents/dist/Calendar.js')
);

Calendar.displayName = 'Calendar';

Calendar.defaultProps = {
  selectionMode: CalendarSelectionMode.Single
};

export { Calendar };
export type { CalendarDomRef, CalendarPropTypes };
