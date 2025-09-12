import{j as e}from"./iframe-caVmfS0N.js";import{useMDXComponents as o}from"./index-CXGNJi-m.js";import{I as r,F as l}from"./CommandsAndQueries-DetWBOzr.js";import{M as a,C as c}from"./blocks-ZTuRQuXn.js";import"./Tag-D02fgpVR.js";import"./index-ChGg5Mmk.js";import"./copy-DWhnNq-F.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BCB-wVty.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BDC18DOY.js";import"./index-IhZ6wtTw.js";import"./index-Bs2xAB6r.js";import"./Link-CXOXdny5.js";import"./addCustomCSSWithScoping-QAXJ-c-T.js";import"./index-D2ylaH5D.js";import"./index-C-mTSqge.js";import"./index-CxKirG4i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGaiMck6.js";import"./index-CIcgqU5O.js";import"./information-Dyf6S5us.js";import"./sys-enter-2-D5_eC5h3.js";import"./alert-BiCZhGMN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C3ZVADDU.js";import"./delete-Coj8x0c2.js";import"./settings-BF6yTijn.js";import"./NoData-CsITxXfr.js";import"./IllustratedMessage-CTMgPAIw.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D20unOQc.js";import"./index-Cwz-GXgg.js";import"./slim-arrow-down-DGRzOAYw.js";import"./Input-WFpKrumU.js";import"./ResponsivePopoverCommon.css-Ce7KHyvw.js";import"./ValueStateMessage.css-BRyE1X0p.js";import"./Suggestions.css-CteNzd-N.js";import"./ListBoxItemGroupTemplate-BjfXbqSJ.js";import"./ComboBoxItemGroup-C0lfAAfP.js";import"./ListItemBaseTemplate-Cae7dQEd.js";import"./Token-Da1u6OUU.js";import"./ScrollEnablement-DgdQ7xkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMUaO3aP.js";import"./ToggleButton-lfA0Sh9N.js";import"./SuggestionItem-N9yMpNBd.js";import"./index-s22r0EiM.js";import"./Option-DyUZB-Rv.js";import"./index-CAkcfUNV.js";import"./SegmentedButton-CjrpYGhu.js";import"./index-ui_8MH4g.js";import"./Select-bTsVYF8t.js";import"./InvisibleMessage-X31FjsM3.js";import"./slim-arrow-down-ChlFFHmi.js";import"./useIsRTL-DKqS38_i.js";import"./index-BMPIp6h6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRe9wWWm.js";import"./group-2-B_WAeg2W.js";import"./sort-descending-BXjAOUZq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4SBQasY.js";import"./utils-BKtL8ae0.js";import"./index-D_Zb-Qtb.js";import"./index-ggLsWFgW.js";import"./index-DPOI5qRi.js";import"./navigation-down-arrow-BIm6SbwE.js";import"./navigation-right-arrow-mE_QgPeY.js";import"./navigation-right-arrow-oN1zG5y0.js";import"./useCurrentTheme-C15qikew.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BZoYXHai.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B8WUez_T.js";import"./index-Ba33ybf0.js";import"./less-GsgW5m6X.js";import"./index-BXO50M8O.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
