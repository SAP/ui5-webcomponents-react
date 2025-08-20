import{j as e}from"./iframe-CgMbHIkI.js";import{useMDXComponents as i}from"./index-uQo7cCLJ.js";import{I as a,F as m}from"./CommandsAndQueries-BXDj4lkb.js";import{M as s,C as p}from"./blocks-CFocqrsp.js";import"./Tag-Dk7X5Tny.js";import"./index-D54ieI7L.js";import{C as l}from"./ControlsWithNote-C7undRkV.js";import"./copy-Cpi-mOYC.js";import{e as o}from"./AnalyticalTableHooks.stories-1kGAT5ix.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ChYBHoyi.js";import"./index-DXZ48uHs.js";import"./index-Bjiw2xBb.js";import"./Link-BqFTwoRG.js";import"./addCustomCSSWithScoping-B687qvo6.js";import"./index-8_dTlaSG.js";import"./index-pQs3Bm3D.js";import"./index-X0m3PPe8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CnkwV5Xd.js";import"./index-B3DD2XIG.js";import"./information-DgjoEc_K.js";import"./sys-enter-2-C0WM_GHK.js";import"./alert-wRxwDyfo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJdaz7BC.js";import"./delete-BC3bBzWs.js";import"./settings-1F-0BWTy.js";import"./NoData-CLfDCq5G.js";import"./IllustratedMessage-C02CLFxV.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-fhsrZxOa.js";import"./index-C7ep3BZZ.js";import"./slim-arrow-down-C6871QHD.js";import"./Input-BUn11rhe.js";import"./ResponsivePopoverCommon.css-Bgg5pcPK.js";import"./ValueStateMessage.css-DO5UcoIB.js";import"./Suggestions.css-Jr9HB9gU.js";import"./ListBoxItemGroupTemplate-Du89At4T.js";import"./ComboBoxItemGroup-BAjaJtUi.js";import"./ListItemBaseTemplate-D-AVCzw3.js";import"./Token-DmKgq2o4.js";import"./ScrollEnablement-C9I3jXtf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdHlyVF_.js";import"./ToggleButton-DhSzo4t9.js";import"./SuggestionItem-C-MzrG9W.js";import"./index-4FJd9xIS.js";import"./Option-B6atmey2.js";import"./index-CuGkmgDQ.js";import"./SegmentedButton-fjDS9O7m.js";import"./index-C_T_y0ct.js";import"./Select-Bzw1E5rv.js";import"./InvisibleMessage-CSPRqXEs.js";import"./slim-arrow-down-IxdmmDCl.js";import"./useIsRTL-CXsGMYTx.js";import"./index-DXMjlp8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-k_aK8hHp.js";import"./group-2-yEwjUS7z.js";import"./sort-descending-BANgux84.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFsnjy_v.js";import"./utils-BLYUNJMF.js";import"./index-CwPWaTl1.js";import"./index-De4hafVj.js";import"./index-DrhVfMn_.js";import"./navigation-down-arrow-BUDC_MIr.js";import"./navigation-right-arrow-DSZJ-2kn.js";import"./navigation-right-arrow-D5kDwvSN.js";import"./useCurrentTheme-DG-46zZW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ie8jHGMw.js";import"./debounce-D7W5PopO.js";import"./index-5Ur0e5nd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
