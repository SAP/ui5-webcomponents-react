import{j as e}from"./iframe-D3WSfxnn.js";import{useMDXComponents as o}from"./index-INJaxUMc.js";import{I as r,F as l}from"./CommandsAndQueries-D0ehjJEo.js";import{M as a,C as c}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import"./i18n-DSpjDgSK.js";import"./copy-B0_WxO9i.js";import{F as s}from"./AnalyticalTableHooks.stories-F9P0BTGQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./index-BE0SODKX.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrnqMKPi.js";import"./delete-BOOuxbhQ.js";import"./settings-hCaP1_GJ.js";import"./NoData-CzSG2uvu.js";import"./IllustratedMessage-e0afxEz1.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6Yag-te.js";import"./index-DcN6Dcc5.js";import"./slim-arrow-down-D_XXp54g.js";import"./Input-B9Qhqcw-.js";import"./ResponsivePopoverCommon.css-CzEId8c-.js";import"./ValueStateMessage.css-DLLVegXt.js";import"./Suggestions.css-D771cyV0.js";import"./ListBoxItemGroupTemplate-Q3iFpAHb.js";import"./ComboBoxItemGroup-I1Y4Diaq.js";import"./ListItemBaseTemplate-D7zjd4B6.js";import"./Token-qJoofch3.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCfXaiqR.js";import"./ToggleButton-D2RCjgKZ.js";import"./SuggestionItem-CdqfJZ2k.js";import"./index-D2MDw8cl.js";import"./Option-DfeLnjsk.js";import"./index-CGCoEsnV.js";import"./SegmentedButton-C6mK86yp.js";import"./index-CXFDuLDf.js";import"./Select-Dls2nJby.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-2dqIAvum.js";import"./useIsRTL--4BOzxXK.js";import"./index-BqBHLTfL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrvNwjX5.js";import"./group-2-1PtLqjqY.js";import"./sort-descending-BY2QDSVP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZS191o9.js";import"./utils-BE8JeYQm.js";import"./index-DmfYB8pY.js";import"./index-u0S8NHsG.js";import"./index-B-8PQZmL.js";import"./navigation-down-arrow-L5mmSN-n.js";import"./navigation-right-arrow-6g9z3Q1C.js";import"./navigation-right-arrow-DwFbgTQb.js";import"./useCurrentTheme-DqJthjPR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BX7Usk7V.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BCqncAXY.js";import"./index-DP832n5M.js";import"./less-BJ0P-Kzq.js";import"./index-B_jwusFd.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
