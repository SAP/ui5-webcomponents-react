import{j as e}from"./iframe-wtGyowSu.js";import{useMDXComponents as n}from"./index-CZZ2_hDJ.js";import{I as r,F as s}from"./CommandsAndQueries-DQ0OWp_s.js";import{M as l,C as a}from"./blocks-DOUzMh6P.js";import"./Tag-CF7bcptF.js";import"./index-DemLuH5_.js";import"./i18n-DCXZOGva.js";import"./copy-fNgmErhy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DrQNTaHW.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BFewsKyD.js";import"./index-CJ5u_hE4.js";import"./index-KwEy5gb6.js";import"./Link-BV0lLBLc.js";import"./addCustomCSSWithScoping-Bg0OR_5Z.js";import"./index-CeuGV1sB.js";import"./index-klURHLLt.js";import"./index-WPEP5BQu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BeC7vZ35.js";import"./index-CR8pF6-t.js";import"./information-B0VTD8Pg.js";import"./sys-enter-2-CvQEzb10.js";import"./alert-Cef964mc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CqTHo6Oy.js";import"./delete-B49e3xOy.js";import"./settings-BhXfmtZo.js";import"./NoData-D-CeBPtE.js";import"./IllustratedMessage-CG9MBdLp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Byfj7R1q.js";import"./index-eL1oL0O0.js";import"./slim-arrow-down-CiHrStr3.js";import"./Input-buaSlew7.js";import"./ResponsivePopoverCommon.css-D-1xG2-i.js";import"./ValueStateMessage.css-COGmpv8H.js";import"./Suggestions.css-BAb2ZnZd.js";import"./ListBoxItemGroupTemplate-BEADZVdq.js";import"./ComboBoxItemGroup-DljnFe5P.js";import"./ListItemBaseTemplate-D4huXPoH.js";import"./Token-CW8wTRqJ.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B54pPtmm.js";import"./ToggleButton-BY07XXUb.js";import"./SuggestionItem-C6nikC1O.js";import"./index-BBX4--Ov.js";import"./Option-DAm3n8Um.js";import"./index-DuSn1TaV.js";import"./SegmentedButton-DNZ8rr19.js";import"./index-CKpFXmKb.js";import"./Select-CpDSGnVu.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-Cfpmc2nk.js";import"./useIsRTL-Qs2nxCti.js";import"./index-C0KYOG-T.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBdDqf2s.js";import"./group-2-BVpdmttV.js";import"./sort-descending-DSpBk47E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_G53VOK.js";import"./utils-zWP-DA9Y.js";import"./index-5w_GDQTo.js";import"./index-BJmG4xyb.js";import"./index-UHr40Gn7.js";import"./navigation-down-arrow-T9BpYw6q.js";import"./navigation-right-arrow-CxD7_o0m.js";import"./navigation-right-arrow-B5AIzKVw.js";import"./useCurrentTheme-DameEpyT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jyhDdUjI.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BEqQSamn.js";import"./index-DpS3Ux2E.js";import"./less-DvDpQ08n.js";import"./index-4-CbeKxN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
