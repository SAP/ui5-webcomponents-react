import{j as e}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as n}from"./index-D0kyY75e.js";import{I as r,F as s}from"./CommandsAndQueries-YFNvLEil.js";import{M as l,C as a}from"./blocks-IuY-WHWo.js";import"./Tag-lLVMTbba.js";import"./index-DuupinLA.js";import"./i18n-DCXZOGva.js";import"./copy-DlGd5HR3.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C8KyoWyU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./index-jqGKriQv.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS0t17eg.js";import"./delete-Cqs9v5UZ.js";import"./settings-CyEtlrBV.js";import"./NoData-BWIo64AO.js";import"./IllustratedMessage-C4Y9MhXY.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DfHNJiM8.js";import"./index-DdyO6oSf.js";import"./slim-arrow-down-BKxPiX8n.js";import"./Input-D-9zBLbY.js";import"./ResponsivePopoverCommon.css-CxqRSEww.js";import"./ValueStateMessage.css-Dm13dtEh.js";import"./Suggestions.css-BrbWPJFr.js";import"./ListBoxItemGroupTemplate-C_OMzyC0.js";import"./ComboBoxItemGroup-D39JgLka.js";import"./ListItemBaseTemplate-D-qPwKzw.js";import"./Token-Be0u3QBl.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXUKgIyV.js";import"./ToggleButton-IQUGwWke.js";import"./SuggestionItem-DdzoQa60.js";import"./index-BX9d1tne.js";import"./Option-DmWPWIPr.js";import"./index-D0SZ3ivo.js";import"./SegmentedButton-BBntDzPz.js";import"./index-BGk1wpri.js";import"./Select-5KsyfTZz.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-CTLngD-X.js";import"./useIsRTL-B82EOOfT.js";import"./index-WkNiF2x7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DYih4vHX.js";import"./group-2-D5Vb2rGk.js";import"./sort-descending-CpwdY_0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-aOb56p52.js";import"./utils-CrZTWPem.js";import"./index-DXERoPHz.js";import"./index-4nJOmPH_.js";import"./index-BBimiLXf.js";import"./navigation-down-arrow-BQwLi84w.js";import"./navigation-right-arrow-D_TiaYK2.js";import"./navigation-right-arrow-BKqHuSCb.js";import"./useCurrentTheme-fsd6-M81.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B-2UELL8.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BCmVS6m3.js";import"./index-_FkIPEUJ.js";import"./less-DegAqowm.js";import"./index-CPP2cAY-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
