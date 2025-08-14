import{j as e}from"./iframe-ecJTvqfE.js";import{useMDXComponents as i}from"./index-DboZxcYT.js";import{I as a,F as m}from"./CommandsAndQueries-BpdU-ZQD.js";import{M as s,C as p}from"./blocks-qsqxfOd3.js";import"./Tag-ZKnVgoL_.js";import"./index-BC9DFcam.js";import{C as l}from"./ControlsWithNote--sJtiopn.js";import"./copy-BgNjKRC7.js";import{e as o}from"./AnalyticalTableHooks.stories-q6W53hwz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";import"./index-F3eIUiL2.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dz5o_lOS.js";import"./delete-CYgRSVHH.js";import"./settings-DT35qf1y.js";import"./NoData-DrA-ocSn.js";import"./IllustratedMessage-C5H2YJ5P.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CcPkgeQz.js";import"./index-CBOwlIv-.js";import"./slim-arrow-down-3aK9z7Cc.js";import"./Input-DpcAuAe8.js";import"./ResponsivePopoverCommon.css-Cw_YH4h8.js";import"./ValueStateMessage.css-DDOE9-R1.js";import"./Suggestions.css-BnKo4JPe.js";import"./ListBoxItemGroupTemplate-Dc0Uuht2.js";import"./ComboBoxItemGroup-BlgBGSlE.js";import"./ListItemBaseTemplate-DK6hWDmp.js";import"./Token-D-orksP7.js";import"./ScrollEnablement-DP_2c2Zn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nzNqCNC_.js";import"./ToggleButton-BnrlQMLS.js";import"./SuggestionItem-DxZuFNrZ.js";import"./index-CMRV29w9.js";import"./Option-BE8Mkbt2.js";import"./index-DjvUtexN.js";import"./SegmentedButton-BIOttP1C.js";import"./index-DgFNQXjv.js";import"./Select-BzSJCrjN.js";import"./InvisibleMessage-B5otcPql.js";import"./slim-arrow-down-DonzRt-h.js";import"./useIsRTL-BxnTzuIz.js";import"./index-DEUO6Flh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eydisheW.js";import"./group-2-BdfQMgp4.js";import"./sort-descending-C_LOfBSY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-78hG4qZ8.js";import"./utils-Ds-PVOiu.js";import"./index-DeZPoYAD.js";import"./index-q7RkmIen.js";import"./index-CKSz6s-e.js";import"./navigation-down-arrow-CH6pOINU.js";import"./navigation-right-arrow-D0LxkRmU.js";import"./navigation-right-arrow-Dr63df2n.js";import"./useCurrentTheme-DEFvZlE4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C8Kn9EZd.js";import"./debounce-D7W5PopO.js";import"./index-DmMTzdWz.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
