import{j as t}from"./iframe-BbyAdBbD.js";import{useMDXComponents as i}from"./index-DMrgLDcS.js";import{I as n,F as m}from"./CommandsAndQueries-DIG7kTa0.js";import{M as p,C as s}from"./blocks-BmDzJ9zc.js";import"./Tag-DFDkNEbD.js";import"./index-BOJCW3Cn.js";import"./copy-BF7pXxeM.js";import{P as a}from"./AnalyticalTableHooks.stories-DiCxz0vI.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8J3KSH2.js";import"./index-DoDw--JI.js";import"./index-B0_PQF5c.js";import"./Link-Dyaix8DR.js";import"./addCustomCSSWithScoping-C5eZLuHk.js";import"./index-CzGjDUib.js";import"./index-uwT0wEXF.js";import"./index-DOb7Y-7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPnL0edq.js";import"./index-B8lW2Kcg.js";import"./information-DKaoIqMf.js";import"./sys-enter-2-CKPkjpqY.js";import"./alert-D9XuLZDQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BSAnNVf9.js";import"./delete-BLpFcH48.js";import"./settings-5TLja6i2.js";import"./NoData-HPmKGd38.js";import"./IllustratedMessage-B647nMwC.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DvSWxm92.js";import"./index-BlUZkyup.js";import"./slim-arrow-down-B5KGIjFP.js";import"./Input-vhH4RVxo.js";import"./ResponsivePopoverCommon.css-DuxFKCqv.js";import"./ValueStateMessage.css-C-AtYoGH.js";import"./Suggestions.css-CqkZUpZv.js";import"./ListBoxItemGroupTemplate-BrOkgLPi.js";import"./ComboBoxItemGroup-Cb5cZxlO.js";import"./ListItemBaseTemplate-DKaA7HpC.js";import"./Token-DxGHBcxh.js";import"./ScrollEnablement-DpfeP5CM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSYeusiR.js";import"./ToggleButton-OcC6jLG_.js";import"./SuggestionItem-D3io2X0o.js";import"./index-BDvgDUVK.js";import"./Option-CEiySMCJ.js";import"./index-N78PTm1P.js";import"./SegmentedButton-D9XZlGT9.js";import"./index-Bp7YlL8u.js";import"./Select-DbKIwfyt.js";import"./InvisibleMessage-D6n4ORIu.js";import"./slim-arrow-down-Cx1RPm1s.js";import"./useIsRTL-9zlLmWw2.js";import"./index-Ck_-4Rju.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BEC6BIlW.js";import"./group-2-CwXrvgUo.js";import"./sort-descending-DaWJ7kHb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B7ejrIsS.js";import"./utils-CCpDXmdD.js";import"./index-C54FjhOM.js";import"./index-BeMay_ho.js";import"./index-CcGMgt3M.js";import"./navigation-down-arrow-BCp3Wl54.js";import"./navigation-right-arrow-BaJ0uUCw.js";import"./navigation-right-arrow-CK5GhfeV.js";import"./useCurrentTheme-DrzZpmta.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CyWS8VSF.js";import"./debounce-D7W5PopO.js";import"./index-D2LrbRwm.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
