import{j as o}from"./iframe-BCRKbB-F.js";import{useMDXComponents as n}from"./index-BX-rGI6y.js";import{I as r,F as s}from"./CommandsAndQueries-B-6PqVJi.js";import{M as l,C as a}from"./blocks-7Z_E6jI9.js";import"./Tag-DS_H74jk.js";import"./index-D-3HueK4.js";import"./copy-B5cEq6fF.js";import{a as m}from"./AnalyticalTableHooks.stories-C9OZA-p9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./index-C9k5hi-S.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-YwLF6LD4.js";import"./delete-Ld8CENCt.js";import"./settings-FT89pEZG.js";import"./NoData-DtHLQikX.js";import"./IllustratedMessage-VoUezW4G.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-mfRED6x5.js";import"./index-BpTW-c5S.js";import"./slim-arrow-down-BPFD1Mj1.js";import"./Input-CmmkFLaI.js";import"./ResponsivePopoverCommon.css-BpeopXwv.js";import"./ValueStateMessage.css-BJzDtIZE.js";import"./Suggestions.css-sLFaTK7q.js";import"./ListBoxItemGroupTemplate-DWt8WMfz.js";import"./ComboBoxItemGroup-LITK_YU1.js";import"./ListItemBaseTemplate-BOulBfG3.js";import"./Token-B8NvFI2b.js";import"./ScrollEnablement-CeBEvB5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-TvAAd95E.js";import"./ToggleButton-D6RX6jPt.js";import"./SuggestionItem-D6ESs6vy.js";import"./index-CqLDV1BV.js";import"./Option-BufIsNaK.js";import"./index-BCzW4i_i.js";import"./SegmentedButton-B0SB0VvP.js";import"./index-mpfJtdUF.js";import"./Select-BPSwgIYJ.js";import"./InvisibleMessage-BXR6Nu4L.js";import"./slim-arrow-down-COohbeSu.js";import"./useIsRTL-CHXXP87C.js";import"./index-CatAJS7G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DGgGSPMs.js";import"./group-2-3_abcVoF.js";import"./sort-descending-B0_QNBzC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-B65Hxqqj.js";import"./utils-DGVyR8av.js";import"./index-BHZNi0Sj.js";import"./index-BMlnEbTy.js";import"./index-Kc0S7rJM.js";import"./navigation-down-arrow-BKM0aIaY.js";import"./navigation-right-arrow-BQ8D2hLB.js";import"./navigation-right-arrow-D8MlM4bu.js";import"./useCurrentTheme-SWieicam.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BduD6r77.js";import"./debounce-D7W5PopO.js";import"./index-CvdpSJTy.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
