import{j as o}from"./iframe-BohNpW-0.js";import{useMDXComponents as n}from"./index-CNs9TfzQ.js";import{I as r,F as s}from"./CommandsAndQueries-dvLT1dsP.js";import{M as l,C as a}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import"./copy-CQ_htW6-.js";import{a as m}from"./AnalyticalTableHooks.stories-BkE12vkX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./index-ByPlsUCp.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnuRW_a.js";import"./delete-DFm5suxj.js";import"./settings-BLCj6Ktd.js";import"./NoData-CAAIc5W6.js";import"./IllustratedMessage-Bpl_x9QE.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1alUcvag.js";import"./index-Ch4OLcN7.js";import"./slim-arrow-down-LYXn27gh.js";import"./Input-CXgaSvQH.js";import"./ResponsivePopoverCommon.css-DuJkDvJC.js";import"./ValueStateMessage.css-BUzzgD75.js";import"./Suggestions.css-BIwwsvtG.js";import"./ListBoxItemGroupTemplate-jhhhIZpU.js";import"./ComboBoxItemGroup-CqSbXN4t.js";import"./ListItemBaseTemplate-reYvnJJM.js";import"./Token-iGWj7aCd.js";import"./ScrollEnablement-HAARTfJV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZXGuN1Y.js";import"./ToggleButton-U_geWF_i.js";import"./SuggestionItem-Co2iHh_E.js";import"./index-BAL7ahhu.js";import"./Option-CobSYum8.js";import"./index-Bu6Tv_AS.js";import"./SegmentedButton-Cs3c2JRc.js";import"./index-DWE68V0w.js";import"./Select-BLyS4LHF.js";import"./InvisibleMessage-_2VjBh0c.js";import"./slim-arrow-down-wv1cGsxv.js";import"./useIsRTL-D6FosoIx.js";import"./index-CjyJ5jjJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C3RkhPtf.js";import"./group-2-COlpxIGz.js";import"./sort-descending-CwpmoWCE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZkdsjgh.js";import"./utils-GVqR78hZ.js";import"./index-UheYK0zI.js";import"./index-CrORVvYl.js";import"./index-BhN4dH-m.js";import"./navigation-down-arrow-D4lgA2BL.js";import"./navigation-right-arrow-DP2bB5H7.js";import"./navigation-right-arrow-C4pGrl1t.js";import"./useCurrentTheme-CCffuhcS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-KjAWBXk6.js";import"./debounce-D7W5PopO.js";import"./index-Cf2iELKC.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
