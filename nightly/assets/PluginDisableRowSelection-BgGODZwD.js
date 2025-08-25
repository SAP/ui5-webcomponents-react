import{j as o}from"./iframe-Y9u60a80.js";import{useMDXComponents as n}from"./index-Bori-Nod.js";import{I as r,F as s}from"./CommandsAndQueries-eYIoXNgT.js";import{M as l,C as a}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import"./copy-DwFBIccM.js";import{a as m}from"./AnalyticalTableHooks.stories-DG0Cab0_.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-BUCogs4k.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-n_bZVIMN.js";import"./delete-D7VV6RVa.js";import"./settings-DuH9YHsU.js";import"./NoData-Dt2C1ctw.js";import"./IllustratedMessage-B_bMLEpB.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CPL75eXp.js";import"./index-BjMGLplX.js";import"./slim-arrow-down-DgUPWIGP.js";import"./Input-7QH9qgg3.js";import"./ResponsivePopoverCommon.css-DKPC5jE6.js";import"./ValueStateMessage.css-DF0riTEq.js";import"./Suggestions.css-BCVBy9X3.js";import"./ListBoxItemGroupTemplate-B2XwDE9U.js";import"./ComboBoxItemGroup-C0ZFcNFo.js";import"./ListItemBaseTemplate-DN-V_XKe.js";import"./Token-4uwHlG5Q.js";import"./ScrollEnablement-CsQtNunN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKYvsgaA.js";import"./ToggleButton-CU_sGI38.js";import"./SuggestionItem-2EsYX1iM.js";import"./index-ZbsU_3Br.js";import"./Option-CbMG_PHq.js";import"./index-CdSvCjtG.js";import"./SegmentedButton-CUUTUqtu.js";import"./index-BBgzzW3H.js";import"./Select-B8fRwNK8.js";import"./InvisibleMessage-BM3r9VIb.js";import"./slim-arrow-down-Bigp3gAZ.js";import"./useIsRTL-CBPcn2dq.js";import"./index-CItqJ0md.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHOvAqJQ.js";import"./group-2-BKGinyfK.js";import"./sort-descending-22aJyVyy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BsXyS7WM.js";import"./utils-CaJ_VxIi.js";import"./index-DNNFbTMo.js";import"./index-BQaEG-SS.js";import"./index-DqWK6Liw.js";import"./navigation-down-arrow-DDHDR9P7.js";import"./navigation-right-arrow-CXqjHb3o.js";import"./navigation-right-arrow-B-22KRcY.js";import"./useCurrentTheme-BUeXoGU1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-rKlXois0.js";import"./debounce-D7W5PopO.js";import"./index-BFX043nL.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
