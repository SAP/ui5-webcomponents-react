import{j as t}from"./iframe-DQlP_6Qv.js";import{useMDXComponents as i}from"./index-BXhipMBG.js";import{I as n,F as m}from"./CommandsAndQueries-CYuC6yI9.js";import{M as p,C as s}from"./blocks-B5a3gZGW.js";import"./Tag-BSiRJmHh.js";import"./index-DhT04Xs9.js";import"./copy-DA6pIWgW.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CQH8SH2V.js";import"./preload-helper-D9Z9MdNV.js";import"./index-hxdHCcXn.js";import"./index-6SE_GYer.js";import"./index-DztBgCxB.js";import"./Link-CIr5Lw-F.js";import"./addCustomCSSWithScoping-DaYz7Ef_.js";import"./index-5WDw669T.js";import"./index-s0msSqUd.js";import"./index-CAD4wHAa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-Sr5qI6.js";import"./index-DMuVL8ZX.js";import"./information-D9TZ110a.js";import"./sys-enter-2-DbOIPJDN.js";import"./alert-Boy3zLsV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg-36jCJ.js";import"./delete-CaVxvXJa.js";import"./settings-B1bN6gcG.js";import"./NoData-muKAeLMq.js";import"./IllustratedMessage-CYlCH6F8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B40cHQKs.js";import"./index-BK0EaxBy.js";import"./slim-arrow-down-CQHD_BrB.js";import"./Input-BsxLpfsK.js";import"./ResponsivePopoverCommon.css-DATz21Vs.js";import"./ValueStateMessage.css-CWvBG_nx.js";import"./Suggestions.css-BXPHU2eP.js";import"./ListBoxItemGroupTemplate-DZUU3Xv_.js";import"./ComboBoxItemGroup-73LiHIaA.js";import"./ListItemBaseTemplate-CTjAjayV.js";import"./Token-Z5IU-j9x.js";import"./ScrollEnablement-6VGfabhp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGwXcYIH.js";import"./ToggleButton-DlSwnN6b.js";import"./SuggestionItem-D1wzJv1s.js";import"./index-rC-K7l_B.js";import"./Option-BNwYbhXx.js";import"./index-DorD7nUV.js";import"./SegmentedButton-BBymgHch.js";import"./index-D7ZHlrhm.js";import"./Select-BMnD9RhX.js";import"./InvisibleMessage-DX5nnJX3.js";import"./slim-arrow-down-Cwx3eZbB.js";import"./useIsRTL-0JvlMTKu.js";import"./index-sbxtCj2e.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-UXJ6vS.js";import"./group-2-BDo86s0K.js";import"./sort-descending-_vLqc138.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxTyPwah.js";import"./utils-C-s4mjI-.js";import"./index-BXfFluxG.js";import"./index-CYRJoMmx.js";import"./index-ChezfNZe.js";import"./navigation-down-arrow-DArtWA0U.js";import"./navigation-right-arrow-BqiGYNmk.js";import"./navigation-right-arrow-BWmOXN6t.js";import"./useCurrentTheme-C89Am9JT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5gEQmBVM.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BjsxesMZ.js";import"./index-B7bck6f6.js";import"./less-I7yd6AVT.js";import"./index-BwUsRFpl.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
