import{j as t}from"./iframe-BaUS3k1G.js";import{useMDXComponents as i}from"./index-BI_MoYzx.js";import{I as n,F as m}from"./CommandsAndQueries-Br4DVRUh.js";import{M as p,C as s}from"./blocks-B0L69tD0.js";import"./Tag-DBf9vhPp.js";import"./index-DRxFqLKQ.js";import"./copy-DThSO1XV.js";import{P as a}from"./AnalyticalTableHooks.stories-qcQzuxQR.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYuYKtBV.js";import"./index-DCjJA-51.js";import"./index-DvySby2h.js";import"./Link-CWqnr4YP.js";import"./addCustomCSSWithScoping-CsHiQv5I.js";import"./index-Cf1dwhov.js";import"./index-C3F6-2iN.js";import"./index-BVDlh8LB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNEqbSr6.js";import"./index-BYW7BxIG.js";import"./information-7Y3gJKKP.js";import"./sys-enter-2-BfkJMWkZ.js";import"./alert-BAVxkr1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGZWkfq0.js";import"./delete-DhpuvOZU.js";import"./settings-HR7JgpW5.js";import"./NoData-6qkAt8Ff.js";import"./IllustratedMessage-BoVreQNe.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-U2f8pDyc.js";import"./index-Ck5H1gDo.js";import"./slim-arrow-down-D9JkdGK8.js";import"./Input-BOuUwhzq.js";import"./ResponsivePopoverCommon.css-Bo-IXKeW.js";import"./ValueStateMessage.css-BQHtB1Tv.js";import"./Suggestions.css-ChVrYUaI.js";import"./ListBoxItemGroupTemplate-BAOEqzDw.js";import"./ComboBoxItemGroup-BIKWFZF9.js";import"./ListItemBaseTemplate-DXoKIUzT.js";import"./Token-CA6Awd5t.js";import"./ScrollEnablement-2bJd9RZ5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyWlaMba.js";import"./ToggleButton-Bh2oTAth.js";import"./SuggestionItem-CbSqa2O4.js";import"./index-BkOfvqRQ.js";import"./Option-DS-TGLoK.js";import"./index-DIImDxSq.js";import"./SegmentedButton-C4Z1OrHK.js";import"./index-B1A2ONV2.js";import"./Select-2pNodCsm.js";import"./InvisibleMessage-vA_ZbJGm.js";import"./slim-arrow-down-BBKu_ZM0.js";import"./useIsRTL-HDA9Bb1C.js";import"./index-BWchkGL6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvWdAtXT.js";import"./group-2-CQ4OV2J0.js";import"./sort-descending-BOWqXbHY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cy9Kjuts.js";import"./utils-Bw_xVhJf.js";import"./index-CmvusNlc.js";import"./index-BPY_plO5.js";import"./index-DNH4Ez_N.js";import"./navigation-down-arrow-DTMX2fTv.js";import"./navigation-right-arrow-CI7CsRQ5.js";import"./navigation-right-arrow-BZMs7BWv.js";import"./useCurrentTheme-DmjoUoh_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DqvL999O.js";import"./debounce-D7W5PopO.js";import"./index-CD3_b8MJ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
