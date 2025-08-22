import{j as o}from"./iframe-B9d6tunA.js";import{useMDXComponents as n}from"./index-CHHTqEt5.js";import{I as r,F as s}from"./CommandsAndQueries-Dbama0_5.js";import{M as l,C as a}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import"./copy-DBcroaPr.js";import{a as m}from"./AnalyticalTableHooks.stories-BYRkhAc9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";import"./index-bjg2761A.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8Cs0Me0.js";import"./delete-CeJU5A6H.js";import"./settings-CnwemJH0.js";import"./NoData-B9Ct3Bte.js";import"./IllustratedMessage-B9S7zPJ2.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BfBfDvss.js";import"./index-CIA13LwP.js";import"./slim-arrow-down-D05V1lot.js";import"./Input-BXjsXSc_.js";import"./ResponsivePopoverCommon.css-BlZ9FToc.js";import"./ValueStateMessage.css-CAd1FQ11.js";import"./Suggestions.css-D8AOIxab.js";import"./ListBoxItemGroupTemplate-Bhrbrnfy.js";import"./ComboBoxItemGroup-2CqGaLQ_.js";import"./ListItemBaseTemplate-CHOAwn4O.js";import"./Token-BhjIixy1.js";import"./ScrollEnablement-DMZ5Ege9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B98qKKlT.js";import"./ToggleButton-D2X4-nFe.js";import"./SuggestionItem-BqBkM0aO.js";import"./index-mMW_G7sz.js";import"./Option-BETBD_j4.js";import"./index-Dq8WXUVt.js";import"./SegmentedButton-B6qsgUfN.js";import"./index-DQgYfch-.js";import"./Select-B8g_Zr6U.js";import"./InvisibleMessage-CZwz5JoO.js";import"./slim-arrow-down-D_fYxlqY.js";import"./useIsRTL-DOJ0Jr_3.js";import"./index-DFOOm17j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DifKOfuY.js";import"./group-2-BVw5lsTv.js";import"./sort-descending-CF7x_zfl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAVaOe.js";import"./utils-Cz3NQMid.js";import"./index-CY8hMSGY.js";import"./index-4dyeEyUB.js";import"./index-Dn5LrzbR.js";import"./navigation-down-arrow-CYkXcjUC.js";import"./navigation-right-arrow-BReQAbGx.js";import"./navigation-right-arrow-DQZi3Hf6.js";import"./useCurrentTheme-CezBWnYs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BunxPUB3.js";import"./debounce-D7W5PopO.js";import"./index-BzaLULpj.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
