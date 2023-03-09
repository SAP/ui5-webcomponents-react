import{M as C,C as u,j as c,a as s}from"./index-454f6e61.js";import{_ as y}from"./iframe-54465ae2.js";import{c as D}from"./Calendar-ce3bdcbd.js";import{w as g}from"./withWebComponent-e4481254.js";import{C as b}from"./Persian-6e5baf2b.js";import{A as h}from"./DomRefTable.module-5c771d43.js";import{D as w}from"./DocsHeader-22447b02.js";import{F as N}from"./Footer-c06637a8.js";import{j as e,a as T,F as _}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./Gregorian-034a4e91.js";import{S}from"./SubcomponentsSection-6138f2fc.js";import{u as f}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./LocaleData-971cbc51.js";import"./slim-arrow-left-b095b594.js";import"./Icons-7b82f601.js";import"./slim-arrow-right-bbef5919.js";import"./Button-e27d9549.js";import"./Device-208919c6.js";import"./utils-ed90fb1b.js";import"./class-map-5d8e4b2b.js";import"./style-map-77d201d2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./chunk-QDOP3WTA-09a2a7b2.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-6e1a9984.js";import"./decline-0a03b0b0.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-cc07a431.js";import"./TableOfContent-b6a97806.js";import"./index-14872dc3.js";import"./WrappingType-b81e595a.js";import"./index-6f08696a.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-8da5c02f.js";import"./Popover-cbbb060d.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";var d=(t=>(t.Single="Single",t.Multiple="Multiple",t.Range="Range",t))(d||{});const a=g("ui5-calendar",["selectionMode","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType"],["hideWeekNumbers"],[],["selected-dates-change"],()=>y(()=>import("./Calendar-ce3bdcbd.js").then(t=>t.e),["./Calendar-ce3bdcbd.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./MarkedEvents-8627ed01.js","./AriaLabelHelper-c82262ef.js","./Gregorian-034a4e91.js","./UI5Element-427ec721.js","./LocaleData-971cbc51.js","./Keys-3acbae73.js","./Integer-d9976c13.js","./slim-arrow-left-b095b594.js","./Icons-7b82f601.js","./slim-arrow-right-bbef5919.js","./Button-e27d9549.js","./Device-208919c6.js","./class-map-5d8e4b2b.js","./style-map-77d201d2.js"],import.meta.url));a.displayName="Calendar";a.defaultProps={selectionMode:D.Single};try{a.displayName="Calendar",a.__docgenInfo={description:'The `Calendar` component allows users to select one or more dates.\n\nCurrently selected dates are represented with instances of `CalendarDate` as children of the `Calendar`. The value property of each `CalendarDate` must be a date string, correctly formatted according to the `Calendar`\'s `formatPattern` property. Whenever the user changes the date selection, `Calendar` will automatically create/remove instances of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the `onSelectedDatesChange` event. This is useful if you want to control the selected dates externally.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Calendar",props:{children:{defaultValue:null,description:"Defines the selected date or dates (depending on the `selectionMode` property) for this calendar as instances of `CalendarDate`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectedDatesChange:{defaultValue:null,description:"Fired when the selected dates change. **Note:** If you call `preventDefault()` for this event, the component will not create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.",name:"onSelectedDatesChange",required:!1,type:{name:"(event: Ui5CustomEvent<CalendarDomRef, { values: unknown[]; dates: unknown[]; }>) => void"}},hideWeekNumbers:{defaultValue:null,description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:{value:"CalendarSelectionMode.Single"},description:"Defines the type of selection used in the calendar component. Accepted property values are:\n\n*   `CalendarSelectionMode.Single` - enables a single date selection.(default value)\n*   `CalendarSelectionMode.Range` - enables selection of a date range.\n*   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Range"'}]}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection.",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection.",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:null,description:'Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`',name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:null,description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const n=g("ui5-date",["value"],[],[],[],()=>y(()=>import("./Calendar-ce3bdcbd.js").then(t=>t.d),["./Calendar-ce3bdcbd.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./MarkedEvents-8627ed01.js","./AriaLabelHelper-c82262ef.js","./Gregorian-034a4e91.js","./UI5Element-427ec721.js","./LocaleData-971cbc51.js","./Keys-3acbae73.js","./Integer-d9976c13.js","./slim-arrow-left-b095b594.js","./Icons-7b82f601.js","./slim-arrow-right-bbef5919.js","./Button-e27d9549.js","./Device-208919c6.js","./class-map-5d8e4b2b.js","./style-map-77d201d2.js"],import.meta.url));n.displayName="CalendarDate";try{n.displayName="CalendarDate",n.__docgenInfo={description:'The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
}`}};const o={title:"Inputs / Calendar",component:a,subcomponents:{CalendarDate:n},args:{primaryCalendarType:b.Gregorian,selectionMode:d.Single},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCalendarDate"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:k};const qe=["defaultStory","withCalendarDate"];export{qe as __namedExportsOrder,o as default,v as defaultStory,i as withCalendarDate};
//# sourceMappingURL=Calendar.stories-9a7176c2.js.map
