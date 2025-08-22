import{j as t}from"./iframe-C6IJVCey.js";import{useMDXComponents as i}from"./index-Ds5KjzB0.js";import{I as n,F as m}from"./CommandsAndQueries-Bd9H39B6.js";import{M as p,C as s}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import"./copy-CbqLCcHM.js";import{P as a}from"./AnalyticalTableHooks.stories-Dx2NT3Dj.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-DmVW3kBm.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Zhit5amx.js";import"./delete-aHHOuuds.js";import"./settings-CaUhFBfT.js";import"./NoData-JQj0GdaH.js";import"./IllustratedMessage-BS85q4Yt.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6RVTiiT.js";import"./index-qA8_yrjn.js";import"./slim-arrow-down-CwgCCUKm.js";import"./Input-x1q94poq.js";import"./ResponsivePopoverCommon.css-BVZ5OAV_.js";import"./ValueStateMessage.css-DPjopeIN.js";import"./Suggestions.css-CiUwfxD-.js";import"./ListBoxItemGroupTemplate-BIko6feT.js";import"./ComboBoxItemGroup-DPpPogP1.js";import"./ListItemBaseTemplate-BVssUnLn.js";import"./Token-ChcB-5Ws.js";import"./ScrollEnablement-DfCxcIin.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gdtXb5F2.js";import"./ToggleButton-DWOUuGjj.js";import"./SuggestionItem-CUDCE1RV.js";import"./index-CpJZBQzM.js";import"./Option-BeuU2j7g.js";import"./index-PtBujVy-.js";import"./SegmentedButton-DhZUEkWh.js";import"./index-DxPYvRTC.js";import"./Select-C7aDvX2p.js";import"./InvisibleMessage-BZfjRnJZ.js";import"./slim-arrow-down-BAej_MsU.js";import"./useIsRTL-LYqCZWtn.js";import"./index-D_T8LUzH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhfoG3wP.js";import"./group-2-TZSiJNJJ.js";import"./sort-descending-BaG4v9mS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-alTfv3-p.js";import"./utils-qSGpanwl.js";import"./index-DoVpOxB3.js";import"./index-62xBBkuk.js";import"./index-Bejl1epP.js";import"./navigation-down-arrow-DUB_9yJR.js";import"./navigation-right-arrow-D2MkXcV7.js";import"./navigation-right-arrow-CiZi-qcJ.js";import"./useCurrentTheme-CkuDZfer.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFSubTk6.js";import"./debounce-D7W5PopO.js";import"./index-DuV8laoQ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
