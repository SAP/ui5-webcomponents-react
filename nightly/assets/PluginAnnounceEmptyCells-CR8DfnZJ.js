import{j as t}from"./iframe-D7jNN5F7.js";import{useMDXComponents as i}from"./index-DKysAdcf.js";import{I as n,F as m}from"./CommandsAndQueries-B3x-n25L.js";import{M as p,C as s}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import"./copy-DjcHAfNd.js";import{P as a}from"./AnalyticalTableHooks.stories-BmP7vUL2.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./index-C3oU0sTK.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrWTQEUd.js";import"./delete-BMcwn6C5.js";import"./settings-ooRwGldT.js";import"./NoData-CmmWac5w.js";import"./IllustratedMessage-CGjrQDe5.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ba41DV2y.js";import"./index-QO4ETt-1.js";import"./slim-arrow-down-ClFDM0XG.js";import"./Input-C1LBCJrC.js";import"./ResponsivePopoverCommon.css-MDF32GMH.js";import"./ValueStateMessage.css-CSvT2ncZ.js";import"./Suggestions.css-h4wD07M-.js";import"./ListBoxItemGroupTemplate-m32UL8v8.js";import"./ComboBoxItemGroup-MOGf7S7z.js";import"./ListItemBaseTemplate-Qur3Yd49.js";import"./Token-dgku7ZGE.js";import"./ScrollEnablement-DtvSga-i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWHZOOaU.js";import"./ToggleButton-BQaXQ2ri.js";import"./SuggestionItem-Cyq1l9Gv.js";import"./index-BHm2R3XB.js";import"./Option-_FDJMDEU.js";import"./index-njIvvZCY.js";import"./SegmentedButton-DfDY_QCz.js";import"./index-cKUCfcCB.js";import"./Select-CDYC53Ti.js";import"./InvisibleMessage-ClgnFC8X.js";import"./slim-arrow-down-B3FD46qZ.js";import"./useIsRTL-pM8eUPi3.js";import"./index-1d71x-Ip.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClyrPaST.js";import"./group-2-D_k1jUK1.js";import"./sort-descending-BjOIqvLu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9wKJ0ov.js";import"./utils-BRgWD3XM.js";import"./index-B6ReJZeR.js";import"./index-BJLgpe9x.js";import"./index-DmxdgylF.js";import"./navigation-down-arrow-DMsOsTOp.js";import"./navigation-right-arrow-FztiZH_C.js";import"./navigation-right-arrow-D7gRJcL2.js";import"./useCurrentTheme-Dy1oFGaa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B24FJ1pD.js";import"./debounce-D7W5PopO.js";import"./index-TuCRCHSI.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
