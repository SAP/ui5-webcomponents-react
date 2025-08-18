import{j as t}from"./iframe-D1CS9P6r.js";import{useMDXComponents as i}from"./index-DKS5TQ2O.js";import{I as n,F as m}from"./CommandsAndQueries-D0Ldf7j-.js";import{M as p,C as s}from"./blocks-MP9p7uJf.js";import"./Tag-r4fVuSPw.js";import"./index-C59Ra6n3.js";import"./copy-BXLeuYzA.js";import{P as a}from"./AnalyticalTableHooks.stories-CQWW4QXL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYGl8AOq.js";import"./index-ChylkqIr.js";import"./index-DHqmSgZq.js";import"./Link-Q9DSvFtD.js";import"./addCustomCSSWithScoping-Djl5XvUO.js";import"./index--uuuPK6U.js";import"./index-B4Hl6Eco.js";import"./index-KmWwkr3l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CUZwPhW2.js";import"./index-CyljgwzW.js";import"./information-BCqqCqDW.js";import"./sys-enter-2-JjIQxhse.js";import"./alert-DkFxMsXD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqCOwuqV.js";import"./delete-iGAeC_St.js";import"./settings-Jpzz7dQg.js";import"./NoData-DzMAoC6c.js";import"./IllustratedMessage-q4ufoprM.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BkPbbsM6.js";import"./index-BFXusJ8y.js";import"./slim-arrow-down-Cm1u6CO7.js";import"./Input-BhDETh0z.js";import"./ResponsivePopoverCommon.css-Cpf4pg7D.js";import"./ValueStateMessage.css-BJKQtiUN.js";import"./Suggestions.css-Bt6O6fMa.js";import"./ListBoxItemGroupTemplate-BeK7EHkp.js";import"./ComboBoxItemGroup-BCAfoMA4.js";import"./ListItemBaseTemplate-eMuZcgjS.js";import"./Token-DHh_XbjI.js";import"./ScrollEnablement-B8q0SaPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DceIYdr9.js";import"./ToggleButton-CkBC2tPN.js";import"./SuggestionItem-BB5SRH7J.js";import"./index-B32Z0t0a.js";import"./Option-Cn_5WxRP.js";import"./index-Dr0lxBdS.js";import"./SegmentedButton-BPcNDSX6.js";import"./index-B3d1v8UT.js";import"./Select-Cj_Q1k0q.js";import"./InvisibleMessage-D_NgDQng.js";import"./slim-arrow-down-dsGvQlwn.js";import"./useIsRTL-DcXN3FqO.js";import"./index-CkRW9lNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2F3GBFF.js";import"./group-2-rVcZSb_S.js";import"./sort-descending-Dt0pCRMN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9VlWRE3.js";import"./utils-B4q_d1dY.js";import"./index-BNFSEfAV.js";import"./index-CcM6dXm8.js";import"./index-DTQcqPnD.js";import"./navigation-down-arrow-JDYRYXcR.js";import"./navigation-right-arrow-BM1vJgO7.js";import"./navigation-right-arrow-C8xREl7p.js";import"./useCurrentTheme-CGtbEiS2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C0BMIUOH.js";import"./debounce-D7W5PopO.js";import"./index-B8E4SwED.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
