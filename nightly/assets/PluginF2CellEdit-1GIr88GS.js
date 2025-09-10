import{j as e}from"./iframe-W4A4TPxI.js";import{useMDXComponents as o}from"./index-DR9mRC8k.js";import{I as r,F as l}from"./CommandsAndQueries-CqKi30YT.js";import{M as a,C as c}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import"./copy-ieRXWhTl.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BzG5eXLo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./index-DKRTY3p_.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8bxKI_n.js";import"./delete-DUKwWmWr.js";import"./settings-CYLpDzMR.js";import"./NoData-CxfkBuoa.js";import"./IllustratedMessage-Bwh347Qt.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-QRx2oQO7.js";import"./index-DeQjkMj_.js";import"./slim-arrow-down-C5qHDn3A.js";import"./Input-CfoEMb7S.js";import"./ResponsivePopoverCommon.css-BiB47G1s.js";import"./ValueStateMessage.css-DMS2XS0O.js";import"./Suggestions.css-hvZmQ1kq.js";import"./ListBoxItemGroupTemplate-CZYhczcA.js";import"./ComboBoxItemGroup-CN0xa2iU.js";import"./ListItemBaseTemplate-23lrP7Tw.js";import"./Token-Dv6g3YCV.js";import"./ScrollEnablement-CshahWxZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-uRMv37PZ.js";import"./ToggleButton-B_J6hKck.js";import"./SuggestionItem-DXkUIhz6.js";import"./index-CYKe120Z.js";import"./Option-C7q1-uNo.js";import"./index--ce0PYoF.js";import"./SegmentedButton-3PPkHsH8.js";import"./index-lpfGVQQu.js";import"./Select-CFs4yPC7.js";import"./InvisibleMessage-CUUIa9XV.js";import"./slim-arrow-down-D_x_Mhve.js";import"./useIsRTL-B3zfNNQF.js";import"./index-DcYUW_FQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3bf_9vf.js";import"./group-2-CfNOoVSy.js";import"./sort-descending-CwRAMBpb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYYxdHSO.js";import"./utils-DtxEY-Xi.js";import"./index-BtiJt7cm.js";import"./index-BXn32007.js";import"./index-D5Gw03fH.js";import"./navigation-down-arrow-CngJcBic.js";import"./navigation-right-arrow-CeZbGMLy.js";import"./navigation-right-arrow-CmleFgXi.js";import"./useCurrentTheme-CISq3YGU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D90inOg_.js";import"./debounce-D7W5PopO.js";import"./paper-plane-zfv8vhjt.js";import"./index-DWvjkPV4.js";import"./less-pHoiGPbs.js";import"./index-RYWAVzMN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
