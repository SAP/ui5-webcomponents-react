import{j as o}from"./iframe-DrWv7kqk.js";import{useMDXComponents as n}from"./index-COfklbz7.js";import{I as r,F as s}from"./CommandsAndQueries-ChjYN9hd.js";import{M as l,C as a}from"./blocks-CanskeDB.js";import"./Tag-BpxYU6SX.js";import"./index-C2As05th.js";import"./copy-CdjvYQrK.js";import{a as m}from"./AnalyticalTableHooks.stories-CnJp7vsc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DNisCSrq.js";import"./index-BbYicUoT.js";import"./index-WYl7sJsX.js";import"./Link-BXBCrxeL.js";import"./addCustomCSSWithScoping-BHseblXn.js";import"./index-BObiMDAc.js";import"./index-BK7UTMeJ.js";import"./index-wUQSbSJP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHbcK7Ba.js";import"./index-DJ9rRFX2.js";import"./information-BlWxhQJP.js";import"./sys-enter-2-yLdXaTo2.js";import"./alert-D-b4CjR7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5_dIwBF.js";import"./delete-DGWWD-0M.js";import"./settings-uroI1SHr.js";import"./NoData-BgVa5JOE.js";import"./IllustratedMessage-C_P0VKyq.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BxKcZBZF.js";import"./index-c3XofLN-.js";import"./slim-arrow-down-y4onL6ln.js";import"./Input-C_5q9_az.js";import"./ResponsivePopoverCommon.css-D-NNNw7j.js";import"./ValueStateMessage.css-B0vfJtfY.js";import"./Suggestions.css-C2ZIvTf-.js";import"./ListBoxItemGroupTemplate-zsNoICuE.js";import"./ComboBoxItemGroup-CeeS4fDE.js";import"./ListItemBaseTemplate-BLP_ZL8i.js";import"./Token-D0IgVyFO.js";import"./ScrollEnablement-yOUkUvJ6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DThva79L.js";import"./ToggleButton-DEHdTx38.js";import"./SuggestionItem-DKn3SbjY.js";import"./index-DTmtyUb2.js";import"./Option-DaChME3c.js";import"./index-2qE_INpy.js";import"./SegmentedButton-DrvmVaQv.js";import"./index-Dfk_-AT2.js";import"./Select-BC5JSduM.js";import"./InvisibleMessage-AMXG7yy6.js";import"./slim-arrow-down-CTlrm5_E.js";import"./useIsRTL-XwDO1usx.js";import"./index-3r57QoEB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4dwn6g9.js";import"./group-2-BKV6ywji.js";import"./sort-descending-_QmakTRe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9mrtC8Rr.js";import"./utils-Bx9oMGrL.js";import"./index-BXypK-HU.js";import"./index-CgKvkbcK.js";import"./index-xZd7WN2d.js";import"./navigation-down-arrow-D_XU2zOL.js";import"./navigation-right-arrow-3Y1kkBwG.js";import"./navigation-right-arrow-DbCp59vu.js";import"./useCurrentTheme-gchjG-U4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-3so-AfDQ.js";import"./debounce-D7W5PopO.js";import"./index-_OTZPB8a.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
