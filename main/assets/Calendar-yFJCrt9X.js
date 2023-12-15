import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{C as m,A as d}from"./DomRefTable.module-jzWk6bGS.js";import{D as l}from"./DocsHeader-N2b6TE7J.js";import{F as c}from"./Footer-tRLoeaF9.js";import"./index-OjgoNOWw.js";import{M as h,C as u,b as a}from"./chunk-HLWAVYOI-dTBHmeXo.js";import{e as f}from"./utils-77gZ8405.js";import{S as g}from"./SubcomponentsSection-pzdPLcqE.js";import{_ as y}from"./iframe-Bezv3sEd.js";import"./Calendar-TU5UaVBz.js";import{w as v}from"./withWebComponent-y_2h_qsG.js";import{C as N,D as s}from"./Calendar.stories-Kw_wDbfP.js";import{u as p}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-eVcxm3LM.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./slot-HSrR9XJ-.js";import"./Icon-ic8wGgAs.js";import"./Icons-cDXElGrC.js";import"./utils-jDGQm03y.js";import"./decline-tlNcqIac.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-txDdHyyj.js";import"./alert-sbIfV1of.js";import"./class-map-aNJl42Aw.js";import"./Button-dXtUjl7w.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-IPJJPG41.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-nzBUGiGL.js";import"./Integer-kog98579.js";import"./index-Rv14yP1C.js";import"./Avatar-DexMZin0.js";import"./ResizeHandler-_S6lmbp5.js";import"./employee-jQid-Nvn.js";import"./index-5534jnye.js";import"./index-jjTZLYaw.js";import"./Link-yiZ7VLOd.js";import"./WrappingType-avPrqc94.js";import"./index-5ETO3hDj.js";import"./TableOfContent-Z72HgNV2.js";import"./index-auiNsH9Y.js";import"./Label-avDcfEez.js";import"./index-4zMx20pJ.js";import"./index-Jhhedffc.js";import"./Popover-jBPmsweJ.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-Honr3Kcv.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"../sb-preview/runtime.js";import"./Gregorian-yR4v01tW.js";import"./LocaleData-44sFPK6y.js";import"./slim-arrow-left-xBwgmaGV.js";import"./slim-arrow-right-xQBn3CIQ.js";import"./Persian-2ycejr0t.js";const o=v("ui5-date",["value"],[],[],[],()=>y(()=>import("./Calendar-TU5UaVBz.js").then(t=>t.e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url));o.displayName="CalendarDate";try{o.displayName="CalendarDate",o.__docgenInfo={description:"The `CalendarDate` component defines a calendar date to be used inside `Calendar`",displayName:"CalendarDate",props:{value:{defaultValue:null,description:"The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const w="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `CalendarDate` component defines a calendar date to be used inside `Calendar`\n",b=`## Usage

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
`;function Ye(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:N}),`
`,e.jsx(l,{since:"0.13.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(a,{children:b}),`
`,e.jsx(a,{children:g}),`
`,e.jsx(n.h2,{id:"calendardate",children:"CalendarDate"}),`
`,e.jsx(d,{hideHTMLPropsNote:!0,exclude:f,of:o}),`
`,e.jsx(a,{children:w}),`
`,e.jsx(c,{})]})}}export{Ye as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Calendar-TU5UaVBz.js","./withWebComponent-y_2h_qsG.js","./utils-jDGQm03y.js","./VersionInfo-yX_RFFR1.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-icazltFf.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icon-ic8wGgAs.js","./UI5Element-4kitL615.js","./i18nBundle-h5yKZf-0.js","./Icons-cDXElGrC.js","./slot-HSrR9XJ-.js","./Gregorian-yR4v01tW.js","./LocaleData-44sFPK6y.js","./Integer-kog98579.js","./slim-arrow-left-xBwgmaGV.js","./slim-arrow-right-xQBn3CIQ.js","./class-map-aNJl42Aw.js","./i18n-defaults-zEJ36VRV.js","./style-map-cRo_ADDP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}