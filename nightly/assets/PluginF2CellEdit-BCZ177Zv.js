import{j as e}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as o}from"./index-D0kyY75e.js";import{I as r,F as l}from"./CommandsAndQueries-YFNvLEil.js";import{M as a,C as c}from"./blocks-IuY-WHWo.js";import"./Tag-lLVMTbba.js";import"./index-DuupinLA.js";import"./i18n-DCXZOGva.js";import"./copy-DlGd5HR3.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C8KyoWyU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./index-jqGKriQv.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS0t17eg.js";import"./delete-Cqs9v5UZ.js";import"./settings-CyEtlrBV.js";import"./NoData-BWIo64AO.js";import"./IllustratedMessage-C4Y9MhXY.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DfHNJiM8.js";import"./index-DdyO6oSf.js";import"./slim-arrow-down-BKxPiX8n.js";import"./Input-D-9zBLbY.js";import"./ResponsivePopoverCommon.css-CxqRSEww.js";import"./ValueStateMessage.css-Dm13dtEh.js";import"./Suggestions.css-BrbWPJFr.js";import"./ListBoxItemGroupTemplate-C_OMzyC0.js";import"./ComboBoxItemGroup-D39JgLka.js";import"./ListItemBaseTemplate-D-qPwKzw.js";import"./Token-Be0u3QBl.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXUKgIyV.js";import"./ToggleButton-IQUGwWke.js";import"./SuggestionItem-DdzoQa60.js";import"./index-BX9d1tne.js";import"./Option-DmWPWIPr.js";import"./index-D0SZ3ivo.js";import"./SegmentedButton-BBntDzPz.js";import"./index-BGk1wpri.js";import"./Select-5KsyfTZz.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-CTLngD-X.js";import"./useIsRTL-B82EOOfT.js";import"./index-WkNiF2x7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DYih4vHX.js";import"./group-2-D5Vb2rGk.js";import"./sort-descending-CpwdY_0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-aOb56p52.js";import"./utils-CrZTWPem.js";import"./index-DXERoPHz.js";import"./index-4nJOmPH_.js";import"./index-BBimiLXf.js";import"./navigation-down-arrow-BQwLi84w.js";import"./navigation-right-arrow-D_TiaYK2.js";import"./navigation-right-arrow-BKqHuSCb.js";import"./useCurrentTheme-fsd6-M81.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B-2UELL8.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BCmVS6m3.js";import"./index-_FkIPEUJ.js";import"./less-DegAqowm.js";import"./index-CPP2cAY-.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
