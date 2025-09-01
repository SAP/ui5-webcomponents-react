import{j as o}from"./iframe-Diowpvbi.js";import{useMDXComponents as n}from"./index-BQd2Q0Z3.js";import{I as r,F as s}from"./CommandsAndQueries-COPBvCoL.js";import{M as l,C as a}from"./blocks-CoZBpVTI.js";import"./Tag-B0clkLGt.js";import"./index-D9YlVxTm.js";import"./copy-Cax_mWEs.js";import{a as m}from"./AnalyticalTableHooks.stories-CpkuYKtY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-1wgmtjtJ.js";import"./index-D0g3RjgB.js";import"./index-CQR2h6vO.js";import"./Link-h6HOkbi0.js";import"./addCustomCSSWithScoping-BGpjw9gY.js";import"./index-B-dBAONH.js";import"./index-Ds6FKbjF.js";import"./index-xypPraOX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNWGtsu7.js";import"./index-B-BwEr1u.js";import"./information-CDgRW97e.js";import"./sys-enter-2-DY02qdHz.js";import"./alert-BaFyoXY8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhYPycqA.js";import"./delete-D82QIl2_.js";import"./settings-D_pqPZRA.js";import"./NoData-js4-UjTg.js";import"./IllustratedMessage-DKMK9OFc.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CqyqbA4U.js";import"./index-D2yzdfYs.js";import"./slim-arrow-down-BnLxEjYc.js";import"./Input-CkOt0B6i.js";import"./ResponsivePopoverCommon.css-CASz0Dqp.js";import"./ValueStateMessage.css-Be7X1jMy.js";import"./Suggestions.css-DfleazkQ.js";import"./ListBoxItemGroupTemplate-Btw2hM9T.js";import"./ComboBoxItemGroup-DH1DiXqT.js";import"./ListItemBaseTemplate-DEOdvJQ9.js";import"./Token-CmrkdheL.js";import"./ScrollEnablement-zRS1AfRM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYhRCZSB.js";import"./ToggleButton-B5Eorhfv.js";import"./SuggestionItem-D8-nCGsC.js";import"./index-CpuXefiQ.js";import"./Option-DiTkpXiW.js";import"./index-Bpmgkvwx.js";import"./SegmentedButton-GLgVA5pX.js";import"./index-By75EMBa.js";import"./Select-DkjN3zvd.js";import"./InvisibleMessage-BqM01yov.js";import"./slim-arrow-down-CAPvKWjl.js";import"./useIsRTL-BHW67YEf.js";import"./index-jY33nSV8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JK8fml35.js";import"./group-2-BfuxawN7.js";import"./sort-descending-DDuzuuMf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMgvpgkt.js";import"./utils-5Skicxr4.js";import"./index-qMRwd3oc.js";import"./index-BNwZ6o10.js";import"./index-kMsV4LM3.js";import"./navigation-down-arrow-DnHUXefS.js";import"./navigation-right-arrow-DfguE_8X.js";import"./navigation-right-arrow-BKGMW_2E.js";import"./useCurrentTheme-OdwJVOQn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bi3yTViv.js";import"./debounce-D7W5PopO.js";import"./index-nZv_fEDZ.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
