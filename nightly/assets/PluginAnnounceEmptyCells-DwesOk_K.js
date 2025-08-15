import{j as t}from"./iframe-BxEu-xci.js";import{useMDXComponents as i}from"./index-DIpNHUFd.js";import{I as n,F as m}from"./CommandsAndQueries-BL1k5Lab.js";import{M as p,C as s}from"./blocks-DPfoGqoC.js";import"./Tag-BNi2hR4G.js";import"./index-BorC4J59.js";import"./copy-byxAjSE6.js";import{P as a}from"./AnalyticalTableHooks.stories-HWmY7zip.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CFj32LYi.js";import"./index-CL8FjSwM.js";import"./index-CnHUdtnF.js";import"./Link-CkCyRMbi.js";import"./addCustomCSSWithScoping-C3RRJQPN.js";import"./index-DSeLD822.js";import"./index-Dzht26Rp.js";import"./index-BV37wPbr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dYhLm2AL.js";import"./index-zhC6_est.js";import"./information-BKw42Lxc.js";import"./sys-enter-2-BkwngAtf.js";import"./alert-DQ3naR-W.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BH93_Lsj.js";import"./delete-CYGtkaxN.js";import"./settings-eZTEBWqi.js";import"./NoData-CPb97MZw.js";import"./IllustratedMessage-Cxzzm7cA.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CrDGa_wI.js";import"./index-zRLag29-.js";import"./slim-arrow-down-UD2Q1IDE.js";import"./Input-CgWZ-qAo.js";import"./ResponsivePopoverCommon.css-CWKaQ37A.js";import"./ValueStateMessage.css-BD9264Ua.js";import"./Suggestions.css-PvISQ8RB.js";import"./ListBoxItemGroupTemplate-B7TcVOYF.js";import"./ComboBoxItemGroup-CPr8tLri.js";import"./ListItemBaseTemplate-B-1oyib3.js";import"./Token-967xuEKh.js";import"./ScrollEnablement-B0qFQ7DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDZZwHz8.js";import"./ToggleButton-BnmaRB9r.js";import"./SuggestionItem-DrN6FdPk.js";import"./index-BZeUxVa-.js";import"./Option-C7146fjq.js";import"./index-YaJgyAqd.js";import"./SegmentedButton-Dc-edv9U.js";import"./index-COSAVkse.js";import"./Select-B5DeL5zX.js";import"./InvisibleMessage-CwUOjoUf.js";import"./slim-arrow-down-poKh_hcw.js";import"./useIsRTL-BpqbY7M4.js";import"./index-DSA_Eb7Y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QgylPsvJ.js";import"./group-2-Bluuis61.js";import"./sort-descending-CFm0YXL_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D68zLiR-.js";import"./utils-BDjXc7bK.js";import"./index-Bv-tSzmM.js";import"./index-D63mSLbN.js";import"./index-D7M3tNXI.js";import"./navigation-down-arrow-DVVrIqSy.js";import"./navigation-right-arrow-9X3lJ24P.js";import"./navigation-right-arrow-Ch2GBoCa.js";import"./useCurrentTheme-DFuvxmk_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DHucAflH.js";import"./debounce-D7W5PopO.js";import"./index-DT2P5I7N.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
