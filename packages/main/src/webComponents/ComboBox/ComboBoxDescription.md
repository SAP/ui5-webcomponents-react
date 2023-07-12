## Structure

The `ComboBox` consists of the following elements:

- Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.
- Drop-down arrow - expands\\collapses the option list.
- Option list - the list of available options.

## Keyboard Handling

The `ComboBox` provides advanced keyboard handling.

- \[F4\], \[ALT\]+\[UP\], or \[ALT\]+\[DOWN\] - Toggles the picker.
- \[ESC\] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.
- \[ENTER\] or \[RETURN\] - If picker is open, takes over the currently selected item and closes it.
- \[DOWN\] - Selects the next matching item in the picker.
- \[UP\] - Selects the previous matching item in the picker.
- \[PAGEDOWN\] - Moves selection down by page size (10 items by default).
- \[PAGEUP\] - Moves selection up by page size (10 items by default).
- \[HOME\] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.
- \[END\] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.
