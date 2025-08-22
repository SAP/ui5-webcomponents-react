import{j as t}from"./iframe-B9d6tunA.js";import{useMDXComponents as i}from"./index-CHHTqEt5.js";import{I as n,F as m}from"./CommandsAndQueries-Dbama0_5.js";import{M as p,C as s}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import"./copy-DBcroaPr.js";import{P as a}from"./AnalyticalTableHooks.stories-BYRkhAc9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";import"./index-bjg2761A.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8Cs0Me0.js";import"./delete-CeJU5A6H.js";import"./settings-CnwemJH0.js";import"./NoData-B9Ct3Bte.js";import"./IllustratedMessage-B9S7zPJ2.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BfBfDvss.js";import"./index-CIA13LwP.js";import"./slim-arrow-down-D05V1lot.js";import"./Input-BXjsXSc_.js";import"./ResponsivePopoverCommon.css-BlZ9FToc.js";import"./ValueStateMessage.css-CAd1FQ11.js";import"./Suggestions.css-D8AOIxab.js";import"./ListBoxItemGroupTemplate-Bhrbrnfy.js";import"./ComboBoxItemGroup-2CqGaLQ_.js";import"./ListItemBaseTemplate-CHOAwn4O.js";import"./Token-BhjIixy1.js";import"./ScrollEnablement-DMZ5Ege9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B98qKKlT.js";import"./ToggleButton-D2X4-nFe.js";import"./SuggestionItem-BqBkM0aO.js";import"./index-mMW_G7sz.js";import"./Option-BETBD_j4.js";import"./index-Dq8WXUVt.js";import"./SegmentedButton-B6qsgUfN.js";import"./index-DQgYfch-.js";import"./Select-B8g_Zr6U.js";import"./InvisibleMessage-CZwz5JoO.js";import"./slim-arrow-down-D_fYxlqY.js";import"./useIsRTL-DOJ0Jr_3.js";import"./index-DFOOm17j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DifKOfuY.js";import"./group-2-BVw5lsTv.js";import"./sort-descending-CF7x_zfl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAVaOe.js";import"./utils-Cz3NQMid.js";import"./index-CY8hMSGY.js";import"./index-4dyeEyUB.js";import"./index-Dn5LrzbR.js";import"./navigation-down-arrow-CYkXcjUC.js";import"./navigation-right-arrow-BReQAbGx.js";import"./navigation-right-arrow-DQZi3Hf6.js";import"./useCurrentTheme-CezBWnYs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BunxPUB3.js";import"./debounce-D7W5PopO.js";import"./index-BzaLULpj.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
