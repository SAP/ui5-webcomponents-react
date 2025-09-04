import{j as o}from"./iframe-Brl1VNXv.js";import{useMDXComponents as n}from"./index-lkEyU_nt.js";import{I as r,F as s}from"./CommandsAndQueries-Dk6rSuK-.js";import{M as l,C as a}from"./blocks-BAqV5WPc.js";import"./Tag-CPqPqrcS.js";import"./index-BqPTl_TF.js";import"./copy-3T1gBUKn.js";import{a as m}from"./AnalyticalTableHooks.stories-DoORN7PF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-cvNk3Ydm.js";import"./index-BAyaq3AZ.js";import"./index-665xf7Lj.js";import"./Link-R6QwvZvg.js";import"./addCustomCSSWithScoping-2pXmrNrJ.js";import"./index-CIiYxA_R.js";import"./index-CQN5QiqO.js";import"./index-BSJzWAI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BAdmvlBz.js";import"./index-_G4y7meT.js";import"./information-BqiTraiu.js";import"./sys-enter-2-Br-uV94n.js";import"./alert-DWDpknyG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWxguO42.js";import"./delete-C1TIoMlj.js";import"./settings-D4ON83w0.js";import"./NoData-DG0JaC6_.js";import"./IllustratedMessage-DFVXGXCi.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cnkp96WC.js";import"./index-CHolLt5w.js";import"./slim-arrow-down-CagLPUnU.js";import"./Input-udPVo4mc.js";import"./ResponsivePopoverCommon.css-D3Hv3Gxc.js";import"./ValueStateMessage.css-Bf2NqEEl.js";import"./Suggestions.css-PGPc3R_W.js";import"./ListBoxItemGroupTemplate-D-vUij60.js";import"./ComboBoxItemGroup-Cj2VhANu.js";import"./ListItemBaseTemplate-DqFXL3dn.js";import"./Token-BRypdmfh.js";import"./ScrollEnablement-vXxL4r_i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0gp9kpIG.js";import"./ToggleButton-Cj_pSwfJ.js";import"./SuggestionItem-eIYipz3n.js";import"./index-B120lRj9.js";import"./Option-ydTn3SF0.js";import"./index-ByUOmVwt.js";import"./SegmentedButton-B-E_kZVa.js";import"./index-DHHzjK6O.js";import"./Select-DPAi3Ppf.js";import"./InvisibleMessage-CyHbLI8k.js";import"./slim-arrow-down-BcVEw-DR.js";import"./useIsRTL-BIUxlTgz.js";import"./index-DJDgDtmd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaykPM6n.js";import"./group-2-BE1KJkJu.js";import"./sort-descending-DtT3nEOM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DR49-Cmt.js";import"./utils-hwxV1HAU.js";import"./index-C6euIQDK.js";import"./index-LOLgjMOa.js";import"./index-C6yhMq4f.js";import"./navigation-down-arrow-CFW-H7FC.js";import"./navigation-right-arrow-Cmd9UH9N.js";import"./navigation-right-arrow-BoSQuLX4.js";import"./useCurrentTheme-CytE6E3p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-XBV3ZP6e.js";import"./debounce-D7W5PopO.js";import"./index-dtCeEGgw.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
