import{j as o}from"./iframe-D7jNN5F7.js";import{useMDXComponents as n}from"./index-DKysAdcf.js";import{I as r,F as s}from"./CommandsAndQueries-B3x-n25L.js";import{M as l,C as a}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import"./copy-DjcHAfNd.js";import{a as m}from"./AnalyticalTableHooks.stories-BmP7vUL2.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./index-C3oU0sTK.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrWTQEUd.js";import"./delete-BMcwn6C5.js";import"./settings-ooRwGldT.js";import"./NoData-CmmWac5w.js";import"./IllustratedMessage-CGjrQDe5.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ba41DV2y.js";import"./index-QO4ETt-1.js";import"./slim-arrow-down-ClFDM0XG.js";import"./Input-C1LBCJrC.js";import"./ResponsivePopoverCommon.css-MDF32GMH.js";import"./ValueStateMessage.css-CSvT2ncZ.js";import"./Suggestions.css-h4wD07M-.js";import"./ListBoxItemGroupTemplate-m32UL8v8.js";import"./ComboBoxItemGroup-MOGf7S7z.js";import"./ListItemBaseTemplate-Qur3Yd49.js";import"./Token-dgku7ZGE.js";import"./ScrollEnablement-DtvSga-i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWHZOOaU.js";import"./ToggleButton-BQaXQ2ri.js";import"./SuggestionItem-Cyq1l9Gv.js";import"./index-BHm2R3XB.js";import"./Option-_FDJMDEU.js";import"./index-njIvvZCY.js";import"./SegmentedButton-DfDY_QCz.js";import"./index-cKUCfcCB.js";import"./Select-CDYC53Ti.js";import"./InvisibleMessage-ClgnFC8X.js";import"./slim-arrow-down-B3FD46qZ.js";import"./useIsRTL-pM8eUPi3.js";import"./index-1d71x-Ip.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClyrPaST.js";import"./group-2-D_k1jUK1.js";import"./sort-descending-BjOIqvLu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9wKJ0ov.js";import"./utils-BRgWD3XM.js";import"./index-B6ReJZeR.js";import"./index-BJLgpe9x.js";import"./index-DmxdgylF.js";import"./navigation-down-arrow-DMsOsTOp.js";import"./navigation-right-arrow-FztiZH_C.js";import"./navigation-right-arrow-D7gRJcL2.js";import"./useCurrentTheme-Dy1oFGaa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B24FJ1pD.js";import"./debounce-D7W5PopO.js";import"./index-TuCRCHSI.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
