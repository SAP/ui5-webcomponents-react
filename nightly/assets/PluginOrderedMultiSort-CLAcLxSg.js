import{j as e}from"./iframe-Brl1VNXv.js";import{useMDXComponents as i}from"./index-lkEyU_nt.js";import{I as a,F as m}from"./CommandsAndQueries-Dk6rSuK-.js";import{M as s,C as p}from"./blocks-BAqV5WPc.js";import"./Tag-CPqPqrcS.js";import"./index-BqPTl_TF.js";import{C as l}from"./ControlsWithNote-C8UpWLdO.js";import"./copy-3T1gBUKn.js";import{e as o}from"./AnalyticalTableHooks.stories-DoORN7PF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-cvNk3Ydm.js";import"./index-BAyaq3AZ.js";import"./index-665xf7Lj.js";import"./Link-R6QwvZvg.js";import"./addCustomCSSWithScoping-2pXmrNrJ.js";import"./index-CIiYxA_R.js";import"./index-CQN5QiqO.js";import"./index-BSJzWAI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BAdmvlBz.js";import"./index-_G4y7meT.js";import"./information-BqiTraiu.js";import"./sys-enter-2-Br-uV94n.js";import"./alert-DWDpknyG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWxguO42.js";import"./delete-C1TIoMlj.js";import"./settings-D4ON83w0.js";import"./NoData-DG0JaC6_.js";import"./IllustratedMessage-DFVXGXCi.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cnkp96WC.js";import"./index-CHolLt5w.js";import"./slim-arrow-down-CagLPUnU.js";import"./Input-udPVo4mc.js";import"./ResponsivePopoverCommon.css-D3Hv3Gxc.js";import"./ValueStateMessage.css-Bf2NqEEl.js";import"./Suggestions.css-PGPc3R_W.js";import"./ListBoxItemGroupTemplate-D-vUij60.js";import"./ComboBoxItemGroup-Cj2VhANu.js";import"./ListItemBaseTemplate-DqFXL3dn.js";import"./Token-BRypdmfh.js";import"./ScrollEnablement-vXxL4r_i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0gp9kpIG.js";import"./ToggleButton-Cj_pSwfJ.js";import"./SuggestionItem-eIYipz3n.js";import"./index-B120lRj9.js";import"./Option-ydTn3SF0.js";import"./index-ByUOmVwt.js";import"./SegmentedButton-B-E_kZVa.js";import"./index-DHHzjK6O.js";import"./Select-DPAi3Ppf.js";import"./InvisibleMessage-CyHbLI8k.js";import"./slim-arrow-down-BcVEw-DR.js";import"./useIsRTL-BIUxlTgz.js";import"./index-DJDgDtmd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaykPM6n.js";import"./group-2-BE1KJkJu.js";import"./sort-descending-DtT3nEOM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DR49-Cmt.js";import"./utils-hwxV1HAU.js";import"./index-C6euIQDK.js";import"./index-LOLgjMOa.js";import"./index-C6yhMq4f.js";import"./navigation-down-arrow-CFW-H7FC.js";import"./navigation-right-arrow-Cmd9UH9N.js";import"./navigation-right-arrow-BoSQuLX4.js";import"./useCurrentTheme-CytE6E3p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-XBV3ZP6e.js";import"./debounce-D7W5PopO.js";import"./index-dtCeEGgw.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
