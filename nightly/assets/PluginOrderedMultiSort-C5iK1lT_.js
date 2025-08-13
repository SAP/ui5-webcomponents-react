import{j as e}from"./iframe-nPyk7Pli.js";import{useMDXComponents as i}from"./index-CtkrgsHZ.js";import{I as a,F as m}from"./CommandsAndQueries-BH3LWIrk.js";import{M as s,C as p}from"./blocks-kpZj3_CU.js";import"./Tag-DE1zjgne.js";import"./index-Db4ElCLi.js";import{C as l}from"./ControlsWithNote-Bxn-4kSn.js";import"./copy-YekArnCd.js";import{e as o}from"./AnalyticalTableHooks.stories-DOkPKrpz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B-9nmnKT.js";import"./index-4UD2mlLT.js";import"./index-DuhaT3ww.js";import"./Link-DLcMVbxe.js";import"./addCustomCSSWithScoping-98xqr_q6.js";import"./index-BsO78O3m.js";import"./index-QcasdNWm.js";import"./index-CrWnOU7h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cqyy-sBZ.js";import"./index-Bf4gw30l.js";import"./information-BO_mntst.js";import"./sys-enter-2-DaFu4CEs.js";import"./alert-UB53-VFT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ty-gGthJ.js";import"./delete-B8WU0zBU.js";import"./settings-ahtvM9f0.js";import"./NoData-DmwrNGBB.js";import"./IllustratedMessage-CcqtXOwA.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dt6BDesQ.js";import"./index-By_y6r94.js";import"./slim-arrow-down-BcON-Wjl.js";import"./Input-BE7iMtB8.js";import"./ResponsivePopoverCommon.css-DCRzDw4o.js";import"./ValueStateMessage.css-5GikroWi.js";import"./Suggestions.css-BKHPD-ad.js";import"./ListBoxItemGroupTemplate-CCr0Rncx.js";import"./ComboBoxItemGroup-CJbgxf-C.js";import"./ListItemBaseTemplate-BHadPsZP.js";import"./Token-C9bVd98N.js";import"./ScrollEnablement-u7JmO1XQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DlWJ6O71.js";import"./ToggleButton-DvPplgtZ.js";import"./SuggestionItem-ChjoWPxK.js";import"./index-Cx6mx0cC.js";import"./Option-glJsPgx-.js";import"./index-DqOKj-U3.js";import"./SegmentedButton-CNBN2YvV.js";import"./index-ZYyIsLUD.js";import"./Select-RQ6rgJWT.js";import"./InvisibleMessage-CP2XxzVV.js";import"./slim-arrow-down-B-fe4k97.js";import"./useIsRTL-DgP77H3z.js";import"./index-CZMRCvhw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cop_iv5v.js";import"./group-2-ZPJw_y-G.js";import"./sort-descending-CXALsaRF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BoZbY8eq.js";import"./utils-DiknCXVA.js";import"./index-BJQU4DCG.js";import"./index-CGMKS6Sn.js";import"./index-BtpbMWx5.js";import"./navigation-down-arrow-DEfnuviE.js";import"./navigation-right-arrow-s3baHVI1.js";import"./navigation-right-arrow-Cl_8zST2.js";import"./useCurrentTheme-DEridXQJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BxYyMEin.js";import"./debounce-D7W5PopO.js";import"./index-Df0OHWRS.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
