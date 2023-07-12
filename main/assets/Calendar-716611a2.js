import{j as e}from"./jsx-runtime-5926aa06.js";import{C as m,A as d}from"./DomRefTable.module-7d4feb4b.js";import{D as l}from"./DocsHeader-e86459a7.js";import{F as c}from"./Footer-88d5137e.js";import"./index-ebeaab24.js";import{M as h,C as u,a}from"./chunk-PCJTTTQV-722817a8.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{_ as g}from"./iframe-8b32191a.js";import"./Calendar-27089d2d.js";import{w as y}from"./withWebComponent-d4224c1c.js";import{C as v,D as s}from"./Calendar.stories-11403181.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-cdc8f7a3.js";import"./UI5Element-78be0f3d.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./slot-76e48863.js";import"./Icon-70a9e5b9.js";import"./Icons-26e87c01.js";import"./utils-69f7a0e0.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./class-map-18f572ce.js";import"./Button-427cd4bb.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-645c2c27.js";import"./Integer-f7f172c9.js";import"./index-3514609f.js";import"./Avatar-e1c9d8f0.js";import"./ResizeHandler-15c77712.js";import"./employee-1c1d2fc1.js";import"./index-be77d9a3.js";import"./index-b4e410b5.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./TableOfContent-a7500eaf.js";import"./index-f99ece88.js";import"./Label-263c93f2.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./index-9c09ad76.js";import"./index-3021d8c3.js";import"./index-71efb4b4.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./Gregorian-f31ae0ec.js";import"./LocaleData-0b80b820.js";import"./slim-arrow-left-9b1e01a2.js";import"./slim-arrow-right-ccb981dd.js";import"./Persian-4ede6b3c.js";const o=y("ui5-date",["value"],[],[],[],()=>g(()=>import("./Calendar-27089d2d.js").then(t=>t.e),["./Calendar-27089d2d.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./CustomElementsScopeUtils-137da8c8.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icon-70a9e5b9.js","./UI5Element-78be0f3d.js","./Icons-26e87c01.js","./slot-76e48863.js","./Gregorian-f31ae0ec.js","./LocaleData-0b80b820.js","./Integer-f7f172c9.js","./slim-arrow-left-9b1e01a2.js","./slim-arrow-right-ccb981dd.js","./class-map-18f572ce.js","./i18n-defaults-f002f496.js","./style-map-54298215.js"],import.meta.url));o.displayName="CalendarDate";try{o.displayName="CalendarDate",o.__docgenInfo={description:"The `CalendarDate` component defines a calendar date to be used inside `Calendar`",displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `CalendarDate` component defines a calendar date to be used inside `Calendar`\n",w=`## Usage

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
`;function Re(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:v}),`
`,e.jsx(l,{since:"0.13.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(a,{children:w}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(n.h2,{id:"calendardate",children:"CalendarDate"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(a,{children:N}),`
`,e.jsx(c,{})]})}}export{Re as default};
//# sourceMappingURL=Calendar-716611a2.js.map
