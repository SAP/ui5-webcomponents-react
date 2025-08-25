import{j as e}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as i}from"./index-EJQOh2Id.js";import{I as a,F as m}from"./CommandsAndQueries-BwMOH1SZ.js";import{M as s,C as p}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import{C as l}from"./ControlsWithNote-Bd6pYC1H.js";import"./copy-BQA3UKNo.js";import{e as o}from"./AnalyticalTableHooks.stories-DKcHsbUg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index-D9TUnkjB.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkBCTXa9.js";import"./delete-BHx19-Y9.js";import"./settings-C1rGZAVZ.js";import"./NoData-C9Am1g_a.js";import"./IllustratedMessage-gFpY2ARx.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cpo8GMo1.js";import"./index-BS2xqF92.js";import"./slim-arrow-down-CjCpnDGL.js";import"./Input-BnPcYwI0.js";import"./ResponsivePopoverCommon.css-De3l4lV7.js";import"./ValueStateMessage.css-CnYMheJQ.js";import"./Suggestions.css-CcER9QIN.js";import"./ListBoxItemGroupTemplate-DFglDMjK.js";import"./ComboBoxItemGroup-D4Gs5NOL.js";import"./ListItemBaseTemplate-DFt11I0O.js";import"./Token-BKduK5BD.js";import"./ScrollEnablement-BDrNOFng.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDVOPr0Q.js";import"./ToggleButton-C8ruj2ek.js";import"./SuggestionItem-DLLMxiuf.js";import"./index-BpVwnbz4.js";import"./Option-ydyzdS2N.js";import"./index-BahYCzWG.js";import"./SegmentedButton-Dd9nWvWy.js";import"./index-DO3t8-bw.js";import"./Select-DR14Z-d1.js";import"./InvisibleMessage-DNAVGHgD.js";import"./slim-arrow-down-DpHxo-vW.js";import"./useIsRTL-iU-OFwyb.js";import"./index-KjM22Mkn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapOufte.js";import"./group-2-BCK94LLS.js";import"./sort-descending-DoJpvQSn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DG5c9gPi.js";import"./utils-ta-b6IhW.js";import"./index-9Yl4D7c1.js";import"./index-CNCeO74r.js";import"./index-BtDnirP4.js";import"./navigation-down-arrow-CTzJ9Li3.js";import"./navigation-right-arrow-Sp9fSK-u.js";import"./navigation-right-arrow-NCcFjcdA.js";import"./useCurrentTheme-unQEnGqh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfLpzXqh.js";import"./debounce-D7W5PopO.js";import"./index-Bgmqc7Nb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
