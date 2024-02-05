'use client';

import '@ui5/webcomponents/dist/Calendar.js';
import type { CalendarSelectedDatesChangeEventDetail } from '@ui5/webcomponents/dist/Calendar.js';
import type CalendarSelectionMode from '@ui5/webcomponents/dist/types/CalendarSelectionMode.js';
import type CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface CalendarAttributes {
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;

  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.
   * @default false
   */
  hideWeekNumbers?: boolean;

  /**
   * Determines the maximum date available for selection. **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  maxDate?: string;

  /**
   * Determines the minimum date available for selection. **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  minDate?: string;

  /**
   * Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.
   * @default undefined
   */
  primaryCalendarType?: CalendarType | undefined | keyof typeof CalendarType;

  /**
   * Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.
   * @default undefined
   */
  secondaryCalendarType?: CalendarType | undefined | keyof typeof CalendarType;

  /**
   * Defines the type of selection used in the calendar component. Accepted property values are:
   *
   * *   `CalendarSelectionMode.Single` - enables a single date selection.(default value)
   * *   `CalendarSelectionMode.Range` - enables selection of a date range.
   * *   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
   * @default "Single"
   */
  selectionMode?: CalendarSelectionMode | keyof typeof CalendarSelectionMode;
}

interface CalendarDomRef extends Required<CalendarAttributes>, Ui5DomRef {}

interface CalendarPropTypes
  extends CalendarAttributes,
    Omit<CommonProps, keyof CalendarAttributes | 'children' | 'onSelectedDatesChange'> {
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
 * Currently selected dates are represented with instances of `CalendarDate` as children of the `Calendar`. The value property of each `CalendarDate` must be a date string, correctly formatted according to the `Calendar`'s `formatPattern` property. Whenever the user changes the date selection, `Calendar` will automatically create/remove instances of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the `selected-dates-change` event. This is useful if you want to control the selected dates externally.
 *
 *
 * ### Usage
 *
 * The user can navigate to a particular date by:
 *
 * *   Pressing over a month inside the months view
 * *   Pressing over an year inside the years view
 *
 *
 * The user can confirm a date selection by pressing over a date inside the days view.
 *
 *
 * ### Keyboard Handling
 *
 * The `Calendar` provides advanced keyboard handling. When a picker is showed and focused the user can use the following keyboard shortcuts in order to perform a navigation:
 * \- Day picker:
 *
 * *   \[F4\] - Shows month picker
 * *   \[SHIFT\] + \[F4\] - Shows year picker
 * *   \[PAGEUP\] - Navigate to the previous month
 * *   \[PAGEDOWN\] - Navigate to the next month
 * *   \[SHIFT\] + \[PAGEUP\] - Navigate to the previous year
 * *   \[SHIFT\] + \[PAGEDOWN\] - Navigate to the next year
 * *   \[CTRL\] + \[SHIFT\] + \[PAGEUP\] - Navigate ten years backwards
 * *   \[CTRL\] + \[SHIFT\] + \[PAGEDOWN\] - Navigate ten years forwards
 * *   \[HOME\] - Navigate to the first day of the week
 * *   \[END\] - Navigate to the last day of the week
 * *   \[CTRL\] + \[HOME\] - Navigate to the first day of the month
 * *   \[CTRL\] + \[END\] - Navigate to the last day of the month
 *
 *
 * \- Month picker:
 *
 * *   \[PAGEUP\] - Navigate to the previous year
 * *   \[PAGEDOWN\] - Navigate to the next year
 * *   \[HOME\] - Navigate to the first month of the current row
 * *   \[END\] - Navigate to the last month of the current row
 * *   \[CTRL\] + \[HOME\] - Navigate to the first month of the current year
 * *   \[CTRL\] + \[END\] - Navigate to the last month of the year
 *
 *
 * \- Year picker:
 *
 * *   \[PAGEUP\] - Navigate to the previous year range
 * *   \[PAGEDOWN\] - Navigate the next year range
 * *   \[HOME\] - Navigate to the first year of the current row
 * *   \[END\] - Navigate to the last year of the current row
 * *   \[CTRL\] + \[HOME\] - Navigate to the first year of the current year range
 * *   \[CTRL\] + \[END\] - Navigate to the last year of the current year range
 *
 *
 *
 * #### Fast Navigation
 *
 * This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 * ### Calendar types
 *
 * The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the `primaryCalendarType` property and import one or more of the following modules:
 *
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";`
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";`
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";`
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";`
 *
 * Or, you can use the global configuration and set the `calendarType` key:
 * `<script data-id="sap-ui-config" type="application/json"> { "calendarType": "Japanese" } </script>`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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

export { Calendar };
export type { CalendarDomRef, CalendarPropTypes };
