import{j as t}from"./iframe-BwRZ6zH2.js";import{useMDXComponents as i}from"./index-Dha5O7fd.js";import{I as n,F as m}from"./CommandsAndQueries-DnahCchN.js";import{M as p,C as s}from"./blocks-DL1YgvN4.js";import"./Tag-jzGA4JLS.js";import"./index-Bn-_GOqM.js";import"./copy-14fAizTo.js";import{P as a}from"./AnalyticalTableHooks.stories-CzV32_nI.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DC4jF85u.js";import"./index-BMXWdCHK.js";import"./index-B9mzJ7n3.js";import"./Link-CWmfxulK.js";import"./addCustomCSSWithScoping-C9ks6bKt.js";import"./index-CODnJVEI.js";import"./index-Dvv0G0ud.js";import"./index-daxMvW3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHObXTEz.js";import"./index-DNHSASGJ.js";import"./information-C-c_P7SM.js";import"./sys-enter-2-Csc9mkjG.js";import"./alert-OSu7g90-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuF-idx5.js";import"./delete-DnMkTbHU.js";import"./settings-DWqL8GN4.js";import"./NoData-xo9LtzN3.js";import"./IllustratedMessage-BUlHVPP_.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DoJ_E0Z6.js";import"./index-BMWdMDNa.js";import"./slim-arrow-down-DGfRaB6_.js";import"./Input-RzR2WO-8.js";import"./ResponsivePopoverCommon.css-V2mDNvXu.js";import"./ValueStateMessage.css-KSw2_w5L.js";import"./Suggestions.css-DtrSZfMx.js";import"./ListBoxItemGroupTemplate-QH6IW3JL.js";import"./ComboBoxItemGroup-Yos9NcoM.js";import"./ListItemBaseTemplate-DQqywW_0.js";import"./Token-B-qHaum6.js";import"./ScrollEnablement-BFz36fKi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CJECabbX.js";import"./ToggleButton-CWW1wHVB.js";import"./SuggestionItem-BuEtJ6r7.js";import"./index-CD_8sEoj.js";import"./Option-D54pTtGn.js";import"./index-CWyD_my-.js";import"./SegmentedButton-BXKvuy9n.js";import"./index-uwW1sX7P.js";import"./Select-CrCye_x5.js";import"./InvisibleMessage-DpqJIsJS.js";import"./slim-arrow-down-amOOANNn.js";import"./useIsRTL-Bbn2uL0j.js";import"./index-Cagw2uuL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-fBzDQmus.js";import"./group-2-CuicZOeN.js";import"./sort-descending-C017Ahmn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXmirVoI.js";import"./utils-B5889Cdc.js";import"./index-Dbjl1uS8.js";import"./index-B3lXbWLn.js";import"./index-B05ZeC-j.js";import"./navigation-down-arrow-RIpz5oAP.js";import"./navigation-right-arrow-CI29uvqS.js";import"./navigation-right-arrow-Dz3d1kAT.js";import"./useCurrentTheme-K7KdeM9-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BO-4pkI6.js";import"./debounce-D7W5PopO.js";import"./index-Bgi4o4gP.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
