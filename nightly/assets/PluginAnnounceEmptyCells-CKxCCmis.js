import{j as t}from"./iframe-BZQDLaud.js";import{useMDXComponents as i}from"./index-C_GG0ZGD.js";import{I as n,F as m}from"./CommandsAndQueries-DWGWAVRo.js";import{M as p,C as s}from"./blocks-Cx9bcs1C.js";import"./Tag-D-gB3YeX.js";import"./index-DJN5YABY.js";import"./copy-BROMiSoG.js";import{P as a}from"./AnalyticalTableHooks.stories-wBfZaxgs.js";import"./preload-helper-Ct5FWWRu.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./index-CKSa3A9-.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SnsQcBha.js";import"./delete-CLfbLOEn.js";import"./settings-B-F6TIjI.js";import"./NoData-CYc99N5U.js";import"./IllustratedMessage-VhUvlZ45.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C1Iw_W8O.js";import"./index-Cb6cMKiE.js";import"./slim-arrow-down-CLpBmF95.js";import"./Input-DWSj0jbp.js";import"./ResponsivePopoverCommon.css-DjqZq9sD.js";import"./ValueStateMessage.css-D3ij8aoW.js";import"./Suggestions.css-DSv3s41Y.js";import"./ListBoxItemGroupTemplate-B_tg8R6u.js";import"./ComboBoxItemGroup-Deq_nHvQ.js";import"./ListItemBaseTemplate-Bl0LNXUa.js";import"./Token-Bd3fmoPc.js";import"./ScrollEnablement-r9acVsK1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQOO1Zsr.js";import"./ToggleButton-b3oBwZZq.js";import"./SuggestionItem-gl78ccMD.js";import"./index-Dpu3p2WF.js";import"./Option-BivDrOBz.js";import"./index-C8Fyun0P.js";import"./SegmentedButton-BVtCBJOm.js";import"./index-CkFk2rvY.js";import"./Select-CncfGb0r.js";import"./InvisibleMessage-BonTwXKe.js";import"./slim-arrow-down-XixAgIwt.js";import"./useIsRTL-DZvFLTA0.js";import"./index-_38F1i9k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Z_kurjTQ.js";import"./group-2-RO-D6umw.js";import"./sort-descending-_g6ChRWa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVI9GcFP.js";import"./utils-pGJlkZlt.js";import"./index-BamKFxC-.js";import"./index-ClooUb3H.js";import"./index-CVSnJKQU.js";import"./navigation-down-arrow-DdNFu9fj.js";import"./navigation-right-arrow-BiRK2Ki_.js";import"./navigation-right-arrow-3Dltep9_.js";import"./useCurrentTheme-5r1dq2J6.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BJyAe1mR.js";import"./debounce-D7W5PopO.js";import"./index-DnwX6h_J.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
