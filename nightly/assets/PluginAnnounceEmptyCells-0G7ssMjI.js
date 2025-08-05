import{j as t}from"./iframe-DofHecbS.js";import{useMDXComponents as i}from"./index-C8vGIvk8.js";import{I as n,F as m}from"./CommandsAndQueries-B_nZVkrt.js";import{M as p,C as s}from"./blocks-D1wzbhWf.js";import"./Tag-DPdR_js3.js";import"./index-DxedyFSH.js";import"./copy-7CDC0i6_.js";import{P as a}from"./AnalyticalTableHooks.stories-Df--Fijw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2GOtqWe8.js";import"./index-C1xP7ttJ.js";import"./index-JzBnNIyF.js";import"./Link-Cmqq4my9.js";import"./addCustomCSSWithScoping-D75UEBUU.js";import"./index-C1lTEPtW.js";import"./index-D3sPt_5B.js";import"./index-5wCFhmZT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckn3SEtT.js";import"./index-CrXv1RBx.js";import"./information-CgIpVhAV.js";import"./sys-enter-2-BGLCbdRF.js";import"./alert-BfmE4lX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Brjg83.js";import"./delete-D2NilxDV.js";import"./settings-Cf8IyMya.js";import"./NoData-CfkExYbj.js";import"./IllustratedMessage-Dnr5iNpa.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CE89Cx3X.js";import"./index-jJjs9LNm.js";import"./slim-arrow-down-EHDwkNs1.js";import"./Input-N_-j7LxY.js";import"./ResponsivePopoverCommon.css-TlSViPpe.js";import"./ValueStateMessage.css-DVInJl-v.js";import"./Suggestions.css-DlkHD9ll.js";import"./ListBoxItemGroupTemplate-ED6CyBBi.js";import"./ComboBoxItemGroup-ewlsRotM.js";import"./ListItemBaseTemplate-ABM4tfp-.js";import"./Token-BCMx04Lv.js";import"./ScrollEnablement-BHaRcurn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGMAivsS.js";import"./ToggleButton-Sfg6JaHH.js";import"./SuggestionItem-B7DhfD2E.js";import"./index-s6SrZqBr.js";import"./Option-aoqgoG5K.js";import"./index-CT_4CuBt.js";import"./SegmentedButton-KhWFGTsD.js";import"./index-BslajtPY.js";import"./Select-DXX118v7.js";import"./InvisibleMessage-nm_wn900.js";import"./slim-arrow-down-DVCZJgJd.js";import"./useIsRTL-Ce4m0dIR.js";import"./index-Dj8g3dXL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D0CqCPjP.js";import"./group-2-DBiBkjjk.js";import"./sort-descending-D6qjO6YJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-fNtdlXtU.js";import"./utils-DvNhCEmv.js";import"./index-CwAobW3v.js";import"./index-DQ3LOa4c.js";import"./index-BF6qDwKQ.js";import"./navigation-down-arrow-YDy4hSa6.js";import"./navigation-right-arrow-D6gnN7Pz.js";import"./navigation-right-arrow-BToPAGpb.js";import"./useCurrentTheme-e0q8CTM5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFWBQ7NN.js";import"./debounce-D7W5PopO.js";import"./index-SKTvANbT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
