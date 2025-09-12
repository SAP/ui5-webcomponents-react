import{j as e}from"./iframe-DQlP_6Qv.js";import{useMDXComponents as o}from"./index-BXhipMBG.js";import{I as r,F as l}from"./CommandsAndQueries-CYuC6yI9.js";import{M as a,C as c}from"./blocks-B5a3gZGW.js";import"./Tag-BSiRJmHh.js";import"./index-DhT04Xs9.js";import"./copy-DA6pIWgW.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CQH8SH2V.js";import"./preload-helper-D9Z9MdNV.js";import"./index-hxdHCcXn.js";import"./index-6SE_GYer.js";import"./index-DztBgCxB.js";import"./Link-CIr5Lw-F.js";import"./addCustomCSSWithScoping-DaYz7Ef_.js";import"./index-5WDw669T.js";import"./index-s0msSqUd.js";import"./index-CAD4wHAa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-Sr5qI6.js";import"./index-DMuVL8ZX.js";import"./information-D9TZ110a.js";import"./sys-enter-2-DbOIPJDN.js";import"./alert-Boy3zLsV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg-36jCJ.js";import"./delete-CaVxvXJa.js";import"./settings-B1bN6gcG.js";import"./NoData-muKAeLMq.js";import"./IllustratedMessage-CYlCH6F8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B40cHQKs.js";import"./index-BK0EaxBy.js";import"./slim-arrow-down-CQHD_BrB.js";import"./Input-BsxLpfsK.js";import"./ResponsivePopoverCommon.css-DATz21Vs.js";import"./ValueStateMessage.css-CWvBG_nx.js";import"./Suggestions.css-BXPHU2eP.js";import"./ListBoxItemGroupTemplate-DZUU3Xv_.js";import"./ComboBoxItemGroup-73LiHIaA.js";import"./ListItemBaseTemplate-CTjAjayV.js";import"./Token-Z5IU-j9x.js";import"./ScrollEnablement-6VGfabhp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGwXcYIH.js";import"./ToggleButton-DlSwnN6b.js";import"./SuggestionItem-D1wzJv1s.js";import"./index-rC-K7l_B.js";import"./Option-BNwYbhXx.js";import"./index-DorD7nUV.js";import"./SegmentedButton-BBymgHch.js";import"./index-D7ZHlrhm.js";import"./Select-BMnD9RhX.js";import"./InvisibleMessage-DX5nnJX3.js";import"./slim-arrow-down-Cwx3eZbB.js";import"./useIsRTL-0JvlMTKu.js";import"./index-sbxtCj2e.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-UXJ6vS.js";import"./group-2-BDo86s0K.js";import"./sort-descending-_vLqc138.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxTyPwah.js";import"./utils-C-s4mjI-.js";import"./index-BXfFluxG.js";import"./index-CYRJoMmx.js";import"./index-ChezfNZe.js";import"./navigation-down-arrow-DArtWA0U.js";import"./navigation-right-arrow-BqiGYNmk.js";import"./navigation-right-arrow-BWmOXN6t.js";import"./useCurrentTheme-C89Am9JT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5gEQmBVM.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BjsxesMZ.js";import"./index-B7bck6f6.js";import"./less-I7yd6AVT.js";import"./index-BwUsRFpl.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
