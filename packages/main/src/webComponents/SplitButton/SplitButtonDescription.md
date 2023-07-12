## Usage

`SplitButton` consists two separate buttons:

- for the first one (default action) you can define some `text` or an `icon`, or both. Also, it is possible to define different icon for active state of this button - `activeIcon`.
- the second one (arrow action) contains only `slim-arrow-down` icon.

You can choose a `design` from a set of predefined types (the same as for Button) that offer different styling to correspond to the triggered action. Both text and arrow actions have the same design.

You can set the `SplitButton` as enabled or disabled. Both parts of an enabled `SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes the style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons cannot be pressed.

## Keyboard Handling

- `Space` or `Enter` - triggers the default action
- `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.
- `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action
  There are separate events that are fired on activating of `SplitButton` parts:

- `onClick` for the first button (default action)
- `onArrowClick` for the second button (arrow action)
