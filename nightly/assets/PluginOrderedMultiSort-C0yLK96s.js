import{j as e}from"./iframe-CG2rGjbc.js";import{useMDXComponents as i}from"./index-DS69H-n6.js";import{I as a,F as m}from"./CommandsAndQueries-DskZpT92.js";import{M as s,C as p}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import{C as l}from"./ControlsWithNote-BFQM5fX0.js";import"./copy-Cj_PeOWN.js";import{e as o}from"./AnalyticalTableHooks.stories-D-ri1bAM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./index-vBa65tZZ.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BekTqDkh.js";import"./delete-CPTRq9yh.js";import"./settings-DWEJ_gda.js";import"./NoData-OzuE5q8j.js";import"./IllustratedMessage-fIXnbhow.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BFsxy39e.js";import"./index-DWchyRkq.js";import"./slim-arrow-down-B6ZGeZyP.js";import"./Input-D_cunrq3.js";import"./ResponsivePopoverCommon.css-ZxvNyTGX.js";import"./ValueStateMessage.css-DQP0hkeA.js";import"./Suggestions.css-BEa1e1bh.js";import"./ListBoxItemGroupTemplate-D1PADeY5.js";import"./ComboBoxItemGroup-B6S_XDKB.js";import"./ListItemBaseTemplate-DKtp7oXq.js";import"./Token-DnsYDL6G.js";import"./ScrollEnablement-D96l-16O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYmen0Jk.js";import"./ToggleButton-B6A9SDf5.js";import"./SuggestionItem-DH8pT6T8.js";import"./index-Oh9WLt-q.js";import"./Option-DXBBjhZz.js";import"./index-BsAvd2zC.js";import"./SegmentedButton-CBfx5wl-.js";import"./index-JBBiy_eP.js";import"./Select-DWo_Lub7.js";import"./InvisibleMessage-C2yLfqUK.js";import"./slim-arrow-down-DmJvDhwU.js";import"./useIsRTL-CMFeNktt.js";import"./index-4G4pslYn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DHDOumVO.js";import"./group-2-CJMBKFkN.js";import"./sort-descending-DArodGTD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Xwbj5fV9.js";import"./utils-fHUo6XIf.js";import"./index-aCo9U2xx.js";import"./index-zroShj9r.js";import"./index-2K0DQ2LF.js";import"./navigation-down-arrow-NWSQUDrt.js";import"./navigation-right-arrow-rBI3rFQp.js";import"./navigation-right-arrow-tevQ1gbb.js";import"./useCurrentTheme-DRE7X6Nh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-1_NbfYEK.js";import"./debounce-D7W5PopO.js";import"./index-Lf5lWW3e.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
