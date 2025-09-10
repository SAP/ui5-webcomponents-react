import{j as e}from"./iframe-W4A4TPxI.js";import{useMDXComponents as n}from"./index-DR9mRC8k.js";import{I as r,F as s}from"./CommandsAndQueries-CqKi30YT.js";import{M as l,C as a}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import"./copy-ieRXWhTl.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BzG5eXLo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./index-DKRTY3p_.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8bxKI_n.js";import"./delete-DUKwWmWr.js";import"./settings-CYLpDzMR.js";import"./NoData-CxfkBuoa.js";import"./IllustratedMessage-Bwh347Qt.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-QRx2oQO7.js";import"./index-DeQjkMj_.js";import"./slim-arrow-down-C5qHDn3A.js";import"./Input-CfoEMb7S.js";import"./ResponsivePopoverCommon.css-BiB47G1s.js";import"./ValueStateMessage.css-DMS2XS0O.js";import"./Suggestions.css-hvZmQ1kq.js";import"./ListBoxItemGroupTemplate-CZYhczcA.js";import"./ComboBoxItemGroup-CN0xa2iU.js";import"./ListItemBaseTemplate-23lrP7Tw.js";import"./Token-Dv6g3YCV.js";import"./ScrollEnablement-CshahWxZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-uRMv37PZ.js";import"./ToggleButton-B_J6hKck.js";import"./SuggestionItem-DXkUIhz6.js";import"./index-CYKe120Z.js";import"./Option-C7q1-uNo.js";import"./index--ce0PYoF.js";import"./SegmentedButton-3PPkHsH8.js";import"./index-lpfGVQQu.js";import"./Select-CFs4yPC7.js";import"./InvisibleMessage-CUUIa9XV.js";import"./slim-arrow-down-D_x_Mhve.js";import"./useIsRTL-B3zfNNQF.js";import"./index-DcYUW_FQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3bf_9vf.js";import"./group-2-CfNOoVSy.js";import"./sort-descending-CwRAMBpb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYYxdHSO.js";import"./utils-DtxEY-Xi.js";import"./index-BtiJt7cm.js";import"./index-BXn32007.js";import"./index-D5Gw03fH.js";import"./navigation-down-arrow-CngJcBic.js";import"./navigation-right-arrow-CeZbGMLy.js";import"./navigation-right-arrow-CmleFgXi.js";import"./useCurrentTheme-CISq3YGU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D90inOg_.js";import"./debounce-D7W5PopO.js";import"./paper-plane-zfv8vhjt.js";import"./index-DWvjkPV4.js";import"./less-pHoiGPbs.js";import"./index-RYWAVzMN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
