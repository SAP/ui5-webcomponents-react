## Usage

Use the `DateTimePicker` if you need a combined date and time input component. Don't use it if you want to use either date, or time value. In this case, use the `DatePicker` or the `TimePicker` components instead.

The user can set date/time by:

- using the calendar and the time selectors
- typing in the input field

Programmatically, to set date/time for the `DateTimePicker`, use the `value` property

## Formatting

The value entered by typing into the input field must fit to the used date/time format.

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.

**Example:** the following format `dd/MM/yyyy, hh:mm:ss aa` corresponds the `13/04/2020, 03:16:16 AM` value.  
The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

**Example:** the following format `dd/MM/yyyy, HH:mm:ss` corresponds the `13/04/2020, 15:16:16` value.  
The capital 'H' indicates "24" hours format.

**Note:** If the `formatPattern` does NOT include time, the `DateTimePicker` will fallback to the default time format according to the locale.

**Note:** If no placeholder is set to the `DateTimePicker`, the current `formatPattern` is displayed as a placeholder. If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

**Note:** If the user input does NOT match the `formatPattern`, the `DateTimePicker` makes an attempt to parse it based on the locale settings.

## Responsive behavior

The `DateTimePicker` is responsive and fully adapts to all devices. For larger screens, such as tablet or desktop, it is displayed as a popover, while on phone devices, it is displayed full screen.
