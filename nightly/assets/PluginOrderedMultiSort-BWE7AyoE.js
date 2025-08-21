import{j as e}from"./iframe-Ds_ksB4e.js";import{useMDXComponents as i}from"./index-H-IHaXTw.js";import{I as a,F as m}from"./CommandsAndQueries-sjInqy8W.js";import{M as s,C as p}from"./blocks-BF1agP19.js";import"./Tag-CPZT7-Kj.js";import"./index-CCQ7ngcv.js";import{C as l}from"./ControlsWithNote-COl1xdrJ.js";import"./copy-CiclUpSF.js";import{e as o}from"./AnalyticalTableHooks.stories-Bbj63fPg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C9iUZPx4.js";import"./index-Cz-9QImp.js";import"./index-CCxnn_jg.js";import"./Link-B7c1MguO.js";import"./addCustomCSSWithScoping-C1wNASBp.js";import"./index-BeCgQ8PU.js";import"./index-De0nbQnW.js";import"./index-D0B9W_Us.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1VftYSW.js";import"./index-BveKVBSZ.js";import"./information-CXQdNqP2.js";import"./sys-enter-2-DgaAD1QG.js";import"./alert-D9-5boQa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkG8ch4e.js";import"./delete-D-CptolG.js";import"./settings-DsdB8amV.js";import"./NoData-CycqaSBL.js";import"./IllustratedMessage-mf04Djfm.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BUNN-ICN.js";import"./index-Bx8mdV5O.js";import"./slim-arrow-down-CRXpe6Ep.js";import"./Input-DMPtPI9x.js";import"./ResponsivePopoverCommon.css-CtrWfz2O.js";import"./ValueStateMessage.css-BtWaD65M.js";import"./Suggestions.css-Q3AZmBnp.js";import"./ListBoxItemGroupTemplate-CKym2Ygo.js";import"./ComboBoxItemGroup-iotqfyD_.js";import"./ListItemBaseTemplate-96T6tg0F.js";import"./Token-DQQbOMYd.js";import"./ScrollEnablement-C0SuwG25.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D3h_gJ31.js";import"./ToggleButton-PI5U-ZoN.js";import"./SuggestionItem-DHI1wIyF.js";import"./index-lRvGXhml.js";import"./Option-Cqjn101Z.js";import"./index-Wc-K1B_I.js";import"./SegmentedButton-BBQFuekG.js";import"./index-ByWKjneJ.js";import"./Select-CXmdf2be.js";import"./InvisibleMessage-CXx3GcZn.js";import"./slim-arrow-down-dtTq_dH6.js";import"./useIsRTL-Bze9sg1S.js";import"./index-DNS596Mv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClVKOKk0.js";import"./group-2-CzyXSt2z.js";import"./sort-descending-C_tcN0CL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rWO-sYYc.js";import"./utils-ChsTRdXp.js";import"./index-pDSMu31p.js";import"./index-1yLLdqoU.js";import"./index-p-B7Vzdn.js";import"./navigation-down-arrow-DYjrbitC.js";import"./navigation-right-arrow-DdsJzFAD.js";import"./navigation-right-arrow-C-oKg6Gq.js";import"./useCurrentTheme-DaAuIVD-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gtuVuggN.js";import"./debounce-D7W5PopO.js";import"./index-bapsQHju.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [AnalyticalTableHooks.useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Fe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Fe as default};
