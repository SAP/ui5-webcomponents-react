import{j as o}from"./iframe-BGPLLWda.js";import{useMDXComponents as n}from"./index-CUo1Jk3b.js";import{I as r,F as s}from"./CommandsAndQueries-CMwJiC-3.js";import{M as l,C as a}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import"./i18n-DSpjDgSK.js";import"./copy-BU9AAITa.js";import{a as m}from"./AnalyticalTableHooks.stories-Bz_VtBIz.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-BUzvoCUF.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-TS6DhnPd.js";import"./delete-BWX4MlMm.js";import"./settings-CFgijcO_.js";import"./NoData-BGEkmZoQ.js";import"./IllustratedMessage-BD1EvJ9X.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BJmJUlHD.js";import"./index-BNy7Dn0g.js";import"./slim-arrow-down-DMfTGr50.js";import"./Input-CpVfGSwY.js";import"./ResponsivePopoverCommon.css-951IwDN3.js";import"./ValueStateMessage.css-Djn4UmzD.js";import"./Suggestions.css-DqxhEkKs.js";import"./ListBoxItemGroupTemplate-cIHi7oo8.js";import"./ComboBoxItemGroup-TToYvkYQ.js";import"./ListItemBaseTemplate-Dg-uXgOx.js";import"./Token-sHPc753X.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gVzTb5tv.js";import"./ToggleButton-DqvQERLg.js";import"./SuggestionItem-Cxo33OCr.js";import"./index-CnuSgVMh.js";import"./Option-DtMR1hW6.js";import"./index-BtbM9UQ5.js";import"./SegmentedButton-U5MRkYAs.js";import"./index-D84y9kSV.js";import"./Select-D9d1AFpt.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CPLxRpFv.js";import"./useIsRTL-B1VPnJL4.js";import"./index-B91ASvCc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfyYYk6.js";import"./group-2-Dnk-pTKH.js";import"./sort-descending-DB8J7SKA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-WIExqiEM.js";import"./utils-TBfvB8Vn.js";import"./index-C5SS4mkA.js";import"./index-I5I4BdBq.js";import"./index-I4ELerEx.js";import"./navigation-down-arrow-BxgwGxy_.js";import"./navigation-right-arrow-wPwk5NCr.js";import"./navigation-right-arrow-CuKMCHYh.js";import"./useCurrentTheme-Nu7Bfg1U.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BxdEUa6a.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMGxioyT.js";import"./index-AkNk4559.js";import"./less-BflIj0KR.js";import"./index-Di9vvrRS.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,o.jsx(s,{})]})}function Lo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Lo as default};
