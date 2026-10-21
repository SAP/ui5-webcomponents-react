'use client';

import '@ui5/webcomponents/dist/RatingIndicator.js';
import type RatingIndicatorSize from '@ui5/webcomponents/dist/types/RatingIndicatorSize.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface RatingIndicatorAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
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
   * Defines whether the component is in display-only mode.
   *
   * **Note:** A display-only component is visually identical to read-only
   * but cannot receive focus and is not announced by screen readers.
   *
   * **Note:** Available since [v2.26.0](https://github.com/UI5/webcomponents/releases/tag/v2.26.0) of **@ui5/webcomponents**.
   * @default false
   */
  displayOnly?: boolean;

  /**
   * The number of displayed rating symbols.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default 5
   */
  max?: number;

  /**
   * Defines the icon to be displayed for the selected (filled) rating symbol.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default "favorite"
   */
  ratedIcon?: string;

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
   * **Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the size of the component.
   *
   * **Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.
   * @default "M"
   */
  size?: RatingIndicatorSize | keyof typeof RatingIndicatorSize;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** Available since [v1.19.0](https://github.com/UI5/webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the icon to be displayed for the unselected (empty) rating symbol.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default "unfavorite"
   */
  unratedIcon?: string;

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
  extends RatingIndicatorAttributes, Omit<CommonProps, keyof RatingIndicatorAttributes | 'onChange'> {
  /**
   * The event is fired when the value changes.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
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
 * __Note:__ This is a UI5 Web Component! [RatingIndicator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/RatingIndicator) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 */
const RatingIndicator = withWebComponent<RatingIndicatorPropTypes, RatingIndicatorDomRef>(
  'ui5-rating-indicator',
  ['accessibleName', 'accessibleNameRef', 'max', 'ratedIcon', 'size', 'tooltip', 'unratedIcon', 'value'],
  ['disabled', 'displayOnly', 'readonly', 'required'],
  [],
  ['change'],
);

RatingIndicator.displayName = 'RatingIndicator';

export { RatingIndicator };
export type { RatingIndicatorDomRef, RatingIndicatorPropTypes };
