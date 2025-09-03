import{j as e}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as i}from"./index-lDTLJk7j.js";import{I as a,F as m}from"./CommandsAndQueries-BGpNLpHt.js";import{M as s,C as p}from"./blocks-Cil-35LB.js";import"./Tag-BIgoED-u.js";import"./index-aevS7PA-.js";import{C as l}from"./ControlsWithNote-CA46pQAN.js";import"./copy-E4FhZn3x.js";import{e as o}from"./AnalyticalTableHooks.stories-CKSM3Mr6.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./index-DceE06Sq.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQ4Urhss.js";import"./delete-CjHb4wVG.js";import"./settings-BM7d6L00.js";import"./NoData-11beALjN.js";import"./IllustratedMessage-S8oXJU9_.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-A6wyWuPn.js";import"./index-sC_6pIUj.js";import"./slim-arrow-down-C3AMNhFD.js";import"./Input-DPv933zQ.js";import"./ResponsivePopoverCommon.css-BwJ1vIxv.js";import"./ValueStateMessage.css-Fubl11x4.js";import"./Suggestions.css-BJLpoiav.js";import"./ListBoxItemGroupTemplate-Dnk-fFMD.js";import"./ComboBoxItemGroup-DT9mYKvC.js";import"./ListItemBaseTemplate-C2zYVBWE.js";import"./Token-deawB8qV.js";import"./ScrollEnablement-BzLICqgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlKXn9_7.js";import"./ToggleButton-KUQcKiai.js";import"./SuggestionItem-frd0or4N.js";import"./index-CUSsQjGJ.js";import"./Option-BvmKpK6T.js";import"./index-BSRf6rvH.js";import"./SegmentedButton-CcLQlQxt.js";import"./index-BpBvTivy.js";import"./Select-CsDTuuP5.js";import"./InvisibleMessage-Btu_O-HX.js";import"./slim-arrow-down-Ba9Bx2ZK.js";import"./useIsRTL-B5nPdRZ3.js";import"./index-CV8w4gWx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CmMKzJCM.js";import"./group-2-p-WoPBtU.js";import"./sort-descending-Cx3m0LJl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4QjobNo.js";import"./utils-DZ25eW5o.js";import"./index-C9VxjHmw.js";import"./index-BIqlxQzt.js";import"./index-BJ3jHYV7.js";import"./navigation-down-arrow-CAwJ7ZnN.js";import"./navigation-right-arrow-DJfjAhtB.js";import"./navigation-right-arrow-BRxq8Qef.js";import"./useCurrentTheme-BEMyA3a7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BDBqb2iV.js";import"./debounce-D7W5PopO.js";import"./index-Vd-czAfJ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
