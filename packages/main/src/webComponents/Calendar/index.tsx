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

interface CalendarDomRef extends CalendarAttributes, Ui5DomRef {}

interface CalendarPropTypes
  extends CalendarAttributes,
    Omit<CommonProps, keyof CalendarAttributes | 'onSelectedDatesChange'> {
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
