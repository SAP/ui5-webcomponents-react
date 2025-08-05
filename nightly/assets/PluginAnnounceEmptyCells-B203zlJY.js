import{j as t}from"./iframe-CG2rGjbc.js";import{useMDXComponents as i}from"./index-DS69H-n6.js";import{I as n,F as m}from"./CommandsAndQueries-DskZpT92.js";import{M as p,C as s}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import"./copy-Cj_PeOWN.js";import{P as a}from"./AnalyticalTableHooks.stories-D-ri1bAM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./index-vBa65tZZ.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BekTqDkh.js";import"./delete-CPTRq9yh.js";import"./settings-DWEJ_gda.js";import"./NoData-OzuE5q8j.js";import"./IllustratedMessage-fIXnbhow.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BFsxy39e.js";import"./index-DWchyRkq.js";import"./slim-arrow-down-B6ZGeZyP.js";import"./Input-D_cunrq3.js";import"./ResponsivePopoverCommon.css-ZxvNyTGX.js";import"./ValueStateMessage.css-DQP0hkeA.js";import"./Suggestions.css-BEa1e1bh.js";import"./ListBoxItemGroupTemplate-D1PADeY5.js";import"./ComboBoxItemGroup-B6S_XDKB.js";import"./ListItemBaseTemplate-DKtp7oXq.js";import"./Token-DnsYDL6G.js";import"./ScrollEnablement-D96l-16O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYmen0Jk.js";import"./ToggleButton-B6A9SDf5.js";import"./SuggestionItem-DH8pT6T8.js";import"./index-Oh9WLt-q.js";import"./Option-DXBBjhZz.js";import"./index-BsAvd2zC.js";import"./SegmentedButton-CBfx5wl-.js";import"./index-JBBiy_eP.js";import"./Select-DWo_Lub7.js";import"./InvisibleMessage-C2yLfqUK.js";import"./slim-arrow-down-DmJvDhwU.js";import"./useIsRTL-CMFeNktt.js";import"./index-4G4pslYn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DHDOumVO.js";import"./group-2-CJMBKFkN.js";import"./sort-descending-DArodGTD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Xwbj5fV9.js";import"./utils-fHUo6XIf.js";import"./index-aCo9U2xx.js";import"./index-zroShj9r.js";import"./index-2K0DQ2LF.js";import"./navigation-down-arrow-NWSQUDrt.js";import"./navigation-right-arrow-rBI3rFQp.js";import"./navigation-right-arrow-tevQ1gbb.js";import"./useCurrentTheme-DRE7X6Nh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-1_NbfYEK.js";import"./debounce-D7W5PopO.js";import"./index-Lf5lWW3e.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
