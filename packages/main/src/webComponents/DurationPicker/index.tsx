import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DurationPicker';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface DurationPickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Determines whether the <code>ui5-duration-picker</code> is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Defines a formatted maximal time that the user will be able to adjust.
   */
  maxValue?: string;
  /**
   * Determines whether the <code>ui5-duration-picker</code> is displayed as readonly.
   */
  readonly?: boolean;
  /**
   * Defines whether a slider for secconds will be available. By default there are sliders for hours and minutes only.
   */
  showSeconds?: boolean;
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
  ['maxValue', 'value', 'valueState'],
  ['disabled', 'readonly', 'showSeconds'],
  [],
  ['change']
);

DurationPicker.displayName = 'DurationPicker';

DurationPicker.defaultProps = {
  disabled: false,
  maxValue: '00:00:00',
  readonly: false,
  showSeconds: false,
  value: '00:00:00',
  valueState: 'None'
};

export { DurationPicker };
