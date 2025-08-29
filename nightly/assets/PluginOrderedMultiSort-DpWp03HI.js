import{j as e}from"./iframe-BM9OIWQT.js";import{useMDXComponents as i}from"./index-BmDGYHRp.js";import{I as a,F as m}from"./CommandsAndQueries-CxAAQY3-.js";import{M as s,C as p}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import{C as l}from"./ControlsWithNote-jMhQcm0L.js";import"./copy-C5RvIJ1i.js";import{e as o}from"./AnalyticalTableHooks.stories-BZ7zBJHa.js";import"./preload-helper-Ct5FWWRu.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./index-DEAaUqYT.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CyuqtK2r.js";import"./delete-onoyAsqE.js";import"./settings--1Ip8lPf.js";import"./NoData-CQH_6cEc.js";import"./IllustratedMessage-Bwpwi4hz.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7uotIo3.js";import"./index-_M5hu1Ve.js";import"./slim-arrow-down-DZH9bZ7T.js";import"./Input-Dn5iQQwi.js";import"./ResponsivePopoverCommon.css-C06uDNZk.js";import"./ValueStateMessage.css-45247xTr.js";import"./Suggestions.css-D3BTSrmf.js";import"./ListBoxItemGroupTemplate-DRaugEOq.js";import"./ComboBoxItemGroup-DPclcPz1.js";import"./ListItemBaseTemplate-4FD8RdDt.js";import"./Token-DULBBXqN.js";import"./ScrollEnablement-B6aqSdEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN3OLFlW.js";import"./ToggleButton-BiNCtIf_.js";import"./SuggestionItem-9SkfTs2v.js";import"./index-DDgoevNI.js";import"./Option-C3MxzwCu.js";import"./index-B9VkeBUH.js";import"./SegmentedButton-DYNlW9qo.js";import"./index-C4RyrHZD.js";import"./Select-BMZ7_MPl.js";import"./InvisibleMessage-B5HLZjpk.js";import"./slim-arrow-down-BTYV_0EQ.js";import"./useIsRTL-uL9buPdP.js";import"./index-4j8VosmR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BU0dRrZB.js";import"./group-2-IGI1Z0iD.js";import"./sort-descending-Ce7w9FbB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BD-49ib6.js";import"./utils-BX52KHbp.js";import"./index-CEfW1Ie-.js";import"./index-6oxIcK4F.js";import"./index-DDsSh8_M.js";import"./navigation-down-arrow-DRy-Plf1.js";import"./navigation-right-arrow-C4LKuMFg.js";import"./navigation-right-arrow-B77x5HAj.js";import"./useCurrentTheme-BO1dkmZn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BV7JsfdZ.js";import"./debounce-D7W5PopO.js";import"./index-SxXIoXoc.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
