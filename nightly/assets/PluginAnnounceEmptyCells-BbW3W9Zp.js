import{j as t}from"./iframe-DXDeCCXH.js";import{useMDXComponents as i}from"./index-BVVJ9Xmn.js";import{I as n,F as m}from"./CommandsAndQueries-Dq5DBaAz.js";import{M as p,C as s}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import"./copy-WTqS65ha.js";import{P as a}from"./AnalyticalTableHooks.stories-wPwjnETU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./index-CtGW4gqB.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-m9t6xB4J.js";import"./delete-eGh5KcKa.js";import"./settings-D-aMw8C7.js";import"./NoData-BNJguIn1.js";import"./IllustratedMessage-C1Qra527.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Crbb53iW.js";import"./index-Bz25c1ht.js";import"./slim-arrow-down-DvqwO1-7.js";import"./Input-DT5a2INw.js";import"./ResponsivePopoverCommon.css-OCxrxVe7.js";import"./ValueStateMessage.css-DPy1qgQz.js";import"./Suggestions.css-I2XPtCpK.js";import"./ListBoxItemGroupTemplate-DpjpsYkI.js";import"./ComboBoxItemGroup-BariYzmO.js";import"./ListItemBaseTemplate-hEZgOtsu.js";import"./Token-CRlMV9e1.js";import"./ScrollEnablement-DAHWVod0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6LXITg6.js";import"./ToggleButton-0Bjlblt_.js";import"./SuggestionItem-R5703Eet.js";import"./index-DKVKyydv.js";import"./Option-fRgebOG_.js";import"./index-BHF91_ZB.js";import"./SegmentedButton-ByQSIlPV.js";import"./index-CqyQ3K4-.js";import"./Select-l_bkPr5Y.js";import"./InvisibleMessage-NggmVjf-.js";import"./slim-arrow-down-CckH6L3O.js";import"./useIsRTL-BkUHaPCa.js";import"./index-aDIzQfUJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfzz8laz.js";import"./group-2-FczFFFx4.js";import"./sort-descending-CKmC-ibv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDPVisSF.js";import"./utils-DX5exggL.js";import"./index-RrE3NDfc.js";import"./index-DfUDlrEC.js";import"./index-BBJBR4cj.js";import"./navigation-down-arrow-BwAfl8_u.js";import"./navigation-right-arrow-BQ8DZn1y.js";import"./navigation-right-arrow-C1RhyiVh.js";import"./useCurrentTheme-BDP8ahfN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B-9HaNrX.js";import"./debounce-D7W5PopO.js";import"./index-CLNkhXyA.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
