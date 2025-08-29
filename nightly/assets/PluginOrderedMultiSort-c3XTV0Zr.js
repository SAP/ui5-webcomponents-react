import{j as e}from"./iframe-B3OL0dJj.js";import{useMDXComponents as i}from"./index-BacKYjfx.js";import{I as a,F as m}from"./CommandsAndQueries-CF0BaiA4.js";import{M as s,C as p}from"./blocks-DWSkzL_O.js";import"./Tag-Cz9uoO3f.js";import"./index-ICQad1Jx.js";import{C as l}from"./ControlsWithNote-NJa_WyLA.js";import"./copy-BIhehpav.js";import{e as o}from"./AnalyticalTableHooks.stories-D2kTvojh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D7xFIu9y.js";import"./index-bmuDs-E9.js";import"./index-BM-Dt4Ms.js";import"./Link-B3I1DK3y.js";import"./addCustomCSSWithScoping-QT3VtH-b.js";import"./index-Cl7-VWhy.js";import"./index-BB1lQngG.js";import"./index-BvBfHyAK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdVXj32r.js";import"./index-DpJD6crE.js";import"./information-CsT7qq8I.js";import"./sys-enter-2-C6eVrxWF.js";import"./alert-D4Iro2pT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-64BVvMSH.js";import"./delete-D20JBxPW.js";import"./settings-omjh2iI4.js";import"./NoData-BDDO8du3.js";import"./IllustratedMessage-Ctv1I4UG.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-OMY4BRv7.js";import"./index-BRwxZr_p.js";import"./slim-arrow-down-HjvQdG02.js";import"./Input-CUVXXg7A.js";import"./ResponsivePopoverCommon.css-BzfoLh3k.js";import"./ValueStateMessage.css-Bg5AcRme.js";import"./Suggestions.css-CMqU9BCK.js";import"./ListBoxItemGroupTemplate-B2f83niS.js";import"./ComboBoxItemGroup-DOJ3tmN4.js";import"./ListItemBaseTemplate-DjdvHlw5.js";import"./Token-CFAmjSAI.js";import"./ScrollEnablement-T55LOece.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C5poq4N5.js";import"./ToggleButton-CXHi7Iti.js";import"./SuggestionItem-CICbtEWy.js";import"./index-DWeWBlNY.js";import"./Option-1FDXr6S6.js";import"./index-Bf9Y5VxI.js";import"./SegmentedButton-B-M1xCAz.js";import"./index-D6OusQ8V.js";import"./Select-CVc_qkqT.js";import"./InvisibleMessage-ByyXeQex.js";import"./slim-arrow-down-2tFwivWo.js";import"./useIsRTL-CZITtXzn.js";import"./index-BsubhM1D.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D0Kw7TrJ.js";import"./group-2-BMSViSkc.js";import"./sort-descending-CVvl3anL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UwlP0y3d.js";import"./utils-DtD9zSg1.js";import"./index-BKTQiEpx.js";import"./index-3LIQI1Mx.js";import"./index-Nwxrqq1G.js";import"./navigation-down-arrow-BCeBT4de.js";import"./navigation-right-arrow-B_nC9n3I.js";import"./navigation-right-arrow-CEOQ8RZr.js";import"./useCurrentTheme-hc_hNIbV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DV3BrsWn.js";import"./debounce-D7W5PopO.js";import"./index-BqvLyP5X.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
