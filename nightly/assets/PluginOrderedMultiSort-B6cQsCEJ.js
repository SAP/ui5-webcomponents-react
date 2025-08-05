import{j as e}from"./iframe-CS0WNVf3.js";import{useMDXComponents as i}from"./index-DDJWQvBk.js";import{I as a,F as m}from"./CommandsAndQueries-DZ6pwvzq.js";import{M as s,C as p}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import{C as l}from"./ControlsWithNote-BQ2uotKo.js";import"./copy-BAUFdAAv.js";import"./WrappingType-BBpR8qCJ.js";import{e as o}from"./AnalyticalTableHooks.stories-BDDqqarW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./index-CvNKNR4d.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xKp7E0Tc.js";import"./delete-B0hijpGn.js";import"./settings-DnXx7g7P.js";import"./NoData-C9hLItd-.js";import"./IllustratedMessage-D9TXjhx2.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-BcDcM98N.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D1T3NjPX.js";import"./index-vOL_TpkT.js";import"./slim-arrow-down-13yyQzi6.js";import"./ListBoxItemGroupTemplate-B8eP-Pg5.js";import"./ComboBoxItemGroup-Tdlh_kDa.js";import"./ListItemBaseTemplate-Bs0FUKcz.js";import"./Token-DAuk9NKz.js";import"./ScrollEnablement-DtdqB5r7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH1fH6pr.js";import"./ResponsivePopoverCommon.css-wgN2az89.js";import"./Suggestions.css-DCRjJQiV.js";import"./ToggleButton-DlBZVgdD.js";import"./Input-908QQXPy.js";import"./ValueStateMessage.css-2utQpejI.js";import"./SuggestionItem-2mukNXq8.js";import"./index-Bg73Jmg9.js";import"./Option-ndsoEHeD.js";import"./index-B-Fd1UGS.js";import"./SegmentedButton-ByiFmvRr.js";import"./index-iSOjq3mN.js";import"./Select-B8PsMZPZ.js";import"./InvisibleMessage-BLaLHaBV.js";import"./slim-arrow-down-B0zNzNFy.js";import"./useIsRTL-CrA39wlN.js";import"./index-DXGd-dVn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-F6el_Q-P.js";import"./group-2-B5wWZfuD.js";import"./sort-descending-DQa_u9t1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DkO3qxML.js";import"./utils-BeyPgaeY.js";import"./index-DGoD02kv.js";import"./index-Cm98QziX.js";import"./index-YClhRCxe.js";import"./navigation-down-arrow-CZ6j5E_n.js";import"./navigation-right-arrow-DppwJMLZ.js";import"./navigation-right-arrow-BiGZf0MQ.js";import"./useCurrentTheme-BozDlVUS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DD_eFCbd.js";import"./debounce-D7W5PopO.js";import"./index-BBfTXTIi.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
