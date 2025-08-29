import{j as e}from"./iframe-CMv2_fr8.js";import{useMDXComponents as i}from"./index-BCZO-1se.js";import{I as a,F as m}from"./CommandsAndQueries-UgVWTBkO.js";import{M as s,C as p}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import{C as l}from"./ControlsWithNote-_PUNWkdQ.js";import"./copy-Bp5geyDe.js";import{e as o}from"./AnalyticalTableHooks.stories-BSzstlQP.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./index-51EQIK1-.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bx3b2TDp.js";import"./delete-CalXTGlT.js";import"./settings-CKdoFgwl.js";import"./NoData-p29COnSK.js";import"./IllustratedMessage-C87-LIvH.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BQ0Mdx5M.js";import"./index-BxytC64g.js";import"./slim-arrow-down-BTfvD9aU.js";import"./Input-Bl2hG8Lo.js";import"./ResponsivePopoverCommon.css-TrKPArzz.js";import"./ValueStateMessage.css-CQDFsMMJ.js";import"./Suggestions.css-Ak-2B7T4.js";import"./ListBoxItemGroupTemplate-RY11pEtQ.js";import"./ComboBoxItemGroup-D_6Q9e7Q.js";import"./ListItemBaseTemplate-CQloCMYu.js";import"./Token-DU6rx9F8.js";import"./ScrollEnablement-T_D09lMU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D89_4FyU.js";import"./ToggleButton-OE-lMKYf.js";import"./SuggestionItem-StPux35r.js";import"./index-BTmpWJxg.js";import"./Option-h29ztJ0M.js";import"./index-CcEbMbla.js";import"./SegmentedButton-C64IbfpW.js";import"./index-BuFCuT2D.js";import"./Select-CqjrQ-1B.js";import"./InvisibleMessage-BDnkulxx.js";import"./slim-arrow-down-B9Cmh7Gb.js";import"./useIsRTL-CH3TFmG6.js";import"./index-CJ5r_NfY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkahIsh0.js";import"./group-2-CDhOjwXT.js";import"./sort-descending-Ipw7pnw4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmaCr3G1.js";import"./utils-ChWvBl6r.js";import"./index-DEGIPmEx.js";import"./index-CzKz2Ioj.js";import"./index-DHARM5pI.js";import"./navigation-down-arrow-DIfJAMnS.js";import"./navigation-right-arrow-Cgv7L7KE.js";import"./navigation-right-arrow-CeyNkbEW.js";import"./useCurrentTheme-DwDORL7y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C3LCctj_.js";import"./debounce-D7W5PopO.js";import"./index-BoSkNmP1.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
