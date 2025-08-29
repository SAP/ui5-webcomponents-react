import{j as o}from"./iframe-B3OL0dJj.js";import{useMDXComponents as n}from"./index-BacKYjfx.js";import{I as r,F as s}from"./CommandsAndQueries-CF0BaiA4.js";import{M as l,C as a}from"./blocks-DWSkzL_O.js";import"./Tag-Cz9uoO3f.js";import"./index-ICQad1Jx.js";import"./copy-BIhehpav.js";import{a as m}from"./AnalyticalTableHooks.stories-D2kTvojh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D7xFIu9y.js";import"./index-bmuDs-E9.js";import"./index-BM-Dt4Ms.js";import"./Link-B3I1DK3y.js";import"./addCustomCSSWithScoping-QT3VtH-b.js";import"./index-Cl7-VWhy.js";import"./index-BB1lQngG.js";import"./index-BvBfHyAK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdVXj32r.js";import"./index-DpJD6crE.js";import"./information-CsT7qq8I.js";import"./sys-enter-2-C6eVrxWF.js";import"./alert-D4Iro2pT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-64BVvMSH.js";import"./delete-D20JBxPW.js";import"./settings-omjh2iI4.js";import"./NoData-BDDO8du3.js";import"./IllustratedMessage-Ctv1I4UG.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-OMY4BRv7.js";import"./index-BRwxZr_p.js";import"./slim-arrow-down-HjvQdG02.js";import"./Input-CUVXXg7A.js";import"./ResponsivePopoverCommon.css-BzfoLh3k.js";import"./ValueStateMessage.css-Bg5AcRme.js";import"./Suggestions.css-CMqU9BCK.js";import"./ListBoxItemGroupTemplate-B2f83niS.js";import"./ComboBoxItemGroup-DOJ3tmN4.js";import"./ListItemBaseTemplate-DjdvHlw5.js";import"./Token-CFAmjSAI.js";import"./ScrollEnablement-T55LOece.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C5poq4N5.js";import"./ToggleButton-CXHi7Iti.js";import"./SuggestionItem-CICbtEWy.js";import"./index-DWeWBlNY.js";import"./Option-1FDXr6S6.js";import"./index-Bf9Y5VxI.js";import"./SegmentedButton-B-M1xCAz.js";import"./index-D6OusQ8V.js";import"./Select-CVc_qkqT.js";import"./InvisibleMessage-ByyXeQex.js";import"./slim-arrow-down-2tFwivWo.js";import"./useIsRTL-CZITtXzn.js";import"./index-BsubhM1D.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D0Kw7TrJ.js";import"./group-2-BMSViSkc.js";import"./sort-descending-CVvl3anL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UwlP0y3d.js";import"./utils-DtD9zSg1.js";import"./index-BKTQiEpx.js";import"./index-3LIQI1Mx.js";import"./index-Nwxrqq1G.js";import"./navigation-down-arrow-BCeBT4de.js";import"./navigation-right-arrow-B_nC9n3I.js";import"./navigation-right-arrow-CEOQ8RZr.js";import"./useCurrentTheme-hc_hNIbV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DV3BrsWn.js";import"./debounce-D7W5PopO.js";import"./index-BqvLyP5X.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
