'use client';

import '@ui5/webcomponents/dist/RatingIndicator.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface RatingIndicatorAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * The number of displayed rating symbols.
   * @default 5
   */
  max?: number;

  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the tooltip of the component.
   */
  tooltip?: string;

  /**
   * The indicated value of the rating.
   *
   * **Note:** If you set a number which is not round, it would be shown as follows:
   *
   * *   1.0 - 1.2 -> 1
   * *   1.3 - 1.7 -> 1.5
   * *   1.8 - 1.9 -> 2
   * @default 0
   */
  value?: number;
}

interface RatingIndicatorDomRef extends RatingIndicatorAttributes, Ui5DomRef {}

interface RatingIndicatorPropTypes
  extends RatingIndicatorAttributes,
    Omit<CommonProps, keyof RatingIndicatorAttributes | 'onChange'> {
  /**
   * The event is fired when the value changes.
   */
  onChange?: (event: Ui5CustomEvent<RatingIndicatorDomRef>) => void;
}

/**
 * The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const RatingIndicator = withWebComponent<RatingIndicatorPropTypes, RatingIndicatorDomRef>(
  'ui5-rating-indicator',
  ['accessibleName', 'accessibleNameRef', 'max', 'tooltip', 'value'],
  ['disabled', 'readonly', 'required'],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/RatingIndicator.js')
);

RatingIndicator.displayName = 'RatingIndicator';

export { RatingIndicator };
export type { RatingIndicatorDomRef, RatingIndicatorPropTypes };
