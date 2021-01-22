import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';

export interface RangeSliderPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Defines end point of a selection - position of a second handle on the slider.
   */
  endValue?: number;
  /**
   * Defines start point of a selection - position of a first handle on the slider.
   */
  startValue?: number;
  /**
   * Defines whether the slider is in disabled state.
   */
  disabled?: boolean;
  /**
   * Displays a label with a value on every N-th step.
   *
   * **Note:** The step and tickmarks properties must be enabled. Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second tickmark will be labelled, which means every 4th value number.
   */
  labelInterval?: number;
  /**
   * Defines the maximum value of the slider
   */
  max?: number;
  /**
   * Defines the minimum value of the slider
   */
  min?: number;
  /**
   * Enables tick marks visualization for each step.
   *
   * **Note:** The step must be a positive number.
   */
  showTickmarks?: boolean;
  /**
   * Enables handle tooltip displaying the current value.
   */
  showTooltip?: boolean;
  /**
   * Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
   *
   * **Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.
   */
  step?: number;
  /**
   * Fired when the value changes and the user has finished interacting with the slider.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.
   */
  onInput?: (event: CustomEvent) => void;
}

/**
 * Represents a numerical interval and two handles (grips) to select a sub-range within it. The purpose of the component to enable visual selection of sub-ranges within a given interval.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/RangeSlider" target="_blank">UI5 Web Components Playground</a>
 */
const RangeSlider: FC<RangeSliderPropTypes> = withWebComponent<RangeSliderPropTypes>(
  'ui5-range-slider',
  () => import('@ui5/webcomponents/dist/RangeSlider'),
  ['endValue', 'startValue', 'labelInterval', 'max', 'min', 'step'],
  ['disabled', 'showTickmarks', 'showTooltip'],
  [],
  ['change', 'input']
);

RangeSlider.displayName = 'RangeSlider';

RangeSlider.defaultProps = {
  endValue: 100,
  startValue: 0,
  disabled: false,
  labelInterval: 0,
  max: 100,
  min: 0,
  showTickmarks: false,
  showTooltip: false,
  step: 1
};

export { RangeSlider };
