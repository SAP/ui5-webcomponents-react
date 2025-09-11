import{j as e}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as o}from"./index-DCsMWBUP.js";import{I as r,F as l}from"./CommandsAndQueries-Bz3F9tKI.js";import{M as a,C as c}from"./blocks-CGoS-OC2.js";import"./Tag-2V4Q7cMJ.js";import"./index-DFbKywCe.js";import"./copy-BvP7Hkk1.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ws7CvZMJ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";import"./index-DCNonR1q.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-cGyrzAN1.js";import"./delete-CEbQnwVY.js";import"./settings-0sZ4vR_e.js";import"./NoData-AIWXEfE_.js";import"./IllustratedMessage--GJcosdL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-hCMtoJ2P.js";import"./index-C86E5BTJ.js";import"./slim-arrow-down-BjQZQ0VY.js";import"./Input-CZb4w-Dm.js";import"./ResponsivePopoverCommon.css-IrjJke8_.js";import"./ValueStateMessage.css-Dy_ka0k-.js";import"./Suggestions.css-BdLTlAML.js";import"./ListBoxItemGroupTemplate-Hdt3xH6E.js";import"./ComboBoxItemGroup-bCOIMKds.js";import"./ListItemBaseTemplate-BTk6gcZh.js";import"./Token-B4PghaA6.js";import"./ScrollEnablement-B7k2YzpG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKQU_WCZ.js";import"./ToggleButton-h3hY1eXi.js";import"./SuggestionItem-CQ_pYiq6.js";import"./index-Bxa3CdJQ.js";import"./Option-D9K8emav.js";import"./index-I1slxKzD.js";import"./SegmentedButton-CLk2pLzg.js";import"./index-CpXacsPc.js";import"./Select-CQh2SqHq.js";import"./InvisibleMessage-CCKau1XL.js";import"./slim-arrow-down-CqSn_OKe.js";import"./useIsRTL-CnnkiTdh.js";import"./index-DyEvwlhn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlXJbmnx.js";import"./group-2-D9iR7vnq.js";import"./sort-descending-BmXh_-bG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdK0W1ZZ.js";import"./utils-FgBaDTia.js";import"./index-DOWDpSnq.js";import"./index-Bz2uwFg5.js";import"./index-DEKh2kth.js";import"./navigation-down-arrow-DibqTE1y.js";import"./navigation-right-arrow-j4FtsvBh.js";import"./navigation-right-arrow-BmUGBCmb.js";import"./useCurrentTheme-BM5p9Se-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DF7tvuzv.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMiZOuWZ.js";import"./index-DwxEAMZ0.js";import"./less-DsihYSx8.js";import"./index-BuPb2eok.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
