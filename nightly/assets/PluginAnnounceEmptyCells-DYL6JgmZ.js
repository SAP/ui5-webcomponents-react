import{j as t}from"./iframe-BGSq42U4.js";import{useMDXComponents as i}from"./index-DdgODfaa.js";import{I as n,F as m}from"./CommandsAndQueries-DmG8Z04y.js";import{M as p,C as s}from"./blocks-DinJR8BJ.js";import"./Tag-DFLgZ7W6.js";import"./index-4G2XFF8s.js";import"./i18n-DCXZOGva.js";import"./copy-BkyD6IBJ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BW4qHHwC.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CFLPIYxg.js";import"./index-DeoM-MQY.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-Dv5XzTWy.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DFxK7J9H.js";import"./delete-Dzl_3hnA.js";import"./settings-D01zQ7hv.js";import"./NoData-DVRj1UWp.js";import"./IllustratedMessage-DGYeVb0O.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DnmQBk2g.js";import"./index-BHQkJQiK.js";import"./slim-arrow-down-DLcfp9eI.js";import"./Input-BCjEB6tM.js";import"./ResponsivePopoverCommon.css-C97v6xTI.js";import"./ValueStateMessage.css-c8cGQ3y8.js";import"./Suggestions.css-hBw8WfKI.js";import"./ListBoxItemGroupTemplate-O6bJScLD.js";import"./ComboBoxItemGroup-Cyw7FPb_.js";import"./ListItemBaseTemplate-DPLSdGuC.js";import"./Token-Bj-WnEM-.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9eXVr7n.js";import"./ToggleButton-lj5dY9Vv.js";import"./SuggestionItem-e6p9a2qW.js";import"./index-CuzQn-ym.js";import"./Option-De9cvay_.js";import"./index-DsX1x0Cs.js";import"./SegmentedButton-Bs-9-uNd.js";import"./index-Bd7g7Uhh.js";import"./Select-s6cC4PfQ.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-tJmQ7xBW.js";import"./useIsRTL-UmUMTfkT.js";import"./index-BDRoTd8f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pKZg5tZw.js";import"./group-2-OlKOx7kW.js";import"./sort-descending-DZbNeaMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b3CRpkDf.js";import"./utils-BXniIs5V.js";import"./index-DV8x_VUY.js";import"./index-Bl0D5g66.js";import"./index-DHNxxH0D.js";import"./navigation-down-arrow-7ufWXDu9.js";import"./navigation-right-arrow-DL470iX4.js";import"./navigation-right-arrow-CLB8HeYS.js";import"./useCurrentTheme-CNFGjYI-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4kj3IR9.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BihcXvWE.js";import"./index-CMcW5V3Y.js";import"./less-Cr_OeLu9.js";import"./index-CJYJTirV.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
