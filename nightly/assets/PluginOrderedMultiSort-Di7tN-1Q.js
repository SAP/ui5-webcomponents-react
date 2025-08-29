import{j as e}from"./iframe-Dk4p-NU5.js";import{useMDXComponents as i}from"./index-CHKRtcGE.js";import{I as a,F as m}from"./CommandsAndQueries-DyjrBS1R.js";import{M as s,C as p}from"./blocks-DM1TPhC8.js";import"./Tag-DIu9mUid.js";import"./index-Dy2aDYnH.js";import{C as l}from"./ControlsWithNote-BL-O4PHK.js";import"./copy-9E4-O2oJ.js";import{e as o}from"./AnalyticalTableHooks.stories-CmR8dSjn.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CltNqpOu.js";import"./index-C0BhXx34.js";import"./index-BjoQdxqk.js";import"./Link-CnlylsPy.js";import"./addCustomCSSWithScoping-YkmUIPFl.js";import"./index-CWcAFKak.js";import"./index-DSYhAS_G.js";import"./index-oVL9Luq8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CcivO6eQ.js";import"./index-C9rB5uch.js";import"./information-BsAdT-Xc.js";import"./sys-enter-2-CC2F8dSm.js";import"./alert-r293I4gz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgKWDcWX.js";import"./delete-D_xbwIrp.js";import"./settings-BhIm0GiE.js";import"./NoData-DJVZbPGE.js";import"./IllustratedMessage-Dz5IZ3Gp.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BAIeo5U4.js";import"./index-DH8WjD5q.js";import"./slim-arrow-down-EOCFba-X.js";import"./Input-B0eKdbw0.js";import"./ResponsivePopoverCommon.css-CA4ifvoQ.js";import"./ValueStateMessage.css-B8pmh2N9.js";import"./Suggestions.css-BBewLOHr.js";import"./ListBoxItemGroupTemplate-DbB0mUIL.js";import"./ComboBoxItemGroup-teYu1d9A.js";import"./ListItemBaseTemplate-CSbf2qJ5.js";import"./Token-TOBkDVYm.js";import"./ScrollEnablement-BUDpADc-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_XkMLugT.js";import"./ToggleButton-Cjl-wpx7.js";import"./SuggestionItem--vngu7nQ.js";import"./index-Bmc43_Wo.js";import"./Option-jLqCQe_J.js";import"./index-CBPjXdoe.js";import"./SegmentedButton-BKR8AthM.js";import"./index-CqLI4bN3.js";import"./Select-CpzFR8eY.js";import"./InvisibleMessage-BEHSXRmN.js";import"./slim-arrow-down-DP1V9xmJ.js";import"./useIsRTL-BuDy2riY.js";import"./index-DvomD5A_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BVt2u7qE.js";import"./group-2-vNrOYBfE.js";import"./sort-descending-BVScS0Cb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YT5Jo3L_.js";import"./utils-Cjbny4G8.js";import"./index-m33ksqZ9.js";import"./index-XLo1LjLC.js";import"./index-DA1_rGf1.js";import"./navigation-down-arrow-CdY2_y0s.js";import"./navigation-right-arrow-D0DZxEc6.js";import"./navigation-right-arrow-DVeiYe6Q.js";import"./useCurrentTheme-O02qIIH9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CUq2bgaj.js";import"./debounce-D7W5PopO.js";import"./index-D7XWWKWU.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
