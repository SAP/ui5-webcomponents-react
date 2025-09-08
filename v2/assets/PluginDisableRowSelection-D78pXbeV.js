import{j as e}from"./iframe-CGUWa3l5.js";import{useMDXComponents as n}from"./index-Cg9cAKJC.js";import{I as r,F as s}from"./CommandsAndQueries-D9MoTrLH.js";import{M as l,C as a}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import"./copy-WtCMvp6x.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BDgC6LVf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./index-DVv4DYKP.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIn0EWmH.js";import"./delete-D8iOVq_P.js";import"./settings-BrU77TJz.js";import"./NoData-BtKw36NF.js";import"./IllustratedMessage-roO0aRXn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-pvKKlwIQ.js";import"./index-DdzUybfc.js";import"./slim-arrow-down-DTV0qdqM.js";import"./Input-D6uk9j64.js";import"./ResponsivePopoverCommon.css-BEg546Rm.js";import"./ValueStateMessage.css-2dCo7gv0.js";import"./Suggestions.css-BzuWn3c7.js";import"./ListBoxItemGroupTemplate-T5G4LspN.js";import"./ComboBoxItemGroup-rYdUb0dx.js";import"./ListItemBaseTemplate-DPo3rTK0.js";import"./Token-CM0KuYKd.js";import"./ScrollEnablement-CQEkGSE4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZmC8AzlV.js";import"./ToggleButton-B7IDpjil.js";import"./SuggestionItem-B72aMk-1.js";import"./index-D3Q4XSrj.js";import"./Option-KkRC9zkJ.js";import"./index-BDLjw3vw.js";import"./SegmentedButton-BZuewes2.js";import"./index-16LEbUKu.js";import"./Select-DqU7IOqL.js";import"./InvisibleMessage-DsoM_md7.js";import"./slim-arrow-down-C2D4hy1c.js";import"./useIsRTL-CiTgDNnq.js";import"./index-DxY5n6Uu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2pujT4z.js";import"./group-2-Bsz1MTSG.js";import"./sort-descending-B95Vwq5b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQRmvIfO.js";import"./utils-Bvg3-Eiz.js";import"./index-DiFhnHjc.js";import"./index-DQtuH_ue.js";import"./index-DPKePRb-.js";import"./navigation-down-arrow-DEG608S3.js";import"./navigation-right-arrow-FljkMUDF.js";import"./navigation-right-arrow-DNwcZSXb.js";import"./useCurrentTheme-_W43-YnM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4ApArmi.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CbfSQR9D.js";import"./index-buTEIynB.js";import"./less-CKtxa6cj.js";import"./index-R6CpitaJ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
