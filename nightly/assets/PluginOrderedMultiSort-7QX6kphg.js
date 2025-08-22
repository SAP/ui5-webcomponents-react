import{j as e}from"./iframe-D47IesGI.js";import{useMDXComponents as i}from"./index-B-Cjj5vb.js";import{I as a,F as m}from"./CommandsAndQueries-BUssvnnv.js";import{M as s,C as p}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import{C as l}from"./ControlsWithNote-lj38sMRt.js";import"./copy-CpxPPhhd.js";import{e as o}from"./AnalyticalTableHooks.stories-Dmu3Wc1Y.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-BYtsHb6f.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdRf6Gn_.js";import"./delete-BdLzfl6f.js";import"./settings-D4RCu3f5.js";import"./NoData-DejRevwI.js";import"./IllustratedMessage-BUxe0n2B.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BOaFH31C.js";import"./index-DoOBs30V.js";import"./slim-arrow-down-CRL6N__0.js";import"./Input-BVNlr-7R.js";import"./ResponsivePopoverCommon.css-DcqdU9zO.js";import"./ValueStateMessage.css-Foo9e4QP.js";import"./Suggestions.css-Jvp1dCcK.js";import"./ListBoxItemGroupTemplate-C2Cbg4RB.js";import"./ComboBoxItemGroup-oNdpvv56.js";import"./ListItemBaseTemplate-xRzWPdIS.js";import"./Token-DlVRMaDD.js";import"./ScrollEnablement-DwY0RoAs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxLrmdZY.js";import"./ToggleButton-BnUl__nv.js";import"./SuggestionItem-v3I1qCjx.js";import"./index-Bu-eXKyI.js";import"./Option-BY9BYDVp.js";import"./index-C_AafgAi.js";import"./SegmentedButton-D7wPRwMg.js";import"./index-shpjVhsR.js";import"./Select-CR2ghGLB.js";import"./InvisibleMessage-7tcQYx8D.js";import"./slim-arrow-down-D_ImNcdv.js";import"./useIsRTL-CTOFbx1K.js";import"./index-BMjRkiVz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlK-n2jI.js";import"./group-2-Cp4gTzXo.js";import"./sort-descending-CDUMih-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-SEUed_fI.js";import"./utils-Gey8zOGR.js";import"./index-BFyflX6k.js";import"./index-BXcL-3gN.js";import"./index-CzfiA05G.js";import"./navigation-down-arrow-DcpTPJLm.js";import"./navigation-right-arrow-B9HO0DfC.js";import"./navigation-right-arrow-Brdl4Rhp.js";import"./useCurrentTheme-HVVP5WXO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qnRqtfun.js";import"./debounce-D7W5PopO.js";import"./index-SflDEuXk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
