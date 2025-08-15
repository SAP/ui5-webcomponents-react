import{j as e}from"./iframe-DXDeCCXH.js";import{useMDXComponents as i}from"./index-BVVJ9Xmn.js";import{I as a,F as m}from"./CommandsAndQueries-Dq5DBaAz.js";import{M as s,C as p}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import{C as l}from"./ControlsWithNote-hJ8WC7xW.js";import"./copy-WTqS65ha.js";import{e as o}from"./AnalyticalTableHooks.stories-wPwjnETU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./index-CtGW4gqB.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-m9t6xB4J.js";import"./delete-eGh5KcKa.js";import"./settings-D-aMw8C7.js";import"./NoData-BNJguIn1.js";import"./IllustratedMessage-C1Qra527.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Crbb53iW.js";import"./index-Bz25c1ht.js";import"./slim-arrow-down-DvqwO1-7.js";import"./Input-DT5a2INw.js";import"./ResponsivePopoverCommon.css-OCxrxVe7.js";import"./ValueStateMessage.css-DPy1qgQz.js";import"./Suggestions.css-I2XPtCpK.js";import"./ListBoxItemGroupTemplate-DpjpsYkI.js";import"./ComboBoxItemGroup-BariYzmO.js";import"./ListItemBaseTemplate-hEZgOtsu.js";import"./Token-CRlMV9e1.js";import"./ScrollEnablement-DAHWVod0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6LXITg6.js";import"./ToggleButton-0Bjlblt_.js";import"./SuggestionItem-R5703Eet.js";import"./index-DKVKyydv.js";import"./Option-fRgebOG_.js";import"./index-BHF91_ZB.js";import"./SegmentedButton-ByQSIlPV.js";import"./index-CqyQ3K4-.js";import"./Select-l_bkPr5Y.js";import"./InvisibleMessage-NggmVjf-.js";import"./slim-arrow-down-CckH6L3O.js";import"./useIsRTL-BkUHaPCa.js";import"./index-aDIzQfUJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfzz8laz.js";import"./group-2-FczFFFx4.js";import"./sort-descending-CKmC-ibv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDPVisSF.js";import"./utils-DX5exggL.js";import"./index-RrE3NDfc.js";import"./index-DfUDlrEC.js";import"./index-BBJBR4cj.js";import"./navigation-down-arrow-BwAfl8_u.js";import"./navigation-right-arrow-BQ8DZn1y.js";import"./navigation-right-arrow-C1RhyiVh.js";import"./useCurrentTheme-BDP8ahfN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B-9HaNrX.js";import"./debounce-D7W5PopO.js";import"./index-CLNkhXyA.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
