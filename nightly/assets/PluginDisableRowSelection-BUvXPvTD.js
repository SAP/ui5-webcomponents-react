import{j as e}from"./iframe-7wbn2r8t.js";import{useMDXComponents as n}from"./index-9iabKYe6.js";import{I as r,F as s}from"./CommandsAndQueries-ByqqJAkO.js";import{M as l,C as a}from"./blocks-DhPDsuAg.js";import"./Tag-B4Xu1fg_.js";import"./index-BbDQ_pma.js";import"./copy-BfB9wT2Y.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bdiu9tfa.js";import"./preload-helper-D9Z9MdNV.js";import"./index--oRJYcmq.js";import"./index-s9oyD4rV.js";import"./index-BXziIIti.js";import"./Link-CMqhXbfj.js";import"./addCustomCSSWithScoping-DOSmtfkU.js";import"./index-BcN9ZXV0.js";import"./index-B507ER4a.js";import"./index-DZM58baw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_u8Wshbe.js";import"./index-C5gTJ--F.js";import"./information-C3oesKbG.js";import"./sys-enter-2-5KLli2cX.js";import"./alert-BzwIc2o-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BnpF3OjW.js";import"./delete-Ctx4N0z9.js";import"./settings-4HzKKwXX.js";import"./NoData-BGxQDSSr.js";import"./IllustratedMessage-BveZRVBp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-zGaMdUH3.js";import"./index-CiCpUwzE.js";import"./slim-arrow-down-C49SaQEq.js";import"./Input-Sgf07TzX.js";import"./ResponsivePopoverCommon.css-C1IHs2uD.js";import"./ValueStateMessage.css-CaopdH9_.js";import"./Suggestions.css-DMTVnUhn.js";import"./ListBoxItemGroupTemplate-Cb4Xv0to.js";import"./ComboBoxItemGroup-BWtkqgMg.js";import"./ListItemBaseTemplate-D6zjfr9k.js";import"./Token-Cu1MDCvr.js";import"./ScrollEnablement-kUlDPclg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrLRAdo-.js";import"./ToggleButton-BWZvQxgb.js";import"./SuggestionItem-CQkQpe1M.js";import"./index-KzyioWg5.js";import"./Option-De8jxf-d.js";import"./index-CpHbzBAu.js";import"./SegmentedButton-DKw5tI_q.js";import"./index-B-j5vbZe.js";import"./Select-BNT7lrvG.js";import"./InvisibleMessage-TncjdQHo.js";import"./slim-arrow-down-OAr_tlQh.js";import"./useIsRTL-nMUuowmY.js";import"./index-DSDAeY17.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BukLYmJB.js";import"./group-2-CHK1-mKL.js";import"./sort-descending-ChAbIeqL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gSj6aK_G.js";import"./utils-BN-TBOgu.js";import"./index-DiRW6kuR.js";import"./index-BATSsTSG.js";import"./index-CYxXsDl5.js";import"./navigation-down-arrow-K_Q8K4Ef.js";import"./navigation-right-arrow-DESaq310.js";import"./navigation-right-arrow-BqhA1WvG.js";import"./useCurrentTheme-B4pThhTq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B2zVBKfY.js";import"./debounce-D7W5PopO.js";import"./paper-plane-Ci72_7Om.js";import"./index-ChzhF-e0.js";import"./less-CTlI8kUp.js";import"./index-BW3VTEXK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
