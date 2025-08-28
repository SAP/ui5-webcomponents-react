import{j as o}from"./iframe-BaUS3k1G.js";import{useMDXComponents as n}from"./index-BI_MoYzx.js";import{I as r,F as s}from"./CommandsAndQueries-Br4DVRUh.js";import{M as l,C as a}from"./blocks-B0L69tD0.js";import"./Tag-DBf9vhPp.js";import"./index-DRxFqLKQ.js";import"./copy-DThSO1XV.js";import{a as m}from"./AnalyticalTableHooks.stories-qcQzuxQR.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYuYKtBV.js";import"./index-DCjJA-51.js";import"./index-DvySby2h.js";import"./Link-CWqnr4YP.js";import"./addCustomCSSWithScoping-CsHiQv5I.js";import"./index-Cf1dwhov.js";import"./index-C3F6-2iN.js";import"./index-BVDlh8LB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNEqbSr6.js";import"./index-BYW7BxIG.js";import"./information-7Y3gJKKP.js";import"./sys-enter-2-BfkJMWkZ.js";import"./alert-BAVxkr1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGZWkfq0.js";import"./delete-DhpuvOZU.js";import"./settings-HR7JgpW5.js";import"./NoData-6qkAt8Ff.js";import"./IllustratedMessage-BoVreQNe.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-U2f8pDyc.js";import"./index-Ck5H1gDo.js";import"./slim-arrow-down-D9JkdGK8.js";import"./Input-BOuUwhzq.js";import"./ResponsivePopoverCommon.css-Bo-IXKeW.js";import"./ValueStateMessage.css-BQHtB1Tv.js";import"./Suggestions.css-ChVrYUaI.js";import"./ListBoxItemGroupTemplate-BAOEqzDw.js";import"./ComboBoxItemGroup-BIKWFZF9.js";import"./ListItemBaseTemplate-DXoKIUzT.js";import"./Token-CA6Awd5t.js";import"./ScrollEnablement-2bJd9RZ5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyWlaMba.js";import"./ToggleButton-Bh2oTAth.js";import"./SuggestionItem-CbSqa2O4.js";import"./index-BkOfvqRQ.js";import"./Option-DS-TGLoK.js";import"./index-DIImDxSq.js";import"./SegmentedButton-C4Z1OrHK.js";import"./index-B1A2ONV2.js";import"./Select-2pNodCsm.js";import"./InvisibleMessage-vA_ZbJGm.js";import"./slim-arrow-down-BBKu_ZM0.js";import"./useIsRTL-HDA9Bb1C.js";import"./index-BWchkGL6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvWdAtXT.js";import"./group-2-CQ4OV2J0.js";import"./sort-descending-BOWqXbHY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cy9Kjuts.js";import"./utils-Bw_xVhJf.js";import"./index-CmvusNlc.js";import"./index-BPY_plO5.js";import"./index-DNH4Ez_N.js";import"./navigation-down-arrow-DTMX2fTv.js";import"./navigation-right-arrow-CI7CsRQ5.js";import"./navigation-right-arrow-BZMs7BWv.js";import"./useCurrentTheme-DmjoUoh_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DqvL999O.js";import"./debounce-D7W5PopO.js";import"./index-CD3_b8MJ.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
