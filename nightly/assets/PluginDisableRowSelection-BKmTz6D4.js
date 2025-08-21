import{j as o}from"./iframe-Ds_ksB4e.js";import{useMDXComponents as n}from"./index-H-IHaXTw.js";import{I as r,F as s}from"./CommandsAndQueries-sjInqy8W.js";import{M as l,C as a}from"./blocks-BF1agP19.js";import"./Tag-CPZT7-Kj.js";import"./index-CCQ7ngcv.js";import"./copy-CiclUpSF.js";import{a as m}from"./AnalyticalTableHooks.stories-Bbj63fPg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C9iUZPx4.js";import"./index-Cz-9QImp.js";import"./index-CCxnn_jg.js";import"./Link-B7c1MguO.js";import"./addCustomCSSWithScoping-C1wNASBp.js";import"./index-BeCgQ8PU.js";import"./index-De0nbQnW.js";import"./index-D0B9W_Us.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1VftYSW.js";import"./index-BveKVBSZ.js";import"./information-CXQdNqP2.js";import"./sys-enter-2-DgaAD1QG.js";import"./alert-D9-5boQa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkG8ch4e.js";import"./delete-D-CptolG.js";import"./settings-DsdB8amV.js";import"./NoData-CycqaSBL.js";import"./IllustratedMessage-mf04Djfm.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BUNN-ICN.js";import"./index-Bx8mdV5O.js";import"./slim-arrow-down-CRXpe6Ep.js";import"./Input-DMPtPI9x.js";import"./ResponsivePopoverCommon.css-CtrWfz2O.js";import"./ValueStateMessage.css-BtWaD65M.js";import"./Suggestions.css-Q3AZmBnp.js";import"./ListBoxItemGroupTemplate-CKym2Ygo.js";import"./ComboBoxItemGroup-iotqfyD_.js";import"./ListItemBaseTemplate-96T6tg0F.js";import"./Token-DQQbOMYd.js";import"./ScrollEnablement-C0SuwG25.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D3h_gJ31.js";import"./ToggleButton-PI5U-ZoN.js";import"./SuggestionItem-DHI1wIyF.js";import"./index-lRvGXhml.js";import"./Option-Cqjn101Z.js";import"./index-Wc-K1B_I.js";import"./SegmentedButton-BBQFuekG.js";import"./index-ByWKjneJ.js";import"./Select-CXmdf2be.js";import"./InvisibleMessage-CXx3GcZn.js";import"./slim-arrow-down-dtTq_dH6.js";import"./useIsRTL-Bze9sg1S.js";import"./index-DNS596Mv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClVKOKk0.js";import"./group-2-CzyXSt2z.js";import"./sort-descending-C_tcN0CL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rWO-sYYc.js";import"./utils-ChsTRdXp.js";import"./index-pDSMu31p.js";import"./index-1yLLdqoU.js";import"./index-p-B7Vzdn.js";import"./navigation-down-arrow-DYjrbitC.js";import"./navigation-right-arrow-DdsJzFAD.js";import"./navigation-right-arrow-C-oKg6Gq.js";import"./useCurrentTheme-DaAuIVD-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gtuVuggN.js";import"./debounce-D7W5PopO.js";import"./index-bapsQHju.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
