import{j as o}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as n}from"./index-lDTLJk7j.js";import{I as r,F as s}from"./CommandsAndQueries-BGpNLpHt.js";import{M as l,C as a}from"./blocks-Cil-35LB.js";import"./Tag-BIgoED-u.js";import"./index-aevS7PA-.js";import"./copy-E4FhZn3x.js";import{a as m}from"./AnalyticalTableHooks.stories-CKSM3Mr6.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./index-DceE06Sq.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQ4Urhss.js";import"./delete-CjHb4wVG.js";import"./settings-BM7d6L00.js";import"./NoData-11beALjN.js";import"./IllustratedMessage-S8oXJU9_.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-A6wyWuPn.js";import"./index-sC_6pIUj.js";import"./slim-arrow-down-C3AMNhFD.js";import"./Input-DPv933zQ.js";import"./ResponsivePopoverCommon.css-BwJ1vIxv.js";import"./ValueStateMessage.css-Fubl11x4.js";import"./Suggestions.css-BJLpoiav.js";import"./ListBoxItemGroupTemplate-Dnk-fFMD.js";import"./ComboBoxItemGroup-DT9mYKvC.js";import"./ListItemBaseTemplate-C2zYVBWE.js";import"./Token-deawB8qV.js";import"./ScrollEnablement-BzLICqgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlKXn9_7.js";import"./ToggleButton-KUQcKiai.js";import"./SuggestionItem-frd0or4N.js";import"./index-CUSsQjGJ.js";import"./Option-BvmKpK6T.js";import"./index-BSRf6rvH.js";import"./SegmentedButton-CcLQlQxt.js";import"./index-BpBvTivy.js";import"./Select-CsDTuuP5.js";import"./InvisibleMessage-Btu_O-HX.js";import"./slim-arrow-down-Ba9Bx2ZK.js";import"./useIsRTL-B5nPdRZ3.js";import"./index-CV8w4gWx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CmMKzJCM.js";import"./group-2-p-WoPBtU.js";import"./sort-descending-Cx3m0LJl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4QjobNo.js";import"./utils-DZ25eW5o.js";import"./index-C9VxjHmw.js";import"./index-BIqlxQzt.js";import"./index-BJ3jHYV7.js";import"./navigation-down-arrow-CAwJ7ZnN.js";import"./navigation-right-arrow-DJfjAhtB.js";import"./navigation-right-arrow-BRxq8Qef.js";import"./useCurrentTheme-BEMyA3a7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BDBqb2iV.js";import"./debounce-D7W5PopO.js";import"./index-Vd-czAfJ.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
