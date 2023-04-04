## Selection

To benefit from the selection mechanism of `Table` component, you can use the available selection modes: `SingleSelect` and `MultiSelect`.  
In additition to the used mode, you can also specify the `Table-row` type choosing between `Active` or `Inactive`.

In `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or by pressing the `Space` or `Enter` keys.  
In `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the `Space` key when a row is on focus or via mouse click over the selection checkbox of the row. In order to select all the available rows at once, you can use the selection checkbox presented in the table's header.

**Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`

Furthermore, you can interact with `Table` via the following keys.

- \[F7\] - If focus is on an interactive control inside an item, moves focus to the corresponding item.
- \[CTRL\]+\[A\] - Selects all items, if MultiSelect mode is enabled.
- \[HOME\]/\[END\] - Focuses the first/last item.
- \[PAGEUP\]/\[PAGEDOWN\] - Moves focus up/down by page size (20 items by default).
- \[ALT\]+\[DOWN\]/\[UP\] - Switches focus between header, last focused item, and More button (if applies) in either direction.
- \[SHIFT\]+\[DOWN\]/\[UP\] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).
- \[SHIFT\]+\[HOME\]/\[END\] - Range selection to the first/last item of the List.
- \[CTRL\]+\[HOME\]/\[END\] - Same behavior as HOME & END.
