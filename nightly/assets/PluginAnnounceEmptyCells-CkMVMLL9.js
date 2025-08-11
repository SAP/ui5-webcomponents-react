import{j as t}from"./iframe-DwijkcSC.js";import{useMDXComponents as i}from"./index-dOTQ_8MY.js";import{I as n,F as m}from"./CommandsAndQueries-v2kYi8f6.js";import{M as p,C as s}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import"./copy-BSROPq_0.js";import{P as a}from"./AnalyticalTableHooks.stories-BcPBfgVl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./index-4CSwoMco.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrJXNVPh.js";import"./delete-aAHersLJ.js";import"./settings-uewFS_V4.js";import"./NoData-CThXS__2.js";import"./IllustratedMessage-sD-gyUQ4.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-xiGmwW83.js";import"./index-BFyL3BDI.js";import"./slim-arrow-down-DVE3AHXn.js";import"./Input-Xke3BFuq.js";import"./ResponsivePopoverCommon.css-B6grsBrr.js";import"./ValueStateMessage.css-Bqjq4SCl.js";import"./Suggestions.css-Dr7vVlmc.js";import"./ListBoxItemGroupTemplate-xhPZ9BN8.js";import"./ComboBoxItemGroup-CMjqP94i.js";import"./ListItemBaseTemplate-DfBjNLTN.js";import"./Token-C4gwLyQC.js";import"./ScrollEnablement-sczQYiMf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZEk89Tl.js";import"./ToggleButton-DaHW8XVq.js";import"./SuggestionItem-T5JUISxm.js";import"./index-DfwUMwnp.js";import"./Option-DpDZkHl8.js";import"./index-Beoktyb1.js";import"./SegmentedButton-D52_JIT9.js";import"./index-5UefQkCi.js";import"./Select-D322pIg_.js";import"./InvisibleMessage-Bw88KNeA.js";import"./slim-arrow-down-BsLfN3xy.js";import"./useIsRTL-Dl-PtuBT.js";import"./index-UHAME4Au.js";import"./IconDesign-DXd8PPVF.js";import"./filter-hnPTBo-V.js";import"./group-2-CEqFMcvq.js";import"./sort-descending-D0Lbw9y2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs9wOeA9.js";import"./utils-DFydI20z.js";import"./index-Vq1zQZ3g.js";import"./index-9WjSegZE.js";import"./index-C85cNDYp.js";import"./navigation-down-arrow-Cq6HhR0x.js";import"./navigation-right-arrow-BNY7uCOq.js";import"./navigation-right-arrow-DcfT7hK3.js";import"./useCurrentTheme-XtkosabZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DiCDMx0X.js";import"./debounce-D7W5PopO.js";import"./index-DexoxOrp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
