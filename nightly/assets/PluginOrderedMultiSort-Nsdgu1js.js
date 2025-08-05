import{j as e}from"./iframe-DofHecbS.js";import{useMDXComponents as i}from"./index-C8vGIvk8.js";import{I as a,F as m}from"./CommandsAndQueries-B_nZVkrt.js";import{M as s,C as p}from"./blocks-D1wzbhWf.js";import"./Tag-DPdR_js3.js";import"./index-DxedyFSH.js";import{C as l}from"./ControlsWithNote-BR0fXs1Y.js";import"./copy-7CDC0i6_.js";import{e as o}from"./AnalyticalTableHooks.stories-Df--Fijw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2GOtqWe8.js";import"./index-C1xP7ttJ.js";import"./index-JzBnNIyF.js";import"./Link-Cmqq4my9.js";import"./addCustomCSSWithScoping-D75UEBUU.js";import"./index-C1lTEPtW.js";import"./index-D3sPt_5B.js";import"./index-5wCFhmZT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckn3SEtT.js";import"./index-CrXv1RBx.js";import"./information-CgIpVhAV.js";import"./sys-enter-2-BGLCbdRF.js";import"./alert-BfmE4lX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Brjg83.js";import"./delete-D2NilxDV.js";import"./settings-Cf8IyMya.js";import"./NoData-CfkExYbj.js";import"./IllustratedMessage-Dnr5iNpa.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CE89Cx3X.js";import"./index-jJjs9LNm.js";import"./slim-arrow-down-EHDwkNs1.js";import"./Input-N_-j7LxY.js";import"./ResponsivePopoverCommon.css-TlSViPpe.js";import"./ValueStateMessage.css-DVInJl-v.js";import"./Suggestions.css-DlkHD9ll.js";import"./ListBoxItemGroupTemplate-ED6CyBBi.js";import"./ComboBoxItemGroup-ewlsRotM.js";import"./ListItemBaseTemplate-ABM4tfp-.js";import"./Token-BCMx04Lv.js";import"./ScrollEnablement-BHaRcurn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGMAivsS.js";import"./ToggleButton-Sfg6JaHH.js";import"./SuggestionItem-B7DhfD2E.js";import"./index-s6SrZqBr.js";import"./Option-aoqgoG5K.js";import"./index-CT_4CuBt.js";import"./SegmentedButton-KhWFGTsD.js";import"./index-BslajtPY.js";import"./Select-DXX118v7.js";import"./InvisibleMessage-nm_wn900.js";import"./slim-arrow-down-DVCZJgJd.js";import"./useIsRTL-Ce4m0dIR.js";import"./index-Dj8g3dXL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D0CqCPjP.js";import"./group-2-DBiBkjjk.js";import"./sort-descending-D6qjO6YJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-fNtdlXtU.js";import"./utils-DvNhCEmv.js";import"./index-CwAobW3v.js";import"./index-DQ3LOa4c.js";import"./index-BF6qDwKQ.js";import"./navigation-down-arrow-YDy4hSa6.js";import"./navigation-right-arrow-D6gnN7Pz.js";import"./navigation-right-arrow-BToPAGpb.js";import"./useCurrentTheme-e0q8CTM5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFWBQ7NN.js";import"./debounce-D7W5PopO.js";import"./index-SKTvANbT.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
