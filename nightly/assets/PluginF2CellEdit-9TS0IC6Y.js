import{j as e}from"./iframe-DEht8tsT.js";import{useMDXComponents as o}from"./index-CHmvqmZV.js";import{I as r,F as l}from"./CommandsAndQueries-r7FFQXZn.js";import{M as a,C as c}from"./blocks-B9eJfK2p.js";import"./Tag-Bo7VmRFf.js";import"./index-qqa4-hS-.js";import"./i18n-DCXZOGva.js";import"./copy-DdxSmOcQ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-rHSTGkQk.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./index-v8e_2LrN.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DUPZhlNh.js";import"./delete-CIIO6cWP.js";import"./settings-BC73ny7E.js";import"./NoData-BmGlQJD3.js";import"./IllustratedMessage-DtFGh_HO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C2_Nt3zN.js";import"./index-DzPD0tFv.js";import"./slim-arrow-down-B6hMDuTF.js";import"./Input-hFJzw5L1.js";import"./ResponsivePopoverCommon.css-CByNGfjI.js";import"./ValueStateMessage.css-CelINsiK.js";import"./Suggestions.css-BNActsuA.js";import"./ListBoxItemGroupTemplate-C2LcXUoB.js";import"./ComboBoxItemGroup-qeNnc1ua.js";import"./ListItemBaseTemplate-EzB1Pcdn.js";import"./Token-DaOKNidD.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6KE8nClO.js";import"./ToggleButton-kkVgC4NU.js";import"./SuggestionItem-CPdN0sMT.js";import"./index-B_kfaCxx.js";import"./Option-C5YcjUdy.js";import"./index-DqSD4c31.js";import"./SegmentedButton-C63M7we9.js";import"./index-DnPSE1-9.js";import"./Select-Z6SVspqY.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-c8qc4hiX.js";import"./useIsRTL-DuD9eh_M.js";import"./index-CXm15WPn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl7mXAP8.js";import"./group-2-Bj2HnCsV.js";import"./sort-descending-D3pMADc7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cbf0XwND.js";import"./utils-ISKKNPcb.js";import"./index-DX3S6mf8.js";import"./index-DLQMS65N.js";import"./index-CZT4M-ks.js";import"./navigation-down-arrow-DpGvha-M.js";import"./navigation-right-arrow-DB7Ib3_i.js";import"./navigation-right-arrow-BS0T2xtE.js";import"./useCurrentTheme-Cg8J5RkG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DJPITGZE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-pbKRJ5e0.js";import"./index-p95JEi1E.js";import"./less-B7nzovk5.js";import"./index-D-8goo6_.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
