import{j as e}from"./iframe-zpPFhmqz.js";import{useMDXComponents as n}from"./index-aGUGAxCn.js";import{I as r,F as s}from"./CommandsAndQueries-DoDYgPNU.js";import{M as l,C as a}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import"./i18n-DCXZOGva.js";import"./copy-CsdqLzsD.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dx8Mn6e4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./index-C9UnmKjh.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l7ytZdfT.js";import"./delete-MHv_CYg9.js";import"./settings-DDoKt4UP.js";import"./NoData-DMnUha6D.js";import"./IllustratedMessage-BejhpU64.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DjPxmqrq.js";import"./index-BsUu5ArI.js";import"./slim-arrow-down-CO2u_KNM.js";import"./Input-BcHfgIky.js";import"./ResponsivePopoverCommon.css-Cb1nsgmq.js";import"./ValueStateMessage.css-CmZvREXK.js";import"./Suggestions.css-DIfLi72j.js";import"./ListBoxItemGroupTemplate-CHNgl-Oy.js";import"./ComboBoxItemGroup-DFkgZF5e.js";import"./ListItemBaseTemplate-C2pGTkPR.js";import"./Token-PxOnpRsT.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qOMJB75Y.js";import"./ToggleButton-C4gh6ZdD.js";import"./SuggestionItem-MnmkuIYh.js";import"./index-lxTrpBQg.js";import"./Option-BZrKzvIh.js";import"./index-Cu4m70XN.js";import"./SegmentedButton-C_Bg2ZEp.js";import"./index-v-gaF3k7.js";import"./Select-BLfR4K0O.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-YWcqYD1l.js";import"./useIsRTL-eXMfvMyV.js";import"./index-B22sVMzR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMZ8jdZi.js";import"./group-2-moJaZwxt.js";import"./sort-descending-Bn-IQCLh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8yCGdW8.js";import"./utils-BsKoZRvK.js";import"./index-C5MZ6k2U.js";import"./index-DVkEcyDj.js";import"./index-BJMFwgq6.js";import"./navigation-down-arrow-CahQfWLu.js";import"./navigation-right-arrow-D6aNzJYM.js";import"./navigation-right-arrow-XoXEZ7Cs.js";import"./useCurrentTheme-D03cAXDo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuZK89md.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DDyEFRtL.js";import"./index-CLpJfXhr.js";import"./less-B0fY1ae9.js";import"./index-fd99oHag.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
