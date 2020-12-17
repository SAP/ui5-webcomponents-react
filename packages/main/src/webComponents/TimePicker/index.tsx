import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TimePicker';
import { FC, ReactNode } from 'react';

export interface TimePickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Determines whether the `TimePicker` is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Determines the format, displayed in the input field. Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)
   */
  formatPattern?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the `TimePicker` has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the `TimePicker` appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines whether the `TimePicker` is displayed as readonly.
   */
  readonly?: boolean;
  /**
   * Defines a formatted time value.
   */
  value?: string;
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
   */
  valueState?: ValueState;
  /**
   * Defines the value state message that will be displayed as pop up under the `TimePicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `TimePicker` is in `Information`, `Warning` or `Error` value state.
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value of the `TimePicker` is changed at each key stroke.
   */
  onInput?: (event: CustomEvent) => void;
}

/**
 * The `TimePicker` component provides an input field with assigned sliders which opens on user action. The `TimePicker` allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the sliders.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TimePicker" target="_blank">UI5 Web Components Playground</a>
 */
const TimePicker: FC<TimePickerPropTypes> = withWebComponent<TimePickerPropTypes>(
  'ui5-time-picker',
  ['formatPattern', 'placeholder', 'value', 'valueState'],
  ['disabled', 'readonly'],
  ['valueStateMessage'],
  ['change', 'input']
);

TimePicker.displayName = 'TimePicker';

TimePicker.defaultProps = {
  disabled: false,
  placeholder: undefined,
  readonly: false,
  value: undefined,
  valueState: ValueState.None
};

export { TimePicker };
