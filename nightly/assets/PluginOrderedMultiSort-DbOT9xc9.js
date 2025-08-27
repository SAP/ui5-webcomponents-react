import{j as e}from"./iframe-BuT579UQ.js";import{useMDXComponents as i}from"./index-hwCnNpvR.js";import{I as a,F as m}from"./CommandsAndQueries-bkB85Yh1.js";import{M as s,C as p}from"./blocks-xCv3ALrs.js";import"./Tag-BfLQPV5Q.js";import"./index-BdhtxwT5.js";import{C as l}from"./ControlsWithNote-BhkP8uA-.js";import"./copy-wEyzDN_W.js";import{e as o}from"./AnalyticalTableHooks.stories-FJkCYbWD.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B5tYw3g0.js";import"./index-CKRjOfqg.js";import"./index-DcodLJdG.js";import"./Link-BRdwNtbO.js";import"./addCustomCSSWithScoping-BObqnoGh.js";import"./index-CSxL7VzK.js";import"./index-mwQcMkri.js";import"./index-t5BVUaSq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWHNxoJ6.js";import"./index-Sm3A70Iw.js";import"./information-BpdkAt88.js";import"./sys-enter-2-fNvpiTi4.js";import"./alert-Dvzv9mH1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bk34MmhX.js";import"./delete-DSXtlXXY.js";import"./settings-4bx0VgeV.js";import"./NoData-vp4GEOpw.js";import"./IllustratedMessage-BtlxeWXL.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D53SZETl.js";import"./index-DJQmWM3N.js";import"./slim-arrow-down-BFpW1mmV.js";import"./Input-CvvVNEnq.js";import"./ResponsivePopoverCommon.css-qGTg7BLI.js";import"./ValueStateMessage.css-CtKS_0vT.js";import"./Suggestions.css-Bcp4Zv_G.js";import"./ListBoxItemGroupTemplate-Cui9N4wb.js";import"./ComboBoxItemGroup-CEjB3kBH.js";import"./ListItemBaseTemplate-CQO5WV5w.js";import"./Token-D5ISVM2O.js";import"./ScrollEnablement-CcsddKsW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHi924vm.js";import"./ToggleButton-LeeA5Zqa.js";import"./SuggestionItem-CjQuXKdn.js";import"./index-Bf2ZDXXH.js";import"./Option-DPjuNQJt.js";import"./index-BO8BCtNV.js";import"./SegmentedButton-CRrW-aTl.js";import"./index-DlawuYVu.js";import"./Select-DLIvqNcS.js";import"./InvisibleMessage-Ba38bBs7.js";import"./slim-arrow-down-BM2WIur-.js";import"./useIsRTL-5gvEDkWI.js";import"./index-oe8Gqb1X.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JS7GUKDF.js";import"./group-2-BNbgPDED.js";import"./sort-descending-DV5Un8fH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zp_0qgnt.js";import"./utils-B7fpqODC.js";import"./index-DMH9d7E6.js";import"./index-D4lxRB7c.js";import"./index-Dtnrs4JW.js";import"./navigation-down-arrow-BnJLXcXo.js";import"./navigation-right-arrow-CD_EyHiK.js";import"./navigation-right-arrow-B0yfts_H.js";import"./useCurrentTheme-CEkgdkN3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dtlg3XZo.js";import"./debounce-D7W5PopO.js";import"./index-D_q8YZ9X.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
