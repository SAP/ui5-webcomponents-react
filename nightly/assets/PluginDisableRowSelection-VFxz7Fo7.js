import{j as o}from"./iframe-BM9OIWQT.js";import{useMDXComponents as n}from"./index-BmDGYHRp.js";import{I as r,F as s}from"./CommandsAndQueries-CxAAQY3-.js";import{M as l,C as a}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import"./copy-C5RvIJ1i.js";import{a as m}from"./AnalyticalTableHooks.stories-BZ7zBJHa.js";import"./preload-helper-Ct5FWWRu.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./index-DEAaUqYT.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CyuqtK2r.js";import"./delete-onoyAsqE.js";import"./settings--1Ip8lPf.js";import"./NoData-CQH_6cEc.js";import"./IllustratedMessage-Bwpwi4hz.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7uotIo3.js";import"./index-_M5hu1Ve.js";import"./slim-arrow-down-DZH9bZ7T.js";import"./Input-Dn5iQQwi.js";import"./ResponsivePopoverCommon.css-C06uDNZk.js";import"./ValueStateMessage.css-45247xTr.js";import"./Suggestions.css-D3BTSrmf.js";import"./ListBoxItemGroupTemplate-DRaugEOq.js";import"./ComboBoxItemGroup-DPclcPz1.js";import"./ListItemBaseTemplate-4FD8RdDt.js";import"./Token-DULBBXqN.js";import"./ScrollEnablement-B6aqSdEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN3OLFlW.js";import"./ToggleButton-BiNCtIf_.js";import"./SuggestionItem-9SkfTs2v.js";import"./index-DDgoevNI.js";import"./Option-C3MxzwCu.js";import"./index-B9VkeBUH.js";import"./SegmentedButton-DYNlW9qo.js";import"./index-C4RyrHZD.js";import"./Select-BMZ7_MPl.js";import"./InvisibleMessage-B5HLZjpk.js";import"./slim-arrow-down-BTYV_0EQ.js";import"./useIsRTL-uL9buPdP.js";import"./index-4j8VosmR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BU0dRrZB.js";import"./group-2-IGI1Z0iD.js";import"./sort-descending-Ce7w9FbB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BD-49ib6.js";import"./utils-BX52KHbp.js";import"./index-CEfW1Ie-.js";import"./index-6oxIcK4F.js";import"./index-DDsSh8_M.js";import"./navigation-down-arrow-DRy-Plf1.js";import"./navigation-right-arrow-C4LKuMFg.js";import"./navigation-right-arrow-B77x5HAj.js";import"./useCurrentTheme-BO1dkmZn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BV7JsfdZ.js";import"./debounce-D7W5PopO.js";import"./index-SxXIoXoc.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
