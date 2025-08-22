import{j as t}from"./iframe-D47IesGI.js";import{useMDXComponents as i}from"./index-B-Cjj5vb.js";import{I as n,F as m}from"./CommandsAndQueries-BUssvnnv.js";import{M as p,C as s}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import"./copy-CpxPPhhd.js";import{P as a}from"./AnalyticalTableHooks.stories-Dmu3Wc1Y.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-BYtsHb6f.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdRf6Gn_.js";import"./delete-BdLzfl6f.js";import"./settings-D4RCu3f5.js";import"./NoData-DejRevwI.js";import"./IllustratedMessage-BUxe0n2B.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BOaFH31C.js";import"./index-DoOBs30V.js";import"./slim-arrow-down-CRL6N__0.js";import"./Input-BVNlr-7R.js";import"./ResponsivePopoverCommon.css-DcqdU9zO.js";import"./ValueStateMessage.css-Foo9e4QP.js";import"./Suggestions.css-Jvp1dCcK.js";import"./ListBoxItemGroupTemplate-C2Cbg4RB.js";import"./ComboBoxItemGroup-oNdpvv56.js";import"./ListItemBaseTemplate-xRzWPdIS.js";import"./Token-DlVRMaDD.js";import"./ScrollEnablement-DwY0RoAs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxLrmdZY.js";import"./ToggleButton-BnUl__nv.js";import"./SuggestionItem-v3I1qCjx.js";import"./index-Bu-eXKyI.js";import"./Option-BY9BYDVp.js";import"./index-C_AafgAi.js";import"./SegmentedButton-D7wPRwMg.js";import"./index-shpjVhsR.js";import"./Select-CR2ghGLB.js";import"./InvisibleMessage-7tcQYx8D.js";import"./slim-arrow-down-D_ImNcdv.js";import"./useIsRTL-CTOFbx1K.js";import"./index-BMjRkiVz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlK-n2jI.js";import"./group-2-Cp4gTzXo.js";import"./sort-descending-CDUMih-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-SEUed_fI.js";import"./utils-Gey8zOGR.js";import"./index-BFyflX6k.js";import"./index-BXcL-3gN.js";import"./index-CzfiA05G.js";import"./navigation-down-arrow-DcpTPJLm.js";import"./navigation-right-arrow-B9HO0DfC.js";import"./navigation-right-arrow-Brdl4Rhp.js";import"./useCurrentTheme-HVVP5WXO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qnRqtfun.js";import"./debounce-D7W5PopO.js";import"./index-SflDEuXk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
