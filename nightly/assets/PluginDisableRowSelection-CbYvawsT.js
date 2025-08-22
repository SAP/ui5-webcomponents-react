import{j as o}from"./iframe-D47IesGI.js";import{useMDXComponents as n}from"./index-B-Cjj5vb.js";import{I as r,F as s}from"./CommandsAndQueries-BUssvnnv.js";import{M as l,C as a}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import"./copy-CpxPPhhd.js";import{a as m}from"./AnalyticalTableHooks.stories-Dmu3Wc1Y.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-BYtsHb6f.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdRf6Gn_.js";import"./delete-BdLzfl6f.js";import"./settings-D4RCu3f5.js";import"./NoData-DejRevwI.js";import"./IllustratedMessage-BUxe0n2B.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BOaFH31C.js";import"./index-DoOBs30V.js";import"./slim-arrow-down-CRL6N__0.js";import"./Input-BVNlr-7R.js";import"./ResponsivePopoverCommon.css-DcqdU9zO.js";import"./ValueStateMessage.css-Foo9e4QP.js";import"./Suggestions.css-Jvp1dCcK.js";import"./ListBoxItemGroupTemplate-C2Cbg4RB.js";import"./ComboBoxItemGroup-oNdpvv56.js";import"./ListItemBaseTemplate-xRzWPdIS.js";import"./Token-DlVRMaDD.js";import"./ScrollEnablement-DwY0RoAs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxLrmdZY.js";import"./ToggleButton-BnUl__nv.js";import"./SuggestionItem-v3I1qCjx.js";import"./index-Bu-eXKyI.js";import"./Option-BY9BYDVp.js";import"./index-C_AafgAi.js";import"./SegmentedButton-D7wPRwMg.js";import"./index-shpjVhsR.js";import"./Select-CR2ghGLB.js";import"./InvisibleMessage-7tcQYx8D.js";import"./slim-arrow-down-D_ImNcdv.js";import"./useIsRTL-CTOFbx1K.js";import"./index-BMjRkiVz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlK-n2jI.js";import"./group-2-Cp4gTzXo.js";import"./sort-descending-CDUMih-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-SEUed_fI.js";import"./utils-Gey8zOGR.js";import"./index-BFyflX6k.js";import"./index-BXcL-3gN.js";import"./index-CzfiA05G.js";import"./navigation-down-arrow-DcpTPJLm.js";import"./navigation-right-arrow-B9HO0DfC.js";import"./navigation-right-arrow-Brdl4Rhp.js";import"./useCurrentTheme-HVVP5WXO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qnRqtfun.js";import"./debounce-D7W5PopO.js";import"./index-SflDEuXk.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
