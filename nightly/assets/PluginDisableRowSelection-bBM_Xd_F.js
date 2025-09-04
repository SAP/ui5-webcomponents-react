import{j as o}from"./iframe-S1rR11cQ.js";import{useMDXComponents as n}from"./index-69KsrxW4.js";import{I as r,F as s}from"./CommandsAndQueries-7fbj5dZq.js";import{M as l,C as a}from"./blocks-C1kWdW5O.js";import"./Tag-Do4MK6Vd.js";import"./index-DjdMAx9G.js";import"./i18n-DSpjDgSK.js";import"./copy-DEUCxjzs.js";import{a as m}from"./AnalyticalTableHooks.stories-BXqJKOyj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./index-BO-Ud12y.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BYRCdEc9.js";import"./delete-Imu_QxJM.js";import"./settings-B_iY8jBT.js";import"./NoData-B-ELxJeH.js";import"./IllustratedMessage-B_RsJhsX.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-cZcTvwoH.js";import"./index-D3e7C-2T.js";import"./slim-arrow-down-DU0iuCt5.js";import"./Input-BFiJeabE.js";import"./ResponsivePopoverCommon.css-Dp9rYv_8.js";import"./ValueStateMessage.css-DP7y8aPL.js";import"./Suggestions.css-Ci1w_A7X.js";import"./ListBoxItemGroupTemplate-DF_dwaej.js";import"./ComboBoxItemGroup-DmqVeR1G.js";import"./ListItemBaseTemplate-DYhywRSV.js";import"./Token-r_fCtFrS.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbQSk8O2.js";import"./ToggleButton-8UTCVYbm.js";import"./SuggestionItem-CT5TG_5O.js";import"./index-CcdBc6FW.js";import"./Option-DYLlW_F-.js";import"./index-Cqbzrt3C.js";import"./SegmentedButton-BcJorwjo.js";import"./index-Cf3c9UmM.js";import"./Select-DG78L4ow.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CRHbxhfI.js";import"./useIsRTL-DdvIXurs.js";import"./index-BE-KkdkZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQfWDTJ0.js";import"./group-2-BLTcOHYG.js";import"./sort-descending-DwG6522S.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DC42DZTr.js";import"./utils-sSXAe6W0.js";import"./index-DN78M1wk.js";import"./index-CavZ-61D.js";import"./index-BJEczdPQ.js";import"./navigation-down-arrow-hL3YGD3q.js";import"./navigation-right-arrow-9j3TTsRx.js";import"./navigation-right-arrow-DwV_m_TK.js";import"./useCurrentTheme-CBSy01zR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4DGjUgH.js";import"./debounce-D7W5PopO.js";import"./index-BwzYicPU.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,o.jsx(s,{})]})}function Eo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Eo as default};
