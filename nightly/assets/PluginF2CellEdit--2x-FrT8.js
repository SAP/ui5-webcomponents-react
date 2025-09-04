import{j as e}from"./iframe-BGPLLWda.js";import{useMDXComponents as o}from"./index-CUo1Jk3b.js";import{I as r,F as l}from"./CommandsAndQueries-CMwJiC-3.js";import{M as a,C as c}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import"./i18n-DSpjDgSK.js";import"./copy-BU9AAITa.js";import{F as s}from"./AnalyticalTableHooks.stories-Bz_VtBIz.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-BUzvoCUF.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-TS6DhnPd.js";import"./delete-BWX4MlMm.js";import"./settings-CFgijcO_.js";import"./NoData-BGEkmZoQ.js";import"./IllustratedMessage-BD1EvJ9X.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BJmJUlHD.js";import"./index-BNy7Dn0g.js";import"./slim-arrow-down-DMfTGr50.js";import"./Input-CpVfGSwY.js";import"./ResponsivePopoverCommon.css-951IwDN3.js";import"./ValueStateMessage.css-Djn4UmzD.js";import"./Suggestions.css-DqxhEkKs.js";import"./ListBoxItemGroupTemplate-cIHi7oo8.js";import"./ComboBoxItemGroup-TToYvkYQ.js";import"./ListItemBaseTemplate-Dg-uXgOx.js";import"./Token-sHPc753X.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gVzTb5tv.js";import"./ToggleButton-DqvQERLg.js";import"./SuggestionItem-Cxo33OCr.js";import"./index-CnuSgVMh.js";import"./Option-DtMR1hW6.js";import"./index-BtbM9UQ5.js";import"./SegmentedButton-U5MRkYAs.js";import"./index-D84y9kSV.js";import"./Select-D9d1AFpt.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CPLxRpFv.js";import"./useIsRTL-B1VPnJL4.js";import"./index-B91ASvCc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfyYYk6.js";import"./group-2-Dnk-pTKH.js";import"./sort-descending-DB8J7SKA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-WIExqiEM.js";import"./utils-TBfvB8Vn.js";import"./index-C5SS4mkA.js";import"./index-I5I4BdBq.js";import"./index-I4ELerEx.js";import"./navigation-down-arrow-BxgwGxy_.js";import"./navigation-right-arrow-wPwk5NCr.js";import"./navigation-right-arrow-CuKMCHYh.js";import"./useCurrentTheme-Nu7Bfg1U.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BxdEUa6a.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMGxioyT.js";import"./index-AkNk4559.js";import"./less-BflIj0KR.js";import"./index-Di9vvrRS.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(n.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(n.p,{children:["To ",e.jsx(n.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column containing interactive elements has the ",e.jsx(n.code,{children:"interactiveElementName"})," property set. ",e.jsx(n.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(n.li,{children:["The callback Ref returned by ",e.jsx(n.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(n.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(n.li,{children:["Updates the cell's ",e.jsx(n.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(n.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  InputDomRef,
  AnalyticalTablePropTypes,
} from '@ui5/webcomponents-react';
import { AnalyticalTableHooks, AnalyticalTable, Button, CheckBox, Input, Switch, Tag } from '@ui5/webcomponents-react';
import paperPlaneIcon from '@ui5/webcomponents-icons/dist/paper-plane';

const { useF2CellEdit } = AnalyticalTableHooks;

const columns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [useF2CellEdit];

function TableWithInputs({ data }) {
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />;
}
`})}),`
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
