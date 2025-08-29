import{j as o}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as n}from"./index-DBGwXOnP.js";import{I as r,F as s}from"./CommandsAndQueries-Cb3G3ka5.js";import{M as l,C as a}from"./blocks-DynXzMxo.js";import"./Tag-CzQty8rY.js";import"./index-CqdKq5PF.js";import"./copy-CWrvVeie.js";import{a as m}from"./AnalyticalTableHooks.stories-BqQj_Ltc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./index-TINCTucQ.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdNBRyB1.js";import"./delete-C2U2A-yb.js";import"./settings-DF3NHvjE.js";import"./NoData-BFHkDIgd.js";import"./IllustratedMessage-D7DuY04R.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dpd6t92o.js";import"./index-7q78DKDL.js";import"./slim-arrow-down-DMLXw6xT.js";import"./Input-B6peNm1t.js";import"./ResponsivePopoverCommon.css-Ba71pV2j.js";import"./ValueStateMessage.css-rpNnQiGf.js";import"./Suggestions.css-DDzb5FdX.js";import"./ListBoxItemGroupTemplate-CLDx4aFe.js";import"./ComboBoxItemGroup-0HZ5pe-M.js";import"./ListItemBaseTemplate-UHhLaiyc.js";import"./Token-BbYLeIwQ.js";import"./ScrollEnablement-D8tzMu5h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAw7VuyQ.js";import"./ToggleButton-C_ZfV5QP.js";import"./SuggestionItem-oeptop1Y.js";import"./index-DAqL5wGg.js";import"./Option-DAiofa7l.js";import"./index-B5JGrjgL.js";import"./SegmentedButton-CQaM9kSM.js";import"./index-BAu2trWC.js";import"./Select-CatGjmg8.js";import"./InvisibleMessage-DYgdDzKE.js";import"./slim-arrow-down-CJjWd9wb.js";import"./useIsRTL-BPkFkuhq.js";import"./index-Ba2iaRbK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLL2_YGc.js";import"./group-2-CF46wLb5.js";import"./sort-descending-DjXzD5Vq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcG__9zQ.js";import"./utils-BB8FlNwX.js";import"./index-ClzhVMYp.js";import"./index-ag2wqFEj.js";import"./index-COtrkj-k.js";import"./navigation-down-arrow-q-51FI4K.js";import"./navigation-right-arrow-DmrrzDkW.js";import"./navigation-right-arrow-BNGrfpXc.js";import"./useCurrentTheme-DKZ9wuBT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-2IedBLhj.js";import"./debounce-D7W5PopO.js";import"./index-z-z0N_jj.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
