import{j as e}from"./iframe-FFY2S6YG.js";import{useMDXComponents as i}from"./index-BzZglwT-.js";import{I as a,F as m}from"./CommandsAndQueries-CRs7a5Er.js";import{M as s,C as p}from"./blocks-tMTQEG0b.js";import"./Tag-CY0dYkIx.js";import"./index-CR-wXzPk.js";import{C as l}from"./ControlsWithNote-CnMrq5GR.js";import"./copy-DuPWkMaa.js";import{e as o}from"./AnalyticalTableHooks.stories-FtOOhuOh.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BK6LUJYp.js";import"./index-aRemyO01.js";import"./index-CYPt-1NW.js";import"./Link-ilnMyEmJ.js";import"./addCustomCSSWithScoping-L7uLJS1K.js";import"./index-BvjHl6jR.js";import"./index-Cer5_OSt.js";import"./index-dBDK7i7w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hY5EkXL.js";import"./index-BpfUe8Vy.js";import"./information-bHzg5lJa.js";import"./sys-enter-2-DLgVYDfp.js";import"./alert-DTO9To2T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DewUzwnF.js";import"./delete-PyKScnn5.js";import"./settings-D8wSEnLQ.js";import"./NoData-DcvAWleu.js";import"./IllustratedMessage-CUcy7Lzq.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7-d5vvM.js";import"./index-DzVsJZGg.js";import"./slim-arrow-down-CDbx1-YQ.js";import"./Input-BUwXm7QE.js";import"./ResponsivePopoverCommon.css-Ns2pYP6j.js";import"./ValueStateMessage.css-Br2MqEEx.js";import"./Suggestions.css-BA_f9-0L.js";import"./ListBoxItemGroupTemplate-82b3Pwjr.js";import"./ComboBoxItemGroup-CyA2Qdmh.js";import"./ListItemBaseTemplate-D3ib4Mla.js";import"./Token-CV1Eunvp.js";import"./ScrollEnablement-DswLTbh8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-sXxgGRTN.js";import"./ToggleButton-BSn8PnZz.js";import"./SuggestionItem-m0RxQNSP.js";import"./index-CFYJFEfe.js";import"./Option-D87YgESn.js";import"./index-wgQZg_qM.js";import"./SegmentedButton-BnS-MFCM.js";import"./index-CGQSvAxs.js";import"./Select-CYN8bhUC.js";import"./InvisibleMessage-CbKgbx5O.js";import"./slim-arrow-down-Cfpa0YBm.js";import"./useIsRTL-BX8Bpdr0.js";import"./index-C_QO2GI1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-uMu8AkhM.js";import"./group-2-CMgkMPSi.js";import"./sort-descending-BvvCOZ2_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHw5dxkC.js";import"./utils-BPc0OMuw.js";import"./index-D_RFV31k.js";import"./index-D59fZpcX.js";import"./index-DlqHiufR.js";import"./navigation-down-arrow-gws4-sx1.js";import"./navigation-right-arrow-BJmMXsZ_.js";import"./navigation-right-arrow-AZTMAkte.js";import"./useCurrentTheme-DWXrF5d1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DQOK-fLL.js";import"./debounce-D7W5PopO.js";import"./index-DbwjuCtL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
