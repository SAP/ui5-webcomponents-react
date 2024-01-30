'use client';

import '@ui5/webcomponents/dist/RangeSlider.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface RangeSliderAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Defines whether the slider is in disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines end point of a selection - position of a second handle on the slider.
   * @default 100
   */
  endValue?: number;

  /**
   * Displays a label with a value on every N-th step.
   *
   * **Note:** The step and tickmarks properties must be enabled. Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second tickmark will be labelled, which means every 4th value number.
   * @default 0
   */
  labelInterval?: number;

  /**
   * Defines the maximum value of the slider.
   * @default 100
   */
  max?: number;

  /**
   * Defines the minimum value of the slider.
   * @default 0
   */
  min?: number;

  /**
   * Enables tickmarks visualization for each step.
   *
   * **Note:** The step must be a positive number.
   * @default false
   */
  showTickmarks?: boolean;

  /**
   * Enables handle tooltip displaying the current value.
   * @default false
   */
  showTooltip?: boolean;

  /**
   * Defines start point of a selection - position of a first handle on the slider.
   * @default 0
   */
  startValue?: number;

  /**
   * Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
   *
   * **Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.
   * @default 1
   */
  step?: number;
}

interface RangeSliderDomRef extends RangeSliderAttributes, Ui5DomRef {}

interface RangeSliderPropTypes
  extends RangeSliderAttributes,
    Omit<CommonProps, keyof RangeSliderAttributes | 'onChange' | 'onInput'> {
  /**
   * Fired when the value changes and the user has finished interacting with the slider.
   */
  onChange?: (event: Ui5CustomEvent<RangeSliderDomRef>) => void;

  /**
   * Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.
   */
  onInput?: (event: Ui5CustomEvent<RangeSliderDomRef>) => void;
}

/**
 * Represents a numerical interval and two handles (grips) to select a sub-range within it. The purpose of the component to enable visual selection of sub-ranges within a given interval.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const RangeSlider = withWebComponent<RangeSliderPropTypes, RangeSliderDomRef>(
  'ui5-range-slider',
  ['accessibleName', 'endValue', 'labelInterval', 'max', 'min', 'startValue', 'step'],
  ['disabled', 'showTickmarks', 'showTooltip'],
  [],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/RangeSlider.js')
);

RangeSlider.displayName = 'RangeSlider';

export { RangeSlider };
export type { RangeSliderDomRef, RangeSliderPropTypes };
