## Structure

The `MultiComboBox` consists of the following elements:

- Tokenizer - a list of tokens with selected options.
- Input field - displays the selected option/s as token/s. Users can type to filter the list.
- Drop-down arrow - expands\\collapses the option list.
- Option list - the list of available options.

## Keyboard Handling

The `MultiComboBox` provides advanced keyboard handling.

### Picker

If the `MultiComboBox` is focused, you can open or close the drop-down by pressing `F4`, `ALT+UP` or `ALT+DOWN` keys. Once the drop-down is opened, you can use the `UP` and `DOWN` arrow keys to navigate through the available options and select one by pressing the `Space` or `Enter` keys.

### Tokens

- Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
- Delete - deletes the token and focuses the previous token.
- Backspace - deletes the token and focus the next token.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `MultiComboBox` exposes the following CSS Shadow Parts:

- token-{index} - Used to style each token(where `token-0` corresponds to the first item)
