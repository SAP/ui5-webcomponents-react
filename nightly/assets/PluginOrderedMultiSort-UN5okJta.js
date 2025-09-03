import{j as e}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as i}from"./index-DO7eBN2z.js";import{I as a,F as m}from"./CommandsAndQueries-5z2JhX-x.js";import{M as s,C as p}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import{C as l}from"./ControlsWithNote-UCIdrd3z.js";import"./copy-DM6AHN8T.js";import{e as o}from"./AnalyticalTableHooks.stories-CIgjSOik.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./index-C7Xj3GeW.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqJrgc-x.js";import"./delete-CUXM36Gm.js";import"./settings-g1NOXTFX.js";import"./NoData-BfSz2Jb4.js";import"./IllustratedMessage-Bo2-9Wgw.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1TM8C73E.js";import"./index-DXcpIB8q.js";import"./slim-arrow-down-lM8f-Uz6.js";import"./Input-D5iz8gVF.js";import"./ResponsivePopoverCommon.css-BfjHIntt.js";import"./ValueStateMessage.css-BrUNqWph.js";import"./Suggestions.css-C4ig1fd6.js";import"./ListBoxItemGroupTemplate-DxlwIkTb.js";import"./ComboBoxItemGroup-zSoS-Ov_.js";import"./ListItemBaseTemplate-CAugTCWT.js";import"./Token-D49MTHA_.js";import"./ScrollEnablement-DMp5qR-R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6LGiTVa.js";import"./ToggleButton-BLZC0g81.js";import"./SuggestionItem-92M1Ikia.js";import"./index-Br4cY6Qw.js";import"./Option-DI25J3kC.js";import"./index-BbuGn4PW.js";import"./SegmentedButton-FzhhcgQ0.js";import"./index-BWFbO-Lg.js";import"./Select-Iz40cZG_.js";import"./InvisibleMessage-CU9-lL93.js";import"./slim-arrow-down-2towEIQe.js";import"./useIsRTL-C1trBNR6.js";import"./index-BX3qDpDF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CawSky8K.js";import"./group-2-dpD3se9c.js";import"./sort-descending-Dmsih093.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGtZMLio.js";import"./utils-BhcSyhLQ.js";import"./index-DFx_hLRP.js";import"./index-BGOVEiSw.js";import"./index-ChMRRx5d.js";import"./navigation-down-arrow-BiDKnIlg.js";import"./navigation-right-arrow-AjROisR1.js";import"./navigation-right-arrow-Cn7J3EaV.js";import"./useCurrentTheme-CfVTJDKN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CgTw5VBS.js";import"./debounce-D7W5PopO.js";import"./index-DvTGRhis.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
