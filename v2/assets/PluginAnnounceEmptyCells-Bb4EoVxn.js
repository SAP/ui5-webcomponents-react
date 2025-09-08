import{j as t}from"./iframe-CGUWa3l5.js";import{useMDXComponents as i}from"./index-Cg9cAKJC.js";import{I as n,F as m}from"./CommandsAndQueries-D9MoTrLH.js";import{M as p,C as s}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import"./copy-WtCMvp6x.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BDgC6LVf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./index-DVv4DYKP.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIn0EWmH.js";import"./delete-D8iOVq_P.js";import"./settings-BrU77TJz.js";import"./NoData-BtKw36NF.js";import"./IllustratedMessage-roO0aRXn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-pvKKlwIQ.js";import"./index-DdzUybfc.js";import"./slim-arrow-down-DTV0qdqM.js";import"./Input-D6uk9j64.js";import"./ResponsivePopoverCommon.css-BEg546Rm.js";import"./ValueStateMessage.css-2dCo7gv0.js";import"./Suggestions.css-BzuWn3c7.js";import"./ListBoxItemGroupTemplate-T5G4LspN.js";import"./ComboBoxItemGroup-rYdUb0dx.js";import"./ListItemBaseTemplate-DPo3rTK0.js";import"./Token-CM0KuYKd.js";import"./ScrollEnablement-CQEkGSE4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZmC8AzlV.js";import"./ToggleButton-B7IDpjil.js";import"./SuggestionItem-B72aMk-1.js";import"./index-D3Q4XSrj.js";import"./Option-KkRC9zkJ.js";import"./index-BDLjw3vw.js";import"./SegmentedButton-BZuewes2.js";import"./index-16LEbUKu.js";import"./Select-DqU7IOqL.js";import"./InvisibleMessage-DsoM_md7.js";import"./slim-arrow-down-C2D4hy1c.js";import"./useIsRTL-CiTgDNnq.js";import"./index-DxY5n6Uu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2pujT4z.js";import"./group-2-Bsz1MTSG.js";import"./sort-descending-B95Vwq5b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQRmvIfO.js";import"./utils-Bvg3-Eiz.js";import"./index-DiFhnHjc.js";import"./index-DQtuH_ue.js";import"./index-DPKePRb-.js";import"./navigation-down-arrow-DEG608S3.js";import"./navigation-right-arrow-FljkMUDF.js";import"./navigation-right-arrow-DNwcZSXb.js";import"./useCurrentTheme-_W43-YnM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4ApArmi.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CbfSQR9D.js";import"./index-buTEIynB.js";import"./less-CKtxa6cj.js";import"./index-R6CpitaJ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
