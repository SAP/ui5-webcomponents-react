import{j as e}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as i}from"./index-2SvYRCCw.js";import{I as a,F as m}from"./CommandsAndQueries-B0E3P6p2.js";import{M as s,C as p}from"./blocks-CrIALgP8.js";import"./Tag-66qvcRmY.js";import"./index-mxAgSE5r.js";import{C as l}from"./ControlsWithNote-YXdYNE8U.js";import"./copy-DbyPBOXI.js";import{e as o}from"./AnalyticalTableHooks.stories-ovJatTLU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./index-qyBhFjGo.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNmLY4aq.js";import"./delete-CoWW_YJb.js";import"./settings-Dl2hvIY7.js";import"./NoData-DhrCvk48.js";import"./IllustratedMessage-BZ2f0wbu.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D3P6LcMm.js";import"./index-Gthds3gG.js";import"./slim-arrow-down-BvKl0HX1.js";import"./Input-K1MmYIzW.js";import"./ResponsivePopoverCommon.css-C9Zu8eKY.js";import"./ValueStateMessage.css-0fCoJ9a0.js";import"./Suggestions.css-DU-Tiy8t.js";import"./ListBoxItemGroupTemplate-Byd0blKb.js";import"./ComboBoxItemGroup-DhWcWs45.js";import"./ListItemBaseTemplate-B9sZlVj4.js";import"./Token-DOjTT1Xq.js";import"./ScrollEnablement-B5ISBZej.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-GxkPSEye.js";import"./ToggleButton-qSP1q9mv.js";import"./SuggestionItem-C6_chZGf.js";import"./index-DpGNDeqz.js";import"./Option-D5R66SZP.js";import"./index-BeaqvZoz.js";import"./SegmentedButton-YHRsBGL8.js";import"./index-Bo-zVT_R.js";import"./Select-C6uF65be.js";import"./InvisibleMessage-DLe-kdrD.js";import"./slim-arrow-down-CtYyvMXa.js";import"./useIsRTL-DI3zrK8m.js";import"./index-CTy0VkN3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKP6ESEn.js";import"./group-2-Bewtjb3F.js";import"./sort-descending-BpBAIAuX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-BFCEptBt.js";import"./utils-rXmyLz49.js";import"./index-Bel1DcL3.js";import"./index-BpCltbmx.js";import"./index-dDjbOQ7r.js";import"./navigation-down-arrow-Cyn0Mokn.js";import"./navigation-right-arrow-DTdNlNbb.js";import"./navigation-right-arrow-B_RLXoJn.js";import"./useCurrentTheme-BWqNH_bL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CUMn0SnR.js";import"./debounce-D7W5PopO.js";import"./index-dddZC_Ni.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
