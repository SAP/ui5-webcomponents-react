import{j as t}from"./iframe-Cmm295l6.js";import{useMDXComponents as i}from"./index-BXOSXmsP.js";import{I as n,F as m}from"./CommandsAndQueries-BP_0RozZ.js";import{M as p,C as s}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import"./copy-D4RoINZh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-dvFW3tl2.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./index-B2P7pH2V.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BOW3byXA.js";import"./delete-BpJ7jMu4.js";import"./settings-DfuIK5Du.js";import"./NoData-B9fBQ-2X.js";import"./IllustratedMessage-DMoUKb2N.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DyS6OgFp.js";import"./index-D9-J-CUh.js";import"./slim-arrow-down-BPs-5Hw-.js";import"./Input-CKOQVRzo.js";import"./ResponsivePopoverCommon.css-CuPlJ6XL.js";import"./ValueStateMessage.css-CpF9zfZB.js";import"./Suggestions.css-URl81ueP.js";import"./ListBoxItemGroupTemplate-BE6yQGK-.js";import"./ComboBoxItemGroup-ZNf2Vk0l.js";import"./ListItemBaseTemplate-CToCzb2R.js";import"./Token-DKJgf7x_.js";import"./ScrollEnablement-BWqjOtqg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSk0UJEE.js";import"./ToggleButton-zP3wC5RY.js";import"./SuggestionItem-Ct7jePU3.js";import"./index-Dpgfdfru.js";import"./Option-CXrrCfUx.js";import"./index-Ws9shfnM.js";import"./SegmentedButton-DjidyPv_.js";import"./index-D9kRi0IC.js";import"./Select-DRZNQuJi.js";import"./InvisibleMessage-BUQae6f9.js";import"./slim-arrow-down-iUDTzeiV.js";import"./useIsRTL-CEwtxJyB.js";import"./index-BzcZFawy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqgfgZAq.js";import"./group-2-DGba-0Tt.js";import"./sort-descending-Cv9BhC3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DynqqBp0.js";import"./utils-CxbvwC5_.js";import"./index-CJAzT50r.js";import"./index-CggMFlL9.js";import"./index-DIyb4d_p.js";import"./navigation-down-arrow-C11LdM0-.js";import"./navigation-right-arrow-B54lSWMn.js";import"./navigation-right-arrow--DddG-Qx.js";import"./useCurrentTheme-Q0o_lrzg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YJpka7ZF.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DQu_UXSp.js";import"./index-DL20h0zh.js";import"./less-CttwOBtS.js";import"./index-BtYSUoXS.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
