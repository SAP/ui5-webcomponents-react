import{j as t}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as i}from"./index-2SvYRCCw.js";import{I as n,F as m}from"./CommandsAndQueries-B0E3P6p2.js";import{M as p,C as s}from"./blocks-CrIALgP8.js";import"./Tag-66qvcRmY.js";import"./index-mxAgSE5r.js";import"./copy-DbyPBOXI.js";import{P as a}from"./AnalyticalTableHooks.stories-ovJatTLU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./index-qyBhFjGo.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNmLY4aq.js";import"./delete-CoWW_YJb.js";import"./settings-Dl2hvIY7.js";import"./NoData-DhrCvk48.js";import"./IllustratedMessage-BZ2f0wbu.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D3P6LcMm.js";import"./index-Gthds3gG.js";import"./slim-arrow-down-BvKl0HX1.js";import"./Input-K1MmYIzW.js";import"./ResponsivePopoverCommon.css-C9Zu8eKY.js";import"./ValueStateMessage.css-0fCoJ9a0.js";import"./Suggestions.css-DU-Tiy8t.js";import"./ListBoxItemGroupTemplate-Byd0blKb.js";import"./ComboBoxItemGroup-DhWcWs45.js";import"./ListItemBaseTemplate-B9sZlVj4.js";import"./Token-DOjTT1Xq.js";import"./ScrollEnablement-B5ISBZej.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-GxkPSEye.js";import"./ToggleButton-qSP1q9mv.js";import"./SuggestionItem-C6_chZGf.js";import"./index-DpGNDeqz.js";import"./Option-D5R66SZP.js";import"./index-BeaqvZoz.js";import"./SegmentedButton-YHRsBGL8.js";import"./index-Bo-zVT_R.js";import"./Select-C6uF65be.js";import"./InvisibleMessage-DLe-kdrD.js";import"./slim-arrow-down-CtYyvMXa.js";import"./useIsRTL-DI3zrK8m.js";import"./index-CTy0VkN3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKP6ESEn.js";import"./group-2-Bewtjb3F.js";import"./sort-descending-BpBAIAuX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-BFCEptBt.js";import"./utils-rXmyLz49.js";import"./index-Bel1DcL3.js";import"./index-BpCltbmx.js";import"./index-dDjbOQ7r.js";import"./navigation-down-arrow-Cyn0Mokn.js";import"./navigation-right-arrow-DTdNlNbb.js";import"./navigation-right-arrow-B_RLXoJn.js";import"./useCurrentTheme-BWqNH_bL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CUMn0SnR.js";import"./debounce-D7W5PopO.js";import"./index-dddZC_Ni.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
