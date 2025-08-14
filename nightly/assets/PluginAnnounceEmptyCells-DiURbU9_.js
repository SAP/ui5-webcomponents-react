import{j as t}from"./iframe-DrWv7kqk.js";import{useMDXComponents as i}from"./index-COfklbz7.js";import{I as n,F as m}from"./CommandsAndQueries-ChjYN9hd.js";import{M as p,C as s}from"./blocks-CanskeDB.js";import"./Tag-BpxYU6SX.js";import"./index-C2As05th.js";import"./copy-CdjvYQrK.js";import{P as a}from"./AnalyticalTableHooks.stories-CnJp7vsc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DNisCSrq.js";import"./index-BbYicUoT.js";import"./index-WYl7sJsX.js";import"./Link-BXBCrxeL.js";import"./addCustomCSSWithScoping-BHseblXn.js";import"./index-BObiMDAc.js";import"./index-BK7UTMeJ.js";import"./index-wUQSbSJP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHbcK7Ba.js";import"./index-DJ9rRFX2.js";import"./information-BlWxhQJP.js";import"./sys-enter-2-yLdXaTo2.js";import"./alert-D-b4CjR7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5_dIwBF.js";import"./delete-DGWWD-0M.js";import"./settings-uroI1SHr.js";import"./NoData-BgVa5JOE.js";import"./IllustratedMessage-C_P0VKyq.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BxKcZBZF.js";import"./index-c3XofLN-.js";import"./slim-arrow-down-y4onL6ln.js";import"./Input-C_5q9_az.js";import"./ResponsivePopoverCommon.css-D-NNNw7j.js";import"./ValueStateMessage.css-B0vfJtfY.js";import"./Suggestions.css-C2ZIvTf-.js";import"./ListBoxItemGroupTemplate-zsNoICuE.js";import"./ComboBoxItemGroup-CeeS4fDE.js";import"./ListItemBaseTemplate-BLP_ZL8i.js";import"./Token-D0IgVyFO.js";import"./ScrollEnablement-yOUkUvJ6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DThva79L.js";import"./ToggleButton-DEHdTx38.js";import"./SuggestionItem-DKn3SbjY.js";import"./index-DTmtyUb2.js";import"./Option-DaChME3c.js";import"./index-2qE_INpy.js";import"./SegmentedButton-DrvmVaQv.js";import"./index-Dfk_-AT2.js";import"./Select-BC5JSduM.js";import"./InvisibleMessage-AMXG7yy6.js";import"./slim-arrow-down-CTlrm5_E.js";import"./useIsRTL-XwDO1usx.js";import"./index-3r57QoEB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4dwn6g9.js";import"./group-2-BKV6ywji.js";import"./sort-descending-_QmakTRe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9mrtC8Rr.js";import"./utils-Bx9oMGrL.js";import"./index-BXypK-HU.js";import"./index-CgKvkbcK.js";import"./index-xZd7WN2d.js";import"./navigation-down-arrow-D_XU2zOL.js";import"./navigation-right-arrow-3Y1kkBwG.js";import"./navigation-right-arrow-DbCp59vu.js";import"./useCurrentTheme-gchjG-U4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-3so-AfDQ.js";import"./debounce-D7W5PopO.js";import"./index-_OTZPB8a.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
