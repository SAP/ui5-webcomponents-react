import{j as e}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as n}from"./index-DCsMWBUP.js";import{I as r,F as s}from"./CommandsAndQueries-Bz3F9tKI.js";import{M as l,C as a}from"./blocks-CGoS-OC2.js";import"./Tag-2V4Q7cMJ.js";import"./index-DFbKywCe.js";import"./copy-BvP7Hkk1.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ws7CvZMJ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";import"./index-DCNonR1q.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-cGyrzAN1.js";import"./delete-CEbQnwVY.js";import"./settings-0sZ4vR_e.js";import"./NoData-AIWXEfE_.js";import"./IllustratedMessage--GJcosdL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-hCMtoJ2P.js";import"./index-C86E5BTJ.js";import"./slim-arrow-down-BjQZQ0VY.js";import"./Input-CZb4w-Dm.js";import"./ResponsivePopoverCommon.css-IrjJke8_.js";import"./ValueStateMessage.css-Dy_ka0k-.js";import"./Suggestions.css-BdLTlAML.js";import"./ListBoxItemGroupTemplate-Hdt3xH6E.js";import"./ComboBoxItemGroup-bCOIMKds.js";import"./ListItemBaseTemplate-BTk6gcZh.js";import"./Token-B4PghaA6.js";import"./ScrollEnablement-B7k2YzpG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKQU_WCZ.js";import"./ToggleButton-h3hY1eXi.js";import"./SuggestionItem-CQ_pYiq6.js";import"./index-Bxa3CdJQ.js";import"./Option-D9K8emav.js";import"./index-I1slxKzD.js";import"./SegmentedButton-CLk2pLzg.js";import"./index-CpXacsPc.js";import"./Select-CQh2SqHq.js";import"./InvisibleMessage-CCKau1XL.js";import"./slim-arrow-down-CqSn_OKe.js";import"./useIsRTL-CnnkiTdh.js";import"./index-DyEvwlhn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlXJbmnx.js";import"./group-2-D9iR7vnq.js";import"./sort-descending-BmXh_-bG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdK0W1ZZ.js";import"./utils-FgBaDTia.js";import"./index-DOWDpSnq.js";import"./index-Bz2uwFg5.js";import"./index-DEKh2kth.js";import"./navigation-down-arrow-DibqTE1y.js";import"./navigation-right-arrow-j4FtsvBh.js";import"./navigation-right-arrow-BmUGBCmb.js";import"./useCurrentTheme-BM5p9Se-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DF7tvuzv.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMiZOuWZ.js";import"./index-DwxEAMZ0.js";import"./less-DsihYSx8.js";import"./index-BuPb2eok.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
