import{j as e}from"./iframe-DB1hZqAv.js";import{useMDXComponents as i}from"./index-C7G5dSmF.js";import{I as a,F as m}from"./CommandsAndQueries-Btb1kQnC.js";import{M as s,C as p}from"./blocks-cg9LC1rI.js";import"./Tag-BS7zj2yL.js";import"./index-C5JoWyXC.js";import{C as l}from"./ControlsWithNote-DTDQ7q4Z.js";import"./copy-C9f0Ezzi.js";import{e as o}from"./AnalyticalTableHooks.stories-BUext0Gv.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BbxSTqwp.js";import"./index-DfpSA-Ue.js";import"./index-AyDKBAO2.js";import"./Link-CMn1MwX0.js";import"./addCustomCSSWithScoping-aeW1jsnX.js";import"./index-C0ik2STR.js";import"./index-CDotLVrR.js";import"./index-BvRvvaxi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMluZ7rf.js";import"./index-Dq64mUvA.js";import"./information-CQEWuKvd.js";import"./sys-enter-2-CKXMqpTE.js";import"./alert-ttvcaVxO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTJbIMyK.js";import"./delete-iBmDTKmT.js";import"./settings-CXX2toD-.js";import"./NoData-DrngtIPE.js";import"./IllustratedMessage-C6zf5HsA.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DuVbn_Av.js";import"./index-jjwte1j7.js";import"./slim-arrow-down-B9C8_DlV.js";import"./Input-Co1Ncam9.js";import"./ResponsivePopoverCommon.css-DTbOAvZ8.js";import"./ValueStateMessage.css-DyRqN3Zi.js";import"./Suggestions.css-CfU8jDIe.js";import"./ListBoxItemGroupTemplate-Ch9CdS-e.js";import"./ComboBoxItemGroup-DccqzNyb.js";import"./ListItemBaseTemplate-CCky6bk9.js";import"./Token-CPPasJTL.js";import"./ScrollEnablement-DPTLFCJR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BudRgS4c.js";import"./ToggleButton-BjCoIICR.js";import"./SuggestionItem-Bpp7nMj3.js";import"./index-CvaoPo7F.js";import"./Option-B4gtaKyw.js";import"./index-CydNmgP-.js";import"./SegmentedButton-CQj9NEcE.js";import"./index-BKk9Wf2M.js";import"./Select-C5E5Vmyc.js";import"./InvisibleMessage-DXb0t9Au.js";import"./slim-arrow-down-C4Fh43q_.js";import"./useIsRTL-C-GxNVoX.js";import"./index-B_yjfbdI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmM8q-0P.js";import"./group-2-Cwo9fREl.js";import"./sort-descending-D7mmF3VT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BZY4Y34l.js";import"./utils-C7ou7Pk8.js";import"./index-v0oEg3Lc.js";import"./index-C4fDg-mx.js";import"./index-CfmFa_MC.js";import"./navigation-down-arrow-BeFKVpxI.js";import"./navigation-right-arrow-DMOktS7m.js";import"./navigation-right-arrow-CJKsR_Mb.js";import"./useCurrentTheme-xBPSbLDD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D04vslG3.js";import"./debounce-D7W5PopO.js";import"./index-due6Tg_c.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
