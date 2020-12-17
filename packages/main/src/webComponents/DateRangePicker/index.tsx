import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DateRangePicker';
import { FC, ReactNode } from 'react';

export interface DateRangePickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Determines the symbol which separates the dates.
   */
  delimiter?: string;
  /**
   * Determines whether the `DatePicker` is displayed as disabled.
   */
  disabled?: boolean;
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
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the minimum date available for selection.
   */
  minDate?: string;
  /**
   * Determines the name with which the `DatePicker` will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the `DatePicker` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the `DatePicker` has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the `DatePicker` appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines the calendar type. The input value is formated according to the calendar type and the picker shows the months and years from the specified calendar.
   *
   * Available options are:
   *
   * *   `Gregorian`
   * *   `Islamic`
   * *   `Japanese`
   * *   `Buddhist`
   * *   `Persian`<br/><b>Note:</b> Calendar types other than Gregorian must be imported manually:<br /><code>import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";</code>
   */
  primaryCalendarType?: CalendarType;
  /**
   * Determines whether the `DatePicker` is displayed as read-only.
   */
  readonly?: boolean;
  /**
   * Defines whether the `DatePicker` is required.
   */
  required?: boolean;
  /**
   * Defines a formatted date value.
   */
  value?: string;
  /**
   * Defines the value state of the `DatePicker`.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState;
  /**
   * Defines the value state message that will be displayed as pop up under the `DatePicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `DatePicker` is in `Information`, `Warning` or `Error` value state.
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value of the `DatePicker` is changed at each key stroke.
   */
  onInput?: (event: CustomEvent) => void;
}

/**
 * The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DateRangePicker" target="_blank">UI5 Web Components Playground</a>
 */
const DateRangePicker: FC<DateRangePickerPropTypes> = withWebComponent<DateRangePickerPropTypes>(
  'ui5-daterange-picker',
  [
    'delimiter',
    'formatPattern',
    'maxDate',
    'minDate',
    'name',
    'placeholder',
    'primaryCalendarType',
    'value',
    'valueState'
  ],
  ['disabled', 'hideWeekNumbers', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change', 'input']
);

DateRangePicker.displayName = 'DateRangePicker';

DateRangePicker.defaultProps = {
  delimiter: '-',
  disabled: false,
  hideWeekNumbers: false,
  placeholder: undefined,
  primaryCalendarType: CalendarType.Gregorian,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { DateRangePicker };
