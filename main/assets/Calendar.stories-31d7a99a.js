import"./Gregorian-6dbeb61b.js";import{C as s}from"./Persian-5abd2306.js";import{_ as i}from"./iframe-1d6fd4e8.js";import{d as o}from"./Calendar-6255860f.js";import{w as d}from"./withWebComponent-d280b5c2.js";const a=d("ui5-calendar",["selectionMode","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType"],["hideWeekNumbers"],[],["selected-dates-change"],()=>i(()=>import("./Calendar-6255860f.js").then(t=>t.f),["./Calendar-6255860f.js","./withWebComponent-d280b5c2.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./Icon-c8fd92f0.js","./UI5Element-d1d93200.js","./Icons-efeb15d5.js","./slot-76e48863.js","./Gregorian-6dbeb61b.js","./LocaleData-2c683b59.js","./Integer-f7f172c9.js","./slim-arrow-left-8c4fd81e.js","./slim-arrow-right-a1ee93cb.js","./class-map-6d48ebd3.js","./i18n-defaults-254d6b69.js","./style-map-51d6dd91.js"],import.meta.url));a.displayName="Calendar";a.defaultProps={selectionMode:o.Single};try{a.displayName="Calendar",a.__docgenInfo={description:'The `Calendar` component allows users to select one or more dates.\n\nCurrently selected dates are represented with instances of `CalendarDate` as children of the `Calendar`. The value property of each `CalendarDate` must be a date string, correctly formatted according to the `Calendar`\'s `formatPattern` property. Whenever the user changes the date selection, `Calendar` will automatically create/remove instances of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the `onSelectedDatesChange` event. This is useful if you want to control the selected dates externally.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Calendar",props:{children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property) for this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectedDatesChange:{defaultValue:null,description:"Fired when the selected dates change. **Note:** If you call `preventDefault()` for this event, the component will not create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.",name:"onSelectedDatesChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, { values: unknown[]; dates: unknown[]; }>) => void"}},hideWeekNumbers:{defaultValue:null,description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:{value:"CalendarSelectionMode.Single"},description:"Defines the type of selection used in the calendar component. Accepted property values are:\n\n*   `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n*   `CalendarSelectionMode.Range` - enables selection of a date range.\n*   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'}]}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection.",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection.",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:null,description:'Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`',name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:null,description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const u={title:"Inputs / Calendar",component:a,argTypes:{children:{control:{disable:!0}}},args:{primaryCalendarType:s.Gregorian,selectionMode:o.Single}},e={};var n,l,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const c=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{g as C,e as D};
//# sourceMappingURL=Calendar.stories-31d7a99a.js.map
