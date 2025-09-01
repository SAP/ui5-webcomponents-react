import{j as t}from"./iframe-Diowpvbi.js";import{useMDXComponents as i}from"./index-BQd2Q0Z3.js";import{I as n,F as m}from"./CommandsAndQueries-COPBvCoL.js";import{M as p,C as s}from"./blocks-CoZBpVTI.js";import"./Tag-B0clkLGt.js";import"./index-D9YlVxTm.js";import"./copy-Cax_mWEs.js";import{P as a}from"./AnalyticalTableHooks.stories-CpkuYKtY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-1wgmtjtJ.js";import"./index-D0g3RjgB.js";import"./index-CQR2h6vO.js";import"./Link-h6HOkbi0.js";import"./addCustomCSSWithScoping-BGpjw9gY.js";import"./index-B-dBAONH.js";import"./index-Ds6FKbjF.js";import"./index-xypPraOX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNWGtsu7.js";import"./index-B-BwEr1u.js";import"./information-CDgRW97e.js";import"./sys-enter-2-DY02qdHz.js";import"./alert-BaFyoXY8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhYPycqA.js";import"./delete-D82QIl2_.js";import"./settings-D_pqPZRA.js";import"./NoData-js4-UjTg.js";import"./IllustratedMessage-DKMK9OFc.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CqyqbA4U.js";import"./index-D2yzdfYs.js";import"./slim-arrow-down-BnLxEjYc.js";import"./Input-CkOt0B6i.js";import"./ResponsivePopoverCommon.css-CASz0Dqp.js";import"./ValueStateMessage.css-Be7X1jMy.js";import"./Suggestions.css-DfleazkQ.js";import"./ListBoxItemGroupTemplate-Btw2hM9T.js";import"./ComboBoxItemGroup-DH1DiXqT.js";import"./ListItemBaseTemplate-DEOdvJQ9.js";import"./Token-CmrkdheL.js";import"./ScrollEnablement-zRS1AfRM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYhRCZSB.js";import"./ToggleButton-B5Eorhfv.js";import"./SuggestionItem-D8-nCGsC.js";import"./index-CpuXefiQ.js";import"./Option-DiTkpXiW.js";import"./index-Bpmgkvwx.js";import"./SegmentedButton-GLgVA5pX.js";import"./index-By75EMBa.js";import"./Select-DkjN3zvd.js";import"./InvisibleMessage-BqM01yov.js";import"./slim-arrow-down-CAPvKWjl.js";import"./useIsRTL-BHW67YEf.js";import"./index-jY33nSV8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JK8fml35.js";import"./group-2-BfuxawN7.js";import"./sort-descending-DDuzuuMf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMgvpgkt.js";import"./utils-5Skicxr4.js";import"./index-qMRwd3oc.js";import"./index-BNwZ6o10.js";import"./index-kMsV4LM3.js";import"./navigation-down-arrow-DnHUXefS.js";import"./navigation-right-arrow-DfguE_8X.js";import"./navigation-right-arrow-BKGMW_2E.js";import"./useCurrentTheme-OdwJVOQn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bi3yTViv.js";import"./debounce-D7W5PopO.js";import"./index-nZv_fEDZ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
