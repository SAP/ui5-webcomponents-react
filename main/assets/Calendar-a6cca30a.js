import{j as e}from"./jsx-runtime-d079401a.js";import{C as m,b as d}from"./DomRefTable.module-cb531aaf.js";import{D as l}from"./DocsHeader-83b87078.js";import{F as c}from"./Footer-492ce19d.js";import"./index-f1f2c4b1.js";import{M as h,C as u,b as a}from"./chunk-S4VUQJ4A-16eeda01.js";import{e as f}from"./utils-b1ef2149.js";import{S as g}from"./SubcomponentsSection-6138f2fc.js";import{_ as y}from"./iframe-37fe1ecd.js";import"./Calendar-b7ebd0a7.js";import{w as v}from"./withWebComponent-70ea33bf.js";import{C as N,D as s}from"./Calendar.stories-614fa4af.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-77cb4d81.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./utils-eb830979.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-0437ccfb.js";import"./Integer-f7f172c9.js";import"./index-a6fa8444.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-d09a05f2.js";import"./index-a495f196.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-71580458.js";import"./index-6a54ba85.js";import"./Label-2351773c.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./index-c74c9f7f.js";import"./index-e4a7bbe8.js";import"./index-b1928530.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./Gregorian-0c2e63b9.js";import"./LocaleData-11ff68d9.js";import"./slim-arrow-left-21a1b625.js";import"./slim-arrow-right-562fbac6.js";import"./Persian-f073c1d5.js";const o=v("ui5-date",["value"],[],[],[],()=>y(()=>import("./Calendar-b7ebd0a7.js").then(t=>t.e),["./Calendar-b7ebd0a7.js","./withWebComponent-70ea33bf.js","./utils-eb830979.js","./CustomElementsScopeUtils-a6667bf6.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./Icon-085ae741.js","./UI5Element-9ae3ac4a.js","./Icons-aa504494.js","./slot-76e48863.js","./Gregorian-0c2e63b9.js","./LocaleData-11ff68d9.js","./Integer-f7f172c9.js","./slim-arrow-left-21a1b625.js","./slim-arrow-right-562fbac6.js","./class-map-a35dc276.js","./i18n-defaults-edeeca68.js","./style-map-0570471d.js"],import.meta.url));o.displayName="CalendarDate";try{o.displayName="CalendarDate",o.__docgenInfo={description:"The `CalendarDate` component defines a calendar date to be used inside `Calendar`",displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const b="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `CalendarDate` component defines a calendar date to be used inside `Calendar`\n",w=`## Usage

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
`;function We(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:N}),`
`,e.jsx(l,{since:"0.13.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(a,{children:w}),`
`,e.jsx(a,{children:g}),`
`,e.jsx(n.h2,{id:"calendardate",children:"CalendarDate"}),`
`,e.jsx(d,{hideHTMLPropsNote:!0,exclude:f,of:o}),`
`,e.jsx(a,{children:b}),`
`,e.jsx(c,{})]})}}export{We as default};
//# sourceMappingURL=Calendar-a6cca30a.js.map
