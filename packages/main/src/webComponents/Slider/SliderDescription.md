## Structure

The most important properties of the Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider range.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

## Usage

The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

## Responsive Behavior

The `Slider` component adjusts to the size of its parent container by recalculating and resizing the width of the control. You can move the slider handle in several different ways:

- Drag and drop the handle to the desired value.
- Click/tap on the range bar to move the handle to that location.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `Slider` exposes the following CSS Shadow Parts:

- progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the `Slider`.
- progress-bar - Used to style the progress bar, which shows the progress of the `Slider`.
- handle - Used to style the handle of the `Slider`.

## Keyboard Handling

- `Left or Down Arrow` - Moves the handle one step to the left, effectively decreasing the component's value by `step` amount;
- `Right or Up Arrow` - Moves the handle one step to the right, effectively increasing the component's value by `step` amount;
- `Left or Down Arrow + Ctrl/Cmd` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
- `Right or Up Arrow + Ctrl/Cmd` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
- `Plus` - Same as `Right or Up Arrow`;
- `Minus` - Same as `Left or Down Arrow`;
- `Home` - Moves the handle to the beginning of the range;
- `End` - Moves the handle to the end of the range;
- `Page Up` - Same as `Right or Up + Ctrl/Cmd`;
- `Page Down` - Same as `Left or Down + Ctrl/Cmd`;
- `Escape` - Resets the value property after interaction, to the position prior the component's focusing;
