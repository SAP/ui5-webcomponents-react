import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./Gregorian-ddr6hDrq.js";import{C as _}from"./Persian-C8Vj0yoH.js";import{b as S,c as t}from"./Calendar-NB1Jz0Be.js";import{_ as u}from"./iframe-WacV7gDs.js";import{w as c}from"./withWebComponent-LTFbYRvs.js";const d=c("ui5-calendar",["formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType","selectionMode"],["hideWeekNumbers"],["calendarLegend","specialDates"],["selected-dates-change"],()=>u(()=>import("./Calendar-NB1Jz0Be.js").then(a=>a.j),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url));d.displayName="Calendar";try{d.displayName="Calendar",d.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

Currently selected dates are represented with instances of \`CalendarDate\` as
children of the \`Calendar\`. The value property of each \`CalendarDate\` must be a
date string, correctly formatted according to the \`Calendar\`'s \`formatPattern\` property.
Whenever the user changes the date selection, \`Calendar\` will automatically create/remove instances
of \`CalendarDate\` in itself, unless you prevent this behavior by calling \`preventDefault()\` for the
\`selected-dates-change\` event. This is useful if you want to control the selected dates externally.

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
- [SHIFT] + [F4] - Shows year picker
- [PAGEUP] - Navigate to the previous month
- [PAGEDOWN] - Navigate to the next month
- [SHIFT] + [PAGEUP] - Navigate to the previous year
- [SHIFT] + [PAGEDOWN] - Navigate to the next year
- [CTRL] + [SHIFT] + [PAGEUP] - Navigate ten years backwards
- [CTRL] + [SHIFT] + [PAGEDOWN] - Navigate ten years forwards
- [HOME] - Navigate to the first day of the week
- [END] - Navigate to the last day of the week
- [CTRL] + [HOME] - Navigate to the first day of the month
- [CTRL] + [END] - Navigate to the last day of the month

- Month picker:

- [PAGEUP] - Navigate to the previous year
- [PAGEDOWN] - Navigate to the next year
- [HOME] - Navigate to the first month of the current row
- [END] - Navigate to the last month of the current row
- [CTRL] + [HOME] - Navigate to the first month of the current year
- [CTRL] + [END] - Navigate to the last month of the year

- Year picker:

- [PAGEUP] - Navigate to the previous year range
- [PAGEDOWN] - Navigate the next year range
- [HOME] - Navigate to the first year of the current row
- [END] - Navigate to the last year of the current row
- [CTRL] + [HOME] - Navigate to the first year of the current year range
- [CTRL] + [END] - Navigate to the last year of the current year range

#### Fast Navigation
This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Calendar",props:{calendarLegend:{defaultValue:null,description:`Defines the calendar legend of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="calendarLegend"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"calendarLegend",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property)\nfor this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},specialDates:{defaultValue:null,description:`Defines the special dates, visually emphasized in the calendar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="specialDates"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"specialDates",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectedDatesChange:{defaultValue:null,description:"Fired when the selected dates change.\n\n**Note:** If you call `preventDefault()` for this event, the component will not\ncreate instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.",name:"onSelectedDatesChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectedDatesChangeEventDetail>) => void"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component.\nAccepted property values are:\n\n- `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n- `CalendarSelectionMode.Range` - enables selection of a date range.\n- `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const p=c("ui5-calendar-legend",[],["hideNonWorkingDay","hideSelectedDay","hideToday","hideWorkingDay"],[],[],()=>u(()=>import("./Calendar-NB1Jz0Be.js").then(a=>a.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url));p.displayName="CalendarLegend";try{p.displayName="CalendarLegend",p.__docgenInfo={description:"The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.\nEach `CalendarLegendItem` represents a unique date type, specifying its visual style\nand a corresponding textual label.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"CalendarLegend",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideNonWorkingDay:{defaultValue:{value:"false"},description:"Hides the Non-Working day item in the legend.",name:"hideNonWorkingDay",required:!1,type:{name:"boolean"}},hideSelectedDay:{defaultValue:{value:"false"},description:"Hides the Selected day item in the legend.",name:"hideSelectedDay",required:!1,type:{name:"boolean"}},hideToday:{defaultValue:{value:"false"},description:"Hides the Today item in the legend.",name:"hideToday",required:!1,type:{name:"boolean"}},hideWorkingDay:{defaultValue:{value:"false"},description:"Hides the Working day item in the legend.",name:"hideWorkingDay",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const l=c("ui5-calendar-legend-item",["text","type"],[],[],[],()=>u(()=>import("./Calendar-NB1Jz0Be.js").then(a=>a.h),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url));l.displayName="CalendarLegendItem";try{l.displayName="CalendarLegendItem",l.__docgenInfo={description:"Each `CalendarLegendItem` represents a legend item, displaying a color with a label.\nThe color is determined by the `type` property and the label by the `text` property.\nIf a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`\nwith the same type will emphasize the respective date(s) in the calendar.\n\n### Usage\nThe `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"CalendarLegendItem",props:{text:{defaultValue:null,description:"Defines the text content of the Calendar Legend Item.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"None"'},description:"Defines the type of the Calendar Legend Item.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const n=c("ui5-special-date",["type","value"],[],[],[],()=>u(()=>import("./Calendar-NB1Jz0Be.js").then(a=>a.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url));n.displayName="SpecialCalendarDate";try{n.displayName="SpecialCalendarDate",n.__docgenInfo={description:"The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,\nwhich is visually distinguished from the rest of the dates.",displayName:"SpecialCalendarDate",props:{type:{defaultValue:{value:'"None"'},description:"Defines the type of the special date.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Today"'},{value:'"Selected"'},{value:'"None"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'},{value:'"Today"'},{value:'"Selected"'},{value:'"Working"'},{value:'"NonWorking"'},{value:'"Type01"'},{value:'"Type02"'},{value:'"Type03"'},{value:'"Type04"'},{value:'"Type05"'},{value:'"Type06"'},{value:'"Type07"'},{value:'"Type08"'},{value:'"Type09"'},{value:'"Type10"'},{value:'"Type11"'},{value:'"Type12"'},{value:'"Type13"'},{value:'"Type14"'},{value:'"Type15"'},{value:'"Type16"'},{value:'"Type17"'},{value:'"Type18"'},{value:'"Type19"'},{value:'"Type20"'}]}},value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property\nof the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Inputs / Calendar",component:d,argTypes:{children:{control:{disable:!0}}},args:{primaryCalendarType:_.Gregorian,selectionMode:S.Single},tags:["package:@ui5/webcomponents"]},r={},h=new Date,m=new Date(h.getFullYear(),h.getMonth(),1),o=`${m.getFullYear()}-${(m.getMonth()+1).toString().padStart(2,"0")}-`,I=`${o}${m.getDate()}`,i={args:{specialDates:e.jsx(n,{type:t.Type01,value:I})}},s={name:"CalendarLegend",args:{calendarLegend:e.jsxs(p,{children:[e.jsx(l,{text:"Vacation",type:t.Type05}),e.jsx(l,{text:"School Vacation",type:t.Type07}),e.jsx(l,{text:"Wedding",type:t.Type13})]}),specialDates:e.jsxs(e.Fragment,{children:[e.jsx(n,{type:t.Type05,value:`${o}01`}),e.jsx(n,{type:t.Type05,value:`${o}02`}),e.jsx(n,{type:t.Type05,value:`${o}03`}),e.jsx(n,{type:t.Type07,value:`${o}11`}),e.jsx(n,{type:t.Type07,value:`${o}12`}),e.jsx(n,{type:t.Type07,value:`${o}13`}),e.jsx(n,{type:t.Type13,value:`${o}26`})]})}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,T,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var b,w,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:'{\n  name: \'CalendarLegend\',\n  args: {\n    calendarLegend: <CalendarLegend>\n        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />\n        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />\n        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />\n      </CalendarLegend>,\n    specialDates: <>\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />\n      </>\n  }\n}',...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const L=["Default","SpecialDate","CalendarLegendStory"],W=Object.freeze(Object.defineProperty({__proto__:null,CalendarLegendStory:s,Default:r,SpecialDate:i,__namedExportsOrder:L,default:N},Symbol.toStringTag,{value:"Module"}));export{W as C,r as D,n as S,p as a,s as b,l as c,i as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Calendar-NB1Jz0Be.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./VersionInfo-ldzxTIVv.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-orabJqjR.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./Gregorian-ddr6hDrq.js","./Boot-vTaFuwdG.js","./i18nBundle-j8vDD4VY.js","./LocaleData-9iSzsORX.js","./Keys-ZEuNsqmZ.js","./UI5Element-9EXj3atz.js","./Integer-kog98579.js","./slim-arrow-left-W95OY-0p.js","./Icons-Vbmmw7bO.js","./slim-arrow-right-w4AUPzoN.js","./Icon-kyep1SqZ.js","./parameters-bundle.css-EKzfhWK3.js","./class-map-gjOVarQw.js","./i18n-defaults-X1FTyPSK.js","./style-map-tejh5TI3.js","./ItemNavigation-F0c19DRy.js","./getActiveElement-IIKAy3xo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
