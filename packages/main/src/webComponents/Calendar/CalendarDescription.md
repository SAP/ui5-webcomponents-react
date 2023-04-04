## Usage

The user can navigate to a particular date by:

- Pressing over a month inside the months view
- Pressing over an year inside the years view

The user can confirm a date selection by pressing over a date inside the days view.

## Keyboard Handling

The `Calendar` provides advanced keyboard handling. When a picker is showed and focused the user can use the following keyboard shortcuts in order to perform a navigation:  
\- Day picker:

- \[F4\] - Shows month picker
- \[SHIFT\] + \[F4\] - Shows year picker
- \[PAGEUP\] - Navigate to the previous month
- \[PAGEDOWN\] - Navigate to the next month
- \[SHIFT\] + \[PAGEUP\] - Navigate to the previous year
- \[SHIFT\] + \[PAGEDOWN\] - Navigate to the next year
- \[CTRL\] + \[SHIFT\] + \[PAGEUP\] - Navigate ten years backwards
- \[CTRL\] + \[SHIFT\] + \[PAGEDOWN\] - Navigate ten years forwards
- \[HOME\] - Navigate to the first day of the week
- \[END\] - Navigate to the last day of the week
- \[CTRL\] + \[HOME\] - Navigate to the first day of the month
- \[CTRL\] + \[END\] - Navigate to the last day of the month

\- Month picker:

- \[PAGEUP\] - Navigate to the previous year
- \[PAGEDOWN\] - Navigate to the next year
- \[HOME\] - Navigate to the first month of the current row
- \[END\] - Navigate to the last month of the current row
- \[CTRL\] + \[HOME\] - Navigate to the first month of the current year
- \[CTRL\] + \[END\] - Navigate to the last month of the year

\- Year picker:

- \[PAGEUP\] - Navigate to the previous year range
- \[PAGEDOWN\] - Navigate the next year range
- \[HOME\] - Navigate to the first year of the current row
- \[END\] - Navigate to the last year of the current row
- \[CTRL\] + \[HOME\] - Navigate to the first year of the current year range
- \[CTRL\] + \[END\] - Navigate to the last year of the current year range

### Fast Navigation

This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`

## Calendar types

The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the `primaryCalendarType` property and import one or more of the following modules:

`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";`  
`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";`  
`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";`  
`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";`

Or, you can use the global configuration and set the `calendarType` key:  
`<script data-id="sap-ui-config" type="application/json"> { "calendarType": "Japanese" } </script>`
