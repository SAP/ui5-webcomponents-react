import{j as e}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as n}from"./index-DTW9WkuG.js";import{I as r,F as s}from"./CommandsAndQueries-Di8bJMhG.js";import{M as l,C as a}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import"./copy-DC4VamtM.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Biv7_0b_.js";import"./preload-helper-D9Z9MdNV.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";import"./index-BrdrQHC3.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGn7erBf.js";import"./delete-CXC6lmer.js";import"./settings-z3Kqv_H_.js";import"./NoData-DUqssr6L.js";import"./IllustratedMessage-sPniRTYn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bod6JhhQ.js";import"./index-CUZI3FRG.js";import"./slim-arrow-down-b7xW5WMQ.js";import"./Input-DKCCXuXG.js";import"./ResponsivePopoverCommon.css-6wr_yrJO.js";import"./ValueStateMessage.css-BUM5hsl4.js";import"./Suggestions.css-oyFv45v2.js";import"./ListBoxItemGroupTemplate-DmarxL3_.js";import"./ComboBoxItemGroup-CA6r4V87.js";import"./ListItemBaseTemplate-YOGeNlAr.js";import"./Token-DKlGFJle.js";import"./ScrollEnablement-CGteJMp0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xKwcd7x4.js";import"./ToggleButton-CAbhzZ4Z.js";import"./SuggestionItem-D2t-HTV4.js";import"./index-CaupuYMw.js";import"./Option-Buj1ceqN.js";import"./index-QqJahJbf.js";import"./SegmentedButton-f44xS3Ee.js";import"./index-Bh_3qXv_.js";import"./Select-Cz-kH7T0.js";import"./InvisibleMessage-DqwXOxWx.js";import"./slim-arrow-down-BI_DSc-2.js";import"./useIsRTL--3iCf25v.js";import"./index-DYj6x7NK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLCI_AKZ.js";import"./group-2-DJsmMrGI.js";import"./sort-descending-BSw34moc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2CaCvj_.js";import"./utils-D4lUgN_j.js";import"./index-C38ppj6_.js";import"./index-BNPI3NEr.js";import"./index-CSVTtRtP.js";import"./navigation-down-arrow-D7EJn8ch.js";import"./navigation-right-arrow-DVOIDXzO.js";import"./navigation-right-arrow-uTQcyQpq.js";import"./useCurrentTheme-NkmcojZY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ERhnquzG.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DZq9mbkX.js";import"./index-Bidd9wX5.js";import"./less-D4FrIAV3.js";import"./index-Cp33MICI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
