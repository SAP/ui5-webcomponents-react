import{j as e}from"./iframe-BGSq42U4.js";import{useMDXComponents as o}from"./index-DdgODfaa.js";import{I as r,F as l}from"./CommandsAndQueries-DmG8Z04y.js";import{M as a,C as c}from"./blocks-DinJR8BJ.js";import"./Tag-DFLgZ7W6.js";import"./index-4G2XFF8s.js";import"./i18n-DCXZOGva.js";import"./copy-BkyD6IBJ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BW4qHHwC.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CFLPIYxg.js";import"./index-DeoM-MQY.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-Dv5XzTWy.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DFxK7J9H.js";import"./delete-Dzl_3hnA.js";import"./settings-D01zQ7hv.js";import"./NoData-DVRj1UWp.js";import"./IllustratedMessage-DGYeVb0O.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DnmQBk2g.js";import"./index-BHQkJQiK.js";import"./slim-arrow-down-DLcfp9eI.js";import"./Input-BCjEB6tM.js";import"./ResponsivePopoverCommon.css-C97v6xTI.js";import"./ValueStateMessage.css-c8cGQ3y8.js";import"./Suggestions.css-hBw8WfKI.js";import"./ListBoxItemGroupTemplate-O6bJScLD.js";import"./ComboBoxItemGroup-Cyw7FPb_.js";import"./ListItemBaseTemplate-DPLSdGuC.js";import"./Token-Bj-WnEM-.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9eXVr7n.js";import"./ToggleButton-lj5dY9Vv.js";import"./SuggestionItem-e6p9a2qW.js";import"./index-CuzQn-ym.js";import"./Option-De9cvay_.js";import"./index-DsX1x0Cs.js";import"./SegmentedButton-Bs-9-uNd.js";import"./index-Bd7g7Uhh.js";import"./Select-s6cC4PfQ.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-tJmQ7xBW.js";import"./useIsRTL-UmUMTfkT.js";import"./index-BDRoTd8f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pKZg5tZw.js";import"./group-2-OlKOx7kW.js";import"./sort-descending-DZbNeaMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b3CRpkDf.js";import"./utils-BXniIs5V.js";import"./index-DV8x_VUY.js";import"./index-Bl0D5g66.js";import"./index-DHNxxH0D.js";import"./navigation-down-arrow-7ufWXDu9.js";import"./navigation-right-arrow-DL470iX4.js";import"./navigation-right-arrow-CLB8HeYS.js";import"./useCurrentTheme-CNFGjYI-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4kj3IR9.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BihcXvWE.js";import"./index-CMcW5V3Y.js";import"./less-Cr_OeLu9.js";import"./index-CJYJTirV.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
