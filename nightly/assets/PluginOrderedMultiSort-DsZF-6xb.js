import{j as e}from"./iframe-BxEu-xci.js";import{useMDXComponents as i}from"./index-DIpNHUFd.js";import{I as a,F as m}from"./CommandsAndQueries-BL1k5Lab.js";import{M as s,C as p}from"./blocks-DPfoGqoC.js";import"./Tag-BNi2hR4G.js";import"./index-BorC4J59.js";import{C as l}from"./ControlsWithNote-CRd9VQnb.js";import"./copy-byxAjSE6.js";import{e as o}from"./AnalyticalTableHooks.stories-HWmY7zip.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CFj32LYi.js";import"./index-CL8FjSwM.js";import"./index-CnHUdtnF.js";import"./Link-CkCyRMbi.js";import"./addCustomCSSWithScoping-C3RRJQPN.js";import"./index-DSeLD822.js";import"./index-Dzht26Rp.js";import"./index-BV37wPbr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dYhLm2AL.js";import"./index-zhC6_est.js";import"./information-BKw42Lxc.js";import"./sys-enter-2-BkwngAtf.js";import"./alert-DQ3naR-W.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BH93_Lsj.js";import"./delete-CYGtkaxN.js";import"./settings-eZTEBWqi.js";import"./NoData-CPb97MZw.js";import"./IllustratedMessage-Cxzzm7cA.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CrDGa_wI.js";import"./index-zRLag29-.js";import"./slim-arrow-down-UD2Q1IDE.js";import"./Input-CgWZ-qAo.js";import"./ResponsivePopoverCommon.css-CWKaQ37A.js";import"./ValueStateMessage.css-BD9264Ua.js";import"./Suggestions.css-PvISQ8RB.js";import"./ListBoxItemGroupTemplate-B7TcVOYF.js";import"./ComboBoxItemGroup-CPr8tLri.js";import"./ListItemBaseTemplate-B-1oyib3.js";import"./Token-967xuEKh.js";import"./ScrollEnablement-B0qFQ7DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDZZwHz8.js";import"./ToggleButton-BnmaRB9r.js";import"./SuggestionItem-DrN6FdPk.js";import"./index-BZeUxVa-.js";import"./Option-C7146fjq.js";import"./index-YaJgyAqd.js";import"./SegmentedButton-Dc-edv9U.js";import"./index-COSAVkse.js";import"./Select-B5DeL5zX.js";import"./InvisibleMessage-CwUOjoUf.js";import"./slim-arrow-down-poKh_hcw.js";import"./useIsRTL-BpqbY7M4.js";import"./index-DSA_Eb7Y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QgylPsvJ.js";import"./group-2-Bluuis61.js";import"./sort-descending-CFm0YXL_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D68zLiR-.js";import"./utils-BDjXc7bK.js";import"./index-Bv-tSzmM.js";import"./index-D63mSLbN.js";import"./index-D7M3tNXI.js";import"./navigation-down-arrow-DVVrIqSy.js";import"./navigation-right-arrow-9X3lJ24P.js";import"./navigation-right-arrow-Ch2GBoCa.js";import"./useCurrentTheme-DFuvxmk_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DHucAflH.js";import"./debounce-D7W5PopO.js";import"./index-DT2P5I7N.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
