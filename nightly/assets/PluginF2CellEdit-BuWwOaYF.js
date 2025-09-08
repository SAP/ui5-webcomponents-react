import{j as e}from"./iframe-Cmm295l6.js";import{useMDXComponents as o}from"./index-BXOSXmsP.js";import{I as r,F as l}from"./CommandsAndQueries-BP_0RozZ.js";import{M as a,C as c}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import"./copy-D4RoINZh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-dvFW3tl2.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./index-B2P7pH2V.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BOW3byXA.js";import"./delete-BpJ7jMu4.js";import"./settings-DfuIK5Du.js";import"./NoData-B9fBQ-2X.js";import"./IllustratedMessage-DMoUKb2N.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DyS6OgFp.js";import"./index-D9-J-CUh.js";import"./slim-arrow-down-BPs-5Hw-.js";import"./Input-CKOQVRzo.js";import"./ResponsivePopoverCommon.css-CuPlJ6XL.js";import"./ValueStateMessage.css-CpF9zfZB.js";import"./Suggestions.css-URl81ueP.js";import"./ListBoxItemGroupTemplate-BE6yQGK-.js";import"./ComboBoxItemGroup-ZNf2Vk0l.js";import"./ListItemBaseTemplate-CToCzb2R.js";import"./Token-DKJgf7x_.js";import"./ScrollEnablement-BWqjOtqg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSk0UJEE.js";import"./ToggleButton-zP3wC5RY.js";import"./SuggestionItem-Ct7jePU3.js";import"./index-Dpgfdfru.js";import"./Option-CXrrCfUx.js";import"./index-Ws9shfnM.js";import"./SegmentedButton-DjidyPv_.js";import"./index-D9kRi0IC.js";import"./Select-DRZNQuJi.js";import"./InvisibleMessage-BUQae6f9.js";import"./slim-arrow-down-iUDTzeiV.js";import"./useIsRTL-CEwtxJyB.js";import"./index-BzcZFawy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqgfgZAq.js";import"./group-2-DGba-0Tt.js";import"./sort-descending-Cv9BhC3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DynqqBp0.js";import"./utils-CxbvwC5_.js";import"./index-CJAzT50r.js";import"./index-CggMFlL9.js";import"./index-DIyb4d_p.js";import"./navigation-down-arrow-C11LdM0-.js";import"./navigation-right-arrow-B54lSWMn.js";import"./navigation-right-arrow--DddG-Qx.js";import"./useCurrentTheme-Q0o_lrzg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YJpka7ZF.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DQu_UXSp.js";import"./index-DL20h0zh.js";import"./less-CttwOBtS.js";import"./index-BtYSUoXS.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
