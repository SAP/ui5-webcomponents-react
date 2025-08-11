import{j as t}from"./iframe-C5HYk_w9.js";import{useMDXComponents as i}from"./index-NAtY6U9A.js";import{I as n,F as m}from"./CommandsAndQueries-D55ZIYIG.js";import{M as p,C as s}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import"./copy-C5SWnutv.js";import{P as a}from"./AnalyticalTableHooks.stories-DueYgjic.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./index-BrZnxm7s.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_d91-3q.js";import"./delete-CqDfwzpc.js";import"./settings-BPCUWV46.js";import"./NoData-CxhWn9wv.js";import"./IllustratedMessage-GH5yVttf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-87C3bAgH.js";import"./index-C2VnV4iR.js";import"./slim-arrow-down-CBehnyc2.js";import"./Input-BdwJJtVE.js";import"./ResponsivePopoverCommon.css-C8yEY6IR.js";import"./ValueStateMessage.css-D4-kWGJF.js";import"./Suggestions.css-Dsm1Odvr.js";import"./ListBoxItemGroupTemplate-BAGrLMDa.js";import"./ComboBoxItemGroup-B5cWhmOZ.js";import"./ListItemBaseTemplate-BHoAE_XK.js";import"./Token-CXT3NtiV.js";import"./ScrollEnablement-BPWQH0lq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R3eedhiG.js";import"./ToggleButton-CBUGjNrV.js";import"./SuggestionItem-CBNk3s7_.js";import"./index-0bLmG4nf.js";import"./Option-c-UVfgap.js";import"./index-1EEehj_F.js";import"./SegmentedButton-DQlrC5-R.js";import"./index-OLntaare.js";import"./Select-SEMtVca9.js";import"./InvisibleMessage-BmEFxMXz.js";import"./slim-arrow-down-CWrkxAdp.js";import"./useIsRTL-BqnKZ734.js";import"./index-CqHxCzDj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VAgj8Sfy.js";import"./group-2-BU6GeVHz.js";import"./sort-descending-CBjoWotJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-BDUto2bG.js";import"./utils-DHsQ_nK5.js";import"./index-DH8PPPSy.js";import"./index-DcqsX-Je.js";import"./index-BNbfz9XF.js";import"./navigation-down-arrow-hy_35llr.js";import"./navigation-right-arrow-ElURueQj.js";import"./navigation-right-arrow-czcZqh9Y.js";import"./useCurrentTheme-BOXRzM9h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YsMTI0nj.js";import"./debounce-D7W5PopO.js";import"./index-CIvIyHMC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
