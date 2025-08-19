import{j as t}from"./iframe-CvU-07By.js";import{useMDXComponents as i}from"./index-DIsCDPQO.js";import{I as n,F as m}from"./CommandsAndQueries-DbBqwiyb.js";import{M as p,C as s}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import"./copy-TKggWaTM.js";import{P as a}from"./AnalyticalTableHooks.stories-3G5OLr_c.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./index-DyAIHHB4.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D64xpzSV.js";import"./delete-DASOuVgK.js";import"./settings-Cz4b_CQ9.js";import"./NoData-DRMV0RP5.js";import"./IllustratedMessage-Bz0pNoIO.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DO36Y4ke.js";import"./index-QYxqI47W.js";import"./slim-arrow-down-XBwwFKMk.js";import"./Input-Bk67iFBz.js";import"./ResponsivePopoverCommon.css-DtcMkK-L.js";import"./ValueStateMessage.css-DNP4kQ0q.js";import"./Suggestions.css-BgX4bA8X.js";import"./ListBoxItemGroupTemplate-D9C-1xti.js";import"./ComboBoxItemGroup-DaMMxlC9.js";import"./ListItemBaseTemplate-D_DoxqTK.js";import"./Token-B3GzMGjr.js";import"./ScrollEnablement-Cuj5W76G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9CyfjI3.js";import"./ToggleButton-BbTI55BR.js";import"./SuggestionItem-PZTnS_B4.js";import"./index-Tg7QXIHr.js";import"./Option-98MOnCoD.js";import"./index-B16eoqTK.js";import"./SegmentedButton-M4kts95Y.js";import"./index-B6dFmvI2.js";import"./Select-BMBrtb3I.js";import"./InvisibleMessage-DWMWQiC0.js";import"./slim-arrow-down-qxU48HTy.js";import"./useIsRTL-CCAIfBkQ.js";import"./index-CF9TteIz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJ3EZc78.js";import"./group-2-DYOtES-M.js";import"./sort-descending-Bm8GDKvK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-JnyUrL39.js";import"./utils-BaDcmQQs.js";import"./index-CoUCTNoo.js";import"./index-BJGfmIzj.js";import"./index-D3k1OHd9.js";import"./navigation-down-arrow-0KBRgDJV.js";import"./navigation-right-arrow-B3eoCJ9z.js";import"./navigation-right-arrow-BuzrIA7s.js";import"./useCurrentTheme-DLiAiuSO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrZd3Ayr.js";import"./debounce-D7W5PopO.js";import"./index-BegZFN-t.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
