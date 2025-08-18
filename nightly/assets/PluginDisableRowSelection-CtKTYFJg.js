import{j as o}from"./iframe-DzQ21Lns.js";import{useMDXComponents as n}from"./index-BP8jxV1P.js";import{I as r,F as s}from"./CommandsAndQueries-BWveXsvx.js";import{M as l,C as a}from"./blocks-DR2wB9AJ.js";import"./Tag-CfB46NJC.js";import"./index-CNaVfoQo.js";import"./copy-BGzgj4Bd.js";import{a as m}from"./AnalyticalTableHooks.stories-CVyIiUMF.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";import"./index-CkGGqXom.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0r_9vZG.js";import"./delete-CTdMsL2W.js";import"./settings-CSLxx2dL.js";import"./NoData-6dIzoSes.js";import"./IllustratedMessage-B3UtCfR0.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dp7K6fby.js";import"./index-DsT2Cblh.js";import"./slim-arrow-down-BcVCCvLV.js";import"./Input-BBc0FPcy.js";import"./ResponsivePopoverCommon.css-BEW3XFGK.js";import"./ValueStateMessage.css-CAFhnqqF.js";import"./Suggestions.css-oidNGW3x.js";import"./ListBoxItemGroupTemplate-BaUuBQRM.js";import"./ComboBoxItemGroup-Bx1kITcG.js";import"./ListItemBaseTemplate-1GHgiBYL.js";import"./Token-B6x8t07X.js";import"./ScrollEnablement-EY3VdHjS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yc3QYJD2.js";import"./ToggleButton-VpguQDbL.js";import"./SuggestionItem-B83CxbOY.js";import"./index-CljpPXGO.js";import"./Option-OQFsvput.js";import"./index-DlxRvD7h.js";import"./SegmentedButton-DMI45c8b.js";import"./index-WjOtb6GN.js";import"./Select-D3cbLmw6.js";import"./InvisibleMessage-B2KrkcqD.js";import"./slim-arrow-down-Dh2WkWwy.js";import"./useIsRTL-DC-py9jD.js";import"./index-y47N6ek3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyHUrJqV.js";import"./group-2-OwMh3Ots.js";import"./sort-descending-YVjneWiS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DM-3FMRs.js";import"./utils-DdYpjhKE.js";import"./index-CFL_93ON.js";import"./index-DnuhIUKQ.js";import"./index-BhMasU6x.js";import"./navigation-down-arrow-DJSgxJP7.js";import"./navigation-right-arrow-BJKIkgSM.js";import"./navigation-right-arrow-CXhnY_Ll.js";import"./useCurrentTheme-TK9BLj79.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CH4JwDSd.js";import"./debounce-D7W5PopO.js";import"./index-CpMdG5Z8.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
