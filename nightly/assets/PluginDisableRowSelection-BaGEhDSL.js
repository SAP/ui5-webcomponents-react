import{j as e}from"./iframe-BVTjwwa8.js";import{useMDXComponents as n}from"./index-B7X7f4OL.js";import{I as r,F as s}from"./CommandsAndQueries-BxY3Aj9d.js";import{M as l,C as a}from"./blocks-eGiRc96Y.js";import"./Tag-Dd2A7Fyt.js";import"./index-CMlRFogN.js";import"./copy-B0_44_hm.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CGXLTMGM.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./index-B1gqswNl.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc-12NMD.js";import"./delete-CGtcDoe_.js";import"./settings-hVUhtZ6y.js";import"./NoData-DS35pzTF.js";import"./IllustratedMessage-x4VOj4Pw.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CNPrt5Xv.js";import"./index-BgpeKNsm.js";import"./slim-arrow-down-q0ei8TSg.js";import"./Input-co8T_wRa.js";import"./ResponsivePopoverCommon.css-CTpWDnyD.js";import"./ValueStateMessage.css-CklfWixh.js";import"./Suggestions.css-BFFNt1YV.js";import"./ListBoxItemGroupTemplate-BOi0kYXq.js";import"./ComboBoxItemGroup-DZ2t_1kl.js";import"./ListItemBaseTemplate-00D3SYn4.js";import"./Token-BTANNLIp.js";import"./ScrollEnablement-X9DTHKIv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BAXagnCs.js";import"./ToggleButton-B5voNYUw.js";import"./SuggestionItem-B50m8Gyh.js";import"./index-Jz8t2dvI.js";import"./Option-C1Pj2e5b.js";import"./index-D6BPa1_b.js";import"./SegmentedButton-CTr1olLB.js";import"./index-BhAe3Aw_.js";import"./Select-B4alDdu-.js";import"./InvisibleMessage-CETvZCdD.js";import"./slim-arrow-down-CbdcQMCz.js";import"./useIsRTL-D_4xzLEe.js";import"./index-DPurakIR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YUeSfDda.js";import"./group-2-B2FfwC3o.js";import"./sort-descending-DrsjlcI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BR2ycD-b.js";import"./utils-CHjabxlG.js";import"./index-ugx_8wyU.js";import"./index-CFjQC8Rl.js";import"./index-wRcNlb_M.js";import"./navigation-down-arrow-TGu9KNhG.js";import"./navigation-right-arrow-CvYYllXN.js";import"./navigation-right-arrow-CiN3ZT4_.js";import"./useCurrentTheme-DACJQMB7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Scuc8kwA.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BE9i310R.js";import"./index-DQgqs36o.js";import"./less-DrAJ6UF0.js";import"./index-CAZ62WrL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
