import{j as o}from"./iframe-D9TrNBgU.js";import{useMDXComponents as n}from"./index-DVnXt3Ou.js";import{I as r,F as s}from"./CommandsAndQueries-D4YJbg3c.js";import{M as l,C as a}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import"./copy-DLBvKbOK.js";import{a as m}from"./AnalyticalTableHooks.stories-uNW8YLYL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./index-CVrKfxdZ.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBf_Dw_c.js";import"./delete-Dr-66tAO.js";import"./settings-CxnE-5K_.js";import"./NoData-DDrlL7pG.js";import"./IllustratedMessage-B2-LKJi7.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-I2HuK0dM.js";import"./index-D06Uv0Pi.js";import"./slim-arrow-down-C2JXuKwB.js";import"./Input-DQQyXJAT.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./ValueStateMessage.css-DHgdSKUd.js";import"./Suggestions.css-Bf6rrCOA.js";import"./ListBoxItemGroupTemplate-DU5UcquD.js";import"./ComboBoxItemGroup-vHrK_DQ4.js";import"./ListItemBaseTemplate-ZtPbHRna.js";import"./Token-Coz-0Psc.js";import"./ScrollEnablement-DyC328cf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbZzwl2a.js";import"./ToggleButton-DCiP1WbP.js";import"./SuggestionItem-D_ZaevX8.js";import"./index-CP_h3Gqr.js";import"./Option-DQLWMMud.js";import"./index-DkJeF1qi.js";import"./SegmentedButton-DfvTsqIq.js";import"./index-Cc7NpnLn.js";import"./Select-DHXu7QxQ.js";import"./InvisibleMessage-B7KEwtPS.js";import"./slim-arrow-down-CjNPHzOs.js";import"./useIsRTL-CQal8GpR.js";import"./index-BxxqrhiV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B8GbiaN7.js";import"./group-2-D57pi6NC.js";import"./sort-descending-B9mtYWvv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DahENrtL.js";import"./utils-CQ0T0LrZ.js";import"./index-CUBqq7rX.js";import"./index-CCqFcpHS.js";import"./index-BL5y2Z3x.js";import"./navigation-down-arrow-BKi4Bg3e.js";import"./navigation-right-arrow-DruaLpXf.js";import"./navigation-right-arrow-Aay7hZd4.js";import"./useCurrentTheme-D_A9Q4B2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CKCvg6SL.js";import"./debounce-D7W5PopO.js";import"./index-DsRCr8km.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
