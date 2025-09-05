import{j as e}from"./iframe-BGSq42U4.js";import{useMDXComponents as n}from"./index-DdgODfaa.js";import{I as r,F as s}from"./CommandsAndQueries-DmG8Z04y.js";import{M as l,C as a}from"./blocks-DinJR8BJ.js";import"./Tag-DFLgZ7W6.js";import"./index-4G2XFF8s.js";import"./i18n-DCXZOGva.js";import"./copy-BkyD6IBJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BW4qHHwC.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CFLPIYxg.js";import"./index-DeoM-MQY.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-Dv5XzTWy.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DFxK7J9H.js";import"./delete-Dzl_3hnA.js";import"./settings-D01zQ7hv.js";import"./NoData-DVRj1UWp.js";import"./IllustratedMessage-DGYeVb0O.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DnmQBk2g.js";import"./index-BHQkJQiK.js";import"./slim-arrow-down-DLcfp9eI.js";import"./Input-BCjEB6tM.js";import"./ResponsivePopoverCommon.css-C97v6xTI.js";import"./ValueStateMessage.css-c8cGQ3y8.js";import"./Suggestions.css-hBw8WfKI.js";import"./ListBoxItemGroupTemplate-O6bJScLD.js";import"./ComboBoxItemGroup-Cyw7FPb_.js";import"./ListItemBaseTemplate-DPLSdGuC.js";import"./Token-Bj-WnEM-.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9eXVr7n.js";import"./ToggleButton-lj5dY9Vv.js";import"./SuggestionItem-e6p9a2qW.js";import"./index-CuzQn-ym.js";import"./Option-De9cvay_.js";import"./index-DsX1x0Cs.js";import"./SegmentedButton-Bs-9-uNd.js";import"./index-Bd7g7Uhh.js";import"./Select-s6cC4PfQ.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-tJmQ7xBW.js";import"./useIsRTL-UmUMTfkT.js";import"./index-BDRoTd8f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pKZg5tZw.js";import"./group-2-OlKOx7kW.js";import"./sort-descending-DZbNeaMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b3CRpkDf.js";import"./utils-BXniIs5V.js";import"./index-DV8x_VUY.js";import"./index-Bl0D5g66.js";import"./index-DHNxxH0D.js";import"./navigation-down-arrow-7ufWXDu9.js";import"./navigation-right-arrow-DL470iX4.js";import"./navigation-right-arrow-CLB8HeYS.js";import"./useCurrentTheme-CNFGjYI-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4kj3IR9.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BihcXvWE.js";import"./index-CMcW5V3Y.js";import"./less-Cr_OeLu9.js";import"./index-CJYJTirV.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

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
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
