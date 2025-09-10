import{j as t}from"./iframe-W4A4TPxI.js";import{useMDXComponents as i}from"./index-DR9mRC8k.js";import{I as n,F as m}from"./CommandsAndQueries-CqKi30YT.js";import{M as p,C as s}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import"./copy-ieRXWhTl.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BzG5eXLo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./index-DKRTY3p_.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8bxKI_n.js";import"./delete-DUKwWmWr.js";import"./settings-CYLpDzMR.js";import"./NoData-CxfkBuoa.js";import"./IllustratedMessage-Bwh347Qt.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-QRx2oQO7.js";import"./index-DeQjkMj_.js";import"./slim-arrow-down-C5qHDn3A.js";import"./Input-CfoEMb7S.js";import"./ResponsivePopoverCommon.css-BiB47G1s.js";import"./ValueStateMessage.css-DMS2XS0O.js";import"./Suggestions.css-hvZmQ1kq.js";import"./ListBoxItemGroupTemplate-CZYhczcA.js";import"./ComboBoxItemGroup-CN0xa2iU.js";import"./ListItemBaseTemplate-23lrP7Tw.js";import"./Token-Dv6g3YCV.js";import"./ScrollEnablement-CshahWxZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-uRMv37PZ.js";import"./ToggleButton-B_J6hKck.js";import"./SuggestionItem-DXkUIhz6.js";import"./index-CYKe120Z.js";import"./Option-C7q1-uNo.js";import"./index--ce0PYoF.js";import"./SegmentedButton-3PPkHsH8.js";import"./index-lpfGVQQu.js";import"./Select-CFs4yPC7.js";import"./InvisibleMessage-CUUIa9XV.js";import"./slim-arrow-down-D_x_Mhve.js";import"./useIsRTL-B3zfNNQF.js";import"./index-DcYUW_FQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3bf_9vf.js";import"./group-2-CfNOoVSy.js";import"./sort-descending-CwRAMBpb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYYxdHSO.js";import"./utils-DtxEY-Xi.js";import"./index-BtiJt7cm.js";import"./index-BXn32007.js";import"./index-D5Gw03fH.js";import"./navigation-down-arrow-CngJcBic.js";import"./navigation-right-arrow-CeZbGMLy.js";import"./navigation-right-arrow-CmleFgXi.js";import"./useCurrentTheme-CISq3YGU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D90inOg_.js";import"./debounce-D7W5PopO.js";import"./paper-plane-zfv8vhjt.js";import"./index-DWvjkPV4.js";import"./less-pHoiGPbs.js";import"./index-RYWAVzMN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
