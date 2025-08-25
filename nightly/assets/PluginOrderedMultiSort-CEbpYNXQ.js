import{j as e}from"./iframe-Y9u60a80.js";import{useMDXComponents as i}from"./index-Bori-Nod.js";import{I as a,F as m}from"./CommandsAndQueries-eYIoXNgT.js";import{M as s,C as p}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import{C as l}from"./ControlsWithNote-laTaCTcY.js";import"./copy-DwFBIccM.js";import{e as o}from"./AnalyticalTableHooks.stories-DG0Cab0_.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-BUCogs4k.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-n_bZVIMN.js";import"./delete-D7VV6RVa.js";import"./settings-DuH9YHsU.js";import"./NoData-Dt2C1ctw.js";import"./IllustratedMessage-B_bMLEpB.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CPL75eXp.js";import"./index-BjMGLplX.js";import"./slim-arrow-down-DgUPWIGP.js";import"./Input-7QH9qgg3.js";import"./ResponsivePopoverCommon.css-DKPC5jE6.js";import"./ValueStateMessage.css-DF0riTEq.js";import"./Suggestions.css-BCVBy9X3.js";import"./ListBoxItemGroupTemplate-B2XwDE9U.js";import"./ComboBoxItemGroup-C0ZFcNFo.js";import"./ListItemBaseTemplate-DN-V_XKe.js";import"./Token-4uwHlG5Q.js";import"./ScrollEnablement-CsQtNunN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKYvsgaA.js";import"./ToggleButton-CU_sGI38.js";import"./SuggestionItem-2EsYX1iM.js";import"./index-ZbsU_3Br.js";import"./Option-CbMG_PHq.js";import"./index-CdSvCjtG.js";import"./SegmentedButton-CUUTUqtu.js";import"./index-BBgzzW3H.js";import"./Select-B8fRwNK8.js";import"./InvisibleMessage-BM3r9VIb.js";import"./slim-arrow-down-Bigp3gAZ.js";import"./useIsRTL-CBPcn2dq.js";import"./index-CItqJ0md.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHOvAqJQ.js";import"./group-2-BKGinyfK.js";import"./sort-descending-22aJyVyy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BsXyS7WM.js";import"./utils-CaJ_VxIi.js";import"./index-DNNFbTMo.js";import"./index-BQaEG-SS.js";import"./index-DqWK6Liw.js";import"./navigation-down-arrow-DDHDR9P7.js";import"./navigation-right-arrow-CXqjHb3o.js";import"./navigation-right-arrow-B-22KRcY.js";import"./useCurrentTheme-BUeXoGU1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-rKlXois0.js";import"./debounce-D7W5PopO.js";import"./index-BFX043nL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
