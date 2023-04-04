import{j as e,a as m,F as d}from"./jsx-runtime-670450c2.js";import{C as l,A as h}from"./DomRefTable.module-70e5e95a.js";import{D as c}from"./DocsHeader-da84dd86.js";import{F as u}from"./Footer-3a63cda6.js";import"./index-f1f749bf.js";import{M as f,C as g,a}from"./chunk-PCJTTTQV-6266691d.js";import{S as y}from"./SubcomponentsSection-6138f2fc.js";import{_ as v}from"./iframe-838ff653.js";import"./Calendar-6255860f.js";import{w as N}from"./withWebComponent-d280b5c2.js";import{C,D as s}from"./Calendar.stories-dff5af09.js";import{u as p}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-9ec12ec9.js";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./utils-ed90fb1b.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d2673faa.js";import"./TableOfContent-9ada2504.js";import"./index-62c74678.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-45285c2f.js";import"./Label-e3d88218.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./index-96c5f47c.js";import"./index-5da71a6d.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"../sb-preview/runtime.mjs";import"./Gregorian-6dbeb61b.js";import"./LocaleData-2c683b59.js";import"./slim-arrow-left-8c4fd81e.js";import"./slim-arrow-right-a1ee93cb.js";import"./Persian-5abd2306.js";const o=N("ui5-date",["value"],[],[],[],()=>v(()=>import("./Calendar-6255860f.js").then(t=>t.e),["./Calendar-6255860f.js","./withWebComponent-d280b5c2.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./Icon-c8fd92f0.js","./UI5Element-d1d93200.js","./Icons-efeb15d5.js","./slot-76e48863.js","./Gregorian-6dbeb61b.js","./LocaleData-2c683b59.js","./Integer-f7f172c9.js","./slim-arrow-left-8c4fd81e.js","./slim-arrow-right-a1ee93cb.js","./class-map-6d48ebd3.js","./i18n-defaults-254d6b69.js","./style-map-51d6dd91.js"],import.meta.url));o.displayName="CalendarDate";try{o.displayName="CalendarDate",o.__docgenInfo={description:'The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const w="The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n",b=`## Usage

The user can navigate to a particular date by:

- Pressing over a month inside the months view
- Pressing over an year inside the years view

The user can confirm a date selection by pressing over a date inside the days view.

## Keyboard Handling

The \`Calendar\` provides advanced keyboard handling. When a picker is showed and focused the user can use the following keyboard shortcuts in order to perform a navigation:  
\\- Day picker:

- \\[F4\\] - Shows month picker
- \\[SHIFT\\] + \\[F4\\] - Shows year picker
- \\[PAGEUP\\] - Navigate to the previous month
- \\[PAGEDOWN\\] - Navigate to the next month
- \\[SHIFT\\] + \\[PAGEUP\\] - Navigate to the previous year
- \\[SHIFT\\] + \\[PAGEDOWN\\] - Navigate to the next year
- \\[CTRL\\] + \\[SHIFT\\] + \\[PAGEUP\\] - Navigate ten years backwards
- \\[CTRL\\] + \\[SHIFT\\] + \\[PAGEDOWN\\] - Navigate ten years forwards
- \\[HOME\\] - Navigate to the first day of the week
- \\[END\\] - Navigate to the last day of the week
- \\[CTRL\\] + \\[HOME\\] - Navigate to the first day of the month
- \\[CTRL\\] + \\[END\\] - Navigate to the last day of the month

\\- Month picker:

- \\[PAGEUP\\] - Navigate to the previous year
- \\[PAGEDOWN\\] - Navigate to the next year
- \\[HOME\\] - Navigate to the first month of the current row
- \\[END\\] - Navigate to the last month of the current row
- \\[CTRL\\] + \\[HOME\\] - Navigate to the first month of the current year
- \\[CTRL\\] + \\[END\\] - Navigate to the last month of the year

\\- Year picker:

- \\[PAGEUP\\] - Navigate to the previous year range
- \\[PAGEDOWN\\] - Navigate the next year range
- \\[HOME\\] - Navigate to the first year of the current row
- \\[END\\] - Navigate to the last year of the current row
- \\[CTRL\\] + \\[HOME\\] - Navigate to the first year of the current year range
- \\[CTRL\\] + \\[END\\] - Navigate to the last year of the current year range

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

## Calendar types

The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the \`primaryCalendarType\` property and import one or more of the following modules:

\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`

Or, you can use the global configuration and set the \`calendarType\` key:  
\`<script data-id="sap-ui-config" type="application/json"> { "calendarType": "Japanese" } <\/script>\`
`;function We(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e(r,Object.assign({},t,{children:e(i,{})})):i();function i(){const n=Object.assign({h2:"h2"},p(),t.components);return m(d,{children:[e(f,{of:C}),`
`,e(c,{since:"0.13.0"}),`
`,e("br",{}),`
`,e(n.h2,{id:"example",children:"Example"}),`
`,e(g,{of:s}),`
`,e(n.h2,{id:"properties",children:"Properties"}),`
`,e(l,{of:s}),`
`,e(a,{children:b}),`
`,e(a,{children:y}),`
`,e(n.h2,{id:"calendardate",children:"CalendarDate"}),`
`,e(h,{of:o}),`
`,e(a,{children:w}),`
`,e(u,{})]})}}export{We as default};
//# sourceMappingURL=Calendar-7119f013.js.map
