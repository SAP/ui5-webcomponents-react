import{j as t}from"./iframe-7wbn2r8t.js";import{useMDXComponents as i}from"./index-9iabKYe6.js";import{I as n,F as m}from"./CommandsAndQueries-ByqqJAkO.js";import{M as p,C as s}from"./blocks-DhPDsuAg.js";import"./Tag-B4Xu1fg_.js";import"./index-BbDQ_pma.js";import"./copy-BfB9wT2Y.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bdiu9tfa.js";import"./preload-helper-D9Z9MdNV.js";import"./index--oRJYcmq.js";import"./index-s9oyD4rV.js";import"./index-BXziIIti.js";import"./Link-CMqhXbfj.js";import"./addCustomCSSWithScoping-DOSmtfkU.js";import"./index-BcN9ZXV0.js";import"./index-B507ER4a.js";import"./index-DZM58baw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_u8Wshbe.js";import"./index-C5gTJ--F.js";import"./information-C3oesKbG.js";import"./sys-enter-2-5KLli2cX.js";import"./alert-BzwIc2o-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BnpF3OjW.js";import"./delete-Ctx4N0z9.js";import"./settings-4HzKKwXX.js";import"./NoData-BGxQDSSr.js";import"./IllustratedMessage-BveZRVBp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-zGaMdUH3.js";import"./index-CiCpUwzE.js";import"./slim-arrow-down-C49SaQEq.js";import"./Input-Sgf07TzX.js";import"./ResponsivePopoverCommon.css-C1IHs2uD.js";import"./ValueStateMessage.css-CaopdH9_.js";import"./Suggestions.css-DMTVnUhn.js";import"./ListBoxItemGroupTemplate-Cb4Xv0to.js";import"./ComboBoxItemGroup-BWtkqgMg.js";import"./ListItemBaseTemplate-D6zjfr9k.js";import"./Token-Cu1MDCvr.js";import"./ScrollEnablement-kUlDPclg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrLRAdo-.js";import"./ToggleButton-BWZvQxgb.js";import"./SuggestionItem-CQkQpe1M.js";import"./index-KzyioWg5.js";import"./Option-De8jxf-d.js";import"./index-CpHbzBAu.js";import"./SegmentedButton-DKw5tI_q.js";import"./index-B-j5vbZe.js";import"./Select-BNT7lrvG.js";import"./InvisibleMessage-TncjdQHo.js";import"./slim-arrow-down-OAr_tlQh.js";import"./useIsRTL-nMUuowmY.js";import"./index-DSDAeY17.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BukLYmJB.js";import"./group-2-CHK1-mKL.js";import"./sort-descending-ChAbIeqL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gSj6aK_G.js";import"./utils-BN-TBOgu.js";import"./index-DiRW6kuR.js";import"./index-BATSsTSG.js";import"./index-CYxXsDl5.js";import"./navigation-down-arrow-K_Q8K4Ef.js";import"./navigation-right-arrow-DESaq310.js";import"./navigation-right-arrow-BqhA1WvG.js";import"./useCurrentTheme-B4pThhTq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B2zVBKfY.js";import"./debounce-D7W5PopO.js";import"./paper-plane-Ci72_7Om.js";import"./index-ChzhF-e0.js";import"./less-CTlI8kUp.js";import"./index-BW3VTEXK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
