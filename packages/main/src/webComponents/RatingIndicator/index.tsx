import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/RatingIndicator';
import { FC } from 'react';

export interface RatingIndicatorPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines whether the <code>RatingIndicator</code> is disabled.<br/><br/>
   *
   * <b>Note:</b> A disabled <code>RatingIndicator</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * The number of displayed rating symbols
   */
  maxValue?: number;
  /**
   * Defines whether the <code>RatingIndicator</code> is read-only. <br><br> <b>Note:</b> A read-only <code>RatingIndicator</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * The indicated value of the rating <br><br> <b>Note:</b> If you set a number which is not round, it would be shown as follows: <ul> <li>1.0 - 1.2 -> 1</li> <li>1.3 - 1.7 -> 1.5</li> <li>1.8 - 1.9 -> 2</li> <ul>
   */
  value?: number;
  /**
   * The event is fired when the value changes.
   */
  onChange?: (event: CustomEvent<{}>) => void;
}

/**
 * The rating indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is
 also used to display the average and overall ratings.

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
