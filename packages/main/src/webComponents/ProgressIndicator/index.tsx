import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface ProgressIndicatorPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether <code>ui5-progress-indicator</code> is in disabled state.
   */
  disabled?: boolean;
  /**
   * Defines whether <code>ui5-progress-indicator</code> value is shown.
   */
  hideValue?: boolean;
  /**
   * Specifies the numerical value in percent for the length of the <code>ui5-progress-indicator</code>.<br/><br/>
   *
   * <b>Note:</b> If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
   */
  value?: number;
  /**
   * Defines the value state of the <code>ui5-progress-indicator</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator" target="_blank">UI5 Web Components Playground</a>
 */
const ProgressIndicator: FC<ProgressIndicatorPropTypes> = withWebComponent<ProgressIndicatorPropTypes>(
  'ui5-progress-indicator',
  () => import('@ui5/webcomponents/dist/ProgressIndicator'),
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
