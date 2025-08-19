import{j as e}from"./iframe-CvU-07By.js";import{useMDXComponents as i}from"./index-DIsCDPQO.js";import{I as a,F as m}from"./CommandsAndQueries-DbBqwiyb.js";import{M as s,C as p}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import{C as l}from"./ControlsWithNote-W2TrAeTD.js";import"./copy-TKggWaTM.js";import{e as o}from"./AnalyticalTableHooks.stories-3G5OLr_c.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./index-DyAIHHB4.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D64xpzSV.js";import"./delete-DASOuVgK.js";import"./settings-Cz4b_CQ9.js";import"./NoData-DRMV0RP5.js";import"./IllustratedMessage-Bz0pNoIO.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DO36Y4ke.js";import"./index-QYxqI47W.js";import"./slim-arrow-down-XBwwFKMk.js";import"./Input-Bk67iFBz.js";import"./ResponsivePopoverCommon.css-DtcMkK-L.js";import"./ValueStateMessage.css-DNP4kQ0q.js";import"./Suggestions.css-BgX4bA8X.js";import"./ListBoxItemGroupTemplate-D9C-1xti.js";import"./ComboBoxItemGroup-DaMMxlC9.js";import"./ListItemBaseTemplate-D_DoxqTK.js";import"./Token-B3GzMGjr.js";import"./ScrollEnablement-Cuj5W76G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9CyfjI3.js";import"./ToggleButton-BbTI55BR.js";import"./SuggestionItem-PZTnS_B4.js";import"./index-Tg7QXIHr.js";import"./Option-98MOnCoD.js";import"./index-B16eoqTK.js";import"./SegmentedButton-M4kts95Y.js";import"./index-B6dFmvI2.js";import"./Select-BMBrtb3I.js";import"./InvisibleMessage-DWMWQiC0.js";import"./slim-arrow-down-qxU48HTy.js";import"./useIsRTL-CCAIfBkQ.js";import"./index-CF9TteIz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJ3EZc78.js";import"./group-2-DYOtES-M.js";import"./sort-descending-Bm8GDKvK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-JnyUrL39.js";import"./utils-BaDcmQQs.js";import"./index-CoUCTNoo.js";import"./index-BJGfmIzj.js";import"./index-D3k1OHd9.js";import"./navigation-down-arrow-0KBRgDJV.js";import"./navigation-right-arrow-B3eoCJ9z.js";import"./navigation-right-arrow-BuzrIA7s.js";import"./useCurrentTheme-DLiAiuSO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrZd3Ayr.js";import"./debounce-D7W5PopO.js";import"./index-BegZFN-t.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
