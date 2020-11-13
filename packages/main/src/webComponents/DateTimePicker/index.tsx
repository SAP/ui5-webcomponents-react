import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DateTimePicker';
import { FC, ReactNode } from 'react';

export interface DateTimePickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Determines whether the <code>DatePicker</code> is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Defines the visibility of the week numbers column. <br><br><br/><br/>
   *
   * <b>Note:<b> For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.
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
   * Determines the name with which the <code>DatePicker</code> will be submitted in an HTML form.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>DatePicker</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the <code>DatePicker</code> has no value.<br/><br/>
   *
   * <b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the <code>DatePicker</code> appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines the calendar type. The input value is formated according to the calendar type and the picker shows the months and years from the specified calendar. <br><br> Available options are: <ul> <li><code>Gregorian</code></li> <li><code>Islamic</code></li> <li><code>Japanese</code></li> <li><code>Buddhist</code></li> <li><code>Persian</code></li> </ul><br/><b>Note:</b> Calendar types other than Gregorian must be imported manually:<br /><code>import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";</code>
   */
  primaryCalendarType?: CalendarType;
  /**
   * Determines whether the <code>DatePicker</code> is displayed as read-only.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ui5-datepicker</code> is required.
   */
  required?: boolean;
  /**
   * Defines a formatted date value.
   */
  value?: string;
  /**
   * Defines the value state of the <code>DatePicker</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the value state message that will be displayed as pop up under the <code>DatePicker</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>DatePicker</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value of the <code>DatePicker</code> is changed at each key stroke.
   */
  onInput?: (event: CustomEvent) => void;
}

/**
 *  The <code>DateTimePicker</code> component alows users to select both date (day, month and year) and time (hours, minutes and seconds) and for the purpose it consists of input field and Date/Time picker.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DateTimePicker" target="_blank">UI5 Web Components Playground</a>
 */
const DateTimePicker: FC<DateTimePickerPropTypes> = withWebComponent<DateTimePickerPropTypes>(
  'ui5-datetime-picker',
  ['formatPattern', 'maxDate', 'minDate', 'name', 'placeholder', 'primaryCalendarType', 'value', 'valueState'],
  ['disabled', 'hideWeekNumbers', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change', 'input']
);

DateTimePicker.displayName = 'DateTimePicker';

DateTimePicker.defaultProps = {
  disabled: false,
  hideWeekNumbers: false,
  placeholder: undefined,
  primaryCalendarType: CalendarType.Gregorian,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { DateTimePicker };
