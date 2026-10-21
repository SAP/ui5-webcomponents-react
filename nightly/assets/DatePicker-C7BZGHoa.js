import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{n as r}from"./DatePicker-PnbTfxym.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-date-picker`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`calendarWeekNumbering`,`displayFormat`,`formatPattern`,`maxDate`,`minDate`,`name`,`placeholder`,`primaryCalendarType`,`secondaryCalendarType`,`value`,`valueFormat`,`valueState`],[`disabled`,`hideWeekNumbers`,`open`,`readonly`,`required`,`showClearIcon`],[`valueStateMessage`],[`change`,`close`,`input`,`open`,`value-state-change`]),i.displayName=`DatePicker`;try{i.displayName=`DatePicker`,i.__docgenInfo={description:`The \`DatePicker\` component provides an input field with assigned calendar which opens on user action.
The \`DatePicker\` allows users to select a localized date using touch,
mouse, or keyboard input. It consists of two parts: the date input field and the
date picker.

### Usage

The user can enter a date by:

- Using the calendar that opens in a popup
- Typing it in directly in the input field

When the user makes an entry and presses the enter key, the calendar shows the corresponding date.
When the user directly triggers the calendar display, the actual date is displayed.

### Formatting

If a date is entered by typing it into
the input field, it must fit to the used date format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

For example, if the valueFormat is "yyyy-MM-dd", the displayFormat is "MMM d, y", and the used locale is English, a valid value string is "2015-07-30", which leads to an output of "Jul 30, 2015".
If no placeholder is set to the DatePicker, the used displayFormat is displayed as a placeholder. If another placeholder is needed, it must be set.

### Relative date input

The input field also accepts locale-aware relative date expressions sourced from the Unicode CLDR.
The following expressions are supported in English:

- Day: "today", "yesterday", "tomorrow", "in N days", "N days ago"
- Week: "this week", "last week", "next week", "in N weeks", "N weeks ago"
- Month: "this month", "last month", "next month", "in N months", "N months ago"
- Year: "this year", "last year", "next year", "in N years", "N years ago"

The recognized expressions are locale-specific — the equivalent terms in the user's language are used (for example, "heute" in German, "bugün" in Turkish).
Week, month, and year expressions resolve to an offset from today (for example, "next week" = today + 7 days).
For the full list of supported fields and patterns, see [CLDR Date Fields](https://unicode.org/reports/tr35/tr35-dates.html#Calendar_Fields).

### Keyboard Handling
The \`DatePicker\` provides advanced keyboard handling.
If the \`DatePicker\` is focused,
you can open or close the drop-down by pressing [F4], [Alt] + [Up] or [Alt] + [Down] keys.
Once the drop-down is opened, you can use the [Up], [Down], [Left] or [Right] arrow keys
to navigate through the dates and select one by pressing the \`Space\` or \`Enter\` keys. Moreover you can
use TAB to reach the buttons for changing month and year.

If the \`DatePicker\` input field is focused and its corresponding picker dialog is not opened,
then users can increment or decrement the date referenced by \`dateValue\` property
by using the following shortcuts:

- [Page Down] - Decrements the corresponding day of the month by one
- [Shift] + [Page Down] - Decrements the corresponding month by one
- [Shift] + [Ctrl] + [Page Down] - Decrements the corresponding year by one
- [Page Up] - Increments the corresponding day of the month by one
- [Shift] + [Page Up] - Increments the corresponding month by one
- [Shift] + [Ctrl] + [Page Up] - Increments the corresponding year by one

### Calendar types
The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
you need to set the \`primaryCalendarType\` property and import one or more of the following modules:

\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`

Or, you can use the global configuration and set the \`calendarType\` key:

\`\`\`html
<script data-id="sap-ui-config" type="application/json">
	{
		"calendarType": "Japanese"
	}
<script>
\`\`\`



__Note:__ This is a UI5 Web Component! [DatePicker UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/DatePicker) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`DatePicker`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,methods:[],props:{valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`}],description:`Fired when the input operation has finished by pressing Enter or on focusout.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DatePickerDomRef, DatePickerChangeEventDetail>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`}],description:`Fired after the component's picker is closed.

**Note:** Available since [v2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DatePickerDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`}],description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DatePickerDomRef, DatePickerInputEventDetail>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`}],description:`Fired after the component's picker is opened.

**Note:** Available since [v2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DatePickerDomRef, never>) => void`}},onValueStateChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`}],description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onValueStateChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DatePickerDomRef, DatePickerValueStateChangeEventDetail>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines the aria-label attribute for the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Receives id(or many ids) of the elements that label the component.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},calendarWeekNumbering:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/UI5/webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:`calendarWeekNumbering`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | CalendarWeekNumbering | "ISO_8601" | "MiddleEastern" | "WesternTraditional"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The default calendar week numbering:

The framework determines the week numbering scheme; currently it is derived from the
active format locale. Future versions of ui5-webcomponents might select a different week numbering
scheme.`,fullComment:`The default calendar week numbering:

The framework determines the week numbering scheme; currently it is derived from the
active format locale. Future versions of ui5-webcomponents might select a different week numbering
scheme.
@public`,tags:{public:``}},{value:`"ISO_8601"`,description:`Official calendar week numbering in most of Europe (ISO 8601 standard):
Monday is first day of the week, the week containing January 4th is first week of the year.`,fullComment:`Official calendar week numbering in most of Europe (ISO 8601 standard):
Monday is first day of the week, the week containing January 4th is first week of the year.
@public`,tags:{public:``}},{value:`"MiddleEastern"`,description:`Official calendar week numbering in much of the Middle East (Middle Eastern calendar):
Saturday is first day of the week, the week containing January 1st is first week of the year.`,fullComment:`Official calendar week numbering in much of the Middle East (Middle Eastern calendar):
Saturday is first day of the week, the week containing January 1st is first week of the year.
@public`,tags:{public:``}},{value:`"WesternTraditional"`,description:`Official calendar week numbering in the United States, Canada, Brazil, Israel, Japan, and
other countries (Western traditional calendar):
Sunday is first day of the week, the week containing January 1st is first week of the year.`,fullComment:`Official calendar week numbering in the United States, Canada, Brazil, Israel, Japan, and
other countries (Western traditional calendar):
Sunday is first day of the week, the week containing January 1st is first week of the year.
@public`,tags:{public:``}},{value:`"ISO_8601"`},{value:`"MiddleEastern"`},{value:`"WesternTraditional"`}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines whether the component is displayed as disabled.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},displayFormat:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`displayFormat`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},formatPattern:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines the format, displayed in the input field.`,name:`formatPattern`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`,deprecated:`Use displayFormat and valueFormat instead`},type:{name:`string`}},hideWeekNumbers:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:`hideWeekNumbers`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},maxDate:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:`maxDate`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{},type:{name:`string`}},minDate:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:`minDate`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},primaryCalendarType:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:`primaryCalendarType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`CalendarType | "Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian"`,value:[{value:`"Gregorian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Islamic"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Japanese"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Buddhist"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Persian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Gregorian"`},{value:`"Islamic"`},{value:`"Japanese"`},{value:`"Buddhist"`},{value:`"Persian"`}]}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines whether the component is displayed as read-only.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines whether the component is required.`,name:`required`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},secondaryCalendarType:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:`secondaryCalendarType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`CalendarType | "Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian"`,value:[{value:`"Gregorian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Islamic"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Japanese"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Buddhist"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Persian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Gregorian"`},{value:`"Islamic"`},{value:`"Japanese"`},{value:`"Buddhist"`},{value:`"Persian"`}]}},showClearIcon:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.`,name:`showClearIcon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines a formatted date value.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{},type:{name:`string`}},valueFormat:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`valueFormat`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DatePicker/index.d.ts`,name:`DatePickerAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`ValueState | "None" | "Positive" | "Critical" | "Negative" | "Information"`,value:[{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"None"`},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};