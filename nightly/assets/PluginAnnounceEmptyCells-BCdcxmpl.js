import{j as t}from"./iframe-BGPLLWda.js";import{useMDXComponents as e}from"./index-CUo1Jk3b.js";import{I as n,F as m}from"./CommandsAndQueries-CMwJiC-3.js";import{M as p,C as s}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import"./i18n-DSpjDgSK.js";import"./copy-BU9AAITa.js";import{P as a}from"./AnalyticalTableHooks.stories-Bz_VtBIz.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-BUzvoCUF.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-TS6DhnPd.js";import"./delete-BWX4MlMm.js";import"./settings-CFgijcO_.js";import"./NoData-BGEkmZoQ.js";import"./IllustratedMessage-BD1EvJ9X.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BJmJUlHD.js";import"./index-BNy7Dn0g.js";import"./slim-arrow-down-DMfTGr50.js";import"./Input-CpVfGSwY.js";import"./ResponsivePopoverCommon.css-951IwDN3.js";import"./ValueStateMessage.css-Djn4UmzD.js";import"./Suggestions.css-DqxhEkKs.js";import"./ListBoxItemGroupTemplate-cIHi7oo8.js";import"./ComboBoxItemGroup-TToYvkYQ.js";import"./ListItemBaseTemplate-Dg-uXgOx.js";import"./Token-sHPc753X.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gVzTb5tv.js";import"./ToggleButton-DqvQERLg.js";import"./SuggestionItem-Cxo33OCr.js";import"./index-CnuSgVMh.js";import"./Option-DtMR1hW6.js";import"./index-BtbM9UQ5.js";import"./SegmentedButton-U5MRkYAs.js";import"./index-D84y9kSV.js";import"./Select-D9d1AFpt.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CPLxRpFv.js";import"./useIsRTL-B1VPnJL4.js";import"./index-B91ASvCc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfyYYk6.js";import"./group-2-Dnk-pTKH.js";import"./sort-descending-DB8J7SKA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-WIExqiEM.js";import"./utils-TBfvB8Vn.js";import"./index-C5SS4mkA.js";import"./index-I5I4BdBq.js";import"./index-I4ELerEx.js";import"./navigation-down-arrow-BxgwGxy_.js";import"./navigation-right-arrow-wPwk5NCr.js";import"./navigation-right-arrow-CuKMCHYh.js";import"./useCurrentTheme-Nu7Bfg1U.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BxdEUa6a.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMGxioyT.js";import"./index-AkNk4559.js";import"./less-BflIj0KR.js";import"./index-Di9vvrRS.js";function i(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(i,{...r})}):i(r)}export{Lt as default};
