import{j as e}from"./iframe-DQlP_6Qv.js";import{useMDXComponents as n}from"./index-BXhipMBG.js";import{I as r,F as s}from"./CommandsAndQueries-CYuC6yI9.js";import{M as l,C as a}from"./blocks-B5a3gZGW.js";import"./Tag-BSiRJmHh.js";import"./index-DhT04Xs9.js";import"./copy-DA6pIWgW.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CQH8SH2V.js";import"./preload-helper-D9Z9MdNV.js";import"./index-hxdHCcXn.js";import"./index-6SE_GYer.js";import"./index-DztBgCxB.js";import"./Link-CIr5Lw-F.js";import"./addCustomCSSWithScoping-DaYz7Ef_.js";import"./index-5WDw669T.js";import"./index-s0msSqUd.js";import"./index-CAD4wHAa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-Sr5qI6.js";import"./index-DMuVL8ZX.js";import"./information-D9TZ110a.js";import"./sys-enter-2-DbOIPJDN.js";import"./alert-Boy3zLsV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg-36jCJ.js";import"./delete-CaVxvXJa.js";import"./settings-B1bN6gcG.js";import"./NoData-muKAeLMq.js";import"./IllustratedMessage-CYlCH6F8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B40cHQKs.js";import"./index-BK0EaxBy.js";import"./slim-arrow-down-CQHD_BrB.js";import"./Input-BsxLpfsK.js";import"./ResponsivePopoverCommon.css-DATz21Vs.js";import"./ValueStateMessage.css-CWvBG_nx.js";import"./Suggestions.css-BXPHU2eP.js";import"./ListBoxItemGroupTemplate-DZUU3Xv_.js";import"./ComboBoxItemGroup-73LiHIaA.js";import"./ListItemBaseTemplate-CTjAjayV.js";import"./Token-Z5IU-j9x.js";import"./ScrollEnablement-6VGfabhp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGwXcYIH.js";import"./ToggleButton-DlSwnN6b.js";import"./SuggestionItem-D1wzJv1s.js";import"./index-rC-K7l_B.js";import"./Option-BNwYbhXx.js";import"./index-DorD7nUV.js";import"./SegmentedButton-BBymgHch.js";import"./index-D7ZHlrhm.js";import"./Select-BMnD9RhX.js";import"./InvisibleMessage-DX5nnJX3.js";import"./slim-arrow-down-Cwx3eZbB.js";import"./useIsRTL-0JvlMTKu.js";import"./index-sbxtCj2e.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-UXJ6vS.js";import"./group-2-BDo86s0K.js";import"./sort-descending-_vLqc138.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxTyPwah.js";import"./utils-C-s4mjI-.js";import"./index-BXfFluxG.js";import"./index-CYRJoMmx.js";import"./index-ChezfNZe.js";import"./navigation-down-arrow-DArtWA0U.js";import"./navigation-right-arrow-BqiGYNmk.js";import"./navigation-right-arrow-BWmOXN6t.js";import"./useCurrentTheme-C89Am9JT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5gEQmBVM.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BjsxesMZ.js";import"./index-B7bck6f6.js";import"./less-I7yd6AVT.js";import"./index-BwUsRFpl.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

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
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
