import{j as e}from"./iframe-C6IJVCey.js";import{useMDXComponents as i}from"./index-Ds5KjzB0.js";import{I as a,F as m}from"./CommandsAndQueries-Bd9H39B6.js";import{M as s,C as p}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import{C as l}from"./ControlsWithNote-BtPDnNM4.js";import"./copy-CbqLCcHM.js";import{e as o}from"./AnalyticalTableHooks.stories-Dx2NT3Dj.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-DmVW3kBm.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Zhit5amx.js";import"./delete-aHHOuuds.js";import"./settings-CaUhFBfT.js";import"./NoData-JQj0GdaH.js";import"./IllustratedMessage-BS85q4Yt.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6RVTiiT.js";import"./index-qA8_yrjn.js";import"./slim-arrow-down-CwgCCUKm.js";import"./Input-x1q94poq.js";import"./ResponsivePopoverCommon.css-BVZ5OAV_.js";import"./ValueStateMessage.css-DPjopeIN.js";import"./Suggestions.css-CiUwfxD-.js";import"./ListBoxItemGroupTemplate-BIko6feT.js";import"./ComboBoxItemGroup-DPpPogP1.js";import"./ListItemBaseTemplate-BVssUnLn.js";import"./Token-ChcB-5Ws.js";import"./ScrollEnablement-DfCxcIin.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gdtXb5F2.js";import"./ToggleButton-DWOUuGjj.js";import"./SuggestionItem-CUDCE1RV.js";import"./index-CpJZBQzM.js";import"./Option-BeuU2j7g.js";import"./index-PtBujVy-.js";import"./SegmentedButton-DhZUEkWh.js";import"./index-DxPYvRTC.js";import"./Select-C7aDvX2p.js";import"./InvisibleMessage-BZfjRnJZ.js";import"./slim-arrow-down-BAej_MsU.js";import"./useIsRTL-LYqCZWtn.js";import"./index-D_T8LUzH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhfoG3wP.js";import"./group-2-TZSiJNJJ.js";import"./sort-descending-BaG4v9mS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-alTfv3-p.js";import"./utils-qSGpanwl.js";import"./index-DoVpOxB3.js";import"./index-62xBBkuk.js";import"./index-Bejl1epP.js";import"./navigation-down-arrow-DUB_9yJR.js";import"./navigation-right-arrow-D2MkXcV7.js";import"./navigation-right-arrow-CiZi-qcJ.js";import"./useCurrentTheme-CkuDZfer.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFSubTk6.js";import"./debounce-D7W5PopO.js";import"./index-DuV8laoQ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
