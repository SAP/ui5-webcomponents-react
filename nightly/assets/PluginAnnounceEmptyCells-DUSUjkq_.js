import{j as t}from"./iframe-B3OL0dJj.js";import{useMDXComponents as i}from"./index-BacKYjfx.js";import{I as n,F as m}from"./CommandsAndQueries-CF0BaiA4.js";import{M as p,C as s}from"./blocks-DWSkzL_O.js";import"./Tag-Cz9uoO3f.js";import"./index-ICQad1Jx.js";import"./copy-BIhehpav.js";import{P as a}from"./AnalyticalTableHooks.stories-D2kTvojh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D7xFIu9y.js";import"./index-bmuDs-E9.js";import"./index-BM-Dt4Ms.js";import"./Link-B3I1DK3y.js";import"./addCustomCSSWithScoping-QT3VtH-b.js";import"./index-Cl7-VWhy.js";import"./index-BB1lQngG.js";import"./index-BvBfHyAK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdVXj32r.js";import"./index-DpJD6crE.js";import"./information-CsT7qq8I.js";import"./sys-enter-2-C6eVrxWF.js";import"./alert-D4Iro2pT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-64BVvMSH.js";import"./delete-D20JBxPW.js";import"./settings-omjh2iI4.js";import"./NoData-BDDO8du3.js";import"./IllustratedMessage-Ctv1I4UG.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-OMY4BRv7.js";import"./index-BRwxZr_p.js";import"./slim-arrow-down-HjvQdG02.js";import"./Input-CUVXXg7A.js";import"./ResponsivePopoverCommon.css-BzfoLh3k.js";import"./ValueStateMessage.css-Bg5AcRme.js";import"./Suggestions.css-CMqU9BCK.js";import"./ListBoxItemGroupTemplate-B2f83niS.js";import"./ComboBoxItemGroup-DOJ3tmN4.js";import"./ListItemBaseTemplate-DjdvHlw5.js";import"./Token-CFAmjSAI.js";import"./ScrollEnablement-T55LOece.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C5poq4N5.js";import"./ToggleButton-CXHi7Iti.js";import"./SuggestionItem-CICbtEWy.js";import"./index-DWeWBlNY.js";import"./Option-1FDXr6S6.js";import"./index-Bf9Y5VxI.js";import"./SegmentedButton-B-M1xCAz.js";import"./index-D6OusQ8V.js";import"./Select-CVc_qkqT.js";import"./InvisibleMessage-ByyXeQex.js";import"./slim-arrow-down-2tFwivWo.js";import"./useIsRTL-CZITtXzn.js";import"./index-BsubhM1D.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D0Kw7TrJ.js";import"./group-2-BMSViSkc.js";import"./sort-descending-CVvl3anL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UwlP0y3d.js";import"./utils-DtD9zSg1.js";import"./index-BKTQiEpx.js";import"./index-3LIQI1Mx.js";import"./index-Nwxrqq1G.js";import"./navigation-down-arrow-BCeBT4de.js";import"./navigation-right-arrow-B_nC9n3I.js";import"./navigation-right-arrow-CEOQ8RZr.js";import"./useCurrentTheme-hc_hNIbV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DV3BrsWn.js";import"./debounce-D7W5PopO.js";import"./index-BqvLyP5X.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
