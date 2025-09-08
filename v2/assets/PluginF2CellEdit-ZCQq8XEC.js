import{j as e}from"./iframe-CGUWa3l5.js";import{useMDXComponents as o}from"./index-Cg9cAKJC.js";import{I as r,F as l}from"./CommandsAndQueries-D9MoTrLH.js";import{M as a,C as c}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import"./copy-WtCMvp6x.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BDgC6LVf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./index-DVv4DYKP.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIn0EWmH.js";import"./delete-D8iOVq_P.js";import"./settings-BrU77TJz.js";import"./NoData-BtKw36NF.js";import"./IllustratedMessage-roO0aRXn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-pvKKlwIQ.js";import"./index-DdzUybfc.js";import"./slim-arrow-down-DTV0qdqM.js";import"./Input-D6uk9j64.js";import"./ResponsivePopoverCommon.css-BEg546Rm.js";import"./ValueStateMessage.css-2dCo7gv0.js";import"./Suggestions.css-BzuWn3c7.js";import"./ListBoxItemGroupTemplate-T5G4LspN.js";import"./ComboBoxItemGroup-rYdUb0dx.js";import"./ListItemBaseTemplate-DPo3rTK0.js";import"./Token-CM0KuYKd.js";import"./ScrollEnablement-CQEkGSE4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZmC8AzlV.js";import"./ToggleButton-B7IDpjil.js";import"./SuggestionItem-B72aMk-1.js";import"./index-D3Q4XSrj.js";import"./Option-KkRC9zkJ.js";import"./index-BDLjw3vw.js";import"./SegmentedButton-BZuewes2.js";import"./index-16LEbUKu.js";import"./Select-DqU7IOqL.js";import"./InvisibleMessage-DsoM_md7.js";import"./slim-arrow-down-C2D4hy1c.js";import"./useIsRTL-CiTgDNnq.js";import"./index-DxY5n6Uu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2pujT4z.js";import"./group-2-Bsz1MTSG.js";import"./sort-descending-B95Vwq5b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQRmvIfO.js";import"./utils-Bvg3-Eiz.js";import"./index-DiFhnHjc.js";import"./index-DQtuH_ue.js";import"./index-DPKePRb-.js";import"./navigation-down-arrow-DEG608S3.js";import"./navigation-right-arrow-FljkMUDF.js";import"./navigation-right-arrow-DNwcZSXb.js";import"./useCurrentTheme-_W43-YnM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4ApArmi.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CbfSQR9D.js";import"./index-buTEIynB.js";import"./less-CKtxa6cj.js";import"./index-R6CpitaJ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
