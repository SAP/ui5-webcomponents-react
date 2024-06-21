'use client';

import '@ui5/webcomponents/dist/DateRangePicker.js';
import type {
  DatePickerChangeEventDetail,
  DatePickerInputEventDetail,
  DatePickerValueStateChangeEventDetail
} from '@ui5/webcomponents/dist/DatePicker.js';
import type CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface DateRangePickerAttributes {
  /**
   * Defines the aria-label attribute for the component.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Determines the symbol which separates the dates.
   * If not supplied, the default time interval delimiter for the current locale will be used.
   * @default "-"
   */
  delimiter?: string;

  /**
   * Determines whether the component is displayed as disabled.
   * @default false
   */
  disabled?: boolean;

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
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   */
  name?: string;

  /**
   * Defines the open or closed state of the popover.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines a short hint, intended to aid the user with data entry when the
   * component has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
   * Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Sets a calendar type used for display.
   * If not set, the calendar type of the global configuration is used.
   * @default undefined
   */
  primaryCalendarType?: CalendarType | undefined | keyof typeof CalendarType;

  /**
   * Determines whether the component is displayed as read-only.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the secondary calendar type.
   * If not set, the calendar will only show the primary calendar type.
   * @default undefined
   */
  secondaryCalendarType?: CalendarType | undefined | keyof typeof CalendarType;

  /**
   * Defines a formatted date value.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface DateRangePickerDomRef extends Required<DateRangePickerAttributes>, Ui5DomRef {
  /**
   * **Note:** The getter method is inherited and not supported. If called it will return an empty value.
   */
  readonly dateValue: Date | null;

  /**
   * **Note:** The getter method is inherited and not supported. If called it will return an empty value.
   */
  readonly dateValueUTC: Date | null;

  /**
   * Returns the end date of the currently selected range as JavaScript Date instance.
   */
  readonly endDateValue: Date | null;

  /**
   * Formats a Java Script date object into a string representing a locale date
   * according to the `formatPattern` property of the DatePicker instance
   * @param {Date} date - A Java Script date object to be formatted as string
   * @returns {string} - The date as string
   */
  formatValue: (date: Date) => string;

  /**
   * Checks if a date is between the minimum and maximum date.
   * @param {string} value - A value to be checked
   * @returns {boolean}
   */
  isInValidRange: (value: string) => boolean;

  /**
   * Checks if a value is valid against the current date format of the DatePicker.
   * @param {string} value - A value to be tested against the current date format
   * @returns {boolean}
   */
  isValid: (value: string) => boolean;

  /**
   * Returns the start date of the currently selected range as JavaScript Date instance.
   */
  readonly startDateValue: Date | null;
}

interface DateRangePickerPropTypes
  extends DateRangePickerAttributes,
    Omit<
      CommonProps,
      keyof DateRangePickerAttributes | 'valueStateMessage' | 'onChange' | 'onInput' | 'onValueStateChange'
    > {
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onChange?: (event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerChangeEventDetail>) => void;

  /**
   * Fired when the value of the component is changed at each key stroke.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onInput?: (event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerInputEventDetail>) => void;

  /**
   * Fired before the value state of the component is updated internally.
   * The event is preventable, meaning that if it's default action is
   * prevented, the component will not update the value state.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onValueStateChange?: (event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerValueStateChangeEventDetail>) => void;
}

/**
 * The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.
 *
 * ### Usage
 * The user can enter a date by:
 * Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices).
 * For the `DateRangePicker`
 *
 *
 * ### Keyboard Handling
 * The `DateRangePicker` provides advanced keyboard handling.
 *
 * When the `DateRangePicker` input field is focused the user can
 * increment or decrement respectively the range start or end date, depending on where the cursor is.
 * The following shortcuts are available:
 *
 * - [Page Down] - Decrements the corresponding day of the month by one
 * - [Shift] + [Page Down] - Decrements the corresponding month by one
 * - [Shift] + [Ctrl] + [Page Down] - Decrements the corresponding year by one
 * - [Page Up] - Increments the corresponding day of the month by one
 * - [Shift] + [Page Up] - Increments the corresponding month by one
 * - [Shift] + [Ctrl] + [Page Up] - Increments the corresponding year by one
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const DateRangePicker = withWebComponent<DateRangePickerPropTypes, DateRangePickerDomRef>(
  'ui5-daterange-picker',
  [
    'accessibleName',
    'accessibleNameRef',
    'delimiter',
    'formatPattern',
    'maxDate',
    'minDate',
    'name',
    'placeholder',
    'primaryCalendarType',
    'secondaryCalendarType',
    'value',
    'valueState'
  ],
  ['disabled', 'hideWeekNumbers', 'open', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change', 'input', 'value-state-change'],
  () => import('@ui5/webcomponents/dist/DateRangePicker.js')
);

DateRangePicker.displayName = 'DateRangePicker';

export { DateRangePicker };
export type { DateRangePickerDomRef, DateRangePickerPropTypes };
