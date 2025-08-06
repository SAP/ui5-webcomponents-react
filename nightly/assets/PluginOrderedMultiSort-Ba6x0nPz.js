import{j as e}from"./iframe-yjMKSaW2.js";import{useMDXComponents as i}from"./index-DX8fpWzX.js";import{I as a,F as m}from"./CommandsAndQueries-ClO5_6SR.js";import{M as s,C as p}from"./blocks-qO1HNk-b.js";import"./Tag-BxGYemBH.js";import"./index-EVdkIx1d.js";import{C as l}from"./ControlsWithNote-wKta4bY1.js";import"./copy-Bx6gkJby.js";import{e as o}from"./AnalyticalTableHooks.stories-CG1Ne1jJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./index-D2oaGTxE.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cwkh_r41.js";import"./delete-BtuN8EqN.js";import"./settings-Db3_TAtG.js";import"./NoData-D0tuWWQx.js";import"./IllustratedMessage-L768Lgnu.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-7a9cOrxB.js";import"./index-B3sgNhVy.js";import"./slim-arrow-down-C3a-usnI.js";import"./Input-CTJTUFFu.js";import"./ResponsivePopoverCommon.css-DxFeQbMc.js";import"./ValueStateMessage.css-CA2fAuCP.js";import"./Suggestions.css-Ck69pShO.js";import"./ListBoxItemGroupTemplate-xaDsElnd.js";import"./ComboBoxItemGroup-BrQqIK5D.js";import"./ListItemBaseTemplate-CFF0kaEn.js";import"./Token-CLQwip2z.js";import"./ScrollEnablement-WnQFRWHc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bt6MekvC.js";import"./ToggleButton-C0wnat4A.js";import"./SuggestionItem-DfB634lH.js";import"./index-uRmgFaxR.js";import"./Option-CrJKrJ5f.js";import"./index-CaZpvffh.js";import"./SegmentedButton-37GVceHj.js";import"./index-DRSoUGaL.js";import"./Select-B7f5ZkNn.js";import"./InvisibleMessage-CpX70GFw.js";import"./slim-arrow-down-Brvh4Ud1.js";import"./useIsRTL-MY_nF6I_.js";import"./index-BymYChZy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-h9FGD-0R.js";import"./group-2-DcalmJYS.js";import"./sort-descending-BYf0SDBC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs91-3HF.js";import"./utils-DOHC3Pr_.js";import"./index-CuxALFU6.js";import"./index-CElhn7R2.js";import"./index-DvKVlSVq.js";import"./navigation-down-arrow-BY4lPGb9.js";import"./navigation-right-arrow-DnvMFDg-.js";import"./navigation-right-arrow-DlglppO6.js";import"./useCurrentTheme-QOXIU8ro.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DTbfOaKr.js";import"./debounce-D7W5PopO.js";import"./index-BVFfVLn8.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
