import{j as e}from"./iframe-D1CS9P6r.js";import{useMDXComponents as i}from"./index-DKS5TQ2O.js";import{I as a,F as m}from"./CommandsAndQueries-D0Ldf7j-.js";import{M as s,C as p}from"./blocks-MP9p7uJf.js";import"./Tag-r4fVuSPw.js";import"./index-C59Ra6n3.js";import{C as l}from"./ControlsWithNote-bB8M-xo-.js";import"./copy-BXLeuYzA.js";import{e as o}from"./AnalyticalTableHooks.stories-CQWW4QXL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYGl8AOq.js";import"./index-ChylkqIr.js";import"./index-DHqmSgZq.js";import"./Link-Q9DSvFtD.js";import"./addCustomCSSWithScoping-Djl5XvUO.js";import"./index--uuuPK6U.js";import"./index-B4Hl6Eco.js";import"./index-KmWwkr3l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CUZwPhW2.js";import"./index-CyljgwzW.js";import"./information-BCqqCqDW.js";import"./sys-enter-2-JjIQxhse.js";import"./alert-DkFxMsXD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqCOwuqV.js";import"./delete-iGAeC_St.js";import"./settings-Jpzz7dQg.js";import"./NoData-DzMAoC6c.js";import"./IllustratedMessage-q4ufoprM.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BkPbbsM6.js";import"./index-BFXusJ8y.js";import"./slim-arrow-down-Cm1u6CO7.js";import"./Input-BhDETh0z.js";import"./ResponsivePopoverCommon.css-Cpf4pg7D.js";import"./ValueStateMessage.css-BJKQtiUN.js";import"./Suggestions.css-Bt6O6fMa.js";import"./ListBoxItemGroupTemplate-BeK7EHkp.js";import"./ComboBoxItemGroup-BCAfoMA4.js";import"./ListItemBaseTemplate-eMuZcgjS.js";import"./Token-DHh_XbjI.js";import"./ScrollEnablement-B8q0SaPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DceIYdr9.js";import"./ToggleButton-CkBC2tPN.js";import"./SuggestionItem-BB5SRH7J.js";import"./index-B32Z0t0a.js";import"./Option-Cn_5WxRP.js";import"./index-Dr0lxBdS.js";import"./SegmentedButton-BPcNDSX6.js";import"./index-B3d1v8UT.js";import"./Select-Cj_Q1k0q.js";import"./InvisibleMessage-D_NgDQng.js";import"./slim-arrow-down-dsGvQlwn.js";import"./useIsRTL-DcXN3FqO.js";import"./index-CkRW9lNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2F3GBFF.js";import"./group-2-rVcZSb_S.js";import"./sort-descending-Dt0pCRMN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9VlWRE3.js";import"./utils-B4q_d1dY.js";import"./index-BNFSEfAV.js";import"./index-CcM6dXm8.js";import"./index-DTQcqPnD.js";import"./navigation-down-arrow-JDYRYXcR.js";import"./navigation-right-arrow-BM1vJgO7.js";import"./navigation-right-arrow-C8xREl7p.js";import"./useCurrentTheme-CGtbEiS2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C0BMIUOH.js";import"./debounce-D7W5PopO.js";import"./index-B8E4SwED.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
