import{j as o}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as n}from"./index-EJQOh2Id.js";import{I as r,F as s}from"./CommandsAndQueries-BwMOH1SZ.js";import{M as l,C as a}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import"./copy-BQA3UKNo.js";import{a as m}from"./AnalyticalTableHooks.stories-DKcHsbUg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index-D9TUnkjB.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkBCTXa9.js";import"./delete-BHx19-Y9.js";import"./settings-C1rGZAVZ.js";import"./NoData-C9Am1g_a.js";import"./IllustratedMessage-gFpY2ARx.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cpo8GMo1.js";import"./index-BS2xqF92.js";import"./slim-arrow-down-CjCpnDGL.js";import"./Input-BnPcYwI0.js";import"./ResponsivePopoverCommon.css-De3l4lV7.js";import"./ValueStateMessage.css-CnYMheJQ.js";import"./Suggestions.css-CcER9QIN.js";import"./ListBoxItemGroupTemplate-DFglDMjK.js";import"./ComboBoxItemGroup-D4Gs5NOL.js";import"./ListItemBaseTemplate-DFt11I0O.js";import"./Token-BKduK5BD.js";import"./ScrollEnablement-BDrNOFng.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDVOPr0Q.js";import"./ToggleButton-C8ruj2ek.js";import"./SuggestionItem-DLLMxiuf.js";import"./index-BpVwnbz4.js";import"./Option-ydyzdS2N.js";import"./index-BahYCzWG.js";import"./SegmentedButton-Dd9nWvWy.js";import"./index-DO3t8-bw.js";import"./Select-DR14Z-d1.js";import"./InvisibleMessage-DNAVGHgD.js";import"./slim-arrow-down-DpHxo-vW.js";import"./useIsRTL-iU-OFwyb.js";import"./index-KjM22Mkn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapOufte.js";import"./group-2-BCK94LLS.js";import"./sort-descending-DoJpvQSn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DG5c9gPi.js";import"./utils-ta-b6IhW.js";import"./index-9Yl4D7c1.js";import"./index-CNCeO74r.js";import"./index-BtDnirP4.js";import"./navigation-down-arrow-CTzJ9Li3.js";import"./navigation-right-arrow-Sp9fSK-u.js";import"./navigation-right-arrow-NCcFjcdA.js";import"./useCurrentTheme-unQEnGqh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfLpzXqh.js";import"./debounce-D7W5PopO.js";import"./index-Bgmqc7Nb.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
