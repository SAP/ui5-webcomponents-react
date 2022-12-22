import '@ui5/webcomponents/dist/ProgressIndicator.js';
import { ValueState } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ProgressIndicatorAttributes {
  /**
   * Defines whether component is in disabled state.
   */
  disabled?: boolean;
  /**
   * Specifies the text value to be displayed in the bar. **Note:**
   *
   * *   If there is no value provided or the value is empty, the default percentage value is shown.
   * *   If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.
   */
  displayValue?: string;
  /**
   * Defines whether the component value is shown.
   */
  hideValue?: boolean;
  /**
   * Specifies the numerical value in percent for the length of the component. **Note:** If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
   */
  value?: number;
  /**
   * Defines the value state of the component.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
}

export interface ProgressIndicatorDomRef extends ProgressIndicatorAttributes, Ui5DomRef {}

export interface ProgressIndicatorPropTypes extends ProgressIndicatorAttributes, CommonProps {}

/**
 * Shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ProgressIndicator = withWebComponent<ProgressIndicatorPropTypes, ProgressIndicatorDomRef>(
  'ui5-progress-indicator',
  ['displayValue', 'value', 'valueState'],
  ['disabled', 'hideValue'],
  [],
  []
);

ProgressIndicator.displayName = 'ProgressIndicator';

ProgressIndicator.defaultProps = {
  value: 0,
  valueState: ValueState.None
};

export { ProgressIndicator };
