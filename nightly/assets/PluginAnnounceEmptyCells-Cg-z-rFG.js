import{j as t}from"./iframe-BM9OIWQT.js";import{useMDXComponents as i}from"./index-BmDGYHRp.js";import{I as n,F as m}from"./CommandsAndQueries-CxAAQY3-.js";import{M as p,C as s}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import"./copy-C5RvIJ1i.js";import{P as a}from"./AnalyticalTableHooks.stories-BZ7zBJHa.js";import"./preload-helper-Ct5FWWRu.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./index-DEAaUqYT.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CyuqtK2r.js";import"./delete-onoyAsqE.js";import"./settings--1Ip8lPf.js";import"./NoData-CQH_6cEc.js";import"./IllustratedMessage-Bwpwi4hz.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7uotIo3.js";import"./index-_M5hu1Ve.js";import"./slim-arrow-down-DZH9bZ7T.js";import"./Input-Dn5iQQwi.js";import"./ResponsivePopoverCommon.css-C06uDNZk.js";import"./ValueStateMessage.css-45247xTr.js";import"./Suggestions.css-D3BTSrmf.js";import"./ListBoxItemGroupTemplate-DRaugEOq.js";import"./ComboBoxItemGroup-DPclcPz1.js";import"./ListItemBaseTemplate-4FD8RdDt.js";import"./Token-DULBBXqN.js";import"./ScrollEnablement-B6aqSdEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN3OLFlW.js";import"./ToggleButton-BiNCtIf_.js";import"./SuggestionItem-9SkfTs2v.js";import"./index-DDgoevNI.js";import"./Option-C3MxzwCu.js";import"./index-B9VkeBUH.js";import"./SegmentedButton-DYNlW9qo.js";import"./index-C4RyrHZD.js";import"./Select-BMZ7_MPl.js";import"./InvisibleMessage-B5HLZjpk.js";import"./slim-arrow-down-BTYV_0EQ.js";import"./useIsRTL-uL9buPdP.js";import"./index-4j8VosmR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BU0dRrZB.js";import"./group-2-IGI1Z0iD.js";import"./sort-descending-Ce7w9FbB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BD-49ib6.js";import"./utils-BX52KHbp.js";import"./index-CEfW1Ie-.js";import"./index-6oxIcK4F.js";import"./index-DDsSh8_M.js";import"./navigation-down-arrow-DRy-Plf1.js";import"./navigation-right-arrow-C4LKuMFg.js";import"./navigation-right-arrow-B77x5HAj.js";import"./useCurrentTheme-BO1dkmZn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BV7JsfdZ.js";import"./debounce-D7W5PopO.js";import"./index-SxXIoXoc.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
