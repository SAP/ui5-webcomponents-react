import{j as e}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as i}from"./index-CniPTHSz.js";import{I as a,F as m}from"./CommandsAndQueries-CtCNZgsU.js";import{M as s,C as p}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import{C as l}from"./ControlsWithNote-BMy8mcwg.js";import"./copy-BNU1F6ls.js";import{e as o}from"./AnalyticalTableHooks.stories-BVqhJ6mi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index--Vew3hXz.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DD8g5bnM.js";import"./delete-D6-35YwG.js";import"./settings-DBoXREAT.js";import"./NoData-gZ1fjVVl.js";import"./IllustratedMessage-CFTGdX3g.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DGOgRaLa.js";import"./index-Ce-nCryE.js";import"./slim-arrow-down-BTcmIAZo.js";import"./Input-nQkDkpMo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Suggestions.css-ByBItAub.js";import"./ListBoxItemGroupTemplate-CDWy6Nub.js";import"./ComboBoxItemGroup-CCYywqPo.js";import"./ListItemBaseTemplate-DRr4zk5s.js";import"./Token-BwRrxMD7.js";import"./ScrollEnablement-BN7kIMtj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cIFVz4xB.js";import"./ToggleButton-chqvRgB_.js";import"./SuggestionItem-D841cpg4.js";import"./index-DfNHlgXD.js";import"./Option-BkfkZtHI.js";import"./index-Byascgrb.js";import"./SegmentedButton-DJu9oJAG.js";import"./index-BRkEXvtH.js";import"./Select-BBPMsUok.js";import"./InvisibleMessage-D-XldCbn.js";import"./slim-arrow-down-R4lWeZmU.js";import"./useIsRTL-BMHeZ9la.js";import"./index-r-PAOf5B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCyfWB89.js";import"./group-2-FFZDiPuh.js";import"./sort-descending--GyeITCg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgN_-xrJ.js";import"./utils-NBX3VAhS.js";import"./index-D-zHAvS6.js";import"./index-Bq4yDwlr.js";import"./index-Cz2QpzuG.js";import"./navigation-down-arrow-B-0Rh6AW.js";import"./navigation-right-arrow-BhFnHVa_.js";import"./navigation-right-arrow-JqBI6C2o.js";import"./useCurrentTheme-CVug1619.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CxpTF53y.js";import"./debounce-D7W5PopO.js";import"./index-C8rUm7Lp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
