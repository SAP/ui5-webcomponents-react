## Usage

The user can enter a date by:

- Using the calendar that opens in a popup
- Typing it in directly in the input field

When the user makes an entry and presses the enter key, the calendar shows the corresponding date. When the user directly triggers the calendar display, the actual date is displayed.

## Formatting

If a date is entered by typing it into the input field, it must fit to the used date format.

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.

For example, if the `format-pattern` is "yyyy-MM-dd", a valid value string is "2015-07-30" and the same is displayed in the input.

## Keyboard Handling

The `DatePicker` provides advanced keyboard handling. If the `DatePicker` is focused, you can open or close the drop-down by pressing `F4`, `ALT+UP` or `ALT+DOWN` keys. Once the drop-down is opened, you can use the `UP`, `DOWN`, `LEFT`, `RIGHT` arrow keys to navigate through the dates and select one by pressing the `Space` or `Enter` keys. Moreover you can use TAB to reach the buttons for changing month and year.  
If the `DatePicker` input field is focused and its corresponding picker dialog is not opened, then users can increment or decrement the date referenced by `dateValue` property by using the following shortcuts:

- \[PAGEDOWN\] - Decrements the corresponding day of the month by one
- \[SHIFT\] + \[PAGEDOWN\] - Decrements the corresponding month by one
- \[SHIFT\] + \[CTRL\] + \[PAGEDOWN\] - Decrements the corresponding year by one
- \[PAGEUP\] - Increments the corresponding day of the month by one
- \[SHIFT\] + \[PAGEUP\] - Increments the corresponding month by one
- \[SHIFT\] + \[CTRL\] + \[PAGEUP\] - Increments the corresponding year by one

## Calendar types

The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the `primaryCalendarType` property and import one or more of the following modules:

`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";`  
`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";`  
`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";`  
`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";`

Or, you can use the global configuration and set the `calendarType` key:

```
<script data-id="sap-ui-config" type="application/json">
{ "calendarType": "Japanese"
}
</script>
```
