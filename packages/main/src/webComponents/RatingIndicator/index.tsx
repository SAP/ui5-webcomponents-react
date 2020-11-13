import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/RatingIndicator';
import { FC } from 'react';

export interface RatingIndicatorPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines whether the `RatingIndicator` is disabled.
   *
   * **Note:** A disabled `RatingIndicator` is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * The number of displayed rating symbols
   */
  maxValue?: number;
  /**
   * Defines whether the `RatingIndicator` is read-only.
   *
   * **Note:** A read-only `RatingIndicator` is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * The indicated value of the rating
   *
   * **Note:** If you set a number which is not round, it would be shown as follows:
   *
   * *   1.0 - 1.2 -> 1
   * *   1.3 - 1.7 -> 1.5
   * *   1.8 - 1.9 -> 2
   */
  value?: number;
  /**
   * The event is fired when the value changes.
   */
  onChange?: (event: CustomEvent) => void;
}

/**
 * The rating indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator" target="_blank">UI5 Web Components Playground</a>
 */
const RatingIndicator: FC<RatingIndicatorPropTypes> = withWebComponent<RatingIndicatorPropTypes>(
  'ui5-rating-indicator',
  ['maxValue', 'value'],
  ['disabled', 'readonly'],
  [],
  ['change']
);

RatingIndicator.displayName = 'RatingIndicator';

RatingIndicator.defaultProps = {
  disabled: false,
  maxValue: 5,
  readonly: false,
  value: 0
};

export { RatingIndicator };
