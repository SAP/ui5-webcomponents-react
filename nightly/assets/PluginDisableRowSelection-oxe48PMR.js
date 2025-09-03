import{j as o}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as n}from"./index-DO7eBN2z.js";import{I as r,F as s}from"./CommandsAndQueries-5z2JhX-x.js";import{M as l,C as a}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import"./copy-DM6AHN8T.js";import{a as m}from"./AnalyticalTableHooks.stories-CIgjSOik.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./index-C7Xj3GeW.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqJrgc-x.js";import"./delete-CUXM36Gm.js";import"./settings-g1NOXTFX.js";import"./NoData-BfSz2Jb4.js";import"./IllustratedMessage-Bo2-9Wgw.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1TM8C73E.js";import"./index-DXcpIB8q.js";import"./slim-arrow-down-lM8f-Uz6.js";import"./Input-D5iz8gVF.js";import"./ResponsivePopoverCommon.css-BfjHIntt.js";import"./ValueStateMessage.css-BrUNqWph.js";import"./Suggestions.css-C4ig1fd6.js";import"./ListBoxItemGroupTemplate-DxlwIkTb.js";import"./ComboBoxItemGroup-zSoS-Ov_.js";import"./ListItemBaseTemplate-CAugTCWT.js";import"./Token-D49MTHA_.js";import"./ScrollEnablement-DMp5qR-R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6LGiTVa.js";import"./ToggleButton-BLZC0g81.js";import"./SuggestionItem-92M1Ikia.js";import"./index-Br4cY6Qw.js";import"./Option-DI25J3kC.js";import"./index-BbuGn4PW.js";import"./SegmentedButton-FzhhcgQ0.js";import"./index-BWFbO-Lg.js";import"./Select-Iz40cZG_.js";import"./InvisibleMessage-CU9-lL93.js";import"./slim-arrow-down-2towEIQe.js";import"./useIsRTL-C1trBNR6.js";import"./index-BX3qDpDF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CawSky8K.js";import"./group-2-dpD3se9c.js";import"./sort-descending-Dmsih093.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGtZMLio.js";import"./utils-BhcSyhLQ.js";import"./index-DFx_hLRP.js";import"./index-BGOVEiSw.js";import"./index-ChMRRx5d.js";import"./navigation-down-arrow-BiDKnIlg.js";import"./navigation-right-arrow-AjROisR1.js";import"./navigation-right-arrow-Cn7J3EaV.js";import"./useCurrentTheme-CfVTJDKN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CgTw5VBS.js";import"./debounce-D7W5PopO.js";import"./index-DvTGRhis.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
