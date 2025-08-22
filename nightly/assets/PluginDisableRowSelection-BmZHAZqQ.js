import{j as o}from"./iframe-C6IJVCey.js";import{useMDXComponents as n}from"./index-Ds5KjzB0.js";import{I as r,F as s}from"./CommandsAndQueries-Bd9H39B6.js";import{M as l,C as a}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import"./copy-CbqLCcHM.js";import{a as m}from"./AnalyticalTableHooks.stories-Dx2NT3Dj.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-DmVW3kBm.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Zhit5amx.js";import"./delete-aHHOuuds.js";import"./settings-CaUhFBfT.js";import"./NoData-JQj0GdaH.js";import"./IllustratedMessage-BS85q4Yt.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6RVTiiT.js";import"./index-qA8_yrjn.js";import"./slim-arrow-down-CwgCCUKm.js";import"./Input-x1q94poq.js";import"./ResponsivePopoverCommon.css-BVZ5OAV_.js";import"./ValueStateMessage.css-DPjopeIN.js";import"./Suggestions.css-CiUwfxD-.js";import"./ListBoxItemGroupTemplate-BIko6feT.js";import"./ComboBoxItemGroup-DPpPogP1.js";import"./ListItemBaseTemplate-BVssUnLn.js";import"./Token-ChcB-5Ws.js";import"./ScrollEnablement-DfCxcIin.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gdtXb5F2.js";import"./ToggleButton-DWOUuGjj.js";import"./SuggestionItem-CUDCE1RV.js";import"./index-CpJZBQzM.js";import"./Option-BeuU2j7g.js";import"./index-PtBujVy-.js";import"./SegmentedButton-DhZUEkWh.js";import"./index-DxPYvRTC.js";import"./Select-C7aDvX2p.js";import"./InvisibleMessage-BZfjRnJZ.js";import"./slim-arrow-down-BAej_MsU.js";import"./useIsRTL-LYqCZWtn.js";import"./index-D_T8LUzH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhfoG3wP.js";import"./group-2-TZSiJNJJ.js";import"./sort-descending-BaG4v9mS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-alTfv3-p.js";import"./utils-qSGpanwl.js";import"./index-DoVpOxB3.js";import"./index-62xBBkuk.js";import"./index-Bejl1epP.js";import"./navigation-down-arrow-DUB_9yJR.js";import"./navigation-right-arrow-D2MkXcV7.js";import"./navigation-right-arrow-CiZi-qcJ.js";import"./useCurrentTheme-CkuDZfer.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFSubTk6.js";import"./debounce-D7W5PopO.js";import"./index-DuV8laoQ.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
