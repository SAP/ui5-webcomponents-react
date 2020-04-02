import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TimePicker from '@ui5/webcomponents/dist/TimePicker';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TimePickerPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines whether the <code>ui5-timepicker</code> is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Determines the format, displayed in the input field.
   * Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)
   */
  formatPattern?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the <code>ui5-timepicker</code> has no value.
   * <br><br> <b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the <code>ui5-timepicker</code> appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines whether the <code>ui5-timepicker</code> is displayed as readonly.
   */
  readonly?: boolean;
  /**
   * Defines a formatted time value.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-timepicker</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>ui5-timepicker</code> is changed at each key stroke.
   */
  onInput?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TimePicker" target="_blank">UI5 Web Components Playground</a>
 */
const TimePicker: FC<TimePickerPropTypes> = withWebComponent<TimePickerPropTypes>(UI5TimePicker);

TimePicker.displayName = 'TimePicker';

TimePicker.defaultProps = {
  disabled: false,
  formatPattern: '',
  placeholder: undefined,
  readonly: false,
  value: '',
  valueState: ValueState.None
};

export { TimePicker };
