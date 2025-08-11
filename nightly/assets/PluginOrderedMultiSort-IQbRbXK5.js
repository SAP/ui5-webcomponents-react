import{j as e}from"./iframe-4VeS9m_X.js";import{useMDXComponents as i}from"./index-DEI3eVkK.js";import{I as a,F as m}from"./CommandsAndQueries-7kzg9PVA.js";import{M as s,C as p}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import{C as l}from"./ControlsWithNote-Cd4a9QE9.js";import"./copy-jnb9sYPg.js";import{e as o}from"./AnalyticalTableHooks.stories-ckTPehdg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-CftSo41I.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DzO_7kh2.js";import"./delete-D0tqyXI3.js";import"./settings-Dh1N9l9x.js";import"./NoData-CfqmUQIq.js";import"./IllustratedMessage-Bhm6W5wf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bq1Dxl2N.js";import"./index-BGjDPX9c.js";import"./slim-arrow-down-BC69CAxO.js";import"./Input-7Ln5W5EQ.js";import"./ResponsivePopoverCommon.css-shdaMqe8.js";import"./ValueStateMessage.css-CGoPnYXJ.js";import"./Suggestions.css-CvvWsrep.js";import"./ListBoxItemGroupTemplate-BnggVcf_.js";import"./ComboBoxItemGroup-D6dCUoyB.js";import"./ListItemBaseTemplate-Q_ULQajv.js";import"./Token-Z2YEJAmU.js";import"./ScrollEnablement-BpLcSAvR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccnky39J.js";import"./ToggleButton-DYzuAOxb.js";import"./SuggestionItem-Bpa4_uLK.js";import"./index-DyTpO6UL.js";import"./Option-CFrG9aBk.js";import"./index-kL2L593_.js";import"./SegmentedButton-BfWqXCxQ.js";import"./index-aEhIJvAh.js";import"./Select-iON0Hwpr.js";import"./InvisibleMessage-Dmfd1gOp.js";import"./slim-arrow-down-DvFGLz9G.js";import"./useIsRTL-C2A7wRdc.js";import"./index-MVLgI-v_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CouX_vyD.js";import"./group-2-C0rLkZ4k.js";import"./sort-descending-DAhONQ_J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQqE75Ik.js";import"./utils-DVMbjWX7.js";import"./index-BLK2G4j5.js";import"./index-WwJOctFW.js";import"./index-BLDjATDM.js";import"./navigation-down-arrow-BVlOCaU1.js";import"./navigation-right-arrow-CmIckyyO.js";import"./navigation-right-arrow-C_vqXpi_.js";import"./useCurrentTheme-b3iu0jQF.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jxpqFoPJ.js";import"./debounce-D7W5PopO.js";import"./index-D0TSTHqY.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
