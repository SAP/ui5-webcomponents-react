'use client';

import '@ui5/webcomponents/dist/Slider.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface SliderAttributes {
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
   * Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
   *
   * **Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.
   * @default 1
   */
  step?: number;

  /**
   * Current value of the slider
   * @default 0
   */
  value?: number;
}

interface SliderDomRef extends Required<SliderAttributes>, Ui5DomRef {}

interface SliderPropTypes extends SliderAttributes, Omit<CommonProps, keyof SliderAttributes | 'onChange' | 'onInput'> {
  /**
   * Fired when the value changes and the user has finished interacting with the slider.
   */
  onChange?: (event: Ui5CustomEvent<SliderDomRef>) => void;

  /**
   * Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.
   */
  onInput?: (event: Ui5CustomEvent<SliderDomRef>) => void;
}

/**
 * The Slider component represents a numerical range and a handle (grip).
 * The purpose of the component is to enable visual selection of a value in
 * a continuous numerical range by moving an adjustable handle.
 *
 * ### Structure
 * The most important properties of the Slider are:
 *
 * - min - The minimum value of the slider range.
 * - max - The maximum value of the slider range.
 * - value - The current value of the slider range.
 * - step - Determines the increments in which the slider will move.
 * - showTooltip - Determines if a tooltip should be displayed above the handle.
 * - showTickmarks - Displays a visual divider between the step values.
 * - labelInterval - Labels some or all of the tickmarks with their values.
 *
 * ### Usage
 * The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).
 *
 * ### Responsive Behavior
 * The `Slider` component adjusts to the size of its parent container by recalculating and
 * resizing the width of the control. You can move the slider handle in several different ways:
 *
 * - Drag and drop the handle to the desired value.
 * - Click/tap on the range bar to move the handle to that location.
 *
 * ### Keyboard Handling
 *
 * - `Left or Down Arrow` - Moves the handle one step to the left, effectively decreasing the component's value by `step` amount;
 * - `Right or Up Arrow` - Moves the handle one step to the right, effectively increasing the component's value by `step` amount;
 * - `Left or Down Arrow + Ctrl/Cmd` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
 * - `Right or Up Arrow + Ctrl/Cmd` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
 * - `Plus` - Same as `Right or Up Arrow`;
 * - `Minus` - Same as `Left or Down Arrow`;
 * - `Home` - Moves the handle to the beginning of the range;
 * - `End` - Moves the handle to the end of the range;
 * - `Page Up` - Same as `Right or Up + Ctrl/Cmd`;
 * - `Page Down` - Same as `Left or Down + Ctrl/Cmd`;
 * - `Escape` - Resets the value property after interaction, to the position prior the component's focusing;
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Slider = withWebComponent<SliderPropTypes, SliderDomRef>(
  'ui5-slider',
  ['accessibleName', 'labelInterval', 'max', 'min', 'step', 'value'],
  ['disabled', 'showTickmarks', 'showTooltip'],
  [],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/Slider.js')
);

Slider.displayName = 'Slider';

export { Slider };
export type { SliderDomRef, SliderPropTypes };
