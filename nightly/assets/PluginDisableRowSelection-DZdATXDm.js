import{j as o}from"./iframe-nPyk7Pli.js";import{useMDXComponents as n}from"./index-CtkrgsHZ.js";import{I as r,F as s}from"./CommandsAndQueries-BH3LWIrk.js";import{M as l,C as a}from"./blocks-kpZj3_CU.js";import"./Tag-DE1zjgne.js";import"./index-Db4ElCLi.js";import"./copy-YekArnCd.js";import{a as m}from"./AnalyticalTableHooks.stories-DOkPKrpz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B-9nmnKT.js";import"./index-4UD2mlLT.js";import"./index-DuhaT3ww.js";import"./Link-DLcMVbxe.js";import"./addCustomCSSWithScoping-98xqr_q6.js";import"./index-BsO78O3m.js";import"./index-QcasdNWm.js";import"./index-CrWnOU7h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cqyy-sBZ.js";import"./index-Bf4gw30l.js";import"./information-BO_mntst.js";import"./sys-enter-2-DaFu4CEs.js";import"./alert-UB53-VFT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ty-gGthJ.js";import"./delete-B8WU0zBU.js";import"./settings-ahtvM9f0.js";import"./NoData-DmwrNGBB.js";import"./IllustratedMessage-CcqtXOwA.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dt6BDesQ.js";import"./index-By_y6r94.js";import"./slim-arrow-down-BcON-Wjl.js";import"./Input-BE7iMtB8.js";import"./ResponsivePopoverCommon.css-DCRzDw4o.js";import"./ValueStateMessage.css-5GikroWi.js";import"./Suggestions.css-BKHPD-ad.js";import"./ListBoxItemGroupTemplate-CCr0Rncx.js";import"./ComboBoxItemGroup-CJbgxf-C.js";import"./ListItemBaseTemplate-BHadPsZP.js";import"./Token-C9bVd98N.js";import"./ScrollEnablement-u7JmO1XQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DlWJ6O71.js";import"./ToggleButton-DvPplgtZ.js";import"./SuggestionItem-ChjoWPxK.js";import"./index-Cx6mx0cC.js";import"./Option-glJsPgx-.js";import"./index-DqOKj-U3.js";import"./SegmentedButton-CNBN2YvV.js";import"./index-ZYyIsLUD.js";import"./Select-RQ6rgJWT.js";import"./InvisibleMessage-CP2XxzVV.js";import"./slim-arrow-down-B-fe4k97.js";import"./useIsRTL-DgP77H3z.js";import"./index-CZMRCvhw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cop_iv5v.js";import"./group-2-ZPJw_y-G.js";import"./sort-descending-CXALsaRF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BoZbY8eq.js";import"./utils-DiknCXVA.js";import"./index-BJQU4DCG.js";import"./index-CGMKS6Sn.js";import"./index-BtpbMWx5.js";import"./navigation-down-arrow-DEfnuviE.js";import"./navigation-right-arrow-s3baHVI1.js";import"./navigation-right-arrow-Cl_8zST2.js";import"./useCurrentTheme-DEridXQJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BxYyMEin.js";import"./debounce-D7W5PopO.js";import"./index-Df0OHWRS.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
