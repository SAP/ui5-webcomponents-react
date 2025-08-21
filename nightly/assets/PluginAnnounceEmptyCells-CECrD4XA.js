import{j as t}from"./iframe-D9TrNBgU.js";import{useMDXComponents as i}from"./index-DVnXt3Ou.js";import{I as n,F as m}from"./CommandsAndQueries-D4YJbg3c.js";import{M as p,C as s}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import"./copy-DLBvKbOK.js";import{P as a}from"./AnalyticalTableHooks.stories-uNW8YLYL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./index-CVrKfxdZ.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBf_Dw_c.js";import"./delete-Dr-66tAO.js";import"./settings-CxnE-5K_.js";import"./NoData-DDrlL7pG.js";import"./IllustratedMessage-B2-LKJi7.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-I2HuK0dM.js";import"./index-D06Uv0Pi.js";import"./slim-arrow-down-C2JXuKwB.js";import"./Input-DQQyXJAT.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./ValueStateMessage.css-DHgdSKUd.js";import"./Suggestions.css-Bf6rrCOA.js";import"./ListBoxItemGroupTemplate-DU5UcquD.js";import"./ComboBoxItemGroup-vHrK_DQ4.js";import"./ListItemBaseTemplate-ZtPbHRna.js";import"./Token-Coz-0Psc.js";import"./ScrollEnablement-DyC328cf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbZzwl2a.js";import"./ToggleButton-DCiP1WbP.js";import"./SuggestionItem-D_ZaevX8.js";import"./index-CP_h3Gqr.js";import"./Option-DQLWMMud.js";import"./index-DkJeF1qi.js";import"./SegmentedButton-DfvTsqIq.js";import"./index-Cc7NpnLn.js";import"./Select-DHXu7QxQ.js";import"./InvisibleMessage-B7KEwtPS.js";import"./slim-arrow-down-CjNPHzOs.js";import"./useIsRTL-CQal8GpR.js";import"./index-BxxqrhiV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B8GbiaN7.js";import"./group-2-D57pi6NC.js";import"./sort-descending-B9mtYWvv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DahENrtL.js";import"./utils-CQ0T0LrZ.js";import"./index-CUBqq7rX.js";import"./index-CCqFcpHS.js";import"./index-BL5y2Z3x.js";import"./navigation-down-arrow-BKi4Bg3e.js";import"./navigation-right-arrow-DruaLpXf.js";import"./navigation-right-arrow-Aay7hZd4.js";import"./useCurrentTheme-D_A9Q4B2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CKCvg6SL.js";import"./debounce-D7W5PopO.js";import"./index-DsRCr8km.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
