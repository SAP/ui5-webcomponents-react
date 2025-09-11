import{j as e}from"./iframe-7wbn2r8t.js";import{useMDXComponents as o}from"./index-9iabKYe6.js";import{I as r,F as l}from"./CommandsAndQueries-ByqqJAkO.js";import{M as a,C as c}from"./blocks-DhPDsuAg.js";import"./Tag-B4Xu1fg_.js";import"./index-BbDQ_pma.js";import"./copy-BfB9wT2Y.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bdiu9tfa.js";import"./preload-helper-D9Z9MdNV.js";import"./index--oRJYcmq.js";import"./index-s9oyD4rV.js";import"./index-BXziIIti.js";import"./Link-CMqhXbfj.js";import"./addCustomCSSWithScoping-DOSmtfkU.js";import"./index-BcN9ZXV0.js";import"./index-B507ER4a.js";import"./index-DZM58baw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_u8Wshbe.js";import"./index-C5gTJ--F.js";import"./information-C3oesKbG.js";import"./sys-enter-2-5KLli2cX.js";import"./alert-BzwIc2o-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BnpF3OjW.js";import"./delete-Ctx4N0z9.js";import"./settings-4HzKKwXX.js";import"./NoData-BGxQDSSr.js";import"./IllustratedMessage-BveZRVBp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-zGaMdUH3.js";import"./index-CiCpUwzE.js";import"./slim-arrow-down-C49SaQEq.js";import"./Input-Sgf07TzX.js";import"./ResponsivePopoverCommon.css-C1IHs2uD.js";import"./ValueStateMessage.css-CaopdH9_.js";import"./Suggestions.css-DMTVnUhn.js";import"./ListBoxItemGroupTemplate-Cb4Xv0to.js";import"./ComboBoxItemGroup-BWtkqgMg.js";import"./ListItemBaseTemplate-D6zjfr9k.js";import"./Token-Cu1MDCvr.js";import"./ScrollEnablement-kUlDPclg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrLRAdo-.js";import"./ToggleButton-BWZvQxgb.js";import"./SuggestionItem-CQkQpe1M.js";import"./index-KzyioWg5.js";import"./Option-De8jxf-d.js";import"./index-CpHbzBAu.js";import"./SegmentedButton-DKw5tI_q.js";import"./index-B-j5vbZe.js";import"./Select-BNT7lrvG.js";import"./InvisibleMessage-TncjdQHo.js";import"./slim-arrow-down-OAr_tlQh.js";import"./useIsRTL-nMUuowmY.js";import"./index-DSDAeY17.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BukLYmJB.js";import"./group-2-CHK1-mKL.js";import"./sort-descending-ChAbIeqL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gSj6aK_G.js";import"./utils-BN-TBOgu.js";import"./index-DiRW6kuR.js";import"./index-BATSsTSG.js";import"./index-CYxXsDl5.js";import"./navigation-down-arrow-K_Q8K4Ef.js";import"./navigation-right-arrow-DESaq310.js";import"./navigation-right-arrow-BqhA1WvG.js";import"./useCurrentTheme-B4pThhTq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B2zVBKfY.js";import"./debounce-D7W5PopO.js";import"./paper-plane-Ci72_7Om.js";import"./index-ChzhF-e0.js";import"./less-CTlI8kUp.js";import"./index-BW3VTEXK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
