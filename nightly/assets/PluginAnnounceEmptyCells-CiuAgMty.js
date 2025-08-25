import{j as t}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as i}from"./index-EJQOh2Id.js";import{I as n,F as m}from"./CommandsAndQueries-BwMOH1SZ.js";import{M as p,C as s}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import"./copy-BQA3UKNo.js";import{P as a}from"./AnalyticalTableHooks.stories-DKcHsbUg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index-D9TUnkjB.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkBCTXa9.js";import"./delete-BHx19-Y9.js";import"./settings-C1rGZAVZ.js";import"./NoData-C9Am1g_a.js";import"./IllustratedMessage-gFpY2ARx.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cpo8GMo1.js";import"./index-BS2xqF92.js";import"./slim-arrow-down-CjCpnDGL.js";import"./Input-BnPcYwI0.js";import"./ResponsivePopoverCommon.css-De3l4lV7.js";import"./ValueStateMessage.css-CnYMheJQ.js";import"./Suggestions.css-CcER9QIN.js";import"./ListBoxItemGroupTemplate-DFglDMjK.js";import"./ComboBoxItemGroup-D4Gs5NOL.js";import"./ListItemBaseTemplate-DFt11I0O.js";import"./Token-BKduK5BD.js";import"./ScrollEnablement-BDrNOFng.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDVOPr0Q.js";import"./ToggleButton-C8ruj2ek.js";import"./SuggestionItem-DLLMxiuf.js";import"./index-BpVwnbz4.js";import"./Option-ydyzdS2N.js";import"./index-BahYCzWG.js";import"./SegmentedButton-Dd9nWvWy.js";import"./index-DO3t8-bw.js";import"./Select-DR14Z-d1.js";import"./InvisibleMessage-DNAVGHgD.js";import"./slim-arrow-down-DpHxo-vW.js";import"./useIsRTL-iU-OFwyb.js";import"./index-KjM22Mkn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapOufte.js";import"./group-2-BCK94LLS.js";import"./sort-descending-DoJpvQSn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DG5c9gPi.js";import"./utils-ta-b6IhW.js";import"./index-9Yl4D7c1.js";import"./index-CNCeO74r.js";import"./index-BtDnirP4.js";import"./navigation-down-arrow-CTzJ9Li3.js";import"./navigation-right-arrow-Sp9fSK-u.js";import"./navigation-right-arrow-NCcFjcdA.js";import"./useCurrentTheme-unQEnGqh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfLpzXqh.js";import"./debounce-D7W5PopO.js";import"./index-Bgmqc7Nb.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
