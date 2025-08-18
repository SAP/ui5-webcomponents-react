import{j as e}from"./iframe-DzQ21Lns.js";import{useMDXComponents as i}from"./index-BP8jxV1P.js";import{I as a,F as m}from"./CommandsAndQueries-BWveXsvx.js";import{M as s,C as p}from"./blocks-DR2wB9AJ.js";import"./Tag-CfB46NJC.js";import"./index-CNaVfoQo.js";import{C as l}from"./ControlsWithNote-DxTvO-sr.js";import"./copy-BGzgj4Bd.js";import{e as o}from"./AnalyticalTableHooks.stories-CVyIiUMF.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";import"./index-CkGGqXom.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0r_9vZG.js";import"./delete-CTdMsL2W.js";import"./settings-CSLxx2dL.js";import"./NoData-6dIzoSes.js";import"./IllustratedMessage-B3UtCfR0.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dp7K6fby.js";import"./index-DsT2Cblh.js";import"./slim-arrow-down-BcVCCvLV.js";import"./Input-BBc0FPcy.js";import"./ResponsivePopoverCommon.css-BEW3XFGK.js";import"./ValueStateMessage.css-CAFhnqqF.js";import"./Suggestions.css-oidNGW3x.js";import"./ListBoxItemGroupTemplate-BaUuBQRM.js";import"./ComboBoxItemGroup-Bx1kITcG.js";import"./ListItemBaseTemplate-1GHgiBYL.js";import"./Token-B6x8t07X.js";import"./ScrollEnablement-EY3VdHjS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yc3QYJD2.js";import"./ToggleButton-VpguQDbL.js";import"./SuggestionItem-B83CxbOY.js";import"./index-CljpPXGO.js";import"./Option-OQFsvput.js";import"./index-DlxRvD7h.js";import"./SegmentedButton-DMI45c8b.js";import"./index-WjOtb6GN.js";import"./Select-D3cbLmw6.js";import"./InvisibleMessage-B2KrkcqD.js";import"./slim-arrow-down-Dh2WkWwy.js";import"./useIsRTL-DC-py9jD.js";import"./index-y47N6ek3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyHUrJqV.js";import"./group-2-OwMh3Ots.js";import"./sort-descending-YVjneWiS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DM-3FMRs.js";import"./utils-DdYpjhKE.js";import"./index-CFL_93ON.js";import"./index-DnuhIUKQ.js";import"./index-BhMasU6x.js";import"./navigation-down-arrow-DJSgxJP7.js";import"./navigation-right-arrow-BJKIkgSM.js";import"./navigation-right-arrow-CXhnY_Ll.js";import"./useCurrentTheme-TK9BLj79.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CH4JwDSd.js";import"./debounce-D7W5PopO.js";import"./index-CpMdG5Z8.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
