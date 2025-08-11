import{j as o}from"./iframe-4VeS9m_X.js";import{useMDXComponents as n}from"./index-DEI3eVkK.js";import{I as r,F as s}from"./CommandsAndQueries-7kzg9PVA.js";import{M as l,C as a}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import"./copy-jnb9sYPg.js";import{a as m}from"./AnalyticalTableHooks.stories-ckTPehdg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-CftSo41I.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DzO_7kh2.js";import"./delete-D0tqyXI3.js";import"./settings-Dh1N9l9x.js";import"./NoData-CfqmUQIq.js";import"./IllustratedMessage-Bhm6W5wf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bq1Dxl2N.js";import"./index-BGjDPX9c.js";import"./slim-arrow-down-BC69CAxO.js";import"./Input-7Ln5W5EQ.js";import"./ResponsivePopoverCommon.css-shdaMqe8.js";import"./ValueStateMessage.css-CGoPnYXJ.js";import"./Suggestions.css-CvvWsrep.js";import"./ListBoxItemGroupTemplate-BnggVcf_.js";import"./ComboBoxItemGroup-D6dCUoyB.js";import"./ListItemBaseTemplate-Q_ULQajv.js";import"./Token-Z2YEJAmU.js";import"./ScrollEnablement-BpLcSAvR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccnky39J.js";import"./ToggleButton-DYzuAOxb.js";import"./SuggestionItem-Bpa4_uLK.js";import"./index-DyTpO6UL.js";import"./Option-CFrG9aBk.js";import"./index-kL2L593_.js";import"./SegmentedButton-BfWqXCxQ.js";import"./index-aEhIJvAh.js";import"./Select-iON0Hwpr.js";import"./InvisibleMessage-Dmfd1gOp.js";import"./slim-arrow-down-DvFGLz9G.js";import"./useIsRTL-C2A7wRdc.js";import"./index-MVLgI-v_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CouX_vyD.js";import"./group-2-C0rLkZ4k.js";import"./sort-descending-DAhONQ_J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQqE75Ik.js";import"./utils-DVMbjWX7.js";import"./index-BLK2G4j5.js";import"./index-WwJOctFW.js";import"./index-BLDjATDM.js";import"./navigation-down-arrow-BVlOCaU1.js";import"./navigation-right-arrow-CmIckyyO.js";import"./navigation-right-arrow-C_vqXpi_.js";import"./useCurrentTheme-b3iu0jQF.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jxpqFoPJ.js";import"./debounce-D7W5PopO.js";import"./index-D0TSTHqY.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
