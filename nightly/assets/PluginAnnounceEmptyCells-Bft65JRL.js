import{j as t}from"./iframe-4VeS9m_X.js";import{useMDXComponents as i}from"./index-DEI3eVkK.js";import{I as n,F as m}from"./CommandsAndQueries-7kzg9PVA.js";import{M as p,C as s}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import"./copy-jnb9sYPg.js";import{P as a}from"./AnalyticalTableHooks.stories-ckTPehdg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-CftSo41I.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DzO_7kh2.js";import"./delete-D0tqyXI3.js";import"./settings-Dh1N9l9x.js";import"./NoData-CfqmUQIq.js";import"./IllustratedMessage-Bhm6W5wf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bq1Dxl2N.js";import"./index-BGjDPX9c.js";import"./slim-arrow-down-BC69CAxO.js";import"./Input-7Ln5W5EQ.js";import"./ResponsivePopoverCommon.css-shdaMqe8.js";import"./ValueStateMessage.css-CGoPnYXJ.js";import"./Suggestions.css-CvvWsrep.js";import"./ListBoxItemGroupTemplate-BnggVcf_.js";import"./ComboBoxItemGroup-D6dCUoyB.js";import"./ListItemBaseTemplate-Q_ULQajv.js";import"./Token-Z2YEJAmU.js";import"./ScrollEnablement-BpLcSAvR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccnky39J.js";import"./ToggleButton-DYzuAOxb.js";import"./SuggestionItem-Bpa4_uLK.js";import"./index-DyTpO6UL.js";import"./Option-CFrG9aBk.js";import"./index-kL2L593_.js";import"./SegmentedButton-BfWqXCxQ.js";import"./index-aEhIJvAh.js";import"./Select-iON0Hwpr.js";import"./InvisibleMessage-Dmfd1gOp.js";import"./slim-arrow-down-DvFGLz9G.js";import"./useIsRTL-C2A7wRdc.js";import"./index-MVLgI-v_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CouX_vyD.js";import"./group-2-C0rLkZ4k.js";import"./sort-descending-DAhONQ_J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQqE75Ik.js";import"./utils-DVMbjWX7.js";import"./index-BLK2G4j5.js";import"./index-WwJOctFW.js";import"./index-BLDjATDM.js";import"./navigation-down-arrow-BVlOCaU1.js";import"./navigation-right-arrow-CmIckyyO.js";import"./navigation-right-arrow-C_vqXpi_.js";import"./useCurrentTheme-b3iu0jQF.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jxpqFoPJ.js";import"./debounce-D7W5PopO.js";import"./index-D0TSTHqY.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
