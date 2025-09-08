import{j as e}from"./iframe-C-EBr6B5.js";import{useMDXComponents as o}from"./index-CsHoO3vp.js";import{I as r,F as l}from"./CommandsAndQueries-uIAr-det.js";import{M as a,C as c}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import"./index-w0Ow44Ci.js";import"./i18n-DCXZOGva.js";import"./copy-u5h8VvvF.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CDszC7uY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./index-DPNnv8Bc.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNDB_VXd.js";import"./delete-BvdG4V2u.js";import"./settings-B9da7Cna.js";import"./NoData-Bas3NaNU.js";import"./IllustratedMessage-D13zaZV5.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ccf_YzUR.js";import"./index-BQ5w9LDa.js";import"./slim-arrow-down-BKqJdj1T.js";import"./Input-Ds_HDP4O.js";import"./ResponsivePopoverCommon.css-CDBYINKk.js";import"./ValueStateMessage.css-B0uL2WsG.js";import"./Suggestions.css-B3PqFbjl.js";import"./ListBoxItemGroupTemplate-Bgmdm98P.js";import"./ComboBoxItemGroup-BwZX_rcF.js";import"./ListItemBaseTemplate-DJJcj1Yn.js";import"./Token-BBpcnF43.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DX4UvhQJ.js";import"./ToggleButton-BFDFB0sm.js";import"./SuggestionItem-6ARptsb6.js";import"./index-C4mGZgek.js";import"./Option-CuwMUGFB.js";import"./index-Dc87r9fg.js";import"./SegmentedButton-Brturu3l.js";import"./index-C96_EYB_.js";import"./Select-CKUn7KVG.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-B8bLmGYi.js";import"./useIsRTL-DGcoN34w.js";import"./index-BIxje1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6YASDbP.js";import"./group-2-BAcCCF5C.js";import"./sort-descending-ClNXTwB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnrGkxIO.js";import"./utils-B-nKspCA.js";import"./index-C2uJtNkV.js";import"./index-B2hA18x8.js";import"./index-CDeu0SSK.js";import"./navigation-down-arrow-BhSnyc1Q.js";import"./navigation-right-arrow-t2mKxsw7.js";import"./navigation-right-arrow-JtMK9OsX.js";import"./useCurrentTheme-DANdzbsK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWVlJWaR.js";import"./debounce-D7W5PopO.js";import"./paper-plane-C05qekUe.js";import"./index-DOZflY0X.js";import"./less-DrtzVZnk.js";import"./index-DTEtvo1o.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
