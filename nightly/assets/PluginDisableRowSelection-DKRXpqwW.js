import{j as o}from"./iframe-DvixYE7k.js";import{useMDXComponents as n}from"./index-DvcP8w-F.js";import{I as r,F as s}from"./CommandsAndQueries-BP59pkyc.js";import{M as l,C as a}from"./blocks-CTAO90yM.js";import"./Tag-CHowEnLY.js";import"./index-BGjL_ZJV.js";import"./copy-CVzsP6l9.js";import{a as m}from"./AnalyticalTableHooks.stories-BFbtBW6-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./index-BiNCRTue.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV6FmXzT.js";import"./delete-DfkPPTxM.js";import"./settings-CpTWOhw2.js";import"./NoData-MQ_pQWWk.js";import"./IllustratedMessage-BgMufHo_.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-UmpMcvZO.js";import"./index-DXioqJ7a.js";import"./slim-arrow-down-Bl8g1r6x.js";import"./Input-COwe4oO2.js";import"./ResponsivePopoverCommon.css-B5iSbHgX.js";import"./ValueStateMessage.css-Dh9bgGbN.js";import"./Suggestions.css-BE8JkRfe.js";import"./ListBoxItemGroupTemplate-CiMlm5iD.js";import"./ComboBoxItemGroup-B1t1w55_.js";import"./ListItemBaseTemplate-0XXQ3IbQ.js";import"./Token-Cm2Tayzi.js";import"./ScrollEnablement-C5NyvXGb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FwzaVAP_.js";import"./ToggleButton-clmXqNez.js";import"./SuggestionItem-JpbR4qH1.js";import"./index-DombZ1wK.js";import"./Option-CbzqeI1G.js";import"./index-6pWnif7a.js";import"./SegmentedButton-yBYK-j2o.js";import"./index-BnQriH7I.js";import"./Select-DsKB4JBR.js";import"./InvisibleMessage-BYn7ctRV.js";import"./slim-arrow-down-BZHFnOJT.js";import"./useIsRTL-fdT0zKkd.js";import"./index-TXUBpY7W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C26dzaVP.js";import"./group-2-BQg-Xl_q.js";import"./sort-descending-Bs7VQC0E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DYUnAhQW.js";import"./utils-8sBoC5N8.js";import"./index-CGO1z9YQ.js";import"./index-DxdvjxfF.js";import"./index-Hon5Q8Ho.js";import"./navigation-down-arrow-DyLmalXC.js";import"./navigation-right-arrow-Cpn7w1aF.js";import"./navigation-right-arrow-BCj9CE-X.js";import"./useCurrentTheme-BBmJKieJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CqX4IX3j.js";import"./debounce-D7W5PopO.js";import"./index-B8ul9-ip.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
