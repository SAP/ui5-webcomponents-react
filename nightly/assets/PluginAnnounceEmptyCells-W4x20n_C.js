import{j as t}from"./iframe-FFY2S6YG.js";import{useMDXComponents as i}from"./index-BzZglwT-.js";import{I as n,F as m}from"./CommandsAndQueries-CRs7a5Er.js";import{M as p,C as s}from"./blocks-tMTQEG0b.js";import"./Tag-CY0dYkIx.js";import"./index-CR-wXzPk.js";import"./copy-DuPWkMaa.js";import{P as a}from"./AnalyticalTableHooks.stories-FtOOhuOh.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BK6LUJYp.js";import"./index-aRemyO01.js";import"./index-CYPt-1NW.js";import"./Link-ilnMyEmJ.js";import"./addCustomCSSWithScoping-L7uLJS1K.js";import"./index-BvjHl6jR.js";import"./index-Cer5_OSt.js";import"./index-dBDK7i7w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hY5EkXL.js";import"./index-BpfUe8Vy.js";import"./information-bHzg5lJa.js";import"./sys-enter-2-DLgVYDfp.js";import"./alert-DTO9To2T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DewUzwnF.js";import"./delete-PyKScnn5.js";import"./settings-D8wSEnLQ.js";import"./NoData-DcvAWleu.js";import"./IllustratedMessage-CUcy7Lzq.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7-d5vvM.js";import"./index-DzVsJZGg.js";import"./slim-arrow-down-CDbx1-YQ.js";import"./Input-BUwXm7QE.js";import"./ResponsivePopoverCommon.css-Ns2pYP6j.js";import"./ValueStateMessage.css-Br2MqEEx.js";import"./Suggestions.css-BA_f9-0L.js";import"./ListBoxItemGroupTemplate-82b3Pwjr.js";import"./ComboBoxItemGroup-CyA2Qdmh.js";import"./ListItemBaseTemplate-D3ib4Mla.js";import"./Token-CV1Eunvp.js";import"./ScrollEnablement-DswLTbh8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-sXxgGRTN.js";import"./ToggleButton-BSn8PnZz.js";import"./SuggestionItem-m0RxQNSP.js";import"./index-CFYJFEfe.js";import"./Option-D87YgESn.js";import"./index-wgQZg_qM.js";import"./SegmentedButton-BnS-MFCM.js";import"./index-CGQSvAxs.js";import"./Select-CYN8bhUC.js";import"./InvisibleMessage-CbKgbx5O.js";import"./slim-arrow-down-Cfpa0YBm.js";import"./useIsRTL-BX8Bpdr0.js";import"./index-C_QO2GI1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-uMu8AkhM.js";import"./group-2-CMgkMPSi.js";import"./sort-descending-BvvCOZ2_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHw5dxkC.js";import"./utils-BPc0OMuw.js";import"./index-D_RFV31k.js";import"./index-D59fZpcX.js";import"./index-DlqHiufR.js";import"./navigation-down-arrow-gws4-sx1.js";import"./navigation-right-arrow-BJmMXsZ_.js";import"./navigation-right-arrow-AZTMAkte.js";import"./useCurrentTheme-DWXrF5d1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DQOK-fLL.js";import"./debounce-D7W5PopO.js";import"./index-DbwjuCtL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
