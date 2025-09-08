import{j as t}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as i}from"./index-DTW9WkuG.js";import{I as n,F as m}from"./CommandsAndQueries-Di8bJMhG.js";import{M as p,C as s}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import"./copy-DC4VamtM.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Biv7_0b_.js";import"./preload-helper-D9Z9MdNV.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";import"./index-BrdrQHC3.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGn7erBf.js";import"./delete-CXC6lmer.js";import"./settings-z3Kqv_H_.js";import"./NoData-DUqssr6L.js";import"./IllustratedMessage-sPniRTYn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bod6JhhQ.js";import"./index-CUZI3FRG.js";import"./slim-arrow-down-b7xW5WMQ.js";import"./Input-DKCCXuXG.js";import"./ResponsivePopoverCommon.css-6wr_yrJO.js";import"./ValueStateMessage.css-BUM5hsl4.js";import"./Suggestions.css-oyFv45v2.js";import"./ListBoxItemGroupTemplate-DmarxL3_.js";import"./ComboBoxItemGroup-CA6r4V87.js";import"./ListItemBaseTemplate-YOGeNlAr.js";import"./Token-DKlGFJle.js";import"./ScrollEnablement-CGteJMp0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xKwcd7x4.js";import"./ToggleButton-CAbhzZ4Z.js";import"./SuggestionItem-D2t-HTV4.js";import"./index-CaupuYMw.js";import"./Option-Buj1ceqN.js";import"./index-QqJahJbf.js";import"./SegmentedButton-f44xS3Ee.js";import"./index-Bh_3qXv_.js";import"./Select-Cz-kH7T0.js";import"./InvisibleMessage-DqwXOxWx.js";import"./slim-arrow-down-BI_DSc-2.js";import"./useIsRTL--3iCf25v.js";import"./index-DYj6x7NK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLCI_AKZ.js";import"./group-2-DJsmMrGI.js";import"./sort-descending-BSw34moc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2CaCvj_.js";import"./utils-D4lUgN_j.js";import"./index-C38ppj6_.js";import"./index-BNPI3NEr.js";import"./index-CSVTtRtP.js";import"./navigation-down-arrow-D7EJn8ch.js";import"./navigation-right-arrow-DVOIDXzO.js";import"./navigation-right-arrow-uTQcyQpq.js";import"./useCurrentTheme-NkmcojZY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ERhnquzG.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DZq9mbkX.js";import"./index-Bidd9wX5.js";import"./less-D4FrIAV3.js";import"./index-Cp33MICI.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
