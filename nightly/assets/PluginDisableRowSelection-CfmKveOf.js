import{j as o}from"./iframe-CG2rGjbc.js";import{useMDXComponents as n}from"./index-DS69H-n6.js";import{I as r,F as s}from"./CommandsAndQueries-DskZpT92.js";import{M as l,C as a}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import"./copy-Cj_PeOWN.js";import{a as m}from"./AnalyticalTableHooks.stories-D-ri1bAM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./index-vBa65tZZ.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BekTqDkh.js";import"./delete-CPTRq9yh.js";import"./settings-DWEJ_gda.js";import"./NoData-OzuE5q8j.js";import"./IllustratedMessage-fIXnbhow.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BFsxy39e.js";import"./index-DWchyRkq.js";import"./slim-arrow-down-B6ZGeZyP.js";import"./Input-D_cunrq3.js";import"./ResponsivePopoverCommon.css-ZxvNyTGX.js";import"./ValueStateMessage.css-DQP0hkeA.js";import"./Suggestions.css-BEa1e1bh.js";import"./ListBoxItemGroupTemplate-D1PADeY5.js";import"./ComboBoxItemGroup-B6S_XDKB.js";import"./ListItemBaseTemplate-DKtp7oXq.js";import"./Token-DnsYDL6G.js";import"./ScrollEnablement-D96l-16O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYmen0Jk.js";import"./ToggleButton-B6A9SDf5.js";import"./SuggestionItem-DH8pT6T8.js";import"./index-Oh9WLt-q.js";import"./Option-DXBBjhZz.js";import"./index-BsAvd2zC.js";import"./SegmentedButton-CBfx5wl-.js";import"./index-JBBiy_eP.js";import"./Select-DWo_Lub7.js";import"./InvisibleMessage-C2yLfqUK.js";import"./slim-arrow-down-DmJvDhwU.js";import"./useIsRTL-CMFeNktt.js";import"./index-4G4pslYn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DHDOumVO.js";import"./group-2-CJMBKFkN.js";import"./sort-descending-DArodGTD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Xwbj5fV9.js";import"./utils-fHUo6XIf.js";import"./index-aCo9U2xx.js";import"./index-zroShj9r.js";import"./index-2K0DQ2LF.js";import"./navigation-down-arrow-NWSQUDrt.js";import"./navigation-right-arrow-rBI3rFQp.js";import"./navigation-right-arrow-tevQ1gbb.js";import"./useCurrentTheme-DRE7X6Nh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-1_NbfYEK.js";import"./debounce-D7W5PopO.js";import"./index-Lf5lWW3e.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
