import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DatePicker';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface DatePickerPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines whether the <code>ui5-datepicker</code> is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the minimum date available for selection.
   */
  minDate?: string;
  /**
 * Determines the name with which the <code>ui5-datepicker</code> will be submitted in an HTML form.

<br><br> <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>

<br><br> <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>ui5-datepicker</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
 */
  name?: string;
  /**
 * Defines a short hint, intended to aid the user with data entry when the <code>ui5-datepicker</code> has no value.

<br><br> <b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the <code>ui5-datepicker</code> appear empty - without placeholder or format pattern.
 */
  placeholder?: string;
  /**
   * Determines the calendar type. The input value is formated according to the calendar type and the picker shows the months and years from the specified calendar. <br><br> Available options are: <ul> <li><code>Gregorian</code></li> <li><code>Islamic</code></li> <li><code>Japanese</code></li> <li><code>Buddhist</code></li> <li><code>Persian</code></li> </ul>
   */
  primaryCalendarType?: CalendarType;
  /**
   * Determines whether the <code>ui5-datepicker</code> is displayed as read-only.
   */
  readonly?: boolean;
  /**
   * Defines a formatted date value.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-datepicker</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>ui5-datepicker</code> is changed at each key stroke.
   */
  onInput?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DatePicker" target="_blank">UI5 Web Components Playground</a>
 */
const DatePicker: FC<DatePickerPropTypes> = withWebComponent<DatePickerPropTypes>(
  'ui5-datepicker',
  ['formatPattern', 'maxDate', 'minDate', 'name', 'placeholder', 'primaryCalendarType', 'value', 'valueState'],
  ['disabled', 'readonly'],
  [],
  ['change', 'input']
);

DatePicker.displayName = 'DatePicker';

DatePicker.defaultProps = {
  disabled: false,
  formatPattern: '',
  maxDate: '',
  minDate: '',
  name: '',
  placeholder: undefined,
  primaryCalendarType: CalendarType.Gregorian,
  readonly: false,
  value: '',
  valueState: ValueState.None
};

export { DatePicker };
