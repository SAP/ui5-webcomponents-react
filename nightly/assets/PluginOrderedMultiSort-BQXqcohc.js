import{j as e}from"./iframe-BwRZ6zH2.js";import{useMDXComponents as i}from"./index-Dha5O7fd.js";import{I as a,F as m}from"./CommandsAndQueries-DnahCchN.js";import{M as s,C as p}from"./blocks-DL1YgvN4.js";import"./Tag-jzGA4JLS.js";import"./index-Bn-_GOqM.js";import{C as l}from"./ControlsWithNote-DF46a5u6.js";import"./copy-14fAizTo.js";import{e as o}from"./AnalyticalTableHooks.stories-CzV32_nI.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DC4jF85u.js";import"./index-BMXWdCHK.js";import"./index-B9mzJ7n3.js";import"./Link-CWmfxulK.js";import"./addCustomCSSWithScoping-C9ks6bKt.js";import"./index-CODnJVEI.js";import"./index-Dvv0G0ud.js";import"./index-daxMvW3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHObXTEz.js";import"./index-DNHSASGJ.js";import"./information-C-c_P7SM.js";import"./sys-enter-2-Csc9mkjG.js";import"./alert-OSu7g90-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuF-idx5.js";import"./delete-DnMkTbHU.js";import"./settings-DWqL8GN4.js";import"./NoData-xo9LtzN3.js";import"./IllustratedMessage-BUlHVPP_.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DoJ_E0Z6.js";import"./index-BMWdMDNa.js";import"./slim-arrow-down-DGfRaB6_.js";import"./Input-RzR2WO-8.js";import"./ResponsivePopoverCommon.css-V2mDNvXu.js";import"./ValueStateMessage.css-KSw2_w5L.js";import"./Suggestions.css-DtrSZfMx.js";import"./ListBoxItemGroupTemplate-QH6IW3JL.js";import"./ComboBoxItemGroup-Yos9NcoM.js";import"./ListItemBaseTemplate-DQqywW_0.js";import"./Token-B-qHaum6.js";import"./ScrollEnablement-BFz36fKi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CJECabbX.js";import"./ToggleButton-CWW1wHVB.js";import"./SuggestionItem-BuEtJ6r7.js";import"./index-CD_8sEoj.js";import"./Option-D54pTtGn.js";import"./index-CWyD_my-.js";import"./SegmentedButton-BXKvuy9n.js";import"./index-uwW1sX7P.js";import"./Select-CrCye_x5.js";import"./InvisibleMessage-DpqJIsJS.js";import"./slim-arrow-down-amOOANNn.js";import"./useIsRTL-Bbn2uL0j.js";import"./index-Cagw2uuL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-fBzDQmus.js";import"./group-2-CuicZOeN.js";import"./sort-descending-C017Ahmn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXmirVoI.js";import"./utils-B5889Cdc.js";import"./index-Dbjl1uS8.js";import"./index-B3lXbWLn.js";import"./index-B05ZeC-j.js";import"./navigation-down-arrow-RIpz5oAP.js";import"./navigation-right-arrow-CI29uvqS.js";import"./navigation-right-arrow-Dz3d1kAT.js";import"./useCurrentTheme-K7KdeM9-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BO-4pkI6.js";import"./debounce-D7W5PopO.js";import"./index-Bgi4o4gP.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
