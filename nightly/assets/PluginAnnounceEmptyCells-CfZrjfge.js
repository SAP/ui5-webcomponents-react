import{j as t}from"./iframe-Y9u60a80.js";import{useMDXComponents as i}from"./index-Bori-Nod.js";import{I as n,F as m}from"./CommandsAndQueries-eYIoXNgT.js";import{M as p,C as s}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import"./copy-DwFBIccM.js";import{P as a}from"./AnalyticalTableHooks.stories-DG0Cab0_.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-BUCogs4k.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-n_bZVIMN.js";import"./delete-D7VV6RVa.js";import"./settings-DuH9YHsU.js";import"./NoData-Dt2C1ctw.js";import"./IllustratedMessage-B_bMLEpB.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CPL75eXp.js";import"./index-BjMGLplX.js";import"./slim-arrow-down-DgUPWIGP.js";import"./Input-7QH9qgg3.js";import"./ResponsivePopoverCommon.css-DKPC5jE6.js";import"./ValueStateMessage.css-DF0riTEq.js";import"./Suggestions.css-BCVBy9X3.js";import"./ListBoxItemGroupTemplate-B2XwDE9U.js";import"./ComboBoxItemGroup-C0ZFcNFo.js";import"./ListItemBaseTemplate-DN-V_XKe.js";import"./Token-4uwHlG5Q.js";import"./ScrollEnablement-CsQtNunN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKYvsgaA.js";import"./ToggleButton-CU_sGI38.js";import"./SuggestionItem-2EsYX1iM.js";import"./index-ZbsU_3Br.js";import"./Option-CbMG_PHq.js";import"./index-CdSvCjtG.js";import"./SegmentedButton-CUUTUqtu.js";import"./index-BBgzzW3H.js";import"./Select-B8fRwNK8.js";import"./InvisibleMessage-BM3r9VIb.js";import"./slim-arrow-down-Bigp3gAZ.js";import"./useIsRTL-CBPcn2dq.js";import"./index-CItqJ0md.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHOvAqJQ.js";import"./group-2-BKGinyfK.js";import"./sort-descending-22aJyVyy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BsXyS7WM.js";import"./utils-CaJ_VxIi.js";import"./index-DNNFbTMo.js";import"./index-BQaEG-SS.js";import"./index-DqWK6Liw.js";import"./navigation-down-arrow-DDHDR9P7.js";import"./navigation-right-arrow-CXqjHb3o.js";import"./navigation-right-arrow-B-22KRcY.js";import"./useCurrentTheme-BUeXoGU1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-rKlXois0.js";import"./debounce-D7W5PopO.js";import"./index-BFX043nL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
