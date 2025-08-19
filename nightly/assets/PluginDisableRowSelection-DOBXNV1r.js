import{j as o}from"./iframe-CvU-07By.js";import{useMDXComponents as n}from"./index-DIsCDPQO.js";import{I as r,F as s}from"./CommandsAndQueries-DbBqwiyb.js";import{M as l,C as a}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import"./copy-TKggWaTM.js";import{a as m}from"./AnalyticalTableHooks.stories-3G5OLr_c.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./index-DyAIHHB4.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D64xpzSV.js";import"./delete-DASOuVgK.js";import"./settings-Cz4b_CQ9.js";import"./NoData-DRMV0RP5.js";import"./IllustratedMessage-Bz0pNoIO.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DO36Y4ke.js";import"./index-QYxqI47W.js";import"./slim-arrow-down-XBwwFKMk.js";import"./Input-Bk67iFBz.js";import"./ResponsivePopoverCommon.css-DtcMkK-L.js";import"./ValueStateMessage.css-DNP4kQ0q.js";import"./Suggestions.css-BgX4bA8X.js";import"./ListBoxItemGroupTemplate-D9C-1xti.js";import"./ComboBoxItemGroup-DaMMxlC9.js";import"./ListItemBaseTemplate-D_DoxqTK.js";import"./Token-B3GzMGjr.js";import"./ScrollEnablement-Cuj5W76G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9CyfjI3.js";import"./ToggleButton-BbTI55BR.js";import"./SuggestionItem-PZTnS_B4.js";import"./index-Tg7QXIHr.js";import"./Option-98MOnCoD.js";import"./index-B16eoqTK.js";import"./SegmentedButton-M4kts95Y.js";import"./index-B6dFmvI2.js";import"./Select-BMBrtb3I.js";import"./InvisibleMessage-DWMWQiC0.js";import"./slim-arrow-down-qxU48HTy.js";import"./useIsRTL-CCAIfBkQ.js";import"./index-CF9TteIz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJ3EZc78.js";import"./group-2-DYOtES-M.js";import"./sort-descending-Bm8GDKvK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-JnyUrL39.js";import"./utils-BaDcmQQs.js";import"./index-CoUCTNoo.js";import"./index-BJGfmIzj.js";import"./index-D3k1OHd9.js";import"./navigation-down-arrow-0KBRgDJV.js";import"./navigation-right-arrow-B3eoCJ9z.js";import"./navigation-right-arrow-BuzrIA7s.js";import"./useCurrentTheme-DLiAiuSO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrZd3Ayr.js";import"./debounce-D7W5PopO.js";import"./index-BegZFN-t.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
