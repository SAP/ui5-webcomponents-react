import{j as e}from"./iframe-BaUS3k1G.js";import{useMDXComponents as i}from"./index-BI_MoYzx.js";import{I as a,F as m}from"./CommandsAndQueries-Br4DVRUh.js";import{M as s,C as p}from"./blocks-B0L69tD0.js";import"./Tag-DBf9vhPp.js";import"./index-DRxFqLKQ.js";import{C as l}from"./ControlsWithNote-BmOedZdX.js";import"./copy-DThSO1XV.js";import{e as o}from"./AnalyticalTableHooks.stories-qcQzuxQR.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYuYKtBV.js";import"./index-DCjJA-51.js";import"./index-DvySby2h.js";import"./Link-CWqnr4YP.js";import"./addCustomCSSWithScoping-CsHiQv5I.js";import"./index-Cf1dwhov.js";import"./index-C3F6-2iN.js";import"./index-BVDlh8LB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNEqbSr6.js";import"./index-BYW7BxIG.js";import"./information-7Y3gJKKP.js";import"./sys-enter-2-BfkJMWkZ.js";import"./alert-BAVxkr1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGZWkfq0.js";import"./delete-DhpuvOZU.js";import"./settings-HR7JgpW5.js";import"./NoData-6qkAt8Ff.js";import"./IllustratedMessage-BoVreQNe.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-U2f8pDyc.js";import"./index-Ck5H1gDo.js";import"./slim-arrow-down-D9JkdGK8.js";import"./Input-BOuUwhzq.js";import"./ResponsivePopoverCommon.css-Bo-IXKeW.js";import"./ValueStateMessage.css-BQHtB1Tv.js";import"./Suggestions.css-ChVrYUaI.js";import"./ListBoxItemGroupTemplate-BAOEqzDw.js";import"./ComboBoxItemGroup-BIKWFZF9.js";import"./ListItemBaseTemplate-DXoKIUzT.js";import"./Token-CA6Awd5t.js";import"./ScrollEnablement-2bJd9RZ5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyWlaMba.js";import"./ToggleButton-Bh2oTAth.js";import"./SuggestionItem-CbSqa2O4.js";import"./index-BkOfvqRQ.js";import"./Option-DS-TGLoK.js";import"./index-DIImDxSq.js";import"./SegmentedButton-C4Z1OrHK.js";import"./index-B1A2ONV2.js";import"./Select-2pNodCsm.js";import"./InvisibleMessage-vA_ZbJGm.js";import"./slim-arrow-down-BBKu_ZM0.js";import"./useIsRTL-HDA9Bb1C.js";import"./index-BWchkGL6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvWdAtXT.js";import"./group-2-CQ4OV2J0.js";import"./sort-descending-BOWqXbHY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cy9Kjuts.js";import"./utils-Bw_xVhJf.js";import"./index-CmvusNlc.js";import"./index-BPY_plO5.js";import"./index-DNH4Ez_N.js";import"./navigation-down-arrow-DTMX2fTv.js";import"./navigation-right-arrow-CI7CsRQ5.js";import"./navigation-right-arrow-BZMs7BWv.js";import"./useCurrentTheme-DmjoUoh_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DqvL999O.js";import"./debounce-D7W5PopO.js";import"./index-CD3_b8MJ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
