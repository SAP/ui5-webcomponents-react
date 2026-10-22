import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-B0uojeB4.js";import{t as s,u as c,v as l,y as u}from"./components-WtVE3joN.js";import{d,n as f}from"./AnalyticalTableHooks.stories-CNLRhumB.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-usef2celledit`,children:`AnalyticalTable Plugin: useF2CellEdit`}),`
`,(0,h.jsx)(l,{moduleNames:[`AnalyticalTableHooks`],packageName:`@ui5/webcomponents-react`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`Since: v2.14.0`})}),`
`,(0,h.jsx)(t.p,{children:`A plugin hook that enables F2-based cell editing for interactive elements inside a cell.`}),`
`,(0,h.jsxs)(t.p,{children:[`To `,(0,h.jsx)(t.strong,{children:`ensure the hook works correctly`}),`, make sure that:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Each column containing interactive elements has the `,(0,h.jsx)(t.code,{children:`interactiveElementName`}),` property set. `,(0,h.jsx)(t.strong,{children:`Note:`}),` This property is also used to describe the cell's content for screen readers.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The callback Ref returned by `,(0,h.jsx)(t.code,{children:`useF2CellEdit.useCallbackRef`}),` is attached to every interactive element within the cell.`]}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[`The hook manages focus, keyboard navigation, and `,(0,h.jsx)(t.code,{children:`tabindex`}),` for cells with interactive content:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Pressing `,(0,h.jsx)(t.code,{children:`F2`}),` moves focus between the cell container and its first interactive element.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Pressing `,(0,h.jsx)(t.code,{children:`Tab`}),` on a focused header cell moves focus to the body cell in the same column at the last focused body row (or the first row if none was focused).`]}),`
`,(0,h.jsxs)(t.li,{children:[`Pressing `,(0,h.jsx)(t.code,{children:`Shift+Tab`}),` on a focused body cell moves focus back to the header cell of the same column.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Updates the cell's `,(0,h.jsx)(t.code,{children:`aria-label`}),` with the interactive element's name for accessibility.`]}),`
`,(0,h.jsx)(t.li,{children:`Prevents standard navigation keys from interfering when editing a cell.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(o,{of:f,sourceState:`none`}),`
`,(0,h.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import type {
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
`,(0,h.jsx)(c,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),u(),i(),s(),d()})))()}g();export{m as default};