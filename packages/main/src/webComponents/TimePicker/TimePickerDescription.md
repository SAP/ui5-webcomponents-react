## Usage

The user can enter a time by:

- Using the sliders that are displayed in a popup
- Typing it in directly in the input field

When the user makes an entry and chooses the enter key, the sliders shows the corresponding time. When the user directly triggers the sliders display, the actual time is displayed. For the `TimePicker`

## Formatting

If a time is entered by typing it into the input field, it must fit to the used time format.

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>.

For example, if the `format-pattern` is "HH:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.

## Keyboard handling

\[F4\], \[ALT\]+\[UP\], \[ALT\]+\[DOWN\] Open/Close picker dialog and move focus to it.  
When closed:

- \[PAGEUP\] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
- \[PAGEDOWN\] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
- \[SHIFT\]+\[PAGEUP\] Increments minutes by 1.
- \[SHIFT\]+ \[PAGEDOWN\] Decrements minutes by 1.
- \[SHIFT\]+\[CTRL\]+\[PAGEUP\] Increments seconds by 1.
- \[SHIFT\]+\[CTRL\]+ \[PAGEDOWN\] Decrements seconds by 1.

When opened:

- \[UP\] If focus is on one of the selection lists: Select the value which is above the current value. If the first value is selected, select the last value in the list. Exception: AM/ PM List: stay on the first item.
- \[DOWN\] If focus is on one of the selection lists: Select the value which is below the current value. If the last value is selected, select the first value in the list. Exception: AM/ PM List: stay on the last item.
- \[LEFT\] If focus is on one of the selection lists: Move focus to the selection list which is left of the current selection list. If focus is at the first selection list, move focus to the last selection list.
- \[RIGHT\] If focus is on one of the selection lists: Move focus to the selection list which is right of the current selection list. When focus is at the last selection list, move focus to the first selection list.
- \[PAGEUP\] If focus is on one of the selection lists: Move focus to the first entry of this list.
- \[PAGEDOWN\] If focus is on one of the selection lists: Move focus to the last entry of this list.
