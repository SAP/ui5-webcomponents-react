const __vite__fileDeps=["./Calendar-BNOEcQvJ.js","./withWebComponent-BxrD_3pN.js","./utils-DgTsnvPN.js","./CustomElementsScopeUtils-C6IqSY4u.js","./useIsomorphicLayoutEffect-CpdNMtv3.js","./index-DEe9W-hO.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./Gregorian-lfhuDVtO.js","./UI5Element-B4CRQCUa.js","./i18nBundle-NJJr-Wgh.js","./LocaleData-DNiL29k3.js","./Keys-B00bFMgT.js","./Integer-DgRYWdxf.js","./slim-arrow-left-D2bRUZZa.js","./Icons-CwMCtZ-T.js","./slim-arrow-right-CMQBLv6O.js","./Icon-p6ifn8PN.js","./Device-RcFucVeJ.js","./if-defined-Cl7uVo8B.js","./parameters-bundle.css-DQGkr9pp.js","./class-map-CVq5yHuN.js","./i18n-defaults-vwvk3Exl.js","./style-map-BoopDC9U.js","./ItemNavigation-nDjVNi0g.js","./getActiveElement-kltGt_DR.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as a}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{s as S}from"./Gregorian-lfhuDVtO.js";import"./Persian-CKatCSQZ.js";import{c as N,d as n}from"./Calendar-BNOEcQvJ.js";import{_ as u}from"./iframe-CcWfc5lm.js";import{w as c}from"./withWebComponent-BxrD_3pN.js";const r=c("ui5-calendar",["formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType","selectionMode"],["hideWeekNumbers"],["calendarLegend","specialDates"],["selection-change"],()=>u(()=>import("./Calendar-BNOEcQvJ.js").then(e=>e.k),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));r.displayName="Calendar";try{r.displayName="Calendar",r.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"calendarLegend",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},specialDates:{defaultValue:null,description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"specialDates",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:"Fired when the selected dates change.\n\n**Note:** If you call `preventDefault()` for this event, the component will not\ncreate instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectionChangeEventDetail>) => void"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Range"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="Calendar",r.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"calendarLegend",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},specialDates:{defaultValue:null,description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"specialDates",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:"Fired when the selected dates change.\n\n**Note:** If you call `preventDefault()` for this event, the component will not\ncreate instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectionChangeEventDetail>) => void"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Range"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const i=c("ui5-calendar-legend",[],["hideNonWorkingDay","hideSelectedDay","hideToday","hideWorkingDay"],[],[],()=>u(()=>import("./Calendar-BNOEcQvJ.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));i.displayName="CalendarLegend";try{i.displayName="CalendarLegend",i.__docgenInfo={description:"The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.\nEach `CalendarLegendItem` represents a unique date type, specifying its visual style\nand a corresponding textual label.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegend",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideNonWorkingDay:{defaultValue:{value:"false"},description:"Hides the Non-Working day item in the legend.",name:"hideNonWorkingDay",required:!1,type:{name:"boolean"}},hideSelectedDay:{defaultValue:{value:"false"},description:"Hides the Selected day item in the legend.",name:"hideSelectedDay",required:!1,type:{name:"boolean"}},hideToday:{defaultValue:{value:"false"},description:"Hides the Today item in the legend.",name:"hideToday",required:!1,type:{name:"boolean"}},hideWorkingDay:{defaultValue:{value:"false"},description:"Hides the Working day item in the legend.",name:"hideWorkingDay",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="CalendarLegend",i.__docgenInfo={description:"The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.\nEach `CalendarLegendItem` represents a unique date type, specifying its visual style\nand a corresponding textual label.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegend",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideNonWorkingDay:{defaultValue:{value:"false"},description:"Hides the Non-Working day item in the legend.",name:"hideNonWorkingDay",required:!1,type:{name:"boolean"}},hideSelectedDay:{defaultValue:{value:"false"},description:"Hides the Selected day item in the legend.",name:"hideSelectedDay",required:!1,type:{name:"boolean"}},hideToday:{defaultValue:{value:"false"},description:"Hides the Today item in the legend.",name:"hideToday",required:!1,type:{name:"boolean"}},hideWorkingDay:{defaultValue:{value:"false"},description:"Hides the Working day item in the legend.",name:"hideWorkingDay",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const l=c("ui5-calendar-legend-item",["text","type"],[],[],[],()=>u(()=>import("./Calendar-BNOEcQvJ.js").then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));l.displayName="CalendarLegendItem";try{l.displayName="CalendarLegendItem",l.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegendItem",props:{text:{defaultValue:null,description:"Defines the text content of the Calendar Legend Item.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"None"'},description:"Defines the type of the Calendar Legend Item.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="CalendarLegendItem",l.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CalendarLegendItem",props:{text:{defaultValue:null,description:"Defines the text content of the Calendar Legend Item.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"None"'},description:"Defines the type of the Calendar Legend Item.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const t=c("ui5-special-date",["type","value"],[],[],[],()=>u(()=>import("./Calendar-BNOEcQvJ.js").then(e=>e.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));t.displayName="SpecialCalendarDate";try{t.displayName="SpecialCalendarDate",t.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SpecialCalendarDate",props:{type:{defaultValue:{value:'"None"'},description:"Defines the type of the special date.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="SpecialCalendarDate",t.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SpecialCalendarDate",props:{type:{defaultValue:{value:'"None"'},description:"Defines the type of the special date.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Inputs / Calendar",component:r,argTypes:{children:{control:{disable:!0}},specialDates:{control:{disable:!0}}},args:{primaryCalendarType:S.Gregorian,selectionMode:N.Single},tags:["package:@ui5/webcomponents"]},s={},m=new Date,h=new Date(m.getFullYear(),m.getMonth(),1),o=`${h.getFullYear()}-${(h.getMonth()+1).toString().padStart(2,"0")}-`,I=`${o}${h.getDate()}`,d={args:{specialDates:a.jsx(t,{type:n.Type01,value:I})}},p={name:"CalendarLegend",args:{calendarLegend:a.jsxs(i,{children:[a.jsx(l,{text:"Vacation",type:n.Type05}),a.jsx(l,{text:"School Vacation",type:n.Type07}),a.jsx(l,{text:"Wedding",type:n.Type13})]}),specialDates:a.jsxs(a.Fragment,{children:[a.jsx(t,{type:n.Type05,value:`${o}01`}),a.jsx(t,{type:n.Type05,value:`${o}02`}),a.jsx(t,{type:n.Type05,value:`${o}03`}),a.jsx(t,{type:n.Type07,value:`${o}11`}),a.jsx(t,{type:n.Type07,value:`${o}12`}),a.jsx(t,{type:n.Type07,value:`${o}13`}),a.jsx(t,{type:n.Type13,value:`${o}26`})]})}};var y,f,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,T,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var w,C,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:'{\n  name: \'CalendarLegend\',\n  args: {\n    calendarLegend: <CalendarLegend>\n        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />\n        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />\n        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />\n      </CalendarLegend>,\n    specialDates: <>\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />\n      </>\n  }\n}',...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const k=["Default","SpecialDate","CalendarLegendStory"],M=Object.freeze(Object.defineProperty({__proto__:null,CalendarLegendStory:p,Default:s,SpecialDate:d,__namedExportsOrder:k,default:D},Symbol.toStringTag,{value:"Module"}));export{M as C,s as D,t as S,i as a,p as b,l as c,d};
