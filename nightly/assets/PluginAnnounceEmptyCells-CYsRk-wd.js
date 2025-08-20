import{j as t}from"./iframe-Plj9L4DO.js";import{useMDXComponents as i}from"./index-uN80YAVR.js";import{I as n,F as m}from"./CommandsAndQueries-BWyKkggu.js";import{M as p,C as s}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import"./copy-DLXELO5k.js";import{P as a}from"./AnalyticalTableHooks.stories-C97ck5E1.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-B6F36pGT.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ijwk2Jq3.js";import"./delete-Bj_pcN1D.js";import"./settings-C1dsANlV.js";import"./NoData-C6Ob-Z--.js";import"./IllustratedMessage-BHtZel4v.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-YfgvGqD3.js";import"./index-BdoAGjQ2.js";import"./slim-arrow-down-bQWmrnVc.js";import"./Input-D_9FWiS-.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";import"./ValueStateMessage.css-JOKuFUum.js";import"./Suggestions.css-CxuGFOi-.js";import"./ListBoxItemGroupTemplate-sEIue0Fw.js";import"./ComboBoxItemGroup-CXVkGl0O.js";import"./ListItemBaseTemplate-CH90Z1sT.js";import"./Token-X11-BsdP.js";import"./ScrollEnablement-C4mp0fCO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZA0fV_-.js";import"./ToggleButton-CokJVa8f.js";import"./SuggestionItem-CZ3Cpr40.js";import"./index-H4v79u-c.js";import"./Option-CMOaJbPT.js";import"./index-D-3W9zYA.js";import"./SegmentedButton-DKNm8wW6.js";import"./index-DEFckCJE.js";import"./Select-CJ-vJLYi.js";import"./InvisibleMessage-C9ijcey0.js";import"./slim-arrow-down-D9ZL1EHX.js";import"./useIsRTL-_CpVncDg.js";import"./index-BzZ4luee.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-Pk41C2.js";import"./group-2-BhbpIExg.js";import"./sort-descending-DSmABxuS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5HZXdPZ.js";import"./utils-CzUFBlHA.js";import"./index-BzcyxAVY.js";import"./index-DfxHMw3J.js";import"./index-Y38PQMr-.js";import"./navigation-down-arrow-DJw6Oxgn.js";import"./navigation-right-arrow-O3aG19yG.js";import"./navigation-right-arrow-DHq6wjVC.js";import"./useCurrentTheme-DI5oXyuc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SRyOKcq5.js";import"./debounce-D7W5PopO.js";import"./index-C8EPvm6k.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
