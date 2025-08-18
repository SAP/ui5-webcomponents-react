import{j as e}from"./iframe-BZQDLaud.js";import{useMDXComponents as i}from"./index-C_GG0ZGD.js";import{I as a,F as m}from"./CommandsAndQueries-DWGWAVRo.js";import{M as s,C as p}from"./blocks-Cx9bcs1C.js";import"./Tag-D-gB3YeX.js";import"./index-DJN5YABY.js";import{C as l}from"./ControlsWithNote-D3crpagW.js";import"./copy-BROMiSoG.js";import{e as o}from"./AnalyticalTableHooks.stories-wBfZaxgs.js";import"./preload-helper-Ct5FWWRu.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./index-CKSa3A9-.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SnsQcBha.js";import"./delete-CLfbLOEn.js";import"./settings-B-F6TIjI.js";import"./NoData-CYc99N5U.js";import"./IllustratedMessage-VhUvlZ45.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C1Iw_W8O.js";import"./index-Cb6cMKiE.js";import"./slim-arrow-down-CLpBmF95.js";import"./Input-DWSj0jbp.js";import"./ResponsivePopoverCommon.css-DjqZq9sD.js";import"./ValueStateMessage.css-D3ij8aoW.js";import"./Suggestions.css-DSv3s41Y.js";import"./ListBoxItemGroupTemplate-B_tg8R6u.js";import"./ComboBoxItemGroup-Deq_nHvQ.js";import"./ListItemBaseTemplate-Bl0LNXUa.js";import"./Token-Bd3fmoPc.js";import"./ScrollEnablement-r9acVsK1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQOO1Zsr.js";import"./ToggleButton-b3oBwZZq.js";import"./SuggestionItem-gl78ccMD.js";import"./index-Dpu3p2WF.js";import"./Option-BivDrOBz.js";import"./index-C8Fyun0P.js";import"./SegmentedButton-BVtCBJOm.js";import"./index-CkFk2rvY.js";import"./Select-CncfGb0r.js";import"./InvisibleMessage-BonTwXKe.js";import"./slim-arrow-down-XixAgIwt.js";import"./useIsRTL-DZvFLTA0.js";import"./index-_38F1i9k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Z_kurjTQ.js";import"./group-2-RO-D6umw.js";import"./sort-descending-_g6ChRWa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVI9GcFP.js";import"./utils-pGJlkZlt.js";import"./index-BamKFxC-.js";import"./index-ClooUb3H.js";import"./index-CVSnJKQU.js";import"./navigation-down-arrow-DdNFu9fj.js";import"./navigation-right-arrow-BiRK2Ki_.js";import"./navigation-right-arrow-3Dltep9_.js";import"./useCurrentTheme-5r1dq2J6.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BJyAe1mR.js";import"./debounce-D7W5PopO.js";import"./index-DnwX6h_J.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
