import{j as e}from"./iframe-7wbn2r8t.js";import{useMDXComponents as i}from"./index-9iabKYe6.js";import{I as m,F as a}from"./CommandsAndQueries-ByqqJAkO.js";import{M as s,C as p}from"./blocks-DhPDsuAg.js";import"./Tag-B4Xu1fg_.js";import"./index-BbDQ_pma.js";import{C as l}from"./ControlsWithNote-CBKNK0_M.js";import"./copy-BfB9wT2Y.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bdiu9tfa.js";import"./preload-helper-D9Z9MdNV.js";import"./index--oRJYcmq.js";import"./index-s9oyD4rV.js";import"./index-BXziIIti.js";import"./Link-CMqhXbfj.js";import"./addCustomCSSWithScoping-DOSmtfkU.js";import"./index-BcN9ZXV0.js";import"./index-B507ER4a.js";import"./index-DZM58baw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_u8Wshbe.js";import"./index-C5gTJ--F.js";import"./information-C3oesKbG.js";import"./sys-enter-2-5KLli2cX.js";import"./alert-BzwIc2o-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BnpF3OjW.js";import"./delete-Ctx4N0z9.js";import"./settings-4HzKKwXX.js";import"./NoData-BGxQDSSr.js";import"./IllustratedMessage-BveZRVBp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-zGaMdUH3.js";import"./index-CiCpUwzE.js";import"./slim-arrow-down-C49SaQEq.js";import"./Input-Sgf07TzX.js";import"./ResponsivePopoverCommon.css-C1IHs2uD.js";import"./ValueStateMessage.css-CaopdH9_.js";import"./Suggestions.css-DMTVnUhn.js";import"./ListBoxItemGroupTemplate-Cb4Xv0to.js";import"./ComboBoxItemGroup-BWtkqgMg.js";import"./ListItemBaseTemplate-D6zjfr9k.js";import"./Token-Cu1MDCvr.js";import"./ScrollEnablement-kUlDPclg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrLRAdo-.js";import"./ToggleButton-BWZvQxgb.js";import"./SuggestionItem-CQkQpe1M.js";import"./index-KzyioWg5.js";import"./Option-De8jxf-d.js";import"./index-CpHbzBAu.js";import"./SegmentedButton-DKw5tI_q.js";import"./index-B-j5vbZe.js";import"./Select-BNT7lrvG.js";import"./InvisibleMessage-TncjdQHo.js";import"./slim-arrow-down-OAr_tlQh.js";import"./useIsRTL-nMUuowmY.js";import"./index-DSDAeY17.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BukLYmJB.js";import"./group-2-CHK1-mKL.js";import"./sort-descending-ChAbIeqL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gSj6aK_G.js";import"./utils-BN-TBOgu.js";import"./index-DiRW6kuR.js";import"./index-BATSsTSG.js";import"./index-CYxXsDl5.js";import"./navigation-down-arrow-K_Q8K4Ef.js";import"./navigation-right-arrow-DESaq310.js";import"./navigation-right-arrow-BqhA1WvG.js";import"./useCurrentTheme-B4pThhTq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B2zVBKfY.js";import"./debounce-D7W5PopO.js";import"./paper-plane-Ci72_7Om.js";import"./index-ChzhF-e0.js";import"./less-CTlI8kUp.js";import"./index-BW3VTEXK.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
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
`,e.jsx(a,{})]})}function Ee(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ee as default};
