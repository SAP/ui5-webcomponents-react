import{j as e}from"./iframe-113A6qfG.js";import{useMDXComponents as n}from"./index-PjC7U6K4.js";import{I as r,F as s}from"./CommandsAndQueries-Bg85p3au.js";import{M as l,C as a}from"./blocks-D_3UdGcb.js";import"./Tag-DaeygpfO.js";import"./index-B2xOcofc.js";import"./copy-CcIFyCHE.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D1k_r1Oo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./index-CWWoZsv-.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dd4yZKPF.js";import"./delete-CNLurm_h.js";import"./settings-nYVw-8aK.js";import"./NoData-BtjU7UM8.js";import"./IllustratedMessage-C5AcPGiL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CZOywhhu.js";import"./index-DPIfm0RB.js";import"./slim-arrow-down-DZJ_GP1k.js";import"./Input-Gcc3dJDl.js";import"./ResponsivePopoverCommon.css-Q_FGcyNG.js";import"./ValueStateMessage.css-D-fesA6_.js";import"./Suggestions.css-Dc3HPxH1.js";import"./ListBoxItemGroupTemplate-DD9XMKKc.js";import"./ComboBoxItemGroup-CPJ8jj3b.js";import"./ListItemBaseTemplate-Brlr3M_-.js";import"./Token-UBERC-wa.js";import"./ScrollEnablement-CKBXjPwR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-U7_ux5-W.js";import"./ToggleButton-Z83cNU5B.js";import"./SuggestionItem-B9KyfZt1.js";import"./index-ByuG9QMH.js";import"./Option-BMD9BzbC.js";import"./index-CZccfsvW.js";import"./SegmentedButton-BHZRIVqz.js";import"./index-YaJT-7Vm.js";import"./Select-U-XxeLZb.js";import"./InvisibleMessage-D46WdJW_.js";import"./slim-arrow-down-2De9z3rU.js";import"./useIsRTL-D16EWQ1V.js";import"./index-CkQDp71V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bh0Y-pn3.js";import"./group-2-DfqujJuP.js";import"./sort-descending-DYeXzXZk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8emlxkI.js";import"./utils-DMs0HaFc.js";import"./index-DgltoZoV.js";import"./index-RYBL1PBZ.js";import"./index-DGoA9cON.js";import"./navigation-down-arrow-YzBoi4OT.js";import"./navigation-right-arrow-CVjB9oy3.js";import"./navigation-right-arrow-OXaI-HJX.js";import"./useCurrentTheme-DaERdxGz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsZPiuCg.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B5ZW5JM4.js";import"./index-D7fmcvB0.js";import"./less-B1DnNiyr.js";import"./index-Bf142AWA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
