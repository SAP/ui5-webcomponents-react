import{j as t}from"./iframe-DzQ21Lns.js";import{useMDXComponents as i}from"./index-BP8jxV1P.js";import{I as n,F as m}from"./CommandsAndQueries-BWveXsvx.js";import{M as p,C as s}from"./blocks-DR2wB9AJ.js";import"./Tag-CfB46NJC.js";import"./index-CNaVfoQo.js";import"./copy-BGzgj4Bd.js";import{P as a}from"./AnalyticalTableHooks.stories-CVyIiUMF.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";import"./index-CkGGqXom.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0r_9vZG.js";import"./delete-CTdMsL2W.js";import"./settings-CSLxx2dL.js";import"./NoData-6dIzoSes.js";import"./IllustratedMessage-B3UtCfR0.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dp7K6fby.js";import"./index-DsT2Cblh.js";import"./slim-arrow-down-BcVCCvLV.js";import"./Input-BBc0FPcy.js";import"./ResponsivePopoverCommon.css-BEW3XFGK.js";import"./ValueStateMessage.css-CAFhnqqF.js";import"./Suggestions.css-oidNGW3x.js";import"./ListBoxItemGroupTemplate-BaUuBQRM.js";import"./ComboBoxItemGroup-Bx1kITcG.js";import"./ListItemBaseTemplate-1GHgiBYL.js";import"./Token-B6x8t07X.js";import"./ScrollEnablement-EY3VdHjS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yc3QYJD2.js";import"./ToggleButton-VpguQDbL.js";import"./SuggestionItem-B83CxbOY.js";import"./index-CljpPXGO.js";import"./Option-OQFsvput.js";import"./index-DlxRvD7h.js";import"./SegmentedButton-DMI45c8b.js";import"./index-WjOtb6GN.js";import"./Select-D3cbLmw6.js";import"./InvisibleMessage-B2KrkcqD.js";import"./slim-arrow-down-Dh2WkWwy.js";import"./useIsRTL-DC-py9jD.js";import"./index-y47N6ek3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyHUrJqV.js";import"./group-2-OwMh3Ots.js";import"./sort-descending-YVjneWiS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DM-3FMRs.js";import"./utils-DdYpjhKE.js";import"./index-CFL_93ON.js";import"./index-DnuhIUKQ.js";import"./index-BhMasU6x.js";import"./navigation-down-arrow-DJSgxJP7.js";import"./navigation-right-arrow-BJKIkgSM.js";import"./navigation-right-arrow-CXhnY_Ll.js";import"./useCurrentTheme-TK9BLj79.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CH4JwDSd.js";import"./debounce-D7W5PopO.js";import"./index-CpMdG5Z8.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
