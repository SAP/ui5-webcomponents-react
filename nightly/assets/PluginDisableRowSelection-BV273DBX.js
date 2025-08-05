import{j as o}from"./iframe-DofHecbS.js";import{useMDXComponents as n}from"./index-C8vGIvk8.js";import{I as r,F as s}from"./CommandsAndQueries-B_nZVkrt.js";import{M as l,C as a}from"./blocks-D1wzbhWf.js";import"./Tag-DPdR_js3.js";import"./index-DxedyFSH.js";import"./copy-7CDC0i6_.js";import{a as m}from"./AnalyticalTableHooks.stories-Df--Fijw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2GOtqWe8.js";import"./index-C1xP7ttJ.js";import"./index-JzBnNIyF.js";import"./Link-Cmqq4my9.js";import"./addCustomCSSWithScoping-D75UEBUU.js";import"./index-C1lTEPtW.js";import"./index-D3sPt_5B.js";import"./index-5wCFhmZT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckn3SEtT.js";import"./index-CrXv1RBx.js";import"./information-CgIpVhAV.js";import"./sys-enter-2-BGLCbdRF.js";import"./alert-BfmE4lX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Brjg83.js";import"./delete-D2NilxDV.js";import"./settings-Cf8IyMya.js";import"./NoData-CfkExYbj.js";import"./IllustratedMessage-Dnr5iNpa.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CE89Cx3X.js";import"./index-jJjs9LNm.js";import"./slim-arrow-down-EHDwkNs1.js";import"./Input-N_-j7LxY.js";import"./ResponsivePopoverCommon.css-TlSViPpe.js";import"./ValueStateMessage.css-DVInJl-v.js";import"./Suggestions.css-DlkHD9ll.js";import"./ListBoxItemGroupTemplate-ED6CyBBi.js";import"./ComboBoxItemGroup-ewlsRotM.js";import"./ListItemBaseTemplate-ABM4tfp-.js";import"./Token-BCMx04Lv.js";import"./ScrollEnablement-BHaRcurn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGMAivsS.js";import"./ToggleButton-Sfg6JaHH.js";import"./SuggestionItem-B7DhfD2E.js";import"./index-s6SrZqBr.js";import"./Option-aoqgoG5K.js";import"./index-CT_4CuBt.js";import"./SegmentedButton-KhWFGTsD.js";import"./index-BslajtPY.js";import"./Select-DXX118v7.js";import"./InvisibleMessage-nm_wn900.js";import"./slim-arrow-down-DVCZJgJd.js";import"./useIsRTL-Ce4m0dIR.js";import"./index-Dj8g3dXL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D0CqCPjP.js";import"./group-2-DBiBkjjk.js";import"./sort-descending-D6qjO6YJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-fNtdlXtU.js";import"./utils-DvNhCEmv.js";import"./index-CwAobW3v.js";import"./index-DQ3LOa4c.js";import"./index-BF6qDwKQ.js";import"./navigation-down-arrow-YDy4hSa6.js";import"./navigation-right-arrow-D6gnN7Pz.js";import"./navigation-right-arrow-BToPAGpb.js";import"./useCurrentTheme-e0q8CTM5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFWBQ7NN.js";import"./debounce-D7W5PopO.js";import"./index-SKTvANbT.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
