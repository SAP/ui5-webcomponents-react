import{j as e}from"./iframe-C5HYk_w9.js";import{useMDXComponents as i}from"./index-NAtY6U9A.js";import{I as a,F as m}from"./CommandsAndQueries-D55ZIYIG.js";import{M as s,C as p}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import{C as l}from"./ControlsWithNote-D85sRsQV.js";import"./copy-C5SWnutv.js";import{e as o}from"./AnalyticalTableHooks.stories-DueYgjic.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./index-BrZnxm7s.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_d91-3q.js";import"./delete-CqDfwzpc.js";import"./settings-BPCUWV46.js";import"./NoData-CxhWn9wv.js";import"./IllustratedMessage-GH5yVttf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-87C3bAgH.js";import"./index-C2VnV4iR.js";import"./slim-arrow-down-CBehnyc2.js";import"./Input-BdwJJtVE.js";import"./ResponsivePopoverCommon.css-C8yEY6IR.js";import"./ValueStateMessage.css-D4-kWGJF.js";import"./Suggestions.css-Dsm1Odvr.js";import"./ListBoxItemGroupTemplate-BAGrLMDa.js";import"./ComboBoxItemGroup-B5cWhmOZ.js";import"./ListItemBaseTemplate-BHoAE_XK.js";import"./Token-CXT3NtiV.js";import"./ScrollEnablement-BPWQH0lq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R3eedhiG.js";import"./ToggleButton-CBUGjNrV.js";import"./SuggestionItem-CBNk3s7_.js";import"./index-0bLmG4nf.js";import"./Option-c-UVfgap.js";import"./index-1EEehj_F.js";import"./SegmentedButton-DQlrC5-R.js";import"./index-OLntaare.js";import"./Select-SEMtVca9.js";import"./InvisibleMessage-BmEFxMXz.js";import"./slim-arrow-down-CWrkxAdp.js";import"./useIsRTL-BqnKZ734.js";import"./index-CqHxCzDj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VAgj8Sfy.js";import"./group-2-BU6GeVHz.js";import"./sort-descending-CBjoWotJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-BDUto2bG.js";import"./utils-DHsQ_nK5.js";import"./index-DH8PPPSy.js";import"./index-DcqsX-Je.js";import"./index-BNbfz9XF.js";import"./navigation-down-arrow-hy_35llr.js";import"./navigation-right-arrow-ElURueQj.js";import"./navigation-right-arrow-czcZqh9Y.js";import"./useCurrentTheme-BOXRzM9h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YsMTI0nj.js";import"./debounce-D7W5PopO.js";import"./index-CIvIyHMC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
