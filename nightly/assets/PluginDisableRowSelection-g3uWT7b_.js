import{j as o}from"./iframe-DXDeCCXH.js";import{useMDXComponents as n}from"./index-BVVJ9Xmn.js";import{I as r,F as s}from"./CommandsAndQueries-Dq5DBaAz.js";import{M as l,C as a}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import"./copy-WTqS65ha.js";import{a as m}from"./AnalyticalTableHooks.stories-wPwjnETU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./index-CtGW4gqB.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-m9t6xB4J.js";import"./delete-eGh5KcKa.js";import"./settings-D-aMw8C7.js";import"./NoData-BNJguIn1.js";import"./IllustratedMessage-C1Qra527.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Crbb53iW.js";import"./index-Bz25c1ht.js";import"./slim-arrow-down-DvqwO1-7.js";import"./Input-DT5a2INw.js";import"./ResponsivePopoverCommon.css-OCxrxVe7.js";import"./ValueStateMessage.css-DPy1qgQz.js";import"./Suggestions.css-I2XPtCpK.js";import"./ListBoxItemGroupTemplate-DpjpsYkI.js";import"./ComboBoxItemGroup-BariYzmO.js";import"./ListItemBaseTemplate-hEZgOtsu.js";import"./Token-CRlMV9e1.js";import"./ScrollEnablement-DAHWVod0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6LXITg6.js";import"./ToggleButton-0Bjlblt_.js";import"./SuggestionItem-R5703Eet.js";import"./index-DKVKyydv.js";import"./Option-fRgebOG_.js";import"./index-BHF91_ZB.js";import"./SegmentedButton-ByQSIlPV.js";import"./index-CqyQ3K4-.js";import"./Select-l_bkPr5Y.js";import"./InvisibleMessage-NggmVjf-.js";import"./slim-arrow-down-CckH6L3O.js";import"./useIsRTL-BkUHaPCa.js";import"./index-aDIzQfUJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfzz8laz.js";import"./group-2-FczFFFx4.js";import"./sort-descending-CKmC-ibv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDPVisSF.js";import"./utils-DX5exggL.js";import"./index-RrE3NDfc.js";import"./index-DfUDlrEC.js";import"./index-BBJBR4cj.js";import"./navigation-down-arrow-BwAfl8_u.js";import"./navigation-right-arrow-BQ8DZn1y.js";import"./navigation-right-arrow-C1RhyiVh.js";import"./useCurrentTheme-BDP8ahfN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B-9HaNrX.js";import"./debounce-D7W5PopO.js";import"./index-CLNkhXyA.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
