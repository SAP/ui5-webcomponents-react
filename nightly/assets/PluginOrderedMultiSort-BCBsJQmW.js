import{j as e}from"./iframe-Diowpvbi.js";import{useMDXComponents as i}from"./index-BQd2Q0Z3.js";import{I as a,F as m}from"./CommandsAndQueries-COPBvCoL.js";import{M as s,C as p}from"./blocks-CoZBpVTI.js";import"./Tag-B0clkLGt.js";import"./index-D9YlVxTm.js";import{C as l}from"./ControlsWithNote-DRcGWIdC.js";import"./copy-Cax_mWEs.js";import{e as o}from"./AnalyticalTableHooks.stories-CpkuYKtY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-1wgmtjtJ.js";import"./index-D0g3RjgB.js";import"./index-CQR2h6vO.js";import"./Link-h6HOkbi0.js";import"./addCustomCSSWithScoping-BGpjw9gY.js";import"./index-B-dBAONH.js";import"./index-Ds6FKbjF.js";import"./index-xypPraOX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNWGtsu7.js";import"./index-B-BwEr1u.js";import"./information-CDgRW97e.js";import"./sys-enter-2-DY02qdHz.js";import"./alert-BaFyoXY8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhYPycqA.js";import"./delete-D82QIl2_.js";import"./settings-D_pqPZRA.js";import"./NoData-js4-UjTg.js";import"./IllustratedMessage-DKMK9OFc.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CqyqbA4U.js";import"./index-D2yzdfYs.js";import"./slim-arrow-down-BnLxEjYc.js";import"./Input-CkOt0B6i.js";import"./ResponsivePopoverCommon.css-CASz0Dqp.js";import"./ValueStateMessage.css-Be7X1jMy.js";import"./Suggestions.css-DfleazkQ.js";import"./ListBoxItemGroupTemplate-Btw2hM9T.js";import"./ComboBoxItemGroup-DH1DiXqT.js";import"./ListItemBaseTemplate-DEOdvJQ9.js";import"./Token-CmrkdheL.js";import"./ScrollEnablement-zRS1AfRM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYhRCZSB.js";import"./ToggleButton-B5Eorhfv.js";import"./SuggestionItem-D8-nCGsC.js";import"./index-CpuXefiQ.js";import"./Option-DiTkpXiW.js";import"./index-Bpmgkvwx.js";import"./SegmentedButton-GLgVA5pX.js";import"./index-By75EMBa.js";import"./Select-DkjN3zvd.js";import"./InvisibleMessage-BqM01yov.js";import"./slim-arrow-down-CAPvKWjl.js";import"./useIsRTL-BHW67YEf.js";import"./index-jY33nSV8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JK8fml35.js";import"./group-2-BfuxawN7.js";import"./sort-descending-DDuzuuMf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMgvpgkt.js";import"./utils-5Skicxr4.js";import"./index-qMRwd3oc.js";import"./index-BNwZ6o10.js";import"./index-kMsV4LM3.js";import"./navigation-down-arrow-DnHUXefS.js";import"./navigation-right-arrow-DfguE_8X.js";import"./navigation-right-arrow-BKGMW_2E.js";import"./useCurrentTheme-OdwJVOQn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bi3yTViv.js";import"./debounce-D7W5PopO.js";import"./index-nZv_fEDZ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
