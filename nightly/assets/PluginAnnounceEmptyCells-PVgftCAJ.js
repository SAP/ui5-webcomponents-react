import{j as t}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as i}from"./index-DO7eBN2z.js";import{I as n,F as m}from"./CommandsAndQueries-5z2JhX-x.js";import{M as p,C as s}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import"./copy-DM6AHN8T.js";import{P as a}from"./AnalyticalTableHooks.stories-CIgjSOik.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./index-C7Xj3GeW.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqJrgc-x.js";import"./delete-CUXM36Gm.js";import"./settings-g1NOXTFX.js";import"./NoData-BfSz2Jb4.js";import"./IllustratedMessage-Bo2-9Wgw.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1TM8C73E.js";import"./index-DXcpIB8q.js";import"./slim-arrow-down-lM8f-Uz6.js";import"./Input-D5iz8gVF.js";import"./ResponsivePopoverCommon.css-BfjHIntt.js";import"./ValueStateMessage.css-BrUNqWph.js";import"./Suggestions.css-C4ig1fd6.js";import"./ListBoxItemGroupTemplate-DxlwIkTb.js";import"./ComboBoxItemGroup-zSoS-Ov_.js";import"./ListItemBaseTemplate-CAugTCWT.js";import"./Token-D49MTHA_.js";import"./ScrollEnablement-DMp5qR-R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6LGiTVa.js";import"./ToggleButton-BLZC0g81.js";import"./SuggestionItem-92M1Ikia.js";import"./index-Br4cY6Qw.js";import"./Option-DI25J3kC.js";import"./index-BbuGn4PW.js";import"./SegmentedButton-FzhhcgQ0.js";import"./index-BWFbO-Lg.js";import"./Select-Iz40cZG_.js";import"./InvisibleMessage-CU9-lL93.js";import"./slim-arrow-down-2towEIQe.js";import"./useIsRTL-C1trBNR6.js";import"./index-BX3qDpDF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CawSky8K.js";import"./group-2-dpD3se9c.js";import"./sort-descending-Dmsih093.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGtZMLio.js";import"./utils-BhcSyhLQ.js";import"./index-DFx_hLRP.js";import"./index-BGOVEiSw.js";import"./index-ChMRRx5d.js";import"./navigation-down-arrow-BiDKnIlg.js";import"./navigation-right-arrow-AjROisR1.js";import"./navigation-right-arrow-Cn7J3EaV.js";import"./useCurrentTheme-CfVTJDKN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CgTw5VBS.js";import"./debounce-D7W5PopO.js";import"./index-DvTGRhis.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
