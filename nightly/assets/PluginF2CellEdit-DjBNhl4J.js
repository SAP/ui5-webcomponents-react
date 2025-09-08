import{j as e}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as o}from"./index-DTW9WkuG.js";import{I as r,F as l}from"./CommandsAndQueries-Di8bJMhG.js";import{M as a,C as c}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import"./copy-DC4VamtM.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Biv7_0b_.js";import"./preload-helper-D9Z9MdNV.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";import"./index-BrdrQHC3.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGn7erBf.js";import"./delete-CXC6lmer.js";import"./settings-z3Kqv_H_.js";import"./NoData-DUqssr6L.js";import"./IllustratedMessage-sPniRTYn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bod6JhhQ.js";import"./index-CUZI3FRG.js";import"./slim-arrow-down-b7xW5WMQ.js";import"./Input-DKCCXuXG.js";import"./ResponsivePopoverCommon.css-6wr_yrJO.js";import"./ValueStateMessage.css-BUM5hsl4.js";import"./Suggestions.css-oyFv45v2.js";import"./ListBoxItemGroupTemplate-DmarxL3_.js";import"./ComboBoxItemGroup-CA6r4V87.js";import"./ListItemBaseTemplate-YOGeNlAr.js";import"./Token-DKlGFJle.js";import"./ScrollEnablement-CGteJMp0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xKwcd7x4.js";import"./ToggleButton-CAbhzZ4Z.js";import"./SuggestionItem-D2t-HTV4.js";import"./index-CaupuYMw.js";import"./Option-Buj1ceqN.js";import"./index-QqJahJbf.js";import"./SegmentedButton-f44xS3Ee.js";import"./index-Bh_3qXv_.js";import"./Select-Cz-kH7T0.js";import"./InvisibleMessage-DqwXOxWx.js";import"./slim-arrow-down-BI_DSc-2.js";import"./useIsRTL--3iCf25v.js";import"./index-DYj6x7NK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLCI_AKZ.js";import"./group-2-DJsmMrGI.js";import"./sort-descending-BSw34moc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2CaCvj_.js";import"./utils-D4lUgN_j.js";import"./index-C38ppj6_.js";import"./index-BNPI3NEr.js";import"./index-CSVTtRtP.js";import"./navigation-down-arrow-D7EJn8ch.js";import"./navigation-right-arrow-DVOIDXzO.js";import"./navigation-right-arrow-uTQcyQpq.js";import"./useCurrentTheme-NkmcojZY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ERhnquzG.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DZq9mbkX.js";import"./index-Bidd9wX5.js";import"./less-D4FrIAV3.js";import"./index-Cp33MICI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
