'use client';

import '@ui5/webcomponents/dist/DatePicker.js';
import type {
  DatePickerChangeEventDetail,
  DatePickerInputEventDetail,
  DatePickerValueStateChangeEventDetail
} from '@ui5/webcomponents/dist/DatePicker.js';
import type CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface DatePickerAttributes {
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

interface DatePickerDomRef extends Required<DatePickerAttributes>, Ui5DomRef {
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
   * @returns {Promise<void>} - Resolves when the picker is open
   */
  openPicker: () => Promise<void>;
}

interface DatePickerPropTypes
  extends DatePickerAttributes,
    Omit<
      CommonProps,
      keyof DatePickerAttributes | 'valueStateMessage' | 'onChange' | 'onInput' | 'onValueStateChange'
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
   * __Note__: Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onChange?: (event: Ui5CustomEvent<DatePickerDomRef, DatePickerChangeEventDetail>) => void;

  /**
   * Fired when the value of the component is changed at each key stroke.
   *
   * __Note__: Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onInput?: (event: Ui5CustomEvent<DatePickerDomRef, DatePickerInputEventDetail>) => void;

  /**
   * Fired before the value state of the component is updated internally.
   * The event is preventable, meaning that if it's default action is
   * prevented, the component will not update the value state.
   *
   * __Note__: Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onValueStateChange?: (event: Ui5CustomEvent<DatePickerDomRef, DatePickerValueStateChangeEventDetail>) => void;
}

/**
 * The `DatePicker` component provides an input field with assigned calendar which opens on user action.
 * The `DatePicker` allows users to select a localized date using touch,
 * mouse, or keyboard input. It consists of two parts: the date input field and the
 * date picker.
 *
 * ### Usage
 *
 * The user can enter a date by:
 *
 * - Using the calendar that opens in a popup
 * - Typing it in directly in the input field
 *
 * When the user makes an entry and presses the enter key, the calendar shows the corresponding date.
 * When the user directly triggers the calendar display, the actual date is displayed.
 *
 * ### Formatting
 *
 * If a date is entered by typing it into
 * the input field, it must fit to the used date format.
 *
 * Supported format options are pattern-based on Unicode LDML Date Format notation.
 * For more information, see [UTS #35: Unicode Locale Data Markup Language](http://unicode.org/reports/tr35/#Date_Field_Symbol_Table).
 *
 * For example, if the `format-pattern` is "yyyy-MM-dd",
 * a valid value string is "2015-07-30" and the same is displayed in the input.
 *
 * ### Keyboard Handling
 * The `DatePicker` provides advanced keyboard handling.
 * If the `DatePicker` is focused,
 * you can open or close the drop-down by pressing `F4`, `ALT+UP` or `ALT+DOWN` keys.
 * Once the drop-down is opened, you can use the `UP`, `DOWN`, `LEFT`, `RIGHT` arrow keys
 * to navigate through the dates and select one by pressing the `Space` or `Enter` keys. Moreover you can
 * use TAB to reach the buttons for changing month and year.
 *
 * If the `DatePicker` input field is focused and its corresponding picker dialog is not opened,
 * then users can increment or decrement the date referenced by `dateValue` property
 * by using the following shortcuts:
 *
 * - [PAGEDOWN] - Decrements the corresponding day of the month by one
 * - [SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one
 * - [SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one
 * - [PAGEUP] - Increments the corresponding day of the month by one
 * - [SHIFT] + [PAGEUP] - Increments the corresponding month by one
 * - [SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one
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
 * <script>
 * ```
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const DatePicker = withWebComponent<DatePickerPropTypes, DatePickerDomRef>(
  'ui5-date-picker',
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
  () => import('@ui5/webcomponents/dist/DatePicker.js')
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
export type { DatePickerDomRef, DatePickerPropTypes };
