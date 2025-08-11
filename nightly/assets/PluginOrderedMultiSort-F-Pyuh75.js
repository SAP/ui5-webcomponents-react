import{j as e}from"./iframe-DvixYE7k.js";import{useMDXComponents as i}from"./index-DvcP8w-F.js";import{I as a,F as m}from"./CommandsAndQueries-BP59pkyc.js";import{M as s,C as p}from"./blocks-CTAO90yM.js";import"./Tag-CHowEnLY.js";import"./index-BGjL_ZJV.js";import{C as l}from"./ControlsWithNote-s_60twtr.js";import"./copy-CVzsP6l9.js";import{e as o}from"./AnalyticalTableHooks.stories-BFbtBW6-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./index-BiNCRTue.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV6FmXzT.js";import"./delete-DfkPPTxM.js";import"./settings-CpTWOhw2.js";import"./NoData-MQ_pQWWk.js";import"./IllustratedMessage-BgMufHo_.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-UmpMcvZO.js";import"./index-DXioqJ7a.js";import"./slim-arrow-down-Bl8g1r6x.js";import"./Input-COwe4oO2.js";import"./ResponsivePopoverCommon.css-B5iSbHgX.js";import"./ValueStateMessage.css-Dh9bgGbN.js";import"./Suggestions.css-BE8JkRfe.js";import"./ListBoxItemGroupTemplate-CiMlm5iD.js";import"./ComboBoxItemGroup-B1t1w55_.js";import"./ListItemBaseTemplate-0XXQ3IbQ.js";import"./Token-Cm2Tayzi.js";import"./ScrollEnablement-C5NyvXGb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FwzaVAP_.js";import"./ToggleButton-clmXqNez.js";import"./SuggestionItem-JpbR4qH1.js";import"./index-DombZ1wK.js";import"./Option-CbzqeI1G.js";import"./index-6pWnif7a.js";import"./SegmentedButton-yBYK-j2o.js";import"./index-BnQriH7I.js";import"./Select-DsKB4JBR.js";import"./InvisibleMessage-BYn7ctRV.js";import"./slim-arrow-down-BZHFnOJT.js";import"./useIsRTL-fdT0zKkd.js";import"./index-TXUBpY7W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C26dzaVP.js";import"./group-2-BQg-Xl_q.js";import"./sort-descending-Bs7VQC0E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DYUnAhQW.js";import"./utils-8sBoC5N8.js";import"./index-CGO1z9YQ.js";import"./index-DxdvjxfF.js";import"./index-Hon5Q8Ho.js";import"./navigation-down-arrow-DyLmalXC.js";import"./navigation-right-arrow-Cpn7w1aF.js";import"./navigation-right-arrow-BCj9CE-X.js";import"./useCurrentTheme-BBmJKieJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CqX4IX3j.js";import"./debounce-D7W5PopO.js";import"./index-B8ul9-ip.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
