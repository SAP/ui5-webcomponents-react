import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ProgressIndicator';
import { FC } from 'react';

export interface ProgressIndicatorPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether `ProgressIndicator` is in disabled state.
   */
  disabled?: boolean;
  /**
   * Defines whether `ProgressIndicator` value is shown.
   */
  hideValue?: boolean;
  /**
   * Specifies the numerical value in percent for the length of the `ProgressIndicator`. **Note:** If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
   */
  value?: number;
  /**
   * Defines the value state of the `ProgressIndicator`.
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
}

/**
 * Shows the progress of a process in a graphical way. To indicate the progress, the inside of the `ProgressIndicator` is filled with a color.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator" target="_blank">UI5 Web Components Playground</a>
 */
const ProgressIndicator: FC<ProgressIndicatorPropTypes> = withWebComponent<ProgressIndicatorPropTypes>(
  'ui5-progress-indicator',
  ['value', 'valueState'],
  ['disabled', 'hideValue'],
  [],
  []
);

ProgressIndicator.displayName = 'ProgressIndicator';

ProgressIndicator.defaultProps = {
  disabled: false,
  hideValue: false,
  value: 0,
  valueState: ValueState.None
};

export { ProgressIndicator };
