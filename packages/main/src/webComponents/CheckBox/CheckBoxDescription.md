## Usage

You can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default. In case you prefer text to wrap, set the `wrappingType` property to "Normal". The touchable area for toggling the `CheckBox` ends where the text ends.

You can disable the `CheckBox` by setting the `disabled` property to `true`, or use the `CheckBox` in read-only mode by setting the `readonly` property to `true`.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `CheckBox` exposes the following CSS Shadow Parts:

- root - Used to style the outermost wrapper of the `CheckBox`
- label - Used to style the label of the `CheckBox`

## Keyboard Handling

The user can use the following keyboard shortcuts to toggle the checked state of the `CheckBox`.

- \[SPACE, ENTER\] - Toggles between different states: checked, not checked.
