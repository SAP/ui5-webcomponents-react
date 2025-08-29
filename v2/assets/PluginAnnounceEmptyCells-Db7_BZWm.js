import{j as t}from"./iframe-CMv2_fr8.js";import{useMDXComponents as i}from"./index-BCZO-1se.js";import{I as n,F as m}from"./CommandsAndQueries-UgVWTBkO.js";import{M as p,C as s}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import"./copy-Bp5geyDe.js";import{P as a}from"./AnalyticalTableHooks.stories-BSzstlQP.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./index-51EQIK1-.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bx3b2TDp.js";import"./delete-CalXTGlT.js";import"./settings-CKdoFgwl.js";import"./NoData-p29COnSK.js";import"./IllustratedMessage-C87-LIvH.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BQ0Mdx5M.js";import"./index-BxytC64g.js";import"./slim-arrow-down-BTfvD9aU.js";import"./Input-Bl2hG8Lo.js";import"./ResponsivePopoverCommon.css-TrKPArzz.js";import"./ValueStateMessage.css-CQDFsMMJ.js";import"./Suggestions.css-Ak-2B7T4.js";import"./ListBoxItemGroupTemplate-RY11pEtQ.js";import"./ComboBoxItemGroup-D_6Q9e7Q.js";import"./ListItemBaseTemplate-CQloCMYu.js";import"./Token-DU6rx9F8.js";import"./ScrollEnablement-T_D09lMU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D89_4FyU.js";import"./ToggleButton-OE-lMKYf.js";import"./SuggestionItem-StPux35r.js";import"./index-BTmpWJxg.js";import"./Option-h29ztJ0M.js";import"./index-CcEbMbla.js";import"./SegmentedButton-C64IbfpW.js";import"./index-BuFCuT2D.js";import"./Select-CqjrQ-1B.js";import"./InvisibleMessage-BDnkulxx.js";import"./slim-arrow-down-B9Cmh7Gb.js";import"./useIsRTL-CH3TFmG6.js";import"./index-CJ5r_NfY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkahIsh0.js";import"./group-2-CDhOjwXT.js";import"./sort-descending-Ipw7pnw4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmaCr3G1.js";import"./utils-ChWvBl6r.js";import"./index-DEGIPmEx.js";import"./index-CzKz2Ioj.js";import"./index-DHARM5pI.js";import"./navigation-down-arrow-DIfJAMnS.js";import"./navigation-right-arrow-Cgv7L7KE.js";import"./navigation-right-arrow-CeyNkbEW.js";import"./useCurrentTheme-DwDORL7y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C3LCctj_.js";import"./debounce-D7W5PopO.js";import"./index-BoSkNmP1.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
