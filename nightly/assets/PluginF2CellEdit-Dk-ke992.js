import{j as e}from"./iframe-113A6qfG.js";import{useMDXComponents as o}from"./index-PjC7U6K4.js";import{I as r,F as l}from"./CommandsAndQueries-Bg85p3au.js";import{M as a,C as c}from"./blocks-D_3UdGcb.js";import"./Tag-DaeygpfO.js";import"./index-B2xOcofc.js";import"./copy-CcIFyCHE.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D1k_r1Oo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./index-CWWoZsv-.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dd4yZKPF.js";import"./delete-CNLurm_h.js";import"./settings-nYVw-8aK.js";import"./NoData-BtjU7UM8.js";import"./IllustratedMessage-C5AcPGiL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CZOywhhu.js";import"./index-DPIfm0RB.js";import"./slim-arrow-down-DZJ_GP1k.js";import"./Input-Gcc3dJDl.js";import"./ResponsivePopoverCommon.css-Q_FGcyNG.js";import"./ValueStateMessage.css-D-fesA6_.js";import"./Suggestions.css-Dc3HPxH1.js";import"./ListBoxItemGroupTemplate-DD9XMKKc.js";import"./ComboBoxItemGroup-CPJ8jj3b.js";import"./ListItemBaseTemplate-Brlr3M_-.js";import"./Token-UBERC-wa.js";import"./ScrollEnablement-CKBXjPwR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-U7_ux5-W.js";import"./ToggleButton-Z83cNU5B.js";import"./SuggestionItem-B9KyfZt1.js";import"./index-ByuG9QMH.js";import"./Option-BMD9BzbC.js";import"./index-CZccfsvW.js";import"./SegmentedButton-BHZRIVqz.js";import"./index-YaJT-7Vm.js";import"./Select-U-XxeLZb.js";import"./InvisibleMessage-D46WdJW_.js";import"./slim-arrow-down-2De9z3rU.js";import"./useIsRTL-D16EWQ1V.js";import"./index-CkQDp71V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bh0Y-pn3.js";import"./group-2-DfqujJuP.js";import"./sort-descending-DYeXzXZk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8emlxkI.js";import"./utils-DMs0HaFc.js";import"./index-DgltoZoV.js";import"./index-RYBL1PBZ.js";import"./index-DGoA9cON.js";import"./navigation-down-arrow-YzBoi4OT.js";import"./navigation-right-arrow-CVjB9oy3.js";import"./navigation-right-arrow-OXaI-HJX.js";import"./useCurrentTheme-DaERdxGz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsZPiuCg.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B5ZW5JM4.js";import"./index-D7fmcvB0.js";import"./less-B1DnNiyr.js";import"./index-Bf142AWA.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
