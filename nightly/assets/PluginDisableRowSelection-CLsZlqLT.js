import{j as e}from"./iframe-caVmfS0N.js";import{useMDXComponents as n}from"./index-CXGNJi-m.js";import{I as r,F as s}from"./CommandsAndQueries-DetWBOzr.js";import{M as l,C as a}from"./blocks-ZTuRQuXn.js";import"./Tag-D02fgpVR.js";import"./index-ChGg5Mmk.js";import"./copy-DWhnNq-F.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BCB-wVty.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BDC18DOY.js";import"./index-IhZ6wtTw.js";import"./index-Bs2xAB6r.js";import"./Link-CXOXdny5.js";import"./addCustomCSSWithScoping-QAXJ-c-T.js";import"./index-D2ylaH5D.js";import"./index-C-mTSqge.js";import"./index-CxKirG4i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGaiMck6.js";import"./index-CIcgqU5O.js";import"./information-Dyf6S5us.js";import"./sys-enter-2-D5_eC5h3.js";import"./alert-BiCZhGMN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C3ZVADDU.js";import"./delete-Coj8x0c2.js";import"./settings-BF6yTijn.js";import"./NoData-CsITxXfr.js";import"./IllustratedMessage-CTMgPAIw.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D20unOQc.js";import"./index-Cwz-GXgg.js";import"./slim-arrow-down-DGRzOAYw.js";import"./Input-WFpKrumU.js";import"./ResponsivePopoverCommon.css-Ce7KHyvw.js";import"./ValueStateMessage.css-BRyE1X0p.js";import"./Suggestions.css-CteNzd-N.js";import"./ListBoxItemGroupTemplate-BjfXbqSJ.js";import"./ComboBoxItemGroup-C0lfAAfP.js";import"./ListItemBaseTemplate-Cae7dQEd.js";import"./Token-Da1u6OUU.js";import"./ScrollEnablement-DgdQ7xkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMUaO3aP.js";import"./ToggleButton-lfA0Sh9N.js";import"./SuggestionItem-N9yMpNBd.js";import"./index-s22r0EiM.js";import"./Option-DyUZB-Rv.js";import"./index-CAkcfUNV.js";import"./SegmentedButton-CjrpYGhu.js";import"./index-ui_8MH4g.js";import"./Select-bTsVYF8t.js";import"./InvisibleMessage-X31FjsM3.js";import"./slim-arrow-down-ChlFFHmi.js";import"./useIsRTL-DKqS38_i.js";import"./index-BMPIp6h6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRe9wWWm.js";import"./group-2-B_WAeg2W.js";import"./sort-descending-BXjAOUZq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4SBQasY.js";import"./utils-BKtL8ae0.js";import"./index-D_Zb-Qtb.js";import"./index-ggLsWFgW.js";import"./index-DPOI5qRi.js";import"./navigation-down-arrow-BIm6SbwE.js";import"./navigation-right-arrow-mE_QgPeY.js";import"./navigation-right-arrow-oN1zG5y0.js";import"./useCurrentTheme-C15qikew.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BZoYXHai.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B8WUez_T.js";import"./index-Ba33ybf0.js";import"./less-GsgW5m6X.js";import"./index-BXO50M8O.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
