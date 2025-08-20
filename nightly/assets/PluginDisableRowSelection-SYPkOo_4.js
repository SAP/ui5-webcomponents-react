import{j as o}from"./iframe-Plj9L4DO.js";import{useMDXComponents as n}from"./index-uN80YAVR.js";import{I as r,F as s}from"./CommandsAndQueries-BWyKkggu.js";import{M as l,C as a}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import"./copy-DLXELO5k.js";import{a as m}from"./AnalyticalTableHooks.stories-C97ck5E1.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-B6F36pGT.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ijwk2Jq3.js";import"./delete-Bj_pcN1D.js";import"./settings-C1dsANlV.js";import"./NoData-C6Ob-Z--.js";import"./IllustratedMessage-BHtZel4v.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-YfgvGqD3.js";import"./index-BdoAGjQ2.js";import"./slim-arrow-down-bQWmrnVc.js";import"./Input-D_9FWiS-.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";import"./ValueStateMessage.css-JOKuFUum.js";import"./Suggestions.css-CxuGFOi-.js";import"./ListBoxItemGroupTemplate-sEIue0Fw.js";import"./ComboBoxItemGroup-CXVkGl0O.js";import"./ListItemBaseTemplate-CH90Z1sT.js";import"./Token-X11-BsdP.js";import"./ScrollEnablement-C4mp0fCO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZA0fV_-.js";import"./ToggleButton-CokJVa8f.js";import"./SuggestionItem-CZ3Cpr40.js";import"./index-H4v79u-c.js";import"./Option-CMOaJbPT.js";import"./index-D-3W9zYA.js";import"./SegmentedButton-DKNm8wW6.js";import"./index-DEFckCJE.js";import"./Select-CJ-vJLYi.js";import"./InvisibleMessage-C9ijcey0.js";import"./slim-arrow-down-D9ZL1EHX.js";import"./useIsRTL-_CpVncDg.js";import"./index-BzZ4luee.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-Pk41C2.js";import"./group-2-BhbpIExg.js";import"./sort-descending-DSmABxuS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5HZXdPZ.js";import"./utils-CzUFBlHA.js";import"./index-BzcyxAVY.js";import"./index-DfxHMw3J.js";import"./index-Y38PQMr-.js";import"./navigation-down-arrow-DJw6Oxgn.js";import"./navigation-right-arrow-O3aG19yG.js";import"./navigation-right-arrow-DHq6wjVC.js";import"./useCurrentTheme-DI5oXyuc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SRyOKcq5.js";import"./debounce-D7W5PopO.js";import"./index-C8EPvm6k.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
