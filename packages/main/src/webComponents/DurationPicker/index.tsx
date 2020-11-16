import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DurationPicker';
import { FC, ReactNode } from 'react';

export interface DurationPickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Determines whether the `DurationPicker` is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Defines whether the slider for hours will be available. By default there are sliders for hours, minutes and seconds.
   */
  hideHours?: boolean;
  /**
   * Defines whether the slider for minutes will be available. By default there are sliders for hours, minutes and seconds.
   */
  hideMinutes?: boolean;
  /**
   * Defines whether a slider for seconds will be available. By default there are sliders for hours, minutes and seconds.
   */
  hideSeconds?: boolean;
  /**
   * Defines a formatted maximal time that the user will be able to adjust.
   */
  maxValue?: string;
  /**
   * Defines the selection step for the minutes
   */
  minutesStep?: number;
  /**
   * Determines whether the `DurationPicker` is displayed as readonly.
   */
  readonly?: boolean;
  /**
   * Defines the selection step for the seconds
   */
  secondsStep?: number;
  /**
   * Defines a formatted time value.
   */
  value?: string;
  /**
   * Visualizes the validation state of the Web Component, for example `Error`, `Warning` and `Success`.
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: string;
  /**
   * Defines the value state message that will be displayed as pop up under the `DurationPicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `DurationPicker` is in `Information`, `Warning` or `Error` value state.
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent) => void;
}

/**
 * The `DurationPicker` component provides an input field with assigned sliders which opens on user action. The `DurationPicker` allows users to select a time duration. It consists of two parts: the time input field and the sliders.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DurationPicker" target="_blank">UI5 Web Components Playground</a>
 */
const DurationPicker: FC<DurationPickerPropTypes> = withWebComponent<DurationPickerPropTypes>(
  'ui5-duration-picker',
  ['maxValue', 'minutesStep', 'secondsStep', 'value', 'valueState'],
  ['disabled', 'hideHours', 'hideMinutes', 'hideSeconds', 'readonly'],
  ['valueStateMessage'],
  ['change']
);

DurationPicker.displayName = 'DurationPicker';

DurationPicker.defaultProps = {
  disabled: false,
  hideHours: false,
  hideMinutes: false,
  hideSeconds: false,
  maxValue: '23:59:59',
  minutesStep: 1,
  readonly: false,
  secondsStep: 1,
  value: '00:00:00',
  valueState: 'None'
};

export { DurationPicker };
