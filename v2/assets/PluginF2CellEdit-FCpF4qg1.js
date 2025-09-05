import{j as e}from"./iframe-wtGyowSu.js";import{useMDXComponents as o}from"./index-CZZ2_hDJ.js";import{I as r,F as l}from"./CommandsAndQueries-DQ0OWp_s.js";import{M as a,C as c}from"./blocks-DOUzMh6P.js";import"./Tag-CF7bcptF.js";import"./index-DemLuH5_.js";import"./i18n-DCXZOGva.js";import"./copy-fNgmErhy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DrQNTaHW.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BFewsKyD.js";import"./index-CJ5u_hE4.js";import"./index-KwEy5gb6.js";import"./Link-BV0lLBLc.js";import"./addCustomCSSWithScoping-Bg0OR_5Z.js";import"./index-CeuGV1sB.js";import"./index-klURHLLt.js";import"./index-WPEP5BQu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BeC7vZ35.js";import"./index-CR8pF6-t.js";import"./information-B0VTD8Pg.js";import"./sys-enter-2-CvQEzb10.js";import"./alert-Cef964mc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CqTHo6Oy.js";import"./delete-B49e3xOy.js";import"./settings-BhXfmtZo.js";import"./NoData-D-CeBPtE.js";import"./IllustratedMessage-CG9MBdLp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Byfj7R1q.js";import"./index-eL1oL0O0.js";import"./slim-arrow-down-CiHrStr3.js";import"./Input-buaSlew7.js";import"./ResponsivePopoverCommon.css-D-1xG2-i.js";import"./ValueStateMessage.css-COGmpv8H.js";import"./Suggestions.css-BAb2ZnZd.js";import"./ListBoxItemGroupTemplate-BEADZVdq.js";import"./ComboBoxItemGroup-DljnFe5P.js";import"./ListItemBaseTemplate-D4huXPoH.js";import"./Token-CW8wTRqJ.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B54pPtmm.js";import"./ToggleButton-BY07XXUb.js";import"./SuggestionItem-C6nikC1O.js";import"./index-BBX4--Ov.js";import"./Option-DAm3n8Um.js";import"./index-DuSn1TaV.js";import"./SegmentedButton-DNZ8rr19.js";import"./index-CKpFXmKb.js";import"./Select-CpDSGnVu.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-Cfpmc2nk.js";import"./useIsRTL-Qs2nxCti.js";import"./index-C0KYOG-T.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBdDqf2s.js";import"./group-2-BVpdmttV.js";import"./sort-descending-DSpBk47E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_G53VOK.js";import"./utils-zWP-DA9Y.js";import"./index-5w_GDQTo.js";import"./index-BJmG4xyb.js";import"./index-UHr40Gn7.js";import"./navigation-down-arrow-T9BpYw6q.js";import"./navigation-right-arrow-CxD7_o0m.js";import"./navigation-right-arrow-B5AIzKVw.js";import"./useCurrentTheme-DameEpyT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jyhDdUjI.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BEqQSamn.js";import"./index-DpS3Ux2E.js";import"./less-DvDpQ08n.js";import"./index-4-CbeKxN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
