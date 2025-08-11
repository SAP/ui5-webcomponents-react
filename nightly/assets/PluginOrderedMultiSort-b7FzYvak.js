import{j as e}from"./iframe-BCRKbB-F.js";import{useMDXComponents as i}from"./index-BX-rGI6y.js";import{I as a,F as m}from"./CommandsAndQueries-B-6PqVJi.js";import{M as s,C as p}from"./blocks-7Z_E6jI9.js";import"./Tag-DS_H74jk.js";import"./index-D-3HueK4.js";import{C as l}from"./ControlsWithNote-CZlmxkvK.js";import"./copy-B5cEq6fF.js";import{e as o}from"./AnalyticalTableHooks.stories-C9OZA-p9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./index-C9k5hi-S.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-YwLF6LD4.js";import"./delete-Ld8CENCt.js";import"./settings-FT89pEZG.js";import"./NoData-DtHLQikX.js";import"./IllustratedMessage-VoUezW4G.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-mfRED6x5.js";import"./index-BpTW-c5S.js";import"./slim-arrow-down-BPFD1Mj1.js";import"./Input-CmmkFLaI.js";import"./ResponsivePopoverCommon.css-BpeopXwv.js";import"./ValueStateMessage.css-BJzDtIZE.js";import"./Suggestions.css-sLFaTK7q.js";import"./ListBoxItemGroupTemplate-DWt8WMfz.js";import"./ComboBoxItemGroup-LITK_YU1.js";import"./ListItemBaseTemplate-BOulBfG3.js";import"./Token-B8NvFI2b.js";import"./ScrollEnablement-CeBEvB5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-TvAAd95E.js";import"./ToggleButton-D6RX6jPt.js";import"./SuggestionItem-D6ESs6vy.js";import"./index-CqLDV1BV.js";import"./Option-BufIsNaK.js";import"./index-BCzW4i_i.js";import"./SegmentedButton-B0SB0VvP.js";import"./index-mpfJtdUF.js";import"./Select-BPSwgIYJ.js";import"./InvisibleMessage-BXR6Nu4L.js";import"./slim-arrow-down-COohbeSu.js";import"./useIsRTL-CHXXP87C.js";import"./index-CatAJS7G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DGgGSPMs.js";import"./group-2-3_abcVoF.js";import"./sort-descending-B0_QNBzC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-B65Hxqqj.js";import"./utils-DGVyR8av.js";import"./index-BHZNi0Sj.js";import"./index-BMlnEbTy.js";import"./index-Kc0S7rJM.js";import"./navigation-down-arrow-BKM0aIaY.js";import"./navigation-right-arrow-BQ8D2hLB.js";import"./navigation-right-arrow-D8MlM4bu.js";import"./useCurrentTheme-SWieicam.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BduD6r77.js";import"./debounce-D7W5PopO.js";import"./index-CvdpSJTy.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
