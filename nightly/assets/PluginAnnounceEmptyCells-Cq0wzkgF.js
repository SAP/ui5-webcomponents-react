import{j as t}from"./iframe-113A6qfG.js";import{useMDXComponents as i}from"./index-PjC7U6K4.js";import{I as n,F as m}from"./CommandsAndQueries-Bg85p3au.js";import{M as p,C as s}from"./blocks-D_3UdGcb.js";import"./Tag-DaeygpfO.js";import"./index-B2xOcofc.js";import"./copy-CcIFyCHE.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D1k_r1Oo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./index-CWWoZsv-.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dd4yZKPF.js";import"./delete-CNLurm_h.js";import"./settings-nYVw-8aK.js";import"./NoData-BtjU7UM8.js";import"./IllustratedMessage-C5AcPGiL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CZOywhhu.js";import"./index-DPIfm0RB.js";import"./slim-arrow-down-DZJ_GP1k.js";import"./Input-Gcc3dJDl.js";import"./ResponsivePopoverCommon.css-Q_FGcyNG.js";import"./ValueStateMessage.css-D-fesA6_.js";import"./Suggestions.css-Dc3HPxH1.js";import"./ListBoxItemGroupTemplate-DD9XMKKc.js";import"./ComboBoxItemGroup-CPJ8jj3b.js";import"./ListItemBaseTemplate-Brlr3M_-.js";import"./Token-UBERC-wa.js";import"./ScrollEnablement-CKBXjPwR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-U7_ux5-W.js";import"./ToggleButton-Z83cNU5B.js";import"./SuggestionItem-B9KyfZt1.js";import"./index-ByuG9QMH.js";import"./Option-BMD9BzbC.js";import"./index-CZccfsvW.js";import"./SegmentedButton-BHZRIVqz.js";import"./index-YaJT-7Vm.js";import"./Select-U-XxeLZb.js";import"./InvisibleMessage-D46WdJW_.js";import"./slim-arrow-down-2De9z3rU.js";import"./useIsRTL-D16EWQ1V.js";import"./index-CkQDp71V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bh0Y-pn3.js";import"./group-2-DfqujJuP.js";import"./sort-descending-DYeXzXZk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8emlxkI.js";import"./utils-DMs0HaFc.js";import"./index-DgltoZoV.js";import"./index-RYBL1PBZ.js";import"./index-DGoA9cON.js";import"./navigation-down-arrow-YzBoi4OT.js";import"./navigation-right-arrow-CVjB9oy3.js";import"./navigation-right-arrow-OXaI-HJX.js";import"./useCurrentTheme-DaERdxGz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsZPiuCg.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B5ZW5JM4.js";import"./index-D7fmcvB0.js";import"./less-B1DnNiyr.js";import"./index-Bf142AWA.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
