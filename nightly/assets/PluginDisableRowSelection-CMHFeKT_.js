import{j as o}from"./iframe-D3WSfxnn.js";import{useMDXComponents as n}from"./index-INJaxUMc.js";import{I as r,F as s}from"./CommandsAndQueries-D0ehjJEo.js";import{M as l,C as a}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import"./i18n-DSpjDgSK.js";import"./copy-B0_WxO9i.js";import{a as m}from"./AnalyticalTableHooks.stories-F9P0BTGQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./index-BE0SODKX.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrnqMKPi.js";import"./delete-BOOuxbhQ.js";import"./settings-hCaP1_GJ.js";import"./NoData-CzSG2uvu.js";import"./IllustratedMessage-e0afxEz1.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6Yag-te.js";import"./index-DcN6Dcc5.js";import"./slim-arrow-down-D_XXp54g.js";import"./Input-B9Qhqcw-.js";import"./ResponsivePopoverCommon.css-CzEId8c-.js";import"./ValueStateMessage.css-DLLVegXt.js";import"./Suggestions.css-D771cyV0.js";import"./ListBoxItemGroupTemplate-Q3iFpAHb.js";import"./ComboBoxItemGroup-I1Y4Diaq.js";import"./ListItemBaseTemplate-D7zjd4B6.js";import"./Token-qJoofch3.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCfXaiqR.js";import"./ToggleButton-D2RCjgKZ.js";import"./SuggestionItem-CdqfJZ2k.js";import"./index-D2MDw8cl.js";import"./Option-DfeLnjsk.js";import"./index-CGCoEsnV.js";import"./SegmentedButton-C6mK86yp.js";import"./index-CXFDuLDf.js";import"./Select-Dls2nJby.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-2dqIAvum.js";import"./useIsRTL--4BOzxXK.js";import"./index-BqBHLTfL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrvNwjX5.js";import"./group-2-1PtLqjqY.js";import"./sort-descending-BY2QDSVP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZS191o9.js";import"./utils-BE8JeYQm.js";import"./index-DmfYB8pY.js";import"./index-u0S8NHsG.js";import"./index-B-8PQZmL.js";import"./navigation-down-arrow-L5mmSN-n.js";import"./navigation-right-arrow-6g9z3Q1C.js";import"./navigation-right-arrow-DwFbgTQb.js";import"./useCurrentTheme-DqJthjPR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BX7Usk7V.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BCqncAXY.js";import"./index-DP832n5M.js";import"./less-BJ0P-Kzq.js";import"./index-B_jwusFd.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,o.jsx(s,{})]})}function Lo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Lo as default};
