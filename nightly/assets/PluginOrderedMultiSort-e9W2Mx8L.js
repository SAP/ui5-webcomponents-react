import{j as e}from"./iframe-BbyAdBbD.js";import{useMDXComponents as i}from"./index-DMrgLDcS.js";import{I as a,F as m}from"./CommandsAndQueries-DIG7kTa0.js";import{M as s,C as p}from"./blocks-BmDzJ9zc.js";import"./Tag-DFDkNEbD.js";import"./index-BOJCW3Cn.js";import{C as l}from"./ControlsWithNote-OBGD-axJ.js";import"./copy-BF7pXxeM.js";import{e as o}from"./AnalyticalTableHooks.stories-DiCxz0vI.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8J3KSH2.js";import"./index-DoDw--JI.js";import"./index-B0_PQF5c.js";import"./Link-Dyaix8DR.js";import"./addCustomCSSWithScoping-C5eZLuHk.js";import"./index-CzGjDUib.js";import"./index-uwT0wEXF.js";import"./index-DOb7Y-7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPnL0edq.js";import"./index-B8lW2Kcg.js";import"./information-DKaoIqMf.js";import"./sys-enter-2-CKPkjpqY.js";import"./alert-D9XuLZDQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BSAnNVf9.js";import"./delete-BLpFcH48.js";import"./settings-5TLja6i2.js";import"./NoData-HPmKGd38.js";import"./IllustratedMessage-B647nMwC.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DvSWxm92.js";import"./index-BlUZkyup.js";import"./slim-arrow-down-B5KGIjFP.js";import"./Input-vhH4RVxo.js";import"./ResponsivePopoverCommon.css-DuxFKCqv.js";import"./ValueStateMessage.css-C-AtYoGH.js";import"./Suggestions.css-CqkZUpZv.js";import"./ListBoxItemGroupTemplate-BrOkgLPi.js";import"./ComboBoxItemGroup-Cb5cZxlO.js";import"./ListItemBaseTemplate-DKaA7HpC.js";import"./Token-DxGHBcxh.js";import"./ScrollEnablement-DpfeP5CM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSYeusiR.js";import"./ToggleButton-OcC6jLG_.js";import"./SuggestionItem-D3io2X0o.js";import"./index-BDvgDUVK.js";import"./Option-CEiySMCJ.js";import"./index-N78PTm1P.js";import"./SegmentedButton-D9XZlGT9.js";import"./index-Bp7YlL8u.js";import"./Select-DbKIwfyt.js";import"./InvisibleMessage-D6n4ORIu.js";import"./slim-arrow-down-Cx1RPm1s.js";import"./useIsRTL-9zlLmWw2.js";import"./index-Ck_-4Rju.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BEC6BIlW.js";import"./group-2-CwXrvgUo.js";import"./sort-descending-DaWJ7kHb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B7ejrIsS.js";import"./utils-CCpDXmdD.js";import"./index-C54FjhOM.js";import"./index-BeMay_ho.js";import"./index-CcGMgt3M.js";import"./navigation-down-arrow-BCp3Wl54.js";import"./navigation-right-arrow-BaJ0uUCw.js";import"./navigation-right-arrow-CK5GhfeV.js";import"./useCurrentTheme-DrzZpmta.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CyWS8VSF.js";import"./debounce-D7W5PopO.js";import"./index-D2LrbRwm.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
