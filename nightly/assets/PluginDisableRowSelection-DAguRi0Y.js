import{j as e}from"./iframe-DEht8tsT.js";import{useMDXComponents as n}from"./index-CHmvqmZV.js";import{I as r,F as s}from"./CommandsAndQueries-r7FFQXZn.js";import{M as l,C as a}from"./blocks-B9eJfK2p.js";import"./Tag-Bo7VmRFf.js";import"./index-qqa4-hS-.js";import"./i18n-DCXZOGva.js";import"./copy-DdxSmOcQ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-rHSTGkQk.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./index-v8e_2LrN.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DUPZhlNh.js";import"./delete-CIIO6cWP.js";import"./settings-BC73ny7E.js";import"./NoData-BmGlQJD3.js";import"./IllustratedMessage-DtFGh_HO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C2_Nt3zN.js";import"./index-DzPD0tFv.js";import"./slim-arrow-down-B6hMDuTF.js";import"./Input-hFJzw5L1.js";import"./ResponsivePopoverCommon.css-CByNGfjI.js";import"./ValueStateMessage.css-CelINsiK.js";import"./Suggestions.css-BNActsuA.js";import"./ListBoxItemGroupTemplate-C2LcXUoB.js";import"./ComboBoxItemGroup-qeNnc1ua.js";import"./ListItemBaseTemplate-EzB1Pcdn.js";import"./Token-DaOKNidD.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6KE8nClO.js";import"./ToggleButton-kkVgC4NU.js";import"./SuggestionItem-CPdN0sMT.js";import"./index-B_kfaCxx.js";import"./Option-C5YcjUdy.js";import"./index-DqSD4c31.js";import"./SegmentedButton-C63M7we9.js";import"./index-DnPSE1-9.js";import"./Select-Z6SVspqY.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-c8qc4hiX.js";import"./useIsRTL-DuD9eh_M.js";import"./index-CXm15WPn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl7mXAP8.js";import"./group-2-Bj2HnCsV.js";import"./sort-descending-D3pMADc7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cbf0XwND.js";import"./utils-ISKKNPcb.js";import"./index-DX3S6mf8.js";import"./index-DLQMS65N.js";import"./index-CZT4M-ks.js";import"./navigation-down-arrow-DpGvha-M.js";import"./navigation-right-arrow-DB7Ib3_i.js";import"./navigation-right-arrow-BS0T2xtE.js";import"./useCurrentTheme-Cg8J5RkG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DJPITGZE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-pbKRJ5e0.js";import"./index-p95JEi1E.js";import"./less-B7nzovk5.js";import"./index-D-8goo6_.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
