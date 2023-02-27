import{M as C,C as u,i as c,a as s}from"./index-08f5a92a.js";import{_ as y}from"./iframe-baaa6734.js";import{c as D}from"./Calendar-61c19bb0.js";import{w as g}from"./withWebComponent-63dd52a0.js";import{C as b}from"./Persian-058175d2.js";import{A as h}from"./DomRefTable.module-bd2f6310.js";import{D as w}from"./DocsHeader-7b277ff6.js";import{F as N}from"./Footer-a200614f.js";import{j as e,a as T,F as _}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./Gregorian-8207d62f.js";import{S}from"./SubcomponentsSection-6138f2fc.js";import{u as f}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./MarkedEvents-f33713fa.js";import"./fastNavigation-ebf07f1c.js";import"./AriaLabelHelper-dee23f38.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Keys-50a1cb5a.js";import"./Integer-a72984d1.js";import"./class-map-abcca105.js";import"./utils-ed90fb1b.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./LocaleData-d0e192f7.js";import"./slim-arrow-left-1b0d26d1.js";import"./Icons-5bcf1e3f.js";import"./slim-arrow-right-a1b07349.js";import"./Button-e1b15b5b.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-c79180df.js";import"./decline-ff534003.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./WrappingType-b81e595a.js";import"./index-998f859a.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./index-65416cbf.js";import"./Popover-5336e3a5.js";var d=(t=>(t.Single="Single",t.Multiple="Multiple",t.Range="Range",t))(d||{});const a=g("ui5-calendar",["selectionMode","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType"],["hideWeekNumbers"],[],["selected-dates-change"],()=>y(()=>import("./Calendar-61c19bb0.js").then(t=>t.e),["./Calendar-61c19bb0.js","./withWebComponent-63dd52a0.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./UI5Element-727d48d7.js","./MarkedEvents-f33713fa.js","./fastNavigation-ebf07f1c.js","./AriaLabelHelper-dee23f38.js","./Gregorian-8207d62f.js","./LocaleData-d0e192f7.js","./Keys-50a1cb5a.js","./Integer-a72984d1.js","./class-map-abcca105.js","./FocusableElements-5a723910.js","./getActiveElement-bcae01ed.js","./ResizeHandler-c56abc92.js","./MediaRange-25b98f31.js","./style-map-7b3eb5df.js","./slim-arrow-left-1b0d26d1.js","./Icons-5bcf1e3f.js","./slim-arrow-right-a1b07349.js","./Button-e1b15b5b.js"],import.meta.url));a.displayName="Calendar";a.defaultProps={selectionMode:D.Single};try{a.displayName="Calendar",a.__docgenInfo={description:'The `Calendar` component allows users to select one or more dates.\n\nCurrently selected dates are represented with instances of `CalendarDate` as children of the `Calendar`. The value property of each `CalendarDate` must be a date string, correctly formatted according to the `Calendar`\'s `formatPattern` property. Whenever the user changes the date selection, `Calendar` will automatically create/remove instances of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the `onSelectedDatesChange` event. This is useful if you want to control the selected dates externally.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Calendar",props:{children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property) for this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectedDatesChange:{defaultValue:null,description:"Fired when the selected dates change. **Note:** If you call `preventDefault()` for this event, the component will not create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.",name:"onSelectedDatesChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, { values: unknown[]; dates: unknown[]; }>) => void"}},hideWeekNumbers:{defaultValue:null,description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:{value:"CalendarSelectionMode.Single"},description:"Defines the type of selection used in the calendar component. Accepted property values are:\n\n*   `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n*   `CalendarSelectionMode.Range` - enables selection of a date range.\n*   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'}]}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection.",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection.",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:null,description:'Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`',name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:null,description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const n=g("ui5-date",["value"],[],[],[],()=>y(()=>import("./Calendar-61c19bb0.js").then(t=>t.d),["./Calendar-61c19bb0.js","./withWebComponent-63dd52a0.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./UI5Element-727d48d7.js","./MarkedEvents-f33713fa.js","./fastNavigation-ebf07f1c.js","./AriaLabelHelper-dee23f38.js","./Gregorian-8207d62f.js","./LocaleData-d0e192f7.js","./Keys-50a1cb5a.js","./Integer-a72984d1.js","./class-map-abcca105.js","./FocusableElements-5a723910.js","./getActiveElement-bcae01ed.js","./ResizeHandler-c56abc92.js","./MediaRange-25b98f31.js","./style-map-7b3eb5df.js","./slim-arrow-left-1b0d26d1.js","./Icons-5bcf1e3f.js","./slim-arrow-right-a1b07349.js","./Button-e1b15b5b.js"],import.meta.url));n.displayName="CalendarDate";try{n.displayName="CalendarDate",n.__docgenInfo={description:'The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const P=`## Usage

The user can navigate to a particular date by:  

*   Pressing over a month inside the months view
*   Pressing over an year inside the years view

  
The user can confirm a date selection by pressing over a date inside the days view.  
  

## Keyboard Handling

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

  

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`  
  

## Calendar types

The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the \`primaryCalendarType\` property and import one or more of the following modules:  
  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`  
  
Or, you can use the global configuration and set the \`calendarType\` key:  
\`<script data-id="sap-ui-config" type="application/json"> { "calendarType": "Japanese" } <\/script>\``,M="The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n";function k(t={}){const{wrapper:p}=Object.assign({},f(),t.components);return p?e(p,{...t,children:e(m,{})}):m();function m(){const r=Object.assign({h2:"h2",h1:"h1"},f(),t.components);return T(_,{children:[e(C,{title:"Inputs / Calendar",component:a,subcomponents:{CalendarDate:n},argTypes:{children:{control:{disable:!0}}},args:{primaryCalendarType:b.Gregorian,selectionMode:d.Single}}),`
`,e(w,{since:"0.13.0"}),`
`,e("br",{}),`
`,e(r.h2,{children:"Example"}),`
`,e(u,{children:e(c,{name:"Default",children:({...l})=>e(a,{...l})})}),`
`,e(r.h2,{children:"Properties"}),`
`,e(h,{story:"Default"}),`
`,e(s,{children:P}),`
`,e(r.h1,{children:"More Examples"}),`
`,e(r.h2,{children:"Calendar with CalendarDate component"}),`
`,e(u,{children:e(c,{name:"with CalendarDate",args:{value:new Date(new Date().getTime()-24*60*60*1e3*5).toISOString().split("T")[0]},argTypes:{hideWeekNumbers:{table:{disable:!0}},selectionMode:{table:{disable:!0}},formatPattern:{table:{disable:!0}},maxDate:{table:{disable:!0}},minDate:{table:{disable:!0}},primaryCalendarType:{table:{disable:!0}},secondaryCalendarType:{table:{disable:!0}},children:{table:{disable:!0}},onSelectedDatesChange:{table:{disable:!0}},style:{table:{disable:!0}},className:{table:{disable:!0}},tooltip:{table:{disable:!0}},value:{description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the `CalendarDate`"}},children:({...l})=>e(a,{children:e(n,{value:l.value})})})}),`
`,e(h,{story:"with CalendarDate",noteText:'The props in the table below are part of the "CalendarDate" component.'}),`
`,e(s,{children:S}),`
`,e(r.h2,{children:"CalendarDate"}),`
`,e(s,{children:M}),`
`,e(N,{})]})}}const v=({...t})=>e(a,{...t});v.storyName="Default";v.parameters={storySource:{source:`({ ...props
}) => {
  return <Calendar {...props} />;
}`}};const i=({...t})=>e(a,{children:e(n,{value:t.value})});i.storyName="with CalendarDate";i.argTypes={hideWeekNumbers:{table:{disable:!0}},selectionMode:{table:{disable:!0}},formatPattern:{table:{disable:!0}},maxDate:{table:{disable:!0}},minDate:{table:{disable:!0}},primaryCalendarType:{table:{disable:!0}},secondaryCalendarType:{table:{disable:!0}},children:{table:{disable:!0}},onSelectedDatesChange:{table:{disable:!0}},style:{table:{disable:!0}},className:{table:{disable:!0}},tooltip:{table:{disable:!0}},value:{description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the `CalendarDate`"}};i.args={value:new Date(new Date().getTime()-24*60*60*1e3*5).toISOString().split("T")[0]};i.parameters={storySource:{source:`({ ...props
}) => {
  return <Calendar>
          <CalendarDate value={props.value} />
        </Calendar>;
}`}};const o={title:"Inputs / Calendar",component:a,subcomponents:{CalendarDate:n},args:{primaryCalendarType:b.Gregorian,selectionMode:d.Single},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCalendarDate"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:k};const We=["defaultStory","withCalendarDate"];export{We as __namedExportsOrder,o as default,v as defaultStory,i as withCalendarDate};
//# sourceMappingURL=Calendar.stories-46f4c0ab.js.map
