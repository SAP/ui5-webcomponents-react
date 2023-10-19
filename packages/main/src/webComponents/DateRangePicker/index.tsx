'use client';

import '@ui5/webcomponents/dist/DateRangePicker.js';
import type {
  DateRangePickerChangeEventDetail,
  DateRangePickerInputEventDetail
} from '@ui5/webcomponents/dist/DateRangePicker.js';
import type { CalendarType } from '../../enums/index.js';
import { ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface DateRangePickerAttributes {
  /**
   * Determines the symbol which separates the dates. If not supplied, the default time interval delimiter for the current locale will be used.
   */
  delimiter?: string;
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
   */
  disabled?: boolean;
  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.
   */
  hideWeekNumbers?: boolean;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the component has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines whether the component is displayed as read-only.
   */
  readonly?: boolean;
  /**
   * Defines whether the component is required.
   */
  required?: boolean;
  /**
   * Defines a formatted date value.
   */
  value?: string;
  /**
   * Defines the value state of the component.
   */
  valueState?: ValueState | keyof typeof ValueState;
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Determines the maximum date available for selection. **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  maxDate?: string;
  /**
   * Determines the minimum date available for selection. **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).
   */
  minDate?: string;
  /**
   * Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`
   */
  primaryCalendarType?: CalendarType | keyof typeof CalendarType;
  /**
   * Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.
   */
  secondaryCalendarType?: CalendarType | keyof typeof CalendarType;
}

export interface DateRangePickerDomRef extends DateRangePickerAttributes, Ui5DomRef {
  /**
   * Returns the end date of the currently selected range as JavaScript Date instance.
   */
  readonly endDateValue: Date;
  /**
   * Returns the start date of the currently selected range as JavaScript Date instance.
   */
  readonly startDateValue: Date;
  /**
   * Closes the picker.
   */
  closePicker: () => void;
  /**
   * Formats a Java Script date object into a string representing a locale date according to the `formatPattern` property of the DatePicker instance
   * @param {Date} date - A Java Script date object to be formatted as string
   * @returns {string} The date as string
   */
  formatValue: (date: Date) => string;
  /**
   * Checks if a date is between the minimum and maximum date.
   * @param {string} [value] - A value to be checked
   * @returns {boolean}
   */
  isInValidRange: (value?: string) => boolean;
  /**
   * Checks if the picker is open.
   * @returns {boolean} true if the picker is open, false otherwise
   */
  isOpen: () => boolean;
  /**
   * Checks if a value is valid against the current date format of the DatePicker.
   * @param {string} [value] - A value to be tested against the current date format
   * @returns {boolean}
   */
  isValid: (value?: string) => boolean;
  /**
   * Opens the picker.
   * @returns {Promise<void>} Resolves when the picker is open
   */
  openPicker: () => Promise<void>;
}

export interface DateRangePickerPropTypes extends DateRangePickerAttributes, Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
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
   *__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.
   */
  onChange?: (event: Ui5CustomEvent<DateRangePickerDomRef, DateRangePickerChangeEventDetail>) => void;
  /**
   * Fired when the value of the component is changed at each key stroke.
   */
  onInput?: (event: Ui5CustomEvent<DateRangePickerDomRef, DateRangePickerInputEventDetail>) => void;
}

/**
 * The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-DateRangePicker)
 */
const DateRangePicker = withWebComponent<DateRangePickerPropTypes, DateRangePickerDomRef>(
  'ui5-daterange-picker',
  [
    'delimiter',
    'accessibleName',
    'accessibleNameRef',
    'name',
    'placeholder',
    'value',
    'valueState',
    'formatPattern',
    'maxDate',
    'minDate',
    'primaryCalendarType',
    'secondaryCalendarType'
  ],
  ['disabled', 'hideWeekNumbers', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/DateRangePicker.js')
);

DateRangePicker.displayName = 'DateRangePicker';

DateRangePicker.defaultProps = {
  delimiter: '-',
  valueState: ValueState.None
};

export { DateRangePicker };
