import{j as e}from"./iframe-BohNpW-0.js";import{useMDXComponents as i}from"./index-CNs9TfzQ.js";import{I as a,F as m}from"./CommandsAndQueries-dvLT1dsP.js";import{M as s,C as p}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import{C as l}from"./ControlsWithNote-QGl7DIf2.js";import"./copy-CQ_htW6-.js";import{e as o}from"./AnalyticalTableHooks.stories-BkE12vkX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./index-ByPlsUCp.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnuRW_a.js";import"./delete-DFm5suxj.js";import"./settings-BLCj6Ktd.js";import"./NoData-CAAIc5W6.js";import"./IllustratedMessage-Bpl_x9QE.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1alUcvag.js";import"./index-Ch4OLcN7.js";import"./slim-arrow-down-LYXn27gh.js";import"./Input-CXgaSvQH.js";import"./ResponsivePopoverCommon.css-DuJkDvJC.js";import"./ValueStateMessage.css-BUzzgD75.js";import"./Suggestions.css-BIwwsvtG.js";import"./ListBoxItemGroupTemplate-jhhhIZpU.js";import"./ComboBoxItemGroup-CqSbXN4t.js";import"./ListItemBaseTemplate-reYvnJJM.js";import"./Token-iGWj7aCd.js";import"./ScrollEnablement-HAARTfJV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZXGuN1Y.js";import"./ToggleButton-U_geWF_i.js";import"./SuggestionItem-Co2iHh_E.js";import"./index-BAL7ahhu.js";import"./Option-CobSYum8.js";import"./index-Bu6Tv_AS.js";import"./SegmentedButton-Cs3c2JRc.js";import"./index-DWE68V0w.js";import"./Select-BLyS4LHF.js";import"./InvisibleMessage-_2VjBh0c.js";import"./slim-arrow-down-wv1cGsxv.js";import"./useIsRTL-D6FosoIx.js";import"./index-CjyJ5jjJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C3RkhPtf.js";import"./group-2-COlpxIGz.js";import"./sort-descending-CwpmoWCE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZkdsjgh.js";import"./utils-GVqR78hZ.js";import"./index-UheYK0zI.js";import"./index-CrORVvYl.js";import"./index-BhN4dH-m.js";import"./navigation-down-arrow-D4lgA2BL.js";import"./navigation-right-arrow-DP2bB5H7.js";import"./navigation-right-arrow-C4pGrl1t.js";import"./useCurrentTheme-CCffuhcS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-KjAWBXk6.js";import"./debounce-D7W5PopO.js";import"./index-Cf2iELKC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
