import{j as e}from"./iframe-DOJWwQPM.js";import{useMDXComponents as n}from"./index-D4GYqxG5.js";import{I as r,F as s}from"./CommandsAndQueries-DBgPcKIy.js";import{M as l,C as a}from"./blocks-UH_Armuh.js";import"./Tag-C5qooBCQ.js";import"./index-BzlDTQAu.js";import"./i18n-DSpjDgSK.js";import"./copy-DtHn9BZF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C0dnXtTj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CKKp0V8L.js";import"./index-BE18fnIz.js";import"./index-CAij4Fwu.js";import"./Link-OhZHx2sI.js";import"./addCustomCSSWithScoping-7a5LAVf5.js";import"./index-IwfXz8bd.js";import"./index-DWcAbIiW.js";import"./index-CCV0Si6x.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-lKnjzqmd.js";import"./index-DKP6N4eU.js";import"./information-BiSRDS7B.js";import"./sys-enter-2-Ct0rvJ7Z.js";import"./alert-DJAqfmG4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-NVkIFjwc.js";import"./delete-CM1g85K0.js";import"./settings-USDe9u6F.js";import"./NoData-D8-OUFng.js";import"./IllustratedMessage-_46LaT9t.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DWXCLmFF.js";import"./index-CE1heMCb.js";import"./slim-arrow-down-CS8FeIva.js";import"./Input-Bvv54WJ3.js";import"./ResponsivePopoverCommon.css-PVlGE3yL.js";import"./ValueStateMessage.css-O1QyKtEp.js";import"./Suggestions.css-XOF_Sz64.js";import"./ListBoxItemGroupTemplate-CHQ-wV3d.js";import"./ComboBoxItemGroup-BGf30V2s.js";import"./ListItemBaseTemplate-CNX0LT1O.js";import"./Token-BFiif2w7.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BC0Wl30E.js";import"./ToggleButton-s7-qI1Yi.js";import"./SuggestionItem-BNjcGuMf.js";import"./index-B4Xc4nLk.js";import"./Option-yF138sxw.js";import"./index-CDQ3KQpW.js";import"./SegmentedButton-D7bTb4kF.js";import"./index-k5BaVA8t.js";import"./Select-BfiyHYxw.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-B0GkeD5A.js";import"./useIsRTL-B0ileuje.js";import"./index-Ddj8LW1O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CHivle49.js";import"./group-2-DIzaJsIH.js";import"./sort-descending-BVaeaXuV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSRHX1mS.js";import"./utils-DdmGud8i.js";import"./index-7k0YV4zV.js";import"./index-BB-Q4KiC.js";import"./index-CJrQ7TDF.js";import"./navigation-down-arrow-B2P3gfXv.js";import"./navigation-right-arrow-Bx89aBq_.js";import"./navigation-right-arrow-nJ_rru5v.js";import"./useCurrentTheme-D4MDEsF-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWo2nEyE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DmakTfg7.js";import"./index-DNjxpIyn.js";import"./less-sSctrwpm.js";import"./index-DZ0xDHNc.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
