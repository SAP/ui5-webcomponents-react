'use client';

import '@ui5/webcomponents/dist/TimePicker.js';
import type {
  TimePickerBaseChangeEventDetail,
  TimePickerBaseInputEventDetail
} from '@ui5/webcomponents/dist/TimePickerBase.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TimePickerAttributes {
  /**
   * Determines whether the `TimePicker` is displayed as disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Determines the format, displayed in the input field. Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)
   */
  formatPattern?: string;

  /**
   * Defines a short hint, intended to aid the user with data entry when the component has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Determines whether the `TimePicker` is displayed as readonly.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines a formatted time value.
   * @default undefined
   */
  value?: string | undefined;

  /**
   * Defines the value state of the `TimePicker`.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface TimePickerDomRef extends TimePickerAttributes, Ui5DomRef {
  /**
   * Closes the picker
   * @returns {Promise<void>} - Resolves when the picker is closed
   */
  closePicker: () => Promise<void>;

  /**
   * Currently selected time represented as JavaScript Date instance
   */
  readonly dateValue: Date | Array<Date> | null;

  /**
   * Formats a Java Script date object into a string representing a locale date and time according to the `formatPattern` property of the TimePicker instance
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
   * @returns {Promise<void>} - Resolves when the picker is open
   */
  openPicker: () => Promise<void>;
}

interface TimePickerPropTypes
  extends TimePickerAttributes,
    Omit<CommonProps, keyof TimePickerAttributes | 'onChange' | 'onInput'> {
  /**
   * Defines the value state message that will be displayed as pop up under the `TimePicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `TimePicker` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.
   */
  onChange?: (event: Ui5CustomEvent<TimePickerDomRef, TimePickerBaseChangeEventDetail>) => void;

  /**
   * Fired when the value of the `TimePicker` is changed at each key stroke.
   */
  onInput?: (event: Ui5CustomEvent<TimePickerDomRef, TimePickerBaseInputEventDetail>) => void;
}

/**
 * The `TimePicker` component provides an input field with assigned clocks which are opened on user action. The `TimePicker` allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the clocks.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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
