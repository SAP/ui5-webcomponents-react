import{j as o}from"./iframe-CgMbHIkI.js";import{useMDXComponents as n}from"./index-uQo7cCLJ.js";import{I as r,F as s}from"./CommandsAndQueries-BXDj4lkb.js";import{M as l,C as a}from"./blocks-CFocqrsp.js";import"./Tag-Dk7X5Tny.js";import"./index-D54ieI7L.js";import"./copy-Cpi-mOYC.js";import{a as m}from"./AnalyticalTableHooks.stories-1kGAT5ix.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ChYBHoyi.js";import"./index-DXZ48uHs.js";import"./index-Bjiw2xBb.js";import"./Link-BqFTwoRG.js";import"./addCustomCSSWithScoping-B687qvo6.js";import"./index-8_dTlaSG.js";import"./index-pQs3Bm3D.js";import"./index-X0m3PPe8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CnkwV5Xd.js";import"./index-B3DD2XIG.js";import"./information-DgjoEc_K.js";import"./sys-enter-2-C0WM_GHK.js";import"./alert-wRxwDyfo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJdaz7BC.js";import"./delete-BC3bBzWs.js";import"./settings-1F-0BWTy.js";import"./NoData-CLfDCq5G.js";import"./IllustratedMessage-C02CLFxV.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-fhsrZxOa.js";import"./index-C7ep3BZZ.js";import"./slim-arrow-down-C6871QHD.js";import"./Input-BUn11rhe.js";import"./ResponsivePopoverCommon.css-Bgg5pcPK.js";import"./ValueStateMessage.css-DO5UcoIB.js";import"./Suggestions.css-Jr9HB9gU.js";import"./ListBoxItemGroupTemplate-Du89At4T.js";import"./ComboBoxItemGroup-BAjaJtUi.js";import"./ListItemBaseTemplate-D-AVCzw3.js";import"./Token-DmKgq2o4.js";import"./ScrollEnablement-C9I3jXtf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdHlyVF_.js";import"./ToggleButton-DhSzo4t9.js";import"./SuggestionItem-C-MzrG9W.js";import"./index-4FJd9xIS.js";import"./Option-B6atmey2.js";import"./index-CuGkmgDQ.js";import"./SegmentedButton-fjDS9O7m.js";import"./index-C_T_y0ct.js";import"./Select-Bzw1E5rv.js";import"./InvisibleMessage-CSPRqXEs.js";import"./slim-arrow-down-IxdmmDCl.js";import"./useIsRTL-CXsGMYTx.js";import"./index-DXMjlp8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-k_aK8hHp.js";import"./group-2-yEwjUS7z.js";import"./sort-descending-BANgux84.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFsnjy_v.js";import"./utils-BLYUNJMF.js";import"./index-CwPWaTl1.js";import"./index-De4hafVj.js";import"./index-DrhVfMn_.js";import"./navigation-down-arrow-BUDC_MIr.js";import"./navigation-right-arrow-DSZJ-2kn.js";import"./navigation-right-arrow-D5kDwvSN.js";import"./useCurrentTheme-DG-46zZW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ie8jHGMw.js";import"./debounce-D7W5PopO.js";import"./index-5Ur0e5nd.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
