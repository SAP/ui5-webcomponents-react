'use client';

import '@ui5/webcomponents/dist/Calendar.js';
import type { CalendarSelectedDatesChangeEventDetail } from '@ui5/webcomponents/dist/Calendar.js';
import type CalendarSelectionMode from '@ui5/webcomponents/dist/types/CalendarSelectionMode.js';
import type CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface CalendarAttributes {
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;

  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note:** For calendars other than Gregorian,
   * the week numbers are not displayed regardless of what is set.
   * @default false
   */
  hideWeekNumbers?: boolean;

  /**
   * Determines the maximum date available for selection.
   *
   * **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  maxDate?: string;

  /**
   * Determines the minimum date available for selection.
   *
   * **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  minDate?: string;

  /**
   * Sets a calendar type used for display.
   * If not set, the calendar type of the global configuration is used.
   * @default undefined
   */
  primaryCalendarType?: CalendarType | undefined | keyof typeof CalendarType;

  /**
   * Defines the secondary calendar type.
   * If not set, the calendar will only show the primary calendar type.
   * @default undefined
   */
  secondaryCalendarType?: CalendarType | undefined | keyof typeof CalendarType;

  /**
   * Defines the type of selection used in the calendar component.
   * Accepted property values are:
   *
   * - `CalendarSelectionMode.Single` - enables a single date selection.(default value)
   * - `CalendarSelectionMode.Range` - enables selection of a date range.
   * - `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
   * @default "Single"
   */
  selectionMode?: CalendarSelectionMode | keyof typeof CalendarSelectionMode;
}

interface CalendarDomRef extends Required<CalendarAttributes>, Ui5DomRef {}

interface CalendarPropTypes
  extends CalendarAttributes,
    Omit<
      CommonProps,
      keyof CalendarAttributes | 'calendarLegend' | 'children' | 'specialDates' | 'onSelectedDatesChange'
    > {
  /**
   * Defines the calendar legend of the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="calendarLegend"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  calendarLegend?: UI5WCSlotsNode;

  /**
   * Defines the selected date or dates (depending on the `selectionMode` property)
   * for this calendar as instances of `CalendarDate`.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the special dates, visually emphasized in the calendar.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="specialDates"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  specialDates?: UI5WCSlotsNode;
  /**
   * Fired when the selected dates change.
   *
   * **Note:** If you call `preventDefault()` for this event, the component will not
   * create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onSelectedDatesChange?: (event: Ui5CustomEvent<CalendarDomRef, CalendarSelectedDatesChangeEventDetail>) => void;
}

/**
 * The `Calendar` component allows users to select one or more dates.
 *
 * Currently selected dates are represented with instances of `CalendarDate` as
 * children of the `Calendar`. The value property of each `CalendarDate` must be a
 * date string, correctly formatted according to the `Calendar`'s `formatPattern` property.
 * Whenever the user changes the date selection, `Calendar` will automatically create/remove instances
 * of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the
 * `selected-dates-change` event. This is useful if you want to control the selected dates externally.
 *
 * ### Usage
 *
 * The user can navigate to a particular date by:
 *
 * - Pressing over a month inside the months view
 * - Pressing over an year inside the years view
 *
 * The user can confirm a date selection by pressing over a date inside the days view.
 *
 * ### Keyboard Handling
 * The `Calendar` provides advanced keyboard handling.
 * When a picker is showed and focused the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - Day picker:
 *
 * - [F4] - Shows month picker
 * - [Shift] + [F4] - Shows year picker
 * - [Page Up] - Navigate to the previous month
 * - [Page Down] - Navigate to the next month
 * - [Shift] + [Page Up] - Navigate to the previous year
 * - [Shift] + [Page Down] - Navigate to the next year
 * - [Ctrl] + [Shift] + [Page Up] - Navigate ten years backwards
 * - [Ctrl] + [Shift] + [Page Down] - Navigate ten years forwards
 * - [Home] - Navigate to the first day of the week
 * - [End] - Navigate to the last day of the week
 * - [Ctrl] + [Home] - Navigate to the first day of the month
 * - [Ctrl] + [End] - Navigate to the last day of the month
 *
 * - Month picker:
 *
 * - [Page Up] - Navigate to the previous year
 * - [Page Down] - Navigate to the next year
 * - [Home] - Navigate to the first month of the current row
 * - [End] - Navigate to the last month of the current row
 * - [Ctrl] + [Home] - Navigate to the first month of the current year
 * - [Ctrl] + [End] - Navigate to the last month of the year
 *
 * - Year picker:
 *
 * - [Page Up] - Navigate to the previous year range
 * - [Page Down] - Navigate the next year range
 * - [Home] - Navigate to the first year of the current row
 * - [End] - Navigate to the last year of the current row
 * - [Ctrl] + [Home] - Navigate to the first year of the current year range
 * - [Ctrl] + [End] - Navigate to the last year of the current year range
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### Calendar types
 * The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
 * By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
 * you need to set the `primaryCalendarType` property and import one or more of the following modules:
 *
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";`
 *
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";`
 *
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";`
 *
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";`
 *
 * Or, you can use the global configuration and set the `calendarType` key:
 *
 * ```html
 * <script data-id="sap-ui-config" type="application/json">
 * 	{
 * 		"calendarType": "Japanese"
 * 	}
 * </script>
 * ```
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Calendar = withWebComponent<CalendarPropTypes, CalendarDomRef>(
  'ui5-calendar',
  ['formatPattern', 'maxDate', 'minDate', 'primaryCalendarType', 'secondaryCalendarType', 'selectionMode'],
  ['hideWeekNumbers'],
  ['calendarLegend', 'specialDates'],
  ['selected-dates-change'],
  () => import('@ui5/webcomponents/dist/Calendar.js')
);

Calendar.displayName = 'Calendar';

export { Calendar };
export type { CalendarDomRef, CalendarPropTypes };
