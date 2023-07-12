## Keyboard Handling

The `Input` provides the following keyboard shortcuts:

- \[ESC\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \[ENTER\] or \[RETURN\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \[DOWN\] - Focuses the next matching item in the suggestion list.
- \[UP\] - Focuses the previous matching item in the suggestion list.
- \[HOME\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \[END\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \[PAGEUP\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \[PAGEDOWN\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
