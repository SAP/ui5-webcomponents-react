import{j as t}from"./iframe-BCRKbB-F.js";import{useMDXComponents as i}from"./index-BX-rGI6y.js";import{I as n,F as m}from"./CommandsAndQueries-B-6PqVJi.js";import{M as p,C as s}from"./blocks-7Z_E6jI9.js";import"./Tag-DS_H74jk.js";import"./index-D-3HueK4.js";import"./copy-B5cEq6fF.js";import{P as a}from"./AnalyticalTableHooks.stories-C9OZA-p9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./index-C9k5hi-S.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-YwLF6LD4.js";import"./delete-Ld8CENCt.js";import"./settings-FT89pEZG.js";import"./NoData-DtHLQikX.js";import"./IllustratedMessage-VoUezW4G.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-mfRED6x5.js";import"./index-BpTW-c5S.js";import"./slim-arrow-down-BPFD1Mj1.js";import"./Input-CmmkFLaI.js";import"./ResponsivePopoverCommon.css-BpeopXwv.js";import"./ValueStateMessage.css-BJzDtIZE.js";import"./Suggestions.css-sLFaTK7q.js";import"./ListBoxItemGroupTemplate-DWt8WMfz.js";import"./ComboBoxItemGroup-LITK_YU1.js";import"./ListItemBaseTemplate-BOulBfG3.js";import"./Token-B8NvFI2b.js";import"./ScrollEnablement-CeBEvB5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-TvAAd95E.js";import"./ToggleButton-D6RX6jPt.js";import"./SuggestionItem-D6ESs6vy.js";import"./index-CqLDV1BV.js";import"./Option-BufIsNaK.js";import"./index-BCzW4i_i.js";import"./SegmentedButton-B0SB0VvP.js";import"./index-mpfJtdUF.js";import"./Select-BPSwgIYJ.js";import"./InvisibleMessage-BXR6Nu4L.js";import"./slim-arrow-down-COohbeSu.js";import"./useIsRTL-CHXXP87C.js";import"./index-CatAJS7G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DGgGSPMs.js";import"./group-2-3_abcVoF.js";import"./sort-descending-B0_QNBzC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-B65Hxqqj.js";import"./utils-DGVyR8av.js";import"./index-BHZNi0Sj.js";import"./index-BMlnEbTy.js";import"./index-Kc0S7rJM.js";import"./navigation-down-arrow-BKM0aIaY.js";import"./navigation-right-arrow-BQ8D2hLB.js";import"./navigation-right-arrow-D8MlM4bu.js";import"./useCurrentTheme-SWieicam.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BduD6r77.js";import"./debounce-D7W5PopO.js";import"./index-CvdpSJTy.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
