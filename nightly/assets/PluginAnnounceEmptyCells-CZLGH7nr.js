import{j as t}from"./iframe-Ckbc0Bmx.js";import{useMDXComponents as i}from"./index-DE-5xG9A.js";import{I as n,F as m}from"./CommandsAndQueries-DKucLITF.js";import{M as p,C as s}from"./blocks-D8tYWjnn.js";import"./Tag-rdyPterE.js";import"./index-Darg-j2X.js";import"./copy-B7_DIIST.js";import{P as a}from"./AnalyticalTableHooks.stories-BrJX1gFU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CrFxuHUZ.js";import"./index-COfW_OVU.js";import"./index-CzMZkzJI.js";import"./Link-D1WHOsxc.js";import"./addCustomCSSWithScoping-Cf-O7l9b.js";import"./index-usyep8x_.js";import"./index-fzfaunU7.js";import"./index-C-9s8bgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oJ-6Sn3x.js";import"./index-CuHvomlB.js";import"./information-OBfwqURu.js";import"./sys-enter-2-BD7M3cvb.js";import"./alert-j4aUIFXI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3hM-1C4.js";import"./delete-BMskVgGy.js";import"./settings-sexh0hZI.js";import"./NoData-j-BC8fza.js";import"./IllustratedMessage-CxJ0jCDU.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BQzLLwN4.js";import"./index-D-LR4-m3.js";import"./slim-arrow-down-Dx-bO6Dc.js";import"./Input-WAgKnw3k.js";import"./ResponsivePopoverCommon.css-Ci4jtjI2.js";import"./ValueStateMessage.css-CoCSxpGR.js";import"./Suggestions.css-BqzJ2RoF.js";import"./ListBoxItemGroupTemplate-B54RG9ri.js";import"./ComboBoxItemGroup-C3E9TaGE.js";import"./ListItemBaseTemplate-CaX2s66e.js";import"./Token-mO4l_c7c.js";import"./ScrollEnablement-qE5XhDmK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C6lS1XXD.js";import"./ToggleButton-sPWid6Nl.js";import"./SuggestionItem-DlajEpIp.js";import"./index-D9f6iXNK.js";import"./Option-CCnRI1MY.js";import"./index-pp0bBggn.js";import"./SegmentedButton-Bsm15QWE.js";import"./index-B7xei630.js";import"./Select-DFcsUJ0F.js";import"./InvisibleMessage-BDhZ3h8W.js";import"./slim-arrow-down-Cx5QOJiF.js";import"./useIsRTL-Bs-OA-9D.js";import"./index-B7PUGGrO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-MZZU7k-z.js";import"./group-2-fjm2DZVJ.js";import"./sort-descending-Chh_DNEY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4Yu1su5.js";import"./utils-BuPSeF1r.js";import"./index-BYR58szb.js";import"./index-CLHhbGX6.js";import"./index-H2RtG6-s.js";import"./navigation-down-arrow-DWNq0yGj.js";import"./navigation-right-arrow-C5VaIixC.js";import"./navigation-right-arrow-D4Oo-FUU.js";import"./useCurrentTheme-YUFjSvAg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMV-QIM0.js";import"./debounce-D7W5PopO.js";import"./index-6r6-8miH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
