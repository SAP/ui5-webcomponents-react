import{j as o}from"./iframe-DwijkcSC.js";import{useMDXComponents as n}from"./index-dOTQ_8MY.js";import{I as r,F as s}from"./CommandsAndQueries-v2kYi8f6.js";import{M as l,C as a}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import"./copy-BSROPq_0.js";import{a as m}from"./AnalyticalTableHooks.stories-BcPBfgVl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./index-4CSwoMco.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrJXNVPh.js";import"./delete-aAHersLJ.js";import"./settings-uewFS_V4.js";import"./NoData-CThXS__2.js";import"./IllustratedMessage-sD-gyUQ4.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-xiGmwW83.js";import"./index-BFyL3BDI.js";import"./slim-arrow-down-DVE3AHXn.js";import"./Input-Xke3BFuq.js";import"./ResponsivePopoverCommon.css-B6grsBrr.js";import"./ValueStateMessage.css-Bqjq4SCl.js";import"./Suggestions.css-Dr7vVlmc.js";import"./ListBoxItemGroupTemplate-xhPZ9BN8.js";import"./ComboBoxItemGroup-CMjqP94i.js";import"./ListItemBaseTemplate-DfBjNLTN.js";import"./Token-C4gwLyQC.js";import"./ScrollEnablement-sczQYiMf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZEk89Tl.js";import"./ToggleButton-DaHW8XVq.js";import"./SuggestionItem-T5JUISxm.js";import"./index-DfwUMwnp.js";import"./Option-DpDZkHl8.js";import"./index-Beoktyb1.js";import"./SegmentedButton-D52_JIT9.js";import"./index-5UefQkCi.js";import"./Select-D322pIg_.js";import"./InvisibleMessage-Bw88KNeA.js";import"./slim-arrow-down-BsLfN3xy.js";import"./useIsRTL-Dl-PtuBT.js";import"./index-UHAME4Au.js";import"./IconDesign-DXd8PPVF.js";import"./filter-hnPTBo-V.js";import"./group-2-CEqFMcvq.js";import"./sort-descending-D0Lbw9y2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs9wOeA9.js";import"./utils-DFydI20z.js";import"./index-Vq1zQZ3g.js";import"./index-9WjSegZE.js";import"./index-C85cNDYp.js";import"./navigation-down-arrow-Cq6HhR0x.js";import"./navigation-right-arrow-BNY7uCOq.js";import"./navigation-right-arrow-DcfT7hK3.js";import"./useCurrentTheme-XtkosabZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DiCDMx0X.js";import"./debounce-D7W5PopO.js";import"./index-DexoxOrp.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
