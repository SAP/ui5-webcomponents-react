import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{s as $}from"./Gregorian-cKFKcoeu.js";import"./Persian-CEjNtj9q.js";import{e as Y}from"./Calendar-DinTgjpf.js";import{w as N,h as R,j as D,p as S,d as O,s as y,m as j,y as A,E as H}from"./jsx-runtime-CkEx_Gfk.js";import{d as J}from"./slot-_4yKMUwC.js";import{i as z}from"./i18n-CjR4HGlq.js";import{l as I}from"./event-strict-DgQLNDEV.js";import{f as K,l as X,r as Q}from"./ItemNavigation-B1w6o4UP.js";import{P as Z,D as ee}from"./Keys-B3oBAe0t.js";import{bR as te,bS as ae,bT as ne,bU as oe,bV as re}from"./i18n-defaults-B158X0Y5.js";import{d as G}from"./parameters-bundle.css-Dkq9X0yL.js";const v=N("ui5-calendar",["calendarWeekNumbering","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType","selectionMode"],["hideWeekNumbers"],["calendarLegend","specialDates"],["selection-change"]);v.displayName="Calendar";try{v.displayName="Calendar",v.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Calendar",props:{calendarLegend:{defaultValue:null,description:`Defines the calendar legend of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="calendarLegend"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"calendarLegend",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate` or `CalendarDateRange`.\nUse `CalendarDate` for single or multiple selection, and `CalendarDateRange` for range selection.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},specialDates:{defaultValue:null,description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"specialDates",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:`Fired when the selected dates change.

**Note:** If you call \`preventDefault()\` for this event, the component will not
create instances of \`CalendarDate\` for the newly selected dates. In that case you should do this manually.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectionChangeEventDetail>) => void"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},formatPattern:{defaultValue:{value:"undefined"},description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Range"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="Calendar",v.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Calendar",props:{calendarLegend:{defaultValue:null,description:`Defines the calendar legend of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="calendarLegend"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"calendarLegend",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate` or `CalendarDateRange`.\nUse `CalendarDate` for single or multiple selection, and `CalendarDateRange` for range selection.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},specialDates:{defaultValue:null,description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"specialDates",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:`Fired when the selected dates change.

**Note:** If you call \`preventDefault()\` for this event, the component will not
create instances of \`CalendarDate\` for the newly selected dates. In that case you should do this manually.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectionChangeEventDetail>) => void"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},formatPattern:{defaultValue:{value:"undefined"},description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Range"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var o;(function(e){e.Today="Today",e.Selected="Selected",e.None="None",e.Working="Working",e.NonWorking="NonWorking",e.Type01="Type01",e.Type02="Type02",e.Type03="Type03",e.Type04="Type04",e.Type05="Type05",e.Type06="Type06",e.Type07="Type07",e.Type08="Type08",e.Type09="Type09",e.Type10="Type10",e.Type11="Type11",e.Type12="Type12",e.Type13="Type13",e.Type14="Type14",e.Type15="Type15",e.Type16="Type16",e.Type17="Type17",e.Type18="Type18",e.Type19="Type19",e.Type20="Type20"})(o||(o={}));function le(){return R("div",{class:"ui5-calendar-legend-item-root",tabindex:parseInt(this.forcedTabIndex),role:"listitem",children:[D("div",{class:"ui5-calendar-legend-item-box"}),D("div",{class:"ui5-calendar-legend-item-text",children:this.effectiveText})]})}S("@ui5/webcomponents-theming","sap_horizon",async()=>O);S("@ui5/webcomponents","sap_horizon",async()=>G);const ie=`.ui5-calendar-legend-item-root{display:flex;flex-direction:row;flex-wrap:wrap;width:var(--_ui5-v2-10-0-calendar-legend-item-root-width);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:pointer;margin:.0625rem 0}.ui5-calendar-legend-item-box{display:inline-block;box-sizing:border-box;height:1rem;width:1rem;margin:var(--_ui5-v2-10-0-calendar-legend-item-box-margin);margin-inline-end:var(--_ui5-v2-10-0-calendar-legend-item-box-inner-margin);background:var(--sapLegend_WorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-text{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;color:var(--sapContent_LabelColor);font-weight:400;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);white-space:pre-line;text-overflow:ellipsis;overflow:hidden}:host([type="Today"]) .ui5-calendar-legend-item-box{border-color:var(--sapLegend_CurrentDateTime);border:.125rem solid var(--sapLegend_CurrentDateTime)}:host([type="Selected"]) .ui5-calendar-legend-item-box{background:var(--sapContent_Selected_Background);border:.0625rem solid var(--sapList_SelectionBorderColor)}:host([type="Selected"]) .ui5-calendar-legend-item-box:after{content:"";display:var(--_ui5-v2-10-0-calendar-legend-item-box-dot-display);width:.25rem;height:.25rem;background:var(--sapContent_Selected_TextColor);border-radius:50%;position:relative;inset-block-start:.3125rem;inset-inline-end:-.3125rem}:host([type="NonWorking"]) .ui5-calendar-legend-item-box{background:var(--sapLegend_NonWorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type01"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor1);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type02"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor2);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type03"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor3);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type04"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor4);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type05"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor5);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type06"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor6);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type07"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor7);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type08"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor8);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type09"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor9);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type10"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor10);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type11"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor11);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type12"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor12);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type13"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor13);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type14"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor14);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type15"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor15);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type16"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor16);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type17"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor17);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type18"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor18);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type19"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor19);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type20"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor20);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-root:focus{outline:var(--_ui5-v2-10-0-calendar-legend-item-root-focus-border);outline-offset:var(--_ui5-v2-10-0-calendar-legend-item-root-focus-offset);border-radius:var(--_ui5-v2-10-0-calendar-legend-item-root-focus-border-radius);margin:.0625rem 0}
`;var _=function(e,t,a,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,a):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,a,i);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(n=(s<3?r(n):s>3?r(t,a,n):r(t,a))||n);return s>3&&n&&Object.defineProperty(t,a,n),n},f;let m=f=class extends H{constructor(){super(...arguments),this.type="None",this.forcedTabIndex="-1"}get effectiveText(){const t=f.i18nBundle.getText(te),a=f.i18nBundle.getText(ae),i=f.i18nBundle.getText(ne),s=f.i18nBundle.getText(oe);return{[o.Today]:t,[o.Selected]:a,[o.NonWorking]:s,[o.Working]:i}[this.type]||this.text||this.type}};_([y()],m.prototype,"text",void 0);_([y()],m.prototype,"type",void 0);_([y({noAttribute:!0})],m.prototype,"forcedTabIndex",void 0);_([z("@ui5/webcomponents")],m,"i18nBundle",void 0);m=f=_([j({tag:"ui5-calendar-legend-item",renderer:A,styles:ie,template:le})],m);m.define();const se=m;function de(){return R("div",{class:"ui5-calendar-legend-root",onFocusOut:this._onFocusOut,onFocusIn:this._onFocusIn,onKeyDown:this._onItemKeyDown,onMouseDown:this._onMouseDown,role:"list","aria-roledescription":this._roleDescription,children:[this.defaultItemsMapping.filter(e=>!e.hide).map(e=>D(se,{type:e.type})),this.legendItems.map(e=>D("slot",{name:e._individualSlot}))]})}S("@ui5/webcomponents-theming","sap_horizon",async()=>O);S("@ui5/webcomponents","sap_horizon",async()=>G);const pe=`.ui5-calendar-legend-root{column-width:7.5rem;gap:.5rem;padding:var(--_ui5-v2-10-0-calendar-legend-root-padding);margin:1rem 0;width:var(--_ui5-v2-10-0-calendar-legend-root-width);background-color:var(--sapList_Background)}
`;var g=function(e,t,a,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,a):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,a,i);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(n=(s<3?r(n):s>3?r(t,a,n):r(t,a))||n);return s>3&&n&&Object.defineProperty(t,a,n),n},k;let p=k=class extends H{constructor(){super(),this.hideToday=!1,this.hideSelectedDay=!1,this.hideNonWorkingDay=!1,this.hideWorkingDay=!1,this._lastFocusedItemIndex=null}onAfterRendering(){if(!this._itemNavigation){this._itemNavigation=new K(this,{navigationMode:Q.Horizontal,behavior:X.Static,getItemsCallback:()=>this.focusableElements});const t=this._lastFocusedItemIndex!==null?this._lastFocusedItemIndex:0;this._itemNavigation.setCurrentItem(this.focusableElements[t])}}_onMouseDown(t){t.stopPropagation();const a=t.target;this._itemNavigation.setCurrentItem(a),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=this.focusableElements.indexOf(a)}_onFocusIn(t){const a=t.target;this.fireDecoratorEvent("calendar-legend-selection-change",{item:a}),this._lastFocusedItemIndex=this.focusableElements.indexOf(a)}_onFocusOut(){this.fireDecoratorEvent("calendar-legend-focus-out")}_onItemKeyDown(t){const a=this.focusableElements,i=a.length,s=t.target,n=a.indexOf(s);if(Z(t)){t.preventDefault();const r=n+1;r<i&&(this._itemNavigation.setCurrentItem(a[r]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=r)}if(ee(t)){t.preventDefault();const r=n-1;r>=0&&(this._itemNavigation.setCurrentItem(a[r]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=r)}}get focusableElements(){return[...this.shadowRoot.querySelectorAll("[ui5-calendar-legend-item]"),...this.legendItems]}get legendItems(){return this.getSlottedNodes("items").filter(a=>a.hasAttribute("ui5-calendar-legend-item"))}get defaultItemsMapping(){return[{type:o.Today,hide:this.hideToday},{type:o.Selected,hide:this.hideSelectedDay},{type:o.Working,hide:this.hideWorkingDay},{type:o.NonWorking,hide:this.hideNonWorkingDay}]}get _roleDescription(){return k.i18nBundle.getText(re)}};g([y({type:Boolean})],p.prototype,"hideToday",void 0);g([y({type:Boolean})],p.prototype,"hideSelectedDay",void 0);g([y({type:Boolean})],p.prototype,"hideNonWorkingDay",void 0);g([y({type:Boolean})],p.prototype,"hideWorkingDay",void 0);g([J({type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0,default:!0})],p.prototype,"items",void 0);g([z("@ui5/webcomponents")],p,"i18nBundle",void 0);p=k=g([j({tag:"ui5-calendar-legend",renderer:A,styles:pe,template:de}),I("calendar-legend-selection-change",{bubbles:!0}),I("calendar-legend-focus-out",{bubbles:!0})],p);p.define();const b=N("ui5-calendar-legend",[],["hideNonWorkingDay","hideSelectedDay","hideToday","hideWorkingDay"],[],[]);b.displayName="CalendarLegend";try{b.displayName="CalendarLegend",b.__docgenInfo={description:"The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.\nEach `CalendarLegendItem` represents a unique date type, specifying its visual style\nand a corresponding textual label.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegend",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideNonWorkingDay:{defaultValue:{value:"false"},description:"Hides the Non-Working day item in the legend.",name:"hideNonWorkingDay",required:!1,type:{name:"boolean"}},hideSelectedDay:{defaultValue:{value:"false"},description:"Hides the Selected day item in the legend.",name:"hideSelectedDay",required:!1,type:{name:"boolean"}},hideToday:{defaultValue:{value:"false"},description:"Hides the Today item in the legend.",name:"hideToday",required:!1,type:{name:"boolean"}},hideWorkingDay:{defaultValue:{value:"false"},description:"Hides the Working day item in the legend.",name:"hideWorkingDay",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="CalendarLegend",b.__docgenInfo={description:"The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.\nEach `CalendarLegendItem` represents a unique date type, specifying its visual style\nand a corresponding textual label.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegend",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideNonWorkingDay:{defaultValue:{value:"false"},description:"Hides the Non-Working day item in the legend.",name:"hideNonWorkingDay",required:!1,type:{name:"boolean"}},hideSelectedDay:{defaultValue:{value:"false"},description:"Hides the Selected day item in the legend.",name:"hideSelectedDay",required:!1,type:{name:"boolean"}},hideToday:{defaultValue:{value:"false"},description:"Hides the Today item in the legend.",name:"hideToday",required:!1,type:{name:"boolean"}},hideWorkingDay:{defaultValue:{value:"false"},description:"Hides the Working day item in the legend.",name:"hideWorkingDay",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const c=N("ui5-calendar-legend-item",["text","type"],[],[],[]);c.displayName="CalendarLegendItem";try{c.displayName="CalendarLegendItem",c.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegendItem",props:{text:{defaultValue:{value:"undefined"},description:"Defines the text content of the Calendar Legend Item.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"None"'},description:"Defines the type of the Calendar Legend Item.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="CalendarLegendItem",c.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegendItem",props:{text:{defaultValue:{value:"undefined"},description:"Defines the text content of the Calendar Legend Item.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"None"'},description:"Defines the type of the Calendar Legend Item.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const d=N("ui5-special-date",["type","value"],[],[],[]);d.displayName="SpecialCalendarDate";try{d.displayName="SpecialCalendarDate",d.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SpecialCalendarDate",props:{type:{defaultValue:{value:'"None"'},description:"Defines the type of the special date.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="SpecialCalendarDate",d.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SpecialCalendarDate",props:{type:{defaultValue:{value:'"None"'},description:"Defines the type of the special date.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"Inputs / Calendar",component:v,argTypes:{children:{control:{disable:!0}},specialDates:{control:{disable:!0}}},args:{primaryCalendarType:$.Gregorian,selectionMode:Y.Single},tags:["package:@ui5/webcomponents"]},T={},L=new Date,x=new Date(L.getFullYear(),L.getMonth(),1),u=`${x.getFullYear()}-${(x.getMonth()+1).toString().padStart(2,"0")}-`,ce=`${u}${x.getDate()}`,C={args:{specialDates:l.jsx(d,{type:o.Type01,value:ce})}},w={name:"CalendarLegend",args:{calendarLegend:l.jsxs(b,{children:[l.jsx(c,{text:"Vacation",type:o.Type05}),l.jsx(c,{text:"School Vacation",type:o.Type07}),l.jsx(c,{text:"Wedding",type:o.Type13})]}),specialDates:l.jsxs(l.Fragment,{children:[l.jsx(d,{type:o.Type05,value:`${u}01`}),l.jsx(d,{type:o.Type05,value:`${u}02`}),l.jsx(d,{type:o.Type05,value:`${u}03`}),l.jsx(d,{type:o.Type07,value:`${u}11`}),l.jsx(d,{type:o.Type07,value:`${u}12`}),l.jsx(d,{type:o.Type07,value:`${u}13`}),l.jsx(d,{type:o.Type13,value:`${u}26`})]})}};var W,P,F;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(F=(P=T.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var M,V,q;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
}`,...(q=(V=C.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,U,B;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:'{\n  name: \'CalendarLegend\',\n  args: {\n    calendarLegend: <CalendarLegend>\n        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />\n        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />\n        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />\n      </CalendarLegend>,\n    specialDates: <>\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />\n      </>\n  }\n}',...(B=(U=w.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const me=["Default","SpecialDate","CalendarLegendStory"],xe=Object.freeze(Object.defineProperty({__proto__:null,CalendarLegendStory:w,Default:T,SpecialDate:C,__namedExportsOrder:me,default:ue},Symbol.toStringTag,{value:"Module"}));export{xe as C,T as D,d as S,b as a,w as b,c,C as d};
