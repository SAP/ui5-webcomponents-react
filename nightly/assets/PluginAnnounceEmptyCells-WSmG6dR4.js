import{j as t}from"./iframe-BVTjwwa8.js";import{useMDXComponents as i}from"./index-B7X7f4OL.js";import{I as n,F as m}from"./CommandsAndQueries-BxY3Aj9d.js";import{M as p,C as s}from"./blocks-eGiRc96Y.js";import"./Tag-Dd2A7Fyt.js";import"./index-CMlRFogN.js";import"./copy-B0_44_hm.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CGXLTMGM.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./index-B1gqswNl.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc-12NMD.js";import"./delete-CGtcDoe_.js";import"./settings-hVUhtZ6y.js";import"./NoData-DS35pzTF.js";import"./IllustratedMessage-x4VOj4Pw.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CNPrt5Xv.js";import"./index-BgpeKNsm.js";import"./slim-arrow-down-q0ei8TSg.js";import"./Input-co8T_wRa.js";import"./ResponsivePopoverCommon.css-CTpWDnyD.js";import"./ValueStateMessage.css-CklfWixh.js";import"./Suggestions.css-BFFNt1YV.js";import"./ListBoxItemGroupTemplate-BOi0kYXq.js";import"./ComboBoxItemGroup-DZ2t_1kl.js";import"./ListItemBaseTemplate-00D3SYn4.js";import"./Token-BTANNLIp.js";import"./ScrollEnablement-X9DTHKIv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BAXagnCs.js";import"./ToggleButton-B5voNYUw.js";import"./SuggestionItem-B50m8Gyh.js";import"./index-Jz8t2dvI.js";import"./Option-C1Pj2e5b.js";import"./index-D6BPa1_b.js";import"./SegmentedButton-CTr1olLB.js";import"./index-BhAe3Aw_.js";import"./Select-B4alDdu-.js";import"./InvisibleMessage-CETvZCdD.js";import"./slim-arrow-down-CbdcQMCz.js";import"./useIsRTL-D_4xzLEe.js";import"./index-DPurakIR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YUeSfDda.js";import"./group-2-B2FfwC3o.js";import"./sort-descending-DrsjlcI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BR2ycD-b.js";import"./utils-CHjabxlG.js";import"./index-ugx_8wyU.js";import"./index-CFjQC8Rl.js";import"./index-wRcNlb_M.js";import"./navigation-down-arrow-TGu9KNhG.js";import"./navigation-right-arrow-CvYYllXN.js";import"./navigation-right-arrow-CiN3ZT4_.js";import"./useCurrentTheme-DACJQMB7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Scuc8kwA.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BE9i310R.js";import"./index-DQgqs36o.js";import"./less-DrAJ6UF0.js";import"./index-CAZ62WrL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
