import{j as e}from"./iframe-Plj9L4DO.js";import{useMDXComponents as i}from"./index-uN80YAVR.js";import{I as a,F as m}from"./CommandsAndQueries-BWyKkggu.js";import{M as s,C as p}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import{C as l}from"./ControlsWithNote-BUu8k3dE.js";import"./copy-DLXELO5k.js";import{e as o}from"./AnalyticalTableHooks.stories-C97ck5E1.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-B6F36pGT.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ijwk2Jq3.js";import"./delete-Bj_pcN1D.js";import"./settings-C1dsANlV.js";import"./NoData-C6Ob-Z--.js";import"./IllustratedMessage-BHtZel4v.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-YfgvGqD3.js";import"./index-BdoAGjQ2.js";import"./slim-arrow-down-bQWmrnVc.js";import"./Input-D_9FWiS-.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";import"./ValueStateMessage.css-JOKuFUum.js";import"./Suggestions.css-CxuGFOi-.js";import"./ListBoxItemGroupTemplate-sEIue0Fw.js";import"./ComboBoxItemGroup-CXVkGl0O.js";import"./ListItemBaseTemplate-CH90Z1sT.js";import"./Token-X11-BsdP.js";import"./ScrollEnablement-C4mp0fCO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZA0fV_-.js";import"./ToggleButton-CokJVa8f.js";import"./SuggestionItem-CZ3Cpr40.js";import"./index-H4v79u-c.js";import"./Option-CMOaJbPT.js";import"./index-D-3W9zYA.js";import"./SegmentedButton-DKNm8wW6.js";import"./index-DEFckCJE.js";import"./Select-CJ-vJLYi.js";import"./InvisibleMessage-C9ijcey0.js";import"./slim-arrow-down-D9ZL1EHX.js";import"./useIsRTL-_CpVncDg.js";import"./index-BzZ4luee.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-Pk41C2.js";import"./group-2-BhbpIExg.js";import"./sort-descending-DSmABxuS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5HZXdPZ.js";import"./utils-CzUFBlHA.js";import"./index-BzcyxAVY.js";import"./index-DfxHMw3J.js";import"./index-Y38PQMr-.js";import"./navigation-down-arrow-DJw6Oxgn.js";import"./navigation-right-arrow-O3aG19yG.js";import"./navigation-right-arrow-DHq6wjVC.js";import"./useCurrentTheme-DI5oXyuc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SRyOKcq5.js";import"./debounce-D7W5PopO.js";import"./index-C8EPvm6k.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
