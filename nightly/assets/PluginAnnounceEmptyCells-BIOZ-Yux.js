import{j as t}from"./iframe-BohNpW-0.js";import{useMDXComponents as i}from"./index-CNs9TfzQ.js";import{I as n,F as m}from"./CommandsAndQueries-dvLT1dsP.js";import{M as p,C as s}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import"./copy-CQ_htW6-.js";import{P as a}from"./AnalyticalTableHooks.stories-BkE12vkX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./index-ByPlsUCp.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnuRW_a.js";import"./delete-DFm5suxj.js";import"./settings-BLCj6Ktd.js";import"./NoData-CAAIc5W6.js";import"./IllustratedMessage-Bpl_x9QE.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1alUcvag.js";import"./index-Ch4OLcN7.js";import"./slim-arrow-down-LYXn27gh.js";import"./Input-CXgaSvQH.js";import"./ResponsivePopoverCommon.css-DuJkDvJC.js";import"./ValueStateMessage.css-BUzzgD75.js";import"./Suggestions.css-BIwwsvtG.js";import"./ListBoxItemGroupTemplate-jhhhIZpU.js";import"./ComboBoxItemGroup-CqSbXN4t.js";import"./ListItemBaseTemplate-reYvnJJM.js";import"./Token-iGWj7aCd.js";import"./ScrollEnablement-HAARTfJV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZXGuN1Y.js";import"./ToggleButton-U_geWF_i.js";import"./SuggestionItem-Co2iHh_E.js";import"./index-BAL7ahhu.js";import"./Option-CobSYum8.js";import"./index-Bu6Tv_AS.js";import"./SegmentedButton-Cs3c2JRc.js";import"./index-DWE68V0w.js";import"./Select-BLyS4LHF.js";import"./InvisibleMessage-_2VjBh0c.js";import"./slim-arrow-down-wv1cGsxv.js";import"./useIsRTL-D6FosoIx.js";import"./index-CjyJ5jjJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C3RkhPtf.js";import"./group-2-COlpxIGz.js";import"./sort-descending-CwpmoWCE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZkdsjgh.js";import"./utils-GVqR78hZ.js";import"./index-UheYK0zI.js";import"./index-CrORVvYl.js";import"./index-BhN4dH-m.js";import"./navigation-down-arrow-D4lgA2BL.js";import"./navigation-right-arrow-DP2bB5H7.js";import"./navigation-right-arrow-C4pGrl1t.js";import"./useCurrentTheme-CCffuhcS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-KjAWBXk6.js";import"./debounce-D7W5PopO.js";import"./index-Cf2iELKC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
