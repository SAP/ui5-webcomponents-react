import{j as t}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as i}from"./index-lDTLJk7j.js";import{I as n,F as m}from"./CommandsAndQueries-BGpNLpHt.js";import{M as p,C as s}from"./blocks-Cil-35LB.js";import"./Tag-BIgoED-u.js";import"./index-aevS7PA-.js";import"./copy-E4FhZn3x.js";import{P as a}from"./AnalyticalTableHooks.stories-CKSM3Mr6.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./index-DceE06Sq.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQ4Urhss.js";import"./delete-CjHb4wVG.js";import"./settings-BM7d6L00.js";import"./NoData-11beALjN.js";import"./IllustratedMessage-S8oXJU9_.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-A6wyWuPn.js";import"./index-sC_6pIUj.js";import"./slim-arrow-down-C3AMNhFD.js";import"./Input-DPv933zQ.js";import"./ResponsivePopoverCommon.css-BwJ1vIxv.js";import"./ValueStateMessage.css-Fubl11x4.js";import"./Suggestions.css-BJLpoiav.js";import"./ListBoxItemGroupTemplate-Dnk-fFMD.js";import"./ComboBoxItemGroup-DT9mYKvC.js";import"./ListItemBaseTemplate-C2zYVBWE.js";import"./Token-deawB8qV.js";import"./ScrollEnablement-BzLICqgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlKXn9_7.js";import"./ToggleButton-KUQcKiai.js";import"./SuggestionItem-frd0or4N.js";import"./index-CUSsQjGJ.js";import"./Option-BvmKpK6T.js";import"./index-BSRf6rvH.js";import"./SegmentedButton-CcLQlQxt.js";import"./index-BpBvTivy.js";import"./Select-CsDTuuP5.js";import"./InvisibleMessage-Btu_O-HX.js";import"./slim-arrow-down-Ba9Bx2ZK.js";import"./useIsRTL-B5nPdRZ3.js";import"./index-CV8w4gWx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CmMKzJCM.js";import"./group-2-p-WoPBtU.js";import"./sort-descending-Cx3m0LJl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4QjobNo.js";import"./utils-DZ25eW5o.js";import"./index-C9VxjHmw.js";import"./index-BIqlxQzt.js";import"./index-BJ3jHYV7.js";import"./navigation-down-arrow-CAwJ7ZnN.js";import"./navigation-right-arrow-DJfjAhtB.js";import"./navigation-right-arrow-BRxq8Qef.js";import"./useCurrentTheme-BEMyA3a7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BDBqb2iV.js";import"./debounce-D7W5PopO.js";import"./index-Vd-czAfJ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:a}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [AnalyticalTableHooks.useAnnounceEmptyCells] // this array should be memoized

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
`,t.jsx(m,{})]})}function It(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{It as default};
