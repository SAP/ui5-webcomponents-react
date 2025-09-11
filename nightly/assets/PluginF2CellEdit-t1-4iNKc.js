import{j as e}from"./iframe-BVTjwwa8.js";import{useMDXComponents as o}from"./index-B7X7f4OL.js";import{I as r,F as l}from"./CommandsAndQueries-BxY3Aj9d.js";import{M as a,C as c}from"./blocks-eGiRc96Y.js";import"./Tag-Dd2A7Fyt.js";import"./index-CMlRFogN.js";import"./copy-B0_44_hm.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CGXLTMGM.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./index-B1gqswNl.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc-12NMD.js";import"./delete-CGtcDoe_.js";import"./settings-hVUhtZ6y.js";import"./NoData-DS35pzTF.js";import"./IllustratedMessage-x4VOj4Pw.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CNPrt5Xv.js";import"./index-BgpeKNsm.js";import"./slim-arrow-down-q0ei8TSg.js";import"./Input-co8T_wRa.js";import"./ResponsivePopoverCommon.css-CTpWDnyD.js";import"./ValueStateMessage.css-CklfWixh.js";import"./Suggestions.css-BFFNt1YV.js";import"./ListBoxItemGroupTemplate-BOi0kYXq.js";import"./ComboBoxItemGroup-DZ2t_1kl.js";import"./ListItemBaseTemplate-00D3SYn4.js";import"./Token-BTANNLIp.js";import"./ScrollEnablement-X9DTHKIv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BAXagnCs.js";import"./ToggleButton-B5voNYUw.js";import"./SuggestionItem-B50m8Gyh.js";import"./index-Jz8t2dvI.js";import"./Option-C1Pj2e5b.js";import"./index-D6BPa1_b.js";import"./SegmentedButton-CTr1olLB.js";import"./index-BhAe3Aw_.js";import"./Select-B4alDdu-.js";import"./InvisibleMessage-CETvZCdD.js";import"./slim-arrow-down-CbdcQMCz.js";import"./useIsRTL-D_4xzLEe.js";import"./index-DPurakIR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YUeSfDda.js";import"./group-2-B2FfwC3o.js";import"./sort-descending-DrsjlcI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BR2ycD-b.js";import"./utils-CHjabxlG.js";import"./index-ugx_8wyU.js";import"./index-CFjQC8Rl.js";import"./index-wRcNlb_M.js";import"./navigation-down-arrow-TGu9KNhG.js";import"./navigation-right-arrow-CvYYllXN.js";import"./navigation-right-arrow-CiN3ZT4_.js";import"./useCurrentTheme-DACJQMB7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Scuc8kwA.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BE9i310R.js";import"./index-DQgqs36o.js";import"./less-DrAJ6UF0.js";import"./index-CAZ62WrL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
