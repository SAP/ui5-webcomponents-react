import{j as o}from"./iframe-DTnEqaXa.js";import{useMDXComponents as n}from"./index-Bzwj8IeJ.js";import{I as r,F as s}from"./CommandsAndQueries-o88EZ4zv.js";import{M as l,C as a}from"./blocks-DjoWO0N0.js";import"./Tag-B9YI4L6P.js";import"./index-X9x0GvvK.js";import"./copy-CVTh1Y4e.js";import{a as m}from"./AnalyticalTableHooks.stories-DcMvISKX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DCbmFI06.js";import"./index-L41gFWOj.js";import"./index-CPY0RkYC.js";import"./Link-DjplMcMT.js";import"./addCustomCSSWithScoping-Di76Mem5.js";import"./index-BLEhzZcH.js";import"./index-BtOoTda4.js";import"./index-Cbvl8GTm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvuY_C9E.js";import"./index-Bmfc8Eqw.js";import"./information-Z43pYR60.js";import"./sys-enter-2-2LeoQRYT.js";import"./alert-no1g3tmv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqmvIRJk.js";import"./delete-DG7Qils1.js";import"./settings-CD3VS0Cp.js";import"./NoData-C6HMlKut.js";import"./IllustratedMessage-CTErdkpq.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DiOS_Wi8.js";import"./index-ByYh-WOK.js";import"./slim-arrow-down-DWzEitHv.js";import"./Input-BX2m7kq-.js";import"./ResponsivePopoverCommon.css-Dg8IVknp.js";import"./ValueStateMessage.css-CPiQjmUi.js";import"./Suggestions.css-BEWKt8Uf.js";import"./ListBoxItemGroupTemplate-CH87aIyU.js";import"./ComboBoxItemGroup-C2WOE3Rv.js";import"./ListItemBaseTemplate-BZ506cs0.js";import"./Token-BEgAyOCd.js";import"./ScrollEnablement-j28YNdtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Z9rWegqM.js";import"./ToggleButton-aJVgg_YY.js";import"./SuggestionItem-3mz-RJsY.js";import"./index-D24AFQZk.js";import"./Option-CJC0NEQ9.js";import"./index-guueUBkC.js";import"./SegmentedButton--brNUxa5.js";import"./index-fGwj63Fh.js";import"./Select-D-KL7nct.js";import"./InvisibleMessage--LVGVy97.js";import"./slim-arrow-down-sADW_Ldr.js";import"./useIsRTL-SG3H97q3.js";import"./index-B7kRuZUV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2jVwpWUZ.js";import"./group-2-Dr0JsWqU.js";import"./sort-descending-CgA-kYmN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DT1QH2dv.js";import"./utils-CHYk4Hwj.js";import"./index-DGNMCWwU.js";import"./index-Cd-W8HrQ.js";import"./index-Du_TBYm5.js";import"./navigation-down-arrow-Bt8Z5CUg.js";import"./navigation-right-arrow-2WbGTEK8.js";import"./navigation-right-arrow-D6Z39_S5.js";import"./useCurrentTheme-DTJM-7US.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cas5z87m.js";import"./debounce-D7W5PopO.js";import"./index-C2Mlehus.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
