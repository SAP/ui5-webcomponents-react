import{j as o}from"./iframe-D5q1aMGI.js";import{useMDXComponents as n}from"./index-B6q-95ic.js";import{I as r,F as s}from"./CommandsAndQueries-B7jUlW4q.js";import{M as l,C as a}from"./blocks-VrnxRsTA.js";import"./Tag-DDiTsJ0v.js";import"./index-YdpDWp2e.js";import"./copy-BKgapaDk.js";import{a as m}from"./AnalyticalTableHooks.stories-dSzt4GWq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BCRNDJSO.js";import"./index-B87mq1Uz.js";import"./index-DEUGWJD9.js";import"./Link-CDAcJh87.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-S9YU7LKi.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";import"./index-Bo48Ce9s.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CsHCxr67.js";import"./delete-CrB9HqG2.js";import"./settings-DECvLj5S.js";import"./NoData-CR8msYbY.js";import"./IllustratedMessage-CY0-lqad.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-a_c2cpaY.js";import"./index-qOXfK827.js";import"./slim-arrow-down-BJL2q3GT.js";import"./Input-Dojvmff0.js";import"./ResponsivePopoverCommon.css-BbYcEfwA.js";import"./ValueStateMessage.css-CaAok0mJ.js";import"./Suggestions.css-C9HB9yUf.js";import"./ListBoxItemGroupTemplate-BTRpmdMA.js";import"./ComboBoxItemGroup-BRFN36VG.js";import"./ListItemBaseTemplate-DmsDSmvD.js";import"./Token-DgG--4Nk.js";import"./ScrollEnablement-Cc56P2Pl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-bTvWpL2a.js";import"./ToggleButton-BLsbW6Ur.js";import"./SuggestionItem-DfkCVKrX.js";import"./index-DirFAqd5.js";import"./Option-BIDYQynm.js";import"./index-C1UWc2vk.js";import"./SegmentedButton-uWErduWG.js";import"./index-C9aedMdp.js";import"./Select-Xy9jFddO.js";import"./InvisibleMessage-BPUavHeu.js";import"./slim-arrow-down-Cqz8o9QR.js";import"./useIsRTL-D1kDzTdS.js";import"./index-BgZZQCdH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnacD2bE.js";import"./group-2-CAD4eGiy.js";import"./sort-descending-CqNy--fc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-7YvS3mms.js";import"./utils-DrhYszZU.js";import"./index-D97lUxga.js";import"./index-uhetbkTp.js";import"./index-DM1CdrI2.js";import"./navigation-down-arrow-5y5ThNfn.js";import"./navigation-right-arrow--Ae6reK-.js";import"./navigation-right-arrow-B_hqUMX3.js";import"./useCurrentTheme-tlImnX2L.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DIfwf-Hn.js";import"./debounce-D7W5PopO.js";import"./index-a1OySSw1.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
