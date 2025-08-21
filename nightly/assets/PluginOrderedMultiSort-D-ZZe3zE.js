import{j as e}from"./iframe-D9TrNBgU.js";import{useMDXComponents as i}from"./index-DVnXt3Ou.js";import{I as a,F as m}from"./CommandsAndQueries-D4YJbg3c.js";import{M as s,C as p}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import{C as l}from"./ControlsWithNote-CSjZ13nD.js";import"./copy-DLBvKbOK.js";import{e as o}from"./AnalyticalTableHooks.stories-uNW8YLYL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./index-CVrKfxdZ.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBf_Dw_c.js";import"./delete-Dr-66tAO.js";import"./settings-CxnE-5K_.js";import"./NoData-DDrlL7pG.js";import"./IllustratedMessage-B2-LKJi7.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-I2HuK0dM.js";import"./index-D06Uv0Pi.js";import"./slim-arrow-down-C2JXuKwB.js";import"./Input-DQQyXJAT.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./ValueStateMessage.css-DHgdSKUd.js";import"./Suggestions.css-Bf6rrCOA.js";import"./ListBoxItemGroupTemplate-DU5UcquD.js";import"./ComboBoxItemGroup-vHrK_DQ4.js";import"./ListItemBaseTemplate-ZtPbHRna.js";import"./Token-Coz-0Psc.js";import"./ScrollEnablement-DyC328cf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbZzwl2a.js";import"./ToggleButton-DCiP1WbP.js";import"./SuggestionItem-D_ZaevX8.js";import"./index-CP_h3Gqr.js";import"./Option-DQLWMMud.js";import"./index-DkJeF1qi.js";import"./SegmentedButton-DfvTsqIq.js";import"./index-Cc7NpnLn.js";import"./Select-DHXu7QxQ.js";import"./InvisibleMessage-B7KEwtPS.js";import"./slim-arrow-down-CjNPHzOs.js";import"./useIsRTL-CQal8GpR.js";import"./index-BxxqrhiV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B8GbiaN7.js";import"./group-2-D57pi6NC.js";import"./sort-descending-B9mtYWvv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DahENrtL.js";import"./utils-CQ0T0LrZ.js";import"./index-CUBqq7rX.js";import"./index-CCqFcpHS.js";import"./index-BL5y2Z3x.js";import"./navigation-down-arrow-BKi4Bg3e.js";import"./navigation-right-arrow-DruaLpXf.js";import"./navigation-right-arrow-Aay7hZd4.js";import"./useCurrentTheme-D_A9Q4B2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CKCvg6SL.js";import"./debounce-D7W5PopO.js";import"./index-DsRCr8km.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
