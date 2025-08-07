import{j as o}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as n}from"./index-2SvYRCCw.js";import{I as r,F as s}from"./CommandsAndQueries-B0E3P6p2.js";import{M as l,C as a}from"./blocks-CrIALgP8.js";import"./Tag-66qvcRmY.js";import"./index-mxAgSE5r.js";import"./copy-DbyPBOXI.js";import{a as m}from"./AnalyticalTableHooks.stories-ovJatTLU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./index-qyBhFjGo.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNmLY4aq.js";import"./delete-CoWW_YJb.js";import"./settings-Dl2hvIY7.js";import"./NoData-DhrCvk48.js";import"./IllustratedMessage-BZ2f0wbu.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D3P6LcMm.js";import"./index-Gthds3gG.js";import"./slim-arrow-down-BvKl0HX1.js";import"./Input-K1MmYIzW.js";import"./ResponsivePopoverCommon.css-C9Zu8eKY.js";import"./ValueStateMessage.css-0fCoJ9a0.js";import"./Suggestions.css-DU-Tiy8t.js";import"./ListBoxItemGroupTemplate-Byd0blKb.js";import"./ComboBoxItemGroup-DhWcWs45.js";import"./ListItemBaseTemplate-B9sZlVj4.js";import"./Token-DOjTT1Xq.js";import"./ScrollEnablement-B5ISBZej.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-GxkPSEye.js";import"./ToggleButton-qSP1q9mv.js";import"./SuggestionItem-C6_chZGf.js";import"./index-DpGNDeqz.js";import"./Option-D5R66SZP.js";import"./index-BeaqvZoz.js";import"./SegmentedButton-YHRsBGL8.js";import"./index-Bo-zVT_R.js";import"./Select-C6uF65be.js";import"./InvisibleMessage-DLe-kdrD.js";import"./slim-arrow-down-CtYyvMXa.js";import"./useIsRTL-DI3zrK8m.js";import"./index-CTy0VkN3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKP6ESEn.js";import"./group-2-Bewtjb3F.js";import"./sort-descending-BpBAIAuX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-BFCEptBt.js";import"./utils-rXmyLz49.js";import"./index-Bel1DcL3.js";import"./index-BpCltbmx.js";import"./index-dDjbOQ7r.js";import"./navigation-down-arrow-Cyn0Mokn.js";import"./navigation-right-arrow-DTdNlNbb.js";import"./navigation-right-arrow-B_RLXoJn.js";import"./useCurrentTheme-BWqNH_bL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CUMn0SnR.js";import"./debounce-D7W5PopO.js";import"./index-dddZC_Ni.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
