import{j as o}from"./iframe-ir6pYnmz.js";import{useMDXComponents as n}from"./index-41o0Td7A.js";import{I as r,F as s}from"./CommandsAndQueries-b6zt1eWd.js";import{M as l,C as a}from"./blocks-D_tGmZuN.js";import"./Tag-DRGeWEus.js";import"./index-e4AcpL9G.js";import"./copy-BlUsduAp.js";import{a as m}from"./AnalyticalTableHooks.stories-BgNDbnYG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./index-BbtZuvgL.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwMJwtSz.js";import"./delete-CmyvenUA.js";import"./settings-Bl6bQc6H.js";import"./NoData-DxhmC_91.js";import"./IllustratedMessage-BTBpKBnW.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-sllTisPT.js";import"./index-Chn6LRAy.js";import"./slim-arrow-down-DIhPSUlE.js";import"./Input-CT2v4mLF.js";import"./ResponsivePopoverCommon.css-CAhax-LW.js";import"./ValueStateMessage.css-DXEXnL2N.js";import"./Suggestions.css-DVkCnc2y.js";import"./ListBoxItemGroupTemplate-BxUFdl0w.js";import"./ComboBoxItemGroup-CdScSe_V.js";import"./ListItemBaseTemplate-GBw0Nk1X.js";import"./Token-B1N_8NmE.js";import"./ScrollEnablement-DaGY4Jm-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CDRG7U85.js";import"./ToggleButton-f5GCJkmp.js";import"./SuggestionItem-CuzhU48j.js";import"./index-DZ8NIWLE.js";import"./Option-CT-dyvBc.js";import"./index-aBA0PLh-.js";import"./SegmentedButton-C6EyhWUa.js";import"./index-CXc2Eu8C.js";import"./Select-De9RNiJH.js";import"./InvisibleMessage-q2TaioBA.js";import"./slim-arrow-down-DtlJr3sY.js";import"./useIsRTL-Da2zSY1x.js";import"./index-DAsbl867.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPo0n3ee.js";import"./group-2-MQdYi-0x.js";import"./sort-descending-D2xxVNEk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BvZ0UPF0.js";import"./utils-D-cGwZG0.js";import"./index-hBVsNMVz.js";import"./index-C1scF0QK.js";import"./index-aiDUSRvd.js";import"./navigation-down-arrow-Cwg074OW.js";import"./navigation-right-arrow-IPve_ban.js";import"./navigation-right-arrow-vWKMw0EP.js";import"./useCurrentTheme-DTjaKwLS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-WEKLa-kK.js";import"./debounce-D7W5PopO.js";import"./index-1jK9MjSz.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
