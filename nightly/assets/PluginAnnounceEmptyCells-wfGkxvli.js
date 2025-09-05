import{j as t}from"./iframe-DEht8tsT.js";import{useMDXComponents as i}from"./index-CHmvqmZV.js";import{I as n,F as m}from"./CommandsAndQueries-r7FFQXZn.js";import{M as p,C as s}from"./blocks-B9eJfK2p.js";import"./Tag-Bo7VmRFf.js";import"./index-qqa4-hS-.js";import"./i18n-DCXZOGva.js";import"./copy-DdxSmOcQ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-rHSTGkQk.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./index-v8e_2LrN.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DUPZhlNh.js";import"./delete-CIIO6cWP.js";import"./settings-BC73ny7E.js";import"./NoData-BmGlQJD3.js";import"./IllustratedMessage-DtFGh_HO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C2_Nt3zN.js";import"./index-DzPD0tFv.js";import"./slim-arrow-down-B6hMDuTF.js";import"./Input-hFJzw5L1.js";import"./ResponsivePopoverCommon.css-CByNGfjI.js";import"./ValueStateMessage.css-CelINsiK.js";import"./Suggestions.css-BNActsuA.js";import"./ListBoxItemGroupTemplate-C2LcXUoB.js";import"./ComboBoxItemGroup-qeNnc1ua.js";import"./ListItemBaseTemplate-EzB1Pcdn.js";import"./Token-DaOKNidD.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6KE8nClO.js";import"./ToggleButton-kkVgC4NU.js";import"./SuggestionItem-CPdN0sMT.js";import"./index-B_kfaCxx.js";import"./Option-C5YcjUdy.js";import"./index-DqSD4c31.js";import"./SegmentedButton-C63M7we9.js";import"./index-DnPSE1-9.js";import"./Select-Z6SVspqY.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-c8qc4hiX.js";import"./useIsRTL-DuD9eh_M.js";import"./index-CXm15WPn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl7mXAP8.js";import"./group-2-Bj2HnCsV.js";import"./sort-descending-D3pMADc7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cbf0XwND.js";import"./utils-ISKKNPcb.js";import"./index-DX3S6mf8.js";import"./index-DLQMS65N.js";import"./index-CZT4M-ks.js";import"./navigation-down-arrow-DpGvha-M.js";import"./navigation-right-arrow-DB7Ib3_i.js";import"./navigation-right-arrow-BS0T2xtE.js";import"./useCurrentTheme-Cg8J5RkG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DJPITGZE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-pbKRJ5e0.js";import"./index-p95JEi1E.js";import"./less-B7nzovk5.js";import"./index-D-8goo6_.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
