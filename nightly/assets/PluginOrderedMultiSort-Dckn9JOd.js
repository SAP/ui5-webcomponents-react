import{j as e}from"./iframe-CpjYl_X5.js";import{useMDXComponents as i}from"./index-33t6PBxs.js";import{I as a,F as m}from"./CommandsAndQueries-EZVtGsJe.js";import{M as s,C as p}from"./blocks-BkWlBCqX.js";import"./Tag-DAYBa8yS.js";import"./index-joCwOwY7.js";import{C as l}from"./ControlsWithNote-CJxz3cS3.js";import"./copy-BKpc5Gew.js";import{e as o}from"./AnalyticalTableHooks.stories-BVkvj-yB.js";import"./preload-helper-Dp1pzeXC.js";import"./index--ofYB3gh.js";import"./index-DdElBtDf.js";import"./index-Us1w7EKB.js";import"./Link-D3b32oQu.js";import"./addCustomCSSWithScoping-DT7KX0jQ.js";import"./index-DkiFqVtv.js";import"./index-n0koIvnW.js";import"./index-CNY9O4wi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCOGUGQL.js";import"./index-C2_ggH5f.js";import"./information-DIh11mSj.js";import"./sys-enter-2-Dq_jhMR8.js";import"./alert-D8p6gt1X.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHG2MOGz.js";import"./delete-YCb_ChtI.js";import"./settings-QgbbNJUk.js";import"./NoData-dKh86SfT.js";import"./IllustratedMessage-BcqFKz4Y.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-PvZhdoyR.js";import"./index-CgAwMvUW.js";import"./slim-arrow-down-DwQAWsTD.js";import"./Input-BNo-hj-C.js";import"./ResponsivePopoverCommon.css-DwHdHtV9.js";import"./ValueStateMessage.css-BUAJFQ99.js";import"./Suggestions.css-CwebfgRb.js";import"./ListBoxItemGroupTemplate-CxJiZt19.js";import"./ComboBoxItemGroup-R0TCP6K_.js";import"./ListItemBaseTemplate-Bdi5-fvq.js";import"./Token-Xwtg_im0.js";import"./ScrollEnablement-wFgsvqM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhhUzpAY.js";import"./ToggleButton-3rZtTX4u.js";import"./SuggestionItem-BsQJnmhm.js";import"./index-ByrHtGCZ.js";import"./Option-DZvbArRC.js";import"./index-DRMZdDM7.js";import"./SegmentedButton-53xfTt5w.js";import"./index-BDUQZ20D.js";import"./Select-BbN0n5sp.js";import"./InvisibleMessage-BskeonYB.js";import"./slim-arrow-down-BdbjdxUH.js";import"./useIsRTL-BtNL1jcq.js";import"./index-BNinvQDt.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nyIuTl9A.js";import"./group-2-C1vnwRBA.js";import"./sort-descending-CAIFi3VI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-vfvgrfsh.js";import"./utils-B1Rb9HQ6.js";import"./index-D4Q9QnEI.js";import"./index-OZ--zbFt.js";import"./index-BV44GF9N.js";import"./navigation-down-arrow-CJEHhyr3.js";import"./navigation-right-arrow-bUpwQK8M.js";import"./navigation-right-arrow-D6PMGkoJ.js";import"./useCurrentTheme-POWYwZLU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BF1MtxJr.js";import"./debounce-D7W5PopO.js";import"./index-DRmcpn9V.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
