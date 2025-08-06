import{j as t}from"./iframe-D5q1aMGI.js";import{useMDXComponents as i}from"./index-B6q-95ic.js";import{I as n,F as m}from"./CommandsAndQueries-B7jUlW4q.js";import{M as p,C as s}from"./blocks-VrnxRsTA.js";import"./Tag-DDiTsJ0v.js";import"./index-YdpDWp2e.js";import"./copy-BKgapaDk.js";import{P as a}from"./AnalyticalTableHooks.stories-dSzt4GWq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BCRNDJSO.js";import"./index-B87mq1Uz.js";import"./index-DEUGWJD9.js";import"./Link-CDAcJh87.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-S9YU7LKi.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";import"./index-Bo48Ce9s.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CsHCxr67.js";import"./delete-CrB9HqG2.js";import"./settings-DECvLj5S.js";import"./NoData-CR8msYbY.js";import"./IllustratedMessage-CY0-lqad.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-a_c2cpaY.js";import"./index-qOXfK827.js";import"./slim-arrow-down-BJL2q3GT.js";import"./Input-Dojvmff0.js";import"./ResponsivePopoverCommon.css-BbYcEfwA.js";import"./ValueStateMessage.css-CaAok0mJ.js";import"./Suggestions.css-C9HB9yUf.js";import"./ListBoxItemGroupTemplate-BTRpmdMA.js";import"./ComboBoxItemGroup-BRFN36VG.js";import"./ListItemBaseTemplate-DmsDSmvD.js";import"./Token-DgG--4Nk.js";import"./ScrollEnablement-Cc56P2Pl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-bTvWpL2a.js";import"./ToggleButton-BLsbW6Ur.js";import"./SuggestionItem-DfkCVKrX.js";import"./index-DirFAqd5.js";import"./Option-BIDYQynm.js";import"./index-C1UWc2vk.js";import"./SegmentedButton-uWErduWG.js";import"./index-C9aedMdp.js";import"./Select-Xy9jFddO.js";import"./InvisibleMessage-BPUavHeu.js";import"./slim-arrow-down-Cqz8o9QR.js";import"./useIsRTL-D1kDzTdS.js";import"./index-BgZZQCdH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnacD2bE.js";import"./group-2-CAD4eGiy.js";import"./sort-descending-CqNy--fc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-7YvS3mms.js";import"./utils-DrhYszZU.js";import"./index-D97lUxga.js";import"./index-uhetbkTp.js";import"./index-DM1CdrI2.js";import"./navigation-down-arrow-5y5ThNfn.js";import"./navigation-right-arrow--Ae6reK-.js";import"./navigation-right-arrow-B_hqUMX3.js";import"./useCurrentTheme-tlImnX2L.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DIfwf-Hn.js";import"./debounce-D7W5PopO.js";import"./index-a1OySSw1.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
