import '@ui5/webcomponents/dist/RatingIndicator.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface RatingIndicatorAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * The number of displayed rating symbols.
   */
  max?: number;
  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * The indicated value of the rating.
   *
   * **Note:** If you set a number which is not round, it would be shown as follows:
   *
   * *   1.0 - 1.2 -> 1
   * *   1.3 - 1.7 -> 1.5
   * *   1.8 - 1.9 -> 2
   */
  value?: number;
}

export interface RatingIndicatorDomRef extends RatingIndicatorAttributes, Ui5DomRef {}

export interface RatingIndicatorPropTypes extends RatingIndicatorAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * The event is fired when the value changes.
   */
  onChange?: (event: Ui5CustomEvent<RatingIndicatorDomRef>) => void;
}

/**
 * The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const RatingIndicator = withWebComponent<RatingIndicatorPropTypes, RatingIndicatorDomRef>(
  'ui5-rating-indicator',
  ['accessibleName', 'max', 'value'],
  ['disabled', 'readonly'],
  [],
  ['change']
);

RatingIndicator.displayName = 'RatingIndicator';

RatingIndicator.defaultProps = {
  max: 5,
  value: 0
};

export { RatingIndicator };
