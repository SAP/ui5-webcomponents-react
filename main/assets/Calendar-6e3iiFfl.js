import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{C as m,b as d}from"./DomRefTable.module-W5Ww7Zsj.js";import{D as l}from"./DocsHeader-C26sFO5H.js";import{F as c}from"./Footer-jsn9sntW.js";import"./index-OjgoNOWw.js";import{M as h,C as u,b as a}from"./chunk-HLWAVYOI-MFO7jJ0M.js";import{e as f}from"./utils-77gZ8405.js";import{S as g}from"./SubcomponentsSection-pzdPLcqE.js";import{_ as y}from"./iframe-tM1uHEBJ.js";import"./Calendar-OmIH3ZjF.js";import{w as v}from"./withWebComponent-6ZcDnwha.js";import{C as N,D as s}from"./Calendar.stories-TcjT0CDK.js";import{u as p}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-NtXeyiE0.js";import"./UI5Element-OBgzz0fv.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./utils-5CTKRvkw.js";import"./decline-P9scilyE.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-eS-oBj3B.js";import"./alert-SMfrQE5J.js";import"./class-map-dxoND1Lf.js";import"./Button-UDaVhcBU.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-ETl9kWYS.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./index-8Zwe9lAN.js";import"./Integer-kog98579.js";import"./index-8EX7q5SI.js";import"./Avatar-LWFiEvrj.js";import"./ResizeHandler-jV9qqcaG.js";import"./employee-DNZboz-g.js";import"./index-pPUqdff1.js";import"./index-rBmhKwWm.js";import"./Link-Gs09ax_S.js";import"./WrappingType-avPrqc94.js";import"./index-q8oiNN3v.js";import"./index-z1nBCz-L.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-IMpNFjIe.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-LM7zAOcY.js";import"./index-rVqoFXTz.js";import"./Label-bo0gz_aS.js";import"./index--dERd8xd.js";import"./index-a4FQtjmc.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./index-GL4gBoyB.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"../sb-preview/runtime.js";import"./Gregorian-ZrcuQvF5.js";import"./LocaleData-iwk5Qs-9.js";import"./slim-arrow-left-T4yEujhi.js";import"./slim-arrow-right-LgQh9lXE.js";import"./Persian-oEC3-zEa.js";const o=v("ui5-date",["value"],[],[],[],()=>y(()=>import("./Calendar-OmIH3ZjF.js").then(t=>t.e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url));o.displayName="CalendarDate";try{o.displayName="CalendarDate",o.__docgenInfo={description:"The `CalendarDate` component defines a calendar date to be used inside `Calendar`",displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
`;function Ke(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:N}),`
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
`,e.jsx(c,{})]})}}export{Ke as default};
//# sourceMappingURL=Calendar-6e3iiFfl.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Calendar-OmIH3ZjF.js","./withWebComponent-6ZcDnwha.js","./utils-5CTKRvkw.js","./VersionInfo-hBCHoyLi.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-kYmWas10.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icon-2m0rU9av.js","./UI5Element-OBgzz0fv.js","./i18nBundle-Crssojm_.js","./Icons-zRUxeAje.js","./slot-HSrR9XJ-.js","./Gregorian-ZrcuQvF5.js","./LocaleData-iwk5Qs-9.js","./Integer-kog98579.js","./slim-arrow-left-T4yEujhi.js","./slim-arrow-right-LgQh9lXE.js","./class-map-dxoND1Lf.js","./i18n-defaults-RBzcmDt8.js","./style-map-oXcF1--7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}