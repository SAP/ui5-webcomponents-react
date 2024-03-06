import"./Gregorian-pdl4qRze.js";import{C as i}from"./Persian-lMFI0ovg.js";import{_ as s}from"./iframe-q_ztUNRf.js";import{C as l}from"./Calendar-8MfaxThC.js";import{w as d}from"./withWebComponent-c-uI2wMj.js";const a=d("ui5-calendar",["formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType","selectionMode"],["hideWeekNumbers"],[],["selected-dates-change"],()=>s(()=>import("./Calendar-8MfaxThC.js").then(t=>t.f),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url));a.displayName="Calendar";try{a.displayName="Calendar",a.__docgenInfo={description:`The \`Calendar\` component allows users to select one or more dates.

Currently selected dates are represented with instances of \`CalendarDate\` as children of the \`Calendar\`. The value property of each \`CalendarDate\` must be a date string, correctly formatted according to the \`Calendar\`'s \`formatPattern\` property. Whenever the user changes the date selection, \`Calendar\` will automatically create/remove instances of \`CalendarDate\` in itself, unless you prevent this behavior by calling \`preventDefault()\` for the \`selected-dates-change\` event. This is useful if you want to control the selected dates externally.


### Usage

The user can navigate to a particular date by:

*   Pressing over a month inside the months view
*   Pressing over an year inside the years view


The user can confirm a date selection by pressing over a date inside the days view.


### Keyboard Handling

The \`Calendar\` provides advanced keyboard handling. When a picker is showed and focused the user can use the following keyboard shortcuts in order to perform a navigation:
\\- Day picker:

*   \\[F4\\] - Shows month picker
*   \\[SHIFT\\] + \\[F4\\] - Shows year picker
*   \\[PAGEUP\\] - Navigate to the previous month
*   \\[PAGEDOWN\\] - Navigate to the next month
*   \\[SHIFT\\] + \\[PAGEUP\\] - Navigate to the previous year
*   \\[SHIFT\\] + \\[PAGEDOWN\\] - Navigate to the next year
*   \\[CTRL\\] + \\[SHIFT\\] + \\[PAGEUP\\] - Navigate ten years backwards
*   \\[CTRL\\] + \\[SHIFT\\] + \\[PAGEDOWN\\] - Navigate ten years forwards
*   \\[HOME\\] - Navigate to the first day of the week
*   \\[END\\] - Navigate to the last day of the week
*   \\[CTRL\\] + \\[HOME\\] - Navigate to the first day of the month
*   \\[CTRL\\] + \\[END\\] - Navigate to the last day of the month


\\- Month picker:

*   \\[PAGEUP\\] - Navigate to the previous year
*   \\[PAGEDOWN\\] - Navigate to the next year
*   \\[HOME\\] - Navigate to the first month of the current row
*   \\[END\\] - Navigate to the last month of the current row
*   \\[CTRL\\] + \\[HOME\\] - Navigate to the first month of the current year
*   \\[CTRL\\] + \\[END\\] - Navigate to the last month of the year


\\- Year picker:

*   \\[PAGEUP\\] - Navigate to the previous year range
*   \\[PAGEDOWN\\] - Navigate the next year range
*   \\[HOME\\] - Navigate to the first year of the current row
*   \\[END\\] - Navigate to the last year of the current row
*   \\[CTRL\\] + \\[HOME\\] - Navigate to the first year of the current year range
*   \\[CTRL\\] + \\[END\\] - Navigate to the last year of the current year range



#### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`


### Calendar types

The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the \`primaryCalendarType\` property and import one or more of the following modules:

\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`
\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`
\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`
\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`

Or, you can use the global configuration and set the \`calendarType\` key:
\`<script data-id="sap-ui-config" type="application/json"> { "calendarType": "Japanese" } <\/script>\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Calendar",props:{children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property) for this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectedDatesChange:{defaultValue:null,description:"Fired when the selected dates change. **Note:** If you call `preventDefault()` for this event, the component will not create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.",name:"onSelectedDatesChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, CalendarSelectedDatesChangeEventDetail>) => void"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection. **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection. **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:"Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.",name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},selectionMode:{defaultValue:{value:'"Single"'},description:"Defines the type of selection used in the calendar component. Accepted property values are:\n\n*   `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n*   `CalendarSelectionMode.Range` - enables selection of a date range.\n*   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const u={title:"Inputs / Calendar",component:a,argTypes:{children:{control:{disable:!0}}},args:{primaryCalendarType:i.Gregorian,selectionMode:l.Single},tags:["package:@ui5/webcomponents"]},e={};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const c=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{v as C,e as D};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Calendar-8MfaxThC.js","./withWebComponent-c-uI2wMj.js","./utils-_oNUceU3.js","./VersionInfo-zmLW7G4m.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-StEZUlti.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./Gregorian-pdl4qRze.js","./Language-JQ3LAQtE.js","./UI5Element-ZYvPEp0D.js","./i18nBundle-1RfbKOQr.js","./LocaleData-WC8pEQAk.js","./Keys-ZEuNsqmZ.js","./Integer-kog98579.js","./slim-arrow-left-Ex2sYCdZ.js","./Icons-cAVhCySg.js","./slim-arrow-right-TNC8KtYg.js","./Icon-7RzQfNaI.js","./parameters-bundle.css-mPCp9TQx.js","./class-map-kWxrnrVL.js","./i18n-defaults-5NJLMpyi.js","./style-map-5XXpitLE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
