import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{X as n,Y as r,_t as i,gt as a}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a as o,c as s,d as c,f as l,i as u,l as d,m as ee,n as f,o as p,p as m,r as h,s as g,u as _}from"./jsx-runtime-NHZLEOw0.js";import{N as te,q as ne,y as re}from"./Keys-DqJfIghV.js";import{n as v,t as y}from"./withWebComponent-DDACWNN1.js";import{t as ie}from"./jsx-runtime-BdxMnOeJ.js";import{n as ae,t as oe}from"./event-strict-C4u0wMzB.js";import{n as se,t as ce}from"./i18n-BNTZIxbt.js";import{$ as le,Do as ue,et as de,nt as fe,rt as pe,tt as me}from"./i18n-defaults-B1nZF45f.js";import{n as b,t as x}from"./parameters-bundle.css-BLqi-7UI.js";import{n as he,t as ge}from"./slot-strict-BSUUcNBc.js";import{a as _e,i as ve,n as ye,o as be,r as xe,t as Se}from"./ItemNavigation-CCK6yFUo.js";import{t as Ce}from"./Gregorian--HAYnvhu.js";import{a as we,n as Te,o as Ee,p as De}from"./Calendar-DTBo4FHV.js";import{i as Oe,n as ke,r as Ae,t as je}from"./Persian--DCoFcvJ.js";var S;function Me(){return(Me=e((()=>{Te(),y(),S=v(`ui5-calendar`,[`calendarWeekNumbering`,`displayFormat`,`formatPattern`,`maxDate`,`minDate`,`primaryCalendarType`,`secondaryCalendarType`,`selectionMode`,`valueFormat`],[`hideWeekNumbers`],[`calendarLegend`,`disabledDates`,`specialDates`],[`selection-change`]),S.displayName=`Calendar`;try{S.displayName=`Calendar`,S.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

Currently selected dates are represented with instances of \`CalendarDate\` as
children of the \`Calendar\`. The value property of each \`CalendarDate\` must be a
date string, correctly formatted according to the \`Calendar\`'s \`formatPattern\` property.
Whenever the user changes the date selection, \`Calendar\` will automatically create/remove instances
of \`CalendarDate\` in itself, unless you prevent this behavior by calling \`preventDefault()\` for the
\`selection-change\` event. This is useful if you want to control the selected dates externally.

### Usage

The user can navigate to a particular date by:

- Pressing over a month inside the months view
- Pressing over an year inside the years view

The user can confirm a date selection by pressing over a date inside the days view.

### Keyboard Handling
The \`Calendar\` provides advanced keyboard handling.
When a picker is showed and focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- Day picker:

- [F4] - Shows month picker
- [Shift] + [F4] - Shows year picker
- [Page Up] - Navigate to the previous month
- [Page Down] - Navigate to the next month
- [Shift] + [Page Up] - Navigate to the previous year
- [Shift] + [Page Down] - Navigate to the next year
- [Ctrl] + [Shift] + [Page Up] - Navigate ten years backwards
- [Ctrl] + [Shift] + [Page Down] - Navigate ten years forwards
- [Home] - Navigate to the first day of the week
- [End] - Navigate to the last day of the week
- [Ctrl] + [Home] - Navigate to the first day of the month
- [Ctrl] + [End] - Navigate to the last day of the month

- Month picker:

- [Page Up] - Navigate to the previous year
- [Page Down] - Navigate to the next year
- [Home] - Navigate to the first month of the current row
- [End] - Navigate to the last month of the current row
- [Ctrl] + [Home] - Navigate to the first month of the current year
- [Ctrl] + [End] - Navigate to the last month of the year

- Year picker:

- [Page Up] - Navigate to the previous year range
- [Page Down] - Navigate the next year range
- [Home] - Navigate to the first year of the current row
- [End] - Navigate to the last year of the current row
- [Ctrl] + [Home] - Navigate to the first year of the current year range
- [Ctrl] + [End] - Navigate to the last year of the current year range

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

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
<\/script>
\`\`\`



__Note:__ This is a UI5 Web Component! [Calendar UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Calendar) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Calendar`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,methods:[],props:{calendarLegend:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`}],description:`Defines the calendar legend of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="calendarLegend"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<CalendarLegend>\``,name:`calendarLegend`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`}],description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate` or `CalendarDateRange`.\nUse `CalendarDate` for single or multiple selection, and `CalendarDateRange` for range selection.\n\n__Supported Node Type/s:__ `Array<ICalendarSelectedDates>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},disabledDates:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`}],description:`Defines the disabled date ranges that cannot be selected in the calendar.
Use \`CalendarDateRange\` elements to specify ranges of disabled dates.
Each range can define a start date, an end date, or both.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="disabledDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<CalendarDateRange>\``,name:`disabledDates`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},specialDates:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`}],description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<SpecialCalendarDate>\``,name:`specialDates`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`}],description:`Fired when the selected dates change.

**Note:** If you call \`preventDefault()\` for this event, the component will not
create instances of \`CalendarDate\` for the newly selected dates. In that case you should do this manually.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectionChangeEventDetail>) => void`}},calendarWeekNumbering:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/UI5/webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:`calendarWeekNumbering`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | CalendarWeekNumbering | "ISO_8601" | "MiddleEastern" | "WesternTraditional"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The default calendar week numbering:

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
@public`,tags:{public:``}},{value:`"ISO_8601"`},{value:`"MiddleEastern"`},{value:`"WesternTraditional"`}]}},displayFormat:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`displayFormat`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},formatPattern:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Determines the format, displayed in the input field.`,name:`formatPattern`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`undefined`,deprecated:`Use displayFormat and valueFormat instead`},type:{name:`string`}},hideWeekNumbers:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:`hideWeekNumbers`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},maxDate:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:`maxDate`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{},type:{name:`string`}},minDate:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:`minDate`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{},type:{name:`string`}},primaryCalendarType:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:`primaryCalendarType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`CalendarType | "Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian"`,value:[{value:`"Gregorian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Islamic"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Japanese"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Buddhist"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Persian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Gregorian"`},{value:`"Islamic"`},{value:`"Japanese"`},{value:`"Buddhist"`},{value:`"Persian"`}]}},secondaryCalendarType:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:`secondaryCalendarType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`CalendarType | "Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian"`,value:[{value:`"Gregorian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Islamic"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Japanese"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Buddhist"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Persian"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Gregorian"`},{value:`"Islamic"`},{value:`"Japanese"`},{value:`"Buddhist"`},{value:`"Persian"`}]}},selectionMode:{defaultValue:{value:`"Single"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:`selectionMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`"Single"`},type:{name:`enum`,raw:`"Single" | "Multiple" | CalendarSelectionMode | "Range"`,value:[{value:`"Single"`},{value:`"Multiple"`},{value:`"Single"`,description:`Only one date can be selected at a time`,fullComment:`Only one date can be selected at a time
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Several dates can be selected`,fullComment:`Several dates can be selected
@public`,tags:{public:``}},{value:`"Range"`,description:`A range defined by a start date and an end date can be selected`,fullComment:`A range defined by a start date and an end date can be selected
@public`,tags:{public:``}},{value:`"Range"`}]}},valueFormat:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`}],description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`valueFormat`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Calendar/index.d.ts`,name:`CalendarAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}var Ne,C;function w(){return(w=e((()=>{(function(e){e.Today=`Today`,e.Selected=`Selected`,e.None=`None`,e.Working=`Working`,e.NonWorking=`NonWorking`,e.Type01=`Type01`,e.Type02=`Type02`,e.Type03=`Type03`,e.Type04=`Type04`,e.Type05=`Type05`,e.Type06=`Type06`,e.Type07=`Type07`,e.Type08=`Type08`,e.Type09=`Type09`,e.Type10=`Type10`,e.Type11=`Type11`,e.Type12=`Type12`,e.Type13=`Type13`,e.Type14=`Type14`,e.Type15=`Type15`,e.Type16=`Type16`,e.Type17=`Type17`,e.Type18=`Type18`,e.Type19=`Type19`,e.Type20=`Type20`})(Ne||={}),C=Ne})))()}function Pe(){return u(`div`,{class:`ui5-calendar-legend-item-root`,tabindex:parseInt(this.forcedTabIndex),role:`listitem`,children:[h(`div`,{class:`ui5-calendar-legend-item-box`}),h(`div`,{class:`ui5-calendar-legend-item-text`,children:this.effectiveText})]})}function T(){return(T=e((()=>{f()})))()}var E;function D(){return(D=e((()=>{n(),o(),x(),r(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>p),r(`@ui5/webcomponents`,`sap_horizon`,async()=>b,`host`),E=`.ui5-calendar-legend-item-root{display:flex;flex-direction:row;flex-wrap:wrap;width:var(--_ui5-calendar-legend-item-root-width);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:pointer;margin:.0625rem 0}.ui5-calendar-legend-item-box{display:inline-block;box-sizing:border-box;height:1rem;width:1rem;margin:var(--_ui5-calendar-legend-item-box-margin);margin-inline-end:var(--_ui5-calendar-legend-item-box-inner-margin);background:var(--sapLegend_WorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-text{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;color:var(--sapContent_LabelColor);font-weight:400;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);white-space:pre-line;text-overflow:ellipsis;overflow:hidden}:host([type="Today"]) .ui5-calendar-legend-item-box{border-color:var(--sapLegend_CurrentDateTime);border:.125rem solid var(--sapLegend_CurrentDateTime)}:host([type="Selected"]) .ui5-calendar-legend-item-box{background:var(--sapContent_Selected_Background);border:.0625rem solid var(--sapList_SelectionBorderColor)}:host([type="Selected"]) .ui5-calendar-legend-item-box:after{content:"";display:var(--_ui5-calendar-legend-item-box-dot-display);width:.25rem;height:.25rem;background:var(--sapContent_Selected_TextColor);border-radius:50%;position:relative;inset-block-start:.3125rem;inset-inline-end:-.3125rem}:host([type="NonWorking"]) .ui5-calendar-legend-item-box{background:var(--sapLegend_NonWorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type01"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor1);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type02"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor2);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type03"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor3);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type04"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor4);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type05"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor5);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type06"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor6);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type07"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor7);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type08"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor8);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type09"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor9);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type10"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor10);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type11"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor11);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type12"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor12);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type13"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor13);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type14"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor14);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type15"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor15);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type16"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor16);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type17"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor17);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type18"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor18);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type19"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor19);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type20"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor20);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-root:focus{outline:var(--_ui5-calendar-legend-item-root-focus-border);outline-offset:var(--_ui5-calendar-legend-item-root-focus-offset);border-radius:var(--_ui5-calendar-legend-item-root-focus-border-radius);margin:.0625rem 0}
`})))()}var O,k,A,j;function M(){return(M=e((()=>{ee(),c(),d(),se(),g(),w(),ue(),T(),D(),O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=k=class extends m{constructor(){super(...arguments),this.type=`None`,this.forcedTabIndex=`-1`}get effectiveText(){let e=k.i18nBundle.getText(fe),t=k.i18nBundle.getText(me),n=k.i18nBundle.getText(pe),r=k.i18nBundle.getText(le);return{[C.Today]:e,[C.Selected]:t,[C.NonWorking]:r,[C.Working]:n}[this.type]||this.text||this.type}},O([_()],A.prototype,`text`,void 0),O([_()],A.prototype,`type`,void 0),O([_({noAttribute:!0})],A.prototype,`forcedTabIndex`,void 0),O([ce(`@ui5/webcomponents`)],A,`i18nBundle`,void 0),A=k=O([l({tag:`ui5-calendar-legend-item`,renderer:s,styles:E,template:Pe})],A),A.define(),j=A})))()}function Fe(){return u(`div`,{class:`ui5-calendar-legend-root`,onFocusOut:this._onFocusOut,onFocusIn:this._onFocusIn,onKeyDown:this._onItemKeyDown,onMouseDown:this._onMouseDown,role:`list`,"aria-roledescription":this._roleDescription,children:[this.defaultItemsMapping.filter(e=>!e.hide).map(e=>h(j,{type:e.type})),this.legendItems.map(e=>h(`slot`,{name:e._individualSlot}))]})}function N(){return(N=e((()=>{f(),M()})))()}var P;function F(){return(F=e((()=>{n(),o(),x(),r(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>p),r(`@ui5/webcomponents`,`sap_horizon`,async()=>b,`host`),P=`.ui5-calendar-legend-root{column-width:7.5rem;gap:.5rem;padding:var(--_ui5-calendar-legend-root-padding);margin:1rem 0;width:var(--_ui5-calendar-legend-root-width);background-color:var(--sapList_Background)}
`})))()}var I,L,R;function z(){return(z=e((()=>{ee(),c(),g(),d(),he(),se(),oe(),ye(),_e(),ne(),xe(),w(),N(),M(),ue(),F(),I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=L=class extends m{constructor(){super(),this.hideToday=!1,this.hideSelectedDay=!1,this.hideNonWorkingDay=!1,this.hideWorkingDay=!1,this._lastFocusedItemIndex=null}onAfterRendering(){if(!this._itemNavigation){this._itemNavigation=new Se(this,{navigationMode:be.Horizontal,behavior:ve.Static,getItemsCallback:()=>this.focusableElements});let e=this._lastFocusedItemIndex===null?0:this._lastFocusedItemIndex;this._itemNavigation.setCurrentItem(this.focusableElements[e])}}getFocusDomRef(){return this._itemNavigation._getCurrentItem()}_onMouseDown(e){e.stopPropagation();let t=e.target;this._itemNavigation.setCurrentItem(t),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=this.focusableElements.indexOf(t)}_onFocusIn(e){let t=e.target;this.fireDecoratorEvent(`calendar-legend-selection-change`,{item:t}),this._lastFocusedItemIndex=this.focusableElements.indexOf(t)}_onFocusOut(){this.fireDecoratorEvent(`calendar-legend-focus-out`)}_onItemKeyDown(e){let t=this.focusableElements,n=t.length,r=e.target,i=t.indexOf(r);if(te(e)){e.preventDefault();let r=i+1;r<n&&(this._itemNavigation.setCurrentItem(t[r]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=r)}if(re(e)){e.preventDefault();let n=i-1;n>=0&&(this._itemNavigation.setCurrentItem(t[n]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=n)}}get focusableElements(){return[...this.shadowRoot.querySelectorAll(`[ui5-calendar-legend-item]`),...this.legendItems]}get legendItems(){return this.getSlottedNodes(`items`).filter(e=>e.hasAttribute(`ui5-calendar-legend-item`))}get defaultItemsMapping(){return[{type:C.Today,hide:this.hideToday},{type:C.Selected,hide:this.hideSelectedDay},{type:C.Working,hide:this.hideWorkingDay},{type:C.NonWorking,hide:this.hideNonWorkingDay}]}get _roleDescription(){return L.i18nBundle.getText(de)}},I([_({type:Boolean})],R.prototype,`hideToday`,void 0),I([_({type:Boolean})],R.prototype,`hideSelectedDay`,void 0),I([_({type:Boolean})],R.prototype,`hideNonWorkingDay`,void 0),I([_({type:Boolean})],R.prototype,`hideWorkingDay`,void 0),I([ge({type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0,default:!0})],R.prototype,`items`,void 0),I([ce(`@ui5/webcomponents`)],R,`i18nBundle`,void 0),R=L=I([l({tag:`ui5-calendar-legend`,renderer:s,styles:P,template:Fe}),ae(`calendar-legend-selection-change`,{bubbles:!0}),ae(`calendar-legend-focus-out`,{bubbles:!0})],R),R.define()})))()}var B;function V(){return(V=e((()=>{z(),y(),B=v(`ui5-calendar-legend`,[],[`hideNonWorkingDay`,`hideSelectedDay`,`hideToday`,`hideWorkingDay`],[],[]),B.displayName=`CalendarLegend`;try{B.displayName=`CalendarLegend`,B.__docgenInfo={description:`The \`CalendarLegend\` component is designed for use within the \`Calendar\` to display a legend.
Each \`CalendarLegendItem\` represents a unique date type, specifying its visual style
and a corresponding textual label.



__Note:__ This is a UI5 Web Component! [CalendarLegend UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/CalendarLegend) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`CalendarLegend`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendPropTypes`}],description:`Defines the items of the component.

__Supported Node Type/s:__ \`Array<CalendarLegendItem>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},hideNonWorkingDay:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`}],description:`Hides the Non-Working day item in the legend.`,name:`hideNonWorkingDay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideSelectedDay:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`}],description:`Hides the Selected day item in the legend.`,name:`hideSelectedDay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideToday:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`}],description:`Hides the Today item in the legend.`,name:`hideToday`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideWorkingDay:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`}],description:`Hides the Working day item in the legend.`,name:`hideWorkingDay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegend/index.d.ts`,name:`CalendarLegendAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var H;function U(){return(U=e((()=>{M(),y(),H=v(`ui5-calendar-legend-item`,[`text`,`type`],[],[],[]),H.displayName=`CalendarLegendItem`;try{H.displayName=`CalendarLegendItem`,H.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note:__ This is a UI5 Web Component! [CalendarLegendItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/CalendarLegendItem) | [Repository](https://github.com/UI5/webcomponents)",displayName:`CalendarLegendItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/CalendarLegendItem/index.d.ts`,methods:[],props:{text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegendItem/index.d.ts`,name:`CalendarLegendItemAttributes`}],description:`Defines the text content of the Calendar Legend Item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegendItem/index.d.ts`,name:`CalendarLegendItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegendItem/index.d.ts`,name:`CalendarLegendItemAttributes`}],description:`Defines the type of the Calendar Legend Item.`,name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CalendarLegendItem/index.d.ts`,name:`CalendarLegendItemAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | CalendarLegendItemType | "Today" | "Selected" | "Working" | "NonWorking" | "Type01" | "Type02" | "Type03" | "Type04" | "Type05" | "Type06" | ... 13 more ... | "Type20"`,value:[{value:`"None"`},{value:`"Today"`,description:`Represents the "Today" item in the calendar legend.`,fullComment:`Represents the "Today" item in the calendar legend.
@private`,tags:{private:``}},{value:`"Selected"`,description:`Represents the "Selected" item in the calendar legend.`,fullComment:`Represents the "Selected" item in the calendar legend.
@private`,tags:{private:``}},{value:`"None"`,description:`Set when no type is set.`,fullComment:`Set when no type is set.
@public`,tags:{public:``}},{value:`"Working"`,description:`Represents the "Working" item in the calendar legend.`,fullComment:`Represents the "Working" item in the calendar legend.
@public`,tags:{public:``}},{value:`"NonWorking"`,description:`Represents the "NonWorking" item in the calendar legend.`,fullComment:`Represents the "NonWorking" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type01"`,description:`Represents the "Type01" item in the calendar legend.`,fullComment:`Represents the "Type01" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type02"`,description:`Represents the "Type02" item in the calendar legend.`,fullComment:`Represents the "Type02" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type03"`,description:`Represents the "Type03" item in the calendar legend.`,fullComment:`Represents the "Type03" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type04"`,description:`Represents the "Type04" item in the calendar legend.`,fullComment:`Represents the "Type04" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type05"`,description:`Represents the "Type05" item in the calendar legend.`,fullComment:`Represents the "Type05" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type06"`,description:`Represents the "Type06" item in the calendar legend.`,fullComment:`Represents the "Type06" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type07"`,description:`Represents the "Type07" item in the calendar legend.`,fullComment:`Represents the "Type07" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type08"`,description:`Represents the "Type08" item in the calendar legend.`,fullComment:`Represents the "Type08" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type09"`,description:`Represents the "Type09" item in the calendar legend.`,fullComment:`Represents the "Type09" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type10"`,description:`Represents the "Type10" item in the calendar legend.`,fullComment:`Represents the "Type10" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type11"`,description:`Represents the "Type11" item in the calendar legend.`,fullComment:`Represents the "Type11" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type12"`,description:`Represents the "Type12" item in the calendar legend.`,fullComment:`Represents the "Type12" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type13"`,description:`Represents the "Type13" item in the calendar legend.`,fullComment:`Represents the "Type13" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type14"`,description:`Represents the "Type14" item in the calendar legend.`,fullComment:`Represents the "Type14" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type15"`,description:`Represents the "Type15" item in the calendar legend.`,fullComment:`Represents the "Type15" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type16"`,description:`Represents the "Type16" item in the calendar legend.`,fullComment:`Represents the "Type16" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type17"`,description:`Represents the "Type17" item in the calendar legend.`,fullComment:`Represents the "Type17" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type18"`,description:`Represents the "Type18" item in the calendar legend.`,fullComment:`Represents the "Type18" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type19"`,description:`Represents the "Type19" item in the calendar legend.`,fullComment:`Represents the "Type19" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type20"`,description:`Represents the "Type20" item in the calendar legend.`,fullComment:`Represents the "Type20" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Today"`},{value:`"Selected"`},{value:`"Working"`},{value:`"NonWorking"`},{value:`"Type01"`},{value:`"Type02"`},{value:`"Type03"`},{value:`"Type04"`},{value:`"Type05"`},{value:`"Type06"`},{value:`"Type07"`},{value:`"Type08"`},{value:`"Type09"`},{value:`"Type10"`},{value:`"Type11"`},{value:`"Type12"`},{value:`"Type13"`},{value:`"Type14"`},{value:`"Type15"`},{value:`"Type16"`},{value:`"Type17"`},{value:`"Type18"`},{value:`"Type19"`},{value:`"Type20"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var W;function G(){return(G=e((()=>{De(),y(),W=v(`ui5-special-date`,[`type`,`value`],[],[],[]),W.displayName=`SpecialCalendarDate`;try{W.displayName=`SpecialCalendarDate`,W.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.\n\n__Note:__ This is a UI5 Web Component! [SpecialCalendarDate UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/SpecialCalendarDate) | [Repository](https://github.com/UI5/webcomponents)",displayName:`SpecialCalendarDate`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/SpecialCalendarDate/index.d.ts`,methods:[],props:{type:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SpecialCalendarDate/index.d.ts`,name:`SpecialCalendarDateAttributes`}],description:`Defines the type of the special date.`,name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SpecialCalendarDate/index.d.ts`,name:`SpecialCalendarDateAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | CalendarLegendItemType | "Today" | "Selected" | "Working" | "NonWorking" | "Type01" | "Type02" | "Type03" | "Type04" | "Type05" | "Type06" | ... 13 more ... | "Type20"`,value:[{value:`"None"`},{value:`"Today"`,description:`Represents the "Today" item in the calendar legend.`,fullComment:`Represents the "Today" item in the calendar legend.
@private`,tags:{private:``}},{value:`"Selected"`,description:`Represents the "Selected" item in the calendar legend.`,fullComment:`Represents the "Selected" item in the calendar legend.
@private`,tags:{private:``}},{value:`"None"`,description:`Set when no type is set.`,fullComment:`Set when no type is set.
@public`,tags:{public:``}},{value:`"Working"`,description:`Represents the "Working" item in the calendar legend.`,fullComment:`Represents the "Working" item in the calendar legend.
@public`,tags:{public:``}},{value:`"NonWorking"`,description:`Represents the "NonWorking" item in the calendar legend.`,fullComment:`Represents the "NonWorking" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type01"`,description:`Represents the "Type01" item in the calendar legend.`,fullComment:`Represents the "Type01" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type02"`,description:`Represents the "Type02" item in the calendar legend.`,fullComment:`Represents the "Type02" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type03"`,description:`Represents the "Type03" item in the calendar legend.`,fullComment:`Represents the "Type03" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type04"`,description:`Represents the "Type04" item in the calendar legend.`,fullComment:`Represents the "Type04" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type05"`,description:`Represents the "Type05" item in the calendar legend.`,fullComment:`Represents the "Type05" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type06"`,description:`Represents the "Type06" item in the calendar legend.`,fullComment:`Represents the "Type06" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type07"`,description:`Represents the "Type07" item in the calendar legend.`,fullComment:`Represents the "Type07" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type08"`,description:`Represents the "Type08" item in the calendar legend.`,fullComment:`Represents the "Type08" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type09"`,description:`Represents the "Type09" item in the calendar legend.`,fullComment:`Represents the "Type09" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type10"`,description:`Represents the "Type10" item in the calendar legend.`,fullComment:`Represents the "Type10" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type11"`,description:`Represents the "Type11" item in the calendar legend.`,fullComment:`Represents the "Type11" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type12"`,description:`Represents the "Type12" item in the calendar legend.`,fullComment:`Represents the "Type12" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type13"`,description:`Represents the "Type13" item in the calendar legend.`,fullComment:`Represents the "Type13" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type14"`,description:`Represents the "Type14" item in the calendar legend.`,fullComment:`Represents the "Type14" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type15"`,description:`Represents the "Type15" item in the calendar legend.`,fullComment:`Represents the "Type15" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type16"`,description:`Represents the "Type16" item in the calendar legend.`,fullComment:`Represents the "Type16" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type17"`,description:`Represents the "Type17" item in the calendar legend.`,fullComment:`Represents the "Type17" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type18"`,description:`Represents the "Type18" item in the calendar legend.`,fullComment:`Represents the "Type18" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type19"`,description:`Represents the "Type19" item in the calendar legend.`,fullComment:`Represents the "Type19" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Type20"`,description:`Represents the "Type20" item in the calendar legend.`,fullComment:`Represents the "Type20" item in the calendar legend.
@public`,tags:{public:``}},{value:`"Today"`},{value:`"Selected"`},{value:`"Working"`},{value:`"NonWorking"`},{value:`"Type01"`},{value:`"Type02"`},{value:`"Type03"`},{value:`"Type04"`},{value:`"Type05"`},{value:`"Type06"`},{value:`"Type07"`},{value:`"Type08"`},{value:`"Type09"`},{value:`"Type10"`},{value:`"Type11"`},{value:`"Type12"`},{value:`"Type13"`},{value:`"Type14"`},{value:`"Type15"`},{value:`"Type16"`},{value:`"Type17"`},{value:`"Type18"`},{value:`"Type19"`},{value:`"Type20"`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SpecialCalendarDate/index.d.ts`,name:`SpecialCalendarDateAttributes`}],description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SpecialCalendarDate/index.d.ts`,name:`SpecialCalendarDateAttributes`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of __@ui5/webcomponents__.`,abstract:``}}}catch{}})))()}var Ie=t({CalendarLegendStory:()=>Q,Default:()=>q,SpecialDate:()=>Z,__namedExportsOrder:()=>ze,default:()=>Le}),K,Le,q,J,Y,X,Re,Z,Q,ze;function $(){return($=e((()=>{Ce(),Oe(),Ae(),ke(),je(),w(),Ee(),a(),V(),U(),G(),Me(),K=ie(),Le={title:`Inputs / Calendar`,component:S,argTypes:{children:{control:{disable:!0}},specialDates:{control:{disable:!0}}},args:{primaryCalendarType:i.Gregorian,selectionMode:we.Single},tags:[`package:@ui5/webcomponents`]},q={},J=new Date,Y=new Date(J.getFullYear(),J.getMonth(),1),X=`${Y.getFullYear()}-${(Y.getMonth()+1).toString().padStart(2,`0`)}-`,Re=`${X}${Y.getDate()}`,Z={args:{specialDates:(0,K.jsx)(W,{type:C.Type01,value:Re})}},Q={name:`CalendarLegend`,args:{calendarLegend:(0,K.jsxs)(B,{children:[(0,K.jsx)(H,{text:`Vacation`,type:C.Type05}),(0,K.jsx)(H,{text:`School Vacation`,type:C.Type07}),(0,K.jsx)(H,{text:`Wedding`,type:C.Type13})]}),specialDates:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(W,{type:C.Type05,value:`${X}01`}),(0,K.jsx)(W,{type:C.Type05,value:`${X}02`}),(0,K.jsx)(W,{type:C.Type05,value:`${X}03`}),(0,K.jsx)(W,{type:C.Type07,value:`${X}11`}),(0,K.jsx)(W,{type:C.Type07,value:`${X}12`}),(0,K.jsx)(W,{type:C.Type07,value:`${X}13`}),(0,K.jsx)(W,{type:C.Type13,value:`${X}26`})]})}},ze=[`Default`,`SpecialDate`,`CalendarLegendStory`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:'{\n  name: \'CalendarLegend\',\n  args: {\n    calendarLegend: <CalendarLegend>\n        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />\n        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />\n        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />\n      </CalendarLegend>,\n    specialDates: <>\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />\n      </>\n  }\n}',...Q.parameters?.docs?.source}}}})))()}export{$ as a,H as c,V as d,Z as i,U as l,Ie as n,W as o,q as r,G as s,Q as t,B as u};