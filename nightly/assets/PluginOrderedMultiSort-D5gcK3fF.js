import{j as e}from"./iframe-B9d6tunA.js";import{useMDXComponents as i}from"./index-CHHTqEt5.js";import{I as a,F as m}from"./CommandsAndQueries-Dbama0_5.js";import{M as s,C as p}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import{C as l}from"./ControlsWithNote-D1sa-qp8.js";import"./copy-DBcroaPr.js";import{e as o}from"./AnalyticalTableHooks.stories-BYRkhAc9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";import"./index-bjg2761A.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8Cs0Me0.js";import"./delete-CeJU5A6H.js";import"./settings-CnwemJH0.js";import"./NoData-B9Ct3Bte.js";import"./IllustratedMessage-B9S7zPJ2.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BfBfDvss.js";import"./index-CIA13LwP.js";import"./slim-arrow-down-D05V1lot.js";import"./Input-BXjsXSc_.js";import"./ResponsivePopoverCommon.css-BlZ9FToc.js";import"./ValueStateMessage.css-CAd1FQ11.js";import"./Suggestions.css-D8AOIxab.js";import"./ListBoxItemGroupTemplate-Bhrbrnfy.js";import"./ComboBoxItemGroup-2CqGaLQ_.js";import"./ListItemBaseTemplate-CHOAwn4O.js";import"./Token-BhjIixy1.js";import"./ScrollEnablement-DMZ5Ege9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B98qKKlT.js";import"./ToggleButton-D2X4-nFe.js";import"./SuggestionItem-BqBkM0aO.js";import"./index-mMW_G7sz.js";import"./Option-BETBD_j4.js";import"./index-Dq8WXUVt.js";import"./SegmentedButton-B6qsgUfN.js";import"./index-DQgYfch-.js";import"./Select-B8g_Zr6U.js";import"./InvisibleMessage-CZwz5JoO.js";import"./slim-arrow-down-D_fYxlqY.js";import"./useIsRTL-DOJ0Jr_3.js";import"./index-DFOOm17j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DifKOfuY.js";import"./group-2-BVw5lsTv.js";import"./sort-descending-CF7x_zfl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAVaOe.js";import"./utils-Cz3NQMid.js";import"./index-CY8hMSGY.js";import"./index-4dyeEyUB.js";import"./index-Dn5LrzbR.js";import"./navigation-down-arrow-CYkXcjUC.js";import"./navigation-right-arrow-BReQAbGx.js";import"./navigation-right-arrow-DQZi3Hf6.js";import"./useCurrentTheme-CezBWnYs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BunxPUB3.js";import"./debounce-D7W5PopO.js";import"./index-BzaLULpj.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
