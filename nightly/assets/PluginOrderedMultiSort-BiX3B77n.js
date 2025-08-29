import{j as e}from"./iframe-D7jNN5F7.js";import{useMDXComponents as i}from"./index-DKysAdcf.js";import{I as a,F as m}from"./CommandsAndQueries-B3x-n25L.js";import{M as s,C as p}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import{C as l}from"./ControlsWithNote-E5ssFwis.js";import"./copy-DjcHAfNd.js";import{e as o}from"./AnalyticalTableHooks.stories-BmP7vUL2.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./index-C3oU0sTK.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrWTQEUd.js";import"./delete-BMcwn6C5.js";import"./settings-ooRwGldT.js";import"./NoData-CmmWac5w.js";import"./IllustratedMessage-CGjrQDe5.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ba41DV2y.js";import"./index-QO4ETt-1.js";import"./slim-arrow-down-ClFDM0XG.js";import"./Input-C1LBCJrC.js";import"./ResponsivePopoverCommon.css-MDF32GMH.js";import"./ValueStateMessage.css-CSvT2ncZ.js";import"./Suggestions.css-h4wD07M-.js";import"./ListBoxItemGroupTemplate-m32UL8v8.js";import"./ComboBoxItemGroup-MOGf7S7z.js";import"./ListItemBaseTemplate-Qur3Yd49.js";import"./Token-dgku7ZGE.js";import"./ScrollEnablement-DtvSga-i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWHZOOaU.js";import"./ToggleButton-BQaXQ2ri.js";import"./SuggestionItem-Cyq1l9Gv.js";import"./index-BHm2R3XB.js";import"./Option-_FDJMDEU.js";import"./index-njIvvZCY.js";import"./SegmentedButton-DfDY_QCz.js";import"./index-cKUCfcCB.js";import"./Select-CDYC53Ti.js";import"./InvisibleMessage-ClgnFC8X.js";import"./slim-arrow-down-B3FD46qZ.js";import"./useIsRTL-pM8eUPi3.js";import"./index-1d71x-Ip.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClyrPaST.js";import"./group-2-D_k1jUK1.js";import"./sort-descending-BjOIqvLu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9wKJ0ov.js";import"./utils-BRgWD3XM.js";import"./index-B6ReJZeR.js";import"./index-BJLgpe9x.js";import"./index-DmxdgylF.js";import"./navigation-down-arrow-DMsOsTOp.js";import"./navigation-right-arrow-FztiZH_C.js";import"./navigation-right-arrow-D7gRJcL2.js";import"./useCurrentTheme-Dy1oFGaa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B24FJ1pD.js";import"./debounce-D7W5PopO.js";import"./index-TuCRCHSI.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
