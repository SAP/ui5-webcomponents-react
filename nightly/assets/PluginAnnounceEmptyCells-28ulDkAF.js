import{j as t}from"./iframe-Brl1VNXv.js";import{useMDXComponents as i}from"./index-lkEyU_nt.js";import{I as n,F as m}from"./CommandsAndQueries-Dk6rSuK-.js";import{M as p,C as s}from"./blocks-BAqV5WPc.js";import"./Tag-CPqPqrcS.js";import"./index-BqPTl_TF.js";import"./copy-3T1gBUKn.js";import{P as a}from"./AnalyticalTableHooks.stories-DoORN7PF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-cvNk3Ydm.js";import"./index-BAyaq3AZ.js";import"./index-665xf7Lj.js";import"./Link-R6QwvZvg.js";import"./addCustomCSSWithScoping-2pXmrNrJ.js";import"./index-CIiYxA_R.js";import"./index-CQN5QiqO.js";import"./index-BSJzWAI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BAdmvlBz.js";import"./index-_G4y7meT.js";import"./information-BqiTraiu.js";import"./sys-enter-2-Br-uV94n.js";import"./alert-DWDpknyG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWxguO42.js";import"./delete-C1TIoMlj.js";import"./settings-D4ON83w0.js";import"./NoData-DG0JaC6_.js";import"./IllustratedMessage-DFVXGXCi.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cnkp96WC.js";import"./index-CHolLt5w.js";import"./slim-arrow-down-CagLPUnU.js";import"./Input-udPVo4mc.js";import"./ResponsivePopoverCommon.css-D3Hv3Gxc.js";import"./ValueStateMessage.css-Bf2NqEEl.js";import"./Suggestions.css-PGPc3R_W.js";import"./ListBoxItemGroupTemplate-D-vUij60.js";import"./ComboBoxItemGroup-Cj2VhANu.js";import"./ListItemBaseTemplate-DqFXL3dn.js";import"./Token-BRypdmfh.js";import"./ScrollEnablement-vXxL4r_i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0gp9kpIG.js";import"./ToggleButton-Cj_pSwfJ.js";import"./SuggestionItem-eIYipz3n.js";import"./index-B120lRj9.js";import"./Option-ydTn3SF0.js";import"./index-ByUOmVwt.js";import"./SegmentedButton-B-E_kZVa.js";import"./index-DHHzjK6O.js";import"./Select-DPAi3Ppf.js";import"./InvisibleMessage-CyHbLI8k.js";import"./slim-arrow-down-BcVEw-DR.js";import"./useIsRTL-BIUxlTgz.js";import"./index-DJDgDtmd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaykPM6n.js";import"./group-2-BE1KJkJu.js";import"./sort-descending-DtT3nEOM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DR49-Cmt.js";import"./utils-hwxV1HAU.js";import"./index-C6euIQDK.js";import"./index-LOLgjMOa.js";import"./index-C6yhMq4f.js";import"./navigation-down-arrow-CFW-H7FC.js";import"./navigation-right-arrow-Cmd9UH9N.js";import"./navigation-right-arrow-BoSQuLX4.js";import"./useCurrentTheme-CytE6E3p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-XBV3ZP6e.js";import"./debounce-D7W5PopO.js";import"./index-dtCeEGgw.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
