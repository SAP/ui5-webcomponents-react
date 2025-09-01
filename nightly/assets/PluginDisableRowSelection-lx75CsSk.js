import{j as o}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as n}from"./index-DKEbDWFi.js";import{I as r,F as s}from"./CommandsAndQueries-c2dxMxjd.js";import{M as l,C as a}from"./blocks-C_ShsaTX.js";import"./Tag-B5i1kgB9.js";import"./index-DayVNiXE.js";import"./copy-BzQS_3Hx.js";import{a as m}from"./AnalyticalTableHooks.stories-Dhea2jta.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./index-DViW7Jtd.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BmeHBhTp.js";import"./delete-F09gA5Dh.js";import"./settings-BhGhHhJN.js";import"./NoData-D-hPe5Jl.js";import"./IllustratedMessage-DelxCU65.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-wls3tLIi.js";import"./index-YzpO1bI2.js";import"./slim-arrow-down-C2uRcD-I.js";import"./Input-cbgRVmBC.js";import"./ResponsivePopoverCommon.css-CsqmHnJg.js";import"./ValueStateMessage.css-BFdD6J-X.js";import"./Suggestions.css-Dlsv1RCW.js";import"./ListBoxItemGroupTemplate-BDkvDoJY.js";import"./ComboBoxItemGroup-BRZjTBQb.js";import"./ListItemBaseTemplate-YmJtdlBv.js";import"./Token-CxbDlSxT.js";import"./ScrollEnablement-Cg1kRRvV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcSpEqks.js";import"./ToggleButton-CPYcC8DT.js";import"./SuggestionItem-DZHEZgAV.js";import"./index-CRZygywU.js";import"./Option-CCwPNrFZ.js";import"./index-VX_m7H3h.js";import"./SegmentedButton-BWyd7qOx.js";import"./index-BVjgfLW4.js";import"./Select-D34ayOJd.js";import"./InvisibleMessage-BjdIRmAn.js";import"./slim-arrow-down-Bf-F8L6C.js";import"./useIsRTL-DzghZux-.js";import"./index-BqrSjPk3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C_kmjLm2.js";import"./group-2-BsbnQxFh.js";import"./sort-descending-Bq0m3INq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vwwP5RPb.js";import"./utils-DqMkz1_p.js";import"./index-DdbxcY2R.js";import"./index-BggI8XJY.js";import"./index-DN48Kmch.js";import"./navigation-down-arrow-DmtRZyiD.js";import"./navigation-right-arrow-CBj7BSte.js";import"./navigation-right-arrow-DqhSR76c.js";import"./useCurrentTheme--DIDrK0s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DduCQwPa.js";import"./debounce-D7W5PopO.js";import"./index-CHuQc1t9.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
