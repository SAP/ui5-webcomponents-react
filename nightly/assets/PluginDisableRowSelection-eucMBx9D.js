import{j as o}from"./iframe-FFY2S6YG.js";import{useMDXComponents as n}from"./index-BzZglwT-.js";import{I as r,F as s}from"./CommandsAndQueries-CRs7a5Er.js";import{M as l,C as a}from"./blocks-tMTQEG0b.js";import"./Tag-CY0dYkIx.js";import"./index-CR-wXzPk.js";import"./copy-DuPWkMaa.js";import{a as m}from"./AnalyticalTableHooks.stories-FtOOhuOh.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BK6LUJYp.js";import"./index-aRemyO01.js";import"./index-CYPt-1NW.js";import"./Link-ilnMyEmJ.js";import"./addCustomCSSWithScoping-L7uLJS1K.js";import"./index-BvjHl6jR.js";import"./index-Cer5_OSt.js";import"./index-dBDK7i7w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hY5EkXL.js";import"./index-BpfUe8Vy.js";import"./information-bHzg5lJa.js";import"./sys-enter-2-DLgVYDfp.js";import"./alert-DTO9To2T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DewUzwnF.js";import"./delete-PyKScnn5.js";import"./settings-D8wSEnLQ.js";import"./NoData-DcvAWleu.js";import"./IllustratedMessage-CUcy7Lzq.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7-d5vvM.js";import"./index-DzVsJZGg.js";import"./slim-arrow-down-CDbx1-YQ.js";import"./Input-BUwXm7QE.js";import"./ResponsivePopoverCommon.css-Ns2pYP6j.js";import"./ValueStateMessage.css-Br2MqEEx.js";import"./Suggestions.css-BA_f9-0L.js";import"./ListBoxItemGroupTemplate-82b3Pwjr.js";import"./ComboBoxItemGroup-CyA2Qdmh.js";import"./ListItemBaseTemplate-D3ib4Mla.js";import"./Token-CV1Eunvp.js";import"./ScrollEnablement-DswLTbh8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-sXxgGRTN.js";import"./ToggleButton-BSn8PnZz.js";import"./SuggestionItem-m0RxQNSP.js";import"./index-CFYJFEfe.js";import"./Option-D87YgESn.js";import"./index-wgQZg_qM.js";import"./SegmentedButton-BnS-MFCM.js";import"./index-CGQSvAxs.js";import"./Select-CYN8bhUC.js";import"./InvisibleMessage-CbKgbx5O.js";import"./slim-arrow-down-Cfpa0YBm.js";import"./useIsRTL-BX8Bpdr0.js";import"./index-C_QO2GI1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-uMu8AkhM.js";import"./group-2-CMgkMPSi.js";import"./sort-descending-BvvCOZ2_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHw5dxkC.js";import"./utils-BPc0OMuw.js";import"./index-D_RFV31k.js";import"./index-D59fZpcX.js";import"./index-DlqHiufR.js";import"./navigation-down-arrow-gws4-sx1.js";import"./navigation-right-arrow-BJmMXsZ_.js";import"./navigation-right-arrow-AZTMAkte.js";import"./useCurrentTheme-DWXrF5d1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DQOK-fLL.js";import"./debounce-D7W5PopO.js";import"./index-DbwjuCtL.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,o.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,o.jsx("hr",{}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:"Users are not informed why items cannot be selected."}),`
`,o.jsx(e.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,o.jsx(e.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,o.jsx("hr",{}),`
`,o.jsxs(e.p,{children:["With the ",o.jsx(e.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",o.jsx(e.code,{children:"true"}),", then the row will not be selectable."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," Using this hook in combination with the ",o.jsx(e.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,o.jsx(a,{sourceState:"none",of:m}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [
  AnalyticalTableHooks.useRowDisableSelection(disableRowFunc),
];
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
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [
  AnalyticalTableHooks.useRowDisableSelection("disableSelection"),
];
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
`,o.jsx(s,{})]})}function Xo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Xo as default};
