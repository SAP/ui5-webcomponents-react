import{j as t}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as i}from"./index-CniPTHSz.js";import{I as n,F as m}from"./CommandsAndQueries-CtCNZgsU.js";import{M as p,C as s}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import"./copy-BNU1F6ls.js";import{P as a}from"./AnalyticalTableHooks.stories-BVqhJ6mi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index--Vew3hXz.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DD8g5bnM.js";import"./delete-D6-35YwG.js";import"./settings-DBoXREAT.js";import"./NoData-gZ1fjVVl.js";import"./IllustratedMessage-CFTGdX3g.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DGOgRaLa.js";import"./index-Ce-nCryE.js";import"./slim-arrow-down-BTcmIAZo.js";import"./Input-nQkDkpMo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Suggestions.css-ByBItAub.js";import"./ListBoxItemGroupTemplate-CDWy6Nub.js";import"./ComboBoxItemGroup-CCYywqPo.js";import"./ListItemBaseTemplate-DRr4zk5s.js";import"./Token-BwRrxMD7.js";import"./ScrollEnablement-BN7kIMtj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cIFVz4xB.js";import"./ToggleButton-chqvRgB_.js";import"./SuggestionItem-D841cpg4.js";import"./index-DfNHlgXD.js";import"./Option-BkfkZtHI.js";import"./index-Byascgrb.js";import"./SegmentedButton-DJu9oJAG.js";import"./index-BRkEXvtH.js";import"./Select-BBPMsUok.js";import"./InvisibleMessage-D-XldCbn.js";import"./slim-arrow-down-R4lWeZmU.js";import"./useIsRTL-BMHeZ9la.js";import"./index-r-PAOf5B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCyfWB89.js";import"./group-2-FFZDiPuh.js";import"./sort-descending--GyeITCg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgN_-xrJ.js";import"./utils-NBX3VAhS.js";import"./index-D-zHAvS6.js";import"./index-Bq4yDwlr.js";import"./index-Cz2QpzuG.js";import"./navigation-down-arrow-B-0Rh6AW.js";import"./navigation-right-arrow-BhFnHVa_.js";import"./navigation-right-arrow-JqBI6C2o.js";import"./useCurrentTheme-CVug1619.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CxpTF53y.js";import"./debounce-D7W5PopO.js";import"./index-C8rUm7Lp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
