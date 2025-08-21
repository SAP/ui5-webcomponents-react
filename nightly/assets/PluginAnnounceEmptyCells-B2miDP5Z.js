import{j as t}from"./iframe-Ds_ksB4e.js";import{useMDXComponents as i}from"./index-H-IHaXTw.js";import{I as n,F as m}from"./CommandsAndQueries-sjInqy8W.js";import{M as p,C as s}from"./blocks-BF1agP19.js";import"./Tag-CPZT7-Kj.js";import"./index-CCQ7ngcv.js";import"./copy-CiclUpSF.js";import{P as a}from"./AnalyticalTableHooks.stories-Bbj63fPg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C9iUZPx4.js";import"./index-Cz-9QImp.js";import"./index-CCxnn_jg.js";import"./Link-B7c1MguO.js";import"./addCustomCSSWithScoping-C1wNASBp.js";import"./index-BeCgQ8PU.js";import"./index-De0nbQnW.js";import"./index-D0B9W_Us.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1VftYSW.js";import"./index-BveKVBSZ.js";import"./information-CXQdNqP2.js";import"./sys-enter-2-DgaAD1QG.js";import"./alert-D9-5boQa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkG8ch4e.js";import"./delete-D-CptolG.js";import"./settings-DsdB8amV.js";import"./NoData-CycqaSBL.js";import"./IllustratedMessage-mf04Djfm.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BUNN-ICN.js";import"./index-Bx8mdV5O.js";import"./slim-arrow-down-CRXpe6Ep.js";import"./Input-DMPtPI9x.js";import"./ResponsivePopoverCommon.css-CtrWfz2O.js";import"./ValueStateMessage.css-BtWaD65M.js";import"./Suggestions.css-Q3AZmBnp.js";import"./ListBoxItemGroupTemplate-CKym2Ygo.js";import"./ComboBoxItemGroup-iotqfyD_.js";import"./ListItemBaseTemplate-96T6tg0F.js";import"./Token-DQQbOMYd.js";import"./ScrollEnablement-C0SuwG25.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D3h_gJ31.js";import"./ToggleButton-PI5U-ZoN.js";import"./SuggestionItem-DHI1wIyF.js";import"./index-lRvGXhml.js";import"./Option-Cqjn101Z.js";import"./index-Wc-K1B_I.js";import"./SegmentedButton-BBQFuekG.js";import"./index-ByWKjneJ.js";import"./Select-CXmdf2be.js";import"./InvisibleMessage-CXx3GcZn.js";import"./slim-arrow-down-dtTq_dH6.js";import"./useIsRTL-Bze9sg1S.js";import"./index-DNS596Mv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClVKOKk0.js";import"./group-2-CzyXSt2z.js";import"./sort-descending-C_tcN0CL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rWO-sYYc.js";import"./utils-ChsTRdXp.js";import"./index-pDSMu31p.js";import"./index-1yLLdqoU.js";import"./index-p-B7Vzdn.js";import"./navigation-down-arrow-DYjrbitC.js";import"./navigation-right-arrow-DdsJzFAD.js";import"./navigation-right-arrow-C-oKg6Gq.js";import"./useCurrentTheme-DaAuIVD-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gtuVuggN.js";import"./debounce-D7W5PopO.js";import"./index-bapsQHju.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
