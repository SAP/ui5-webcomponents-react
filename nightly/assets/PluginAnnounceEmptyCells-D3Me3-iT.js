import{j as t}from"./iframe-ir6pYnmz.js";import{useMDXComponents as i}from"./index-41o0Td7A.js";import{I as n,F as m}from"./CommandsAndQueries-b6zt1eWd.js";import{M as p,C as s}from"./blocks-D_tGmZuN.js";import"./Tag-DRGeWEus.js";import"./index-e4AcpL9G.js";import"./copy-BlUsduAp.js";import{P as a}from"./AnalyticalTableHooks.stories-BgNDbnYG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./index-BbtZuvgL.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwMJwtSz.js";import"./delete-CmyvenUA.js";import"./settings-Bl6bQc6H.js";import"./NoData-DxhmC_91.js";import"./IllustratedMessage-BTBpKBnW.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-sllTisPT.js";import"./index-Chn6LRAy.js";import"./slim-arrow-down-DIhPSUlE.js";import"./Input-CT2v4mLF.js";import"./ResponsivePopoverCommon.css-CAhax-LW.js";import"./ValueStateMessage.css-DXEXnL2N.js";import"./Suggestions.css-DVkCnc2y.js";import"./ListBoxItemGroupTemplate-BxUFdl0w.js";import"./ComboBoxItemGroup-CdScSe_V.js";import"./ListItemBaseTemplate-GBw0Nk1X.js";import"./Token-B1N_8NmE.js";import"./ScrollEnablement-DaGY4Jm-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CDRG7U85.js";import"./ToggleButton-f5GCJkmp.js";import"./SuggestionItem-CuzhU48j.js";import"./index-DZ8NIWLE.js";import"./Option-CT-dyvBc.js";import"./index-aBA0PLh-.js";import"./SegmentedButton-C6EyhWUa.js";import"./index-CXc2Eu8C.js";import"./Select-De9RNiJH.js";import"./InvisibleMessage-q2TaioBA.js";import"./slim-arrow-down-DtlJr3sY.js";import"./useIsRTL-Da2zSY1x.js";import"./index-DAsbl867.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPo0n3ee.js";import"./group-2-MQdYi-0x.js";import"./sort-descending-D2xxVNEk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BvZ0UPF0.js";import"./utils-D-cGwZG0.js";import"./index-hBVsNMVz.js";import"./index-C1scF0QK.js";import"./index-aiDUSRvd.js";import"./navigation-down-arrow-Cwg074OW.js";import"./navigation-right-arrow-IPve_ban.js";import"./navigation-right-arrow-vWKMw0EP.js";import"./useCurrentTheme-DTjaKwLS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-WEKLa-kK.js";import"./debounce-D7W5PopO.js";import"./index-1jK9MjSz.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
