import{j as o}from"./iframe-yjMKSaW2.js";import{useMDXComponents as n}from"./index-DX8fpWzX.js";import{I as r,F as s}from"./CommandsAndQueries-ClO5_6SR.js";import{M as l,C as a}from"./blocks-qO1HNk-b.js";import"./Tag-BxGYemBH.js";import"./index-EVdkIx1d.js";import"./copy-Bx6gkJby.js";import{a as m}from"./AnalyticalTableHooks.stories-CG1Ne1jJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./index-D2oaGTxE.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cwkh_r41.js";import"./delete-BtuN8EqN.js";import"./settings-Db3_TAtG.js";import"./NoData-D0tuWWQx.js";import"./IllustratedMessage-L768Lgnu.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-7a9cOrxB.js";import"./index-B3sgNhVy.js";import"./slim-arrow-down-C3a-usnI.js";import"./Input-CTJTUFFu.js";import"./ResponsivePopoverCommon.css-DxFeQbMc.js";import"./ValueStateMessage.css-CA2fAuCP.js";import"./Suggestions.css-Ck69pShO.js";import"./ListBoxItemGroupTemplate-xaDsElnd.js";import"./ComboBoxItemGroup-BrQqIK5D.js";import"./ListItemBaseTemplate-CFF0kaEn.js";import"./Token-CLQwip2z.js";import"./ScrollEnablement-WnQFRWHc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bt6MekvC.js";import"./ToggleButton-C0wnat4A.js";import"./SuggestionItem-DfB634lH.js";import"./index-uRmgFaxR.js";import"./Option-CrJKrJ5f.js";import"./index-CaZpvffh.js";import"./SegmentedButton-37GVceHj.js";import"./index-DRSoUGaL.js";import"./Select-B7f5ZkNn.js";import"./InvisibleMessage-CpX70GFw.js";import"./slim-arrow-down-Brvh4Ud1.js";import"./useIsRTL-MY_nF6I_.js";import"./index-BymYChZy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-h9FGD-0R.js";import"./group-2-DcalmJYS.js";import"./sort-descending-BYf0SDBC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs91-3HF.js";import"./utils-DOHC3Pr_.js";import"./index-CuxALFU6.js";import"./index-CElhn7R2.js";import"./index-DvKVlSVq.js";import"./navigation-down-arrow-BY4lPGb9.js";import"./navigation-right-arrow-DnvMFDg-.js";import"./navigation-right-arrow-DlglppO6.js";import"./useCurrentTheme-QOXIU8ro.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DTbfOaKr.js";import"./debounce-D7W5PopO.js";import"./index-BVFfVLn8.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
