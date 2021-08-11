import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DateTimePicker';
import { FC, ReactNode } from 'react';

export interface DateTimePickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Determines whether the `DatePicker` is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note: **For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.****
   */
  hideWeekNumbers?: boolean;
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
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the мinimum date available for selection.
   */
  minDate?: string;
  /**
   * Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`
   */
  primaryCalendarType?: CalendarType;
  /**
   * Defines the value state message that will be displayed as pop up under the `DatePicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `DatePicker` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent<{ value: string; valid: boolean }>) => void;
  /**
   * Fired when the value of the `DatePicker` is changed at each key stroke.
   */
  onInput?: (event: CustomEvent<{ value: string; valid: boolean }>) => void;
}

/**
 * The `DateTimePicker` component alows users to select both date (day, month and year) and time (hours, minutes and seconds) and for the purpose it consists of input field and Date/Time picker.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DateTimePicker" target="_blank">UI5 Web Components Playground</a>
 */
const DateTimePicker: FC<DateTimePickerPropTypes> = withWebComponent<DateTimePickerPropTypes>(
  'ui5-datetime-picker',
  ['name', 'placeholder', 'value', 'valueState', 'formatPattern', 'maxDate', 'minDate', 'primaryCalendarType'],
  ['disabled', 'hideWeekNumbers', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change', 'input']
);

DateTimePicker.displayName = 'DateTimePicker';

DateTimePicker.defaultProps = {
  disabled: false,
  hideWeekNumbers: false,
  placeholder: undefined,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { DateTimePicker };
