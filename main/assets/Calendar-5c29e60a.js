import{j as e,a as m,F as d}from"./jsx-runtime-670450c2.js";import{C as l,A as h}from"./DomRefTable.module-2ef5328a.js";import{D as c}from"./DocsHeader-63b46d91.js";import{F as u}from"./Footer-e01c49e8.js";import"./index-f1f749bf.js";import{M as f,C as g,a}from"./chunk-PCJTTTQV-a5a9d2a5.js";import{S as y}from"./SubcomponentsSection-6138f2fc.js";import{_ as v}from"./iframe-a48c2f75.js";import"./Calendar-bbb20fcd.js";import{w as N}from"./withWebComponent-65cd39a0.js";import{C,D as s}from"./Calendar.stories-6aa53127.js";import{u as p}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-63bbfc10.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./utils-ed90fb1b.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-ac298967.js";import"./TableOfContent-159d7c99.js";import"./index-b248d767.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-a187776a.js";import"./Label-ccc234fe.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./index-96c5f47c.js";import"./index-a185fc08.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"../sb-preview/runtime.mjs";import"./Gregorian-034a4e91.js";import"./LocaleData-971cbc51.js";import"./slim-arrow-left-52e97856.js";import"./slim-arrow-right-52a56681.js";import"./Persian-6e5baf2b.js";const n=N("ui5-date",["value"],[],[],[],()=>v(()=>import("./Calendar-bbb20fcd.js").then(t=>t.d),["./Calendar-bbb20fcd.js","./withWebComponent-65cd39a0.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./Icon-7987c836.js","./UI5Element-427ec721.js","./Icons-fe6e657a.js","./slot-634e3e91.js","./Gregorian-034a4e91.js","./LocaleData-971cbc51.js","./Integer-f7f172c9.js","./slim-arrow-left-52e97856.js","./slim-arrow-right-52a56681.js","./class-map-95320e87.js","./i18n-defaults-254d6b69.js","./style-map-cae0a379.js"],import.meta.url));n.displayName="CalendarDate";try{n.displayName="CalendarDate",n.__docgenInfo={description:'The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const w="The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n",b=`## Usage

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
\`<script data-id="sap-ui-config" type="application/json"> { "calendarType": "Japanese" } <\/script>\``;function xe(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e(r,Object.assign({},t,{children:e(i,{})})):i();function i(){const o=Object.assign({h2:"h2"},p(),t.components);return m(d,{children:[e(f,{of:C}),`
`,e(c,{since:"0.13.0"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(g,{of:s}),`
`,e(o.h2,{children:"Properties"}),`
`,e(l,{of:s}),`
`,e(a,{children:b}),`
`,e(a,{children:y}),`
`,e(o.h2,{children:"CalendarDate"}),`
`,e(h,{of:n}),`
`,e(a,{children:w}),`
`,e(u,{})]})}}export{xe as default};
//# sourceMappingURL=Calendar-5c29e60a.js.map
