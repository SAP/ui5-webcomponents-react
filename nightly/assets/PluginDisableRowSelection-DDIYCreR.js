import{j as e}from"./iframe-L-onm66G.js";import{useMDXComponents as n}from"./index-B-8X1idt.js";import{I as r,F as s}from"./CommandsAndQueries-CjMnaUpZ.js";import{M as l,C as a}from"./blocks-CAXm6uro.js";import"./Tag-o6hxXhYX.js";import"./index-Dko-x7sv.js";import"./copy-CyGTlTXm.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B6a9T0HW.js";import"./preload-helper-D9Z9MdNV.js";import"./index-JuCVJ27S.js";import"./index-CQskOaEx.js";import"./index-CLaX2vCd.js";import"./Link-CoryH5zD.js";import"./addCustomCSSWithScoping-t6gTkkzF.js";import"./index-DT1EUYqc.js";import"./index-BHqaG8Gu.js";import"./index-ChEZQsiK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-TcA8Vj.js";import"./index-8n5QiMPz.js";import"./information-IlAVq7Cq.js";import"./sys-enter-2-CVLUP2WD.js";import"./alert-DwHKgn-N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1_8XGg8.js";import"./delete-BP7Y4W0Z.js";import"./settings-BSMVF4P8.js";import"./NoData-DnnW4MlD.js";import"./IllustratedMessage-CrIvOtjh.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BNsi7JET.js";import"./index-Ce5VAjSH.js";import"./slim-arrow-down-2tkvGwp5.js";import"./Input-nqzPZ96D.js";import"./ResponsivePopoverCommon.css-D-PzE_uD.js";import"./ValueStateMessage.css-BaFYLAgr.js";import"./Suggestions.css-D-XGNpUr.js";import"./ListBoxItemGroupTemplate-B6VO1di5.js";import"./ComboBoxItemGroup-DJNgoJAP.js";import"./ListItemBaseTemplate-DP9XcBYw.js";import"./Token-BVbFDKE3.js";import"./ScrollEnablement-KL0tx3I1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_8XW66x.js";import"./ToggleButton-DCwG-sk7.js";import"./SuggestionItem-DAuqasmm.js";import"./index-B9nLBvvk.js";import"./Option-BNL500vH.js";import"./index-CpL49Q8X.js";import"./SegmentedButton-BHylJxn3.js";import"./index-rpzDZ4-g.js";import"./Select-wICm3x2r.js";import"./InvisibleMessage-Cke9mTfM.js";import"./slim-arrow-down-CT86qGUz.js";import"./useIsRTL-DCVW4Rtb.js";import"./index-DktfzuQk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7JNINRu.js";import"./group-2-Chn_1rqX.js";import"./sort-descending-2FxNAz71.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BirFsVWW.js";import"./utils-D_L3Vszq.js";import"./index-Dvts4QuH.js";import"./index-CKeKsxlO.js";import"./index-0iYZ-1q5.js";import"./navigation-down-arrow-B6KjmG5s.js";import"./navigation-right-arrow-CESkN4Yn.js";import"./navigation-right-arrow-CV8pPszO.js";import"./useCurrentTheme-7RFsuHvO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CojyC1AK.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BSUczLtF.js";import"./index-lxUncTW2.js";import"./less-IYmAbgpg.js";import"./index-BJt60Esi.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
