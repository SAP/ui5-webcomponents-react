import{j as t}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as i}from"./index-DKEbDWFi.js";import{I as n,F as m}from"./CommandsAndQueries-c2dxMxjd.js";import{M as p,C as s}from"./blocks-C_ShsaTX.js";import"./Tag-B5i1kgB9.js";import"./index-DayVNiXE.js";import"./copy-BzQS_3Hx.js";import{P as a}from"./AnalyticalTableHooks.stories-Dhea2jta.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./index-DViW7Jtd.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BmeHBhTp.js";import"./delete-F09gA5Dh.js";import"./settings-BhGhHhJN.js";import"./NoData-D-hPe5Jl.js";import"./IllustratedMessage-DelxCU65.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-wls3tLIi.js";import"./index-YzpO1bI2.js";import"./slim-arrow-down-C2uRcD-I.js";import"./Input-cbgRVmBC.js";import"./ResponsivePopoverCommon.css-CsqmHnJg.js";import"./ValueStateMessage.css-BFdD6J-X.js";import"./Suggestions.css-Dlsv1RCW.js";import"./ListBoxItemGroupTemplate-BDkvDoJY.js";import"./ComboBoxItemGroup-BRZjTBQb.js";import"./ListItemBaseTemplate-YmJtdlBv.js";import"./Token-CxbDlSxT.js";import"./ScrollEnablement-Cg1kRRvV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcSpEqks.js";import"./ToggleButton-CPYcC8DT.js";import"./SuggestionItem-DZHEZgAV.js";import"./index-CRZygywU.js";import"./Option-CCwPNrFZ.js";import"./index-VX_m7H3h.js";import"./SegmentedButton-BWyd7qOx.js";import"./index-BVjgfLW4.js";import"./Select-D34ayOJd.js";import"./InvisibleMessage-BjdIRmAn.js";import"./slim-arrow-down-Bf-F8L6C.js";import"./useIsRTL-DzghZux-.js";import"./index-BqrSjPk3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C_kmjLm2.js";import"./group-2-BsbnQxFh.js";import"./sort-descending-Bq0m3INq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vwwP5RPb.js";import"./utils-DqMkz1_p.js";import"./index-DdbxcY2R.js";import"./index-BggI8XJY.js";import"./index-DN48Kmch.js";import"./navigation-down-arrow-DmtRZyiD.js";import"./navigation-right-arrow-CBj7BSte.js";import"./navigation-right-arrow-DqhSR76c.js";import"./useCurrentTheme--DIDrK0s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DduCQwPa.js";import"./debounce-D7W5PopO.js";import"./index-CHuQc1t9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
