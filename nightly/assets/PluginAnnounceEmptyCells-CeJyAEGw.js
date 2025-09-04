import{j as t}from"./iframe-S1rR11cQ.js";import{useMDXComponents as i}from"./index-69KsrxW4.js";import{I as n,F as m}from"./CommandsAndQueries-7fbj5dZq.js";import{M as p,C as s}from"./blocks-C1kWdW5O.js";import"./Tag-Do4MK6Vd.js";import"./index-DjdMAx9G.js";import"./i18n-DSpjDgSK.js";import"./copy-DEUCxjzs.js";import{P as a}from"./AnalyticalTableHooks.stories-BXqJKOyj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./index-BO-Ud12y.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BYRCdEc9.js";import"./delete-Imu_QxJM.js";import"./settings-B_iY8jBT.js";import"./NoData-B-ELxJeH.js";import"./IllustratedMessage-B_RsJhsX.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-cZcTvwoH.js";import"./index-D3e7C-2T.js";import"./slim-arrow-down-DU0iuCt5.js";import"./Input-BFiJeabE.js";import"./ResponsivePopoverCommon.css-Dp9rYv_8.js";import"./ValueStateMessage.css-DP7y8aPL.js";import"./Suggestions.css-Ci1w_A7X.js";import"./ListBoxItemGroupTemplate-DF_dwaej.js";import"./ComboBoxItemGroup-DmqVeR1G.js";import"./ListItemBaseTemplate-DYhywRSV.js";import"./Token-r_fCtFrS.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbQSk8O2.js";import"./ToggleButton-8UTCVYbm.js";import"./SuggestionItem-CT5TG_5O.js";import"./index-CcdBc6FW.js";import"./Option-DYLlW_F-.js";import"./index-Cqbzrt3C.js";import"./SegmentedButton-BcJorwjo.js";import"./index-Cf3c9UmM.js";import"./Select-DG78L4ow.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CRHbxhfI.js";import"./useIsRTL-DdvIXurs.js";import"./index-BE-KkdkZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQfWDTJ0.js";import"./group-2-BLTcOHYG.js";import"./sort-descending-DwG6522S.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DC42DZTr.js";import"./utils-sSXAe6W0.js";import"./index-DN78M1wk.js";import"./index-CavZ-61D.js";import"./index-BJEczdPQ.js";import"./navigation-down-arrow-hL3YGD3q.js";import"./navigation-right-arrow-9j3TTsRx.js";import"./navigation-right-arrow-DwV_m_TK.js";import"./useCurrentTheme-CBSy01zR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4DGjUgH.js";import"./debounce-D7W5PopO.js";import"./index-BwzYicPU.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
