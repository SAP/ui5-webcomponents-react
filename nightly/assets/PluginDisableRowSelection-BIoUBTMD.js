import{j as o}from"./iframe-BZQDLaud.js";import{useMDXComponents as n}from"./index-C_GG0ZGD.js";import{I as r,F as s}from"./CommandsAndQueries-DWGWAVRo.js";import{M as l,C as a}from"./blocks-Cx9bcs1C.js";import"./Tag-D-gB3YeX.js";import"./index-DJN5YABY.js";import"./copy-BROMiSoG.js";import{a as m}from"./AnalyticalTableHooks.stories-wBfZaxgs.js";import"./preload-helper-Ct5FWWRu.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./index-CKSa3A9-.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SnsQcBha.js";import"./delete-CLfbLOEn.js";import"./settings-B-F6TIjI.js";import"./NoData-CYc99N5U.js";import"./IllustratedMessage-VhUvlZ45.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C1Iw_W8O.js";import"./index-Cb6cMKiE.js";import"./slim-arrow-down-CLpBmF95.js";import"./Input-DWSj0jbp.js";import"./ResponsivePopoverCommon.css-DjqZq9sD.js";import"./ValueStateMessage.css-D3ij8aoW.js";import"./Suggestions.css-DSv3s41Y.js";import"./ListBoxItemGroupTemplate-B_tg8R6u.js";import"./ComboBoxItemGroup-Deq_nHvQ.js";import"./ListItemBaseTemplate-Bl0LNXUa.js";import"./Token-Bd3fmoPc.js";import"./ScrollEnablement-r9acVsK1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQOO1Zsr.js";import"./ToggleButton-b3oBwZZq.js";import"./SuggestionItem-gl78ccMD.js";import"./index-Dpu3p2WF.js";import"./Option-BivDrOBz.js";import"./index-C8Fyun0P.js";import"./SegmentedButton-BVtCBJOm.js";import"./index-CkFk2rvY.js";import"./Select-CncfGb0r.js";import"./InvisibleMessage-BonTwXKe.js";import"./slim-arrow-down-XixAgIwt.js";import"./useIsRTL-DZvFLTA0.js";import"./index-_38F1i9k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Z_kurjTQ.js";import"./group-2-RO-D6umw.js";import"./sort-descending-_g6ChRWa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVI9GcFP.js";import"./utils-pGJlkZlt.js";import"./index-BamKFxC-.js";import"./index-ClooUb3H.js";import"./index-CVSnJKQU.js";import"./navigation-down-arrow-DdNFu9fj.js";import"./navigation-right-arrow-BiRK2Ki_.js";import"./navigation-right-arrow-3Dltep9_.js";import"./useCurrentTheme-5r1dq2J6.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BJyAe1mR.js";import"./debounce-D7W5PopO.js";import"./index-DnwX6h_J.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
