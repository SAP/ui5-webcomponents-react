import{j as t}from"./iframe-C-EBr6B5.js";import{useMDXComponents as i}from"./index-CsHoO3vp.js";import{I as n,F as m}from"./CommandsAndQueries-uIAr-det.js";import{M as p,C as s}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import"./index-w0Ow44Ci.js";import"./i18n-DCXZOGva.js";import"./copy-u5h8VvvF.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CDszC7uY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./index-DPNnv8Bc.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNDB_VXd.js";import"./delete-BvdG4V2u.js";import"./settings-B9da7Cna.js";import"./NoData-Bas3NaNU.js";import"./IllustratedMessage-D13zaZV5.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ccf_YzUR.js";import"./index-BQ5w9LDa.js";import"./slim-arrow-down-BKqJdj1T.js";import"./Input-Ds_HDP4O.js";import"./ResponsivePopoverCommon.css-CDBYINKk.js";import"./ValueStateMessage.css-B0uL2WsG.js";import"./Suggestions.css-B3PqFbjl.js";import"./ListBoxItemGroupTemplate-Bgmdm98P.js";import"./ComboBoxItemGroup-BwZX_rcF.js";import"./ListItemBaseTemplate-DJJcj1Yn.js";import"./Token-BBpcnF43.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DX4UvhQJ.js";import"./ToggleButton-BFDFB0sm.js";import"./SuggestionItem-6ARptsb6.js";import"./index-C4mGZgek.js";import"./Option-CuwMUGFB.js";import"./index-Dc87r9fg.js";import"./SegmentedButton-Brturu3l.js";import"./index-C96_EYB_.js";import"./Select-CKUn7KVG.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-B8bLmGYi.js";import"./useIsRTL-DGcoN34w.js";import"./index-BIxje1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6YASDbP.js";import"./group-2-BAcCCF5C.js";import"./sort-descending-ClNXTwB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnrGkxIO.js";import"./utils-B-nKspCA.js";import"./index-C2uJtNkV.js";import"./index-B2hA18x8.js";import"./index-CDeu0SSK.js";import"./navigation-down-arrow-BhSnyc1Q.js";import"./navigation-right-arrow-t2mKxsw7.js";import"./navigation-right-arrow-JtMK9OsX.js";import"./useCurrentTheme-DANdzbsK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWVlJWaR.js";import"./debounce-D7W5PopO.js";import"./paper-plane-C05qekUe.js";import"./index-DOZflY0X.js";import"./less-DrtzVZnk.js";import"./index-DTEtvo1o.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
