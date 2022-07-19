## Structure

The most important properties of the Range Slider are:

*   min - The minimum value of the slider range.
*   max - The maximum value of the slider range.
*   value - The current value of the slider.
*   step - Determines the increments in which the slider will move.
*   showTooltip - Determines if a tooltip should be displayed above the handle.
*   showTickmarks - Displays a visual divider between the step values.
*   labelInterval - Labels some or all of the tickmarks with their values.

### Notes:

*   The right and left handle can be moved individually and their positions could therefore switch.
*   The entire range can be moved along the interval.

## Usage

The most common use case is to select and move sub-ranges on a continuous numerical scale.

## Responsive Behavior

You can move the currently selected range by clicking on it and dragging it along the interval.

## Keyboard Handling

*   `Left or Down Arrow` - Moves a component's handle or the entire selection one step to the left;
*   `Right or Up Arrow` - Moves a component's handle or the entire selection one step to the right;
*   `Left or Down Arrow + Ctrl/Cmd` - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;
*   `Right or Up Arrow + Ctrl/Cmd` - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;
*   `Plus` - Same as `Right or Up Arrow`;
*   `Minus` - Same as `Left or Down Arrow`;
*   `Home` - Moves the entire selection or the selected handle to the beginning of the component's range;
*   `End` - Moves the entire selection or the selected handle to the end of the component's range;
*   `Page Up` - Same as `Right or Up Arrow + Ctrl/Cmd`;
*   `Page Down` - Same as `Left or Down Arrow + Ctrl/Cmd`;
*   `Escape` - Resets the `startValue` and `endValue` properties to the values prior the component focusing;