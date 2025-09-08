import{j as e}from"./iframe-L-onm66G.js";import{useMDXComponents as o}from"./index-B-8X1idt.js";import{I as r,F as l}from"./CommandsAndQueries-CjMnaUpZ.js";import{M as a,C as c}from"./blocks-CAXm6uro.js";import"./Tag-o6hxXhYX.js";import"./index-Dko-x7sv.js";import"./copy-CyGTlTXm.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B6a9T0HW.js";import"./preload-helper-D9Z9MdNV.js";import"./index-JuCVJ27S.js";import"./index-CQskOaEx.js";import"./index-CLaX2vCd.js";import"./Link-CoryH5zD.js";import"./addCustomCSSWithScoping-t6gTkkzF.js";import"./index-DT1EUYqc.js";import"./index-BHqaG8Gu.js";import"./index-ChEZQsiK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-TcA8Vj.js";import"./index-8n5QiMPz.js";import"./information-IlAVq7Cq.js";import"./sys-enter-2-CVLUP2WD.js";import"./alert-DwHKgn-N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1_8XGg8.js";import"./delete-BP7Y4W0Z.js";import"./settings-BSMVF4P8.js";import"./NoData-DnnW4MlD.js";import"./IllustratedMessage-CrIvOtjh.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BNsi7JET.js";import"./index-Ce5VAjSH.js";import"./slim-arrow-down-2tkvGwp5.js";import"./Input-nqzPZ96D.js";import"./ResponsivePopoverCommon.css-D-PzE_uD.js";import"./ValueStateMessage.css-BaFYLAgr.js";import"./Suggestions.css-D-XGNpUr.js";import"./ListBoxItemGroupTemplate-B6VO1di5.js";import"./ComboBoxItemGroup-DJNgoJAP.js";import"./ListItemBaseTemplate-DP9XcBYw.js";import"./Token-BVbFDKE3.js";import"./ScrollEnablement-KL0tx3I1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_8XW66x.js";import"./ToggleButton-DCwG-sk7.js";import"./SuggestionItem-DAuqasmm.js";import"./index-B9nLBvvk.js";import"./Option-BNL500vH.js";import"./index-CpL49Q8X.js";import"./SegmentedButton-BHylJxn3.js";import"./index-rpzDZ4-g.js";import"./Select-wICm3x2r.js";import"./InvisibleMessage-Cke9mTfM.js";import"./slim-arrow-down-CT86qGUz.js";import"./useIsRTL-DCVW4Rtb.js";import"./index-DktfzuQk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7JNINRu.js";import"./group-2-Chn_1rqX.js";import"./sort-descending-2FxNAz71.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BirFsVWW.js";import"./utils-D_L3Vszq.js";import"./index-Dvts4QuH.js";import"./index-CKeKsxlO.js";import"./index-0iYZ-1q5.js";import"./navigation-down-arrow-B6KjmG5s.js";import"./navigation-right-arrow-CESkN4Yn.js";import"./navigation-right-arrow-CV8pPszO.js";import"./useCurrentTheme-7RFsuHvO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CojyC1AK.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BSUczLtF.js";import"./index-lxUncTW2.js";import"./less-IYmAbgpg.js";import"./index-BJt60Esi.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
