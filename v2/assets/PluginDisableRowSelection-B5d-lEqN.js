import{j as o}from"./iframe-CMv2_fr8.js";import{useMDXComponents as n}from"./index-BCZO-1se.js";import{I as r,F as s}from"./CommandsAndQueries-UgVWTBkO.js";import{M as l,C as a}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import"./copy-Bp5geyDe.js";import{a as m}from"./AnalyticalTableHooks.stories-BSzstlQP.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./index-51EQIK1-.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bx3b2TDp.js";import"./delete-CalXTGlT.js";import"./settings-CKdoFgwl.js";import"./NoData-p29COnSK.js";import"./IllustratedMessage-C87-LIvH.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BQ0Mdx5M.js";import"./index-BxytC64g.js";import"./slim-arrow-down-BTfvD9aU.js";import"./Input-Bl2hG8Lo.js";import"./ResponsivePopoverCommon.css-TrKPArzz.js";import"./ValueStateMessage.css-CQDFsMMJ.js";import"./Suggestions.css-Ak-2B7T4.js";import"./ListBoxItemGroupTemplate-RY11pEtQ.js";import"./ComboBoxItemGroup-D_6Q9e7Q.js";import"./ListItemBaseTemplate-CQloCMYu.js";import"./Token-DU6rx9F8.js";import"./ScrollEnablement-T_D09lMU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D89_4FyU.js";import"./ToggleButton-OE-lMKYf.js";import"./SuggestionItem-StPux35r.js";import"./index-BTmpWJxg.js";import"./Option-h29ztJ0M.js";import"./index-CcEbMbla.js";import"./SegmentedButton-C64IbfpW.js";import"./index-BuFCuT2D.js";import"./Select-CqjrQ-1B.js";import"./InvisibleMessage-BDnkulxx.js";import"./slim-arrow-down-B9Cmh7Gb.js";import"./useIsRTL-CH3TFmG6.js";import"./index-CJ5r_NfY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkahIsh0.js";import"./group-2-CDhOjwXT.js";import"./sort-descending-Ipw7pnw4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmaCr3G1.js";import"./utils-ChWvBl6r.js";import"./index-DEGIPmEx.js";import"./index-CzKz2Ioj.js";import"./index-DHARM5pI.js";import"./navigation-down-arrow-DIfJAMnS.js";import"./navigation-right-arrow-Cgv7L7KE.js";import"./navigation-right-arrow-CeyNkbEW.js";import"./useCurrentTheme-DwDORL7y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C3LCctj_.js";import"./debounce-D7W5PopO.js";import"./index-BoSkNmP1.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
