'use client';

import '@ui5/webcomponents/dist/TimePicker.js';
import type { TimePickerChangeEventDetail, TimePickerInputEventDetail } from '@ui5/webcomponents/dist/TimePicker.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TimePickerAttributes {
  /**
   * Defines the disabled state of the comonent.
   * @default false
   */
  disabled?: boolean;

  /**
   * Determines the format, displayed in the input field.
   *
   * Example:
   * HH:mm:ss -> 11:42:35
   * hh:mm:ss a -> 2:23:15 PM
   * mm:ss -> 12:04 (only minutes and seconds)
   */
  formatPattern?: string;

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
   * Defines the readonly state of the comonent.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines a formatted time value.
   * @default undefined
   */
  value?: string | undefined;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface TimePickerDomRef extends Required<TimePickerAttributes>, Ui5DomRef {
  /**
   * Closes the picker
   * @returns {void} - Resolves when the picker is closed
   */
  closePicker: () => void;

  /**
   * Currently selected time represented as JavaScript Date instance
   */
  readonly dateValue: Date | Array<Date> | null;

  /**
   * Formats a Java Script date object into a string representing a locale date and time
   * according to the `formatPattern` property of the TimePicker instance
   * @param {Date} date - A Java Script date object to be formatted as string
   * @returns {string} - formatted value
   */
  formatValue: (date: Date) => string;

  /**
   * Checks if the picker is open
   * @returns {boolean}
   */
  isOpen: () => boolean;

  /**
   * Checks if a value is valid against the current `formatPattern` value.
   *
   * **Note:** an empty string is considered as valid value.
   * @param {string | undefined} value - The value to be tested against the current date format
   * @returns {boolean}
   */
  isValid: (value: string | undefined) => boolean;

  /**
   * Opens the picker.
   * @returns {void} - Resolves when the picker is open
   */
  openPicker: () => void;
}

interface TimePickerPropTypes
  extends TimePickerAttributes,
    Omit<CommonProps, keyof TimePickerAttributes | 'valueStateMessage' | 'onChange' | 'onInput'> {
  /**
   * Defines the value state message that will be displayed as pop up under the `TimePicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the `TimePicker` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by clicking the "OK" button or
   * when the text in the input field has changed and the focus leaves the input field.
   */
  onChange?: (event: Ui5CustomEvent<TimePickerDomRef, TimePickerChangeEventDetail>) => void;

  /**
   * Fired when the value of the `TimePicker` is changed at each key stroke.
   */
  onInput?: (event: Ui5CustomEvent<TimePickerDomRef, TimePickerInputEventDetail>) => void;
}

/**
 * The `TimePicker` component provides an input field with assigned clocks which are opened on user action.
 * The `TimePicker` allows users to select a localized time using touch, mouse, or keyboard input.
 * It consists of two parts: the time input field and the clocks.
 *
 * ### Usage
 * The user can enter a time by:
 *
 * - Using the clocks that are displayed in a popup
 * - Typing it in directly in the input field
 *
 * When the user makes an entry and chooses the enter key, the clocks show the corresponding time (hours, minutes and seconds separately).
 * When the user directly triggers the clocks display, the actual time is displayed.
 * For the `TimePicker`
 *
 * ### Formatting
 *
 * If a time is entered by typing it into
 * the input field, it must fit to the used time format.
 *
 * Supported format options are pattern-based on Unicode LDML Date Format notation.
 * For more information, see [UTS #35: Unicode Locale Data Markup Language](http://unicode.org/reports/tr35/#Date_Field_Symbol_Table).
 *
 * For example, if the `format-pattern` is "HH:mm:ss",
 * a valid value string is "11:42:35" and the same is displayed in the input.
 *
 * ### Keyboard handling
 * [F4], [Alt]+[Up], [Alt]+[Down] Open/Close picker dialog and move focus to it.
 *
 * When closed:
 *
 * - [Page Up] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
 * - [Page Down] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
 * - [Shift]+[Page Up] - Increments minutes by 1.
 * - [Shift]+[Page Down] - Decrements minutes by 1.
 * - [Shift]+[Ctrl]+[Page Up] - Increments seconds by 1.
 * - [Shift]+[Ctrl]+[Page Down] - Decrements seconds by 1.
 * -
 *
 * When opened:
 *
 * - [Page Up] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
 * - [Page Down] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
 * - [Shift]+[Page Up] - Increments minutes by 1.
 * - [Shift]+[Page Down] - Decrements minutes by 1.
 * - [Shift]+[Ctrl]+[Page Up] - Increments seconds by 1.
 * - [Shift]+[Ctrl]+[Page Down] - Decrements seconds by 1.
 * - [A] or [P] - Selects AM or PM respectively.
 * - [0]-[9] - Allows direct time selecting (hours/minutes/seconds).
 * - [:] - Allows switching between hours/minutes/seconds clocks. If the last clock is displayed and [:] is pressed, the first clock is beind displayed.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TimePicker = withWebComponent<TimePickerPropTypes, TimePickerDomRef>(
  'ui5-time-picker',
  ['formatPattern', 'placeholder', 'value', 'valueState'],
  ['disabled', 'readonly'],
  ['valueStateMessage'],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/TimePicker.js')
);

TimePicker.displayName = 'TimePicker';

export { TimePicker };
export type { TimePickerDomRef, TimePickerPropTypes };
