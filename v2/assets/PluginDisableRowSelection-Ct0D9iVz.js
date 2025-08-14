import{j as o}from"./iframe-DB1hZqAv.js";import{useMDXComponents as n}from"./index-C7G5dSmF.js";import{I as r,F as s}from"./CommandsAndQueries-Btb1kQnC.js";import{M as l,C as a}from"./blocks-cg9LC1rI.js";import"./Tag-BS7zj2yL.js";import"./index-C5JoWyXC.js";import"./copy-C9f0Ezzi.js";import{a as m}from"./AnalyticalTableHooks.stories-BUext0Gv.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BbxSTqwp.js";import"./index-DfpSA-Ue.js";import"./index-AyDKBAO2.js";import"./Link-CMn1MwX0.js";import"./addCustomCSSWithScoping-aeW1jsnX.js";import"./index-C0ik2STR.js";import"./index-CDotLVrR.js";import"./index-BvRvvaxi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMluZ7rf.js";import"./index-Dq64mUvA.js";import"./information-CQEWuKvd.js";import"./sys-enter-2-CKXMqpTE.js";import"./alert-ttvcaVxO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTJbIMyK.js";import"./delete-iBmDTKmT.js";import"./settings-CXX2toD-.js";import"./NoData-DrngtIPE.js";import"./IllustratedMessage-C6zf5HsA.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DuVbn_Av.js";import"./index-jjwte1j7.js";import"./slim-arrow-down-B9C8_DlV.js";import"./Input-Co1Ncam9.js";import"./ResponsivePopoverCommon.css-DTbOAvZ8.js";import"./ValueStateMessage.css-DyRqN3Zi.js";import"./Suggestions.css-CfU8jDIe.js";import"./ListBoxItemGroupTemplate-Ch9CdS-e.js";import"./ComboBoxItemGroup-DccqzNyb.js";import"./ListItemBaseTemplate-CCky6bk9.js";import"./Token-CPPasJTL.js";import"./ScrollEnablement-DPTLFCJR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BudRgS4c.js";import"./ToggleButton-BjCoIICR.js";import"./SuggestionItem-Bpp7nMj3.js";import"./index-CvaoPo7F.js";import"./Option-B4gtaKyw.js";import"./index-CydNmgP-.js";import"./SegmentedButton-CQj9NEcE.js";import"./index-BKk9Wf2M.js";import"./Select-C5E5Vmyc.js";import"./InvisibleMessage-DXb0t9Au.js";import"./slim-arrow-down-C4Fh43q_.js";import"./useIsRTL-C-GxNVoX.js";import"./index-B_yjfbdI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmM8q-0P.js";import"./group-2-Cwo9fREl.js";import"./sort-descending-D7mmF3VT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BZY4Y34l.js";import"./utils-C7ou7Pk8.js";import"./index-v0oEg3Lc.js";import"./index-C4fDg-mx.js";import"./index-CfmFa_MC.js";import"./navigation-down-arrow-BeFKVpxI.js";import"./navigation-right-arrow-DMOktS7m.js";import"./navigation-right-arrow-CJKsR_Mb.js";import"./useCurrentTheme-xBPSbLDD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D04vslG3.js";import"./debounce-D7W5PopO.js";import"./index-due6Tg_c.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
