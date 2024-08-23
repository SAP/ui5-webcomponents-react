'use client';

import '@ui5/webcomponents/dist/RatingIndicator.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface RatingIndicatorAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

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
   * **Note:** A read-only component is not editable,
   * but still provides visual feedback upon user interaction.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   *
   * **Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * The indicated value of the rating.
   *
   * **Note:** If you set a number which is not round, it would be shown as follows:
   *
   * - 1.0 - 1.2 -> 1
   * - 1.3 - 1.7 -> 1.5
   * - 1.8 - 1.9 -> 2
   * @default 0
   */
  value?: number;
}

interface RatingIndicatorDomRef extends Required<RatingIndicatorAttributes>, Ui5DomRef {}

interface RatingIndicatorPropTypes
  extends RatingIndicatorAttributes,
    Omit<CommonProps, keyof RatingIndicatorAttributes | 'onChange'> {
  /**
   * The event is fired when the value changes.
   */
  onChange?: (event: Ui5CustomEvent<RatingIndicatorDomRef>) => void;
}

/**
 * The Rating Indicator is used to display a specific number of icons that are used to rate an item.
 * Additionally, it is also used to display the average and overall ratings.
 *
 * ### Usage
 * The recommended number of icons is between 5 and 7.
 *
 * ### Responsive Behavior
 * You can change the size of the Rating Indicator by changing its `font-size` CSS property.
 *
 * Example: `<RatingIndicator style="font-size: 3rem;"></RatingIndicator>`
 *
 * ### Keyboard Handling
 * When the `RatingIndicator` is focused, the user can change the rating
 * with the following keyboard shortcuts:
 *
 * - [RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing
 * - [LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
 * - [Home] - Sets the lowest value.
 * - [End] - Sets the highest value.
 * - [SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
 * - Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const RatingIndicator = withWebComponent<RatingIndicatorPropTypes, RatingIndicatorDomRef>(
  'ui5-rating-indicator',
  ['accessibleName', 'accessibleNameRef', 'max', 'tooltip', 'value'],
  ['disabled', 'readonly', 'required'],
  [],
  ['change']
);

RatingIndicator.displayName = 'RatingIndicator';

export { RatingIndicator };
export type { RatingIndicatorDomRef, RatingIndicatorPropTypes };
