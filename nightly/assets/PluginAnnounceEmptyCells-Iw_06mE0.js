import{j as t}from"./iframe-CgMbHIkI.js";import{useMDXComponents as i}from"./index-uQo7cCLJ.js";import{I as n,F as m}from"./CommandsAndQueries-BXDj4lkb.js";import{M as p,C as s}from"./blocks-CFocqrsp.js";import"./Tag-Dk7X5Tny.js";import"./index-D54ieI7L.js";import"./copy-Cpi-mOYC.js";import{P as a}from"./AnalyticalTableHooks.stories-1kGAT5ix.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ChYBHoyi.js";import"./index-DXZ48uHs.js";import"./index-Bjiw2xBb.js";import"./Link-BqFTwoRG.js";import"./addCustomCSSWithScoping-B687qvo6.js";import"./index-8_dTlaSG.js";import"./index-pQs3Bm3D.js";import"./index-X0m3PPe8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CnkwV5Xd.js";import"./index-B3DD2XIG.js";import"./information-DgjoEc_K.js";import"./sys-enter-2-C0WM_GHK.js";import"./alert-wRxwDyfo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJdaz7BC.js";import"./delete-BC3bBzWs.js";import"./settings-1F-0BWTy.js";import"./NoData-CLfDCq5G.js";import"./IllustratedMessage-C02CLFxV.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-fhsrZxOa.js";import"./index-C7ep3BZZ.js";import"./slim-arrow-down-C6871QHD.js";import"./Input-BUn11rhe.js";import"./ResponsivePopoverCommon.css-Bgg5pcPK.js";import"./ValueStateMessage.css-DO5UcoIB.js";import"./Suggestions.css-Jr9HB9gU.js";import"./ListBoxItemGroupTemplate-Du89At4T.js";import"./ComboBoxItemGroup-BAjaJtUi.js";import"./ListItemBaseTemplate-D-AVCzw3.js";import"./Token-DmKgq2o4.js";import"./ScrollEnablement-C9I3jXtf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdHlyVF_.js";import"./ToggleButton-DhSzo4t9.js";import"./SuggestionItem-C-MzrG9W.js";import"./index-4FJd9xIS.js";import"./Option-B6atmey2.js";import"./index-CuGkmgDQ.js";import"./SegmentedButton-fjDS9O7m.js";import"./index-C_T_y0ct.js";import"./Select-Bzw1E5rv.js";import"./InvisibleMessage-CSPRqXEs.js";import"./slim-arrow-down-IxdmmDCl.js";import"./useIsRTL-CXsGMYTx.js";import"./index-DXMjlp8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-k_aK8hHp.js";import"./group-2-yEwjUS7z.js";import"./sort-descending-BANgux84.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFsnjy_v.js";import"./utils-BLYUNJMF.js";import"./index-CwPWaTl1.js";import"./index-De4hafVj.js";import"./index-DrhVfMn_.js";import"./navigation-down-arrow-BUDC_MIr.js";import"./navigation-right-arrow-DSZJ-2kn.js";import"./navigation-right-arrow-D5kDwvSN.js";import"./useCurrentTheme-DG-46zZW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ie8jHGMw.js";import"./debounce-D7W5PopO.js";import"./index-5Ur0e5nd.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
