import{j as o}from"./iframe-CS0WNVf3.js";import{useMDXComponents as n}from"./index-DDJWQvBk.js";import{I as r,F as s}from"./CommandsAndQueries-DZ6pwvzq.js";import{M as l,C as a}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import"./copy-BAUFdAAv.js";import"./WrappingType-BBpR8qCJ.js";import{a as m}from"./AnalyticalTableHooks.stories-BDDqqarW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./index-CvNKNR4d.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xKp7E0Tc.js";import"./delete-B0hijpGn.js";import"./settings-DnXx7g7P.js";import"./NoData-C9hLItd-.js";import"./IllustratedMessage-D9TXjhx2.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-BcDcM98N.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D1T3NjPX.js";import"./index-vOL_TpkT.js";import"./slim-arrow-down-13yyQzi6.js";import"./ListBoxItemGroupTemplate-B8eP-Pg5.js";import"./ComboBoxItemGroup-Tdlh_kDa.js";import"./ListItemBaseTemplate-Bs0FUKcz.js";import"./Token-DAuk9NKz.js";import"./ScrollEnablement-DtdqB5r7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH1fH6pr.js";import"./ResponsivePopoverCommon.css-wgN2az89.js";import"./Suggestions.css-DCRjJQiV.js";import"./ToggleButton-DlBZVgdD.js";import"./Input-908QQXPy.js";import"./ValueStateMessage.css-2utQpejI.js";import"./SuggestionItem-2mukNXq8.js";import"./index-Bg73Jmg9.js";import"./Option-ndsoEHeD.js";import"./index-B-Fd1UGS.js";import"./SegmentedButton-ByiFmvRr.js";import"./index-iSOjq3mN.js";import"./Select-B8PsMZPZ.js";import"./InvisibleMessage-BLaLHaBV.js";import"./slim-arrow-down-B0zNzNFy.js";import"./useIsRTL-CrA39wlN.js";import"./index-DXGd-dVn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-F6el_Q-P.js";import"./group-2-B5wWZfuD.js";import"./sort-descending-DQa_u9t1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DkO3qxML.js";import"./utils-BeyPgaeY.js";import"./index-DGoD02kv.js";import"./index-Cm98QziX.js";import"./index-YClhRCxe.js";import"./navigation-down-arrow-CZ6j5E_n.js";import"./navigation-right-arrow-DppwJMLZ.js";import"./navigation-right-arrow-BiGZf0MQ.js";import"./useCurrentTheme-BozDlVUS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DD_eFCbd.js";import"./debounce-D7W5PopO.js";import"./index-BBfTXTIi.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,o.jsx(s,{})]})}function Eo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Eo as default};
