import{j as e}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as i}from"./index-DBGwXOnP.js";import{I as a,F as m}from"./CommandsAndQueries-Cb3G3ka5.js";import{M as s,C as p}from"./blocks-DynXzMxo.js";import"./Tag-CzQty8rY.js";import"./index-CqdKq5PF.js";import{C as l}from"./ControlsWithNote-CMyxfP3l.js";import"./copy-CWrvVeie.js";import{e as o}from"./AnalyticalTableHooks.stories-BqQj_Ltc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./index-TINCTucQ.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdNBRyB1.js";import"./delete-C2U2A-yb.js";import"./settings-DF3NHvjE.js";import"./NoData-BFHkDIgd.js";import"./IllustratedMessage-D7DuY04R.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dpd6t92o.js";import"./index-7q78DKDL.js";import"./slim-arrow-down-DMLXw6xT.js";import"./Input-B6peNm1t.js";import"./ResponsivePopoverCommon.css-Ba71pV2j.js";import"./ValueStateMessage.css-rpNnQiGf.js";import"./Suggestions.css-DDzb5FdX.js";import"./ListBoxItemGroupTemplate-CLDx4aFe.js";import"./ComboBoxItemGroup-0HZ5pe-M.js";import"./ListItemBaseTemplate-UHhLaiyc.js";import"./Token-BbYLeIwQ.js";import"./ScrollEnablement-D8tzMu5h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAw7VuyQ.js";import"./ToggleButton-C_ZfV5QP.js";import"./SuggestionItem-oeptop1Y.js";import"./index-DAqL5wGg.js";import"./Option-DAiofa7l.js";import"./index-B5JGrjgL.js";import"./SegmentedButton-CQaM9kSM.js";import"./index-BAu2trWC.js";import"./Select-CatGjmg8.js";import"./InvisibleMessage-DYgdDzKE.js";import"./slim-arrow-down-CJjWd9wb.js";import"./useIsRTL-BPkFkuhq.js";import"./index-Ba2iaRbK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLL2_YGc.js";import"./group-2-CF46wLb5.js";import"./sort-descending-DjXzD5Vq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcG__9zQ.js";import"./utils-BB8FlNwX.js";import"./index-ClzhVMYp.js";import"./index-ag2wqFEj.js";import"./index-COtrkj-k.js";import"./navigation-down-arrow-q-51FI4K.js";import"./navigation-right-arrow-DmrrzDkW.js";import"./navigation-right-arrow-BNGrfpXc.js";import"./useCurrentTheme-DKZ9wuBT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-2IedBLhj.js";import"./debounce-D7W5PopO.js";import"./index-z-z0N_jj.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
