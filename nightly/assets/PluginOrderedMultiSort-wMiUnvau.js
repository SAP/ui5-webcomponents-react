import{j as e}from"./iframe-DwijkcSC.js";import{useMDXComponents as i}from"./index-dOTQ_8MY.js";import{I as a,F as m}from"./CommandsAndQueries-v2kYi8f6.js";import{M as s,C as p}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import{C as l}from"./ControlsWithNote-BmSkHN0c.js";import"./copy-BSROPq_0.js";import{e as o}from"./AnalyticalTableHooks.stories-BcPBfgVl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./index-4CSwoMco.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrJXNVPh.js";import"./delete-aAHersLJ.js";import"./settings-uewFS_V4.js";import"./NoData-CThXS__2.js";import"./IllustratedMessage-sD-gyUQ4.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-xiGmwW83.js";import"./index-BFyL3BDI.js";import"./slim-arrow-down-DVE3AHXn.js";import"./Input-Xke3BFuq.js";import"./ResponsivePopoverCommon.css-B6grsBrr.js";import"./ValueStateMessage.css-Bqjq4SCl.js";import"./Suggestions.css-Dr7vVlmc.js";import"./ListBoxItemGroupTemplate-xhPZ9BN8.js";import"./ComboBoxItemGroup-CMjqP94i.js";import"./ListItemBaseTemplate-DfBjNLTN.js";import"./Token-C4gwLyQC.js";import"./ScrollEnablement-sczQYiMf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZEk89Tl.js";import"./ToggleButton-DaHW8XVq.js";import"./SuggestionItem-T5JUISxm.js";import"./index-DfwUMwnp.js";import"./Option-DpDZkHl8.js";import"./index-Beoktyb1.js";import"./SegmentedButton-D52_JIT9.js";import"./index-5UefQkCi.js";import"./Select-D322pIg_.js";import"./InvisibleMessage-Bw88KNeA.js";import"./slim-arrow-down-BsLfN3xy.js";import"./useIsRTL-Dl-PtuBT.js";import"./index-UHAME4Au.js";import"./IconDesign-DXd8PPVF.js";import"./filter-hnPTBo-V.js";import"./group-2-CEqFMcvq.js";import"./sort-descending-D0Lbw9y2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs9wOeA9.js";import"./utils-DFydI20z.js";import"./index-Vq1zQZ3g.js";import"./index-9WjSegZE.js";import"./index-C85cNDYp.js";import"./navigation-down-arrow-Cq6HhR0x.js";import"./navigation-right-arrow-BNY7uCOq.js";import"./navigation-right-arrow-DcfT7hK3.js";import"./useCurrentTheme-XtkosabZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DiCDMx0X.js";import"./debounce-D7W5PopO.js";import"./index-DexoxOrp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
