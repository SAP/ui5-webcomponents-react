import{j as o}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as n}from"./index-CniPTHSz.js";import{I as r,F as s}from"./CommandsAndQueries-CtCNZgsU.js";import{M as l,C as a}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import"./copy-BNU1F6ls.js";import{a as m}from"./AnalyticalTableHooks.stories-BVqhJ6mi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index--Vew3hXz.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DD8g5bnM.js";import"./delete-D6-35YwG.js";import"./settings-DBoXREAT.js";import"./NoData-gZ1fjVVl.js";import"./IllustratedMessage-CFTGdX3g.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DGOgRaLa.js";import"./index-Ce-nCryE.js";import"./slim-arrow-down-BTcmIAZo.js";import"./Input-nQkDkpMo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Suggestions.css-ByBItAub.js";import"./ListBoxItemGroupTemplate-CDWy6Nub.js";import"./ComboBoxItemGroup-CCYywqPo.js";import"./ListItemBaseTemplate-DRr4zk5s.js";import"./Token-BwRrxMD7.js";import"./ScrollEnablement-BN7kIMtj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cIFVz4xB.js";import"./ToggleButton-chqvRgB_.js";import"./SuggestionItem-D841cpg4.js";import"./index-DfNHlgXD.js";import"./Option-BkfkZtHI.js";import"./index-Byascgrb.js";import"./SegmentedButton-DJu9oJAG.js";import"./index-BRkEXvtH.js";import"./Select-BBPMsUok.js";import"./InvisibleMessage-D-XldCbn.js";import"./slim-arrow-down-R4lWeZmU.js";import"./useIsRTL-BMHeZ9la.js";import"./index-r-PAOf5B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCyfWB89.js";import"./group-2-FFZDiPuh.js";import"./sort-descending--GyeITCg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgN_-xrJ.js";import"./utils-NBX3VAhS.js";import"./index-D-zHAvS6.js";import"./index-Bq4yDwlr.js";import"./index-Cz2QpzuG.js";import"./navigation-down-arrow-B-0Rh6AW.js";import"./navigation-right-arrow-BhFnHVa_.js";import"./navigation-right-arrow-JqBI6C2o.js";import"./useCurrentTheme-CVug1619.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CxpTF53y.js";import"./debounce-D7W5PopO.js";import"./index-C8rUm7Lp.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
