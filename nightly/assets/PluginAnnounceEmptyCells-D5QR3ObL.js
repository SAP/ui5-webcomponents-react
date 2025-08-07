import{j as t}from"./iframe-CpjYl_X5.js";import{useMDXComponents as i}from"./index-33t6PBxs.js";import{I as n,F as m}from"./CommandsAndQueries-EZVtGsJe.js";import{M as p,C as s}from"./blocks-BkWlBCqX.js";import"./Tag-DAYBa8yS.js";import"./index-joCwOwY7.js";import"./copy-BKpc5Gew.js";import{P as a}from"./AnalyticalTableHooks.stories-BVkvj-yB.js";import"./preload-helper-Dp1pzeXC.js";import"./index--ofYB3gh.js";import"./index-DdElBtDf.js";import"./index-Us1w7EKB.js";import"./Link-D3b32oQu.js";import"./addCustomCSSWithScoping-DT7KX0jQ.js";import"./index-DkiFqVtv.js";import"./index-n0koIvnW.js";import"./index-CNY9O4wi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCOGUGQL.js";import"./index-C2_ggH5f.js";import"./information-DIh11mSj.js";import"./sys-enter-2-Dq_jhMR8.js";import"./alert-D8p6gt1X.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHG2MOGz.js";import"./delete-YCb_ChtI.js";import"./settings-QgbbNJUk.js";import"./NoData-dKh86SfT.js";import"./IllustratedMessage-BcqFKz4Y.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-PvZhdoyR.js";import"./index-CgAwMvUW.js";import"./slim-arrow-down-DwQAWsTD.js";import"./Input-BNo-hj-C.js";import"./ResponsivePopoverCommon.css-DwHdHtV9.js";import"./ValueStateMessage.css-BUAJFQ99.js";import"./Suggestions.css-CwebfgRb.js";import"./ListBoxItemGroupTemplate-CxJiZt19.js";import"./ComboBoxItemGroup-R0TCP6K_.js";import"./ListItemBaseTemplate-Bdi5-fvq.js";import"./Token-Xwtg_im0.js";import"./ScrollEnablement-wFgsvqM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhhUzpAY.js";import"./ToggleButton-3rZtTX4u.js";import"./SuggestionItem-BsQJnmhm.js";import"./index-ByrHtGCZ.js";import"./Option-DZvbArRC.js";import"./index-DRMZdDM7.js";import"./SegmentedButton-53xfTt5w.js";import"./index-BDUQZ20D.js";import"./Select-BbN0n5sp.js";import"./InvisibleMessage-BskeonYB.js";import"./slim-arrow-down-BdbjdxUH.js";import"./useIsRTL-BtNL1jcq.js";import"./index-BNinvQDt.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nyIuTl9A.js";import"./group-2-C1vnwRBA.js";import"./sort-descending-CAIFi3VI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-vfvgrfsh.js";import"./utils-B1Rb9HQ6.js";import"./index-D4Q9QnEI.js";import"./index-OZ--zbFt.js";import"./index-BV44GF9N.js";import"./navigation-down-arrow-CJEHhyr3.js";import"./navigation-right-arrow-bUpwQK8M.js";import"./navigation-right-arrow-D6PMGkoJ.js";import"./useCurrentTheme-POWYwZLU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BF1MtxJr.js";import"./debounce-D7W5PopO.js";import"./index-DRmcpn9V.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
