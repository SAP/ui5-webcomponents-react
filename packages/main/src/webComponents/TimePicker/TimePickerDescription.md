## Usage

The user can enter a time by:

- Using the clocks that are displayed in a popup
- Typing it in directly in the input field

When the user makes an entry and chooses the enter key, the clocks show the corresponding time (hours, minutes and seconds separately). When the user directly triggers the clocks display, the actual time is displayed. For the `TimePicker`

## Formatting

If a time is entered by typing it into the input field, it must fit to the used time format.

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.

For example, if the `format-pattern` is "HH:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.

## Keyboard handling

\[F4\], \[ALT\]+\[UP\], \[ALT\]+\[DOWN\] Open/Close picker dialog and move focus to it.  
When closed:

- \[PAGEUP\] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
- \[PAGEDOWN\] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
- \[SHIFT\]+\[PAGEUP\] - Increments minutes by 1.
- \[SHIFT\]+\[PAGEDOWN\] - Decrements minutes by 1.
- \[SHIFT\]+\[CTRL\]+\[PAGEUP\] - Increments seconds by 1.
- \[SHIFT\]+\[CTRL\]+\[PAGEDOWN\] - Decrements seconds by 1.

When opened:

- \[PAGEUP\] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
- \[PAGEDOWN\] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
- \[SHIFT\]+\[PAGEUP\] - Increments minutes by 1.
- \[SHIFT\]+\[PAGEDOWN\] - Decrements minutes by 1.
- \[SHIFT\]+\[CTRL\]+\[PAGEUP\] - Increments seconds by 1.
- \[SHIFT\]+\[CTRL\]+\[PAGEDOWN\] - Decrements seconds by 1.
- \[A\] or \[P\] - Selects AM or PM respectively.
- \[0\]-\[9\] - Allows direct time selecting (hours/minutes/seconds).
- \[:\] - Allows switching between hours/minutes/seconds clocks. If the last clock is displayed and \[:\] is pressed, the first clock is beind displayed.
