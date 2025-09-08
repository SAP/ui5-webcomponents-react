import{j as e}from"./iframe-zpPFhmqz.js";import{useMDXComponents as i}from"./index-aGUGAxCn.js";import{I as m,F as a}from"./CommandsAndQueries-DoDYgPNU.js";import{M as s,C as p}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import{C as l}from"./ControlsWithNote-JGjSe56-.js";import"./i18n-DCXZOGva.js";import"./copy-CsdqLzsD.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dx8Mn6e4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./index-C9UnmKjh.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l7ytZdfT.js";import"./delete-MHv_CYg9.js";import"./settings-DDoKt4UP.js";import"./NoData-DMnUha6D.js";import"./IllustratedMessage-BejhpU64.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DjPxmqrq.js";import"./index-BsUu5ArI.js";import"./slim-arrow-down-CO2u_KNM.js";import"./Input-BcHfgIky.js";import"./ResponsivePopoverCommon.css-Cb1nsgmq.js";import"./ValueStateMessage.css-CmZvREXK.js";import"./Suggestions.css-DIfLi72j.js";import"./ListBoxItemGroupTemplate-CHNgl-Oy.js";import"./ComboBoxItemGroup-DFkgZF5e.js";import"./ListItemBaseTemplate-C2pGTkPR.js";import"./Token-PxOnpRsT.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qOMJB75Y.js";import"./ToggleButton-C4gh6ZdD.js";import"./SuggestionItem-MnmkuIYh.js";import"./index-lxTrpBQg.js";import"./Option-BZrKzvIh.js";import"./index-Cu4m70XN.js";import"./SegmentedButton-C_Bg2ZEp.js";import"./index-v-gaF3k7.js";import"./Select-BLfR4K0O.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-YWcqYD1l.js";import"./useIsRTL-eXMfvMyV.js";import"./index-B22sVMzR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMZ8jdZi.js";import"./group-2-moJaZwxt.js";import"./sort-descending-Bn-IQCLh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8yCGdW8.js";import"./utils-BsKoZRvK.js";import"./index-C5MZ6k2U.js";import"./index-DVkEcyDj.js";import"./index-BJMFwgq6.js";import"./navigation-down-arrow-CahQfWLu.js";import"./navigation-right-arrow-D6aNzJYM.js";import"./navigation-right-arrow-XoXEZ7Cs.js";import"./useCurrentTheme-D03cAXDo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuZK89md.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DDyEFRtL.js";import"./index-CLpJfXhr.js";import"./less-B0fY1ae9.js";import"./index-fd99oHag.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
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
`,e.jsx(a,{})]})}function Le(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Le as default};
