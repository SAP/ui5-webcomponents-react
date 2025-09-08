import{j as e}from"./iframe-Cmm295l6.js";import{useMDXComponents as n}from"./index-BXOSXmsP.js";import{I as r,F as s}from"./CommandsAndQueries-BP_0RozZ.js";import{M as l,C as a}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import"./copy-D4RoINZh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-dvFW3tl2.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./index-B2P7pH2V.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BOW3byXA.js";import"./delete-BpJ7jMu4.js";import"./settings-DfuIK5Du.js";import"./NoData-B9fBQ-2X.js";import"./IllustratedMessage-DMoUKb2N.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DyS6OgFp.js";import"./index-D9-J-CUh.js";import"./slim-arrow-down-BPs-5Hw-.js";import"./Input-CKOQVRzo.js";import"./ResponsivePopoverCommon.css-CuPlJ6XL.js";import"./ValueStateMessage.css-CpF9zfZB.js";import"./Suggestions.css-URl81ueP.js";import"./ListBoxItemGroupTemplate-BE6yQGK-.js";import"./ComboBoxItemGroup-ZNf2Vk0l.js";import"./ListItemBaseTemplate-CToCzb2R.js";import"./Token-DKJgf7x_.js";import"./ScrollEnablement-BWqjOtqg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSk0UJEE.js";import"./ToggleButton-zP3wC5RY.js";import"./SuggestionItem-Ct7jePU3.js";import"./index-Dpgfdfru.js";import"./Option-CXrrCfUx.js";import"./index-Ws9shfnM.js";import"./SegmentedButton-DjidyPv_.js";import"./index-D9kRi0IC.js";import"./Select-DRZNQuJi.js";import"./InvisibleMessage-BUQae6f9.js";import"./slim-arrow-down-iUDTzeiV.js";import"./useIsRTL-CEwtxJyB.js";import"./index-BzcZFawy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqgfgZAq.js";import"./group-2-DGba-0Tt.js";import"./sort-descending-Cv9BhC3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DynqqBp0.js";import"./utils-CxbvwC5_.js";import"./index-CJAzT50r.js";import"./index-CggMFlL9.js";import"./index-DIyb4d_p.js";import"./navigation-down-arrow-C11LdM0-.js";import"./navigation-right-arrow-B54lSWMn.js";import"./navigation-right-arrow--DddG-Qx.js";import"./useCurrentTheme-Q0o_lrzg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YJpka7ZF.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DQu_UXSp.js";import"./index-DL20h0zh.js";import"./less-CttwOBtS.js";import"./index-BtYSUoXS.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
