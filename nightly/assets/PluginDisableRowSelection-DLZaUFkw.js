import{j as o}from"./iframe-BxEu-xci.js";import{useMDXComponents as n}from"./index-DIpNHUFd.js";import{I as r,F as s}from"./CommandsAndQueries-BL1k5Lab.js";import{M as l,C as a}from"./blocks-DPfoGqoC.js";import"./Tag-BNi2hR4G.js";import"./index-BorC4J59.js";import"./copy-byxAjSE6.js";import{a as m}from"./AnalyticalTableHooks.stories-HWmY7zip.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CFj32LYi.js";import"./index-CL8FjSwM.js";import"./index-CnHUdtnF.js";import"./Link-CkCyRMbi.js";import"./addCustomCSSWithScoping-C3RRJQPN.js";import"./index-DSeLD822.js";import"./index-Dzht26Rp.js";import"./index-BV37wPbr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dYhLm2AL.js";import"./index-zhC6_est.js";import"./information-BKw42Lxc.js";import"./sys-enter-2-BkwngAtf.js";import"./alert-DQ3naR-W.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BH93_Lsj.js";import"./delete-CYGtkaxN.js";import"./settings-eZTEBWqi.js";import"./NoData-CPb97MZw.js";import"./IllustratedMessage-Cxzzm7cA.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CrDGa_wI.js";import"./index-zRLag29-.js";import"./slim-arrow-down-UD2Q1IDE.js";import"./Input-CgWZ-qAo.js";import"./ResponsivePopoverCommon.css-CWKaQ37A.js";import"./ValueStateMessage.css-BD9264Ua.js";import"./Suggestions.css-PvISQ8RB.js";import"./ListBoxItemGroupTemplate-B7TcVOYF.js";import"./ComboBoxItemGroup-CPr8tLri.js";import"./ListItemBaseTemplate-B-1oyib3.js";import"./Token-967xuEKh.js";import"./ScrollEnablement-B0qFQ7DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDZZwHz8.js";import"./ToggleButton-BnmaRB9r.js";import"./SuggestionItem-DrN6FdPk.js";import"./index-BZeUxVa-.js";import"./Option-C7146fjq.js";import"./index-YaJgyAqd.js";import"./SegmentedButton-Dc-edv9U.js";import"./index-COSAVkse.js";import"./Select-B5DeL5zX.js";import"./InvisibleMessage-CwUOjoUf.js";import"./slim-arrow-down-poKh_hcw.js";import"./useIsRTL-BpqbY7M4.js";import"./index-DSA_Eb7Y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QgylPsvJ.js";import"./group-2-Bluuis61.js";import"./sort-descending-CFm0YXL_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D68zLiR-.js";import"./utils-BDjXc7bK.js";import"./index-Bv-tSzmM.js";import"./index-D63mSLbN.js";import"./index-D7M3tNXI.js";import"./navigation-down-arrow-DVVrIqSy.js";import"./navigation-right-arrow-9X3lJ24P.js";import"./navigation-right-arrow-Ch2GBoCa.js";import"./useCurrentTheme-DFuvxmk_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DHucAflH.js";import"./debounce-D7W5PopO.js";import"./index-DT2P5I7N.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
