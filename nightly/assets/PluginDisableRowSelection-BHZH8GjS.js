import{j as e}from"./iframe-C-EBr6B5.js";import{useMDXComponents as n}from"./index-CsHoO3vp.js";import{I as r,F as s}from"./CommandsAndQueries-uIAr-det.js";import{M as l,C as a}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import"./index-w0Ow44Ci.js";import"./i18n-DCXZOGva.js";import"./copy-u5h8VvvF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CDszC7uY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./index-DPNnv8Bc.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNDB_VXd.js";import"./delete-BvdG4V2u.js";import"./settings-B9da7Cna.js";import"./NoData-Bas3NaNU.js";import"./IllustratedMessage-D13zaZV5.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ccf_YzUR.js";import"./index-BQ5w9LDa.js";import"./slim-arrow-down-BKqJdj1T.js";import"./Input-Ds_HDP4O.js";import"./ResponsivePopoverCommon.css-CDBYINKk.js";import"./ValueStateMessage.css-B0uL2WsG.js";import"./Suggestions.css-B3PqFbjl.js";import"./ListBoxItemGroupTemplate-Bgmdm98P.js";import"./ComboBoxItemGroup-BwZX_rcF.js";import"./ListItemBaseTemplate-DJJcj1Yn.js";import"./Token-BBpcnF43.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DX4UvhQJ.js";import"./ToggleButton-BFDFB0sm.js";import"./SuggestionItem-6ARptsb6.js";import"./index-C4mGZgek.js";import"./Option-CuwMUGFB.js";import"./index-Dc87r9fg.js";import"./SegmentedButton-Brturu3l.js";import"./index-C96_EYB_.js";import"./Select-CKUn7KVG.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-B8bLmGYi.js";import"./useIsRTL-DGcoN34w.js";import"./index-BIxje1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6YASDbP.js";import"./group-2-BAcCCF5C.js";import"./sort-descending-ClNXTwB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnrGkxIO.js";import"./utils-B-nKspCA.js";import"./index-C2uJtNkV.js";import"./index-B2hA18x8.js";import"./index-CDeu0SSK.js";import"./navigation-down-arrow-BhSnyc1Q.js";import"./navigation-right-arrow-t2mKxsw7.js";import"./navigation-right-arrow-JtMK9OsX.js";import"./useCurrentTheme-DANdzbsK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWVlJWaR.js";import"./debounce-D7W5PopO.js";import"./paper-plane-C05qekUe.js";import"./index-DOZflY0X.js";import"./less-DrtzVZnk.js";import"./index-DTEtvo1o.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
