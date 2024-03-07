'use client';

import '@ui5/webcomponents/dist/DateTimePicker.js';
import type {
  DatePickerChangeEventDetail,
  DatePickerInputEventDetail,
  DatePickerValueStateChangeEventDetail
} from '@ui5/webcomponents/dist/DatePicker.js';
import type CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface DateTimePickerAttributes {
  /**
   * Defines the aria-label attribute for the component.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

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
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project:
   * `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element
   * will be created inside the component so that it can be submitted as
   * part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;

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

interface DateTimePickerDomRef extends Required<DateTimePickerAttributes>, Ui5DomRef {
  /**
   * Closes the picker.
   * @returns {void}
   */
  closePicker: () => void;

  /**
   * Currently selected date represented as a Local JavaScript Date instance.
   */
  readonly dateValue: Date | null;

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
   * Checks if the picker is open.
   * @returns {boolean} - true if the picker is open, false otherwise
   */
  isOpen: () => boolean;

  /**
   * Checks if a value is valid against the current date format of the DatePicker.
   * @param {string} value - A value to be tested against the current date format
   * @returns {boolean}
   */
  isValid: (value: string) => boolean;

  /**
   * Opens the picker.
   * @returns {Promise<void>}
   */
  openPicker: () => Promise<void>;
}

interface DateTimePickerPropTypes
  extends DateTimePickerAttributes,
    Omit<
      CommonProps,
      keyof DateTimePickerAttributes | 'valueStateMessage' | 'onChange' | 'onInput' | 'onValueStateChange'
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
   */
  onChange?: (event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void;

  /**
   * Fired when the value of the component is changed at each key stroke.
   */
  onInput?: (event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void;

  /**
   * Fired before the value state of the component is updated internally.
   * The event is preventable, meaning that if it's default action is
   * prevented, the component will not update the value state.
   */
  onValueStateChange?: (event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void;
}

/**
 * The `DateTimePicker` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
 * and for the purpose it consists of input field and Date/Time picker.
 *
 * ### Usage
 *
 * Use the `DateTimePicker` if you need a combined date and time input component.
 * Don't use it if you want to use either date, or time value.
 * In this case, use the `DatePicker` or the `TimePicker` components instead.
 *
 * The user can set date/time by:
 *
 * - using the calendar and the time selectors
 * - typing in the input field
 *
 * Programmatically, to set date/time for the `DateTimePicker`, use the `value` property
 *
 * ### Formatting
 *
 * The value entered by typing into the input field must fit to the used date/time format.
 *
 * Supported format options are pattern-based on Unicode LDML Date Format notation.
 * For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *
 * **Example:** the following format `dd/MM/yyyy, hh:mm:ss aa`
 * corresponds the `13/04/2020, 03:16:16 AM` value.
 *
 * The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.
 *
 * **Example:** the following format `dd/MM/yyyy, HH:mm:ss`
 * corresponds the `13/04/2020, 15:16:16` value.
 *
 * The capital 'H' indicates "24" hours format.
 *
 * **Note:** If the `formatPattern` does NOT include time,
 * the `DateTimePicker` will fallback to the default time format according to the locale.
 *
 * **Note:** If no placeholder is set to the `DateTimePicker`,
 * the current `formatPattern` is displayed as a placeholder.
 * If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.
 *
 * **Note:** If the user input does NOT match the `formatPattern`,
 * the `DateTimePicker` makes an attempt to parse it based on the
 * locale settings.
 *
 * ### Responsive behavior
 *
 * The `DateTimePicker` is responsive and fully adapts to all devices.
 * For larger screens, such as tablet or desktop, it is displayed as a popover, while
 * on phone devices, it is displayed full screen.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const DateTimePicker = withWebComponent<DateTimePickerPropTypes, DateTimePickerDomRef>(
  'ui5-datetime-picker',
  [
    'accessibleName',
    'accessibleNameRef',
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
  ['disabled', 'hideWeekNumbers', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change', 'input', 'value-state-change'],
  () => import('@ui5/webcomponents/dist/DateTimePicker.js')
);

DateTimePicker.displayName = 'DateTimePicker';

export { DateTimePicker };
export type { DateTimePickerDomRef, DateTimePickerPropTypes };
