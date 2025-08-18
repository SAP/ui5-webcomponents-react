import{j as o}from"./iframe-D1CS9P6r.js";import{useMDXComponents as n}from"./index-DKS5TQ2O.js";import{I as r,F as s}from"./CommandsAndQueries-D0Ldf7j-.js";import{M as l,C as a}from"./blocks-MP9p7uJf.js";import"./Tag-r4fVuSPw.js";import"./index-C59Ra6n3.js";import"./copy-BXLeuYzA.js";import{a as m}from"./AnalyticalTableHooks.stories-CQWW4QXL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYGl8AOq.js";import"./index-ChylkqIr.js";import"./index-DHqmSgZq.js";import"./Link-Q9DSvFtD.js";import"./addCustomCSSWithScoping-Djl5XvUO.js";import"./index--uuuPK6U.js";import"./index-B4Hl6Eco.js";import"./index-KmWwkr3l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CUZwPhW2.js";import"./index-CyljgwzW.js";import"./information-BCqqCqDW.js";import"./sys-enter-2-JjIQxhse.js";import"./alert-DkFxMsXD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqCOwuqV.js";import"./delete-iGAeC_St.js";import"./settings-Jpzz7dQg.js";import"./NoData-DzMAoC6c.js";import"./IllustratedMessage-q4ufoprM.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BkPbbsM6.js";import"./index-BFXusJ8y.js";import"./slim-arrow-down-Cm1u6CO7.js";import"./Input-BhDETh0z.js";import"./ResponsivePopoverCommon.css-Cpf4pg7D.js";import"./ValueStateMessage.css-BJKQtiUN.js";import"./Suggestions.css-Bt6O6fMa.js";import"./ListBoxItemGroupTemplate-BeK7EHkp.js";import"./ComboBoxItemGroup-BCAfoMA4.js";import"./ListItemBaseTemplate-eMuZcgjS.js";import"./Token-DHh_XbjI.js";import"./ScrollEnablement-B8q0SaPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DceIYdr9.js";import"./ToggleButton-CkBC2tPN.js";import"./SuggestionItem-BB5SRH7J.js";import"./index-B32Z0t0a.js";import"./Option-Cn_5WxRP.js";import"./index-Dr0lxBdS.js";import"./SegmentedButton-BPcNDSX6.js";import"./index-B3d1v8UT.js";import"./Select-Cj_Q1k0q.js";import"./InvisibleMessage-D_NgDQng.js";import"./slim-arrow-down-dsGvQlwn.js";import"./useIsRTL-DcXN3FqO.js";import"./index-CkRW9lNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2F3GBFF.js";import"./group-2-rVcZSb_S.js";import"./sort-descending-Dt0pCRMN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9VlWRE3.js";import"./utils-B4q_d1dY.js";import"./index-BNFSEfAV.js";import"./index-CcM6dXm8.js";import"./index-DTQcqPnD.js";import"./navigation-down-arrow-JDYRYXcR.js";import"./navigation-right-arrow-BM1vJgO7.js";import"./navigation-right-arrow-C8xREl7p.js";import"./useCurrentTheme-CGtbEiS2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C0BMIUOH.js";import"./debounce-D7W5PopO.js";import"./index-B8E4SwED.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
