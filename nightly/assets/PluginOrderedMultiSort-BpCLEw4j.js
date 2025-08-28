import{j as e}from"./iframe-ir6pYnmz.js";import{useMDXComponents as i}from"./index-41o0Td7A.js";import{I as a,F as m}from"./CommandsAndQueries-b6zt1eWd.js";import{M as s,C as p}from"./blocks-D_tGmZuN.js";import"./Tag-DRGeWEus.js";import"./index-e4AcpL9G.js";import{C as l}from"./ControlsWithNote-m8JvSVba.js";import"./copy-BlUsduAp.js";import{e as o}from"./AnalyticalTableHooks.stories-BgNDbnYG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./index-BbtZuvgL.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwMJwtSz.js";import"./delete-CmyvenUA.js";import"./settings-Bl6bQc6H.js";import"./NoData-DxhmC_91.js";import"./IllustratedMessage-BTBpKBnW.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-sllTisPT.js";import"./index-Chn6LRAy.js";import"./slim-arrow-down-DIhPSUlE.js";import"./Input-CT2v4mLF.js";import"./ResponsivePopoverCommon.css-CAhax-LW.js";import"./ValueStateMessage.css-DXEXnL2N.js";import"./Suggestions.css-DVkCnc2y.js";import"./ListBoxItemGroupTemplate-BxUFdl0w.js";import"./ComboBoxItemGroup-CdScSe_V.js";import"./ListItemBaseTemplate-GBw0Nk1X.js";import"./Token-B1N_8NmE.js";import"./ScrollEnablement-DaGY4Jm-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CDRG7U85.js";import"./ToggleButton-f5GCJkmp.js";import"./SuggestionItem-CuzhU48j.js";import"./index-DZ8NIWLE.js";import"./Option-CT-dyvBc.js";import"./index-aBA0PLh-.js";import"./SegmentedButton-C6EyhWUa.js";import"./index-CXc2Eu8C.js";import"./Select-De9RNiJH.js";import"./InvisibleMessage-q2TaioBA.js";import"./slim-arrow-down-DtlJr3sY.js";import"./useIsRTL-Da2zSY1x.js";import"./index-DAsbl867.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPo0n3ee.js";import"./group-2-MQdYi-0x.js";import"./sort-descending-D2xxVNEk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BvZ0UPF0.js";import"./utils-D-cGwZG0.js";import"./index-hBVsNMVz.js";import"./index-C1scF0QK.js";import"./index-aiDUSRvd.js";import"./navigation-down-arrow-Cwg074OW.js";import"./navigation-right-arrow-IPve_ban.js";import"./navigation-right-arrow-vWKMw0EP.js";import"./useCurrentTheme-DTjaKwLS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-WEKLa-kK.js";import"./debounce-D7W5PopO.js";import"./index-1jK9MjSz.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
