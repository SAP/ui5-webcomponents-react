import{j as o}from"./iframe-Dk4p-NU5.js";import{useMDXComponents as n}from"./index-CHKRtcGE.js";import{I as r,F as s}from"./CommandsAndQueries-DyjrBS1R.js";import{M as l,C as a}from"./blocks-DM1TPhC8.js";import"./Tag-DIu9mUid.js";import"./index-Dy2aDYnH.js";import"./copy-9E4-O2oJ.js";import{a as m}from"./AnalyticalTableHooks.stories-CmR8dSjn.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CltNqpOu.js";import"./index-C0BhXx34.js";import"./index-BjoQdxqk.js";import"./Link-CnlylsPy.js";import"./addCustomCSSWithScoping-YkmUIPFl.js";import"./index-CWcAFKak.js";import"./index-DSYhAS_G.js";import"./index-oVL9Luq8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CcivO6eQ.js";import"./index-C9rB5uch.js";import"./information-BsAdT-Xc.js";import"./sys-enter-2-CC2F8dSm.js";import"./alert-r293I4gz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgKWDcWX.js";import"./delete-D_xbwIrp.js";import"./settings-BhIm0GiE.js";import"./NoData-DJVZbPGE.js";import"./IllustratedMessage-Dz5IZ3Gp.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BAIeo5U4.js";import"./index-DH8WjD5q.js";import"./slim-arrow-down-EOCFba-X.js";import"./Input-B0eKdbw0.js";import"./ResponsivePopoverCommon.css-CA4ifvoQ.js";import"./ValueStateMessage.css-B8pmh2N9.js";import"./Suggestions.css-BBewLOHr.js";import"./ListBoxItemGroupTemplate-DbB0mUIL.js";import"./ComboBoxItemGroup-teYu1d9A.js";import"./ListItemBaseTemplate-CSbf2qJ5.js";import"./Token-TOBkDVYm.js";import"./ScrollEnablement-BUDpADc-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_XkMLugT.js";import"./ToggleButton-Cjl-wpx7.js";import"./SuggestionItem--vngu7nQ.js";import"./index-Bmc43_Wo.js";import"./Option-jLqCQe_J.js";import"./index-CBPjXdoe.js";import"./SegmentedButton-BKR8AthM.js";import"./index-CqLI4bN3.js";import"./Select-CpzFR8eY.js";import"./InvisibleMessage-BEHSXRmN.js";import"./slim-arrow-down-DP1V9xmJ.js";import"./useIsRTL-BuDy2riY.js";import"./index-DvomD5A_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BVt2u7qE.js";import"./group-2-vNrOYBfE.js";import"./sort-descending-BVScS0Cb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YT5Jo3L_.js";import"./utils-Cjbny4G8.js";import"./index-m33ksqZ9.js";import"./index-XLo1LjLC.js";import"./index-DA1_rGf1.js";import"./navigation-down-arrow-CdY2_y0s.js";import"./navigation-right-arrow-D0DZxEc6.js";import"./navigation-right-arrow-DVeiYe6Q.js";import"./useCurrentTheme-O02qIIH9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CUq2bgaj.js";import"./debounce-D7W5PopO.js";import"./index-D7XWWKWU.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
