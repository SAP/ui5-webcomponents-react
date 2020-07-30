import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DurationPicker';
import { FC } from 'react';

export interface DurationPickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Determines whether the <code>ui5-duration-picker</code> is displayed as disabled.
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
   * Determines whether the <code>ui5-duration-picker</code> is displayed as readonly.
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
   * Visualizes the validation state of the Web Component, for example <code>Error</code>, <code>Warning</code> and <code>Success</code>.<br/><br/>
   *
   * <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: string;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { DurationPicker } from '@ui5/webcomponents-react/lib/DurationPicker';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DurationPicker" target="_blank">UI5 Web Components Playground</a>
 */
const DurationPicker: FC<DurationPickerPropTypes> = withWebComponent<DurationPickerPropTypes>(
  'ui5-duration-picker',
  ['maxValue', 'minutesStep', 'secondsStep', 'value', 'valueState'],
  ['disabled', 'hideHours', 'hideMinutes', 'hideSeconds', 'readonly'],
  [],
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
