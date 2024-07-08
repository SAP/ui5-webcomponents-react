'use client';

import '@ui5/webcomponents/dist/RangeSlider.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface RangeSliderAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

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
   * **Note:** The step and tickmarks properties must be enabled.
   * Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
   * tickmark will be labelled, which means every 4th value number.
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
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  name?: string | undefined;

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

interface RangeSliderDomRef extends Required<RangeSliderAttributes>, Ui5DomRef {}

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
 * Represents a numerical interval and two handles (grips) to select a sub-range within it.
 * The purpose of the component to enable visual selection of sub-ranges within a given interval.
 *
 * ### Structure
 * The most important properties of the Range Slider are:
 *
 * - min - The minimum value of the slider range.
 * - max - The maximum value of the slider range.
 * - value - The current value of the slider.
 * - step - Determines the increments in which the slider will move.
 * - showTooltip - Determines if a tooltip should be displayed above the handle.
 * - showTickmarks - Displays a visual divider between the step values.
 * - labelInterval - Labels some or all of the tickmarks with their values.
 *
 * #### Notes:
 *
 * - The right and left handle can be moved individually and their positions could therefore switch.
 * - The entire range can be moved along the interval.
 *
 * ### Usage
 * The most common use case is to select and move sub-ranges on a continuous numerical scale.
 *
 * ### Responsive Behavior
 * You can move the currently selected range by clicking on it and dragging it along the interval.
 *
 * ### Keyboard Handling
 *
 * - `Left or Down Arrow` - Moves a component's handle or the entire selection one step to the left;
 * - `Right or Up Arrow` - Moves a component's handle or the entire selection one step to the right;
 * - `Left or Down Arrow + Ctrl/Cmd` - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;
 * - `Right or Up Arrow + Ctrl/Cmd` - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;
 * - `Plus` - Same as `Right or Up Arrow`;
 * - `Minus` - Same as `Left or Down Arrow`;
 * - `Home` - Moves the entire selection or the selected handle to the beginning of the component's range;
 * - `End` - Moves the entire selection or the selected handle to the end of the component's range;
 * - `Page Up` - Same as `Right or Up Arrow + Ctrl/Cmd`;
 * - `Page Down` - Same as `Left or Down Arrow + Ctrl/Cmd`;
 * - `Escape` - Resets the `startValue` and `endValue` properties to the values prior the component focusing;
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const RangeSlider = withWebComponent<RangeSliderPropTypes, RangeSliderDomRef>(
  'ui5-range-slider',
  ['accessibleName', 'endValue', 'labelInterval', 'max', 'min', 'name', 'startValue', 'step'],
  ['disabled', 'showTickmarks', 'showTooltip'],
  [],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/RangeSlider.js')
);

RangeSlider.displayName = 'RangeSlider';

export { RangeSlider };
export type { RangeSliderDomRef, RangeSliderPropTypes };
