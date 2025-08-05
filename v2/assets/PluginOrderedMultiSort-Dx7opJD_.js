import{j as e}from"./iframe-DTnEqaXa.js";import{useMDXComponents as i}from"./index-Bzwj8IeJ.js";import{I as a,F as m}from"./CommandsAndQueries-o88EZ4zv.js";import{M as s,C as p}from"./blocks-DjoWO0N0.js";import"./Tag-B9YI4L6P.js";import"./index-X9x0GvvK.js";import{C as l}from"./ControlsWithNote-wh0dqaK4.js";import"./copy-CVTh1Y4e.js";import{e as o}from"./AnalyticalTableHooks.stories-DcMvISKX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DCbmFI06.js";import"./index-L41gFWOj.js";import"./index-CPY0RkYC.js";import"./Link-DjplMcMT.js";import"./addCustomCSSWithScoping-Di76Mem5.js";import"./index-BLEhzZcH.js";import"./index-BtOoTda4.js";import"./index-Cbvl8GTm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvuY_C9E.js";import"./index-Bmfc8Eqw.js";import"./information-Z43pYR60.js";import"./sys-enter-2-2LeoQRYT.js";import"./alert-no1g3tmv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqmvIRJk.js";import"./delete-DG7Qils1.js";import"./settings-CD3VS0Cp.js";import"./NoData-C6HMlKut.js";import"./IllustratedMessage-CTErdkpq.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DiOS_Wi8.js";import"./index-ByYh-WOK.js";import"./slim-arrow-down-DWzEitHv.js";import"./Input-BX2m7kq-.js";import"./ResponsivePopoverCommon.css-Dg8IVknp.js";import"./ValueStateMessage.css-CPiQjmUi.js";import"./Suggestions.css-BEWKt8Uf.js";import"./ListBoxItemGroupTemplate-CH87aIyU.js";import"./ComboBoxItemGroup-C2WOE3Rv.js";import"./ListItemBaseTemplate-BZ506cs0.js";import"./Token-BEgAyOCd.js";import"./ScrollEnablement-j28YNdtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Z9rWegqM.js";import"./ToggleButton-aJVgg_YY.js";import"./SuggestionItem-3mz-RJsY.js";import"./index-D24AFQZk.js";import"./Option-CJC0NEQ9.js";import"./index-guueUBkC.js";import"./SegmentedButton--brNUxa5.js";import"./index-fGwj63Fh.js";import"./Select-D-KL7nct.js";import"./InvisibleMessage--LVGVy97.js";import"./slim-arrow-down-sADW_Ldr.js";import"./useIsRTL-SG3H97q3.js";import"./index-B7kRuZUV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2jVwpWUZ.js";import"./group-2-Dr0JsWqU.js";import"./sort-descending-CgA-kYmN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DT1QH2dv.js";import"./utils-CHYk4Hwj.js";import"./index-DGNMCWwU.js";import"./index-Cd-W8HrQ.js";import"./index-Du_TBYm5.js";import"./navigation-down-arrow-Bt8Z5CUg.js";import"./navigation-right-arrow-2WbGTEK8.js";import"./navigation-right-arrow-D6Z39_S5.js";import"./useCurrentTheme-DTJM-7US.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cas5z87m.js";import"./debounce-D7W5PopO.js";import"./index-C2Mlehus.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
