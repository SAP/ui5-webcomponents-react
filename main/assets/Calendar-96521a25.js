import{j as e}from"./jsx-runtime-5926aa06.js";import{C as m,A as d}from"./DomRefTable.module-0e5d984f.js";import{D as l}from"./DocsHeader-a1c66828.js";import{F as h}from"./Footer-e301fe93.js";import"./index-ebeaab24.js";import{M as c,C as u,a}from"./chunk-PCJTTTQV-cd62f5e9.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{_ as g}from"./iframe-c553b247.js";import"./Calendar-19eea465.js";import{w as y}from"./withWebComponent-7b9bd1ee.js";import{C as v,D as s}from"./Calendar.stories-20ee9b4c.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-07b6945b.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./slot-76e48863.js";import"./Icon-1927e688.js";import"./Icons-fe8ad928.js";import"./utils-69f7a0e0.js";import"./decline-76de6b04.js";import"./i18n-defaults-80781f7e.js";import"./information-bc6b0940.js";import"./class-map-6a9bd920.js";import"./Button-a741ea37.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-188d88c2.js";import"./index-c96ba7f0.js";import"./Link-92895189.js";import"./WrappingType-b81e595a.js";import"./index-123b5731.js";import"./Label-51e84534.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./index-9c09ad76.js";import"./index-6e378695.js";import"./Popover-898d0a68.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-0f627f88.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./Gregorian-efe5b1bf.js";import"./LocaleData-0745c736.js";import"./slim-arrow-left-02d224a2.js";import"./slim-arrow-right-d68231f1.js";import"./Persian-85f6c517.js";const n=y("ui5-date",["value"],[],[],[],()=>g(()=>import("./Calendar-19eea465.js").then(t=>t.e),["./Calendar-19eea465.js","./withWebComponent-7b9bd1ee.js","./utils-69f7a0e0.js","./CustomElementsScopeUtils-137da8c8.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icon-1927e688.js","./UI5Element-2e105c8a.js","./Icons-fe8ad928.js","./slot-76e48863.js","./Gregorian-efe5b1bf.js","./LocaleData-0745c736.js","./Integer-f7f172c9.js","./slim-arrow-left-02d224a2.js","./slim-arrow-right-d68231f1.js","./class-map-6a9bd920.js","./i18n-defaults-2f9956dc.js","./style-map-0c64293c.js"],import.meta.url));n.displayName="CalendarDate";try{n.displayName="CalendarDate",n.__docgenInfo={description:'The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N="The `CalendarDate` component defines a calendar date to be used inside `Calendar`\n",C=`## Usage

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
`;function Ae(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const o=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:v}),`
`,e.jsx(l,{since:"0.13.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(a,{children:C}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(o.h2,{id:"calendardate",children:"CalendarDate"}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(a,{children:N}),`
`,e.jsx(h,{})]})}}export{Ae as default};
//# sourceMappingURL=Calendar-96521a25.js.map
