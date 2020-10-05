import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TimePicker';
import { FC, ReactNode } from 'react';

export interface TimePickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Determines whether the <code>TimePicker</code> is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Determines the format, displayed in the input field.<br/><br/>
   *
   * Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)
   */
  formatPattern?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the <code>TimePicker</code> has no value.<br/><br/>
   *
   * <b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the <code>TimePicker</code> appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines whether the <code>TimePicker</code> is displayed as readonly.
   */
  readonly?: boolean;
  /**
   * Defines a formatted time value.
   */
  value?: string;
  /**
   * Defines the value state of the <code>TimePicker</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the value state message that will be displayed as pop up under the <code>TimePicker</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>TimePicker</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>TimePicker</code> is changed at each key stroke.
   */
  onInput?: (event: CustomEvent<{}>) => void;
}

/**
 * The <code>TimePicker</code> component provides an input field with assigned sliders which opens on user action. The
 <code>TimePicker</code> allows users to select a localized time using touch, mouse, or keyboard input. It consists of
 two parts: the time input field and the sliders.

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
